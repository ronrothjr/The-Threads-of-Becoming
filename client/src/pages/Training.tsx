import React from 'react';
import styles from './Training.module.css';

const Training: React.FC = () => {
  return (
    <div className={styles.training}>
      <section className={styles.header}>
        <div className="container">
          <h1>Training Pathway</h1>
          <p className={`${styles.tagline} tagline`}>
            From personal clarity to professional mastery to organizational transformation
          </p>
        </div>
      </section>

      <section className={`${styles.tiers} section-lg`}>
        <div className="container">
          <div className={styles.tier}>
            <div className={styles.tierHeader}>
              <h2>Tier 1 — Foundations</h2>
              <p className={styles.tierSubtitle}>Learn the universal language of human tension</p>
            </div>

            <div className={styles.tierContent}>
              <div className={styles.tierInfo}>
                <p className={styles.duration}>4 hours • Certificate of Completion</p>
                <p className={styles.forWho}>
                  <strong>Perfect for:</strong> Individuals, teams, leaders, educators, ministers, seekers
                </p>
                <p>
                  For anyone seeking clarity, resilience, and healthier relationships. This foundational workshop introduces the seven universal tensions and teaches you to recognize where you are in creative tension before deciding what to do about it.
                </p>
              </div>

              <div className={styles.tierFeatures}>
                <h4>What You'll Learn</h4>
                <ul>
                  <li>The seven universal threads that shape human experience</li>
                  <li>How to recognize collapse vs. creative tension</li>
                  <li>The See. Hold. Emerge. protocol</li>
                  <li>Practical tools for navigating your own patterns</li>
                </ul>
              </div>

              <a href="/training/tier1" className={styles.tierCta}>
                Learn More →
              </a>
            </div>
          </div>

          <div className={styles.tier}>
            <div className={styles.tierHeader}>
              <h2>Tier 2 — Practitioner Certification</h2>
              <p className={styles.tierSubtitle}>Learn to guide others with skill, humility, and ethical clarity</p>
            </div>

            <div className={styles.tierContent}>
              <div className={styles.tierInfo}>
                <p className={styles.duration}>16 hours + 6 hours supervision • Certified Threads Practitioner (CTP)</p>
                <p className={styles.forWho}>
                  <strong>Perfect for:</strong> Coaches, clergy, therapists, mediators, counselors, spiritual directors
                </p>
                <p>
                  For helping professionals who work with individuals and dyads. Learn the full Navigation Conversation protocol, diagnostic accuracy, and how to integrate Threads with your existing practice.
                </p>
                <p className={styles.note}>
                  <em>Note:</em> Threads certification complements—does not replace—your existing credentials. We train the navigational framework; you bring the clinical or coaching expertise.
                </p>
              </div>

              <div className={styles.tierFeatures}>
                <h4>What You'll Learn</h4>
                <ul>
                  <li>Full Navigation Conversation protocol (ARRIVE → NAME → HOLD → INTEGRATE)</li>
                  <li>Diagnostic accuracy and thread identification</li>
                  <li>Case study analysis and application</li>
                  <li>Clinical integration and ethics</li>
                  <li>Framework crosswalk (IFS, EFT, NVC, Bowen, ACT, etc.)</li>
                </ul>
              </div>

              <a href="/training/tier2" className={styles.tierCta}>
                Learn More →
              </a>
            </div>
          </div>

          <div className={styles.tier}>
            <div className={styles.tierHeader}>
              <h2>Tier 3 — Facilitator Certification</h2>
              <p className={styles.tierSubtitle}>Learn to transform systems, teams, and institutions</p>
            </div>

            <div className={styles.tierContent}>
              <div className={styles.tierInfo}>
                <p className={styles.duration}>24 hours + 20-hour practicum • Certified Threads Facilitator (CTF)</p>
                <p className={styles.forWho}>
                  <strong>Perfect for:</strong> OD consultants, senior clergy, executive coaches, organizational change practitioners
                </p>
                <p>
                  For those working at organizational scale. Learn to recognize and transform systemic collapse, facilitate multi-party discernment, and guide teams through complex organizational tensions.
                </p>
              </div>

              <div className={styles.tierFeatures}>
                <h4>What You'll Learn</h4>
                <ul>
                  <li>Systemic collapse diagnostics</li>
                  <li>Multi-party facilitation techniques</li>
                  <li>Discernment circle protocols</li>
                  <li>Organizational field guide application</li>
                  <li>Group dynamics and collective emergence</li>
                </ul>
              </div>

              <a href="/training/tier3" className={styles.tierCta}>
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.apply}>
        <div className="container">
          <h2>Ready to Begin?</h2>
          <p>Choose your pathway and start your journey today.</p>
          <div className={styles.applyButtons}>
            <a href="/apply/tier1" className={styles.applyButton}>Apply for Tier 1</a>
            <a href="/apply/tier2" className={styles.applyButton}>Apply for Tier 2</a>
            <a href="/apply/tier3" className={styles.applyButton}>Apply for Tier 3</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
