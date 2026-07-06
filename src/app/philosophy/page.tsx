import Image from "next/image";

export default function Philosophy() {
  return (
    <>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <h1>Our Philosophy</h1>
        <p>Pure Milk by Nature, Protected by Science</p>
      </section>

      {/* Page Container */}
      <div className="page-container">
        <div style={{ maxWidth: "800px", margin: "0 auto 5rem auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", marginBottom: "1.5rem", color: "var(--color-text-dark)" }}>
            The Navamrit Standard
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: "1.8" }}>
            We believe that milk is a sacred source of nutrition. Our entire operating system is built around a single, uncompromising principle: maintaining the raw purity and wholesome bio-structure of milk from pasture to pantry.
          </p>
        </div>

        {/* Philosophy Points */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          
          {/* Point 1 */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--color-mint-dark)", fontWeight: "700", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                PILLAR 01
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-text-dark)", margin: "0.5rem 0 1rem 0" }}>
                Rotational Pasture Grazing
              </h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1rem" }}>
                Our dairy cows are not confined to crowded feedlots. They graze freely on lush green pastures rich in natural fodder, clover, and organic grasses.
              </p>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                Rotational grazing keeps the pastures healthy and ensures the cows receive a diverse, nutrient-dense diet. This directly enhances the concentration of beta-carotene, vitamins A & D, and Omega-3 fatty acids in the milk they yield.
              </p>
            </div>
            <div className="story-img-wrapper" style={{ height: "300px" }}>
              <Image
                src="/images/cattle_herd.png"
                alt="Rotational grazing cows"
                fill
                className="story-img"
              />
            </div>
          </div>

          {/* Point 2 */}
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "4rem", alignItems: "center" }}>
            <div className="story-img-wrapper" style={{ height: "300px" }}>
              <Image
                src="/images/hero_sunset_farm.png"
                alt="Sunset Farm"
                fill
                className="story-img"
              />
            </div>
            <div>
              <span style={{ color: "var(--color-mint-dark)", fontWeight: "700", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                PILLAR 02
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-text-dark)", margin: "0.5rem 0 1rem 0" }}>
                Automated Zero-Touch Milking
              </h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1rem" }}>
                Human touch, while caring, introduces risks of biological contamination. To eliminate this vector, we utilize state-of-the-art automated milking systems.
              </p>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                The automated claws sanitize the udders, harvest the milk under gentle vacuum pressure, and pump it directly into hermetically sealed stainless-steel pipes leading directly to our flash chillers.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--color-mint-dark)", fontWeight: "700", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                PILLAR 03
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-text-dark)", margin: "0.5rem 0 1rem 0" }}>
                Multi-Parameter Diagnostics
              </h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1rem" }}>
                Every single tank of raw milk is subjected to rigorous quality checking at our laboratory before pasteurisation. We screen for water addition, solids-not-fat parameters, hormone trace, and veterinary antibiotic residues.
              </p>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                Any batch that fails to meet our strict purity benchmark is immediately rejected, ensuring that only the safest, cleanest milk receives the Navamrit stamp.
              </p>
            </div>
            <div className="story-img-wrapper" style={{ height: "300px", background: "var(--color-mint-light)", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "100px", height: "100px", color: "var(--color-mint-dark)" }} fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
          </div>

          {/* Point 4 */}
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: "4rem", alignItems: "center" }}>
            <div className="story-img-wrapper" style={{ height: "300px", background: "var(--color-mint-light)", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <svg viewBox="0 0 24 24" style={{ width: "100px", height: "100px", color: "var(--color-mint-dark)" }} fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div>
              <span style={{ color: "var(--color-mint-dark)", fontWeight: "700", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                PILLAR 04
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-text-dark)", margin: "0.5rem 0 1rem 0" }}>
                Cold Chain Logistics
              </h3>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.7", marginBottom: "1rem" }}>
                Raw milk leaves the cow's body at approximately 38°C—an optimal incubator for bacteria. Within 1 hour of milking, we chill our milk down to exactly 4°C.
              </p>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                This rapid cooling suspends bacterial activity without destroying native enzymes or nutritional immunoglobulins. Our refrigerated transport vehicles keep it at this temperature during transit to lock in freshness.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
