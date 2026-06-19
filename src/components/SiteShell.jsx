"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

const PageShell = React.forwardRef(({ children }, ref) => {
  return (
    <motion.main
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
});

export default function SiteShell({ children }) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <PageShell key={pathname}>{children}</PageShell>
      </AnimatePresence>
      <Footer />
    </>
  );
}
