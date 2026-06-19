import { Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import { contact, navLinks } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="footer-brand" href="/">
          Dibs Cafe
        </Link>
        <p>Small cafe, big comfort. A Delhi corner for warm sips and little memories.</p>
      </div>
      <div className="footer-links">
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="footer-contact">
        <span>
          <MapPin size={16} /> {contact.address}
        </span>
        <a href={contact.instagram} target="_blank" rel="noreferrer">
          <Instagram size={16} /> Instagram
        </a>
      </div>
    </footer>
  );
}
