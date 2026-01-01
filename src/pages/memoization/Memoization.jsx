import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "motion/react";
import PageHeader from "../../components/PageHeader";
import { FaBrain, FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import "./memoization.css";

const Memoization = () => {
    const [number, setNumber] = useState(5);
    const [memoNumber, setMemoNumber] = useState(5);
    const [normalCalculations, setNormalCalculations] = useState(0);
    const [memoCalculations, setMemoCalculations] = useState(0);

    const normalCountRef = useRef(0);
    const memoCountRef = useRef(0);

    // Expensive calculation function
    const expensiveCalculation = (num) => {
        console.log("Calculating factorial...");
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    };

    // Without memoization - recalculates on every render
    const normalResult = (() => {
        normalCountRef.current += 1;
        return expensiveCalculation(number);
    })();

    // With useMemo - only recalculates when memoNumber changes
    const memoizedResult = useMemo(() => {
        memoCountRef.current += 1;
        return expensiveCalculation(memoNumber);
    }, [memoNumber]);

    // Update display counts safely in useEffect
    useEffect(() => {
        setNormalCalculations(normalCountRef.current);
    }, [number]);

    useEffect(() => {
        setMemoCalculations(memoCountRef.current);
    }, [memoNumber]);

    const hooks = [
        {
            icon: "🎣",
            name: "useMemo()",
            description: "Memoize expensive calculations. Recalculates only when dependencies change.",
            code: "const value = useMemo(() => compute(a), [a]);"
        },
        {
            icon: "🔧",
            name: "useCallback()",
            description: "Memoize callback functions to prevent unnecessary re-renders of child components.",
            code: "const handler = useCallback(() => {}, [deps]);"
        },
        {
            icon: "📝",
            name: "React.memo()",
            description: "Wrap components to prevent re-renders when props haven't changed.",
            code: "export default React.memo(Component);"
        }
    ];

    const useCases = [
        {
            emoji: "🔢",
            title: "Complex Calculations",
            description: "Memoize expensive mathematical operations, data transformations, or sorting algorithms."
        },
        {
            emoji: "🎨",
            title: "Derived State",
            description: "Cache computed values derived from props or state to avoid recalculation."
        },
        {
            emoji: "📊",
            title: "Data Filtering",
            description: "Memoize filtered or mapped arrays to prevent unnecessary processing on each render."
        },
        {
            emoji: "🖼️",
            title: "Component Props",
            description: "Use React.memo to prevent child components from re-rendering unnecessarily."
        }
    ];

    return (
        <motion.div
            className="memoization-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="Memoization"
                subtitle="Cache expensive computations for better performance"
                titleGradient="linear-gradient(to right, #d946ef, #f0abfc)"
                className="memoization-header"
            />

            <motion.div
                className="memo-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaBrain style={{ color: '#d946ef' }} /> What is Memoization?</h3>
                <p>
                    Memoization is an optimization technique that stores the results of expensive function calls and
                    returns the cached result when the same inputs occur again. In React, this prevents unnecessary
                    recalculations and re-renders, significantly improving performance especially with complex computations.
                </p>
                <p>
                    React provides hooks like <strong>useMemo</strong> for values and <strong>useCallback</strong> for
                    functions to implement memoization. Additionally, <strong>React.memo</strong> can be used to memoize
                    entire components based on their props.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🎯 Interactive Demo: Factorial Calculator</h3>

            <motion.div
                className="interactive-demo-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
                    Try changing the numbers below. Notice how the calculation count differs between normal and memoized approaches:
                </p>

                <div className="demo-controls-row">
                    <div className="demo-panel without-memo">
                        <div className="panel-title">
                            <FaTimesCircle style={{ color: '#ef4444' }} />
                            Without useMemo
                        </div>

                        <div className="input-group">
                            <label className="input-label">Enter a number (1-20):</label>
                            <input
                                type="number"
                                min="1"
                                max="20"
                                value={number}
                                onChange={(e) => setNumber(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                                className="number-input"
                            />
                        </div>

                        <div className="result-display">
                            <div className="result-label">Factorial Result:</div>
                            <div className="result-value">{normalResult.toLocaleString()}</div>
                            <div className="calculation-indicator">
                                <span className="pulse-dot"></span>
                                Recalculates on every render
                            </div>
                        </div>

                        <div className="performance-stats">
                            <div className="stat-badge">
                                <div className="stat-number slow">{normalCalculations}</div>
                                <div className="stat-label">Calculations</div>
                            </div>
                        </div>
                    </div>

                    <div className="demo-panel with-memo">
                        <div className="panel-title">
                            <FaCheckCircle style={{ color: '#d946ef' }} />
                            With useMemo
                        </div>

                        <div className="input-group">
                            <label className="input-label">Enter a number (1-20):</label>
                            <input
                                type="number"
                                min="1"
                                max="20"
                                value={memoNumber}
                                onChange={(e) => setMemoNumber(Math.min(20, Math.max(1, parseInt(e.target.value) || 1)))}
                                className="number-input"
                            />
                        </div>

                        <div className="result-display">
                            <div className="result-label">Factorial Result:</div>
                            <div className="result-value">{memoizedResult.toLocaleString()}</div>
                            <div className="calculation-indicator">
                                <span className="pulse-dot"></span>
                                Only recalculates when input changes
                            </div>
                        </div>

                        <div className="performance-stats">
                            <div className="stat-badge">
                                <div className="stat-number fast">{memoCalculations}</div>
                                <div className="stat-label">Calculations</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>
                🎣 React Memoization Hooks
            </h3>

            <div className="hooks-comparison">
                {hooks.map((hook, index) => (
                    <motion.div
                        key={hook.name}
                        className="hook-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                    >
                        <div className="hook-icon">{hook.icon}</div>
                        <div className="hook-name">{hook.name}</div>
                        <div className="hook-description">{hook.description}</div>
                        <div className="code-sample">{hook.code}</div>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>
                💡 Common Use Cases
            </h3>

            <div className="use-cases-section">
                {useCases.map((useCase, index) => (
                    <motion.div
                        key={useCase.title}
                        className="use-case-box"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                    >
                        <div className="use-case-emoji">{useCase.emoji}</div>
                        <div className="use-case-name">{useCase.title}</div>
                        <div className="use-case-text">{useCase.description}</div>
                    </motion.div>
                ))}
            </div>

            <div className="metrics-row">
                <motion.div
                    className="metric-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    <div className="metric-value">80%</div>
                    <div className="metric-description">Fewer Computations</div>
                </motion.div>
                <motion.div
                    className="metric-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="metric-value">3x</div>
                    <div className="metric-description">Faster Re-renders</div>
                </motion.div>
                <motion.div
                    className="metric-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="metric-value">50%</div>
                    <div className="metric-description">Less CPU Usage</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Memoization;