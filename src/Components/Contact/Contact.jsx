import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbwqJ6m6wquYGty2WkBg-Jxpm5EIEcjsDosAPx6M75ZM17zVXzblvf4JvpRquU0JFDbc/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name,
          email,
          message,
        }),
      }
    );

    if (res.ok) {
      setSubmissionMessage("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setSubmissionMessage("There was an error sending your message.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact">
      <div className="contact-sidebar">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-info">
          Have questions? We have answers! Reach out to us anytime.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>123 Construction Lane, Building City, ST 12345</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>(123) 456-7890</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>info@constructioncompany.com</p>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <h2 className="form-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {submissionMessage && (
          <p className="submission-message">{submissionMessage}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
