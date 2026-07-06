import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-title-wrap text-center"
        >
          <h2 className="section-title">Get In Touch</h2>
          <span className="section-subtitle">Let's work together</span>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="contact-info glass-panel"
          >
            <div className="contact-info-header">
              <MessageSquare size={40} className="contact-icon-large" />
              <h3 className="contact-title">Let's talk about your next project</h3>
              <p className="contact-text">Currently available for freelance opportunities and exciting projects.</p>
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <span>hasneslamhasn@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <span>Assiut, Egypt</span>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://www.behance.net/HassanEslam70" target="_blank" rel="noreferrer" className="social-btn">Be</a>
              <a href="https://www.facebook.com/hassan.islam.352532" target="_blank" rel="noreferrer" className="social-btn">Fb</a>
              <a href="https://api.whatsapp.com/send?phone=201033879807" target="_blank" rel="noreferrer" className="social-btn">Wa</a>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-form glass-panel"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input 
                type="text" 
                className="form-input" 
                placeholder="Name" 
                required 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                className="form-input" 
                placeholder="Email" 
                required 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                className="form-input" 
                placeholder="Subject" 
                required 
                value={formData.subject}
                onChange={e => setFormData({...formData, subject: e.target.value})}
              />
            </div>
            <div className="form-group">
              <textarea 
                className="form-input form-textarea" 
                placeholder="Message" 
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit interactive">
              Send Message <Send size={18} className="ml-2" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
