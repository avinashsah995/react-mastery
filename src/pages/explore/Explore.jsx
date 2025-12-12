import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { categorizedFeatures } from "../../data/features";
import Card from "../../components/Card";
import Header from "../../components/Header";
import "./explore.css";

const Explore = () => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    const activeCategory = categorizedFeatures[activeCategoryIndex];

    return (
        <>
            <Header />
            <div className="explore-wrapper">
                <aside className="explore-sidebar">
                    <h3 className="sidebar-title">Categories</h3>
                    {categorizedFeatures.map((group, index) => (
                        <div
                            key={index}
                            className={`category-item ${activeCategoryIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveCategoryIndex(index)}
                        >
                            <span>{group.category}</span>
                            <span className="category-count-badge">{group.features.length}</span>
                        </div>
                    ))}
                </aside>

                <main className="explore-content">
                    <motion.div
                        key={activeCategoryIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="content-header">
                            <h2 className="content-title">{activeCategory.category}</h2>
                            <p className="content-subtitle">
                                Explore {activeCategory.features.length} advanced concepts and optimization techniques.
                            </p>
                        </div>

                        <div className="features-grid">
                            {activeCategory.features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Card {...feature} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </main>
            </div>
        </>
    );
};

export default Explore;
