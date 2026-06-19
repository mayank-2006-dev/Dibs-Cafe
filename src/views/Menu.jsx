"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Coffee, MapPin, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { menuCategories } from "../data/siteData.js";

const cardVariants = {
  hidden: { opacity: 0, y: 42, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

function MenuArt({ type }) {
  return (
    <motion.div
      className={`menu-art menu-art--${type}`}
      aria-hidden="true"
      animate={{ y: [0, -18, 0], rotate: [0, 4, -4, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <span />
      <span />
      <span />
      <span />
    </motion.div>
  );
}

function SteamField() {
  return (
    <div className="steam-field" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, index) => (
        <span key={index} style={{ "--steam-delay": `${index * 0.45}s`, "--steam-left": `${12 + index * 11}%` }} />
      ))}
    </div>
  );
}

function CoffeeBeans() {
  return (
    <div className="coffee-beans" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, index) => (
        <motion.span
          key={index}
          animate={{ y: [0, index % 2 ? 18 : -18, 0], rotate: [0, 18, -12, 0] }}
          transition={{ duration: 4 + index * 0.22, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function MenuCard({ item, index, layout }) {
  return (
    <motion.article
      className={`story-card story-card--${layout}`}
      variants={cardVariants}
      whileHover={{
        y: layout === "dark" ? -12 : -8,
        rotate: layout === "carousel" ? index % 2 ? -2 : 2 : 0,
        scale: layout === "dark" ? 1.035 : 1.02,
      }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
    >
      <span className="story-card__number">{String(index + 1).padStart(2, "0")}</span>
      <h3>{item.name}</h3>
      <strong>{item.price}</strong>
    </motion.article>
  );
}

function MenuSection({ category, index }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [80, -80]);
  const artRotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-12, 16]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.16, 0.84, 1], [0.32, 1, 1, 0.35]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.985, 1, 1, 0.985]);

  const isAlt = index % 2 === 1;

  return (
    <motion.section
      id={category.id}
      ref={sectionRef}
      className={`menu-story-section menu-story-section--${category.layout} ${isAlt ? "menu-story-section--alt" : ""}`}
      style={{ opacity: sectionOpacity, scale: sectionScale }}
    >
      <div className="marquee-bg" aria-hidden="true">
        <span>{category.marquee}</span>
        <span>{category.marquee}</span>
      </div>

      {category.layout === "notes" && <SteamField />}
      {category.layout === "pinterest" && <div className="cocoa-field" aria-hidden="true" />}
      {category.layout === "waffles" && <div className="choco-drip" aria-hidden="true" />}

      <motion.div className="menu-section-art-wrap" style={{ y, rotate: artRotate }}>
        <MenuArt type={category.art} />
      </motion.div>

      <div className="menu-story-inner">
        <motion.div
          className="menu-section-copy"
          initial={{ opacity: 0, x: -72 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.42 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Dibs Menu</span>
          <h2 className={category.layout === "notes" ? "story-title story-title--hand" : "story-title"}>
            {category.title}
          </h2>
          <p>{category.tagline}</p>

          {category.image && (
            <motion.div
              className="menu-image"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ marginTop: "2rem", borderRadius: "12px", overflow: "hidden" }}
            >
              <img src={category.image} alt={category.name} />
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className={`story-card-grid story-card-grid--${category.layout}`}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.22 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.08 }}
        >
          {category.items.map((item, cardIndex) => (
            <MenuCard key={item.name} item={item} index={cardIndex} layout={category.layout} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveCategory(visible.target.id);
        }
      },
      { root: null, rootMargin: "-42% 0px -42% 0px", threshold: [0.2, 0.4, 0.65] }
    );

    menuCategories.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="immersive-menu-page">
      <section className="menu-hero" id="menu-top">
        <CoffeeBeans />
        <SteamField />
        <motion.div
          className="menu-hero__content"
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Dibs Cafe</span>
          <h1>MENU</h1>
          <p>Warm sips, cold comforts and bakery treats.</p>
        </motion.div>
      </section>

      <nav className="menu-category-nav" aria-label="Menu categories">
        <div>
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={activeCategory === category.id ? "is-active" : ""}
              type="button"
              onClick={() => scrollToCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </nav>

      {menuCategories.map((category, index) => (
        <MenuSection key={category.id} category={category} index={index} />
      ))}

      <section className="menu-bottom-cta">
        <SteamField />
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles size={34} />
          <h2>Made for slow sips and sweet cravings.</h2>
          <div className="menu-cta-actions">
            <motion.div whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link className="button button--primary magnetic-link" href="/gallery">
                View Gallery <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link className="button button--dark magnetic-link" href="/find-us">
                <MapPin size={18} /> Find Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
