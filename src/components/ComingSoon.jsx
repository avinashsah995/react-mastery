import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FaRocket, FaArrowLeft } from "react-icons/fa";
import "./coming-soon.css";

const ComingSoon = ({ title, description }) => {
    const navigate = useNavigate();

    return (
        <div className="coming-soon-wrapper">
            <div className="glow-effect" />

            <motion.div
                className="coming-soon-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2
                    }}
                    className="coming-soon-icon"
                >
                    <FaRocket />
                </motion.div>

                <h1 className="coming-soon-title">{title || "Coming Soon"}</h1>

                <p className="coming-soon-text">
                    {description || "We are working hard to bring you this amazing feature. Stay tuned for updates!"}
                </p>

                <div className="progress-bar-container">
                    <motion.div
                        className="progress-bar"
                        initial={{ width: "0%" }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                </div>

                <motion.button
                    className="back-home-btn"
                    onClick={() => navigate("/")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaArrowLeft /> Back to Home
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ComingSoon;
