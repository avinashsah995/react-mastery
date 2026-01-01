import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { categorizedFeatures } from "../../data/features";
import Card from "../../components/Card";
import Header from "../../components/Header";
import "./explore.css";

const Explore = () => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const handleCategoryClick = (index) => {
        setActiveCategoryIndex(index);
        setIsMenuOpen(false);
    };
    const activeCategory = categorizedFeatures[activeCategoryIndex];

    return (
        <>
            <Header onMenuToggle={toggleMenu} />
            <div className="explore-wrapper">
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.aside
                            className="explore-sidebar mobile-only"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <h3 className="sidebar-title">Categories</h3>
                            {categorizedFeatures.map((group, index) => (
                                <div
                                    key={index}
                                    className={`category-item ${activeCategoryIndex === index ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(index)}
                                >
                                    <span>{group.category}</span>
                                    <span className="category-count-badge">{group.features.length}</span>
                                </div>
                            ))}
                        </motion.aside>
                    )}
                </AnimatePresence>

                {/* Desktop Sidebar (hidden on mobile) */}
                <aside className="explore-sidebar desktop-only">
                    <h3 className="sidebar-title">Categories</h3>
                    {categorizedFeatures.map((group, index) => (
                        <div
                            key={index}
                            className={`category-item ${activeCategoryIndex === index ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(index)}
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
