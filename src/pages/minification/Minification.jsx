import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaCompressArrowsAlt, FaFileCode, FaRocket, FaCog, FaTools } from "react-icons/fa";
import "./minification.css";

const Minification = () => {
    const beforeCode = `// Unminified Code
function calculateTotalPrice(items, taxRate, discountPercentage) {
    // Calculate subtotal
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].price * items[i].quantity;
    }
    
    // Apply discount
    const discountAmount = subtotal * (discountPercentage / 100);
    const afterDiscount = subtotal - discountAmount;
    
    // Calculate tax
    const taxAmount = afterDiscount * (taxRate / 100);
    
    // Return final total
    return afterDiscount + taxAmount;
}

// Export the function
export { calculateTotalPrice };`;

    const afterCode = `function calculateTotalPrice(t,e,a){let n=0;for(let e=0;e<t.length;e++)n+=t[e].price*t[e].quantity;const c=n*(a/100),l=n-c;return l+l*(e/100)}export{calculateTotalPrice};`;

    const techniques = [
        {
            icon: "🔤",
            title: "Whitespace Removal",
            description: "Removes spaces, tabs, and newlines that aren't necessary for code execution."
        },
        {
            icon: "💬",
            title: "Comment Stripping",
            description: "Eliminates all comments including single-line and multi-line annotations."
        },
        {
            icon: "📝",
            title: "Variable Renaming",
            description: "Shortens variable names to single characters (a, b, c) to reduce file size."
        },
        {
            icon: "⚡",
            title: "Dead Code Removal",
            description: "Removes unreachable code and unused functions from the bundle."
        }
    ];

    const tools = [
        { name: "Terser", logo: "⚙️" },
        { name: "UglifyJS", logo: "🔧" },
        { name: "esbuild", logo: "⚡" },
        { name: "SWC", logo: "🦀" }
    ];

    return (
        <motion.div
            className="minification-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="minification-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #eab308, #fbbf24)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Minification & Compression
                    </h2>
                    <p className="header-subtitle">Reduce file size by removing unnecessary characters</p>
                </div>
            </div>

            <motion.div
                className="explanation-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaCompressArrowsAlt style={{ color: '#eab308' }} /> What is Minification?</h3>
                <p>
                    Minification is the process of removing all unnecessary characters from source code without
                    changing its functionality. This includes whitespace, comments, line breaks, and shortening
                    variable names. The result is smaller file sizes, faster download times, and improved performance.
                </p>
                <p>
                    Modern build tools like Webpack, Vite, and Parcel automatically minify your production builds,
                    but understanding how it works helps you write more efficient code from the start.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>📝 Before & After Comparison</h3>

            <div className="before-after-section">
                <motion.div
                    className="code-panel"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="panel-header">
                        <span className="panel-title">Before Minification</span>
                        <span className="file-size-badge before">~580 bytes</span>
                    </div>
                    <div className="code-content">
                        <pre>{beforeCode}</pre>
                    </div>
                </motion.div>

                <motion.div
                    className="code-panel"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="panel-header">
                        <span className="panel-title">After Minification</span>
                        <span className="file-size-badge after">~180 bytes</span>
                    </div>
                    <div className="code-content">
                        <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                            {afterCode}
                        </pre>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="savings-card"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="savings-value">69%</div>
                <div className="savings-label">Size Reduction Achieved</div>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>🔧 Minification Techniques</h3>

            <div className="techniques-grid">
                {techniques.map((technique, index) => (
                    <motion.div
                        key={technique.title}
                        className="technique-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                    >
                        <div className="technique-icon">{technique.icon}</div>
                        <h4>{technique.title}</h4>
                        <p>{technique.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="mini-tools-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
            >
                <h3 style={{ marginBottom: '8px' }}>
                    <FaTools style={{ color: '#eab308', marginRight: '8px' }} />
                    Popular Minification Tools
                </h3>
                <p style={{ color: '#94a3b8', marginBottom: '16px' }}>
                    These tools are commonly used in modern JavaScript build pipelines:
                </p>
                <div className="tools-grid">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            className="tool-item"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.1 + index * 0.1 }}
                        >
                            <span className="tool-logo">{tool.logo}</span>
                            <span className="tool-name">{tool.name}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Minification;