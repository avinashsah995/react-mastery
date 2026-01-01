import { motion } from "motion/react";
import { FaReact, FaBars } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ onMenuToggle, showHamburger = true }) => {
    return (
        <motion.header
            className="header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Link to="/" className="footer-logo">
                    <FaReact size={30} color="#61DAFB" />
                    <h1>React Playground</h1>
                </Link>
            </div>
            {showHamburger && (
                <button className="hamburger-btn" onClick={onMenuToggle} aria-label="Menu">
                    <FaBars size={24} />
                </button>
            )}
        </motion.header>
    );
};

export default Header;
