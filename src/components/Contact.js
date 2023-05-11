import React, { useState } from 'react';
import './Contact/Contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} required onChange={e => setName(e.target.value)} />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="message">Message</label>
          <textarea id="message" value={message} required onChange={e => setMessage(e.target.value)}></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;