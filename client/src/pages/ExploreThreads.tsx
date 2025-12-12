import React from 'react';
import styles from './ExploreThreads.module.css';

const ExploreThreads: React.FC = () => {
  const threads = [
    {
      number: 1,
      name: 'PRESENCE',
      seed: 'Where am I...?',
      poles: 'Within ↔ Between • Here ↔ Elsewhere',
      color: 'blue',
    },
    {
      number: 2,
      name: 'CONSENT',
      seed: 'What may I...?',
      poles: 'Yes ↔ No • Self ↔ Other',
      color: 'purple',
    },
    {
      number: 3,
      name: 'MEMORY',
      seed: 'Why do I...?',
      poles: 'Given ↔ Chosen • Telling ↔ Told',
      color: 'teal',
    },
    {
      number: 4,
      name: 'PAUSE',
      seed: 'When can I...?',
      poles: 'Not Yet ↔ Now • More ↔ Enough',
      color: 'orange',
    },
    {
      number: 5,
      name: 'EMBODIMENT',
      seed: 'How does my body know?',
      poles: 'Think ↔ Feel • Stay ↔ Go',
      color: 'pink',
    },
    {
      number: 6,
      name: 'UNCERTAINTY',
      seed: 'What is the mystery unveiling?',
      poles: 'Hide ↔ Seek • Threat ↔ Wonder',
      color: 'brown',
    },
    {
      number: 7,
      name: 'BECOMING',
      seed: 'Who am I becoming?',
      poles: 'Same ↔ Different • Return ↔ Forward',
      color: 'navy',
    },
  ];

  return (
    <div className={styles.explore}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Explore Threads</h1>
          <p className={`${styles.tagline} tagline`}>
            See. Hold. Emerge.
          </p>
        </div>
      </section>

      {/* What is Threads */}
      <section className={`${styles.what} section-lg`}>
        <div className="container">
          <h2>What is Threads?</h2>
          <div className={styles.content}>
            <p>
              Threads of Becoming is a <strong>navigational framework</strong>—not a personality system, not a therapy model, not a conflict mediation technique. It identifies seven universal tensions that shape human experience across every domain: personal growth, relationships, organizations, and communities.
            </p>
            <p>
              Each Thread names a fundamental question we all face, and each holds two creative tensions that, when held open rather than collapsed into one pole, become the space where genuine transformation happens.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophical Roots */}
      <section className={styles.philosophy}>
        <div className="container">
          <h2>Philosophical Roots</h2>
          <div className={styles.content}>
            <p>
              Threads is grounded in Process Theology and the philosophy of Alfred North Whitehead, who observed that reality doesn't advance by eliminating opposites but by integrating them—what he called "the creative advance into novelty."
            </p>
            <p>
              Threads applies this philosophical foundation to lived human experience. Every moment, every relationship, every organization faces opposing truths that demand recognition. The temptation is to collapse toward one pole—to choose safety over openness, action over reflection, continuity over change. But collapse doesn't resolve tension; it merely suppresses it.
            </p>
            <blockquote className={styles.quote}>
              Tension, held without collapse, becomes the birthplace of the genuinely new.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Three Movements */}
      <section className={`${styles.movements} section-lg`}>
        <div className="container">
          <h2>The Three Movements</h2>
          <p className={styles.movementsIntro}>
            The tagline isn't just a tagline—it's the protocol. The seven Threads organize into three movements that mirror how transformation actually works:
          </p>

          <div className={styles.movementsGrid}>
            <div className={styles.movement}>
              <h3>SEE</h3>
              <p className={styles.movementType}>Orienting (Threads 1-4)</p>
              <p>You locate where you are in the tension</p>
            </div>

            <div className={styles.movement}>
              <h3>HOLD</h3>
              <p className={styles.movementType}>Sourcing (Threads 5-6)</p>
              <p>You receive what body and mystery know</p>
            </div>

            <div className={styles.movement}>
              <h3>EMERGE</h3>
              <p className={styles.movementType}>Integrating (Thread 7)</p>
              <p>You become what's next</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Seven Threads */}
      <section className={`${styles.threads} section-lg`}>
        <div className="container">
          <h2>The Seven Threads</h2>
          <p className={styles.threadsIntro}>
            Each thread represents a fundamental human tension with its own seed question and pair of polarities. Both poles carry truth; neither is the enemy.
          </p>

          <div className={styles.threadsGrid}>
            {threads.map((thread) => (
              <div key={thread.number} className={`${styles.thread} ${styles[thread.color]}`}>
                <div className={styles.threadNumber}>{thread.number}</div>
                <h3 className={styles.threadName}>{thread.name}</h3>
                <p className={styles.threadSeed}>{thread.seed}</p>
                <p className={styles.threadPoles}>{thread.poles}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className={styles.who}>
        <div className="container">
          <h2>Who Is Threads For?</h2>
          <ul className={styles.whoList}>
            <li>Individuals seeking clarity, resilience, and self-understanding</li>
            <li>Couples and families navigating relational tension</li>
            <li>Leaders and teams facing complexity and conflict</li>
            <li>Coaches, therapists, and counselors integrating with existing practice</li>
            <li>Clergy and spiritual directors providing pastoral care</li>
            <li>Mediators and conflict resolution professionals</li>
            <li>Congregations navigating change, conflict, or discernment</li>
            <li>Organizations seeking tools for transformation</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ExploreThreads;
