import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowBack as IoIosArrowBackIcon } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import "./pagination.css";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const totalItems = 200;
    const contentRef = useRef(null);

    // Generate mock data
    const items = Array.from({ length: totalItems }, (_, i) => ({
        id: i + 1,
        title: `Project Item ${i + 1}`,
        description: `This is a detailed description for project item ${i + 1}. It showcases how pagination handles large datasets efficiently.`,
        image: `https://picsum.photos/seed/${i + 100}/400/300`
    }));

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll to the pagination content section
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`page-btn ${currentPage === i ? 'active' : ''}`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    const benefits = [
        {
            emoji: "🚀",
            title: "Faster Load Times",
            description: "Load only a subset of data instead of the entire dataset at once."
        },
        {
            emoji: "📊",
            title: "Reduced Bandwidth",
            description: "Save bandwidth by fetching data in chunks rather than all at once."
        },
        {
            emoji: "🎯",
            title: "Better UX",
            description: "Users can navigate through content systematically and find what they need."
        },
        {
            emoji: "💾",
            title: "Low Memory Usage",
            description: "Keep memory consumption minimal by rendering only current page items."
        }
    ];

    const useCases = [
        {
            icon: "📰",
            title: "Blog Posts & Articles",
            description: "Browse through archives of blog posts or news articles page by page."
        },
        {
            icon: "🛍️",
            title: "E-commerce Products",
            description: "Display large product catalogs with easy navigation between pages."
        },
        {
            icon: "📊",
            title: "Data Tables",
            description: "Show large datasets in manageable pages with navigation controls."
        },
        {
            icon: "🔍",
            title: "Search Results",
            description: "Display search results across multiple pages for better organization."
        }
    ];

    return (
        <motion.div
            className="pagination-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="pagination-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBackIcon />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #3b82f6, #60a5fa)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Pagination
                    </h2>
                    <p className="header-subtitle">Break large datasets into manageable pages</p>
                </div>
            </div>

            <motion.div
                className="pagination-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaFileAlt style={{ color: '#3b82f6' }} /> What is Pagination?</h3>
                <p>
                    Pagination is a technique for dividing large datasets into discrete pages, allowing users to
                    navigate through content in manageable chunks. Instead of loading and displaying hundreds or
                    thousands of items at once, pagination shows a limited number per page with controls to move
                    between pages.
                </p>
                <p>
                    This approach improves performance by reducing initial load time, lowering bandwidth usage,
                    and decreasing memory consumption. It also enhances user experience by making content more
                    digestible and easier to navigate, especially on mobile devices where screen space is limited.
                </p>
            </motion.div>

            <h3 style={{ color: 'var(--text-color)', marginBottom: '16px' }}>✨ Key Benefits</h3>

            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        className="benefit-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        <div className="benefit-emoji">{benefit.emoji}</div>
                        <div className="benefit-title">{benefit.title}</div>
                        <div className="benefit-description">{benefit.description}</div>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>
                💡 Common Use Cases
            </h3>

            <div className="use-cases-grid">
                {useCases.map((useCase, index) => (
                    <motion.div
                        key={useCase.title}
                        className="use-case-card"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                    >
                        <div className="use-case-header">
                            <span className="use-case-icon">{useCase.icon}</span>
                            <span className="use-case-title">{useCase.title}</span>
                        </div>
                        <div className="use-case-desc">{useCase.description}</div>
                    </motion.div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-color)', marginTop: '32px', marginBottom: '16px' }}>
                🎯 Interactive Demo
            </h3>

            <motion.div
                className="demo-info-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
            >
                <p>
                    <strong>Try it yourself!</strong> Navigate through <strong>{totalItems} items</strong> spread
                    across <strong>{totalPages} pages</strong>. Notice how quickly each page loads and how smooth
                    the navigation is. Each page shows {itemsPerPage} items at a time.
                </p>
            </motion.div>


            <div className="pagination-content" ref={contentRef}>
                <AnimatePresence mode="wait">
                    {currentItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="pagination-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <img src={item.image} alt={item.title} className="card-image" loading="lazy" />
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.description}</p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="pagination-controls">
                <button
                    className="page-btn nav-btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <IoIosArrowBack /> Prev
                </button>

                {renderPageNumbers()}

                <button
                    className="page-btn nav-btn"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next <IoIosArrowForward />
                </button>
            </div>

            <div className="metrics-grid">
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="metric-value">90%</div>
                    <div className="metric-label">Faster Page Loads</div>
                </motion.div>
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="metric-value">75%</div>
                    <div className="metric-label">Less Bandwidth Used</div>
                </motion.div>
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <div className="metric-value">5x</div>
                    <div className="metric-label">Better UX</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Pagination;
