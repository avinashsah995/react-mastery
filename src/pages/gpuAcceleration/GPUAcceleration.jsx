import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react"; // Changed from "motion/react" to "framer-motion"
import { IoIosArrowBack } from "react-icons/io";
import { FaRocket, FaMicrochip, FaLayerGroup, FaExclamationTriangle } from "react-icons/fa";
import "./gpu-acceleration.css";

const GPUAcceleration = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [cpuPosition, setCpuPosition] = useState(0);
    const [gpuPosition, setGpuPosition] = useState(0);
    const requestRef = useRef();

    const animate = () => {
        const speed = 2;
        const maxDistance = 300; // Approximate width of container

        setCpuPosition(prev => {
            const next = prev + speed;
            return next > maxDistance ? 0 : next;
        });

        setGpuPosition(prev => {
            const next = prev + speed;
            return next > maxDistance ? 0 : next;
        });

        requestRef.current = requestAnimationFrame(animate);
    };

    const toggleAnimation = () => {
        if (isAnimating) {
            cancelAnimationFrame(requestRef.current);
        } else {
            requestRef.current = requestAnimationFrame(animate);
        }
        setIsAnimating(!isAnimating);
    };

    useEffect(() => {
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    const benefits = [
        {
            emoji: "🚀",
            title: "Hardware Acceleration",
            description: "Offload visual rendering tasks to the GPU, which is optimized for graphics."
        },
        {
            emoji: "✨",
            title: "Smoother Animations",
            description: "Achieve 60fps animations by avoiding main-thread layout calculations."
        },
        {
            emoji: "🔋",
            title: "Better Battery Life",
            description: "More efficient processing means less power consumption for mobile devices."
        },
        {
            emoji: "📱",
            title: "Mobile Optimized",
            description: "Critical for mobile performance where CPU resources are limited."
        }
    ];

    return (
        <motion.div
            className="gpu-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="gpu-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #f43f5e, #fb7185)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        GPU Acceleration
                    </h2>
                    <p className="header-subtitle">Supercharge rendering with hardware acceleration</p>
                </div>
            </div>

            <motion.div
                className="gpu-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaRocket style={{ color: '#f43f5e' }} /> Why GPU Acceleration?</h3>
                <p>
                    Modern browsers can offload certain visual tasks to the Graphics Processing Unit (GPU).
                    When you use properties like <code>transform</code> and <code>opacity</code>, the browser
                    can promote elements to their own "layer" and handle changes on the compositor thread,
                    bypassing the busy main thread.
                </p>
                <p>
                    In contrast, changing properties like <code>left</code>, <code>top</code>, <code>width</code>,
                    or <code>margin</code> forces the browser to recalculate the layout (Reflow) and repaint
                    pixels (Repaint) on every frame, which is computationally expensive and causes jank.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>
                🎯 Interactive Comparison
            </h3>

            <div className="demo-container">
                <motion.div
                    className="demo-box cpu"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="demo-header">
                        <FaExclamationTriangle style={{ color: '#ef4444' }} />
                        CPU Animation (Layout)
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '16px' }}>
                        Animating <code>left</code> property triggers Layout + Paint.
                    </p>

                    <div className="animation-area">
                        <div
                            className="moving-box"
                            style={{
                                left: `${cpuPosition}px`,
                                // Explicitly NOT using transform
                            }}
                        >
                            🐌
                        </div>
                    </div>

                    <div className="metrics-display">
                        <div className="metric-row">
                            <span>Pipeline:</span>
                            <span className="gpu--metric-value" style={{ color: '#ef4444' }}>Layout → Paint → Composite</span>
                        </div>
                        <div className="metric-row">
                            <span>Thread:</span>
                            <span className="gpu--metric-value">Main Thread (Busy)</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="demo-box gpu"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="demo-header">
                        <FaMicrochip style={{ color: '#22c55e' }} />
                        GPU Animation (Composite)
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '16px' }}>
                        Animating <code>transform</code> handles Composite only.
                    </p>

                    <div className="animation-area">
                        <div
                            className="moving-box"
                            style={{
                                transform: `translate3d(${gpuPosition}px, 0, 0)`,
                                willChange: 'transform'
                            }}
                        >
                            ⚡
                        </div>
                    </div>

                    <div className="metrics-display">
                        <div className="metric-row">
                            <span>Pipeline:</span>
                            <span className="gpu--metric-value" style={{ color: '#22c55e' }}>Composite Only</span>
                        </div>
                        <div className="metric-row">
                            <span>Thread:</span>
                            <span className="gpu--metric-value">Compositor Thread</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                <button
                    className={`control-btn ${isAnimating ? 'cpu-btn' : 'gpu-btn'}`}
                    style={{ maxWidth: '300px' }}
                    onClick={toggleAnimation}
                >
                    {isAnimating ? 'Stop Animation' : 'Start Comparison'}
                </button>
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

            <motion.div
                className="gpu-intro"
                style={{ marginTop: '32px', borderColor: 'rgba(59, 130, 246, 0.3)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <h3><FaLayerGroup style={{ color: '#3b82f6' }} /> How to Enable GPU Acceleration</h3>
                <p>
                    Browsers automatically promote elements to their own layer when you use specific CSS properties.
                    You can also hint to the browser using the <code>will-change</code> property.
                </p>
                <div style={{
                    background: 'rgba(0,0,0,0.3)',
                    padding: '16px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    marginTop: '12px',
                    color: '#e2e8f0'
                }}>
                    .accelerated-element &#123;<br />
                    &nbsp;&nbsp;transform: translate3d(0, 0, 0); /* Hack to force layer */<br />
                    &nbsp;&nbsp;/* OR */<br />
                    &nbsp;&nbsp;will-change: transform; /* Modern way */<br />
                    &#125;
                </div>
            </motion.div>
        </motion.div>
    );
};

export default GPUAcceleration;
