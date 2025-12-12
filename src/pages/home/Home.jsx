import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import Header from "../../components/Header";
import "./home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className="home-wrapper" style={{
                minHeight: 'calc(100vh - 80px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                paddingBottom: '100px'
            }}>
                <motion.div
                    className="hero-section"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        style={{
                            fontSize: '4rem',
                            marginBottom: '20px',
                            display: 'inline-block',
                            filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))'
                        }}
                    >
                        ⚛️
                    </motion.div>
                    <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
                        React Performance <br />
                        <span style={{
                            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>Mastery</span>
                    </h1>
                    <p className="hero-subtitle" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px' }}>
                        A comprehensive interactive playground to master advanced React concepts,
                        performance optimization techniques, and modern frontend patterns.
                    </p>

                    <motion.button
                        className="cta-button"
                        onClick={() => navigate('/explore')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                            color: "white",
                            border: "none",
                            padding: "16px 32px",
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            borderRadius: "50px",
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                        }}
                    >
                        <FaRocket /> Start Exploring <FaArrowRight />
                    </motion.button>
                </motion.div>

                <motion.div
                    className="features-preview"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    style={{
                        display: 'flex',
                        gap: '40px',
                        marginTop: '80px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    <div className="preview-item">
                        <h3 style={{ fontSize: '2.5rem', color: '#3b82f6', margin: 0 }}>40+</h3>
                        <p style={{ color: '#94a3b8', margin: '5px 0' }}>Advanced Topics</p>
                    </div>
                    <div className="preview-item">
                        <h3 style={{ fontSize: '2.5rem', color: '#8b5cf6', margin: 0 }}>20+</h3>
                        <p style={{ color: '#94a3b8', margin: '5px 0' }}>Interactive Demos</p>
                    </div>
                    <div className="preview-item">
                        <h3 style={{ fontSize: '2.5rem', color: '#10b981', margin: 0 }}>100%</h3>
                        <p style={{ color: '#94a3b8', margin: '5px 0' }}>Modern UI</p>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Home;
