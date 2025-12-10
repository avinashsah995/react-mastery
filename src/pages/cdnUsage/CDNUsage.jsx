import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaGlobeAmericas, FaRocket, FaShieldAlt } from "react-icons/fa";
import "./cdn-usage.css";

const CDNUsage = () => {
    const benefits = [
        {
            icon: "⚡",
            title: "Faster Load Times",
            description: "Content delivered from the nearest edge server reduces latency significantly."
        },
        {
            icon: "🌍",
            title: "Global Reach",
            description: "Serve users worldwide with optimal performance from distributed servers."
        },
        {
            icon: "🛡️",
            title: "DDoS Protection",
            description: "Built-in security features protect against attacks and traffic spikes."
        },
        {
            icon: "💰",
            title: "Reduced Costs",
            description: "Offload bandwidth from origin server, lowering infrastructure costs."
        }
    ];

    const providers = [
        { logo: "☁️", name: "Cloudflare", info: "Global network, free tier" },
        { logo: "⚡", name: "AWS CloudFront", info: "Integration with AWS services" },
        { logo: "🌐", name: "Fastly", info: "Real-time purging, edge compute" },
        { logo: "🔵", name: "Azure CDN", info: "Microsoft cloud integration" },
        { logo: "🚀", name: "Akamai", info: "Industry leader, largest network" },
        { logo: "📦", name: "Bunny CDN", info: "Affordable, developer-friendly" }
    ];

    const useCases = [
        {
            emoji: "🎬",
            title: "Video Streaming",
            description: "Deliver high-quality video content to millions of users without buffering or delays."
        },
        {
            emoji: "🛍️",
            title: "E-commerce Sites",
            description: "Fast product image loading improves conversion rates and user experience."
        },
        {
            emoji: "📱",
            title: "Mobile Apps",
            description: "Reduce data usage and improve performance for mobile users on slower connections."
        },
        {
            emoji: "🎮",
            title: "Gaming Assets",
            description: "Download game updates and assets quickly from nearby servers."
        }
    ];

    return (
        <motion.div
            className="cdn-usage-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="cdn-usage-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #06b6d4, #22d3ee)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        CDN Usage
                    </h2>
                    <p className="header-subtitle">Content Delivery Network for global performance</p>
                </div>
            </div>

            <motion.div
                className="cdn-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaGlobeAmericas style={{ color: '#06b6d4' }} /> What is a CDN?</h3>
                <p>
                    A Content Delivery Network (CDN) is a geographically distributed network of servers that work
                    together to provide fast delivery of Internet content. Instead of serving all users from a single
                    origin server, a CDN stores cached copies of your content in multiple locations around the world.
                </p>
                <p>
                    When a user requests content, the CDN routes the request to the nearest edge server, dramatically
                    reducing latency and improving load times. This is especially beneficial for users far from your origin server.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>⚡ Latency Comparison</h3>

            <div className="latency-comparison">
                <motion.div
                    className="latency-card slow"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="latency-header">
                        <span className="latency-title">Without CDN</span>
                        <span className="latency-badge slow">SLOW</span>
                    </div>
                    <div className="latency-visual">
                        <div className="latency-time slow">850ms</div>
                    </div>
                    <div className="latency-label">Average global latency</div>
                    <div className="latency-bar">
                        <motion.div
                            className="latency-fill slow"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 0.5, duration: 1 }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="latency-card fast"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="latency-header">
                        <span className="latency-title">With CDN</span>
                        <span className="latency-badge fast">FAST</span>
                    </div>
                    <div className="latency-visual">
                        <div className="latency-time fast">85ms</div>
                    </div>
                    <div className="latency-label">Average global latency</div>
                    <div className="latency-bar">
                        <motion.div
                            className="latency-fill fast"
                            initial={{ width: 0 }}
                            animate={{ width: '30%' }}
                            transition={{ delay: 0.6, duration: 1 }}
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.05))',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
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
                    background: 'linear-gradient(to right, #06b6d4, #22d3ee)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '8px'
                }}>
                    90%
                </div>
                <div style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                    Latency Reduction
                </div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🎯 Key Benefits</h3>

            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        className="benefit-item"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                    >
                        <div className="benefit-icon">{benefit.icon}</div>
                        <div className="benefit-title">{benefit.title}</div>
                        <div className="benefit-description">{benefit.description}</div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="providers-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
            >
                <h3 style={{ marginBottom: '8px' }}>
                    <FaRocket style={{ color: '#06b6d4', marginRight: '8px' }} />
                    Popular CDN Providers
                </h3>
                <p style={{ color: '#94a3b8', marginBottom: '16px' }}>
                    Leading content delivery networks trusted by millions of websites:
                </p>
                <div className="providers-grid">
                    {providers.map((provider, index) => (
                        <motion.div
                            key={provider.name}
                            className="provider-card"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.1 + index * 0.1 }}
                        >
                            <div className="provider-logo">{provider.logo}</div>
                            <div className="provider-name">{provider.name}</div>
                            <div className="provider-info">{provider.info}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>💼 Common Use Cases</h3>

            <div className="use-cases">
                {useCases.map((useCase, index) => (
                    <motion.div
                        key={useCase.title}
                        className="use-case"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.7 + index * 0.1 }}
                    >
                        <div className="use-case-header">
                            <span className="use-case-emoji">{useCase.emoji}</span>
                            <span className="use-case-title">{useCase.title}</span>
                        </div>
                        <p className="use-case-text">{useCase.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="performance-stats">
                <motion.div
                    className="perf-stat"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.1 }}
                >
                    <div className="perf-value">3x</div>
                    <div className="perf-label">Faster Downloads</div>
                </motion.div>
                <motion.div
                    className="perf-stat"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.2 }}
                >
                    <div className="perf-value">60%</div>
                    <div className="perf-label">Less Origin Load</div>
                </motion.div>
                <motion.div
                    className="perf-stat"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.3 }}
                >
                    <div className="perf-value">99.9%</div>
                    <div className="perf-label">Uptime SLA</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CDNUsage;