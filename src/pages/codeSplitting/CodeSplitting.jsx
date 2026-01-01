import { useState, lazy, Suspense } from "react";
import { motion } from "motion/react";
import PageHeader from "../../components/PageHeader";
import { FaSpinner, FaCode, FaRocket, FaBox } from "react-icons/fa";
import "./code-splitting.css";

// Simulated lazy-loaded components
const HeavyComponentA = lazy(() =>
    new Promise(resolve =>
        setTimeout(() => resolve({
            default: () => <div className="loaded-component">✅ Heavy Component A Loaded!</div>
        }), 1500)
    )
);

const HeavyComponentB = lazy(() =>
    new Promise(resolve =>
        setTimeout(() => resolve({
            default: () => <div className="loaded-component">✅ Heavy Component B Loaded!</div>
        }), 2000)
    )
);

const HeavyComponentC = lazy(() =>
    new Promise(resolve =>
        setTimeout(() => resolve({
            default: () => <div className="loaded-component">✅ Heavy Component C Loaded!</div>
        }), 1000)
    )
);

const CodeSplitting = () => {
    const [loadedComponents, setLoadedComponents] = useState({
        A: false,
        B: false,
        C: false
    });

    const handleLoad = (component) => {
        setLoadedComponents(prev => ({ ...prev, [component]: true }));
    };

    return (
        <motion.div
            className="code-splitting-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="Code Splitting"
                subtitle="Load components on demand to improve performance"
                titleGradient="linear-gradient(to right, #6366f1, #8b5cf6)"
                className="code-splitting-header"
            />

            <motion.div
                className="intro-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3>🎯 What is Code Splitting?</h3>
                <p>
                    Code splitting allows you to split your code into smaller bundles that can be loaded on demand.
                    Instead of loading the entire application upfront, you only load the code that's needed for the current view.
                    This significantly improves initial load time and overall performance.
                </p>
            </motion.div>

            <motion.div
                className="intro-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <h3>💻 How to Implement</h3>
                <div className="code-block">
                    <code>
                        <span className="keyword">import</span> {"{"} lazy, Suspense {"}"} <span className="keyword">from</span> <span className="string">'react'</span>;<br /><br />
                        <span className="comment">// Instead of static import:</span><br />
                        <span className="comment">// import HeavyComponent from './HeavyComponent';</span><br /><br />
                        <span className="comment">// Use dynamic import:</span><br />
                        <span className="keyword">const</span> <span className="function">HeavyComponent</span> = <span className="function">lazy</span>(() {"=>"} <span className="function">import</span>(<span className="string">'./HeavyComponent'</span>));<br /><br />
                        <span className="comment">// Wrap with Suspense:</span><br />
                        {"<"}<span className="function">Suspense</span> fallback={"{<Loading />}"}{">"}<br />
                        {"  <"}<span className="function">HeavyComponent</span> /{">"}<br />
                        {"</"}<span className="function">Suspense</span>{">"}
                    </code>
                </div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🔄 Interactive Demo</h3>
            <p style={{ color: '#94a3b8', marginBottom: '24px' }}>
                Click the buttons below to dynamically load components. Notice the loading state while the component is being fetched.
            </p>

            <div className="demo-section">
                <motion.div
                    className="demo-card"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <FaCode style={{ fontSize: '2rem', color: '#6366f1' }} />
                    <h4>Heavy Component A</h4>
                    <p>A simulated heavy component that takes 1.5 seconds to load. Click to see it dynamically imported.</p>

                    {!loadedComponents.A ? (
                        <button className="load-btn" onClick={() => handleLoad('A')}>
                            <FaRocket /> Load Component
                        </button>
                    ) : (
                        <Suspense fallback={
                            <div className="loading-state">
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                                    <FaSpinner />
                                </motion.div>
                                Loading...
                            </div>
                        }>
                            <HeavyComponentA />
                        </Suspense>
                    )}
                </motion.div>

                <motion.div
                    className="demo-card"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <FaBox style={{ fontSize: '2rem', color: '#8b5cf6' }} />
                    <h4>Heavy Component B</h4>
                    <p>Another simulated component with a longer 2 second load time. Demonstrates varying bundle sizes.</p>

                    {!loadedComponents.B ? (
                        <button className="load-btn" onClick={() => handleLoad('B')}>
                            <FaRocket /> Load Component
                        </button>
                    ) : (
                        <Suspense fallback={
                            <div className="loading-state">
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                                    <FaSpinner />
                                </motion.div>
                                Loading...
                            </div>
                        }>
                            <HeavyComponentB />
                        </Suspense>
                    )}
                </motion.div>

                <motion.div
                    className="demo-card"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <FaRocket style={{ fontSize: '2rem', color: '#10b981' }} />
                    <h4>Heavy Component C</h4>
                    <p>A lighter component with only 1 second load time. Shows how smaller bundles load faster.</p>

                    {!loadedComponents.C ? (
                        <button className="load-btn" onClick={() => handleLoad('C')}>
                            <FaRocket /> Load Component
                        </button>
                    ) : (
                        <Suspense fallback={
                            <div className="loading-state">
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                                    <FaSpinner />
                                </motion.div>
                                Loading...
                            </div>
                        }>
                            <HeavyComponentC />
                        </Suspense>
                    )}
                </motion.div>
            </div>

            <div className="stats-section">
                <motion.div
                    className="stat-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <div className="stat-value" style={{ color: '#10b981' }}>40%</div>
                    <div className="stat-label">Reduced Initial Bundle Size</div>
                </motion.div>
                <motion.div
                    className="stat-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="stat-value" style={{ color: '#3b82f6' }}>2x</div>
                    <div className="stat-label">Faster First Paint</div>
                </motion.div>
                <motion.div
                    className="stat-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <div className="stat-value" style={{ color: '#8b5cf6' }}>∞</div>
                    <div className="stat-label">Scalable Architecture</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default CodeSplitting;