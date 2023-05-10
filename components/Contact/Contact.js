import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea id="message" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;