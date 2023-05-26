import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CookiesProvider } from "react-cookie"

import Login from "./pages/login"
import Home from "./pages/home"

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>

  )
}

export default App