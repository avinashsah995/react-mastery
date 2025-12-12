import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Pagination from "./pages/pagination/Pagination";
import InfiniteScroll from "./pages/infiniteScroll/InfiniteScroll";
import PerformanceTips from "./pages/performanceTips/PerformanceTips";
import Virtualization from "./pages/virtualization/Virtualization";

import CodeSplitting from "./pages/codeSplitting/CodeSplitting";
import TreeShaking from "./pages/treeShaking/TreeShaking";
import Minification from "./pages/minification/Minification";
import UnusedPackages from "./pages/unusedPackages/UnusedPackages";
import ImageOptimization from "./pages/imageOptimization/ImageOptimization";
import CDNUsage from "./pages/cdnUsage/CDNUsage";
import Preloading from "./pages/preloading/Preloading";
import HTTP2API from "./pages/http2API/HTTP2API";
import MinimiseReRenders from "./pages/minimiseReRenders/MinimiseReRenders";
import LayoutThrashing from "./pages/layoutThrashing/LayoutThrashing";
import DebounceThrottle from "./pages/debounceThrottle/DebounceThrottle";
import LazyLoading from "./pages/lazyLoading/LazyLoading";
import Memoization from "./pages/memoization/Memoization";
import WebWorkers from "./pages/webWorkers/WebWorkers";

// New pages
import GPUAcceleration from "./pages/gpuAcceleration/GPUAcceleration";
import ViewTransitions from "./pages/viewTransitions/ViewTransitions";
import Suspense from "./pages/suspense/Suspense";
import WASM from "./pages/wasm/WASM";
import IdleCallback from "./pages/idleCallback/IdleCallback";
import Bundling from "./pages/bundling/Bundling";
import DependencySize from "./pages/dependencySize/DependencySize";
import APIPerformance from "./pages/apiPerformance/APIPerformance";
import Prefetching from "./pages/prefetching/Prefetching";
import RenderBlocking from "./pages/renderBlocking/RenderBlocking";
import FontOptimization from "./pages/fontOptimization/FontOptimization";
import CriticalCSS from "./pages/criticalCSS/CriticalCSS";
import Caching from "./pages/caching/Caching";
import ServiceWorkers from "./pages/serviceWorkers/ServiceWorkers";
import PWA from "./pages/pwa/PWA";
import MemoryLeaks from "./pages/memoryLeaks/MemoryLeaks";
import LongTasks from "./pages/longTasks/LongTasks";
import PerformanceMonitoring from "./pages/performanceMonitoring/PerformanceMonitoring";
import WebVitals from "./pages/webVitals/WebVitals";
import ReactProfiler from "./pages/reactProfiler/ReactProfiler";
import Lighthouse from "./pages/lighthouse/Lighthouse";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Explore from "./pages/explore/Explore";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/performance-tips" element={<PerformanceTips />} />
        <Route path="/virtualization" element={<Virtualization />} />
        <Route path="/code-splitting" element={<CodeSplitting />} />
        <Route path="/tree-shaking" element={<TreeShaking />} />
        <Route path="/minification" element={<Minification />} />
        <Route path="/unused-packages" element={<UnusedPackages />} />
        <Route path="/image-optimization" element={<ImageOptimization />} />
        <Route path="/cdn" element={<CDNUsage />} />
        <Route path="/preloading" element={<Preloading />} />
        <Route path="/http2" element={<HTTP2API />} />
        <Route path="/re-renders" element={<MinimiseReRenders />} />
        <Route path="/layout-thrashing" element={<LayoutThrashing />} />
        <Route path="/debounce" element={<DebounceThrottle />} />
        <Route path="/lazy-loading" element={<LazyLoading />} />
        <Route path="/memoization" element={<Memoization />} />
        <Route path="/web-workers" element={<WebWorkers />} />

        {/* New Routes */}
        <Route path="/gpu-acceleration" element={<GPUAcceleration />} />
        <Route path="/view-transitions" element={<ViewTransitions />} />
        <Route path="/suspense" element={<Suspense />} />
        <Route path="/wasm" element={<WASM />} />
        <Route path="/idle-callback" element={<IdleCallback />} />
        <Route path="/bundling" element={<Bundling />} />
        <Route path="/dependency-size" element={<DependencySize />} />
        <Route path="/api-performance" element={<APIPerformance />} />
        <Route path="/prefetching" element={<Prefetching />} />
        <Route path="/render-blocking" element={<RenderBlocking />} />
        <Route path="/font-optimization" element={<FontOptimization />} />
        <Route path="/critical-css" element={<CriticalCSS />} />
        <Route path="/caching" element={<Caching />} />
        <Route path="/service-workers" element={<ServiceWorkers />} />
        <Route path="/pwa" element={<PWA />} />
        <Route path="/memory-leaks" element={<MemoryLeaks />} />
        <Route path="/long-tasks" element={<LongTasks />} />
        <Route path="/performance-monitoring" element={<PerformanceMonitoring />} />
        <Route path="/web-vitals" element={<WebVitals />} />
        <Route path="/react-profiler" element={<ReactProfiler />} />
        <Route path="/lighthouse" element={<Lighthouse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;