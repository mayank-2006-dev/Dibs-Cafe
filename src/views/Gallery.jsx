"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";
import { galleryImages } from "../data/siteData.js";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <section className="page-section gallery-page">
        <Reveal className="page-heading">
          <span className="eyebrow">Gallery</span>
          <h1>Little moments at Dibs ♡</h1>
          <p>Warm lights, compact corners, coffee closeups, and tiny brand details made for memories.</p>
        </Reveal>

        <div className="masonry-gallery">
          {galleryImages.map((image, index) => (
            <Reveal className={`gallery-tile gallery-tile--${image.size}`} key={image.src} delay={index * 0.05}>
              <button type="button" onClick={() => setSelected(image)} aria-label={`View ${image.title}`}>
                <img src={image.src} alt={image.title} />
                <span>{image.title}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <button className="lightbox-backdrop" type="button" onClick={() => setSelected(null)} aria-label="Close gallery image" />
            <motion.figure
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 18 }}
              transition={{ duration: 0.28 }}
            >
              <button className="icon-button lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="Close">
                <X size={22} />
              </button>
              <img src={selected.src} alt={selected.title} />
              <figcaption>{selected.title}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
