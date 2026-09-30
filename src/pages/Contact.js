import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting AgriAssist!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <span className="section-label">GET IN TOUCH</span>

        <h1>Contact AgriAssist</h1>

        <p>
          Share your feedback or ask questions about agriculture-related
          information. We are happy to help you.
        </p>
      </section>

      <section className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-icon">🌱</div>

          <h2>Let's Grow Together</h2>

          <p>
            Have questions about crops, farming methods, or agricultural
            practices? Send us a message and explore smarter farming
            knowledge with AgriAssist.
          </p>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <p>support@agriassist.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>Serving farming communities everywhere</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Submit Feedback →
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;