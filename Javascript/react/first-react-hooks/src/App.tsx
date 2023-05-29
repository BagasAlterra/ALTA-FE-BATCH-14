import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Login from "./pages/login";
import Home from "./pages/home";
import News from "./pages/news";
import Count from "./pages/count";
import Details from "./pages/details";

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/count" element={<Count />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
