import './Menu.css';

const LATTE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqIQomV3oomHWNlmrdI2V_e04v550ERJZ2QDniOZh1KhqZ7AKuBzD5sKSy8S0k7BGl9AgQboPgZquZwYI-NRx1VJp-q9YiPLm-UtUi2clW1JFmEojVQwO4pmL_E2sEdFbBfoar_gmpMJVeOyOOREVc1BX6SbWe9NM2KHSBJ6pm5cgrz7C4ZCNO7JVD4jj7cxKsjzbngpoPFTJfxEE8ouyZxqclglqzLR7yvgemVafGv7vJrhbZ48GITy8qYleatfwCQViO4lnW766o';
const BUN_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmsXGeSg7hUNlVwiHoSThBZr307o-PWeb0UwX1jPX0dLrYXx9h6DcunU1YBjAmX-oDuFyxi1C0E4EO-KqpG4OHSDw7TNsf_zRNUHtkXTCCy86XIX7U4fouAMeJV7e689MNBYYHmKVEC14aB6h1UruiCUtZ5AijceZohoMC7-DIsYUyWBjIfSrIa09LJID5-lxsMXZOvwjr6UlD06HYp8wuN06F9zqi_NM_aWUVKK3YLc6eVWflUyxaDzjlJ6miV9VTnJqxKnvk-Atc';
const CROISSANT_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD08NsP8SGraVA-T0eDXVdHEMcum8oSyMwjjlQWgpJW5hrgG5fEgXSVHzvT0imLfqDmcKby2vrC_Uxpor8eOQWHBzEh0VbDsUP8aYhb136Ab4YKvBBe-xu2bG017a7LBjG8jM8r2_ayQJyq7vKmql4StVnJbkbu2FYmwQFYEMjluiW7BloWh1ELWdUcWWjVhHF3egW2qSVX3OfwgtQBydJbrwYhe-aNcUjKt4xnvjEYcALdrer3udW2LbqwQZWFQN6UKuoQZ0I06U2O';
const TART_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWSXfoBs0hg-BzThvP447nJeYpcXXDNDjYT5D_Ig3O7XhuNCyM8MftnJfR-fnyjq_9OM6Ay7oRuqRKg0-QKY6G-eFWPbPxEPI8-PXaHUoNb407NsMzyU9imSIazNQHpEqx2y91fEUnfzhiS_rBUp5TlG296u_P07P9V0M4U2IiaNsbFqQoQjlUOYCgS-NoOcmJw8-SuvhaFqc1jnvw_R0grhfAiOaDPgGyRDqiqQNRn61Mhnf7mm1Ohvfd1w0UCG5Dyr8OJfpMrPmA';
const COOKIE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2q3nntVoOk6AF23MqV4mb4iTxaSgr4chY1pRZvohgdujb_gAN7NdvzFi86V6pkbFGLXMmV-unF8vW6kucGDIsgadMxD1QhZAPb6QSVjRnAaGVztfFsnIo_x9d7ZdxeaKOLr2ZT1uKOavKl7LLp-2bJKLAcBidNqXa9RC9mNdekSGqOXFqOtVcnJNhDIm70XLH3psAFtseHh0ZA0h3obFBDr8bYrRBSzHkza0uu6id0T6ln752oeXcc8iQMfwHBsNTEZc0Yp2l4QPj';
const CAKE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEdrPCSxGBjdeUydj95sLeBkk4GY7B0DeaymB1YI7FlQ9Y-m7trwC3QFc1NyHDosYQJ6YLF8pxkvb2JgqJU0iSaDoZwssLD8Fxt8RqZ-4U_vkCRpUG_0kFtApGwSUNrAah2oQDH5n-p9t9-FTUTcWKrTIbq4TqvkZYfaUCBFO08-BnilAm7zhI08FrwtcTLoQqSw4YeG5QUD_m2u7HNNrqTmJijTYgH83rn2pva6OxWVLt3_9EMcu2t-JcJMIpOnEJueD0AsgUXMl0';

