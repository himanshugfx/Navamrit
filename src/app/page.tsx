import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Fresh, Pure & Nutritious Dairy</p>
          <h1 className="hero-title-script">Navamrit Dairy</h1>

          {/* Welcome Box */}
          <div className="welcome-card">
            <div className="welcome-grid">
              <div className="welcome-main">
                <h2>
                  <span>Welcome</span>
                  TO NAVAMRIT!
                </h2>
                <p className="welcome-text">
                  Navamrit Dairy Foods Private Limited is dedicated to bringing you the purest, freshest, and most nutritious dairy products. From our farm-fresh milk to delicious curd, butter, paneer, and ghee, we ensure the highest quality in every drop.
                </p>
                <p className="welcome-text">
                  We believe that health begins with pure nutrition. Our state-of-the-art cooperative dairy farming practices ensure that you get milk and dairy products in their most natural, wholesome form.
                </p>
                <Link href="/about" className="btn-more">Read More</Link>
              </div>

              <div className="welcome-secondary">
                <div>
                  <p className="welcome-text">
                    By combining traditional Indian organic farming values with modern processing techniques, we deliver premium taste and nutrients.
                  </p>
                  <p className="welcome-text">
                    Every batch of milk is tested on multiple quality parameters to ensure it is free from adulteration, pesticides, and hormones.
                  </p>
                </div>
                <Link href="/philosophy" className="btn-more">Our Standards</Link>
              </div>

              <div className="welcome-contact">
                <div>
                  <div className="contact-label">Head Office</div>
                  <p className="contact-value">
                    Navamrit Dairy Foods Pvt. Ltd.<br />
                    Industrial Area Phase-1<br />
                    New Delhi, India
                  </p>
                </div>
                <div>
                  <div className="contact-label">Customer Support</div>
                  <a href="tel:18001231234" className="phone-number">1800 123 1234</a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-grid">
            {/* Liters Daily */}
            <div className="stat-item">
              <div className="stat-number">12k+</div>
              <div className="stat-label">Liters Daily</div>
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" className="stat-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 2h6M9 6h6M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6L12 2Z" />
                  <path d="M8 12h8" />
                </svg>
              </div>
            </div>

            {/* Happy Farms */}
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Partner Farms</div>
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" className="stat-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a15 15 0 0 0-3 9c0 3.3 1.7 6.1 4.5 7.5l.5-6.5M12 2a15 15 0 0 1 3 9c0 3.3-1.7 6.1-4.5 7.5l-.5-6.5" />
                  <path d="M12 12V22" />
                </svg>
              </div>
            </div>

            {/* Happy Families */}
            <div className="stat-item">
              <div className="stat-number">15k+</div>
              <div className="stat-label">Happy Families</div>
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" className="stat-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
            </div>

            {/* Purity Check */}
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Pure & Safe</div>
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" className="stat-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Quality Milk Section */}
      <section className="quality-section" id="about">
        <div className="quality-header">
          <p className="quality-title-script">Premium dairy cows</p>
          <h2 className="quality-subtitle">for nutritious milk you can trust</h2>
        </div>

        <div className="quality-img-container">
          <Image
            src="/images/cattle_herd.png"
            alt="Dairy Cows grazing"
            width={1200}
            height={480}
            className="quality-img"
            priority={false}
          />
        </div>

        <div className="quality-columns">
          <div className="quality-col-text">
            Our dairy cows are raised in natural, free-range pastures with access to clean water and a balanced organic diet. We prioritize animal welfare, believing that happy, healthy cows yield the sweetest and most nutrient-rich milk. Under regular veterinary care and supervision, we ensure that our cows are completely free from stress and hormones.
          </div>
          <div className="quality-col-text">
            Every step of our milking process utilizes automated systems that keep the milk completely untouched by human hands. This strict hygienic protocol prevents any external contamination and maintains the fresh, natural enzymes and delicious taste of milk, bringing true farm goodness directly to your home.
          </div>
        </div>

        <div className="quality-read-more-wrapper">
          <Link href="/about" className="btn-more">Our Pastures</Link>
        </div>
      </section>

      {/* Products Showcase Gallery */}
      <section className="gallery-section" id="products">
        <div className="gallery-grid">
          {/* Milk Item */}
          <div className="gallery-item">
            <div className="product-illustration-wrapper">
              <svg viewBox="0 0 24 24" className="product-vector">
                <path d="M9 2h6M9 6h6M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6L12 2Z" />
                <path d="M10 11h4M10 15h4" />
              </svg>
            </div>
            <div className="product-info-block">
              <h3 className="gallery-title">Pasteurised Milk</h3>
              <p className="gallery-desc">Farm-Fresh & Creamy</p>
              <p className="product-bullets-text">Rich in calcium and vitamins, packaged under sterile conditions for maximum freshness.</p>
            </div>
          </div>

          {/* Paneer Item */}
          <div className="gallery-item">
            <div className="product-illustration-wrapper">
              <svg viewBox="0 0 24 24" className="product-vector">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
              </svg>
            </div>
            <div className="product-info-block">
              <h3 className="gallery-title">Artisan Paneer</h3>
              <p className="gallery-desc">Soft & High Protein</p>
              <p className="product-bullets-text">Fresh cottage cheese made with pure lemon extract, yielding an incredibly soft, melt-in-mouth texture.</p>
            </div>
          </div>

          {/* Ghee Item */}
          <div className="gallery-item">
            <div className="product-illustration-wrapper">
              <svg viewBox="0 0 24 24" className="product-vector">
                <path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-9Z" />
                <circle cx="12" cy="14" r="3" />
              </svg>
            </div>
            <div className="product-info-block">
              <h3 className="gallery-title">Pure Cow Ghee</h3>
              <p className="gallery-desc">Traditional & Aromatic</p>
              <p className="product-bullets-text">Slow-cooked golden ghee prepared using the traditional Bilona churning method for rich taste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Philosophy Section */}
      <section className="info-shop-section" id="philosophy">
        <div className="info-shop-container">
          <div className="info-grid">
            {/* Cow Health */}
            <div className="info-card">
              <div>
                <h3>Cow Health</h3>
                <p>
                  Our cows are fed 100% natural organic fodder and graze freely in stress-free pastures. Regular health monitoring ensures they produce rich, wholesome milk.
                </p>
                <p>
                  We maintain strict veterinary checks and absolute wellness standards across all cooperative farms.
                </p>
              </div>
              <div className="info-card-bottom">
                <Link href="/philosophy" className="btn-more">Read More</Link>
              </div>
            </div>

            {/* Purity Guarantee */}
            <div className="info-card">
              <div>
                <h3>Purity Guarantee</h3>
                <p>
                  We enforce a strict zero-adulteration policy. Navamrit milk is untouched by human hands and contains zero preservatives or synthetic hormones.
                </p>
                <p>
                  Every drop is tested for water content, antibiotics, and contaminants before reaching you.
                </p>
              </div>
              <div className="info-card-bottom">
                <Link href="/philosophy" className="btn-more">Read More</Link>
              </div>
            </div>

            {/* Cold Chain Logistics */}
            <div className="info-card">
              <div>
                <h3>Cold Chain</h3>
                <p>
                  Our state-of-the-art logistics maintain milk at exactly 4°C, locking in natural freshness and taste from the farm straight to your doorstep.
                </p>
                <p>
                  Advanced refrigerated transport ensures that the milk enzymes stay intact and fresh.
                </p>
              </div>
              <div className="info-card-bottom">
                <Link href="/philosophy" className="btn-more">Read More</Link>
              </div>
            </div>
          </div>

          {/* Visit Our Shop */}
          <div className="shop-cta-container">
            <span className="shop-cta-title">Visit</span>
            <span className="shop-cta-subtitle">our shop</span>

            <div className="badges-grid">
              {/* Organic Badge */}
              <div className="badge-item">
                <svg viewBox="0 0 24 24" className="badge-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M7.5 13.5L10 16l6.5-6.5" />
                </svg>
                <span className="badge-label">100% Organic</span>
              </div>

              {/* Grass Fed Badge */}
              <div className="badge-item">
                <svg viewBox="0 0 24 24" className="badge-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 22c0-5.5 4.5-10 10-10s10 4.5 10 10" />
                  <path d="M12 12V2" />
                  <path d="M12 6c3 0 5-2 5-4" />
                  <path d="M12 8c-3 0-5-2-5-4" />
                </svg>
                <span className="badge-label">Grass Fed Cows</span>
              </div>

              {/* Local Badge */}
              <div className="badge-item">
                <svg viewBox="0 0 24 24" className="badge-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="badge-label">Cooperative Sourced</span>
              </div>

              {/* Hormone Free Badge */}
              <div className="badge-item">
                <svg viewBox="0 0 24 24" className="badge-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                <span className="badge-label">Hormone Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
