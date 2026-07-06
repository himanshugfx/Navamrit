import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <h1>About Us</h1>
        <p>Our Journey & Values</p>
      </section>

      {/* Page Container */}
      <div className="page-container">
        {/* Values Grid */}
        <section>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", color: "var(--color-text-dark)" }}>
              Core Values
            </h2>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", marginTop: "0.5rem" }}>
              What makes Navamrit Dairy the brand you trust every morning
            </p>
          </div>

          <div className="values-grid">
            {/* Purity */}
            <div className="value-card">
              <div className="value-icon-wrapper">
                <svg viewBox="0 0 24 24" className="value-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3>Purity First</h3>
              <p>
                We maintain a strict zero-adulteration policy. Every batch of milk is tested on multiple chemical and biological parameters to guarantee it is 100% natural and free of preservatives.
              </p>
            </div>

            {/* Cooperative Spirit */}
            <div className="value-card">
              <div className="value-icon-wrapper">
                <svg viewBox="0 0 24 24" className="value-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Cooperative Spirit</h3>
              <p>
                We work directly with local dairy farmers, ensuring fair trade practices and clean milking environments. By supporting our farmers, we secure the finest raw milk at its source.
              </p>
            </div>

            {/* Modern Hygiene */}
            <div className="value-card">
              <div className="value-icon-wrapper">
                <svg viewBox="0 0 24 24" className="value-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M12 6v12M6 12h12" />
                </svg>
              </div>
              <h3>Modern Hygiene</h3>
              <p>
                From milking machines to advanced pasteurisation and rapid chillers, our processing line is fully automated. Milk is untouched by human hands to protect its nutritional bio-structure.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <h2>The Story of Navamrit</h2>
            <p>
              Navamrit Dairy Foods Private Limited was born out of a simple mission: to restore the purity and trust of farm-fresh milk in modern households. In an era where adulteration and processing techniques strip dairy of its vital nutrients, we set out to build a transparent, direct-from-farm model.
            </p>
            <p>
              We established cooperatives that train local farmers in organic feeding, stress-free animal care, and hygienic milking. We invested in state-of-the-art cold chain technology to transport milk from the farm to our processing plant at a constant 4°C, locking in freshness immediately.
            </p>
            <p>
              Today, Navamrit stands as a beacon of healthy living for thousands of families, delivering dairy products that are as pure and nutritious as nature intended.
            </p>
          </div>
          <div className="story-img-wrapper">
            <Image
              src="/images/cattle_herd.png"
              alt="Dairy Pastures"
              fill
              className="story-img"
            />
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <h2>Our History</h2>
          <div className="timeline-container">
            {/* 2020 */}
            <div className="timeline-item">
              <div className="timeline-badge"></div>
              <div className="timeline-date">2020</div>
              <div className="timeline-content">
                <h4>Inception</h4>
                <p>Navamrit Dairy Foods Pvt. Ltd. was founded with 5 partner cooperative farms, processing 500 liters of fresh milk daily.</p>
              </div>
            </div>

            {/* 2022 */}
            <div className="timeline-item">
              <div className="timeline-badge"></div>
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h4>Hygiene Automation</h4>
                <p>Equipped 25 partner farms with automatic milking systems and introduced centralized cold storage centers.</p>
              </div>
            </div>

            {/* 2024 */}
            <div className="timeline-item">
              <div className="timeline-badge"></div>
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <h4>Metropolitan Expansion</h4>
                <p>Launched product deliveries in major urban areas, reaching 12,000+ liters processed daily, and introduced Fresh Paneer and Pure Ghee.</p>
              </div>
            </div>

            {/* 2026 */}
            <div className="timeline-item">
              <div className="timeline-badge"></div>
              <div className="timeline-date">2026</div>
              <div className="timeline-content">
                <h4>Organic Excellence</h4>
                <p>Awarded top national awards for hygiene, purity, and cooperative dairy farming standards.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
