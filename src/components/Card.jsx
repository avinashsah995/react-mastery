import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({ title, route, icon, description, color }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            className="card"
            onClick={() => navigate(route)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ borderTop: `4px solid ${color || 'var(--primary-color)'}` }}
        >
            <div className="card-icon" style={{ color: color }}>
                {icon}
            </div>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
        </motion.div>
    );
};

export default Card;
