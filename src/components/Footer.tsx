import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-wrapper">
        <Image
          src="/images/logo.png"
          alt="Navamrit Logo"
          width={56}
          height={56}
          className="footer-logo-image"
        />
        <span className="footer-logo-text">Navamrit Dairy</span>
      </div>
      <div className="footer-nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/products">Products</Link>
        <Link href="/philosophy">Philosophy</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
      <div className="footer-copy">
        <span>&copy; {new Date().getFullYear()} Navamrit Dairy Foods Private Limited. All Rights Reserved.</span>
        <span className="footer-divider"></span>
        <a href="#privacy">Privacy Policy</a>
        <span className="footer-divider"></span>
        <a href="#terms">Terms of Service</a>
      </div>
    </footer>
  );
}
