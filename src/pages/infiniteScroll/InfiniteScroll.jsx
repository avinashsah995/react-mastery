import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import PageHeader from "../../components/PageHeader";
import { FaSpinner, FaStream } from "react-icons/fa";
import "./infinite-scroll.css";

const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observerRef = useRef(null);
    const itemsPerPage = 10;
    const totalItems = 100;

    const benefits = [
        {
            emoji: "🚀",
            title: "Instant Initial Load",
            description: "Loads only a small chunk of data initially, making the page feel instant."
        },
        {
            emoji: "📉",
            title: "Reduced Bandwidth",
            description: "Saves user data by only downloading content as it's needed."
        },
        {
            emoji: "🔄",
            title: "Seamless Flow",
            description: "Provides an uninterrupted browsing experience without pagination clicks."
        },
        {
            emoji: "🏗️",
            title: "Improved Performance",
            description: "Prevents browser lag by avoiding heavy initial DOM rendering."
        }
    ];

    const useCases = [
        {
            icon: "📱",
            title: "Social Media Feeds",
            description: "Endless scrolling for posts, images, and updates on social platforms."
        },
        {
            icon: "🛍️",
            title: "Product Listings",
            description: "Displaying thousands of products in e-commerce stores efficiently."
        },
        {
            icon: "📰",
            title: "News & Articles",
            description: "Continuous reading experience for long-form content and news sites."
        },
        {
            icon: "🖼️",
            title: "Image Galleries",
            description: "Viewing large collections of visual assets without performance hits."
        }
    ];

    // Generate mock data for a specific page
    const generateItems = useCallback((pageNum) => {
        const startIndex = (pageNum - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

        if (startIndex >= totalItems) {
            return [];
        }

        return Array.from({ length: endIndex - startIndex }, (_, i) => ({
            id: startIndex + i + 1,
            title: `Article ${startIndex + i + 1}`,
            description: `This is a fascinating article showcasing infinite scroll. As you scroll down, more content loads seamlessly without any page refreshes. This is item #${startIndex + i + 1} of ${totalItems}.`,
            image: `https://picsum.photos/seed/${startIndex + i + 200}/800/400`
        }));
    }, []);

    // Load initial items
    useEffect(() => {
        const initialItems = generateItems(1);
        setItems(initialItems);
    }, [generateItems]);

    // Load more items
    const loadMore = useCallback(() => {
        if (loading || !hasMore) return;

        setLoading(true);

        // Simulate API delay
        setTimeout(() => {
            const newItems = generateItems(page + 1);

            if (newItems.length === 0) {
                setHasMore(false);
            } else {
                setItems(prev => [...prev, ...newItems]);
                setPage(prev => prev + 1);
            }

            setLoading(false);
        }, 800);
    }, [page, loading, hasMore, generateItems]);

    // Intersection Observer for infinite scroll
    const lastItemRef = useCallback((node) => {
        if (loading) return;

        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                loadMore();
            }
        }, { threshold: 0.1 });

        if (node) {
            observerRef.current.observe(node);
        }
    }, [loading, hasMore, loadMore]);

    return (
        <motion.div
            className="infinite-scroll-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="Infinite Feed"
                subtitle={`Loaded ${items.length} of ${totalItems} items`}
                titleGradient="linear-gradient(to right, #8b5cf6, #a78bfa)"
                className="infinite-scroll-header"
            />

            <motion.div
                className="infinite-scroll-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaStream style={{ color: '#8b5cf6' }} /> What is Infinite Scroll?</h3>
                <p>
                    Infinite Scroll is a web design technique that loads content continuously as the user scrolls
                    down a page, eliminating the need for traditional pagination. It creates a seamless browsing
                    experience by dynamically fetching the next set of results just before the user reaches the
                    bottom of the current view.
                </p>
                <p>
                    This pattern is essential for data-heavy applications where users expect to consume large amounts
                    of information quickly. By loading content in small, manageable chunks, we can maintain high
                    performance and keep the browser responsive even when dealing with massive datasets.
                </p>
            </motion.div>

            <h3 className="section-title">✨ Key Benefits</h3>

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

            <h3 className="section-title">💡 Common Use Cases</h3>

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

            <h3 className="section-title">🎯 Interactive Demo: Infinite Feed</h3>

            <motion.div
                className="demo-info-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
            >
                <p>
                    <strong>Experience it:</strong> Scroll down to load more content. Watch as new cards
                    appear magically! This implementation uses the <strong>Intersection Observer API</strong> for
                    efficient scroll detection and handles loading states smoothly.
                </p>
            </motion.div>

            <div className="infinite-feed">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        ref={index === items.length - 1 ? lastItemRef : null}
                        className="feed-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="feed-image"
                            loading="lazy"
                        />
                        <div className="feed-content">
                            <h3 className="feed-title">{item.title}</h3>
                            <p className="feed-description">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {loading && (
                <div className="loading-indicator">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                        <FaSpinner />
                    </motion.div>
                </div>
            )}

            {!hasMore && (
                <div className="end-message">
                    🎉 You've reached the end! All {totalItems} items loaded.
                </div>
            )}

            <div className="metrics-grid">
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="metric-value">90%</div>
                    <div className="metric-label">Memory Saved</div>
                </motion.div>
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                >
                    <div className="metric-value">5x</div>
                    <div className="metric-label">Faster Navigation</div>
                </motion.div>
                <motion.div
                    className="metric-card"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                >
                    <div className="metric-value">1.2s</div>
                    <div className="metric-label">Avg. Load Time</div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default InfiniteScroll;
