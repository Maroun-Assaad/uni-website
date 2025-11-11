import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container">
      <section className="contact">
        <div className="contact__content">
          <h1 className="contact__heading">Contact Us</h1>

          <div className="contact__info">
            <div className="contact__details">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our courses or programs? We'd love to hear
                from you. Send us a message and we'll respond as soon as
                possible.
              </p>

              <div className="contact__items">
                <div className="contact__item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h3>Address</h3>
                    <p>123 University Street, City, State 12345</p>
                  </div>
                </div>

                <div className="contact__item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact__item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Email</h3>
                    <p>info@university.edu</p>
                  </div>
                </div>

                <div className="contact__item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact__form-container">
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form__group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn contact__submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
