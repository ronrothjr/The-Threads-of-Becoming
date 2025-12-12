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
            </div>

            <div className={styles.heroCard}>
              <h3>The Insight</h3>
              <p>
                Alfred North Whitehead observed that reality doesn't advance by eliminating opposites but by integrating them—what he called the <em>'creative advance into novelty.'</em>
              </p>
              <p>
                <strong><em>Opposing truths, held without collapse, become the birthplace of the genuinely new.</em></strong>
              </p>
            </div>

            <div className={styles.heroCard}>
              <h3>The Framework</h3>
              <p>
                Threads provides the navigational layer underneath therapeutic and coaching modalities—helping practitioners and clients recognize <em>where they are</em> in a tension before deciding <em>what to do</em> about it.
              </p>
              <p>
                <strong><em>A universal framework for navigating complexity without losing yourself.</em></strong>
              </p>
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
          </div>

          <p className={styles.pathwaysCta}>
            The world doesn't need fewer tensions. It needs more people who can hold them.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
