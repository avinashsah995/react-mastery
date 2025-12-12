import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { FaExchangeAlt, FaImages, FaCode } from "react-icons/fa";
import "./view-transitions.css";

const ViewTransitions = () => {
    const [selectedId, setSelectedId] = useState(null);

    const items = [
        { id: 1, title: "Neon City", color: "#f43f5e", image: "linear-gradient(135deg, #f43f5e, #fb7185)" },
        { id: 2, title: "Ocean Mist", color: "#3b82f6", image: "linear-gradient(135deg, #3b82f6, #60a5fa)" },
        { id: 3, title: "Forest Rain", color: "#22c55e", image: "linear-gradient(135deg, #22c55e, #4ade80)" },
        { id: 4, title: "Sunset Blvd", color: "#f59e0b", image: "linear-gradient(135deg, #f59e0b, #fbbf24)" },
    ];

    return (
        <motion.div
            className="vt-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="vt-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #8b5cf6, #d946ef)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        View Transitions API
                    </h2>
                    <p className="header-subtitle">Seamless state changes and shared element transitions</p>
                </div>
            </div>

            <motion.div
                className="vt-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaExchangeAlt style={{ color: '#8b5cf6' }} /> What are View Transitions?</h3>
                <p>
                    The View Transitions API provides a mechanism for easily creating animated transitions between different DOM states
                    while also updating the DOM contents in a single step. It's perfect for "shared element" transitions where
                    an element appears to morph from one state to another.
                </p>
                <p>
                    In React, we often use libraries like <strong>Framer Motion</strong> to achieve this effect (using <code>layoutId</code>),
                    but the native browser API is bringing this capability to the platform itself!
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>
                🎯 Interactive Demo: Shared Element Transition
            </h3>
            <p style={{ color: '#94a3b8', marginBottom: '24px' }}>
                Click on any card below to see a seamless transition to the detail view. This mimics the "hero" animation effect.
            </p>

            <div className="demo-area">
                <div className="gallery-grid">
                    {items.map(item => (
                        <motion.div
                            key={item.id}
                            className="gallery-item"
                            layoutId={`card-${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="gallery-image"
                                style={{ background: item.image }}
                                layoutId={`image-${item.id}`}
                            />
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            className="detail-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <button className="close-btn" onClick={() => setSelectedId(null)}>
                                <IoMdClose />
                            </button>

                            {items.map(item => item.id === selectedId && (
                                <motion.div
                                    className="detail-card"
                                    layoutId={`card-${item.id}`}
                                    key={item.id}
                                >
                                    <motion.div
                                        className="detail-image-container"
                                        layoutId={`image-${item.id}`}
                                        style={{ background: item.image }}
                                    />
                                    <motion.div
                                        className="detail-content"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h2 className="detail-title">{item.title}</h2>
                                        <p className="detail-desc">
                                            This is a detailed view of the {item.title}. Notice how the card expanded
                                            smoothly from its grid position? This continuity helps users maintain context
                                            during navigation.
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="benefits-grid">
                <motion.div className="benefit-item" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <div className="benefit-emoji">🧠</div>
                    <div className="benefit-name">Cognitive Load</div>
                    <div className="benefit-desc">Transitions help users understand where they are going and how it relates to where they were.</div>
                </motion.div>
                <motion.div className="benefit-item" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <div className="benefit-emoji">✨</div>
                    <div className="benefit-name">Perceived Performance</div>
                    <div className="benefit-desc">Smooth animations mask loading times and make the application feel faster and more responsive.</div>
                </motion.div>
            </div>

            <motion.div
                className="vt-intro"
                style={{ marginTop: '32px', borderColor: 'rgba(139, 92, 246, 0.3)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <h3><FaCode style={{ color: '#8b5cf6' }} /> Native Implementation</h3>
                <p>
                    While the demo above uses Framer Motion, here is how you would use the native View Transitions API in vanilla JavaScript:
                </p>
                <div className="code-block">
                    document.startViewTransition(() =&gt; &#123;<br />
                    &nbsp;&nbsp;// Update the DOM here<br />
                    &nbsp;&nbsp;updateTheDOM();<br />
                    &#125;);
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ViewTransitions;
