import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.css';

const HoldingTension: React.FC = () => {
  return (
    <div className={styles.article} id="top">
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Holding the Tension</h1>
          <h2 className={styles.subtitle}>What It Actually Means</h2>
        </div>
      </section>

      <article className="section-lg">
        <div className={`${styles.content} container`}>

          <p className={styles.intro}>
            Now we get to the heart of the practice. "Hold the tension" can become empty advice without concrete guidance. Let's build this out.
          </p>

          <section className={styles.section}>
            <h2>First, what it doesn't mean:</h2>
            <ul>
              <li>Paralysis or endless processing</li>
              <li>Wishy-washy compromise ("let's meet in the middle")</li>
              <li>Refusing to decide</li>
              <li>Pretending both options are equally valid when they're not</li>
              <li>Spiritual bypassing disguised as wisdom</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>What it does mean:</h2>
            <p className={styles.highlight}>
              Making a conscious choice <em>while</em> honoring what the unchosen pole is trying to protect—and building that honoring into how you move forward.
            </p>
            <p>
              The tension doesn't disappear when you decide. You carry it with you, and that's the point. A decision made in awareness of the tension is qualitatively different from a decision made by collapsing into one pole and pretending the other doesn't matter.
            </p>
          </section>

          <section className={styles.section}>
            <h2>The Bottom Line</h2>
            <p>
              "Holding the tension" isn't about avoiding decisions. It's about making decisions <strong>consciously</strong>—with full awareness of what each pole offers, explicit honoring of what you're not choosing, and built-in ways to stay in relationship with the tension as it evolves.
            </p>
            <p>
              The question isn't "How do I make the tension go away?" The question is "How do I make a decision that carries the tension wisely?"
            </p>
            <p>
              That carrying is the practice. And it's worth the energy because decisions made this way last longer, hurt less, and teach more than decisions made by collapsing into one pole and pretending the other doesn't exist.
            </p>
            <p>
              By honoring the unchosen pole, choosing becomes a creative act—you're collecting data for what comes in the return of the next spiral. You're predicting and preparing for when the next actual occasion for creative advance will emerge. You won't be surprised the next time the tension arises—you'll be prepared for it with UNCERTAINTY as a cocreator.
            </p>
          </section>

          <div className={styles.navigation}>
            <Link to="/blog" className={styles.navButton}>← Back to Blog</Link>
            <Link to="/practice" className={styles.navButton}>Next: 6-Step Practice →</Link>
          </div>

        </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <a href="#top" className={styles.backToTop}>↑ Back to Top</a>
          </div>

      </article>
    </div>
  );
};

export default HoldingTension;
