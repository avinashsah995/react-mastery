import { useState, useCallback, useRef } from "react";
import { motion } from "motion/react";
import PageHeader from "../../components/PageHeader";
import { FaClock, FaSearch } from "react-icons/fa";
import "./debounce-throttle.css";

const DebounceThrottle = () => {
    const [normalCount, setNormalCount] = useState(0);
    const [debounceCount, setDebounceCount] = useState(0);
    const [throttleCount, setThrottleCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    const debounceTimer = useRef(null);
    const throttleTimer = useRef(null);
    const throttleFlag = useRef(true);

    const handleNormalInput = useCallback((e) => {
        setSearchTerm(e.target.value);
        setNormalCount(prev => prev + 1);
    }, []);

    const handleDebounceInput = useCallback((e) => {
        setSearchTerm(e.target.value);
        setNormalCount(prev => prev + 1);

        clearTimeout(debounceTimer.current);
        debounceTimer.current = setTimeout(() => {
            setDebounceCount(prev => prev + 1);
        }, 500);
    }, []);

    const handleThrottleInput = useCallback((e) => {
        setSearchTerm(e.target.value);
        setNormalCount(prev => prev + 1);

        if (throttleFlag.current) {
            setThrottleCount(prev => prev + 1);
            throttleFlag.current = false;

            setTimeout(() => {
                throttleFlag.current = true;
            }, 500);
        }
    }, []);

    const useCases = [
        {
            type: "debounce",
            icon: "🔍",
            title: "Search Input",
            description: "Wait for user to stop typing before making API call to search."
        },
        {
            type: "debounce",
            icon: "✏️",
            title: "Form Validation",
            description: "Validate input field only after user finishes typing."
        },
        {
            type: "debounce",
            icon: "💾",
            title: "Auto-save",
            description: "Save draft content after user stops editing for a moment."
        },
        {
            type: "throttle",
            icon: "📜",
            title: "Scroll Events",
            description: "Limit scroll handler execution to improve performance during scrolling."
        },
        {
            type: "throttle",
            icon: "📐",
            title: "Window Resize",
            description: "Handle resize events at a controlled rate to avoid layout thrashing."
        },
        {
            type: "throttle",
            icon: "🎮",
            title: "Game Controls",
            description: "Ensure actions happen at consistent intervals in games."
        }
    ];

    return (
        <motion.div
            className="debounce-throttle-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="Debounce & Throttle"
                subtitle="Control function execution rate for better performance"
                titleGradient="linear-gradient(to right, #a855f7, #3b82f6)"
                className="debounce-throttle-header"
            />

            <motion.div
                className="dt-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaClock style={{ color: '#a855f7' }} /> What Are Debounce & Throttle?</h3>
                <p>
                    Debouncing and throttling are techniques to control how often a function executes over time.
                    They're essential for optimizing performance in scenarios where functions might be called
                    repeatedly in quick succession, such as with scroll events, window resizing, or search input.
                </p>
                <p>
                    <strong>Debounce</strong> waits for a pause in events before executing the function. It's like
                    waiting for someone to finish speaking before responding. <strong>Throttle</strong> ensures the
                    function executes at most once in a specified time period, regardless of how many times it's triggered.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🔄 How They Work</h3>

            <div className="comparison-cards">
                <motion.div
                    className="technique-card debounce"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="technique-title">⏱️ Debounce</div>
                    <p className="technique-description">
                        Delays execution until after a period of inactivity. Perfect for search inputs where you
                        want to wait for the user to finish typing before making an API call.
                    </p>
                    <div className="visual-demo">
                        <div className="demo-label">Event Timeline (500ms delay)</div>
                        <div className="demo-bars">
                            <div className="demo-bar" style={{ height: '40%' }}></div>
                            <div className="demo-bar" style={{ height: '30%' }}></div>
                            <div className="demo-bar" style={{ height: '35%' }}></div>
                            <div className="demo-bar" style={{ height: '0%' }}></div>
                            <div className="demo-bar" style={{ height: '0%' }}></div>
                            <div className="demo-bar" style={{ height: '100%', background: 'linear-gradient(to top, #10b981, #22c55e)' }}></div>
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '8px' }}>
                            ✅ Executes once after typing stops
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="technique-card throttle"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="technique-title">⚡ Throttle</div>
                    <p className="technique-description">
                        Ensures function executes at most once per specified interval. Ideal for scroll handlers
                        where you want to limit updates while maintaining responsiveness.
                    </p>
                    <div className="visual-demo">
                        <div className="demo-label">Event Timeline (500ms interval)</div>
                        <div className="demo-bars">
                            <div className="demo-bar throttle-bar" style={{ height: '100%', background: 'linear-gradient(to top, #10b981, #22c55e)' }}></div>
                            <div className="demo-bar throttle-bar" style={{ height: '40%' }}></div>
                            <div className="demo-bar throttle-bar" style={{ height: '35%' }}></div>
                            <div className="demo-bar throttle-bar" style={{ height: '100%', background: 'linear-gradient(to top, #10b981, #22c55e)' }}></div>
                            <div className="demo-bar throttle-bar" style={{ height: '30%' }}></div>
                            <div className="demo-bar throttle-bar" style={{ height: '40%' }}></div>
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '8px' }}>
                            ✅ Executes at regular intervals
                        </div>
                    </div>
                </motion.div>
            </div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🎯 Interactive Demo</h3>

            <motion.div
                className="interactive-demo"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
                    <FaSearch style={{ marginRight: '8px' }} />
                    Type in any input below to see how different techniques affect API call frequency:
                </p>

                <div className="demo-controls">
                    <div className="control-box">
                        <div className="control-label">Normal (No Optimization)</div>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Type something..."
                            onChange={handleNormalInput}
                        />
                        <div className="counter-display" style={{ marginTop: '12px' }}>
                            <div className="counter-number" style={{ color: '#ef4444' }}>{normalCount}</div>
                            <div className="counter-label">API Calls</div>
                        </div>
                    </div>

                    <div className="control-box">
                        <div className="control-label">With Debounce (500ms)</div>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Type something..."
                            onChange={handleDebounceInput}
                        />
                        <div className="counter-display" style={{ marginTop: '12px' }}>
                            <div className="counter-number" style={{ color: '#a855f7' }}>{debounceCount}</div>
                            <div className="counter-label">API Calls</div>
                        </div>
                    </div>

                    <div className="control-box">
                        <div className="control-label">With Throttle (500ms)</div>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Type something..."
                            onChange={handleThrottleInput}
                        />
                        <div className="counter-display" style={{ marginTop: '12px' }}>
                            <div className="counter-number" style={{ color: '#3b82f6' }}>{throttleCount}</div>
                            <div className="counter-label">API Calls</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>💡 Common Use Cases</h3>

            <div className="use-cases-grid">
                {useCases.map((useCase, index) => (
                    <motion.div
                        key={useCase.title}
                        className={`use-case-card ${useCase.type}-case`}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                    >
                        <div className="use-case-icon">{useCase.icon}</div>
                        <div className="use-case-title">{useCase.title}</div>
                        <div className="use-case-description">{useCase.description}</div>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>💻 Implementation</h3>

            <div className="code-examples">
                <motion.div
                    className="code-example-card debounce-code"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="code-title">Debounce Function</div>
                    <div className="code-block debounce-code-block">
                        {`function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
const search = debounce(apiCall, 500);
input.addEventListener('input', search);`}
                    </div>
                </motion.div>

                <motion.div
                    className="code-example-card throttle-code"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="code-title">Throttle Function</div>
                    <div className="code-block throttle-code-block">
                        {`function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage
const handleScroll = throttle(update, 100);
window.addEventListener('scroll', handleScroll);`}
                    </div>
                </motion.div>
            </div>

            <div className="stats-grid">
                <motion.div
                    className="stat-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <div className="stat-value">95%</div>
                    <div className="stat-label">Fewer API Calls</div>
                </motion.div>
                <motion.div
                    className="stat-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <div className="stat-value">60fps</div>
                    <div className="stat-label">Smooth Scrolling</div>
                </motion.div>
                <motion.div
                    className="stat-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.6 }}
                >
                    <div className="stat-value">3x</div>
                    <div className="stat-label">Better UX</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default DebounceThrottle;