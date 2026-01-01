import { motion } from "motion/react";
import PageHeader from "../../components/PageHeader";
import { FaSync, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./minimise-rerenders.css";

const MinimiseReRenders = () => {
    const causes = [
        {
            emoji: "🔄",
            title: "State Changes",
            description: "Component re-renders when its state is updated via useState or useReducer."
        },
        {
            emoji: "⬇️",
            title: "Props Changes",
            description: "Component re-renders when it receives new props from parent component."
        },
        {
            emoji: "👨‍👩‍👧",
            title: "Parent Re-renders",
            description: "When parent re-renders, all child components re-render by default."
        },
        {
            emoji: "🌍",
            title: "Context Changes",
            description: "Components using useContext re-render when context value changes."
        }
    ];

    const techniques = [
        {
            icon: "📝",
            name: "React.memo()",
            description: "Wrap components to prevent re-renders when props haven't changed.",
            code: "const MemoComponent = React.memo(MyComponent);"
        },
        {
            icon: "🎣",
            name: "useMemo()",
            description: "Memoize expensive calculations to avoid recomputing on every render.",
            code: "const value = useMemo(() => compute(a, b), [a, b]);"
        },
        {
            icon: "🔧",
            name: "useCallback()",
            description: "Memoize callback functions to maintain referential equality.",
            code: "const handler = useCallback(() => {}, [deps]);"
        },
        {
            icon: "✂️",
            name: "Code Splitting",
            description: "Split components into smaller pieces to minimize re-render scope.",
            code: "const Heavy = lazy(() => import('./Heavy'));"
        }
    ];

    const bestPractices = [
        {
            title: "Move State Down",
            description: "Keep state as close to where it's used as possible to minimize re-render scope."
        },
        {
            title: "Lift Content Up",
            description: "Pass children as props to avoid re-rendering them when parent state changes."
        },
        {
            title: "Use Keys Properly",
            description: "Provide stable keys for list items to help React identify which items changed."
        },
        {
            title: "Avoid Inline Functions",
            description: "Define functions outside JSX or use useCallback to prevent new function references."
        }
    ];

    return (
        <motion.div
            className="minimise-rerenders-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="Minimise Re-renders"
                subtitle="Optimize React performance by reducing unnecessary renders"
                titleGradient="linear-gradient(to right, #0ea5e9, #38bdf8)"
                className="minimise-rerenders-header"
            />

            <motion.div
                className="rerenders-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaSync style={{ color: '#0ea5e9' }} /> What Causes Re-renders?</h3>
                <p>
                    In React, a re-render occurs when a component needs to reflect new data in the UI. While React is
                    highly optimized, unnecessary re-renders can still impact performance, especially in large applications.
                    Understanding what triggers re-renders and how to prevent them is crucial for building performant React apps.
                </p>
                <p>
                    By default, when a component re-renders, all of its child components also re-render. This cascading
                    effect can lead to performance issues if not managed properly. The good news is that React provides
                    several tools to help you minimize unnecessary re-renders.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🔍 Common Causes</h3>

            <div className="causes-grid">
                {causes.map((cause, index) => (
                    <motion.div
                        key={cause.title}
                        className="cause-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <div className="cause-header">
                            <span className="cause-emoji">{cause.emoji}</span>
                            <span className="cause-title">{cause.title}</span>
                        </div>
                        <p className="cause-description">{cause.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="comparison-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <h3 style={{ color: 'var(--text-color)', marginBottom: '8px' }}>⚖️ Before & After Comparison</h3>
                <p style={{ color: '#94a3b8', marginBottom: '16px' }}>
                    See how optimization techniques reduce unnecessary re-renders:
                </p>

                <div className="comparison-grid">
                    <div className="comparison-item bad">
                        <div className="comparison-label">
                            <FaTimesCircle style={{ color: '#ef4444' }} />
                            Without Optimization
                        </div>
                        <div className="comparison-code">
                            {`const Parent = () => {\n  const [count, setCount] = useState(0);\n  return <Child onIncrement={() => setCount(c => c + 1)} />;\n};`}
                        </div>
                        <div className="render-count bad">
                            🔄 Child re-renders on every parent state change
                        </div>
                    </div>

                    <div className="comparison-item good">
                        <div className="comparison-label">
                            <FaCheckCircle style={{ color: '#0ea5e9' }} />
                            With React.memo & useCallback
                        </div>
                        <div className="comparison-code">
                            {`const Parent = () => {\n  const [count, setCount] = useState(0);\n  const increment = useCallback(() => setCount(c => c + 1), []);\n  return <MemoChild onIncrement={increment} />;\n};`}
                        </div>
                        <div className="render-count good">
                            ✅ Child only re-renders when props actually change
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="performance-gain"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <div className="gain-value">75%</div>
                <div className="gain-label">Fewer Re-renders with Memoization</div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🛠️ Optimization Techniques</h3>

            <div className="techniques-section">
                {techniques.map((technique, index) => (
                    <motion.div
                        key={technique.name}
                        className="technique-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                    >
                        <div className="technique-header">
                            <span className="technique-icon">{technique.icon}</span>
                            <span className="technique-name">{technique.name}</span>
                        </div>
                        <p className="technique-text">{technique.description}</p>
                        <div className="code-snippet">{technique.code}</div>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>✨ Best Practices</h3>

            <div className="best-practices-grid">
                {bestPractices.map((practice, index) => (
                    <motion.div
                        key={practice.title}
                        className="practice-item"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3 + index * 0.1 }}
                    >
                        <h4>{practice.title}</h4>
                        <p>{practice.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="stats-showcase">
                <motion.div
                    className="stat-item"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.7 }}
                >
                    <div className="stat-number">3x</div>
                    <div className="stat-description">Faster Interactions</div>
                </motion.div>
                <motion.div
                    className="stat-item"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <div className="stat-number">60%</div>
                    <div className="stat-description">Less CPU Usage</div>
                </motion.div>
                <motion.div
                    className="stat-item"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.9 }}
                >
                    <div className="stat-number">200ms</div>
                    <div className="stat-description">Saved Per Interaction</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MinimiseReRenders;