import { useState, useCallback } from "react";
import { motion } from "motion/react";
import PageHeader from "../../components/PageHeader";
import {
    FaDatabase, FaClock, FaNetworkWired, FaRocket,
    FaSync, FaServer, FaGlobe, FaShoppingCart,
    FaNewspaper, FaUserCircle, FaCloudDownloadAlt
} from "react-icons/fa";
import "./caching.css";

const Caching = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [noCacheRequests, setNoCacheRequests] = useState([]);
    const [cachedRequests, setCachedRequests] = useState([]);
    const [totalNoCacheTime, setTotalNoCacheTime] = useState(0);
    const [totalCacheTime, setTotalCacheTime] = useState(0);
    const [cache, setCache] = useState({});

    const simulateRequest = useCallback(async (url, useCache = false) => {
        const networkLatency = Math.floor(Math.random() * 200) + 100; // 100-300ms
        const cacheLatency = Math.floor(Math.random() * 5) + 1; // 1-5ms

        if (useCache && cache[url]) {
            return { source: 'cache', time: cacheLatency, url };
        }

        await new Promise(resolve => setTimeout(resolve, networkLatency));

        if (useCache) {
            setCache(prev => ({ ...prev, [url]: true }));
        }

        return { source: 'network', time: networkLatency, url };
    }, [cache]);

    const runDemo = async () => {
        setIsLoading(true);
        setNoCacheRequests([]);
        setCachedRequests([]);
        setTotalNoCacheTime(0);
        setTotalCacheTime(0);
        setCache({});

        const urls = [
            '/api/products',
            '/api/user',
            '/api/products', // Repeat
            '/api/cart',
            '/api/user', // Repeat
        ];

        let noCacheTotal = 0;
        let cacheTotal = 0;

        // Simulate non-cached requests
        for (const url of urls) {
            const result = await simulateRequest(url, false);
            noCacheTotal += result.time;
            setNoCacheRequests(prev => [...prev, result]);
            setTotalNoCacheTime(noCacheTotal);
        }

        // Clear cache for cached demo
        setCache({});

        // Simulate cached requests
        for (const url of urls) {
            const result = await simulateRequest(url, true);
            cacheTotal += result.time;
            setCachedRequests(prev => [...prev, result]);
            setTotalCacheTime(cacheTotal);
        }

        setIsLoading(false);
    };

    const clearDemo = () => {
        setNoCacheRequests([]);
        setCachedRequests([]);
        setTotalNoCacheTime(0);
        setTotalCacheTime(0);
        setCache({});
    };

    const cachingStrategies = [
        {
            name: "Cache-First",
            icon: <FaRocket />,
            color: "rgba(34, 197, 94, 0.2)",
            borderColor: "#22c55e",
            description: "Serve from cache immediately, then update cache in background. Best for static assets.",
            useCase: "CSS, JS bundles, images, fonts"
        },
        {
            name: "Network-First",
            icon: <FaNetworkWired />,
            color: "rgba(59, 130, 246, 0.2)",
            borderColor: "#3b82f6",
            description: "Try network first, fall back to cache if offline. Best for frequently updated content.",
            useCase: "API responses, user data, news feeds"
        },
        {
            name: "Stale-While-Revalidate",
            icon: <FaSync />,
            color: "rgba(168, 85, 247, 0.2)",
            borderColor: "#a855f7",
            description: "Return cached version immediately while fetching fresh data in background.",
            useCase: "Social feeds, dashboards, analytics"
        },
        {
            name: "Cache-Only",
            icon: <FaDatabase />,
            color: "rgba(251, 191, 36, 0.2)",
            borderColor: "#fbbf24",
            description: "Only serve from cache, never hit network. For truly static content.",
            useCase: "App shell, offline pages, static assets"
        }
    ];

    const realWorldExamples = [
        {
            icon: <FaShoppingCart />,
            color: "rgba(236, 72, 153, 0.2)",
            title: "E-commerce Product Catalog",
            description: "Cache product listings and images. Use stale-while-revalidate for pricing to balance freshness with speed."
        },
        {
            icon: <FaNewspaper />,
            color: "rgba(59, 130, 246, 0.2)",
            title: "News Website",
            description: "Network-first for headlines, cache-first for article bodies. Ensures readers always see latest breaking news."
        },
        {
            icon: <FaUserCircle />,
            color: "rgba(34, 197, 94, 0.2)",
            title: "User Dashboard",
            description: "Cache user preferences and settings. Use short TTL for dynamic data like notifications and statistics."
        }
    ];

    return (
        <motion.div
            className="caching-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHeader
                title="Caching Strategies"
                subtitle="Boost performance with smart browser-level caching"
                titleGradient="linear-gradient(to right, #3b82f6, #6366f1)"
                className="caching-header"
            />

            <motion.div
                className="caching-intro"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h3><FaDatabase style={{ color: '#3b82f6' }} /> Why Caching Matters</h3>
                <p>
                    Caching stores copies of files or data locally so they don't need to be fetched
                    from the network repeatedly. A well-implemented caching strategy can reduce load
                    times by <strong>50-90%</strong> and significantly decrease server costs.
                </p>
                <p>
                    When a user revisits your site, cached resources load almost instantly from
                    memory or disk, providing a native-app-like experience. This is critical for
                    <code> Core Web Vitals</code> and user retention.
                </p>
            </motion.div>

            <h3 className="section-title">
                🎯 Interactive Demo: Cache vs No Cache
            </h3>

            <div className="demo-container">
                <motion.div
                    className="demo-box no-cache"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="demo-header">
                        <FaServer style={{ color: '#ef4444' }} />
                        Without Caching
                    </div>
                    <div className="request-timeline">
                        {noCacheRequests.length === 0 ? (
                            <p style={{ color: '#64748b', textAlign: 'center', margin: 'auto' }}>
                                Click "Run Demo" to simulate requests
                            </p>
                        ) : (
                            noCacheRequests.map((req, idx) => (
                                <div key={idx} className="timeline-item network">
                                    <span className="timeline-icon">🌐</span>
                                    <span className="timeline-info">{req.url}</span>
                                    <span className="timeline-time">{req.time}ms</span>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="metrics-display">
                        <div className="metric-row">
                            <span>Total Requests:</span>
                            <span className="chache-metric-value">{noCacheRequests.length}</span>
                        </div>
                        <div className="metric-row">
                            <span>Network Requests:</span>
                            <span className="chache-metric-value slow">{noCacheRequests.length}</span>
                        </div>
                        <div className="metric-row">
                            <span>Total Time:</span>
                            <span className="chache-metric-value slow">{totalNoCacheTime}ms</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="demo-box cached"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="demo-header">
                        <FaDatabase style={{ color: '#22c55e' }} />
                        With Caching
                    </div>
                    <div className="request-timeline">
                        {cachedRequests.length === 0 ? (
                            <p style={{ color: '#64748b', textAlign: 'center', margin: 'auto' }}>
                                Click "Run Demo" to simulate requests
                            </p>
                        ) : (
                            cachedRequests.map((req, idx) => (
                                <div key={idx} className={`timeline-item ${req.source === 'cache' ? 'cache-hit' : 'network'}`}>
                                    <span className="timeline-icon">{req.source === 'cache' ? '💾' : '🌐'}</span>
                                    <span className="timeline-info">{req.url}</span>
                                    <span className="timeline-time">{req.time}ms</span>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="metrics-display">
                        <div className="metric-row">
                            <span>Total Requests:</span>
                            <span className="chache-metric-value">{cachedRequests.length}</span>
                        </div>
                        <div className="metric-row">
                            <span>Cache Hits:</span>
                            <span className="chache-metric-value fast">
                                {cachedRequests.filter(r => r.source === 'cache').length}
                            </span>
                        </div>
                        <div className="metric-row">
                            <span>Total Time:</span>
                            <span className="chache-metric-value fast">{totalCacheTime}ms</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="controls-section">
                <button
                    className="control-btn primary"
                    onClick={runDemo}
                    disabled={isLoading}
                >
                    <FaCloudDownloadAlt />
                    {isLoading ? 'Running...' : 'Run Demo'}
                </button>
                <button
                    className="control-btn secondary"
                    onClick={clearDemo}
                    disabled={isLoading}
                >
                    <FaSync />
                    Clear
                </button>
            </div>

            {totalNoCacheTime > 0 && totalCacheTime > 0 && (
                <motion.div
                    className="caching-intro"
                    style={{ borderColor: 'rgba(34, 197, 94, 0.3)', marginBottom: '32px' }}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <h3><FaRocket style={{ color: '#22c55e' }} /> Results</h3>
                    <p>
                        Caching saved <strong style={{ color: '#22c55e' }}>
                            {Math.round((1 - totalCacheTime / totalNoCacheTime) * 100)}%
                        </strong> of load time! Without caching: {totalNoCacheTime}ms.
                        With caching: {totalCacheTime}ms.
                    </p>
                </motion.div>
            )}

            <h3 className="section-title">
                📚 Caching Strategies
            </h3>

            <div className="strategies-grid">
                {cachingStrategies.map((strategy, index) => (
                    <motion.div
                        key={strategy.name}
                        className="strategy-card"
                        style={{ borderColor: strategy.borderColor }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                    >
                        <div className="strategy-icon" style={{ background: strategy.color }}>
                            {strategy.icon}
                        </div>
                        <div className="strategy-name">{strategy.name}</div>
                        <div className="strategy-desc">{strategy.description}</div>
                        <div className="strategy-use-case">
                            <strong>Best for:</strong> {strategy.useCase}
                        </div>
                    </motion.div>
                ))}
            </div>

            <h3 className="section-title">
                🌍 Real-World Examples
            </h3>

            <motion.div
                className="examples-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                {realWorldExamples.map((example, idx) => (
                    <div key={idx} className="example-item">
                        <div className="example-icon" style={{ background: example.color }}>
                            {example.icon}
                        </div>
                        <div className="example-content">
                            <h4>{example.title}</h4>
                            <p>{example.description}</p>
                        </div>
                    </div>
                ))}
            </motion.div>

            <motion.div
                className="caching-intro"
                style={{ marginTop: '32px', borderColor: 'rgba(168, 85, 247, 0.3)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                <h3><FaClock style={{ color: '#a855f7' }} /> Implementation: Cache-Control Headers</h3>
                <p>
                    The most common way to implement caching is using HTTP Cache-Control headers.
                    These tell the browser how long to cache a resource and when to revalidate.
                </p>
                <div className="code-block">
                    <span className="comment">// Express.js example - Static assets</span><br />
                    app.<span className="function">use</span>(<span className="string">'/static'</span>, express.<span className="function">static</span>(<span className="string">'public'</span>, &#123;<br />
                    &nbsp;&nbsp;maxAge: <span className="string">'1y'</span>, <span className="comment">// Cache for 1 year</span><br />
                    &nbsp;&nbsp;immutable: <span className="keyword">true</span><br />
                    &#125;));<br /><br />
                    <span className="comment">// API response with short cache</span><br />
                    res.<span className="function">set</span>(<span className="string">'Cache-Control'</span>, <span className="string">'public, max-age=60, stale-while-revalidate=30'</span>);
                </div>
            </motion.div>

            <motion.div
                className="caching-intro"
                style={{ marginTop: '24px', borderColor: 'rgba(59, 130, 246, 0.3)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
            >
                <h3><FaGlobe style={{ color: '#3b82f6' }} /> Service Worker Caching</h3>
                <p>
                    For more control, use Service Workers to implement custom caching logic.
                    This enables offline functionality and advanced caching strategies.
                </p>
                <div className="code-block">
                    <span className="comment">// Service Worker - Cache First Strategy</span><br />
                    self.<span className="function">addEventListener</span>(<span className="string">'fetch'</span>, (event) =&gt; &#123;<br />
                    &nbsp;&nbsp;event.<span className="function">respondWith</span>(<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;caches.<span className="function">match</span>(event.request)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.<span className="function">then</span>((cached) =&gt; cached || <span className="function">fetch</span>(event.request))<br />
                    &nbsp;&nbsp;);<br />
                    &#125;);
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Caching;

