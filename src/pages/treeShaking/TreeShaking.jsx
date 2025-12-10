import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaTree, FaCheck, FaTimes, FaLeaf, FaCut, FaFileCode, FaBoxOpen } from "react-icons/fa";
import "./tree-shaking.css";

const TreeShaking = () => {
    const tips = [
        {
            icon: <FaLeaf />,
            title: "Use ES6 Modules",
            description: "Always use import/export syntax. CommonJS (require) doesn't support tree shaking."
        },
        {
            icon: <FaCut />,
            title: "Named Exports",
            description: "Prefer named exports over default exports for better dead code elimination."
        },
        {
            icon: <FaFileCode />,
            title: "Side Effect Free",
            description: "Mark packages as side-effect-free in package.json for optimal shaking."
        },
        {
            icon: <FaBoxOpen />,
            title: "Modular Imports",
            description: "Import only what you need: import { map } from 'lodash-es' instead of entire library."
        }
    ];

    return (
        <motion.div
            className="tree-shaking-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="tree-shaking-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #22c55e, #4ade80)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Tree Shaking
                    </h2>
                    <p className="header-subtitle">Eliminate dead code from your production bundle</p>
                </div>
            </div>

            <motion.div
                className="info-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaTree style={{ color: '#22c55e' }} /> What is Tree Shaking?</h3>
                <p>
                    Tree shaking is a term commonly used in JavaScript to describe the removal of dead code.
                    It relies on the static structure of ES6 module syntax (import and export) to detect which
                    modules are used and which are not. Like shaking a tree to remove dead leaves,
                    bundlers like Webpack and Rollup can eliminate unused exports from your final bundle.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>📊 Import Comparison</h3>

            <div className="comparison-section">
                <motion.div
                    className="comparison-card bad"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="comparison-badge bad"><FaTimes /> Bad Practice</span>
                    <h4>Importing Entire Library</h4>
                    <div className="code-example">
                        <code>
                            <span className="comment">// ❌ Imports everything (70KB+)</span>{'\n'}
                            <span className="keyword">import</span> _ <span className="keyword">from</span> <span className="string">'lodash'</span>;{'\n\n'}
                            <span className="comment">// Only using one function</span>{'\n'}
                            <span className="keyword">const</span> result = _.<span className="function">map</span>(arr, fn);
                        </code>
                    </div>
                    <div className="bundle-size">
                        <span className="bundle-size-label" style={{ color: '#ef4444' }}>~70 KB</span>
                        <div className="bundle-size-bar">
                            <motion.div
                                className="bundle-size-fill bad"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 0.5, duration: 1 }}
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="comparison-card good"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <span className="comparison-badge good"><FaCheck /> Best Practice</span>
                    <h4>Named/Modular Import</h4>
                    <div className="code-example">
                        <code>
                            <span className="comment">// ✅ Imports only what's needed (~2KB)</span>{'\n'}
                            <span className="keyword">import</span> {"{"} <span className="function">map</span> {"}"} <span className="keyword">from</span> <span className="string">'lodash-es'</span>;{'\n\n'}
                            <span className="comment">// Same functionality, smaller bundle</span>{'\n'}
                            <span className="keyword">const</span> result = <span className="function">map</span>(arr, fn);
                        </code>
                    </div>
                    <div className="bundle-size">
                        <span className="bundle-size-label" style={{ color: '#22c55e' }}>~2 KB</span>
                        <div className="bundle-size-bar">
                            <motion.div
                                className="bundle-size-fill good"
                                initial={{ width: 0 }}
                                animate={{ width: '15%' }}
                                transition={{ delay: 0.6, duration: 1 }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="info-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <h3>🌳 Visual Representation</h3>
                <p style={{ marginBottom: '16px' }}>
                    The bundler analyzes your code and removes exports that are never imported anywhere in your application.
                </p>
                <div className="tree-visual">
                    <div className="tree-node">
                        <motion.div
                            className="tree-node-box used"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            📦 utils.js
                        </motion.div>
                        <div className="tree-children">
                            <motion.div
                                className="tree-node"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <div className="tree-node-box used">formatDate()</div>
                            </motion.div>
                            <motion.div
                                className="tree-node"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="tree-node-box unused">parseXML()</div>
                            </motion.div>
                            <motion.div
                                className="tree-node"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.9 }}
                            >
                                <div className="tree-node-box used">debounce()</div>
                            </motion.div>
                            <motion.div
                                className="tree-node"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1.0 }}
                            >
                                <div className="tree-node-box unused">legacyHelper()</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <p style={{ marginTop: '16px', textAlign: 'center', fontSize: '0.9rem' }}>
                    <span style={{ color: '#22c55e' }}>■ Used</span> — Included in bundle &nbsp;&nbsp;
                    <span style={{ color: '#94a3b8' }}>■ Unused</span> — Removed (tree shaken)
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px', marginTop: '24px' }}>💡 Best Practices</h3>

            <div className="tips-grid">
                {tips.map((tip, index) => (
                    <motion.div
                        key={tip.title}
                        className="tip-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                    >
                        <h5>
                            <span style={{ color: '#22c55e' }}>{tip.icon}</span>
                            {tip.title}
                        </h5>
                        <p>{tip.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default TreeShaking;