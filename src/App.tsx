import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="University-Website/home" element={<Home />} />
            <Route path="University-Website/about" element={<About />} />
            <Route path="University-Website/courses" element={<Courses />} />
            <Route path="University-Website/contact" element={<Contact />} />
            <Route path="University-Website/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
