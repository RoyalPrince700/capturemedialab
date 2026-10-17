import { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Cursor from "./components/Cursor.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Preloader from "./components/Preloader.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import About from "./pages/About.jsx";
import Book from "./pages/Book.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";

export default function App() {
  const location = useLocation();
  const [ready, setReady] = useState(() => sessionStorage.getItem("cml-ready") === "1");

  return (
    <>
      <AnimatePresence>
        {!ready && (
          <Preloader
            onDone={() => {
              sessionStorage.setItem("cml-ready", "1");
              setReady(true);
            }}
          />
        )}
      </AnimatePresence>
      <Cursor />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home isReady={ready} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/book" element={<Book />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
