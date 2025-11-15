import { Routes, Route, useLocation } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";

  export default function AppRoutes() {
    const location = useLocation();
  
    return (
      <>
        {/* Sliding white + green overlay on every route change */}
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname} pathKey={location.pathname} />
        </AnimatePresence>
  
        {/* Your existing routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    );
  }