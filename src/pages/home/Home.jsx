import { motion } from "motion/react";
import {
    FaListUl, FaInfinity, FaTachometerAlt, FaLayerGroup,
    FaCode, FaTree, FaCompressArrowsAlt, FaTrashAlt,
    FaImages, FaGlobeAmericas, FaBolt, FaServer,
    FaRedoAlt, FaRulerCombined, FaStopwatch, FaSpinner,
    FaBrain, FaCogs
} from "react-icons/fa";
import Header from "../../components/Header";
import Card from "../../components/Card";
import "./home.css";

const Home = () => {
    const features = [
        {
            title: "Performance Tips",
            route: "/performance-tips",
            icon: <FaTachometerAlt />,
            description: "Best practices and techniques to optimize your React application.",
            color: "#10b981"
        },
        {
            title: "Virtualization",
            route: "/virtualization",
            icon: <FaLayerGroup />,
            description: "Render massive lists efficiently by only showing visible items.",
            color: "#f43f5e"
        },
        {
            title: "Pagination",
            route: "/pagination",
            icon: <FaListUl />,
            description: "Efficiently manage large datasets by breaking them into discrete pages.",
            color: "#3b82f6"
        },
        {
            title: "Infinite Scroll",
            route: "/infinite-scroll",
            icon: <FaInfinity />,
            description: "Seamlessly load content as the user scrolls down the page.",
            color: "#8b5cf6"
        },
        {
            title: "Code Splitting",
            route: "/code-splitting",
            icon: <FaCode />,
            description: "Split your code into smaller bundles to improve load time.",
            color: "#6366f1"
        },
        {
            title: "Tree Shaking",
            route: "/tree-shaking",
            icon: <FaTree />,
            description: "Eliminate dead code from your bundle during the build process.",
            color: "#22c55e"
        },
        {
            title: "Minification",
            route: "/minification",
            icon: <FaCompressArrowsAlt />,
            description: "Reduce file size by removing unnecessary characters and whitespace.",
            color: "#eab308"
        },
        {
            title: "Unused Packages",
            route: "/unused-packages",
            icon: <FaTrashAlt />,
            description: "Identify and remove unused dependencies to slim down your app.",
            color: "#ef4444"
        },
        {
            title: "Image Optimization",
            route: "/image-optimization",
            icon: <FaImages />,
            description: "Compress and resize images to reduce bandwidth usage.",
            color: "#ec4899"
        },
        {
            title: "CDN Usage",
            route: "/cdn",
            icon: <FaGlobeAmericas />,
            description: "Serve assets from servers closer to the user for faster delivery.",
            color: "#06b6d4"
        },
        {
            title: "Preloading",
            route: "/preloading",
            icon: <FaBolt />,
            description: "Load critical resources early to speed up the initial render.",
            color: "#f59e0b"
        },
        {
            title: "HTTP/2 & API",
            route: "/http2",
            icon: <FaServer />,
            description: "Optimize network requests with multiplexing and efficient API design.",
            color: "#3b82f6"
        },
        {
            title: "Minimise Re-renders",
            route: "/re-renders",
            icon: <FaRedoAlt />,
            description: "Prevent unnecessary renders to improve component performance.",
            color: "#8b5cf6"
        },
        {
            title: "Layout Thrashing",
            route: "/layout-thrashing",
            icon: <FaRulerCombined />,
            description: "Avoid forced synchronous layouts to maintain smooth 60fps.",
            color: "#f43f5e"
        },
        {
            title: "Debounce & Throttle",
            route: "/debounce",
            icon: <FaStopwatch />,
            description: "Limit the rate at which a function can fire.",
            color: "#14b8a6"
        },
        {
            title: "Lazy Loading",
            route: "/lazy-loading",
            icon: <FaSpinner />,
            description: "Load components and images only when they are needed.",
            color: "#84cc16"
        },
        {
            title: "Memoization",
            route: "/memoization",
            icon: <FaBrain />,
            description: "Cache expensive function results to avoid re-computation.",
            color: "#a855f7"
        },
        {
            title: "Web Workers",
            route: "/web-workers",
            icon: <FaCogs />,
            description: "Offload heavy computations to a background thread.",
            color: "#64748b"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <>
            <Header />
            <div className="home-wrapper">
                <motion.div
                    className="hero-section"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">Master React Concepts</h1>
                    <p className="hero-subtitle">
                        Explore advanced patterns and performance optimization techniques through interactive examples.
                    </p>
                </motion.div>

                <motion.div
                    className="home-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {features.map((item) => (
                        <motion.div key={item.title} variants={itemVariants}>
                            <Card {...item} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default Home;
