import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Count from "./pages/count";
import Product from "./pages/product";
import Detail from "./pages/detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/count" element={<Count />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
