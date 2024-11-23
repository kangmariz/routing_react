import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


//components
import Layout from "./components/layout";
// pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

  function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />} >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  export default App;