export default function Menu() {
  return (
    <main className="menu-page">
      {/* Hero Title */}
      <section className="menu-hero" id="menu-hero">
        <h1 className="font-headline animate-fade-in-up">Our Menu</h1>
        <p className="animate-fade-in-up delay-200">A selection of our finest beans and bakes.</p>
      </section>

      {/* Signature Brews */}
      <section className="menu-section" id="menu-brews">
        <div className="section-header">
          <h2 className="font-headline">Signature Brews</h2>
          <div className="section-line"></div>
        </div>
        <div className="brews-layout">
          <div className="brews-image-wrap">
            <div className="brews-glow"></div>
            <img src={LATTE_IMG} alt="Somali Spiced Latte" className="brews-image" />
          </div>
          <div className="brews-list">
            <div className="brew-item" id="brew-latte">
              <div className="brew-info">
                <h3 className="font-headline">Somali Spiced Latte</h3>
                <p>Our signature blend with cardamom, ginger, and cloves.</p>
              </div>
              <span className="font-headline brew-price">$6.50</span>
            </div>
            <div className="brew-item" id="brew-espresso">
              <div className="brew-info">
                <h3 className="font-headline">Classic Espresso</h3>
                <p>Double shot of our dark roasted heirloom beans.</p>
              </div>
              <span className="font-headline brew-price">$4.00</span>
            </div>
            <div className="brew-item" id="brew-cold">
              <div className="brew-info">
                <h3 className="font-headline">Cold Brew</h3>
                <p>18-hour slow steep for a smooth, chocolatey finish.</p>
              </div>
              <span className="font-headline brew-price">$5.50</span>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Pastries */}
      <section className="menu-section" id="menu-pastries">
        <div className="section-header right-aligned">
          <div className="section-line"></div>
          <h2 className="font-headline">Artisan Pastries</h2>
        </div>
        <div className="pastries-bento">
          {/* Featured Item */}
          <div className="pastry-featured" id="pastry-bun">
            <div className="pastry-featured-img">
              <img src={BUN_IMG} alt="Saffron Cardamom Bun" />
            </div>
            <div className="pastry-featured-info">
              <span className="daily-special-badge">Daily Special</span>
              <h3 className="font-headline">Saffron Cardamom Bun</h3>
              <p>A fragrant, buttery knot of dough infused with high-grade saffron and freshly ground cardamom.</p>
              <span className="font-headline pastry-price">$5.75</span>
              <button className="btn-primary pastry-add-btn" id="add-bun-btn">Add to Basket</button>
            </div>
          </div>
          {/* Croissant Card */}
          <div className="pastry-card" id="pastry-croissant">
            <div className="pastry-card-img">
              <img src={CROISSANT_IMG} alt="Flaky Croissants" />
            </div>
            <div className="pastry-card-info">
              <div className="pastry-card-header">
                <h3 className="font-headline">Flaky Croissants</h3>
                <span className="font-headline">$4.50</span>
              </div>
              <p>72-hour fermented dough with cultured butter.</p>
            </div>
          </div>
          {/* Tart Strip */}
          <div className="pastry-strip" id="pastry-tart">
            <div className="tart-avatar">
              <img src={TART_IMG} alt="Pistachio & Rose Tart" />
            </div>
            <div className="tart-info">
              <h3 className="font-headline">Pistachio & Rose Tart</h3>
              <p>Crumbly shortcrust base, pistachio ganache, and a hint of Persian rosewater.</p>
            </div>
            <span className="font-headline tart-price">$7.00</span>
          </div>
        </div>
      </section>

      {/* Sweet Treats */}
      <section className="menu-section" id="menu-sweets">
        <div className="section-header">
          <h2 className="font-headline">Sweet Treats</h2>
          <div className="section-line"></div>
        </div>
        <div className="sweets-grid">
          <div className="sweet-item" id="sweet-cookies">
            <div className="sweet-img">
              <img src={COOKIE_IMG} alt="Heirloom Cookies" />
            </div>
            <div className="sweet-info">
              <h3 className="font-headline underline-accent">Heirloom Cookies</h3>
              <p>Dark chocolate chunks, brown butter, and sea salt flakes. Baked fresh hourly.</p>
              <span className="font-headline sweet-price">$3.50</span>
            </div>
          </div>
          <div className="sweet-item reversed" id="sweet-cake">
            <div className="sweet-img">
              <img src={CAKE_IMG} alt="Velvet Layer Cake" />
            </div>
            <div className="sweet-info" style={{ textAlign: 'right' }}>
              <h3 className="font-headline underline-accent">Velvet Layer Cake</h3>
              <p>Intense cocoa layers with a silky mascarpone cream frosting.</p>
              <span className="font-headline sweet-price">$8.25</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <div className="menu-footer-note" id="menu-prices-note">
        <p>All prices include service charge & local taxes</p>
      </div>
    </main>
  );
}
