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
            To cultivate the human capacity to hold creative tension—<br />so individuals, communities, and organizations<br />can move from collapse toward emergence.
          </blockquote>
        </div>
      </section>

      <section className={`${styles.founder} section-lg`}>
        <div className="container">
          <h2>The Founder</h2>
          <div className={styles.content}>
            <p>
              <strong>Ron Roth Jr.</strong> created Threads of Becoming by bringing together philosophical training, decades of systems thinking, and lived practice in spiritual community leadership.
            </p>
            <p>
              With a BA in Philosophy from St. John Vianney College Seminary and 25 years as a software engineer, Ron combines rigorous theological grounding with the pattern recognition and systems design discipline that comes from building complex frameworks. As Worship Team Lead at the Unitarian Universalist Fellowship of Boca Raton, he works directly with the tensions that emerge in congregational life—where competing values, relational complexity, and spiritual discernment intersect.
            </p>
            <p>
              Threads emerged from observing that existing conflict resolution models often push too quickly toward resolution, missing the transformative potential that lives in tension itself. Drawing on Process Philosophy, clinical frameworks, and lived practice, Ron developed the seven Threads as universal dynamics that appear across personal, relational, and organizational life.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.origins} section-lg`}>
        <div className="container">
          <h2>Formation of the Institute</h2>
          <div className={styles.content}>
            <p>
              The Creative Advance Institute is currently being formed as a 501(c)(3) nonprofit organization to steward and scale the Threads of Becoming framework. We are assembling a diverse board of directors representing expertise in theology, organizational development, clinical practice, and governance.
            </p>
            <p>
              The Institute will provide training, certification, and resources for individuals and professionals seeking to integrate Threads into their practice, as well as organizational consulting for communities and teams navigating complex tensions.
            </p>
            <p>
              <strong>Why now?</strong> Because the capacity to hold creative tension—rather than collapsing toward false resolution—has never been more critical. Whether in personal relationships, organizations under strain, or communities facing polarization, the ability to see tension as generative rather than destructive is a skill we desperately need.
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
              Theologian Parker Palmer defines the "tragic gap" as the space between harsh realities and what we know is possible, urging us to stand in this tension between cynicism and idealism, holding both despair and hope to find authentic action, not by closing the gap but by learning to live within it, like a "broken-open heart" gaining capacity for the world's suffering and joy.
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
          <h2>Support the Launch</h2>
          <div className={styles.supportGrid}>
            <div className={styles.supportCard}>
              <h3>Help Us Launch</h3>
              <p>We are in the process of forming the Institute and will be launching officially in 2025. Your support helps us:</p>
              <ul>
                <li>Complete the 501(c)(3) formation process</li>
                <li>Develop training materials and certification programs</li>
                <li>Create digital learning platforms and open-source resources</li>
                <li>Provide accessible programming for underserved communities</li>
                <li>Build a Community of Practice for practitioners</li>
              </ul>
              <p className={styles.comingSoon}><em>Donation functionality coming soon once 501(c)(3) status is approved.</em></p>
            </div>

            <div className={styles.supportCard}>
              <h3>Get Involved Early</h3>
              <p>We're looking for early partners and collaborators:</p>
              <ul>
                <li>Beta testers for workshops and training programs</li>
                <li>Professional practitioners interested in certification</li>
                <li>Organizations interested in pilot programs</li>
                <li>Advisors with expertise in nonprofit governance, clinical practice, or organizational development</li>
                <li>Volunteers with skills in web development, design, or curriculum development</li>
              </ul>
              <a href="/contact" className={styles.supportButton}>Express Interest</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
