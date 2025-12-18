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
            <div className={`${styles.tierHeader} ${styles.tier1Header}`}>
              <h2>Tier 1 — Foundations</h2>
              <p className={styles.tierSubtitle}>Learn the universal language of human tension</p>
            </div>

            <div className={styles.tierContent}>
              <div className={styles.tierInfo}>
                <p className={styles.duration}>4 hours • Foundations Certificate of Completion</p>
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
            <div className={`${styles.tierHeader} ${styles.tier2Header}`}>
              <h2>Tier 2 — Professional</h2>
              <p className={styles.tierSubtitle}>Learn to guide others with skill, humility, and ethical clarity</p>
            </div>

            <div className={styles.tierContent}>
              <div className={styles.tierInfo}>
                <p className={styles.duration}>16 hours + 6 hours supervision • Professional Development Certificate</p>
                <p className={styles.forWho}>
                  <strong>Perfect for:</strong> Coaches, clergy, therapists, mediators, counselors, spiritual directors
                </p>
                <p>
                  For helping professionals who work with individuals and dyads. Learn the full Navigation Conversation protocol, diagnostic accuracy, and how to integrate Threads with your existing practice.
                </p>
                <p className={styles.note}>
                  <em>Note:</em> This professional development training complements—does not replace—your existing credentials. We train the navigational framework; you bring the clinical or coaching expertise.
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
                <p className={styles.modalityNote}>
                  <em>Wondering how Threads integrates with your practice? </em>
                  <a href="/modality-compatibility" className={styles.modalityLink}>
                    View Modality Compatibility Guide →
                  </a>
                </p>
              </div>

              <a href="/training/tier2" className={styles.tierCta}>
                Learn More →
              </a>
            </div>
          </div>

          <div className={styles.tier}>
            <div className={`${styles.tierHeader} ${styles.tier3Header}`}>
              <h2>Tier 3 — Facilitator</h2>
              <p className={styles.tierSubtitle}>Learn to transform systems, teams, and institutions</p>
            </div>

            <div className={styles.tierContent}>
              <div className={styles.tierInfo}>
                <p className={styles.duration}>24 hours + 20-hour practicum • Facilitator Training Certificate</p>
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

      <section className={`${styles.educatorSection} section-lg`}>
        <div className="container">
          <h2>Training for Educators</h2>
          <p className={styles.educatorIntro}>
            K-12 teachers receive specialized training with pedagogical focus, classroom applications, and professional development credits.
          </p>
          <div className={styles.educatorContent}>
            <div className={styles.educatorFeatures}>
              <h3>What Makes Educator Training Different</h3>
              <ul>
                <li>Grade-level adaptations (K-5, 6-8, 9-12)</li>
                <li>Curriculum integration and lesson planning</li>
                <li>Classroom management applications</li>
                <li>Student assessment strategies</li>
                <li>SEL competency alignment</li>
                <li>Parent communication resources</li>
              </ul>
            </div>
            <div className={styles.educatorCredits}>
              <h3>Professional Development Credits</h3>
              <p>All educator training qualifies for CEU/PD credits:</p>
              <ul>
                <li><strong>Tier 1:</strong> 15-20 contact hours (1.5-2 CEUs)</li>
                <li><strong>Tier 2:</strong> 40-60 contact hours (4-6 CEUs)</li>
                <li><strong>Tier 3:</strong> 80-100 contact hours (8-10 CEUs)</li>
              </ul>
              <p className={styles.educatorNote}>
                Individual teachers, school teams, and district partnerships available.
              </p>
            </div>
          </div>
          <a href="/educators" className={styles.educatorCta}>
            Explore Educator Training →
          </a>
        </div>
      </section>

      <section className={styles.apply}>
        <div className="container">
          <h2>Ready to Begin?</h2>
          <p>Choose your pathway and start your journey today.</p>
          <p style={{textAlign: 'center', marginBottom: '2rem', fontSize: 'var(--text-base)', color: 'rgba(255, 255, 255, 0.95)', fontStyle: 'italic', backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
            <strong>Note:</strong> Current offerings are professional development workshops with Certificates of Completion.
            A formal certification pathway with CE credits and external accreditation is planned for 2026.
            Early participants will have priority access to upgrade to full certification.
          </p>
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
