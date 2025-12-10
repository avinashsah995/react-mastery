import { motion } from "motion/react";
import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { IoIosArrowBack } from "react-icons/io";
import { FaList } from "react-icons/fa";
import "./virtualization.css";

const Virtualization = () => {
    const parentRef = useRef(null);

    // Mock feed items
    const items = Array.from({ length: 10000 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        time: `${Math.floor(Math.random() * 59) + 1} mins ago`,
        content: "Exploring the power of React Virtualization! 🚀 Rendering thousands of items efficiently without lagging the browser.",
        image: `https://picsum.photos/seed/${i}/600/300`
    }));

    const rowVirtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 450, // Adjusted estimate for new styling
        overscan: 5,
    });

    const benefits = [
        {
            emoji: "⚡",
            title: "Lightning Fast",
            description: "Only renders visible items, dramatically improving performance for large lists."
        },
        {
            emoji: "💾",
            title: "Low Memory Usage",
            description: "Keeps memory footprint minimal by not rendering off-screen items."
        },
        {
            emoji: "📱",
            title: "Smooth Scrolling",
            description: "Maintains 60fps even with thousands of items in the list."
        },
        {
            emoji: "🎯",
            title: "Better UX",
            description: "Instant load times and responsive interactions for better user experience."
        }
    ];

    const useCases = [
        {
            icon: "📰",
            title: "Social Media Feeds",
            description: "Infinite scroll feeds with thousands of posts load instantly."
        },
        {
            icon: "📊",
            title: "Data Tables",
            description: "Large datasets with thousands of rows render smoothly."
        },
        {
            icon: "💬",
            title: "Chat Applications",
            description: "Long message histories without performance degradation."
        },
        {
            icon: "🛍️",
            title: "Product Lists",
            description: "E-commerce catalogs with extensive product inventories."
        }
    ];

    return (
        <motion.div
            className="virtualization-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="virtualization-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Virtualization
                    </h2>
                    <p className="header-subtitle">Render large lists efficiently by showing only visible items</p>
                </div>
            </div>

            <motion.div
                className="virtualization-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaList style={{ color: '#3b82f6' }} /> What is Virtualization?</h3>
                <p>
                    Virtualization (also known as windowing) is a technique for efficiently rendering large lists by
                    only creating DOM elements for the items that are currently visible in the viewport. As you scroll,
                    items are dynamically added and removed, creating the illusion of scrolling through the entire list
                    while only rendering a small subset.
                </p>
                <p>
                    Without virtualization, rendering 10,000 list items would create 10,000 DOM nodes, causing slow
                    initial render times, high memory usage, and janky scrolling. With virtualization, only ~20-30 items
                    are rendered at any time, regardless of the total list size, resulting in instant load times and
                    buttery-smooth scrolling.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>✨ Key Benefits</h3>

            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        className="benefit-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <div className="benefit-emoji">{benefit.emoji}</div>
                        <div className="benefit-title">{benefit.title}</div>
                        <div className="benefit-description">{benefit.description}</div>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>
                💡 Common Use Cases
            </h3>

            <div className="use-cases-grid">
                {useCases.map((useCase, index) => (
                    <motion.div
                        key={useCase.title}
                        className="use-case-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                    >
                        <div className="use-case-header">
                            <span className="use-case-icon">{useCase.icon}</span>
                            <span className="use-case-title">{useCase.title}</span>
                        </div>
                        <div className="use-case-desc">{useCase.description}</div>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>
                🎯 Interactive Demo: Virtualized Feed
            </h3>

            <motion.div
                className="demo-info-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
            >
                <p>
                    <strong>Try it yourself!</strong> Scroll through this feed of <strong>10,000 items</strong>.
                    Notice how smooth it is? Only the visible items are rendered, making it blazing fast despite
                    the massive list size. Check your browser's DevTools to see only ~20-30 DOM nodes at any time!
                </p>
            </motion.div>


            <div
                ref={parentRef}
                className="feed-container"
            >
                <div
                    style={{
                        height: rowVirtualizer.getTotalSize(),
                        position: "relative",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                    }}
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                        const item = items[virtualRow.index];

                        return (
                            <div
                                key={virtualRow.key}
                                style={{
                                    width: "100%",
                                }}
                            >
                                <motion.div
                                    className="post-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4 }}
                                    whileHover={{ scale: 1.01, borderColor: "rgba(255,255,255,0.3)" }}
                                >
                                    <div className="post-header">
                                        <img
                                            src={`https://i.pravatar.cc/100?img=${virtualRow.index % 70}`}
                                            alt="avatar"
                                            className="post-avatar"
                                        />
                                        <div className="post-user-info">
                                            <span className="post-username">{item.name}</span>
                                            <span className="post-time">{item.time}</span>
                                        </div>
                                    </div>

                                    <div className="post-content">{item.content}</div>

                                    <img
                                        src={item.image}
                                        alt="post"
                                        className="post-image"
                                        loading="lazy"
                                    />
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="metrics-grid">
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="metric-value">99%</div>
                    <div className="metric-label">Less DOM Nodes</div>
                </motion.div>
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="metric-value">10x</div>
                    <div className="metric-label">Faster Initial Render</div>
                </motion.div>
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <div className="metric-value">60fps</div>
                    <div className="metric-label">Smooth Scrolling</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Virtualization;
