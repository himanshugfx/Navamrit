"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <Link href="/" className="logo-container">
          <Image
            src="/images/logo.png"
            alt="Navamrit Logo"
            width={48}
            height={48}
            className="logo-image"
            priority
          />
          <div className="logo-text">
            <span className="logo-title">Navamrit</span>
            <span className="logo-subtitle">Dairy Foods</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href} className={isActive ? "active" : ""}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`mobile-menu-btn ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-nav-overlay ${isOpen ? "open" : ""}`}>
          <ul className="mobile-nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isActive ? "active" : ""}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
