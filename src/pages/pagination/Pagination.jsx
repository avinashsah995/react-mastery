import { motion } from "motion/react";

const Pagination = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Pagination Page</h2>
        </motion.div>
    );
};

export default Pagination;
