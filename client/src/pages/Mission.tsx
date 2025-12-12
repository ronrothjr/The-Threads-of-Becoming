import React from 'react';
import styles from './Mission.module.css';

const Mission: React.FC = () => {
  return (
    <div className={styles.mission}>
      <section className={styles.header}>
        <div className="container">
          <h1>Mission & Philosophical Roots</h1>
        </div>
      </section>

      <section className={`${styles.missionStatement} section-lg`}>
        <div className="container">
          <h2>Our Mission</h2>
          <blockquote className={styles.quote}>
            To cultivate the human capacity to hold creative tension—so individuals, communities, and organizations can move from collapse toward emergence.
          </blockquote>
        </div>
      </section>

      <section className={`${styles.origins} section-lg`}>
        <div className="container">
          <h2>Where Threads Came From</h2>
          <div className={styles.content}>
            <p>
              Threads of Becoming emerged from the intersection of congregational leadership, Process Theology, and the practical demands of helping people navigate tensions they couldn't resolve. Working with a Unitarian Universalist congregation's Right Relations Team, Ron Bronson found that existing conflict resolution models often pushed too quickly toward resolution—missing the transformative potential that lives in tension itself.
            </p>
            <p>
              Over seven months of intensive development—drawing on Whitehead's philosophy, clinical frameworks, and lived practice—the seven Threads crystallized as universal dynamics that appear across personal, relational, and organizational life. The framework has since been tested in workshops, pastoral care, leadership retreats, and one-on-one sessions. It continues to evolve through the practitioners who use it.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.beliefs} section-lg`}>
        <div className="container">
          <h2>What We Believe</h2>
          <div className={styles.beliefsList}>
            <div className={styles.belief}>
              Tension is not the enemy—it is the birthplace of the genuinely new.
            </div>
            <div className={styles.belief}>
              Collapse is not failure—it is information about what we're avoiding.
            </div>
            <div className={styles.belief}>
              Growth requires holding what we once fled.
            </div>
            <div className={styles.belief}>
              Ethical, skilled presence can transform systems.
            </div>
            <div className={styles.belief}>
              People deserve tools for clarity, compassion, and emergence.
            </div>
            <div className={styles.belief}>
              The best practitioners integrate multiple approaches—Threads provides the navigational substrate.
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.whyCreativeAdvance} section-lg`}>
        <div className="container">
          <h2>Why "Creative Advance"?</h2>
          <div className={styles.content}>
            <p>
              The name comes from Alfred North Whitehead's concept of the "creative advance into novelty"—the idea that reality itself moves forward through the integration of what has been with what is becoming.
            </p>
            <p>
              We are not problems to be solved but tensions to be lived.
            </p>
            <p>
              The Creative Advance Institute exists to help people and organizations participate more skillfully in this ongoing process of becoming.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.support}>
        <div className="container">
          <h2>Support the Work</h2>
          <div className={styles.supportGrid}>
            <div className={styles.supportCard}>
              <h3>Donate</h3>
              <p>Your gift helps provide:</p>
              <ul>
                <li>Scholarships for Tier 1 and Tier 2 training</li>
                <li>Training for facilitators in underserved communities</li>
                <li>Digital learning platforms and open-source resources</li>
                <li>Organizational interventions in communities under strain</li>
                <li>Research and development of new applications</li>
              </ul>
              <a href="/donate" className={styles.supportButton}>Donate</a>
            </div>

            <div className={styles.supportCard}>
              <h3>Partner With Us</h3>
              <ul>
                <li>Host a Threads workshop at your organization</li>
                <li>Bring discernment facilitation to your congregation</li>
                <li>Collaborate on research or curriculum development</li>
                <li>Join our Community of Practice</li>
                <li>Offer professional skills or volunteer support</li>
              </ul>
              <a href="/contact" className={styles.supportButton}>Get In Touch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
