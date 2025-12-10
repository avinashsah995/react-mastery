import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa";
import "./http2-api.css";

const HTTP2API = () => {
    const http2Features = [
        {
            emoji: "🔀",
            name: "Multiplexing",
            description: "Send multiple requests over a single connection simultaneously without blocking."
        },
        {
            emoji: "🗜️",
            name: "Header Compression",
            description: "HPACK compression reduces overhead by compressing HTTP headers."
        },
        {
            emoji: "📤",
            name: "Server Push",
            description: "Server can proactively send resources before they're requested."
        },
        {
            emoji: "💾",
            name: "Binary Protocol",
            description: "More efficient parsing with binary framing instead of text-based."
        }
    ];

    const apiOptimizations = [
        {
            icon: "📦",
            title: "Response Caching",
            description: "Cache API responses to reduce server load and improve response times for repeated requests."
        },
        {
            icon: "🎯",
            title: "GraphQL",
            description: "Request only the data you need with GraphQL instead of over-fetching with REST."
        },
        {
            icon: "⚡",
            title: "Compression",
            description: "Enable gzip or brotli compression to reduce payload size by 70-90%."
        },
        {
            icon: "🔄",
            title: "Request Batching",
            description: "Combine multiple API calls into a single request to reduce network overhead."
        }
    ];

    return (
        <motion.div
            className="http2-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="http2-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #8b5cf6, #a78bfa)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        HTTP/2 & API Optimization
                    </h2>
                    <p className="header-subtitle">Modern protocols for faster web applications</p>
                </div>
            </div>

            <motion.div
                className="http2-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaNetworkWired style={{ color: '#8b5cf6' }} /> What is HTTP/2?</h3>
                <p>
                    HTTP/2 is a major revision of the HTTP network protocol that focuses on performance improvements.
                    It was designed to address the limitations of HTTP/1.1, particularly around connection management
                    and bandwidth utilization. HTTP/2 enables a more efficient use of network resources and reduces
                    latency through features like multiplexing and header compression.
                </p>
                <p>
                    While HTTP/1.1 requires multiple connections to achieve parallelism, HTTP/2 can handle multiple
                    requests and responses simultaneously over a single connection, dramatically improving page load times.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🔄 Protocol Comparison</h3>

            <div className="version-comparison">
                <motion.div
                    className="version-card old"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="version-header">
                        <span className="version-title">HTTP/1.1</span>
                        <span className="version-badge old">Legacy</span>
                    </div>
                    <div className="version-features">
                        <div className="feature-row">
                            <span className="feature-icon">📝</span>
                            <span className="feature-text">Text-based protocol</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-icon">🔒</span>
                            <span className="feature-text">Head-of-line blocking</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-icon">🔗</span>
                            <span className="feature-text">One request per connection</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-icon">📊</span>
                            <span className="feature-text">Uncompressed headers</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-icon">⚠️</span>
                            <span className="feature-text">No server push</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="version-card new"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="version-header">
                        <span className="version-title">HTTP/2</span>
                        <span className="version-badge new">Modern</span>
                    </div>
                    <div className="version-features">
                        <div className="feature-row">
                            <span className="feature-icon">💾</span>
                            <span className="feature-text">Binary protocol</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-icon">🔀</span>
                            <span className="feature-text">Multiplexing support</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-icon">⚡</span>
                            <span className="feature-text">Multiple requests per connection</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-icon">🗜️</span>
                            <span className="feature-text">HPACK header compression</span>
                        </div>
                        <div className="feature-row">
                            <span className="feature-icon">📤</span>
                            <span className="feature-text">Server push enabled</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="performance-boost"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="boost-value">50%</div>
                <div className="boost-label">Faster Page Load Times</div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>✨ HTTP/2 Key Features</h3>

            <div className="http2-features">
                {http2Features.map((feature, index) => (
                    <motion.div
                        key={feature.name}
                        className="feature-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                    >
                        <div className="feature-card-header">
                            <span className="feature-emoji">{feature.emoji}</span>
                            <span className="feature-name">{feature.name}</span>
                        </div>
                        <p className="feature-desc">{feature.description}</p>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>🚀 API Optimization Techniques</h3>

            <div className="api-optimizations">
                {apiOptimizations.map((optimization, index) => (
                    <motion.div
                        key={optimization.title}
                        className="api-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0 + index * 0.1 }}
                    >
                        <div className="api-card-header">
                            <span className="api-icon">{optimization.icon}</span>
                            <span className="api-title">{optimization.title}</span>
                        </div>
                        <p className="api-description">{optimization.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="metrics-grid">
                <motion.div
                    className="metric-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <div className="metric-value">67%</div>
                    <div className="metric-label">Less Bandwidth Used</div>
                </motion.div>
                <motion.div
                    className="metric-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="metric-value">2x</div>
                    <div className="metric-label">More Concurrent Requests</div>
                </motion.div>
                <motion.div
                    className="metric-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.6 }}
                >
                    <div className="metric-value">95%</div>
                    <div className="metric-label">Browser Support</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HTTP2API;