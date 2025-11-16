import { Routes, Route, useLocation } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import PageTransition2 from "@/components/PageTransition2";

export default function AppRoutes() {
  const location = useLocation();
  const pathname = location.pathname; 

  const renderTransition = () => {
    if ((pathname) === "/" || (pathname) === "/projects"){
      return <PageTransition key={pathname} />;
    }
    return <PageTransition2 key={pathname} />;
    
  }
  
  return (
    <>
      {/* Sliding white + green overlay on every route change */}
      <AnimatePresence mode="wait">
        {renderTransition()}
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