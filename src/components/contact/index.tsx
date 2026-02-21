import React, { useState } from 'react';
import ReactGA from 'react-ga4';
import styles from './contact.module.css';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmitStatus('loading');
    
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
      
      setSubmitStatus('success');
      // Track form submission
      ReactGA.event({
        category: 'engagement',
        action: 'contact_form_submit',
        label: 'contact_form'
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      // Reset error message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className={styles.contactContainer}>
      <h3 className={styles.headerText}>Contact Me</h3>
      <p className={styles.descriptionText}>I am always open to new opportunities and collaborations. Feel free to reach out to me.</p>
      
      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          ✓ Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          ✗ Failed to send message. Please try again.
        </div>
      )}
      
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className={`${styles.formInput} ${errors.name ? styles.inputError : ''}`}
            placeholder="Your name"
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={`${styles.formInput} ${errors.email ? styles.inputError : ''}`}
            placeholder="your.email@example.com"
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="message">Message *</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className={`${styles.formTextarea} ${errors.message ? styles.inputError : ''}`}
            placeholder="Your message here..."
            rows={5}
          />
          {errors.message && <span className={styles.errorText}>{errors.message}</span>}
        </div>
        
        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={submitStatus === 'loading'}
        >
          {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;