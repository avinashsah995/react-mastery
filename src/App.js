import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Pagination from "./pages/pagination/Pagination";
import InfiniteScroll from "./pages/infiniteScroll/InfiniteScroll";
import PerformanceTips from "./pages/performanceTips/PerformanceTips";
import Virtualization from "./pages/virtualization/Virtualization";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/performance-tips" element={<PerformanceTips />} />
        <Route path="/virtualization" element={<Virtualization />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;