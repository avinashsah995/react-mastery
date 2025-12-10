import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaBolt, FaCheckCircle } from "react-icons/fa";
import "./preloading.css";

const Preloading = () => {
    const preloadTypes = [
        {
            emoji: "⚡",
            name: "preload",
            description: "High-priority loading for critical resources needed immediately.",
            code: '<link rel="preload" href="font.woff2" as="font">'
        },
        {
            emoji: "🔮",
            name: "prefetch",
            description: "Low-priority loading for resources likely needed for next navigation.",
            code: '<link rel="prefetch" href="next-page.js">'
        },
        {
            emoji: "🌐",
            name: "dns-prefetch",
            description: "Resolve DNS lookups for external domains ahead of time.",
            code: '<link rel="dns-prefetch" href="//api.example.com">'
        },
        {
            emoji: "🔗",
            name: "preconnect",
            description: "Establish early connections to important third-party origins.",
            code: '<link rel="preconnect" href="https://fonts.googleapis.com">'
        }
    ];

    const withoutPreload = [
        { step: "User clicks link", delay: "0ms" },
        { step: "HTML downloads", delay: "200ms" },
        { step: "Parse HTML", delay: "50ms" },
        { step: "Discover font", delay: "0ms" },
        { step: "Download font", delay: "300ms" },
        { step: "Render text", delay: "550ms total" }
    ];

    const withPreload = [
        { step: "User clicks link", delay: "0ms" },
        { step: "HTML + Font download in parallel", delay: "200ms" },
        { step: "Parse HTML", delay: "50ms" },
        { step: "Render text immediately", delay: "250ms total" }
    ];

    const bestPractices = [
        {
            icon: "🎯",
            title: "Preload Critical Assets",
            description: "Use preload for fonts, critical CSS, and above-the-fold images that are needed immediately."
        },
        {
            icon: "🚫",
            title: "Don't Overuse",
            description: "Only preload resources you know will be used. Too many preloads can hurt performance."
        },
        {
            icon: "📊",
            title: "Monitor Performance",
            description: "Use Chrome DevTools Network panel to verify preloaded resources are actually used."
        },
        {
            icon: "🔄",
            title: "Prefetch Next Page",
            description: "Prefetch resources for likely next pages during idle time to speed up navigation."
        }
    ];

    return (
        <motion.div
            className="preloading-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="preloading-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #f97316, #fb923c)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Preloading & Resource Hints
                    </h2>
                    <p className="header-subtitle">Load critical resources faster with browser hints</p>
                </div>
            </div>

            <motion.div
                className="preload-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaBolt style={{ color: '#f97316' }} /> What is Preloading?</h3>
                <p>
                    Preloading is a browser optimization technique that allows you to declare which resources your page
                    will need early in the page load process, before the browser's main rendering mechanism kicks in.
                    By informing the browser about critical resources ahead of time, you can significantly improve
                    perceived performance and user experience.
                </p>
                <p>
                    Resource hints like preload, prefetch, dns-prefetch, and preconnect give the browser instructions
                    on how to prioritize and fetch resources, reducing wait times and eliminating render-blocking delays.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🔧 Resource Hint Types</h3>

            <div className="preload-types">
                {preloadTypes.map((type, index) => (
                    <motion.div
                        key={type.name}
                        className="type-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <div className="type-header">
                            <span className="type-emoji">{type.emoji}</span>
                            <span className="type-name">{type.name}</span>
                        </div>
                        <p className="type-description">{type.description}</p>
                        <div className="type-code">{type.code}</div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="timeline-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <h3 style={{ color: 'var(--text-color)', marginBottom: '8px' }}>⏱️ Loading Timeline Comparison</h3>
                <p style={{ color: '#94a3b8', marginBottom: '16px' }}>
                    See how preloading reduces the time to render critical content:
                </p>

                <div className="timeline-comparison">
                    <div className="timeline-item">
                        <div className="timeline-title">❌ Without Preload</div>
                        <div className="timeline-steps">
                            {withoutPreload.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="timeline-step"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                >
                                    <div className="step-number">{index + 1}</div>
                                    <div className="step-text">
                                        {item.step} <span style={{ color: '#ef4444' }}>({item.delay})</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-title">✅ With Preload</div>
                        <div className="timeline-steps">
                            {withPreload.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="timeline-step"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                >
                                    <div className="step-number">{index + 1}</div>
                                    <div className="step-text">
                                        {item.step} <span style={{ color: '#22c55e' }}>({item.delay})</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="performance-gain"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4 }}
            >
                <div className="gain-value">55%</div>
                <div className="gain-label">Faster Time to Interactive</div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>💡 Best Practices</h3>

            <div className="best-practices">
                {bestPractices.map((practice, index) => (
                    <motion.div
                        key={practice.title}
                        className="practice-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                    >
                        <div className="practice-header">
                            <span className="practice-icon">{practice.icon}</span>
                            <span className="practice-title">{practice.title}</span>
                        </div>
                        <p className="practice-text">{practice.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="impact-stats">
                <motion.div
                    className="impact-stat"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.9 }}
                >
                    <div className="impact-value">300ms</div>
                    <div className="impact-label">Saved on Font Loading</div>
                </motion.div>
                <motion.div
                    className="impact-stat"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.0 }}
                >
                    <div className="impact-value">40%</div>
                    <div className="impact-label">Faster Page Navigation</div>
                </motion.div>
                <motion.div
                    className="impact-stat"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.1 }}
                >
                    <div className="impact-value">85+</div>
                    <div className="impact-label">Lighthouse Score</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloading;