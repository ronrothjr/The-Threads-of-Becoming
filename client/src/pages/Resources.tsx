import React from 'react';
import styles from './Resources.module.css';

const Resources: React.FC = () => {
  return (
    <div className={styles.resources}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Threads Toolkit</h1>
          <h2 className={`${styles.tagline} tagline`}>19 Documents • 300+ Pages • One Framework</h2>
          <p className={styles.subtitle}>
            Modular resources for individuals, practitioners, and organizations. Find what you need for your context.
          </p>
        </div>
      </section>

      {/* Public Tools */}
      <section className={`${styles.publicTools} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Public Tools</h2>
          <p className={styles.sectionIntro}>Free resources available to everyone. No account required.</p>

          <div className={styles.toolGrid}>
            <div className={styles.tool}>
              <h3>Cheat Sheet</h3>
              <p>Single-page summary of all seven threads with poles and collapse signs</p>
              <a href="/cheat-sheet.pdf" className={styles.downloadButton} download>Download PDF</a>
            </div>

            <div className={styles.tool}>
              <h3>Personal Practice Workbook</h3>
              <p>Self-guided journal for personal transformation with reflection questions for each thread</p>
              <a href="/personal-practice-workbook.pdf" className={styles.downloadButton} download>Download PDF</a>
            </div>

            <div className={styles.tool}>
              <h3>Reflection Tool</h3>
              <p>Guided self-assessment for identifying personal thread patterns</p>
              <a href="/reflection-tool.pdf" className={styles.downloadButton} download>Download PDF</a>
            </div>

            <div className={styles.tool}>
              <h3>Threads Blog Article</h3>
              <p>Accessible 36-page introduction to the framework for newcomers</p>
              <a href="/blog" className={styles.downloadButton}>Read Online</a>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Documents */}
      <section className={`${styles.foundational} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Foundational Documents</h2>
          <p className={styles.sectionIntro}>Entry points and core framework materials</p>

          <div className={styles.docList}>
            <div className={styles.doc}>
              <div className={styles.docInfo}>
                <h3>Tier 1 Foundations Slides</h3>
                <p className={styles.audience}>For trainers, workshop leaders</p>
                <p>Complete 37-slide deck for introductory training with speaker notes</p>
              </div>
              <a href="/tier1-foundations.pdf" className={styles.accessButton} download>Download PDF</a>
            </div>

            <div className={styles.doc}>
              <div className={styles.docInfo}>
                <h3>Creative Advance Institute One-Pager</h3>
                <p className={styles.audience}>For potential partners, donors</p>
                <p>Overview of Creative Advance Institute mission and programs</p>
              </div>
              <a href="/creative-advance-institute-one-pager.pdf" className={styles.accessButton} download>Download PDF</a>
            </div>

            <div className={styles.doc}>
              <div className={styles.docInfo}>
                <h3>Why Adopt Threads?</h3>
                <p className={styles.audience}>For practitioners considering training</p>
                <p>Framework comparison and value proposition for professional adoption</p>
              </div>
              <a href="/Why Adopt One-pager.pdf" className={styles.accessButton} download>Download PDF</a>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Resources */}
      <section className={`${styles.practitioner} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Practitioner Resources</h2>
          <p className={styles.sectionIntro}>Tools for facilitators, coaches, and therapists</p>
          <p className={styles.loginNote}>
            <em>Most practitioner resources require <a href="/portal">portal access</a>. Complete Tier 1 training to unlock.</em>
          </p>

          <div className={styles.docList}>
            <div className={styles.doc}>
              <div className={styles.docInfo}>
                <h3>Protocol Reference Cards</h3>
                <p className={styles.audience}>For facilitators (in-session use)</p>
                <p>Quick-reference cards with engagement prompts per thread</p>
              </div>
              <a href="/protocol-reference-cards.pdf" className={styles.accessButton} download>Download PDF</a>
            </div>

            <div className={styles.doc}>
              <div className={styles.docInfo}>
                <h3>Intake & Diagnostic Form</h3>
                <p className={styles.audience}>For practitioners, clients</p>
                <p>Assessment tool for identifying active threads and collapse patterns</p>
              </div>
              <a href="/intake-diagnostic.pdf" className={styles.accessButton} download>Download PDF</a>
            </div>

            <div className={styles.doc}>
              <div className={styles.docInfo}>
                <h3>Facilitator Guide</h3>
                <p className={styles.audience}>For certified facilitators</p>
                <p>Complete methodology for leading Threads-based conversations</p>
              </div>
              <a href="/portal" className={styles.lockedButton}>Portal Access Required</a>
            </div>

            <div className={styles.doc}>
              <div className={styles.docInfo}>
                <h3>Threads & Protocols (70 pages)</h3>
                <p className={styles.audience}>For trained practitioners</p>
                <p>Detailed thread protocols with diagnostic questions and micro-engagements</p>
              </div>
              <a href="/portal" className={styles.lockedButton}>Portal Access Required</a>
            </div>

            <div className={styles.doc}>
              <div className={styles.docInfo}>
                <h3>Case Studies (12 Examples)</h3>
                <p className={styles.audience}>For trainees, practitioners</p>
                <p>Detailed examples across couples, organizations, healthcare, families</p>
              </div>
              <a href="/portal" className={styles.lockedButton}>Portal Access Required</a>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Applications */}
      <section className={`${styles.specialized} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Specialized Applications</h2>
          <p className={styles.sectionIntro}>Context-specific guides for professional integration</p>

          <div className={styles.categoryGrid}>
            <div className={styles.category}>
              <h3>Clinical Integration</h3>
              <ul>
                <li>Clinical Integration & Ethics Guide</li>
                <li>Integration with IFS, EFT, ACT, DBT</li>
                <li>Scope of practice considerations</li>
              </ul>
              <a href="/portal" className={styles.categoryLink}>View in Portal →</a>
            </div>

            <div className={styles.category}>
              <h3>Organizations</h3>
              <ul>
                <li>Organizations Field Guide</li>
                <li>Meeting templates & facilitation sequences</li>
                <li>Organizational case studies</li>
              </ul>
              <a href="/organizations" className={styles.categoryLink}>Learn More →</a>
            </div>

            <div className={styles.category}>
              <h3>Faith Communities</h3>
              <ul>
                <li>Front Doors for Clergy</li>
                <li>Pastoral care applications</li>
                <li>Congregational discernment tools</li>
              </ul>
              <a href="/communities" className={styles.categoryLink}>Learn More →</a>
            </div>

            <div className={styles.category}>
              <h3>Cross-Framework Integration</h3>
              <ul>
                <li>Modality Compatibility Guide (14 frameworks)</li>
                <li>Crosswalk with Polarity Management</li>
                <li>Integration with IFS, NVC, Spiral Dynamics</li>
                <li>Academic foundations</li>
              </ul>
              <a href="/modality-compatibility" className={styles.categoryLink}>View Compatibility Guide →</a>
              <a href="/portal" className={styles.categoryLink}>Portal Resources →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} section-lg`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Go Deeper?</h2>
            <p>Join Tier 1 Foundations training to unlock full practitioner resources and certification pathways.</p>
            <div className={styles.ctaButtons}>
              <a href="/training" className={styles.primaryButton}>Explore Training</a>
              <a href="/portal" className={styles.secondaryButton}>Portal Login</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
