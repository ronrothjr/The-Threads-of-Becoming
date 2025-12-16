import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.css';

const CollapseAnatomy: React.FC = () => {

  return (
    <div className={styles.article} id="top">
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>The Anatomy of Collapse</h1>
          <h2 className={styles.subtitle}>Recognizing when tension becomes stuck</h2>
        </div>
      </section>

      <article className="section-lg">
        <div className={`${styles.content} container`}>

          <p className={styles.intro}>
            Before we can hold tension, we need to recognize what collapsing looks like:
          </p>

          <section className={styles.section}>
            <h2>Collapsing toward one pole:</h2>
            <ul>
              <li>"I just need more space" (solitude wins, connection dismissed)</li>
              <li>"We have to act NOW" (urgency wins, discernment dismissed)</li>
              <li>"The past is the past" (chosen story wins, inherited story erased)</li>
              <li>"I know what's right here" (certainty wins, mystery dismissed)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Collapsing into false compromise:</h2>
            <ul>
              <li>"Let's just meet in the middle" (neither pole honored, both diluted)</li>
              <li>"We'll do a little of both" (no clear choice, no real commitment)</li>
              <li>"Everyone's right in their own way" (avoids the actual tension)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Signs you've collapsed:</h2>
            <ul>
              <li>You're defending one pole and demonizing the other</li>
              <li>You feel righteous, not curious</li>
              <li>The "other side" seems obviously wrong</li>
              <li>You've stopped asking what the neglected pole might be protecting</li>
              <li>The decision feels like winning rather than choosing</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Back to Maria and James</h2>
            <p>
              Remember the couple from the beginning? The ones who keep having the same fight about togetherness and space?
            </p>
            <p>Here's what changed when they learned to name the threads:</p>
            <p>
              Maria recognized she was pulling hard on the <em>between</em> pole of presence—needing connection, fearing abandonment—while James was pulling toward <em>within</em>—needing solitude, fearing engulfment. Neither was wrong. They were holding different ends of the same thread.
            </p>
            <p>
              They started asking better questions. Not "Why can't you just..." but "What's the quality of presence we each need right now?" (<em>What is being met here?</em>) Not "You always..." but "What stories are we carrying about what love is supposed to look like?" (<em>What do we want our story to be?</em>)
            </p>
            <p>
              The tension didn't disappear. It couldn't—it's woven into who they are. But it stopped being a war. It became a dance, sometimes graceful, sometimes clumsy, but a dance they were doing together instead of a battle they were fighting against each other.
            </p>
            <p className={styles.highlight}>
              The thread held. It made music.
            </p>
          </section>

          <div className={styles.navigation}>
            <Link to="/practice" className={styles.navButton}>← 6-Step Practice</Link>
            <Link to="/five-moves" className={styles.navButton}>Next: Five Practical Moves →</Link>
          </div>

        </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <a href="#top" className={styles.backToTop}>↑ Back to Top</a>
          </div>

      </article>
    </div>
  );
};

export default CollapseAnatomy;
