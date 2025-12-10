import { useState } from "react";
import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaTrashAlt, FaSearch, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import "./unused-packages.css";

const UnusedPackages = () => {
    const [scanning, setScanning] = useState(false);
    const [scanned, setScanned] = useState(false);

    const mockUnusedPackages = [
        { name: "moment", size: "280 KB", reason: "Not imported anywhere" },
        { name: "lodash", size: "71 KB", reason: "Use lodash-es instead" },
        { name: "jquery", size: "88 KB", reason: "Legacy dependency" },
        { name: "underscore", size: "57 KB", reason: "Replaced by native methods" },
        { name: "request", size: "185 KB", reason: "Deprecated package" }
    ];

    const tools = [
        {
            icon: "📦",
            name: "depcheck",
            description: "Analyzes your project dependencies and finds unused packages.",
            command: "npx depcheck"
        },
        {
            icon: "🔍",
            name: "npm-check",
            description: "Checks for outdated, incorrect, and unused dependencies.",
            command: "npx npm-check"
        },
        {
            icon: "🧹",
            name: "unimported",
            description: "Finds unused ES6 module imports in your codebase.",
            command: "npx unimported"
        }
    ];

    const steps = [
        {
            title: "Run Analysis",
            description: "Use tools like depcheck or npm-check to scan your project for unused dependencies."
        },
        {
            title: "Review Results",
            description: "Carefully examine the list of unused packages. Some may be dev dependencies or peer dependencies."
        },
        {
            title: "Remove Safely",
            description: "Uninstall packages one at a time using 'npm uninstall <package>' and test your app."
        },
        {
            title: "Update package.json",
            description: "Ensure your package.json is clean and only contains necessary dependencies."
        }
    ];

    const handleScan = () => {
        setScanning(true);
        setTimeout(() => {
            setScanning(false);
            setScanned(true);
        }, 2000);
    };

    const totalWaste = mockUnusedPackages.reduce((acc, pkg) => {
        const size = parseInt(pkg.size);
        return acc + size;
    }, 0);

    return (
        <motion.div
            className="unused-packages-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="unused-packages-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #ef4444, #f87171)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Cleaning Unused Packages
                    </h2>
                    <p className="header-subtitle">Identify and remove dependencies you're not using</p>
                </div>
            </div>

            <motion.div
                className="intro-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaTrashAlt style={{ color: '#ef4444' }} /> Why Remove Unused Packages?</h3>
                <p>
                    Over time, projects accumulate dependencies that are no longer used. These unused packages
                    increase your bundle size, slow down installation times, and can introduce security
                    vulnerabilities. Regularly auditing and removing unused dependencies keeps your project lean and secure.
                </p>
                <p>
                    A typical medium-sized React project can save 30-50% of its bundle size by removing unused packages!
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🔍 Interactive Package Scanner</h3>

            <motion.div
                className="demo-analyzer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="analyzer-header">
                    <span className="analyzer-title">Project Dependencies</span>
                    <button
                        className="scan-button"
                        onClick={handleScan}
                        disabled={scanning || scanned}
                    >
                        <FaSearch /> {scanning ? "Scanning..." : scanned ? "Scan Complete" : "Run Analysis"}
                    </button>
                </div>

                {scanning && (
                    <motion.div
                        className="scanning-animation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                            <FaSearch />
                        </motion.div>
                        <p>Analyzing dependencies...</p>
                    </motion.div>
                )}

                {scanned && !scanning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="packages-list">
                            {mockUnusedPackages.map((pkg, index) => (
                                <motion.div
                                    key={pkg.name}
                                    className="package-item"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="package-info">
                                        <div className="package-name">{pkg.name}</div>
                                        <div className="package-size">{pkg.size} • {pkg.reason}</div>
                                    </div>
                                    <span className="package-status">UNUSED</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="summary-stats">
                            <motion.div
                                className="stat-box"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="stat-number danger">{mockUnusedPackages.length}</div>
                                <div className="stat-description">Unused Packages</div>
                            </motion.div>
                            <motion.div
                                className="stat-box"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <div className="stat-number warning">~{totalWaste} KB</div>
                                <div className="stat-description">Wasted Space</div>
                            </motion.div>
                            <motion.div
                                className="stat-box"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="stat-number success">40%</div>
                                <div className="stat-description">Potential Savings</div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {!scanned && !scanning && (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                        <FaExclamationTriangle style={{ fontSize: '3rem', marginBottom: '16px', opacity: 0.5 }} />
                        <p>Click "Run Analysis" to scan for unused packages</p>
                    </div>
                )}
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>🛠️ Detection Tools</h3>

            <div className="tools-section">
                {tools.map((tool, index) => (
                    <motion.div
                        key={tool.name}
                        className="tool-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                    >
                        <div className="tool-header">
                            <span className="tool-icon">{tool.icon}</span>
                            <span className="tool-name">{tool.name}</span>
                        </div>
                        <p className="tool-description">{tool.description}</p>
                        <div className="tool-command">{tool.command}</div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="steps-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <h3 style={{ marginBottom: '8px' }}>
                    <FaCheckCircle style={{ color: '#22c55e', marginRight: '8px' }} />
                    How to Clean Up
                </h3>
                <p style={{ color: '#94a3b8', marginBottom: '16px' }}>
                    Follow these steps to safely remove unused packages from your project:
                </p>
                <div className="steps-list">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            className="step-item"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.9 + index * 0.1 }}
                        >
                            <div className="step-number">{index + 1}</div>
                            <div className="step-content">
                                <div className="step-title">{step.title}</div>
                                <div className="step-description">{step.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default UnusedPackages;