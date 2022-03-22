import React from "react";
import Testimonials from "../sections/Testimonials";
import About from "../sections/About";
import Starter from "../sections/Starter";
import Why from "../sections/Why";
import Blogs from "../sections/Blogs";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <motion.div initial="hidden" animate="show">
        <ScrollToTop />
        <Starter />
        <About />
        <Why />
        <Testimonials />
        <Blogs />
        <Contact />
      </motion.div>
    </>
  );
}

export default Home;
