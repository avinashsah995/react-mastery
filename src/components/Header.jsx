import { motion } from "motion/react";
import { FaReact } from "react-icons/fa";
import "./header.css";

const Header = () => {
    return (
        <motion.header
            className="header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FaReact size={30} color="#61DAFB" />
                <h1>React Playground</h1>
            </div>
        </motion.header>
    );
};

export default Header;
