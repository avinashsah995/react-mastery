import { motion } from "motion/react";
import PageHeader from "../../components/PageHeader";
import { FaImages, FaCompress } from "react-icons/fa";
import "./image-optimization.css";

const ImageOptimization = () => {
    const formats = [
        {
            icon: "🖼️",
            name: "WebP",
            description: "Modern format with superior compression. 25-35% smaller than JPEG."
        },
        {
            icon: "🚀",
            name: "AVIF",
            description: "Next-gen format with excellent compression. Up to 50% smaller."
        },
        {
            icon: "📸",
            name: "JPEG",
            description: "Universal format with good compression for photos."
        },
        {
            icon: "🎨",
            name: "PNG",
            description: "Lossless format best for graphics with transparency."
        }
    ];

    const techniques = [
        {
            emoji: "📏",
            title: "Responsive Images",
            description: "Serve different image sizes based on device screen size using srcset and sizes attributes."
        },
        {
            emoji: "⏳",
            title: "Lazy Loading",
            description: "Load images only when they enter the viewport using loading='lazy' attribute."
        },
        {
            emoji: "🗜️",
            title: "Compression",
            description: "Reduce file size without significant quality loss using tools like ImageOptim or TinyPNG."
        },
        {
            emoji: "📦",
            title: "CDN Delivery",
            description: "Serve images from a CDN for faster global delivery and automatic format conversion."
        }
    ];

    const tools = [
        {
            emoji: "⚡",
            name: "Sharp",
            description: "High-performance Node.js image processing library"
        },
        {
            emoji: "🎯",
            name: "Squoosh",
            description: "Google's browser-based image compression tool"
        },
        {
            emoji: "🔧",
            name: "ImageOptim",
            description: "Mac app for lossless image optimization"
        },
        {
            emoji: "🐼",
            name: "TinyPNG",
            description: "Smart lossy compression for PNG and JPEG"
        }
    ];

    return (
        <motion.div
            className="image-optimization-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="Image Optimization"
                subtitle="Compress and optimize images for faster load times"
                titleGradient="linear-gradient(to right, #ec4899, #f472b6)"
                className="image-optimization-header"
            />

            <motion.div
                className="intro-content"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaImages style={{ color: '#ec4899' }} /> Why Optimize Images?</h3>
                <p>
                    Images are often the largest assets on web pages, accounting for 50-70% of total page weight.
                    Unoptimized images slow down page load times, waste bandwidth, and hurt user experience.
                    Proper image optimization can reduce image sizes by 70-90% without visible quality loss.
                </p>
                <p>
                    Modern image formats like WebP and AVIF provide superior compression while maintaining quality.
                    Combined with techniques like lazy loading and responsive images, you can dramatically improve performance.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>📊 Size Comparison</h3>

            <div className="comparison-grid">
                <motion.div
                    className="image-card"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="image-card-header">
                        <span className="card-label">Original Image</span>
                        <span className="size-badge large">2.8 MB</span>
                    </div>
                    <img
                        src="https://picsum.photos/seed/original/800/450"
                        alt="Original large image"
                        className="image-preview"
                    />
                </motion.div>

                <motion.div
                    className="image-card"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="image-card-header">
                        <span className="card-label">Optimized (WebP)</span>
                        <span className="size-badge small">186 KB</span>
                    </div>
                    <img
                        src="https://picsum.photos/seed/optimized/800/450"
                        alt="Optimized WebP image"
                        className="image-preview"
                        loading="lazy"
                    />
                </motion.div>
            </div>

            <motion.div
                style={{
                    background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05))',
                    border: '1px solid rgba(236, 72, 153, 0.3)',
                    borderRadius: '16px',
                    padding: '24px',
                    textAlign: 'center',
                    marginBottom: '24px'
                }}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    background: 'linear-gradient(to right, #ec4899, #f472b6)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '8px'
                }}>
                    93%
                </div>
                <div style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                    Size Reduction Achieved
                </div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🎯 Modern Image Formats</h3>

            <div className="formats-section">
                {formats.map((format, index) => (
                    <motion.div
                        key={format.name}
                        className="format-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                    >
                        <div className="format-icon">{format.icon}</div>
                        <div className="format-name">{format.name}</div>
                        <div className="format-description">{format.description}</div>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>⚡ Optimization Techniques</h3>

            <div className="techniques-list">
                {techniques.map((technique, index) => (
                    <motion.div
                        key={technique.title}
                        className="technique-item"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                    >
                        <div className="technique-header">
                            <span className="technique-emoji">{technique.emoji}</span>
                            <span className="technique-title">{technique.title}</span>
                        </div>
                        <p className="technique-text">{technique.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="tools-showcase"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
            >
                <h3 style={{ marginBottom: '8px' }}>
                    <FaCompress style={{ color: '#ec4899', marginRight: '8px' }} />
                    Popular Optimization Tools
                </h3>
                <p style={{ color: '#94a3b8', marginBottom: '16px' }}>
                    These tools help automate image compression and conversion:
                </p>
                <div className="tools-list">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            className="tool-box"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                        >
                            <div className="tool-header-row">
                                <span className="tool-emoji">{tool.emoji}</span>
                                <span className="tool-title">{tool.name}</span>
                            </div>
                            <p className="tool-info">{tool.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="stats-showcase">
                <motion.div
                    className="stat-container"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.6 }}
                >
                    <div className="stat-figure">70%</div>
                    <div className="stat-text">Faster Page Load</div>
                </motion.div>
                <motion.div
                    className="stat-container"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.7 }}
                >
                    <div className="stat-figure">50%</div>
                    <div className="stat-text">Less Bandwidth</div>
                </motion.div>
                <motion.div
                    className="stat-container"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <div className="stat-figure">2x</div>
                    <div className="stat-text">Better UX</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ImageOptimization;