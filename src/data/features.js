import {
    FaListUl, FaInfinity, FaTachometerAlt, FaLayerGroup,
    FaCode, FaTree, FaCompressArrowsAlt, FaTrashAlt,
    FaImages, FaGlobeAmericas, FaBolt, FaServer,
    FaRedoAlt, FaRulerCombined, FaStopwatch, FaSpinner,
    FaBrain, FaCogs, FaBoxes, FaDatabase, FaCloud,
    FaMobileAlt, FaCss3Alt, FaLink, FaBan, FaFont,
    FaFlask, FaHourglassHalf, FaCube, FaRocket,
    FaNetworkWired, FaClock, FaWeightHanging,
    FaChartLine, FaCut, FaHeartbeat, FaUserClock,
    FaLightbulb, FaExchangeAlt
} from "react-icons/fa";

export const categorizedFeatures = [
    {
        category: "Rendering Optimization",
        features: [
            {
                title: "Performance Tips",
                route: "/performance-tips",
                icon: <FaTachometerAlt />,
                description: "Best practices and techniques to optimize your React application.",
                color: "#10b981"
            },
            {
                title: "Virtualization",
                route: "/virtualization",
                icon: <FaLayerGroup />,
                description: "Render massive lists efficiently by only showing visible items.",
                color: "#f43f5e"
            },
            {
                title: "Pagination",
                route: "/pagination",
                icon: <FaListUl />,
                description: "Efficiently manage large datasets by breaking them into pages.",
                color: "#3b82f6"
            },
            {
                title: "Infinite Scroll",
                route: "/infinite-scroll",
                icon: <FaInfinity />,
                description: "Seamlessly load content as the user scrolls down the page.",
                color: "#8b5cf6"
            },
            {
                title: "Minimise Re-renders",
                route: "/re-renders",
                icon: <FaRedoAlt />,
                description: "Prevent unnecessary renders to improve component performance.",
                color: "#8b5cf6"
            },
            {
                title: "Memoization",
                route: "/memoization",
                icon: <FaBrain />,
                description: "Cache expensive calculation results to avoid re-computation.",
                color: "#a855f7"
            },
            {
                title: "Lazy Loading",
                route: "/lazy-loading",
                icon: <FaSpinner />,
                description: "Load components and images only when needed.",
                color: "#84cc16"
            },
            {
                title: "Debounce & Throttle",
                route: "/debounce",
                icon: <FaStopwatch />,
                description: "Limit how frequently a function can fire during events.",
                color: "#14b8a6"
            },
            {
                title: "Layout Thrashing",
                route: "/layout-thrashing",
                icon: <FaRulerCombined />,
                description: "Avoid forced synchronous layouts to maintain smooth performance.",
                color: "#f43f5e"
            },
            {
                title: "Web Workers",
                route: "/web-workers",
                icon: <FaCogs />,
                description: "Offload heavy computations to background threads.",
                color: "#64748b"
            },
            {
                title: "GPU Acceleration",
                route: "/gpu-acceleration",
                icon: <FaRocket />,
                description: "Offload heavy rendering tasks to the GPU for smooth animations.",
                color: "#f43f5e"
            },
            {
                title: "View Transitions API",
                route: "/view-transitions",
                icon: <FaExchangeAlt />,
                description: "Create seamless transitions between DOM states.",
                color: "#8b5cf6"
            },
            {
                title: "React Suspense & Concurrent",
                route: "/suspense",
                icon: <FaHourglassHalf />,
                description: "Enable smoother rendering using React’s concurrent features.",
                color: "#9333ea",
                comingSoon: true
            },
            {
                title: "WASM",
                route: "/wasm",
                icon: <FaCube />,
                description: "Use WebAssembly to run heavy logic at near-native performance.",
                color: "#4b5563",
                comingSoon: true
            },
            {
                title: "requestIdleCallback",
                route: "/idle-callback",
                icon: <FaClock />,
                description: "Execute low-priority tasks when the browser is idle.",
                color: "#f59e0b",
                comingSoon: true
            }
        ]
    },

    {
        category: "Bundle Optimization",
        features: [
            {
                title: "Code Splitting",
                route: "/code-splitting",
                icon: <FaCode />,
                description: "Split your code into smaller bundles to improve initial load.",
                color: "#6366f1"
            },
            {
                title: "Tree Shaking",
                route: "/tree-shaking",
                icon: <FaTree />,
                description: "Remove unused code during bundling to reduce bundle size.",
                color: "#22c55e"
            },
            {
                title: "Minification",
                route: "/minification",
                icon: <FaCompressArrowsAlt />,
                description: "Reduce file size by removing unnecessary characters.",
                color: "#eab308"
            },
            {
                title: "Unused Packages",
                route: "/unused-packages",
                icon: <FaTrashAlt />,
                description: "Identify and remove unused dependencies.",
                color: "#ef4444"
            },
            {
                title: "Bundling Strategies",
                route: "/bundling",
                icon: <FaBoxes />,
                description: "Optimize bundling using Vite, ESBuild, or Webpack techniques.",
                color: "#4ade80",
                comingSoon: true
            },
            {
                title: "Dependency Size Optimization",
                route: "/dependency-size",
                icon: <FaWeightHanging />,
                description: "Replace heavy libraries with lighter alternatives.",
                color: "#dc2626",
                comingSoon: true
            }
        ]
    },

    {
        category: "Network Optimization",
        features: [
            {
                title: "HTTP/2 & API Optimization",
                route: "/http2",
                icon: <FaServer />,
                description: "Improve performance using multiplexing and optimized API design.",
                color: "#3b82f6"
            },
            {
                title: "CDN Usage",
                route: "/cdn",
                icon: <FaGlobeAmericas />,
                description: "Serve assets from edge locations for faster delivery.",
                color: "#06b6d4"
            },
            {
                title: "Preloading",
                route: "/preloading",
                icon: <FaBolt />,
                description: "Load critical resources early to speed up rendering.",
                color: "#f59e0b"
            },
            {
                title: "API Performance Optimization",
                route: "/api-performance",
                icon: <FaNetworkWired />,
                description: "Batch, cache, and dedupe API calls for efficient data loading.",
                color: "#0d9488",
                comingSoon: true
            },
            {
                title: "Prefetching & Preconnect",
                route: "/prefetching",
                icon: <FaLink />,
                description: "Prepare network connections early to reduce load delays.",
                color: "#0ea5e9",
                comingSoon: true
            },
            {
                title: "Render Blocking Optimization",
                route: "/render-blocking",
                icon: <FaBan />,
                description: "Avoid blocking the main thread by deferring scripts.",
                color: "#ef4444",
                comingSoon: true
            }
        ]
    },

    {
        category: "Asset Optimization",
        features: [
            {
                title: "Image Optimization",
                route: "/image-optimization",
                icon: <FaImages />,
                description: "Compress and resize images to improve loading.",
                color: "#ec4899"
            },
            {
                title: "Font Optimization",
                route: "/font-optimization",
                icon: <FaFont />,
                description: "Enhance performance by optimizing font loading.",
                color: "#b91c1c",
                comingSoon: true
            },
            {
                title: "Critical CSS",
                route: "/critical-css",
                icon: <FaCss3Alt />,
                description: "Inline essential CSS and remove unused styles.",
                color: "#2563eb",
                comingSoon: true
            }
        ]
    },

    {
        category: "Caching & Offline Optimization",
        features: [
            {
                title: "Caching Strategies",
                route: "/caching",
                icon: <FaDatabase />,
                description: "Improve repeat load times using browser-level caching.",
                color: "#3b82f6"
            },
            {
                title: "Service Workers",
                route: "/service-workers",
                icon: <FaCloud />,
                description: "Enable offline mode and background sync.",
                color: "#0ea5e9",
                comingSoon: true
            },
            {
                title: "PWA Optimization",
                route: "/pwa",
                icon: <FaMobileAlt />,
                description: "Optimize for installability, offline access, and fast startup.",
                color: "#f97316",
                comingSoon: true
            }
        ]
    },

    {
        category: "Browser & Memory Optimization",
        features: [
            {
                title: "Memory Leak Prevention",
                route: "/memory-leaks",
                icon: <FaFlask />,
                description: "Fix leaks caused by listeners, timers, and stale refs.",
                color: "#14b8a6",
                comingSoon: true
            },
            {
                title: "Long Task Splitting",
                route: "/long-tasks",
                icon: <FaCut />,
                description: "Split heavy tasks to keep the UI responsive.",
                color: "#fbbf24",
                comingSoon: true
            }
        ]
    },

    {
        category: "Monitoring & Diagnostics",
        features: [
            {
                title: "Performance Monitoring",
                route: "/performance-monitoring",
                icon: <FaChartLine />,
                description: "Track performance metrics and user experience.",
                color: "#10b981",
                comingSoon: true
            },
            {
                title: "Web Vitals",
                route: "/web-vitals",
                icon: <FaHeartbeat />,
                description: "Measure and improve essential performance metrics.",
                color: "#ef4444",
                comingSoon: true
            },
            {
                title: "React Profiler",
                route: "/react-profiler",
                icon: <FaUserClock />,
                description: "Analyze component rendering behavior.",
                color: "#3b82f6",
                comingSoon: true
            },
            {
                title: "Lighthouse",
                route: "/lighthouse",
                icon: <FaLightbulb />,
                description: "Audit your site’s performance and accessibility.",
                color: "#facc15",
                comingSoon: true
            }
        ]
    }
];
