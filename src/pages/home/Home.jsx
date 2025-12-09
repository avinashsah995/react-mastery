import { motion } from "motion/react";
import { FaListUl, FaInfinity, FaTachometerAlt, FaLayerGroup } from "react-icons/fa";
import Header from "../../components/Header";
import Card from "../../components/Card";
import "./home.css";

const Home = () => {
    const features = [
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
