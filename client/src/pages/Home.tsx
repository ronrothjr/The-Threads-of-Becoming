import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Threads of Becoming</h1>
          <h2 className={`${styles.tagline} tagline`}>See. Hold. Emerge.</h2>
          <p className={styles.subtitle}>
            A framework for navigating creative tension—transforming what divides us into what advances us.
          </p>

          <div className={styles.heroContent}>
            <p>
              Every person, every relationship, every organization is shaped by tension—between what is known and what is emerging, between who we've been and who we are becoming.
            </p>
            <p>
              Most systems collapse under this pressure—forcing a resolution, picking a side, or breaking under the weight. Some learn to <em>hold</em> it.
            </p>
            <p>
              Alfred North Whitehead observed that reality doesn't advance by eliminating opposites but by integrating them—what he called the 'creative advance into novelty.'
            </p>
            <p>
              Many therapeutic and coaching modalities excel at specific interventions. Threads provides the navigational layer underneath—helping practitioners and clients recognize <em>where they are</em> in a tension before deciding <em>what to do</em> about it.
            </p>
            <p>
              Rooted in Process Theology and Alfred North Whitehead's insight, Threads offers a universal framework for individuals, practitioners, and organizations who want to navigate complexity without losing themselves.
            </p>
            <p className={styles.belief}>
              We believe that opposing truths—held without collapse—become the birthplace of the genuinely new.
            </p>
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
