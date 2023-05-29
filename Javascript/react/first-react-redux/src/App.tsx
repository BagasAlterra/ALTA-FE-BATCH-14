import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Count from "./pages/count";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
