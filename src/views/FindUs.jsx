"use client";

import { Clock, Instagram, Mail, MapPin, Navigation, Phone } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { cafeDescription, contact } from "../data/siteData.js";

export default function FindUs() {
  return (
    <section className="page-section find-page">
      <Reveal className="page-heading">
        <span className="eyebrow">Find Us</span>
        <h1>A cozy Delhi corner waiting for your next coffee plan.</h1>
        <p>Walk in for a soft sip, a study hour, a dessert date, or a quiet little escape.</p>
      </Reveal>

      <div className="find-grid">
        <Reveal className="map-card">
          <iframe
            title="Dibs Cafe Delhi map"
            src={contact.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>

        <Reveal className="visit-card" delay={0.1}>
          <img src="/logo/logo.jpeg" alt="" className="visit-mascot" />
          <span className="eyebrow">Dibs Cafe, Delhi</span>
          <h2>Drop by for coffee and cute bakery cravings.</h2>
          <p className="visit-description">{cafeDescription}</p>
          <div className="info-list">
            <p>
              <MapPin size={18} /> {contact.address}
            </p>
            <p>
              <Phone size={18} /> <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
            </p>
            <p>
              <Mail size={18} /> <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
          <div className="hours-box">
            <h3>
              <Clock size={18} /> Opening Hours
            </h3>
            {contact.hours.map((item) => (
              <p key={item.day}>
                <span>{item.day}</span>
                <strong>{item.time}</strong>
              </p>
            ))}
          </div>
          <div className="visit-actions">
            <a className="button button--primary" href={contact.instagram} target="_blank" rel="noreferrer">
              <Instagram size={18} /> Instagram
            </a>
            <a className="button button--ghost button--dark" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`} target="_blank" rel="noreferrer">
              <Navigation size={18} /> Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
