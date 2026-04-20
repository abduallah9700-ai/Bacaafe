import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-inner">
        {/* Brand Column */}
        <div className="footer-brand">
          <img src="/logo.png" alt="Bacaafe Bakery & Cafe" style={{ height: '3rem', width: 'auto', mixBlendMode: 'multiply' }} />
          <p>
            Crafting the perfect moment, one cup at a time. Visit us in the heart of Mogadishu for a taste of authentic tradition.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
          </div>
          <span className="footer-copyright">© 2024 Bacaafe. Crafted for the Digital Curator.</span>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h5>Quick Links</h5>
          <Link to="/about">Our Story</Link>
          <Link to="/menu">Menu</Link>
          <a href="#">Sustainability</a>
          <a href="#">Locations</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h5>Newsletter</h5>
          <p style={{ fontSize: '0.875rem', color: '#78716c', marginBottom: '0.75rem' }}>
            Subscribe to receive our seasonal editorial.
          </p>
          <div className="footer-newsletter">
            <input type="email" placeholder="Email Address" id="footer-email" />
            <button id="footer-subscribe-btn">Join</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
