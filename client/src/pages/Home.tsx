import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Threads</h1>
          <h2 className={`${styles.tagline} tagline`}>See. Hold. Emerge.</h2>
          <p className={styles.subtitle}>
            A framework for navigating creative tension—<br />transforming what divides us into what advances us.
          </p>

          <div className={styles.heroCards}>
            <div className={styles.heroCard}>
              <h3>The Reality</h3>
              <p>
                Every person, relationship, and organization is shaped by tension—between what is known and what is emerging, between who we've been and who we are becoming.
              </p>
              <p>
                <strong><em>Most systems collapse under this pressure. Some learn to hold it.</em></strong>
              </p>
              <a href="/collapse" className={styles.heroCardCta}>Learn to recognize collapse →</a>
            </div>

            <div className={styles.heroCard}>
              <h3>The Insight</h3>
              <p>
                Alfred North Whitehead observed that reality doesn't advance by eliminating opposites but by integrating them—what he called the <em>'creative advance into novelty.'</em>
              </p>
              <p>
                <strong><em>Opposing truths, held without collapse, become the birthplace of the genuinely new.</em></strong>
              </p>
              <a href="/explore" className={styles.heroCardCta}>See emergence in action →</a>
            </div>

            <div className={styles.heroCard}>
              <h3>The Framework</h3>
              <p>
                Threads provides the navigational layer underneath personal practice, therapeutic, and coaching modalities—helping practitioners and clients recognize <em>where they are</em> in a tension before deciding <em>what to do</em> about it.
              </p>
              <p>
                <strong><em>A universal framework for navigating complexity without losing yourself.</em></strong>
              </p>
              <a href="/modality-compatibility" className={styles.heroCardCta}>See how it integrates →</a>
            </div>
          </div>

          <div className={styles.heroStory}>
            <a href="/mission" className={styles.storyLink}>Read Our Story →</a>
          </div>
        </div>
      </section>

      {/* Video Section - Now handled by PersistentVideo component */}
      <section className={styles.videoSection}>
        <div className="container">
          <div id="home-video-wrapper"></div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={`${styles.caseStudies} section-lg`}>
        <div className="container">
          <div className={styles.caseStudiesCallout}>
            <p><strong>Threads is for:</strong></p>
            <ul>
              <li>Daily use by individuals in conversations, at work, and in personal reflection</li>
              <li>Therapists to integrate with all their other modalities</li>
              <li>Small groups and large organizations alike</li>
            </ul>
          </div>

          <h2 className={styles.pathwaysTitle}>Sample Case Studies*</h2>

          <div className={styles.casesGrid}>
            {/* Case 1: Individual/Couple */}
            <div className={styles.caseCard}>
              <h3>"You never show up for me."</h3>
              <div className={styles.caseThread}>Thread: PRESENCE</div>
              <p className={styles.caseTension}>
                A couple arrives in crisis. Elena says Marc is emotionally unavailable. Marc says Elena is suffocating him.
              </p>
              <div className={styles.casePoles}>
                <div className={styles.pole}>
                  <strong>Within:</strong> Marc withdraws to regulate himself. Solitude feels safe.
                </div>
                <div className={styles.pole}>
                  <strong>Between:</strong> Elena reaches for connection. Aloneness feels like abandonment.
                </div>
              </div>
              <div className={styles.caseEmergence}>
                <strong>Emergence:</strong> They create a "90-second pause" ritual. When tension rises, Marc stays in the room but can be silent. Elena asks for one sentence of reassurance. Neither gets their full pole—but neither collapses.
              </div>
            </div>

            {/* Case 2: Group/Community */}
            <div className={styles.caseCard}>
              <h3>The Worship Style Divide</h3>
              <div className={styles.caseThread}>Thread: MEMORY</div>
              <p className={styles.caseTension}>
                A congregation is polarized between "traditionalists" who want established liturgy and "innovators" who want contemporary worship.
              </p>
              <div className={styles.casePoles}>
                <div className={styles.pole}>
                  <strong>Given:</strong> "This is who we are. Our history matters."
                </div>
                <div className={styles.pole}>
                  <strong>Chosen:</strong> "We must stay relevant. Growth requires change."
                </div>
              </div>
              <div className={styles.caseEmergence}>
                <strong>Emergence:</strong> "Woven liturgy" services pairing traditional hymns with contemporary poetry. Neither pole dominates—both inform a richer whole.
              </div>
            </div>

            {/* Case 3: Organization */}
            <div className={styles.caseCard}>
              <h3>Two Directors, One Budget</h3>
              <div className={styles.caseThread}>Thread: PAUSE</div>
              <p className={styles.caseTension}>
                Director of Product and Director of Operations in constant conflict. Product wants to "move fast." Operations wants to "get it right."
              </p>
              <div className={styles.casePoles}>
                <div className={styles.pole}>
                  <strong>Not Yet:</strong> "We don't know enough. Rushing creates technical debt."
                </div>
                <div className={styles.pole}>
                  <strong>Now:</strong> "We're losing ground. Perfect is the enemy of good."
                </div>
              </div>
              <div className={styles.caseEmergence}>
                <strong>Emergence:</strong> Phased rollout: core features ship immediately (Now), while complex integrations get structured development time (Not Yet). Regular checkpoints prevent collapse.
              </div>
            </div>
          </div>
          <p style={{textAlign: 'center', marginTop: '2rem', fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', fontStyle: 'italic'}}>
            *Sample case studies illustrate anticipated applications of the Threads framework
          </p>
        </div>
      </section>

      {/* Pathways Section */}
      <section className={`${styles.pathways} section-lg`}>
        <div className="container">
          <h2 className={styles.pathwaysTitle}>Choose Your Pathway</h2>

          <div className={styles.pathwaysGrid}>
            <div className={styles.pathway}>
              <h3>For Individuals</h3>
              <p>Learn the language of your own patterns</p>
              <a href="/explore" className={styles.pathwayLink}>Explore →</a>
            </div>

            <div className={styles.pathway}>
              <h3>For Practitioners</h3>
              <p>Guide others with skill and ethical clarity</p>
              <a href="/training" className={styles.pathwayLink}>Learn More →</a>
            </div>

            <div className={styles.pathway}>
              <h3>For Organizations</h3>
              <p>Transform conflict into collective emergence</p>
              <a href="/organizations" className={styles.pathwayLink}>Discover →</a>
            </div>

            <div className={styles.pathway}>
              <h3>For Faith Communities</h3>
              <p>Navigate congregational tensions with wisdom</p>
              <a href="/communities" className={styles.pathwayLink}>See How →</a>
            </div>

            <div className={styles.pathway}>
              <h3>For Educators</h3>
              <p>Bring tension-holding into K-12 classrooms</p>
              <a href="/educators" className={styles.pathwayLink}>Learn More →</a>
            </div>

            <div className={styles.pathway}>
              <h3>For Voters</h3>
              <p>Take back your response—stop being played</p>
              <a href="/hold" className={styles.pathwayLink}>Learn HOLD →</a>
            </div>
          </div>

          <p className={styles.pathwaysCta}>
            The world doesn't need fewer tensions.<br />It needs more people who can hold them.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
