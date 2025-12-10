import { useState } from "react";
import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaCog, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import "./web-workers.css";

const WebWorkers = () => {
    const [mainThreadResult, setMainThreadResult] = useState("Click to calculate");
    const [workerResult, setWorkerResult] = useState("Click to calculate");
    const [mainThreadStatus, setMainThreadStatus] = useState("ready");
    const [workerStatus, setWorkerStatus] = useState("ready");

    // Heavy computation - find nth prime number
    const findNthPrime = (n) => {
        let count = 0;
        let num = 2;
        while (count < n) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) count++;
            if (count < n) num++;
        }
        return num;
    };

    const handleMainThreadCalculation = () => {
        setMainThreadStatus("computing");
        setMainThreadResult("Computing...");

        // Force a synchronous render before blocking
        setTimeout(() => {
            // This BLOCKS the main thread synchronously!
            const result = findNthPrime(500000);
            setMainThreadResult(`${result.toLocaleString()}`);
            setMainThreadStatus("ready");
        }, 100); // Small delay to let UI update first
    };

    const handleWorkerCalculation = () => {
        setWorkerStatus("computing");
        setWorkerResult("Computing...");

        // Create inline worker using Blob
        const workerCode = `
            self.onmessage = function(e) {
                const n = e.data;
                let count = 0;
                let num = 2;
                while (count < n) {
                    let isPrime = true;
                    for (let i = 2; i <= Math.sqrt(num); i++) {
                        if (num % i === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime) count++;
                    if (count < n) num++;
                }
                self.postMessage(num);
            };
        `;

        const blob = new Blob([workerCode], { type: 'application/javascript' });
        const worker = new Worker(URL.createObjectURL(blob));

        worker.onmessage = (e) => {
            setWorkerResult(`${e.data.toLocaleString()}`);
            setWorkerStatus("ready");
            worker.terminate();
        };

        worker.postMessage(500000);
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
            <div className="web-workers-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #22c55e, #4ade80)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Web Workers
                    </h2>
                    <p className="header-subtitle">Run scripts in background threads for better performance</p>
                </div>
            </div>

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
                🎯 Interactive Demo: Prime Number Calculator
            </h3>

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

                    <div className="control-section">
                        <button
                            className="calc-button"
                            onClick={handleMainThreadCalculation}
                            disabled={mainThreadStatus === "computing"}
                        >
                            {mainThreadStatus === "computing" ? "Computing..." : "Calculate 500,000th Prime"}
                        </button>
                    </div>

                    <div className="ui-test">
                        <div className="ui-test-label">
                            UI Responsiveness Test (try clicking while computing):
                        </div>
                        <div className="animated-box">
                            Animated Box
                        </div>
                    </div>

                    <div className="result-panel">
                        <div className="result-label">Result:</div>
                        <div className="result-value">{mainThreadResult}</div>
                        <div className={`status-indicator ${mainThreadStatus}`}>
                            <span className={`status-dot ${mainThreadStatus}`}></span>
                            {mainThreadStatus === "computing" ? "UI Frozen!" : "Ready"}
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

                    <div className="control-section">
                        <button
                            className="calc-button worker-btn"
                            onClick={handleWorkerCalculation}
                            disabled={workerStatus === "computing"}
                        >
                            {workerStatus === "computing" ? "Computing..." : "Calculate 500,000th Prime"}
                        </button>
                    </div>

                    <div className="ui-test">
                        <div className="ui-test-label">
                            UI Responsiveness Test (animation continues):
                        </div>
                        <div className="animated-box">
                            Animated Box
                        </div>
                    </div>

                    <div className="result-panel">
                        <div className="result-label">Result:</div>
                        <div className="result-value">{workerResult}</div>
                        <div className={`status-indicator ${workerStatus}`}>
                            <span className={`status-dot ${workerStatus}`}></span>
                            {workerStatus === "computing" ? "Computing in Background" : "Ready"}
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