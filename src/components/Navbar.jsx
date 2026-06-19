"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "../data/siteData.js";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <header className={`navbar ${isScrolled || !isHome ? "navbar--solid" : ""}`}>
      <Link className="brand" href="/" aria-label="Dibs Cafe home">
        <img src="/logo/logo.jpeg" alt="" />
        <span>Dibs Cafe</span>
      </Link>

      <button
        className="icon-button nav-toggle"
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`nav-links ${isOpen ? "nav-links--open" : ""}`} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={pathname === link.path ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
