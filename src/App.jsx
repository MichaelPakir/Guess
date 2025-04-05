import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={MainLayout} />
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
