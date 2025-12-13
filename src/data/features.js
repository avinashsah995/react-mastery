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
    FaLightbulb, FaExchangeAlt, FaProjectDiagram, FaStore, FaMapMarkerAlt, FaCalculator,
    FaLock, FaWpforms, FaListAlt, FaCheckCircle, FaThList,
    FaKeyboard, FaMagic, FaVideo, FaExpandArrowsAlt, FaFilm,
    FaPalette, FaEye, FaCloudDownloadAlt, FaSyncAlt, FaCodeBranch,
    FaHdd, FaBroadcastTower, FaFilter, FaFastForward, FaTint,
    FaStream, FaMapMarkedAlt, FaFileCode, FaFileImport, FaChartBar,
    FaTags, FaShareAlt, FaAd, FaVial, FaChartPie, FaRobot,
    FaUsers, FaBalanceScale, FaImage, FaHandPointer, FaWifi,
    FaBatteryHalf, FaPuzzlePiece, FaObjectGroup, FaExclamationTriangle,
    FaHammer, FaDocker, FaCog, FaFileArchive,
    FaUniversalAccess, FaAssistiveListeningSystems, FaCrosshairs,
    FaExclamationCircle, FaStepForward
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
    },
    {
        category: "State Management Optimization",
        features: [
            {
                title: "Context API Optimization",
                route: "/context-optimization",
                icon: <FaProjectDiagram />,
                description: "Prevent unnecessary re-renders in Context consumers.",
                color: "#8b5cf6",
                comingSoon: true
            },
            {
                title: "Redux Performance",
                route: "/redux-performance",
                icon: <FaStore />,
                description: "Optimize Redux with selectors, normalization, and batching.",
                color: "#764abc",
                comingSoon: true
            },
            {
                title: "Zustand Optimization",
                route: "/zustand-optimization",
                icon: <FaStore />,
                description: "Leverage Zustand's minimal re-render patterns.",
                color: "#854d0e",
                comingSoon: true
            },
            {
                title: "State Colocation",
                route: "/state-colocation",
                icon: <FaMapMarkerAlt />,
                description: "Keep state close to where it's used to reduce complexity.",
                color: "#0891b2",
                comingSoon: true
            },
            {
                title: "Derived State Optimization",
                route: "/derived-state",
                icon: <FaCalculator />,
                description: "Compute values efficiently without storing redundant state.",
                color: "#ea580c",
                comingSoon: true
            },
            {
                title: "Immer for Immutability",
                route: "/immer",
                icon: <FaLock />,
                description: "Simplify immutable updates with better performance.",
                color: "#16a34a",
                comingSoon: true
            }
        ]
    },

    {
        category: "Form & Input Optimization",
        features: [
            {
                title: "Controlled vs Uncontrolled",
                route: "/form-control",
                icon: <FaWpforms />,
                description: "Choose the right pattern for form performance.",
                color: "#0284c7",
                comingSoon: true
            },
            {
                title: "Form Libraries Comparison",
                route: "/form-libraries",
                icon: <FaListAlt />,
                description: "Compare React Hook Form, Formik, and other solutions.",
                color: "#7c3aed",
                comingSoon: true
            },
            {
                title: "Field-Level Validation",
                route: "/field-validation",
                icon: <FaCheckCircle />,
                description: "Validate inputs efficiently without full form re-renders.",
                color: "#059669",
                comingSoon: true
            },
            {
                title: "Large Form Optimization",
                route: "/large-forms",
                icon: <FaThList />,
                description: "Handle forms with hundreds of fields efficiently.",
                color: "#dc2626",
                comingSoon: true
            },
            {
                title: "Input Debouncing",
                route: "/input-debounce",
                icon: <FaKeyboard />,
                description: "Optimize text input handling with debouncing.",
                color: "#d97706",
                comingSoon: true
            }
        ]
    },

    {
        category: "Animation & Transition Optimization",
        features: [
            {
                title: "CSS vs JS Animations",
                route: "/animation-comparison",
                icon: <FaMagic />,
                description: "Choose the most performant animation approach.",
                color: "#ec4899",
                comingSoon: true
            },
            {
                title: "Framer Motion Optimization",
                route: "/framer-motion",
                icon: <FaVideo />,
                description: "Optimize complex animations with Framer Motion.",
                color: "#0ea5e9",
                comingSoon: true
            },
            {
                title: "FLIP Technique",
                route: "/flip-animation",
                icon: <FaExpandArrowsAlt />,
                description: "Create smooth layout animations using FLIP principle.",
                color: "#8b5cf6",
                comingSoon: true
            },
            {
                title: "requestAnimationFrame",
                route: "/request-animation-frame",
                icon: <FaFilm />,
                description: "Synchronize animations with browser refresh rate.",
                color: "#f59e0b",
                comingSoon: true
            },
            {
                title: "Transform & Opacity",
                route: "/transform-opacity",
                icon: <FaPalette />,
                description: "Use GPU-accelerated properties for smooth animations.",
                color: "#10b981",
                comingSoon: true
            },
            {
                title: "Intersection Observer",
                route: "/intersection-observer",
                icon: <FaEye />,
                description: "Trigger animations efficiently when elements enter viewport.",
                color: "#6366f1",
                comingSoon: true
            }
        ]
    },

    {
        category: "Data Fetching Optimization",
        features: [
            {
                title: "React Query/TanStack Query",
                route: "/react-query",
                icon: <FaCloudDownloadAlt />,
                description: "Optimize data fetching with caching and deduplication.",
                color: "#ef4444",
                comingSoon: true
            },
            {
                title: "SWR (Stale-While-Revalidate)",
                route: "/swr",
                icon: <FaSyncAlt />,
                description: "Fast UI with background revalidation strategy.",
                color: "#000000",
                comingSoon: true
            },
            {
                title: "GraphQL Optimization",
                route: "/graphql",
                icon: <FaCodeBranch />,
                description: "Optimize queries, batching, and caching in GraphQL.",
                color: "#e535ab",
                comingSoon: true
            },
            {
                title: "API Response Caching",
                route: "/api-caching",
                icon: <FaHdd />,
                description: "Implement effective client-side API caching.",
                color: "#0891b2",
                comingSoon: true
            },
            {
                title: "Optimistic Updates",
                route: "/optimistic-updates",
                icon: <FaRocket />,
                description: "Improve perceived performance with optimistic UI.",
                color: "#7c3aed",
                comingSoon: true
            },
            {
                title: "Polling vs WebSockets",
                route: "/realtime-data",
                icon: <FaBroadcastTower />,
                description: "Choose efficient real-time data synchronization.",
                color: "#059669",
                comingSoon: true
            },
            {
                title: "Request Deduplication",
                route: "/request-dedup",
                icon: <FaFilter />,
                description: "Prevent duplicate API calls for the same data.",
                color: "#dc2626",
                comingSoon: true
            }
        ]
    },

    {
        category: "Server-Side Optimization",
        features: [
            {
                title: "SSR vs SSG vs ISR",
                route: "/rendering-strategies",
                icon: <FaServer />,
                description: "Choose the right rendering strategy for your app.",
                color: "#000000",
                comingSoon: true
            },
            {
                title: "Next.js Performance",
                route: "/nextjs-performance",
                icon: <FaFastForward />,
                description: "Optimize Next.js apps with best practices.",
                color: "#0070f3",
                comingSoon: true
            },
            {
                title: "Hydration Optimization",
                route: "/hydration",
                icon: <FaTint />,
                description: "Minimize hydration time in SSR applications.",
                color: "#06b6d4",
                comingSoon: true
            },
            {
                title: "Streaming SSR",
                route: "/streaming-ssr",
                icon: <FaStream />,
                description: "Stream HTML progressively for faster perceived load.",
                color: "#8b5cf6",
                comingSoon: true
            },
            {
                title: "Edge Functions",
                route: "/edge-functions",
                icon: <FaMapMarkedAlt />,
                description: "Execute logic at the edge for faster responses.",
                color: "#f59e0b",
                comingSoon: true
            },
            {
                title: "Static Generation",
                route: "/static-generation",
                icon: <FaFileCode />,
                description: "Pre-render pages at build time for maximum speed.",
                color: "#10b981",
                comingSoon: true
            }
        ]
    },

    {
        category: "Third-Party Script Optimization",
        features: [
            {
                title: "Script Loading Strategies",
                route: "/script-loading",
                icon: <FaFileImport />,
                description: "Load third-party scripts without blocking rendering.",
                color: "#f59e0b",
                comingSoon: true
            },
            {
                title: "Analytics Optimization",
                route: "/analytics",
                icon: <FaChartBar />,
                description: "Add analytics without hurting performance.",
                color: "#10b981",
                comingSoon: true
            },
            {
                title: "Tag Manager Performance",
                route: "/tag-manager",
                icon: <FaTags />,
                description: "Optimize Google Tag Manager and similar tools.",
                color: "#4285f4",
                comingSoon: true
            },
            {
                title: "Social Media Embeds",
                route: "/social-embeds",
                icon: <FaShareAlt />,
                description: "Lazy load social media widgets efficiently.",
                color: "#1da1f2",
                comingSoon: true
            },
            {
                title: "Ad Performance",
                route: "/ad-optimization",
                icon: <FaAd />,
                description: "Balance monetization with user experience.",
                color: "#dc2626",
                comingSoon: true
            }
        ]
    },

    {
        category: "Testing & Quality Assurance",
        features: [
            {
                title: "Performance Testing",
                route: "/performance-testing",
                icon: <FaVial />,
                description: "Set up automated performance regression tests.",
                color: "#8b5cf6",
                comingSoon: true
            },
            {
                title: "Bundle Analysis",
                route: "/bundle-analysis",
                icon: <FaChartPie />,
                description: "Visualize and analyze your bundle composition.",
                color: "#f59e0b",
                comingSoon: true
            },
            {
                title: "Lighthouse CI",
                route: "/lighthouse-ci",
                icon: <FaRobot />,
                description: "Automate Lighthouse audits in your CI/CD pipeline.",
                color: "#facc15",
                comingSoon: true
            },
            {
                title: "Real User Monitoring",
                route: "/rum",
                icon: <FaUsers />,
                description: "Track actual user performance metrics in production.",
                color: "#10b981",
                comingSoon: true
            },
            {
                title: "Performance Budgets",
                route: "/performance-budgets",
                icon: <FaBalanceScale />,
                description: "Set and enforce performance limits in your build.",
                color: "#ef4444",
                comingSoon: true
            }
        ]
    },

    {
        category: "Mobile & Cross-Platform Optimization",
        features: [
            {
                title: "Mobile Performance",
                route: "/mobile-performance",
                icon: <FaMobileAlt />,
                description: "Optimize for mobile devices and slow networks.",
                color: "#6366f1",
                comingSoon: true
            },
            {
                title: "Responsive Images",
                route: "/responsive-images",
                icon: <FaImage />,
                description: "Serve appropriate image sizes for different devices.",
                color: "#ec4899",
                comingSoon: true
            },
            {
                title: "Touch Performance",
                route: "/touch-performance",
                icon: <FaHandPointer />,
                description: "Optimize touch interactions and gestures.",
                color: "#14b8a6",
                comingSoon: true
            },
            {
                title: "Network Awareness",
                route: "/network-awareness",
                icon: <FaWifi />,
                description: "Adapt to different network conditions dynamically.",
                color: "#0891b2",
                comingSoon: true
            },
            {
                title: "Battery Optimization",
                route: "/battery-optimization",
                icon: <FaBatteryHalf />,
                description: "Reduce power consumption on mobile devices.",
                color: "#84cc16",
                comingSoon: true
            }
        ]
    },

    {
        category: "Advanced Patterns",
        features: [
            {
                title: "Component Composition",
                route: "/component-composition",
                icon: <FaPuzzlePiece />,
                description: "Design efficient, reusable component architectures.",
                color: "#8b5cf6",
                comingSoon: true
            },
            {
                title: "Render Props vs Hooks",
                route: "/patterns-comparison",
                icon: <FaCodeBranch />,
                description: "Choose the most performant pattern for your use case.",
                color: "#3b82f6",
                comingSoon: true
            },
            {
                title: "HOCs Optimization",
                route: "/hoc-optimization",
                icon: <FaLayerGroup />,
                description: "Use Higher-Order Components efficiently.",
                color: "#6366f1",
                comingSoon: true
            },
            {
                title: "Compound Components",
                route: "/compound-components",
                icon: <FaObjectGroup />,
                description: "Build flexible, performant component APIs.",
                color: "#10b981",
                comingSoon: true
            },
            {
                title: "Error Boundaries",
                route: "/error-boundaries",
                icon: <FaExclamationTriangle />,
                description: "Handle errors without affecting entire app performance.",
                color: "#ef4444",
                comingSoon: true
            }
        ]
    },

    {
        category: "Build & Deploy Optimization",
        features: [
            {
                title: "Build Time Optimization",
                route: "/build-optimization",
                icon: <FaHammer />,
                description: "Speed up development and production builds.",
                color: "#f59e0b",
                comingSoon: true
            },
            {
                title: "Vercel Optimization",
                route: "/vercel",
                icon: <FaHammer />,
                description: "Optimize deployments on Vercel platform.",
                color: "#000000",
                comingSoon: true
            },
            {
                title: "Docker Optimization",
                route: "/docker",
                icon: <FaDocker />,
                description: "Create efficient Docker images for React apps.",
                color: "#2496ed",
                comingSoon: true
            },
            {
                title: "CI/CD Performance",
                route: "/cicd-performance",
                icon: <FaCog />,
                description: "Optimize continuous integration and deployment pipelines.",
                color: "#10b981",
                comingSoon: true
            },
            {
                title: "Compression Strategies",
                route: "/compression",
                icon: <FaFileArchive />,
                description: "Implement gzip, brotli, and other compression methods.",
                color: "#0891b2",
                comingSoon: true
            }
        ]
    },

    {
        category: "Accessibility & Performance",
        features: [
            {
                title: "A11y Performance Impact",
                route: "/accessibility-performance",
                icon: <FaUniversalAccess />,
                description: "Balance accessibility with performance optimization.",
                color: "#8b5cf6",
                comingSoon: true
            },
            {
                title: "Keyboard Navigation",
                route: "/keyboard-navigation",
                icon: <FaKeyboard />,
                description: "Optimize keyboard interactions without sacrificing speed.",
                color: "#6366f1",
                comingSoon: true
            },
            {
                title: "Screen Reader Performance",
                route: "/screen-reader",
                icon: <FaAssistiveListeningSystems />,
                description: "Ensure fast experiences for assistive technologies.",
                color: "#10b981",
                comingSoon: true
            },
            {
                title: "Focus Management",
                route: "/focus-management",
                icon: <FaCrosshairs />,
                description: "Manage focus efficiently in dynamic UIs.",
                color: "#f59e0b",
                comingSoon: true
            }
        ]
    },

    {
        category: "Database & Backend Integration",
        features: [
            {
                title: "Database Query Optimization",
                route: "/db-queries",
                icon: <FaDatabase />,
                description: "Optimize backend queries for faster frontend responses.",
                color: "#3b82f6",
                comingSoon: true
            },
            {
                title: "N+1 Query Prevention",
                route: "/n-plus-one",
                icon: <FaExclamationCircle />,
                description: "Avoid cascading query problems in data fetching.",
                color: "#ef4444",
                comingSoon: true
            },
            {
                title: "Data Pagination Backend",
                route: "/backend-pagination",
                icon: <FaStepForward />,
                description: "Implement efficient server-side pagination.",
                color: "#10b981",
                comingSoon: true
            },
            {
                title: "Caching Layers",
                route: "/caching-layers",
                icon: <FaLayerGroup />,
                description: "Implement Redis, CDN, and application-level caching.",
                color: "#dc2626",
                comingSoon: true
            }
        ]
    }
];
