import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import Header from "../../components/Header";
import "./home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header showHamburger={false} />
            <div className="home-wrapper">
                <motion.div
                    className="hero-section"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-icon"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        ⚛️
                    </motion.div>
                    <h1 className="hero-title">
                        React Performance <br />
                        <span className="hero-gradient-text">Mastery</span>
                    </h1>
                    <p className="hero-subtitle">
                        A comprehensive interactive playground to master advanced React concepts,
                        performance optimization techniques, and modern frontend patterns.
                    </p>

                    <motion.button
                        className="cta-button"
                        onClick={() => navigate('/explore')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaRocket /> Start Exploring <FaArrowRight />
                    </motion.button>
                </motion.div>

                <motion.div
                    className="features-preview"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="preview-item">
                        <h3 className="preview-number color-blue">60+</h3>
                        <p className="preview-label">Advanced Topics</p>
                    </div>
                    <div className="preview-item">
                        <h3 className="preview-number color-purple">30+</h3>
                        <p className="preview-label">Interactive Demos</p>
                    </div>
                    <div className="preview-item">
                        <h3 className="preview-number color-green">100%</h3>
                        <p className="preview-label">Modern UI</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Home;
