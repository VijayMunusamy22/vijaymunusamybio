import React, { useState } from 'react';
import styles from './contact.module.css';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      await fetch("https://api.pushover.net/1/messages.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          token: import.meta.env.VITE_PUSHOVER_APP_TOKEN,
          user: import.meta.env.VITE_PUSHOVER_USER_KEY,
          message: JSON.stringify(formData),
        }),
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <h3 className={styles.headerText}>Contact Me</h3>
      <p className={styles.descriptionText}>I am always open to new opportunities and collaborations. Feel free to reach out to me.</p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={styles.formInput} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={styles.formInput} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={styles.formTextarea} />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;