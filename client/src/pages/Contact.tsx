import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [subject, setSubject] = useState('');

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

            <div className={`${styles.optionCard} ${styles.discoveryCard}`}>
              <h3>Share Your Thread Discovery</h3>
              <p>Discovered a universal tension you'd like to share with the community? Submit your thread for consideration.</p>
              <a href="mailto:discovery@creativeadvance.org" className={styles.emailLink}>
                discovery@creativeadvance.org
              </a>
            </div>

            <div className={styles.optionCard}>
              <h3>Educator Inquiries</h3>
              <p>Questions about K-12 educator training, school partnerships, or professional development credits?</p>
              <a href="mailto:educators@creativeadvance.org" className={styles.emailLink}>
                educators@creativeadvance.org
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className={styles.input}
                >
                  <option value="">Select a topic...</option>
                  <option value="discovery">Thread Discovery Submission</option>
                  <option value="training">Training & Workshops</option>
                  <option value="educators">Educator Training & School Partnerships</option>
                  <option value="organizational">Organizational Services</option>
                  <option value="donations">Donations & Partnerships</option>
                  <option value="media">Media & Press</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {subject === 'discovery' ? (
                <>
                  <div className={styles.formGroup}>
                    <label htmlFor="threadName">Thread Name *</label>
                    <input
                      type="text"
                      id="threadName"
                      name="threadName"
                      required
                      className={styles.input}
                      placeholder="e.g., THRESHOLD, RECIPROCITY, POWER"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="seedQuestion">Seed Question *</label>
                    <input
                      type="text"
                      id="seedQuestion"
                      name="seedQuestion"
                      required
                      className={styles.input}
                      placeholder="e.g., Who belongs?"
                    />
                    <span className={styles.helpText}>2-5 words, primordial and universal</span>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="poleA">Pole A *</label>
                      <input
                        type="text"
                        id="poleA"
                        name="poleA"
                        required
                        className={styles.input}
                        placeholder="e.g., Inside"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="poleB">Pole B *</label>
                      <input
                        type="text"
                        id="poleB"
                        name="poleB"
                        required
                        className={styles.input}
                        placeholder="e.g., Outside"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="universalQuestions">Universal Questions *</label>
                    <textarea
                      id="universalQuestions"
                      name="universalQuestions"
                      rows={6}
                      required
                      className={styles.textarea}
                      placeholder="List 4-6 questions that explore this tension from different angles. Use the six heuristics: Pole Dance, Threshold, Practitioner, Stakes, Identity, Tradition Bridge."
                    />
                    <span className={styles.helpText}>One question per line</span>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="metaQuestion">Meta-Question</label>
                    <input
                      type="text"
                      id="metaQuestion"
                      name="metaQuestion"
                      className={styles.input}
                      placeholder="How do we hold this tension without collapsing it?"
                    />
                    <span className={styles.helpText}>Optional: Question about how to hold this tension</span>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="creativeEdge">The Creative Edge *</label>
                    <textarea
                      id="creativeEdge"
                      name="creativeEdge"
                      rows={6}
                      required
                      className={styles.textarea}
                      placeholder="What becomes possible by holding this tension? What emerges that wouldn't be visible from either pole alone?"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="evidence">Evidence of Universality *</label>
                    <textarea
                      id="evidence"
                      name="evidence"
                      rows={6}
                      required
                      className={styles.textarea}
                      placeholder="Describe how this tension appears across wisdom traditions, developmental stages, and cultural contexts."
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="additionalNotes">Additional Notes</label>
                    <textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      rows={4}
                      className={styles.textarea}
                      placeholder="Any additional context, personal experiences, or questions about your discovery..."
                    />
                  </div>
                </>
              ) : (
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
              )}

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
