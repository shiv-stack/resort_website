import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import WhatsAppButton from './components/pages/Whatsapp.jsx'
import Footer from "./components/Footer.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Adventure from "./components/pages/Adventure.jsx";
import Contact from "./components/pages/Contact.jsx";
import './styles/custom.css';
import './styles/tailwind.css'




const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  </Router>
);

export default App;
