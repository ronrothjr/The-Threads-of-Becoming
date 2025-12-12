import React from 'react';
import styles from './Organizations.module.css';

const Organizations: React.FC = () => {
  return (
    <div className={styles.organizations}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Threads for Organizations</h1>
          <h2 className={`${styles.tagline} tagline`}>Transform tension into collaborative emergence</h2>
          <p className={styles.subtitle}>
            A field guide for leaders, teams, and consultants navigating organizational tensions that cannot be solved—only managed.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-lg">
        <div className="container">
          <div className={styles.intro}>
            <h2>Why Organizations Get Stuck</h2>
            <p>
              Every organization navigates tensions that cannot be solved—only managed. Innovation versus execution. Growth versus sustainability. Speed versus quality. Centralization versus autonomy. These are not problems with solutions. They are <em>polarities</em> requiring ongoing navigation.
            </p>
            <p>
              When organizations treat polarities as problems, they get stuck. They oscillate between extremes, reorganizing every few years as the pendulum swings. Or they collapse into one pole, losing access to the wisdom of the other until crisis forces correction.
            </p>
            <p>
              Threads of Becoming provides a diagnostic framework for organizational tensions. The seven threads name universal patterns that appear at every scale—individual, team, department, enterprise. When you can name the thread, you can navigate it.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={`${styles.useCases} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How Organizations Use Threads</h2>
          <div className={styles.useCaseGrid}>
            <div className={styles.useCase}>
              <h3>Leaders</h3>
              <p>Diagnose team dysfunction, navigate strategic tensions, coach direct reports through transitions</p>
            </div>
            <div className={styles.useCase}>
              <h3>Teams</h3>
              <p>Break impasses, improve decision-making, transform conflict into collaboration</p>
            </div>
            <div className={styles.useCase}>
              <h3>OD Consultants</h3>
              <p>Add diagnostic precision to change management, facilitate strategic planning, resolve entrenched conflicts</p>
            </div>
            <div className={styles.useCase}>
              <h3>HR/People Teams</h3>
              <p>Enhance leadership development, improve team effectiveness programs, support organizational transitions</p>
            </div>
            <div className={styles.useCase}>
              <h3>Executive Coaches</h3>
              <p>Deepen coaching conversations, identify root patterns, accelerate leader development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Threads Overview */}
      <section className={`${styles.threads} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>The Seven Threads in Organizations</h2>
          <p className={styles.threadsIntro}>
            Each thread manifests in predictable organizational patterns. Use this mapping to quickly diagnose which tension is driving the dynamics you observe.
          </p>

          <div className={styles.threadCards}>
            <div className={styles.threadCard}>
              <h3>PRESENCE</h3>
              <p className={styles.question}>Where am I...?</p>
              <div className={styles.polarity}>Within ↔ Between</div>
              <p className={styles.example}>Individual contributor ↔ Team player • Autonomy ↔ Collaboration • Deep work ↔ Availability</p>
            </div>

            <div className={styles.threadCard}>
              <h3>CONSENT</h3>
              <p className={styles.question}>What may I...?</p>
              <div className={styles.polarity}>Yes ↔ No</div>
              <p className={styles.example}>Centralized ↔ Decentralized • Control ↔ Empowerment • Standardization ↔ Local adaptation</p>
            </div>

            <div className={styles.threadCard}>
              <h3>MEMORY</h3>
              <p className={styles.question}>Why do I...?</p>
              <div className={styles.polarity}>Given ↔ Chosen</div>
              <p className={styles.example}>Legacy systems ↔ Innovation • "How we've always done it" ↔ Fresh perspective</p>
            </div>

            <div className={styles.threadCard}>
              <h3>PAUSE</h3>
              <p className={styles.question}>When do I...?</p>
              <div className={styles.polarity}>Not Yet ↔ Now</div>
              <p className={styles.example}>Planning ↔ Execution • Analysis ↔ Action • Strategy ↔ Tactics</p>
            </div>

            <div className={styles.threadCard}>
              <h3>EMBODIMENT</h3>
              <p className={styles.question}>How does my body know?</p>
              <div className={styles.polarity}>Think ↔ Feel</div>
              <p className={styles.example}>Data-driven ↔ Intuition • Metrics ↔ Culture • Logic ↔ Relationship</p>
            </div>

            <div className={styles.threadCard}>
              <h3>UNCERTAINTY</h3>
              <p className={styles.question}>What is the mystery unveiling?</p>
              <div className={styles.polarity}>Hide ↔ Seek</div>
              <p className={styles.example}>Risk management ↔ Innovation • Stability ↔ Agility • Predictability ↔ Experimentation</p>
            </div>

            <div className={styles.threadCard}>
              <h3>BECOMING</h3>
              <p className={styles.question}>Who am I becoming now?</p>
              <div className={styles.polarity}>Same ↔ Different</div>
              <p className={styles.example}>Core competency ↔ Diversification • Purpose ↔ Pivot • Brand consistency ↔ Evolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} section-lg`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Navigate Organizational Tensions?</h2>
            <p>Access the full Organizations Field Guide with templates, facilitation sequences, and case studies.</p>
            <div className={styles.ctaButtons}>
              <a href="/training" className={styles.primaryButton}>Explore Training</a>
              <a href="/resources" className={styles.secondaryButton}>Access Resources</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organizations;
