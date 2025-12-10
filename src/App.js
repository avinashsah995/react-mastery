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
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;