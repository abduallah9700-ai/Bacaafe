import './Contact.css';

const MAP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7DhbuBuPmUVcXClpjr62dUXWsbIxJUWjLP0GYL_h7qbM7dDdXF0gbagDDNHy18Viu6a5ns6EUDCV2K8OtNewfG5_gFLYH3Tfi7df_2NJ-WETM7UwwkChVUGnlpcUZqT5hBgV_d5vmikRDemqW76wvV8Q-JcETOKNpquW2vUa-PM4TRYJSUPAQNJKP2KCYH9NWNhRVN-06qWi5OWyJWgdNGt5mp2P-hh8gLTRZ21O1Qa6bJbtbjBU_ViSCtEyfxrZQiQ8PHOn9KI3X';

export default function Contact() {
  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero" id="contact-hero">
        <h1 className="font-headline animate-fade-in-up">Contact Us</h1>
        <p className="animate-fade-in-up delay-200">
          We invite you into our sanctuary of freshly roasted beans and artisan pastries. Find us where the aroma of espresso meets the warm Mogadishu breeze.
        </p>
      </section>

      {/* Main Content */}
      <section className="contact-content" id="contact-content">
        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-left">
            {/* Info Card */}
            <div className="contact-info-card" id="contact-info">
              {/* Location */}
              <div className="info-block">
                <span className="info-label">The Location</span>
                <h2 className="font-headline info-title">Mogadishu, Somalia</h2>
                <p className="info-detail">
                  Wadajir District, Near the Peace Garden<br />
                  Premium Corner, Block 12
                </p>
              </div>

              {/* Opening Hours */}
              <div className="info-block">
                <span className="info-label">Opening Hours</span>
                <div className="hours-list">
                  <div className="hours-row">
                    <span>Mon — Fri</span>
                    <span className="hours-time">07:00 — 21:00</span>
                  </div>
                  <div className="hours-row">
                    <span>Saturday</span>
                    <span className="hours-time">08:00 — 22:00</span>
                  </div>
                  <div className="hours-row no-border">
                    <span>Sunday</span>
                    <span className="hours-time">09:00 — 18:00</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="info-block">
                <span className="info-label">Connect With Us</span>
                <div className="social-icons">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" id="contact-instagram">
                    <div className="social-icon-circle">
                      <span className="material-symbols-outlined">photo_camera</span>
                    </div>
                    <span>Instagram</span>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" id="contact-facebook">
                    <div className="social-icon-circle">
                      <span className="material-symbols-outlined">social_leaderboard</span>
                    </div>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Book a Table Card */}
            <div className="book-card" id="book-card">
              <div className="book-card-content">
                <h3 className="font-headline">Book a Table?</h3>
                <p>For groups larger than six, please drop us an email or give us a call.</p>
                <a href="mailto:hello@bacaafe.so" className="book-email">hello@bacaafe.so</a>
              </div>
              <span className="material-symbols-outlined filled book-icon">restaurant</span>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="contact-map" id="contact-map">
            <div className="map-placeholder"></div>
            <img src={MAP_IMG} alt="Mogadishu aerial view" className="map-image" />
            <div className="map-gradient"></div>

            {/* Pin */}
            <div className="map-pin">
              <div className="pin-dot">
                <span className="material-symbols-outlined filled">location_on</span>
              </div>
              <div className="pin-pulse"></div>
            </div>

            {/* Coordinates Bar */}
            <div className="map-coords" id="map-coords">
              <div className="coords-left">
                <span className="material-symbols-outlined">explore</span>
                <span className="coords-text">Coordinates: 2.0469° N, 45.3182° E</span>
              </div>
              <a
                href="https://www.google.com/maps?q=2.0469,45.3182"
                target="_blank"
                rel="noopener noreferrer"
                className="coords-btn"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="testimonial-banner" id="testimonial-section">
        <div className="testimonial-content">
          <span className="font-headline testimonial-quote">
            "The best coffee in the city, served with a side of Somali hospitality."
          </span>
          <div className="testimonial-stars">
            <span className="material-symbols-outlined filled star">star</span>
            <span className="material-symbols-outlined filled star">star</span>
            <span className="material-symbols-outlined filled star">star</span>
            <span className="material-symbols-outlined filled star">star</span>
            <span className="material-symbols-outlined filled star">star</span>
          </div>
        </div>
      </section>
    </main>
  );
}
