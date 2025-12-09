import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Pagination from "./pages/pagination/Pagination";
import InfiniteScroll from "./pages/infiniteScroll/InfiniteScroll";
import PerformanceTips from "./pages/performanceTips/PerformanceTips";
import Virtualization from "./pages/virtualization/Virtualization";

import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/performance-tips" element={<PerformanceTips />} />
        <Route path="/virtualization" element={<Virtualization />} />

        {/* New Performance Feature Routes */}
        <Route path="/code-splitting" element={<ComingSoon title="Code Splitting" />} />
        <Route path="/tree-shaking" element={<ComingSoon title="Tree Shaking" />} />
        <Route path="/minification" element={<ComingSoon title="Minification" />} />
        <Route path="/unused-packages" element={<ComingSoon title="Unused Packages" />} />
        <Route path="/image-optimization" element={<ComingSoon title="Image Optimization" />} />
        <Route path="/cdn" element={<ComingSoon title="CDN Usage" />} />
        <Route path="/preloading" element={<ComingSoon title="Preloading" />} />
        <Route path="/http2" element={<ComingSoon title="HTTP/2 & API" />} />
        <Route path="/re-renders" element={<ComingSoon title="Minimise Re-renders" />} />
        <Route path="/layout-thrashing" element={<ComingSoon title="Layout Thrashing" />} />
        <Route path="/debounce" element={<ComingSoon title="Debounce & Throttle" />} />
        <Route path="/lazy-loading" element={<ComingSoon title="Lazy Loading" />} />
        <Route path="/memoization" element={<ComingSoon title="Memoization" />} />
        <Route path="/web-workers" element={<ComingSoon title="Web Workers" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;