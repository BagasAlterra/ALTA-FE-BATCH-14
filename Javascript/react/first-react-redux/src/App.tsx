import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Count from "./pages/count";
import Product from "./pages/product";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/count" element={<Count />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
