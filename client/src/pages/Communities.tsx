import React from 'react';
import styles from './Communities.module.css';

const Communities: React.FC = () => {
  return (
    <div className={styles.communities}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Threads for Faith Communities</h1>
          <h2 className={`${styles.tagline} tagline`}>Navigate congregational tensions with wisdom</h2>
          <p className={styles.subtitle}>
            A framework for clergy, lay leaders, and faith communities holding sacred tensions without splitting.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-lg">
        <div className="container">
          <div className={styles.intro}>
            <h2>Congregational Tensions Are Sacred</h2>
            <p>
              Faith communities regularly face tensions that resist resolution: tradition and innovation, stability and growth, pastoral care and prophetic witness, established members and newcomers, contemplation and action.
            </p>
            <p>
              These are not problems to solve. They are <em>polarities to hold</em>—the very tensions through which spiritual communities grow and deepen. When held skillfully, they become sites of transformation. When collapsed, they tear congregations apart.
            </p>
            <p>
              Threads of Becoming offers clergy and lay leaders a diagnostic framework for navigating these tensions. The seven threads name universal patterns that appear in every faith tradition, helping communities recognize when they've collapsed into rigid positions and how to return to creative holding.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className={`${styles.caseStudy} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Real Story: The Worship Style Divide</h2>
          <div className={styles.caseContent}>
            <div className={styles.presenting}>
              <h3>The Tension</h3>
              <p>
                A UU congregation polarized between "traditionalists" wanting established liturgy and "innovators" wanting contemporary worship. Each faction believed the other was destroying the congregation.
              </p>
            </div>

            <div className={styles.diagnosis}>
              <h3>Thread Identified: MEMORY</h3>
              <div className={styles.poles}>
                <div className={styles.pole}>
                  <h4>Given (Tradition)</h4>
                  <p>"This is who we are. Our history matters."</p>
                </div>
                <div className={styles.arrow}>↔</div>
                <div className={styles.pole}>
                  <h4>Chosen (Evolution)</h4>
                  <p>"We must stay relevant. Growth requires change."</p>
                </div>
              </div>
              <p className={styles.collapse}>
                <strong>Collapse observed:</strong> Traditionalists treated inherited forms as sacred (Told). Innovators treated tradition as obstacle (Telling). Both lost access to the wisdom of the other pole.
              </p>
            </div>

            <div className={styles.emergence}>
              <h3>What Emerged</h3>
              <p>
                Through facilitated dialogue using the Threads framework, the congregation created "woven liturgy" services—pairing traditional hymns with contemporary poetry, honoring both inheritance and innovation. Neither pole dominated. Both informed a richer whole.
              </p>
              <p className={styles.quote}>
                "Naming it as Memory helped us see we weren't enemies—we were both protecting something sacred."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Threads for Faith Communities */}
      <section className={`${styles.threads} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Common Congregational Tensions</h2>
          <p className={styles.threadsIntro}>
            Each thread shows up in predictable ways within faith communities. Recognizing the pattern helps prevent destructive collapse.
          </p>

          <div className={styles.threadList}>
            <div className={styles.threadItem}>
              <h3>PRESENCE: Solitude ↔ Community</h3>
              <p>Contemplative practice versus communal worship • Individual spiritual journey versus collective formation</p>
              <p className={styles.warning}><strong>Collapse signs:</strong> Isolated spirituality with no accountability OR constant activity with no inner depth</p>
            </div>

            <div className={styles.threadItem}>
              <h3>CONSENT: Pastoral Care ↔ Prophetic Witness</h3>
              <p>Comfort the afflicted versus afflict the comfortable • Sanctuary versus activism</p>
              <p className={styles.warning}><strong>Collapse signs:</strong> All comfort, no challenge OR all confrontation, no care</p>
            </div>

            <div className={styles.threadItem}>
              <h3>MEMORY: Tradition ↔ Innovation</h3>
              <p>Inherited liturgy versus contemporary expression • "How we've always done it" versus experimentation</p>
              <p className={styles.warning}><strong>Collapse signs:</strong> Rigid adherence to forms OR rejection of all tradition</p>
            </div>

            <div className={styles.threadItem}>
              <h3>PAUSE: Discernment ↔ Action</h3>
              <p>Waiting for clarity versus responding to urgent need • Contemplation versus mission</p>
              <p className={styles.warning}><strong>Collapse signs:</strong> Endless discernment with no action OR reactive activism with no reflection</p>
            </div>

            <div className={styles.threadItem}>
              <h3>EMBODIMENT: Head ↔ Heart</h3>
              <p>Theological depth versus emotional accessibility • Intellectual rigor versus experiential spirituality</p>
              <p className={styles.warning}><strong>Collapse signs:</strong> Dry intellectualism OR anti-intellectual emotionalism</p>
            </div>

            <div className={styles.threadItem}>
              <h3>UNCERTAINTY: Certainty ↔ Mystery</h3>
              <p>Clear doctrine versus radical openness • Answers versus questions</p>
              <p className={styles.warning}><strong>Collapse signs:</strong> Fundamentalism OR spiritual relativism</p>
            </div>

            <div className={styles.threadItem}>
              <h3>BECOMING: Who We Are ↔ Who We're Called To Be</h3>
              <p>Established identity versus evolving mission • Continuity versus transformation</p>
              <p className={styles.warning}><strong>Collapse signs:</strong> Rigid identity resistance OR constant reinvention without grounding</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Clergy */}
      <section className={`${styles.forClergy} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Resources for Clergy & Lay Leaders</h2>
          <div className={styles.resources}>
            <div className={styles.resource}>
              <h3>Facilitation Protocols</h3>
              <p>Step-by-step guides for navigating congregational conflicts using the Threads framework</p>
            </div>
            <div className={styles.resource}>
              <h3>Sermon Integration</h3>
              <p>How to introduce Threads language into preaching and teaching without overwhelming the congregation</p>
            </div>
            <div className={styles.resource}>
              <h3>Board Discernment</h3>
              <p>Templates for strategic planning and decision-making that honor creative tension</p>
            </div>
            <div className={styles.resource}>
              <h3>Pastoral Care Applications</h3>
              <p>Using Threads in counseling, spiritual direction, and crisis intervention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} section-lg`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Explore Training for Faith Leaders</h2>
            <p>Join clergy and lay leaders learning to hold sacred tensions without splitting their communities.</p>
            <div className={styles.ctaButtons}>
              <a href="/training" className={styles.primaryButton}>View Training Pathways</a>
              <a href="/resources" className={styles.secondaryButton}>Access Resources</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communities;
