import { Link } from 'react-router-dom';
import './About.css';

const FEATURED_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB8QfkmYkhPYBBTSE5-9HnpJmH2XdJmeBrRePjElh3-UNc21Uclk1fu9rx0zQDrJ1hljaKa33r4PWsUM1Itf5B7rvzliUIHf2s-QJ7xGY_a2qh7B-9Ro6Ru-rmE8ugEhVT3VGMyj3GFn2U47ui9G8LyWBAeqhzIhXKsR7fzw1_yr4BDeVSSd7u4xN3h_R5eB_6CfzhMt-PGWSYYoriecVM66U_S7L2w_TJfY_W4e56eBpwYejDe3_yES5RgLzzuXMW7s2OX8M-UJis';
const BANNER_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCokdCeK2zGTRtzGVWRtU5UKcdAPbXD0vcxQb7_3hA9h01PlbO4Q0gM7PU-iwN48Flp4t5lH7OeDGUDY3Mm-AMjJ4DnSVEre8ZU3kv_MCHSZx0SLJBYgbMUmabOrbM9ZRQ5ZStyDOZ86B1wxj2G5SDa8c1sEhJO2tVewE-exocIUKXGJKn303a6FtTFP6dQr8UQUZ_5FIfPx_KbNOuXbfrCWjpZyc1C2DQ9WlWHd52WGOzx0k9m2UUe9-zhP1V-OZQS1JpS_vqbkAaE';

export default function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero" id="about-hero">
        <div className="about-hero-text animate-fade-in-up">
          <h1 className="font-headline">About Bacaafe</h1>
          <p>
            A story steeped in the rich heritage of Mogadishu, where every cup of coffee carries the warmth of our community and the soul of our history.
          </p>
        </div>
      </section>

      {/* Editorial Platter */}
      <section className="about-editorial" id="about-editorial">
        <div className="about-editorial-inner">
          <div className="editorial-image-wrap animate-fade-in-up">
            <div className="editorial-image">
              <img src={FEATURED_IMG} alt="Bacaafe cafe interior" />
            </div>
            <div className="est-badge">
              <span className="font-headline est-label">Est.</span>
              <span className="font-headline est-year">2014</span>
            </div>
          </div>
          <div className="editorial-text animate-fade-in-up delay-200">
            <div className="editorial-text-card">
              <h2 className="font-headline">Our Journey</h2>
              <p>
                Born in the heart of Mogadishu, Bacaafe began as a small vision to celebrate the ritual of coffee. We believe that a café is more than just a place to drink—it is the hearth of the neighborhood.
              </p>
              <p>
                From our carefully sourced beans to the hand-crafted pastries that fill our display, every element of Bacaafe is a tribute to Somali hospitality. We invite you to slow down, savor the moment, and find a home away from home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values" id="about-values">
        <div className="values-grid">
          <div className="value-card animate-fade-in-up">
            <span className="material-symbols-outlined filled value-icon">favorite</span>
            <h3 className="font-headline">Community</h3>
            <p>We believe in fostering connections, creating a space where stories are shared and friendships are brewed.</p>
          </div>
          <div className="value-card animate-fade-in-up delay-200">
            <span className="material-symbols-outlined filled value-icon">verified</span>
            <h3 className="font-headline">Quality</h3>
            <p>Only the finest ingredients make it to our tables. We take pride in the artisan craft of traditional baking.</p>
          </div>
          <div className="value-card animate-fade-in-up delay-400">
            <span className="material-symbols-outlined filled value-icon">history_edu</span>
            <h3 className="font-headline">Heritage</h3>
            <p>Our roots in Mogadishu guide our future, honoring the traditions that make our cafe truly unique.</p>
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="about-banner" id="about-banner">
        <div className="banner-wrapper">
          <div className="banner-overlay"></div>
          <img src={BANNER_IMG} alt="Steaming latte in sunlit cafe" className="banner-bg" />
          <div className="banner-content">
            <h2 className="font-headline">
              Experience the warmth<br />of our hearth.
            </h2>
            <Link to="/contact" className="btn-primary banner-btn" id="about-visit-btn">
              Come visit us today
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
