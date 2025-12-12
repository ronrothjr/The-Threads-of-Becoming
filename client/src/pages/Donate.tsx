import React from 'react';
import styles from './Donate.module.css';

const Donate: React.FC = () => {
  return (
    <div className={styles.donate}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Support the Work</h1>
          <p className={styles.subtitle}>Help us cultivate the human capacity to hold creative tension</p>
        </div>
      </section>

      {/* Why Give Section */}
      <section className={`${styles.whyGive} section-lg`}>
        <div className="container">
          <h2>Why Your Gift Matters</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <h3>Make Training Accessible</h3>
              <p>
                Your donation funds scholarships for therapists, coaches, clergy, and community leaders who couldn't otherwise afford training. We believe financial barriers shouldn't prevent skilled practitioners from accessing these tools.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h3>Reach Underserved Communities</h3>
              <p>
                We provide free workshops and facilitation to organizations in crisis, congregations navigating conflict, and communities under strain. Your support makes this possible.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h3>Build Open Resources</h3>
              <p>
                We're committed to keeping core resources free and accessible. Donations fund development of digital tools, open-source frameworks, and public educational content.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h3>Advance the Work</h3>
              <p>
                Support research, curriculum development, and the infrastructure needed for CE accreditation and formal certification pathways planned for 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className={`${styles.impact} section-lg`}>
        <div className="container">
          <h2>Sample Impact Stories*</h2>
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <h4>"I couldn't have afforded the training..."</h4>
              <p>
                A rural minister received a full scholarship to Tier 2 Professional training and now uses Threads in pastoral care, premarital counseling, and conflict mediation within her congregation.
              </p>
              <span className={styles.attribution}>— Rural UU Minister, Montana</span>
            </div>
            <div className={styles.impactCard}>
              <h4>"It changed how we do everything."</h4>
              <p>
                A nonprofit serving refugees received free facilitation training and now uses discernment circles for strategic planning, team conflict, and community engagement.
              </p>
              <span className={styles.attribution}>— Executive Director, Refugee Services</span>
            </div>
            <div className={styles.impactCard}>
              <h4>"The framework is now central to my practice."</h4>
              <p>
                A therapist in private practice received a partial scholarship and now integrates Threads with IFS and EMDR, serving clients navigating complex trauma and relational tension.
              </p>
              <span className={styles.attribution}>— Licensed Therapist, Oregon</span>
            </div>
          </div>
          <p className={styles.disclaimer}>
            *Sample impact stories illustrate anticipated outcomes based on pilot program feedback
          </p>
        </div>
      </section>

      {/* Ways to Give */}
      <section className={`${styles.waysToGive} section-lg`}>
        <div className="container">
          <h2>Ways to Give</h2>
          <div className={styles.givingOptions}>
            <div className={styles.givingCard}>
              <h3>One-Time Gift</h3>
              <p>Make a single donation of any amount. Every gift makes a difference.</p>
              <ul>
                <li><strong>$50</strong> — Provides materials for one Tier 1 participant</li>
                <li><strong>$295</strong> — Full Tier 1 scholarship</li>
                <li><strong>$1,200</strong> — Full Tier 2 scholarship</li>
                <li><strong>$3,500</strong> — Full Tier 3 scholarship</li>
              </ul>
              <a href="#donate-form" className={styles.giveButton}>Give Once</a>
            </div>

            <div className={styles.givingCard}>
              <h3>Monthly Giving</h3>
              <p>Join our Community of Sustainers with a recurring monthly gift.</p>
              <ul>
                <li><strong>$10/month</strong> — Materials Supporter</li>
                <li><strong>$25/month</strong> — Workshop Sponsor</li>
                <li><strong>$100/month</strong> — Scholarship Circle</li>
                <li><strong>$250/month</strong> — Founding Patron</li>
              </ul>
              <a href="#donate-form" className={styles.giveButton}>Give Monthly</a>
            </div>

            <div className={styles.givingCard}>
              <h3>Other Ways to Support</h3>
              <ul>
                <li>Employer matching gifts</li>
                <li>Donor-advised fund grants</li>
                <li>Stock or securities gifts</li>
                <li>Legacy gifts and bequests</li>
                <li>In-kind professional services</li>
              </ul>
              <p style={{marginTop: '1rem'}}>
                For alternative giving options, please <a href="/contact" style={{color: 'var(--color-teal)', textDecoration: 'underline'}}>contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donate-form" className={`${styles.donateForm} section-lg`}>
        <div className="container">
          <div className={styles.formContainer}>
            <h2>Make Your Gift</h2>
            <p className={styles.formIntro}>
              Creative Advance Institute is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the fullest extent permitted by law.
            </p>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label>Gift Type</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="giftType" value="one-time" defaultChecked />
                    <span>One-Time Gift</span>
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="giftType" value="monthly" />
                    <span>Monthly Gift</span>
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Amount</label>
                <div className={styles.amountButtons}>
                  <button type="button" className={styles.amountButton}>$50</button>
                  <button type="button" className={styles.amountButton}>$100</button>
                  <button type="button" className={styles.amountButton}>$295</button>
                  <button type="button" className={styles.amountButton}>$500</button>
                  <button type="button" className={styles.amountButton}>$1,200</button>
                </div>
                <input
                  type="number"
                  placeholder="Or enter custom amount"
                  className={styles.customAmount}
                  min="1"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={styles.input}
                />
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
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="anonymous" />
                  <span>Make my gift anonymous</span>
                </label>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="newsletter" defaultChecked />
                  <span>Keep me updated on the impact of my gift</span>
                </label>
              </div>

              <button type="submit" className={styles.submitButton}>
                Complete Donation
              </button>

              <p className={styles.secureNote}>
                🔒 Secure payment processing via Stripe
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className={`${styles.questions} section-lg`}>
        <div className="container">
          <h2>Questions About Giving?</h2>
          <div className={styles.faq}>
            <div className={styles.faqItem}>
              <h4>Is my donation tax-deductible?</h4>
              <p>
                Yes. Creative Advance Institute is a 501(c)(3) nonprofit organization (EIN: pending). You will receive a receipt for tax purposes immediately after your donation.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>How will my donation be used?</h4>
              <p>
                Donations support scholarships, community workshops, resource development, and organizational operations. We commit to transparency: 80% of donations go directly to programs, with 20% covering administrative costs.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>Can I cancel my monthly gift?</h4>
              <p>
                Yes, you can cancel or modify your monthly donation at any time by contacting us at <a href="mailto:giving@creativeadvance.org">giving@creativeadvance.org</a>.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>Do you accept non-cash gifts?</h4>
              <p>
                Yes. We accept stock transfers, donor-advised fund grants, and other non-cash gifts. Please contact us at <a href="mailto:giving@creativeadvance.org">giving@creativeadvance.org</a> to arrange.
              </p>
            </div>
          </div>

          <div className={styles.contactBox}>
            <h3>Have more questions?</h3>
            <p>We'd love to hear from you.</p>
            <a href="/contact" className={styles.contactButton}>Get In Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
