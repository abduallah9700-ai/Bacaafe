import { Link } from 'react-router-dom';
import './Home.css';

const HERO_IMG = '/hero.png';
const PASTRY_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMtfoezzsHBBtMHTJZvLosJgK3Gqz4ry4kilqbIULyIbAhNd7BYI47u8S0CwLKqSzw_Toetk25iClmjE9gW2qcXWG17VGVhpsVFHFKB0rkNfaKX2PeGKoqjy43NH7Uva7_DMg5646XrvzgosChTTEnSWQmaU1NBpIDTpoeaa0LTsX13faYCGEMo44Kz35sq8JKiXe02lZrrM898HD51Owq2JQdCCCG1Q2ULvb9hYcV9J666opWunAWLG3_2GV_txNpArDb3v1D0YGU';
const CAKE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0SLUrj4PkbLL0f2JGyeYdnK270jxvGp50rNYB6n9jGhH43F0x9Fqs0eU6_1RpvWmHXwSFH66HBg5IwkAbQtOH-zBGN0rXgBfmGFOokHghcoQ7eRqMDLpiYsttfrpX4M2LxU4IMb3fywFggEHEZ5EocjBIYtyQMu8TZzld8o5t-O3_HG5UhKNcNj4s-G_hs2E2if59bnZ1LoeFVYUU1SHGO0WKI9JTPRRm21v87M81dSMpl_S0cy0mU82N11oxVhYFMdB8WHYsLk4e';
const COOKIE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeJoKtysTCmlF-MLcvW9WK_G2R1vXgXTtQImAdoDUzpLcOZDsdIKW4MajlDwB0TQCkrwzZER4pj24KJb0f_cxADTtGc85eXFaVUGjh8_RvWxntr8b3OSI_kpqFiepy4Fee8rMnGZCUdkl5mztPem_ppOmlTFrPXbvhCWOykhMUTRklRDMWs9nDbL0CEV1BWsjgGTdzXyK_1YzPfJgntVPChg_aABdQh7oTwFSiytdbVEAiO_ihUVsFM-TBELQV6EBs64UuhSjFhJM4';
const INTERIOR_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm3OMKktWpteI2ix41vJa7cfqHXQBCRk-3RFkk1tN6PEdlztib8pUDvE6N9-cb0dE1wimfVb5zNpJ8yu2Uq_xarh6sQBVh2raNXzm0VfAzBwAM-Nld4EPR85mNgigx9vW6WSi28kmOwESA93jm_Io4XF-U8ggKNBT3CdOFozDICDALDdGTUdvBo2g8YiYOI2EKGt4HAcYV9K8Iz5XMt7OJGA7TnB9Ug3PxlmqCmo9ZIj5i8kPWvTu-W0CAlME9cdgMerT0cTr7lKT_';
const VIBE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDyNaM1OVv4mKhr1yipANyVq2Z-FmIi-s7zyf8dn9TnNWurmvg-ohzJ5AuY7wWuFPO84gYjExTpVa_htskbgrKgLYij1fRf7aaYepRAkkpxzirKUywFDQmy6M3DwPP20ddXFIqlDXZHQKZyKX0Rm9ITyOSkxlPA5CQBkafITrzNlVdD8216AuJKcOjqTK8Iok2pO_-rk9eRuBFp8raC9maW-NBBOC5asfXOWU3X4HqxKFBTtNnJzRG-BhdKl8g8njyb9-mXSqE7cOp';
const GALLERY1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1Vqj9e3kF80z8qmCS6mlXVd3-CJiU2GXbr1FGTkEyvYlCvmfUXJrdEGmmxN_q0Nff4YXKx1F3U2itfnRkeh4hzmUk1koMUedXcfA0fcv2ByYLl5WDwlTb1AfSo9JHWmBxXKJBtqaPk1XqmlbQA2yWS5Mt-NlJosx4G-0SlaBPaw3e_DEEQY3u9eB_A79gxq9zo9BRUhild_ykpt-3fs1IYNRx6jq-Aq4zYx4oulaPG5o_WbSvGStG5C4uvo9HuQVEreUMbJ0nRdBO';
const GALLERY2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6vFnepCVUgHeNSjiPPGDoBS5CjUBih7q9VHONZ_MSU4H-5A9K4z_z3HxVuVWrO7CT_eNF4S8H0K6OenQ5rVUkFJFxdwmWVumHz4LdCbIGVhpSbzgugQB4aGGudeoAOcSpzgMM3Hbg74cjtvBYFkOc-wcEnMj5WCPNt6kTY4nZU3vHfzDi92iUEKDpn5J02LnBSImIU1Td6lM2Gav3Q_vW5WRBElGxjAKh2JYV-CDxlxVm7ohmOYEge60_k_OeX8lVa5fsgaK_jS3l';
const GALLERY3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuChKPjebVbiDOAM1l-MDwSz-Ki-xqkItANez1DmjHN6cmEBeNgsE_bVAEwrfy9iYathqRq7O7xL5v6ddKOyoFlJwvt6i-7lDqDeNcX3Mk6SCJGFoClGW9evLYscCGdiMSNfrc-hsdWTRpk69CueMzkNIQKjmOcll69r9iCdPy0qAx589lSJyiPfZ7SoblsyO1Jfc80ZUg8i1gforGAvinPkNP2h0XPwotbH762_R9v1kmb3eEWYEA2DZv55yCHSo5IDDhrJjUGE5Bec';
const GALLERY4 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7_xhTvZJPNuErFsAIPrns12mcv8kK5sc1AIr3Yfxp1hUZcUqQcB-ffxMt_Nmnxzx8qQsMLcYvdSoUKmzMNNVZApXu601wWBUUPxI_oqz-5GTALwRjVCk7fgEWbeP0Is8Gd5manelC91_LGGvq4i3vm0H3ZwhcLBNXYWHPhvqVx6CkeNt4b8qlCNiR01lwQliYrT2kSZp7EUn00Rwhh09-ffEpaoySbc0-Z5xbN7UF2XWsR7X7bI0OTF34r4bjbxKJqKLGCoLI4OhE';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-bg">
          <img src={HERO_IMG} alt="Premium Bacaafe iced latte" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content animate-fade-in-up">
          <h1 className="font-headline">
            Soo dhawoow Bacaafe –<br />
            <span>Tastes Like Home</span>
          </h1>
          <p>
            Step into a sanctuary where every cup is brewed with heritage and every bite whispers stories of artisanal tradition.
          </p>
          <Link to="/contact" className="btn-primary hero-cta" id="hero-visit-btn">
            Visit Us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features-section">
        <div className="features-grid">
          <div className="feature-card animate-fade-in-up">
            <div className="feature-icon">
              <span className="material-symbols-outlined">coffee</span>
            </div>
            <h3 className="font-headline">Premium Beans</h3>
            <p>Ethically sourced, small-batch roasted beans for a deeper, richer flavor profile.</p>
          </div>
          <div className="feature-card animate-fade-in-up delay-200">
            <div className="feature-icon">
              <span className="material-symbols-outlined">bakery_dining</span>
            </div>
            <h3 className="font-headline">Fresh Daily</h3>
            <p>Handcrafted pastries baked at dawn, filling our halls with the scent of warm butter.</p>
          </div>
          <div className="feature-card animate-fade-in-up delay-400">
            <div className="feature-icon">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <h3 className="font-headline">Warm Service</h3>
            <p>A welcoming embrace that makes every guest feel like part of our family.</p>
          </div>
        </div>
      </section>

      {/* Curated Selection */}
      <section className="curated" id="curated-section">
        <div className="curated-inner">
          <div className="curated-header">
            <h2 className="font-headline">Our Curated Selection</h2>
            <p>Each creation is a masterpiece of texture and taste, prepared with locally sourced ingredients.</p>
          </div>
          <div className="curated-grid">
            {/* Product 1 */}
            <div className="product-card" id="product-pastries">
              <div className="product-img">
                <img src={PASTRY_IMG} alt="Golden Pastries" />
              </div>
              <h3 className="font-headline">Golden Pastries</h3>
              <p>Flaky, buttery layers that shatter with every bite, crafted using traditional techniques.</p>
              <Link to="/menu" className="product-link">Discover Flavors</Link>
            </div>
            {/* Product 2 - offset */}
            <div className="product-card offset" id="product-cake">
              <div className="product-img">
                <img src={CAKE_IMG} alt="Velvet Layers cake" />
              </div>
              <h3 className="font-headline">Velvet Layers</h3>
              <p>Sophisticated sponge layers infused with vanilla bean and citrus zest, finished with silk cream.</p>
              <Link to="/menu" className="product-link">Savor the Moment</Link>
            </div>
            {/* Product 3 */}
            <div className="product-card" id="product-cookies">
              <div className="product-img">
                <img src={COOKIE_IMG} alt="Heirloom Cookies" />
              </div>
              <h3 className="font-headline">Heirloom Cookies</h3>
              <p>Soft-centered delights with hand-chopped dark chocolate and a hint of sea salt.</p>
              <Link to="/menu" className="product-link">Taste the Heritage</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="about-teaser" id="about-teaser">
        <div className="about-teaser-inner">
          <div className="about-text-card">
            <span className="about-label">Our Story</span>
            <h2 className="font-headline">A Sanctuary for the Soul</h2>
            <p>
              Bacaafe was born from a simple desire: to recreate the warmth of a family kitchen in the heart of the city. We believe that coffee is more than caffeine—it's a ritual, a conversation, and a moment of pause.
            </p>
            <p>
              Our space is designed for the digital curator and the analog dreamer alike. Every corner of Bacaafe is curated to inspire, from our hand-picked ceramics to our rotating library of coffee table books.
            </p>
          </div>
          <div className="about-images">
            <img src={INTERIOR_IMG} alt="Bacaafe cafe interior" className="about-img-1" />
            <img src={VIBE_IMG} alt="Bacaafe ambiance" className="about-img-2" />
          </div>
        </div>
      </section>

      {/* Gallery Bento Grid */}
      <section className="gallery" id="gallery-section">
        <div className="gallery-inner">
          <h2 className="font-headline gallery-title">Moments Captured</h2>
          <div className="gallery-grid">
            <div className="gallery-item large">
              <img src={GALLERY1} alt="Barista pouring latte art" />
            </div>
            <div className="gallery-item">
              <img src={GALLERY2} alt="Fresh pastries" />
            </div>
            <div className="gallery-item">
              <img src={GALLERY3} alt="Cake slice" />
            </div>
            <div className="gallery-item wide">
              <img src={GALLERY4} alt="Cookie jar" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
