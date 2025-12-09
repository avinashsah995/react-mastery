import { motion } from "motion/react";

const InfiniteScroll = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Infinite Scroll Page</h2>
        </motion.div>
    );
};

export default InfiniteScroll;
