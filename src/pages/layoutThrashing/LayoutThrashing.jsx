import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./layout-thrashing.css";

const LayoutThrashing = () => {
    const triggers = [
        {
            emoji: "📏",
            name: "offsetHeight",
            description: "Reading layout properties like offsetHeight, offsetWidth, clientHeight forces layout calculation."
        },
        {
            emoji: "📐",
            name: "getBoundingClientRect()",
            description: "This method triggers layout recalculation to return accurate position and size."
        },
        {
            emoji: "🎨",
            name: "getComputedStyle()",
            description: "Reading computed styles requires the browser to recalculate layout first."
        },
        {
            emoji: "📊",
            name: "scrollTop/scrollHeight",
            description: "Accessing scroll properties forces the browser to calculate the current layout."
        }
    ];

    const solutions = [
        {
            icon: "📦",
            title: "Batch DOM Reads",
            description: "Read all DOM properties first, then perform all writes. This prevents forced synchronous layouts."
        },
        {
            icon: "⚡",
            title: "Use requestAnimationFrame",
            description: "Schedule DOM changes for the next animation frame to batch layout calculations efficiently."
        },
        {
            icon: "🎯",
            title: "Cache Layout Values",
            description: "Store layout measurements in variables instead of repeatedly querying the DOM."
        },
        {
            icon: "🔧",
            title: "Use CSS Transforms",
            description: "Prefer CSS transforms over layout properties for animations to avoid triggering layout."
        }
    ];

    return (
        <motion.div
            className="layout-thrashing-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="layout-thrashing-header">
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
                        Layout Thrashing
                    </h2>
                    <p className="header-subtitle">Avoid forced synchronous layouts for better performance</p>
                </div>
            </div>

            <motion.div
                className="thrashing-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaExclamationTriangle style={{ color: '#f43f5e' }} /> What is Layout Thrashing?</h3>
                <p>
                    Layout thrashing (also known as forced synchronous layout) occurs when JavaScript repeatedly reads
                    from and writes to the DOM in a way that forces the browser to recalculate layout multiple times
                    within a single frame. This is extremely expensive for performance and can cause janky animations
                    and slow interactions.
                </p>
                <p>
                    The browser optimizes layout calculations by batching them together. However, when you read a layout
                    property (like offsetHeight) immediately after modifying the DOM, the browser is forced to stop and
                    recalculate the layout synchronously to give you the correct value. Doing this in a loop creates a
                    read-write-read-write pattern that severely impacts performance.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>⚠️ The Problem</h3>

            <motion.div
                className="problem-demo"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="demo-grid">
                    <div className="demo-box bad">
                        <div className="demo-title">
                            <FaTimesCircle style={{ color: '#f43f5e' }} />
                            Layout Thrashing (BAD)
                        </div>
                        <div className="demo-code">
                            {`// ❌ Read-write-read-write pattern
elements.forEach(el => {
  const height = el.offsetHeight; // READ
  el.style.width = height + 'px';  // WRITE
  // Forces layout recalc on EVERY iteration!
});`}
                        </div>
                        <div className="performance-indicator bad">
                            🐢 Recalculates layout {triggers.length} times
                        </div>
                    </div>

                    <div className="demo-box good">
                        <div className="demo-title">
                            <FaCheckCircle style={{ color: '#22c55e' }} />
                            Optimized (GOOD)
                        </div>
                        <div className="demo-code">
                            {`// ✅ Batch reads first, then writes
const heights = elements.map(el => 
  el.offsetHeight  // READ all first
);
elements.forEach((el, i) => {
  el.style.width = heights[i] + 'px';  // WRITE all
});`}
                        </div>
                        <div className="performance-indicator good">
                            ⚡ Recalculates layout only once!
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="impact-card"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <div className="impact-value">10x</div>
                <div className="impact-label">Slower with Layout Thrashing</div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🔍 Properties That Trigger Layout</h3>

            <div className="triggers-grid">
                {triggers.map((trigger, index) => (
                    <motion.div
                        key={trigger.name}
                        className="trigger-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                    >
                        <div className="trigger-header">
                            <span className="trigger-emoji">{trigger.emoji}</span>
                            <span className="trigger-name">{trigger.name}</span>
                        </div>
                        <p className="trigger-description">{trigger.description}</p>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>✅ Solutions</h3>

            <div className="solutions-section">
                {solutions.map((solution, index) => (
                    <motion.div
                        key={solution.title}
                        className="solution-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                    >
                        <div className="solution-header">
                            <span className="solution-icon">{solution.icon}</span>
                            <span className="solution-title">{solution.title}</span>
                        </div>
                        <p className="solution-text">{solution.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="metrics-display">
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="metric-number">16ms</div>
                    <div className="metric-text">Budget Per Frame (60fps)</div>
                </motion.div>
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <div className="metric-number">90%</div>
                    <div className="metric-text">Performance Improvement</div>
                </motion.div>
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="metric-number">60fps</div>
                    <div className="metric-text">Smooth Animations</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LayoutThrashing;