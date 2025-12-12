import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Get In Touch</h1>
          <p className={styles.subtitle}>We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className={`${styles.contactOptions} section-lg`}>
        <div className="container">
          <div className={styles.optionsGrid}>
            <div className={styles.optionCard}>
              <h3>General Inquiries</h3>
              <p>Questions about Threads, training, or how to get involved?</p>
              <a href="mailto:contact@creativeadvance.org" className={styles.emailLink}>
                contact@creativeadvance.org
              </a>
            </div>

            <div className={styles.optionCard}>
              <h3>Training & Workshops</h3>
              <p>Questions about Tier 1, Tier 2, or Tier 3 training?</p>
              <a href="mailto:training@creativeadvance.org" className={styles.emailLink}>
                training@creativeadvance.org
              </a>
            </div>

            <div className={styles.optionCard}>
              <h3>Donations & Giving</h3>
              <p>Questions about supporting our work or partnership opportunities?</p>
              <a href="mailto:giving@creativeadvance.org" className={styles.emailLink}>
                giving@creativeadvance.org
              </a>
            </div>

            <div className={styles.optionCard}>
              <h3>Organizational Services</h3>
              <p>Interested in bringing Threads to your organization, congregation, or community?</p>
              <a href="mailto:partnerships@creativeadvance.org" className={styles.emailLink}>
                partnerships@creativeadvance.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={`${styles.formSection} section-lg`}>
        <div className="container">
          <div className={styles.formContainer}>
            <h2>Send Us a Message</h2>
            <p className={styles.formIntro}>
              Fill out the form below and we'll get back to you within 2 business days.
            </p>

            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className={styles.input}
                >
                  <option value="">Select a topic...</option>
                  <option value="training">Training & Workshops</option>
                  <option value="organizational">Organizational Services</option>
                  <option value="donations">Donations & Partnerships</option>
                  <option value="media">Media & Press</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className={styles.textarea}
                  placeholder="Tell us how we can help..."
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="newsletter" />
                  <span>Subscribe to updates about Threads and upcoming workshops</span>
                </label>
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className={`${styles.additionalInfo} section-lg`}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Office Hours</h3>
              <p>Monday - Friday</p>
              <p>9:00 AM - 5:00 PM Eastern Time</p>
              <p className={styles.note}>We respond to all inquiries within 2 business days</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mailing Address</h3>
              <p>Creative Advance Institute</p>
              <p>1 Creative Way</p>
              <p>West Palm Beach, FL 33410</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Connect With Us</h3>
              <div className={styles.socialLinks}>
                <a href="https://github.com/ronrothjr/The-Threads-of-Becoming" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
