import { motion } from "motion/react";
import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { IoIosArrowBack } from "react-icons/io";
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
                    <h2 className="header-title">Virtualized Feed</h2>
                    <p className="header-subtitle">Rendering 10,000 items smoothly</p>
                </div>
            </div>

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
        </motion.div>
    );
};

export default Virtualization;
