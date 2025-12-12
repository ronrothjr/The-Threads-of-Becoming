import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.css';

const YourTurn: React.FC = () => {

  return (
    <div className={styles.article} id="top">
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Your Turn</h1>
          <h2 className={styles.subtitle}>Practical Exercises</h2>
        </div>
      </section>

      <article className="section-lg">
        <div className={`${styles.content} container`}>

          <section className={styles.section}>
            <h2>Think of a situation that's been pulling at you lately</h2>
            <p>Something unresolved, something you keep circling back to. Now run through the seven seeds:</p>

            <ul className={styles.exerciseList}>
              <li><strong>Where am I...?</strong> — What kind of presence is this situation calling for?</li>
              <li><strong>What may I...?</strong> — Whose consent is at stake? Yours? Someone else's?</li>
              <li><strong>Why do I...?</strong> — What stories are you carrying into this?</li>
              <li><strong>When do I...?</strong> — Is this a moment for action or patience?</li>
              <li><strong>How does my body know?</strong> — What is your body telling you?</li>
              <li><strong>What is the mystery unveiling?</strong> — What don't you know yet that might matter?</li>
              <li><strong>Who am I becoming now?</strong> — Who are you becoming through this?</li>
            </ul>

            <p>You don't need answers to all of them. Just notice which ones light up. Which tensions are you holding without realizing it?</p>
            <p className={styles.highlight}>That noticing is the beginning. The rest is practice—imperfect, ongoing, human.</p>
          </section>

          <section className={styles.section}>
            <h2>Welcome to the spiral.</h2>
          </section>

          <section className={styles.section}>
            <h2>What's Next?</h2>
            <p>Here are three ways to continue your journey. Choose the one that feels right for where you are today.</p>

            <h3>1. Which Thread is Vibrating?</h3>
            <p>
              You can't navigate all seven threads at once. But usually, there is one that is pulling tighter than the others right now. Is it the pull between <em>action and waiting?</em> The struggle between <em>holding on and letting go?</em>
            </p>
            <p>
              <strong>Reflection:</strong> Which of the seven threads is most active in your life today, and what is one question you're asking yourself about it?
            </p>

            <h3>2. Don't Hold the Tension Alone</h3>
            <p>
              We've all had those arguments that feel like loops—where we're fighting about the dishes but really wrestling with Presence or Consent.
            </p>
            <p>
              If there is someone you are navigating a difficult spiral with—a partner, a colleague, or a friend—consider sharing this framework with them. Not as a way to say "you need to fix this," but as an invitation to ask: <em>"Are we just holding different ends of the same thread?"</em>
            </p>
            <p>Sometimes, just having a shared language is the beginning of the music.</p>

            <h3>3. A Practice for the Week</h3>
            <p>
              The goal isn't to master the framework overnight; the goal is simply to notice. This week, try a small experiment.
            </p>
            <p>
              When you feel that familiar tightening in your chest or stomach, take a pause. Ask yourself just one question: <strong>"What isn't finished in me?"</strong>
            </p>
            <p>You don't need to solve it. Just name it, breathe into it, and let the spiral do the rest.</p>
          </section>

          <section className={styles.section}>
            <h2>Beginning Again… And Again</h2>
            <p>
              Read the seeds as a journey: <em>Who's there? → May I? → What happened? → Why do we wait here? → How does my body know? → What is the mystery unveiling? → Who am I now?</em>
            </p>
            <p>
              And then notice: "Who am I now?" spirals back to "Who's there?"—presence encountered by someone transformed, beginning again with new eyes.
            </p>
            <p>
              These aren't seven separate topics. They're seven lenses on every significant moment. The difficult conversation activates presence <em>and</em> consent <em>and</em> memory <em>and</em> pause. The community conflict involves bodies <em>and</em> uncertainty <em>and</em> becoming. The tensions weave through each other like threads in fabric—which is why we call them threads.
            </p>
            <p>The framework doesn't tell you what to believe. It offers a place to stand together while believing different things.</p>
            <p className={styles.highlight}>
              That's the real gift: not common answers but common questions. Not resolution but the capacity to stay in the room while the tension does its work.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Keeping It Explicitly Open</h2>
            <p>
              We are dedicated to allowing this space to grow and change through community involvement, not private ownership.
            </p>
            <p>
              This work is licensed under <strong>Creative Commons Attribution-ShareAlike 4.0 International</strong>. You are free to use, adapt, and share with attribution.
            </p>
            <p>
              The Threads of Becoming is a living framework, designed to evolve through practice and collective wisdom. We invite contributions that:
            </p>
            <ul>
              <li>Identify new universal tensions/threads</li>
              <li>Share how different traditions engage these questions</li>
              <li>Offer practices for embodying these tensions</li>
              <li>Document applications in communities</li>
            </ul>
            <p>
              See the <a href="https://github.com/ronrothjr/The-Threads-of-Becoming" target="_blank" rel="noopener noreferrer">GitHub repository</a> for contribution guidelines.
            </p>
          </section>

          <div className={styles.ctaButtons}>
            <Link to="/explore" className={styles.primaryButton}>Explore the Seven Threads</Link>
            <Link to="/training" className={styles.secondaryButton}>Training Pathways</Link>
            <Link to="/resources" className={styles.tertiaryButton}>Download Resources</Link>
          </div>

          <div className={styles.navigation}>
            <Link to="/deep-dive" className={styles.navButton}>← Previous: Seven Threads Deep Dive</Link>
            <Link to="/blog" className={styles.navButton}>Back to Blog →</Link>
          </div>

        </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <a href="#top" className={styles.backToTop}>↑ Back to Top</a>
          </div>

      </article>
    </div>
  );
};

export default YourTurn;
