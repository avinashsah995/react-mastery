import { useState } from "react";
import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaImage, FaArrowDown } from "react-icons/fa";
import "./lazy-loading.css";

const LazyLoading = () => {
    const [loadedImages, setLoadedImages] = useState(new Set());

    const images = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        src: `https://picsum.photos/seed/${i + 100}/400/300`,
        title: `Image ${i + 1}`
    }));

    const handleImageLoad = (id) => {
        setLoadedImages(prev => new Set([...prev, id]));
    };

    const techniques = [
        {
            icon: "🖼️",
            name: "Native Lazy Loading",
            description: "Use the loading='lazy' attribute for images and iframes.",
            code: '<img src="image.jpg" loading="lazy" alt="..." />'
        },
        {
            icon: "👀",
            name: "Intersection Observer",
            description: "Detect when elements enter the viewport and load them dynamically.",
            code: "observer.observe(element);"
        },
        {
            icon: "⚛️",
            name: "React.lazy()",
            description: "Dynamically import components only when they're needed.",
            code: "const Component = lazy(() => import('./Component'));"
        }
    ];

    const benefits = [
        {
            icon: "🚀",
            title: "Faster Initial Load",
            description: "Pages load faster by deferring non-critical assets until needed."
        },
        {
            icon: "💰",
            title: "Reduced Bandwidth",
            description: "Save data by only loading content that users actually view."
        },
        {
            icon: "⚡",
            title: "Better Performance",
            description: "Lower memory usage and improved responsiveness on all devices."
        },
        {
            icon: "📱",
            title: "Mobile Friendly",
            description: "Essential for mobile users with limited data plans and slower connections."
        }
    ];

    return (
        <motion.div
            className="lazy-loading-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="lazy-loading-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #10b981, #22c55e)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Lazy Loading
                    </h2>
                    <p className="header-subtitle">Load resources only when they're needed</p>
                </div>
            </div>

            <motion.div
                className="lazy-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaImage style={{ color: '#10b981' }} /> What is Lazy Loading?</h3>
                <p>
                    Lazy loading is a design pattern that defers the loading of non-critical resources at page load time.
                    Instead, these resources are loaded at the moment they're needed, such as when they enter the viewport
                    or when a user action requires them. This dramatically improves initial page load time and reduces
                    bandwidth consumption.
                </p>
                <p>
                    For images, lazy loading means they only download when the user scrolls near them. For components,
                    it means code is only downloaded when that feature is accessed. This results in faster perceived
                    performance and better user experience, especially on slower connections.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🎯 Interactive Demo</h3>

            <motion.div
                className="lazy-demo-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="demo-info">
                    <strong>Try it yourself!</strong> Scroll down slowly and watch as images load only when they enter
                    the viewport. Notice how the page loads instantly without waiting for all images.
                </div>

                <div className="scroll-indicator">
                    <FaArrowDown /> Scroll to see lazy loading in action
                </div>

                <div className="images-grid">
                    {images.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="image-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                        >
                            <div className="image-wrapper">
                                {!loadedImages.has(image.id) && (
                                    <div className="image-placeholder">
                                        <div className="spinner"></div>
                                    </div>
                                )}
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    loading="lazy"
                                    className={`lazy-image ${loadedImages.has(image.id) ? 'loaded' : ''}`}
                                    onLoad={() => handleImageLoad(image.id)}
                                />
                            </div>
                            <div className="image-info">
                                <div className="image-title">{image.title}</div>
                                <div className="image-status">
                                    <span className={`status-dot ${loadedImages.has(image.id) ? 'loaded' : 'loading'}`}></span>
                                    {loadedImages.has(image.id) ? 'Loaded' : 'Loading...'}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>
                🛠️ Implementation Techniques
            </h3>

            <div className="techniques-grid">
                {techniques.map((technique, index) => (
                    <motion.div
                        key={technique.name}
                        className="technique-box"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                    >
                        <div className="technique-icon">{technique.icon}</div>
                        <div className="technique-name">{technique.name}</div>
                        <div className="technique-desc">{technique.description}</div>
                        <div className="code-snippet">{technique.code}</div>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>
                ✨ Key Benefits
            </h3>

            <div className="benefits-section">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        className="benefit-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                    >
                        <div className="benefit-icon">{benefit.icon}</div>
                        <div className="benefit-title">{benefit.title}</div>
                        <div className="benefit-description">{benefit.description}</div>
                    </motion.div>
                ))}
            </div>

            <div className="performance-metrics">
                <motion.div
                    className="metric-item"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="metric-figure">70%</div>
                    <div className="metric-description">Faster Initial Load</div>
                </motion.div>
                <motion.div
                    className="metric-item"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="metric-figure">50%</div>
                    <div className="metric-description">Less Bandwidth Used</div>
                </motion.div>
                <motion.div
                    className="metric-item"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <div className="metric-figure">2x</div>
                    <div className="metric-description">Better User Experience</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LazyLoading;