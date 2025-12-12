import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.css';

const FiveMoves: React.FC = () => {

  return (
    <div className={styles.article} id="top">
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Five Practical Moves</h1>
          <h2 className={styles.subtitle}>How to Actually Hold It</h2>
        </div>
      </section>

      <article className="section-lg">
        <div className={`${styles.content} container`}>

          <p className={styles.intro}>
            Earlier, we outlined a six-step practice. The hardest step is undoubtedly Step 5: <strong>Choose</strong>. Let's zoom in on that specific moment to see how we move without collapsing.
          </p>

          <p>If holding tension is a dance, let's learn the steps. But how do we move together through the tension without collapsing the poles or stepping on each other's feet?</p>

          <section className={styles.section}>
            <h2>1. Name Both Poles Before Deciding</h2>
            <p>Out loud. To yourself or others. This sounds simple, but it's powerful.</p>

            <div className={styles.example}>
              <p><em>"I'm feeling the pull toward more solitude right now. I'm also aware that connection matters to us and withdrawal has a cost. I'm going to choose some alone time tonight, and I want to name that both things are true."</em></p>
            </div>

            <div className={styles.example}>
              <p><em>"Part of me wants to launch now and learn fast. Part of me is worried we'll break trust if we move before we're ready. I'm going to decide, but first I want to honor that both concerns are real."</em></p>
            </div>

            <p>Naming the poles externalizes the tension. It stops being an internal war and becomes something you can look at together.</p>
          </section>

          <section className={styles.section}>
            <h2>2. Ask What Each Pole Is Protecting</h2>
            <p>Every pole exists for a reason. Before you choose, ask: <em>What is this pole trying to protect? What does it know that the other pole might miss?</em></p>

            <ul>
              <li><strong>Togetherness</strong> protects against isolation, abandonment, losing the thread of connection.</li>
              <li><strong>Solitude</strong> protects against enmeshment, losing yourself, exhaustion from constant contact.</li>
              <li><strong>Action</strong> protects against stagnation, missed opportunities, complicity through inaction.</li>
              <li><strong>Patience</strong> protects against recklessness, unintended harm, decisions that can't be undone.</li>
              <li><strong>Certainty</strong> protects against chaos, paralysis, the anxiety of not-knowing.</li>
              <li><strong>Uncertainty</strong> protects against rigidity, arrogance, closing off what you haven't yet seen.</li>
            </ul>

            <p>When you understand what each pole is protecting, you can make sure your decision doesn't abandon that protection entirely.</p>
          </section>

          <section className={styles.section}>
            <h2>3. Make the Choice, Then Ask: "How Do I Honor What I'm Not Choosing?"</h2>
            <p>This is the key move. You decide—you have to decide, life requires it—but you don't pretend the other pole doesn't matter.</p>

            <div className={styles.example}>
              <h3>Example: Maria chooses togetherness tonight</h3>
              <p><em>"I need connection right now, and I'm going to ask James for a date night. But I also know he needs solitude. So I'll ask rather than assume. I'll keep it to a few hours rather than the whole evening. And I'll explicitly name that I see his need even as I'm asking for mine."</em></p>
            </div>

            <div className={styles.example}>
              <h3>Example: The board chooses to expand programs</h3>
              <p><em>"We're going to grow. And because the 'deepen first' voices raised real concerns, we're building in a six-month check-in specifically to assess whether quality is suffering. We're not dismissing caution—we're encoding it into our expansion plan."</em></p>
            </div>

            <div className={styles.example}>
              <h3>Example: The team chooses to move fast</h3>
              <p><em>"We're shipping Thursday. And because the 'slow down' voices raised real concerns about stability, we're scoping down to core functionality only—no bells and whistles this release. We're building in a two-week hardening sprint right after launch. And we're agreeing now that if error rates exceed 2%, we roll back without debate. We're not pretending speed has no cost—we're building guardrails into our velocity."</em></p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>4. Build In a Return Point</h2>
            <p>Holding tension means staying in relationship with the unchosen pole. You don't marry your decision forever—you agree to revisit.</p>

            <ul>
              <li>"We'll try this for 30 days and then check in."</li>
              <li>"I'm choosing this now, and I'm putting a reminder on my calendar to ask myself if it's still right in three months."</li>
              <li>"Let's make this decision, and let's also agree on what signals would tell us we need to reconsider."</li>
            </ul>

            <p>This isn't weakness or hedging. It's wisdom. Circumstances change. You learn things. The tension evolves. A return point keeps the conversation alive. It guarantees the next opportunity for creative advance.</p>
          </section>

          <section className={styles.section}>
            <h2>5. Watch for Re-Collapse</h2>
            <p>Even after a good decision, you can collapse later. Watch for:</p>

            <ul>
              <li>Forgetting you ever considered the other pole</li>
              <li>Getting defensive when the other pole resurfaces</li>
              <li>Treating the decision as permanently settled when conditions have changed</li>
              <li>Demonizing people who hold the pole you didn't choose</li>
            </ul>

            <p>When you notice collapse, return to naming: <em>"I'm aware I've been dismissing the value of X. Let me revisit what it was trying to protect."</em></p>
          </section>

          <section className={styles.section}>
            <h2>Why This Is Worth the Energy: The Evidence</h2>

            <h3>1. Decisions that honor both poles actually stick.</h3>
            <p>When people feel their concern was heard—even if the decision went another direction—they can live with the outcome. The "extra time" spent honoring both poles saves enormous time in re-litigation.</p>

            <h3>2. You catch problems earlier.</h3>
            <p>If you've named what the neglected pole was protecting, you're watching for those risks.</p>

            <h3>3. Relationships survive the decision.</h3>
            <p>Maria and James can disagree about tonight and still feel like partners. Because no one had to lose.</p>

            <h3>4. You avoid the whiplash.</h3>
            <p>People and organizations that collapse into one pole tend to swing to the other when that pole fails them. Holding the tension creates stability.</p>

            <h3>5. The tension becomes information rather than enemy.</h3>
            <p>When you learn to read it, it guides you. "I'm feeling pulled toward solitude" stops being a problem and becomes data about what you need.</p>
          </section>

          <div className={styles.navigation}>
            <Link to="/collapse" className={styles.navButton}>← Previous: Anatomy of Collapse</Link>
            <Link to="/deep-dive" className={styles.navButton}>Next: Seven Threads Deep Dive →</Link>
          </div>

        </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <a href="#top" className={styles.backToTop}>↑ Back to Top</a>
          </div>

      </article>
    </div>
  );
};

export default FiveMoves;
