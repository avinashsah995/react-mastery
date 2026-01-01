import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import PageHeader from "../../components/PageHeader";
import { FaCog, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import "./web-workers.css";

const WebWorkers = () => {
    const [mainThreadStatus, setMainThreadStatus] = useState("ready");
    const [workerStatus, setWorkerStatus] = useState("ready");
    const [mainThreadTime, setMainThreadTime] = useState(null);
    const [workerTime, setWorkerTime] = useState(null);

    const mainCanvasRef = useRef(null);
    const workerCanvasRef = useRef(null);
    const originalImageDataRef = useRef(null);

    // Generate a colorful pattern on canvas
    useEffect(() => {
        const generateImage = (canvas) => {
            const ctx = canvas.getContext('2d');
            const width = canvas.width;
            const height = canvas.height;

            // Create a gradient background
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(0.5, '#764ba2');
            gradient.addColorStop(1, '#f093fb');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Add some shapes
            for (let i = 0; i < 20; i++) {
                ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`;
                ctx.beginPath();
                ctx.arc(
                    Math.random() * width,
                    Math.random() * height,
                    20 + Math.random() * 40,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            }

            // Add text
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Sample Image', width / 2, height / 2);
        };

        if (mainCanvasRef.current && workerCanvasRef.current) {
            generateImage(mainCanvasRef.current);
            generateImage(workerCanvasRef.current);

            // Store original image data
            const ctx = mainCanvasRef.current.getContext('2d');
            originalImageDataRef.current = ctx.getImageData(
                0, 0,
                mainCanvasRef.current.width,
                mainCanvasRef.current.height
            );
        }
    }, []);

    // Reset canvas to original image
    const resetCanvas = (canvas) => {
        if (originalImageDataRef.current) {
            const ctx = canvas.getContext('2d');
            ctx.putImageData(originalImageDataRef.current, 0, 0);
        }
    };

    // Apply blur filter (CPU intensive operation)
    const applyBlur = (imageData, radius = 5) => {
        const pixels = imageData.data;
        const width = imageData.width;
        const height = imageData.height;
        const output = new Uint8ClampedArray(pixels);

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let r = 0, g = 0, b = 0, count = 0;

                for (let ky = -radius; ky <= radius; ky++) {
                    for (let kx = -radius; kx <= radius; kx++) {
                        const px = x + kx;
                        const py = y + ky;

                        if (px >= 0 && px < width && py >= 0 && py < height) {
                            const idx = (py * width + px) * 4;
                            r += pixels[idx];
                            g += pixels[idx + 1];
                            b += pixels[idx + 2];
                            count++;
                        }
                    }
                }

                const idx = (y * width + x) * 4;
                output[idx] = r / count;
                output[idx + 1] = g / count;
                output[idx + 2] = b / count;
            }
        }

        for (let i = 0; i < pixels.length; i++) {
            imageData.data[i] = output[i];
        }

        return imageData;
    };

    const handleMainThreadProcessing = () => {
        setMainThreadStatus("processing");
        setMainThreadTime(null);
        resetCanvas(mainCanvasRef.current);

        const startTime = performance.now();

        // Small timeout to allow UI to update
        setTimeout(() => {
            const ctx = mainCanvasRef.current.getContext('2d');
            const imageData = ctx.getImageData(
                0, 0,
                mainCanvasRef.current.width,
                mainCanvasRef.current.height
            );

            // This BLOCKS the main thread!
            const blurred = applyBlur(imageData, 8);
            ctx.putImageData(blurred, 0, 0);

            const endTime = performance.now();
            setMainThreadTime(Math.round(endTime - startTime));
            setMainThreadStatus("ready");
        }, 50);
    };

    const handleWorkerProcessing = () => {
        setWorkerStatus("processing");
        setWorkerTime(null);
        resetCanvas(workerCanvasRef.current);

        const startTime = performance.now();
        const ctx = workerCanvasRef.current.getContext('2d');
        const imageData = ctx.getImageData(
            0, 0,
            workerCanvasRef.current.width,
            workerCanvasRef.current.height
        );

        // Create inline worker
        const workerCode = `
            self.onmessage = function(e) {
                const { imageData, radius } = e.data;
                const pixels = imageData.data;
                const width = imageData.width;
                const height = imageData.height;
                const output = new Uint8ClampedArray(pixels);

                for (let y = 0; y < height; y++) {
                    for (let x = 0; x < width; x++) {
                        let r = 0, g = 0, b = 0, count = 0;

                        for (let ky = -radius; ky <= radius; ky++) {
                            for (let kx = -radius; kx <= radius; kx++) {
                                const px = x + kx;
                                const py = y + ky;

                                if (px >= 0 && px < width && py >= 0 && py < height) {
                                    const idx = (py * width + px) * 4;
                                    r += pixels[idx];
                                    g += pixels[idx + 1];
                                    b += pixels[idx + 2];
                                    count++;
                                }
                            }
                        }

                        const idx = (y * width + x) * 4;
                        output[idx] = r / count;
                        output[idx + 1] = g / count;
                        output[idx + 2] = b / count;
                    }
                }

                for (let i = 0; i < pixels.length; i++) {
                    imageData.data[i] = output[i];
                }

                self.postMessage({ imageData });
            };
        `;

        const blob = new Blob([workerCode], { type: 'application/javascript' });
        const worker = new Worker(URL.createObjectURL(blob));

        worker.onmessage = (e) => {
            ctx.putImageData(e.data.imageData, 0, 0);
            const endTime = performance.now();
            setWorkerTime(Math.round(endTime - startTime));
            setWorkerStatus("ready");
            worker.terminate();
        };

        worker.postMessage({ imageData, radius: 8 });
    };

    const benefits = [
        {
            emoji: "🚀",
            title: "Non-Blocking UI",
            description: "Keep your UI responsive while performing heavy computations in the background."
        },
        {
            emoji: "⚡",
            title: "Parallel Processing",
            description: "Utilize multiple CPU cores for true parallel execution of tasks."
        },
        {
            emoji: "🎯",
            title: "Better UX",
            description: "Users can continue interacting with your app while tasks process."
        },
        {
            emoji: "📊",
            title: "Performance Boost",
            description: "Offload intensive tasks to avoid freezing the main thread."
        }
    ];

    const useCases = [
        {
            icon: "🖼️",
            title: "Image Processing",
            description: "Apply filters, resize, or manipulate images without blocking the UI."
        },
        {
            icon: "📈",
            title: "Data Analytics",
            description: "Process large datasets, sorting, filtering, and aggregating data efficiently."
        },
        {
            icon: "🔐",
            title: "Encryption/Hashing",
            description: "Perform cryptographic operations without impacting user experience."
        },
        {
            icon: "🎮",
            title: "Game Physics",
            description: "Calculate complex physics simulations in background threads."
        }
    ];

    return (
        <motion.div
            className="web-workers-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="Web Workers"
                subtitle="Run scripts in background threads for better performance"
                titleGradient="linear-gradient(to right, #22c55e, #4ade80)"
                className="web-workers-header"
            />

            <motion.div
                className="workers-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaCog style={{ color: '#22c55e' }} /> What are Web Workers?</h3>
                <p>
                    Web Workers allow you to run JavaScript in background threads, separate from the main execution
                    thread of your web application. This means you can perform computationally expensive operations
                    without blocking the user interface, keeping your application responsive and smooth.
                </p>
                <p>
                    When heavy computations run on the main thread, they can freeze the UI, making buttons
                    unresponsive and animations janky. Web Workers solve this by offloading these tasks to separate
                    threads, enabling true parallel processing in the browser.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>
                🎯 Interactive Demo: Image Blur Filter
            </h3>
            <p style={{ color: '#94a3b8', marginBottom: '24px', fontSize: '0.95rem' }}>
                Try clicking the buttons below and notice the animated box. The main thread version will freeze the UI,
                while the Web Worker keeps everything smooth!
            </p>

            <div className="demo-comparison">
                <motion.div
                    className="demo-box main-thread"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="demo-header">
                        <FaExclamationTriangle style={{ color: '#eab308' }} />
                        Main Thread (UI Freezes)
                    </div>

                    <div className="canvas-container">
                        <canvas
                            ref={mainCanvasRef}
                            width="300"
                            height="200"
                            className="image-canvas"
                        />
                    </div>

                    <div className="control-section">
                        <button
                            className="calc-button"
                            onClick={handleMainThreadProcessing}
                            disabled={mainThreadStatus === "processing"}
                        >
                            {mainThreadStatus === "processing" ? "Applying Filter..." : "Apply Blur Filter"}
                        </button>
                    </div>

                    <div className="ui-test">
                        <div className="ui-test-label">
                            UI Test (try hovering while processing):
                        </div>
                        <div className="animated-box">
                            Hover Me!
                        </div>
                    </div>

                    <div className="result-panel">
                        <div className="result-label">Processing Time:</div>
                        <div className="result-value">
                            {mainThreadTime ? `${mainThreadTime}ms` : "—"}
                        </div>
                        <div className={`status-indicator ${mainThreadStatus}`}>
                            <span className={`status-dot ${mainThreadStatus}`}></span>
                            {mainThreadStatus === "processing" ? "UI Frozen! 🔴" : "Ready ✅"}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="demo-box worker-thread"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="demo-header">
                        <FaCheckCircle style={{ color: '#22c55e' }} />
                        Web Worker (UI Stays Responsive)
                    </div>

                    <div className="canvas-container">
                        <canvas
                            ref={workerCanvasRef}
                            width="300"
                            height="200"
                            className="image-canvas"
                        />
                    </div>

                    <div className="control-section">
                        <button
                            className="calc-button worker-btn"
                            onClick={handleWorkerProcessing}
                            disabled={workerStatus === "processing"}
                        >
                            {workerStatus === "processing" ? "Applying Filter..." : "Apply Blur Filter"}
                        </button>
                    </div>

                    <div className="ui-test">
                        <div className="ui-test-label">
                            UI Test (animation continues smoothly):
                        </div>
                        <div className="animated-box">
                            Hover Me!
                        </div>
                    </div>

                    <div className="result-panel">
                        <div className="result-label">Processing Time:</div>
                        <div className="result-value">
                            {workerTime ? `${workerTime}ms` : "—"}
                        </div>
                        <div className={`status-indicator ${workerStatus}`}>
                            <span className={`status-dot ${workerStatus}`}></span>
                            {workerStatus === "processing" ? "Computing in Background 🟢" : "Ready ✅"}
                        </div>
                    </div>
                </motion.div>
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>
                ✨ Key Benefits
            </h3>

            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        className="benefit-item"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                    >
                        <div className="benefit-emoji">{benefit.emoji}</div>
                        <div className="benefit-name">{benefit.title}</div>
                        <div className="benefit-desc">{benefit.description}</div>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>
                💡 Common Use Cases
            </h3>

            <div className="use-cases-list">
                {useCases.map((useCase, index) => (
                    <motion.div
                        key={useCase.title}
                        className="use-case-item"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                    >
                        <div className="use-case-header">
                            <span className="use-case-icon">{useCase.icon}</span>
                            <span className="use-case-title">{useCase.title}</span>
                        </div>
                        <div className="use-case-description">{useCase.description}</div>
                    </motion.div>
                ))}
            </div>

            <div className="stats-display">
                <motion.div
                    className="stat-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="stat-number">100%</div>
                    <div className="stat-text">UI Responsiveness</div>
                </motion.div>
                <motion.div
                    className="stat-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <div className="stat-number">4x</div>
                    <div className="stat-text">Faster Processing</div>
                </motion.div>
                <motion.div
                    className="stat-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="stat-number">60fps</div>
                    <div className="stat-text">Maintained Frame Rate</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WebWorkers;