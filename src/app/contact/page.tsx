"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Form Component that consumes search params
function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      if (subjectParam.toLowerCase().includes("inquiry")) {
        setFormData((prev) => ({ ...prev, subject: "inquiry" }));
      }
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API Request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="contact-form-panel">
      {submitted && (
        <div className="form-success-message">
          <h3>Message Sent Successfully!</h3>
          <p style={{ color: "inherit", margin: "0.5rem 0 0 0" }}>
            Thank you for reaching out to Navamrit Dairy. Our team will contact you shortly.
          </p>
        </div>
      )}

      <h3>Send Us a Message</h3>
      <p>Have questions about our sourcing, delivery, or cooperative farm network? Drop us a line below.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            required
            placeholder="e.g. rahul@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            required
            placeholder="e.g. +91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            name="subject"
            className="form-select"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="general">General Inquiry</option>
            <option value="inquiry">Product Bulk Inquiry</option>
            <option value="partnership">Distributor / Retail Partnership</option>
            <option value="feedback">Feedback & Suggestions</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            required
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? "Sending..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}

export default function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is Navamrit milk completely organic?",
      a: "Yes, our cooperative partner farms feed cattle with 100% organic, pesticide-free green fodder. We enforce a strict ban on chemical growth hormones (like Oxytocin) and preventive antibiotics.",
    },
    {
      q: "Where does Navamrit deliver?",
      a: "We currently deliver our premium pasteurised milk, curd, paneer, and ghee across the New Delhi National Capital Region (NCR), including Gurgaon, Noida, Greater Noida, and Ghaziabad.",
    },
    {
      q: "What is the Bilona method for Cow Ghee?",
      a: "The traditional Bilona method involves converting whole milk to curd, churning the curd bi-directionally to extract fresh butter (makhan), and then slow-cooking it over fire. This retains healthy HDL cholesterol and a wonderful grainy texture.",
    },
    {
      q: "How do you check for milk purity?",
      a: "We test every batch of raw milk at our chilling centers for over 12 common adulterants, including water dilution, starch, detergents, urea, and antibiotic residues, ensuring absolute safety.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <h1>Contact Us</h1>
        <p>Get in Touch with Navamrit Dairy</p>
      </section>

      {/* Page Container */}
      <div className="page-container">
        <div className="contact-grid">
          {/* Info Panel */}
          <div className="contact-info-panel">
            {/* Phone */}
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-card-details">
                <h4>Phone Sourcing Office</h4>
                <a href="tel:18001231234">1800 123 1234 (Toll-Free)</a>
                <p>Mon - Sat, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </div>
              <div className="contact-card-details">
                <h4>Email Inquiries</h4>
                <a href="mailto:info@navamritdairy.com">info@navamritdairy.com</a><br />
                <a href="mailto:sales@navamritdairy.com">sales@navamritdairy.com</a>
              </div>
            </div>

            {/* Address */}
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-card-details">
                <h4>Registered Office</h4>
                <p>
                  Navamrit Dairy Foods Pvt. Ltd.<br />
                  Industrial Area Phase-1,<br />
                  Okhla, New Delhi, India 110020
                </p>
              </div>
            </div>
          </div>

          {/* Form Panel wrapped in Suspense for search params */}
          <Suspense fallback={<div>Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>

        {/* FAQs */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaqIndex === index ? "open" : ""}`}
              >
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="faq-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                {openFaqIndex === index && (
                  <p className="faq-answer">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
