import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";
import "./infinite-scroll.css";

const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const observerRef = useRef(null);
    const itemsPerPage = 10;
    const totalItems = 100;

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
            <div className="infinite-scroll-header">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <IoIosArrowBack />
                </button>
                <div className="header-content">
                    <h2 className="header-title" style={{
                        background: "linear-gradient(to right, #8b5cf6, #a78bfa)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Infinite Feed
                    </h2>
                    <p className="header-subtitle">Loaded {items.length} of {totalItems} items</p>
                </div>
            </div>

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
        </motion.div>
    );
};

export default InfiniteScroll;
