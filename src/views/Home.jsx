"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Coffee, Heart, Instagram, Sparkles } from "lucide-react";
import Link from "next/link";
import Reveal from "../components/Reveal.jsx";
import { aboutHighlights, cafeDescription, features, reels, testimonials } from "../data/siteData.js";

function HeroAmbience() {
  return (
    <div className="hero-ambience" aria-hidden="true">
      <span className="hero-blur hero-blur--one" />
      <span className="hero-blur hero-blur--two" />
      <div className="hero-steam">
        {Array.from({ length: 7 }).map((_, index) => (
          <span key={index} style={{ "--delay": `${index * 0.55}s`, "--left": `${18 + index * 9}%` }} />
        ))}
      </div>
      <div className="hero-dust">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} style={{ "--delay": `${index * 0.28}s`, "--x": `${6 + index * 5}%` }} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 560], [0, 120]);

  return (
    <>
      <section className="hero">
        <motion.div className="hero-bg" style={{ y: heroY }} />
        <div className="hero-overlay" />
        <HeroAmbience />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">New in Delhi</span>
          <h1>
            <span>Dibs</span>
            <span>Cafe</span>
          </h1>
          <p className="hero-kicker">Small cafe, big comfort</p>
          <p className="hero-copy">Where every sip feels like a little escape.</p>
          <div className="hero-actions">
            <Link className="button button--primary" href="/menu">
              Explore Menu <ArrowRight size={18} />
            </Link>
            <Link className="button button--ghost" href="/find-us">
              Find Us
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="section about-section">
        <Reveal className="section-heading">
          <span className="eyebrow">About Dibs</span>
          <h2>Born from the love of coffee, cozy corners and little moments.</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-photo">
            <img src="/2nd slide image/interior-booth.jpeg" alt="Warm compact seating inside Dibs Cafe" />
          </Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <p>{cafeDescription}</p>
            <div className="pill-grid">
              {aboutHighlights.map((item) => (
                <span key={item}>
                  <Sparkles size={15} /> {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section experience-section">
        <Reveal className="section-heading">
          <span className="eyebrow">Signature Experience</span>
          <h2>Cute comfort, crafted one small detail at a time.</h2>
        </Reveal>
        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal className="feature-card" key={feature.title} delay={index * 0.08}>
                <div className="card-icon">
                  <Icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section reels-section">
        <Reveal className="section-heading section-heading--center">
          <span className="eyebrow">@dibsdelhi</span>
          <h2>From our little corner of happiness</h2>
        </Reveal>
        <div className="reel-grid">
          {reels.map((reel, index) => (
            <Reveal className="reel-card" key={reel.title} delay={index * 0.08}>
              {reel.embedUrl ? (
                <iframe
                  src={reel.embedUrl}
                  title={reel.title}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  loading="lazy"
                />
              ) : (
                <a href={reel.reelUrl} target="_blank" rel="noreferrer" aria-label={`Open ${reel.title} on Instagram`}>
                  <img src={reel.image} alt={reel.title} />
                  <span className="reel-badge">
                    <Instagram size={16} /> Reel
                  </span>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section love-section">
        <Reveal className="section-heading">
          <span className="eyebrow">Customer Love</span>
          <h2>Soft reviews from first little visits.</h2>
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal className="testimonial-card" key={item.name} delay={index * 0.08}>
              <Coffee size={22} />
              <p>"{item.quote}"</p>
              <strong>{item.name}</strong>
              <Heart size={18} className="tiny-heart" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
