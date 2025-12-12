import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.css';

const Practice: React.FC = () => {
  return (
    <div className={styles.article}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Navigating the Threads</h1>
          <h2 className={styles.subtitle}>A 6-Step Practice</h2>
        </div>
      </section>

      <article className="section-lg">
        <div className={`${styles.content} container`}>

          <p className={styles.intro}>
            Here's the thing about these seven tensions: you don't encounter them one at a time in neat sequence. They pile on. The fight with your partner involves presence <em>and</em> consent <em>and</em> memory <em>and</em> pause. The decision about whether to leave your job activates your body <em>and</em> your uncertainty <em>and</em> your sense of who you're becoming. Life doesn't sort itself into categories.
          </p>

          <p>So how do you work with this when things get tangled?</p>

          <p className={styles.highlight}>
            Just naming the tension is already half the work. When you can say "Oh—this is a consent question" or "I'm caught between holding on and letting go," something shifts. The tension loses some of its unconscious grip. You're no longer inside the storm; you're watching the weather.
          </p>

          <p>Here's a simple practice—not <em>the</em> way, but <em>a</em> way that's proven useful:</p>

          <section className={styles.section}>
            <h2>1. Identify</h2>
            <p>
              Which thread is pulling? Maybe several. Name them. Say it out loud if that helps: "This is about memory. And consent. And I'm not sure I'm really present."
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Locate</h2>
            <p>
              Where do you feel it? Tension lives in the body before it becomes thought. Tight chest? Clenched jaw? Hollow stomach? The body often knows which thread is activated before the mind does.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Breathe</h2>
            <p>
              Stay with both sides of the tension. Don't rush to resolve it. Your instinct will be to pick a pole—action or stillness, holding on or letting go. Resist for a moment. Just breathe and notice what it's like to hold both.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Listen</h2>
            <p>
              What is this tension teaching? What needs are underneath it—yours and others'? Tensions aren't random irritants. They're information about what matters.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Choose</h2>
            <p>
              Make a conscious choice to affirm the tension between the poles without collapsing them—including the choice to wait and not choose yet. The goal isn't to escape the tension but to act from awareness rather than reaction.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Learn</h2>
            <p>
              Afterward, notice: what emerged from holding the tension rather than collapsing it? What's different now?
            </p>
          </section>

          <div className={styles.note}>
            <p>
              This sounds tidy on paper. In practice, it's messier. You'll forget to breathe. You'll collapse into one pole and realize it later. You'll identify the wrong thread at first. That's fine. Even struggling with these tensions <em>is</em> navigating them.
            </p>
          </div>

          <div className={styles.navigation}>
            <Link to="/holding-tension" className={styles.navButton}>← Holding the Tension</Link>
            <Link to="/collapse" className={styles.navButton}>Next: Anatomy of Collapse →</Link>
          </div>

        </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <a href="#" className={styles.backToTop}>↑ Back to Top</a>
          </div>

      </article>
    </div>
  );
};

export default Practice;
