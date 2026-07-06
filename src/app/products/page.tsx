"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: "milk" | "curd-paneer" | "ghee-butter";
  desc: string;
  specLabel: string;
  specValue: string;
  tag: string;
  icon: React.ReactNode;
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [inquiredProduct, setInquiredProduct] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Products", count: 6 },
    { id: "milk", name: "Fresh Milk", count: 2 },
    { id: "curd-paneer", name: "Paneer & Curd", count: 2 },
    { id: "ghee-butter", name: "Ghee & Butter", count: 2 },
  ];

  const productsList: Product[] = [
    {
      id: "milk-pasteurised",
      name: "Pasteurised Whole Milk",
      category: "milk",
      tag: "Best Seller",
      desc: "Rich, creamy, and nutrient-dense milk pasteurised to eliminate harmful pathogens while preserving beneficial enzymes, calcium, and proteins.",
      specLabel: "Composition",
      specValue: "Fat: 4.5% Min | SNF: 8.5% Min",
      icon: (
        <svg viewBox="0 0 24 24" className="product-vector">
          <path d="M9 2h6M9 6h6M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6L12 2Z" />
          <path d="M10 11h4M10 15h4" />
        </svg>
      ),
    },
    {
      id: "milk-double-toned",
      name: "Double Toned Milk",
      category: "milk",
      tag: "Health & Fitness",
      desc: "Light and digestively friendly low-fat milk, pasteurised and homogenized, ideal for fitness enthusiasts, weight management, and daily tea/coffee.",
      specLabel: "Composition",
      specValue: "Fat: 1.5% Max | SNF: 9.0% Min",
      icon: (
        <svg viewBox="0 0 24 24" className="product-vector">
          <path d="M9 2h6M9 6h6M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6L12 2Z" />
          <path d="M10 13h4" />
        </svg>
      ),
    },
    {
      id: "paneer-artisan",
      name: "Fresh Artisan Paneer",
      category: "curd-paneer",
      tag: "Premium Soft",
      desc: "Cottage cheese prepared with pasteurised whole milk coagulated using natural lemon extracts. Renowned for its meltingly soft texture and high protein content.",
      specLabel: "Protein Content",
      specValue: "18.5g per 100g serving",
      icon: (
        <svg viewBox="0 0 24 24" className="product-vector">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      ),
    },
    {
      id: "curd-set",
      name: "Rich Set Curd (Dahi)",
      category: "curd-paneer",
      tag: "Probiotic Rich",
      desc: "Thick, creamy set curd prepared using active live cultures. Improves digestive health and provides refreshing calcium in a delicious, traditional format.",
      specLabel: "Ingredients",
      specValue: "100% Milk, Active Cultures",
      icon: (
        <svg viewBox="0 0 24 24" className="product-vector">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
          <path d="M8 12h8v2H8z" />
        </svg>
      ),
    },
    {
      id: "ghee-cow",
      name: "Pure Cow Ghee (Bilona)",
      category: "ghee-butter",
      tag: "Aromatic Golden",
      desc: "Slow-cooked golden ghee prepared using the traditional Vedic Bilona churning method. Provides wonderful aroma, digestion support, and healthy fats.",
      specLabel: "Method",
      specValue: "Traditional Vedic Bilona Churning",
      icon: (
        <svg viewBox="0 0 24 24" className="product-vector">
          <path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M5 10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-9Z" />
          <circle cx="12" cy="14" r="3" />
        </svg>
      ),
    },
    {
      id: "butter-salted",
      name: "Salted Table Butter",
      category: "ghee-butter",
      tag: "Sweet Cream",
      desc: "Creamy butter churned from pure sweet cream, pasteurised and lightly salted. It spreads smoothly and offers a rich, classic dairy flavor to food.",
      specLabel: "Salt Content",
      specValue: "approx 2.0% Iodized Salt",
      icon: (
        <svg viewBox="0 0 24 24" className="product-vector">
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18M12 6v12" />
        </svg>
      ),
    },
  ];

  const filteredProducts = activeCategory === "all"
    ? productsList
    : productsList.filter(p => p.category === activeCategory);

  const handleEnquiry = (productName: string) => {
    setInquiredProduct(productName);
    setTimeout(() => {
      setInquiredProduct(null);
    }, 5000);
  };

  return (
    <>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <h1>Our Products</h1>
        <p>Pure Nutrition for Your Family</p>
      </section>

      {/* Page Container */}
      <div className="page-container">
        {inquiredProduct && (
          <div className="form-success-message">
            Thank you for your interest in <strong>{inquiredProduct}</strong>! Please fill out the inquiry form on our <Link href="/contact?subject=Product%20Inquiry" style={{ color: "inherit", textDecoration: "underline" }}>Contact Page</Link> so our sales team can contact you.
          </div>
        )}

        <div className="products-layout">
          {/* Filters Sidebar */}
          <aside className="products-sidebar">
            <h3>Categories</h3>
            <ul className="filter-list">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <span>{cat.name}</span>
                    <span className="filter-count">
                      {cat.id === "all"
                        ? productsList.length
                        : productsList.filter(p => p.category === cat.id).length
                      }
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Grid */}
          <main className="catalog-grid">
            {filteredProducts.map((product) => (
              <div className="catalog-card" key={product.id}>
                <div className="catalog-img-wrapper">
                  {product.icon}
                </div>
                <div className="catalog-details">
                  <span className="catalog-tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                  <p className="catalog-desc">{product.desc}</p>
                  
                  <div className="catalog-meta">
                    <div className="catalog-spec">
                      <span className="spec-label">{product.specLabel}</span>
                      <span className="spec-value">{product.specValue}</span>
                    </div>
                    <button 
                      className="btn-enquire"
                      onClick={() => handleEnquiry(product.name)}
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}
