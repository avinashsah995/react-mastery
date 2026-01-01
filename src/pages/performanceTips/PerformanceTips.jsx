import { motion } from "motion/react";
import PageHeader from "../../components/PageHeader";
import "./performance-tips.css";

const PerformanceTips = () => {
    return (
        <motion.div
            className="performance-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="Performance Playbook"
                subtitle="Essential tips for optimizing frontend performance"
                titleGradient="linear-gradient(to right, #10b981, #34d399)"
                className="performance-header"
            />

            <motion.div
                className="pdf-container"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {Array.from({ length: 16 }, (_, i) => i + 1).map((pageNumber) => (
                    <img
                        key={pageNumber}
                        src={`/assets/performance/Frontend_Performance_Playbook_page-${String(pageNumber).padStart(4, '0')}.jpg`}
                        alt={`Frontend Performance Playbook Page ${pageNumber}`}
                        className="performance-page-image"
                        style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '16px' }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default PerformanceTips;
