import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.css';
import * as auth from '../services/api/auth';
import * as assessments from '../services/api/assessments';

const Practice: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasCompletedQuickProfile, setHasCompletedQuickProfile] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      const token = auth.getAuthToken();
      if (!token) {
        setIsLoggedIn(false);
        return;
      }
      setIsLoggedIn(true);
      try {
        const data = await assessments.getStatus();
        setHasCompletedQuickProfile(data.quickProfileCompleted);
      } catch (error) {
        console.error('Failed to check assessment status:', error);
      }
    };
    checkAuth();
  }, []);
  return (
    <div className={styles.article} id="top">
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
          <section className={styles.section}>
            <h2>Interactive Practice Tools</h2>
            <div className={styles.note} style={{ background: '#f0f9ff', borderLeft: '4px solid var(--color-teal)' }}>
              <p>
                <strong>🚧 Coming Soon:</strong> Interactive guided practice sessions for your focus threads.
                You'll be able to work through HOLD (Halt, Observe, Look, Decide) prompts tailored to your specific collapse patterns.
              </p>
              <p>
                In the meantime, use the practice guidance from your <Link to="/assessment/results" style={{ color: 'var(--color-teal)', textDecoration: 'underline' }}>assessment results</Link> to begin working with your focus threads.
              </p>
            </div>
          </section>
          <section className={styles.section}>
            <h2>The HOLD Practice</h2>
            <p>
              When you find yourself in collapse—when the tension has already pulled you to one pole—there's a way back. Not to fix it, not to shame yourself for collapsing, but to find your way to the fullness that holds both poles.
            </p>
            <p>HOLD is an acronym for a four-step process:</p>
            <div className={styles.subsection}>
              <h3>H – HALT</h3>
              <p>
                Stop the automatic reaction. Create a pause between stimulus and response. This isn't suppression—it's creating space. Notice you've collapsed without judgment. The goal is simply to interrupt the momentum.
              </p>
              <h3>O – OBSERVE</h3>
              <p>
                Notice what's happening in your body and in the present moment. Where is the tension? What sensations are you experiencing? What's actually true right now, as opposed to what your collapse is telling you? Ground yourself in physical reality.
              </p>
              <h3>L – LOOK</h3>
              <p>
                Name the tension you're experiencing. Which thread is this? Which poles are pulling at you? Just naming it—saying "Oh, this is a PRESENCE question" or "I'm caught between yes and no"—breaks the unconscious grip. The tension loses some of its power when you can see it clearly. Then you can find the both/and in what seemed like either/or.
              </p>
              <h3>D – DECIDE</h3>
              <p>
                Choose your next action from fullness, not from fear or collapse. This might mean staying in the tension longer. It might mean moving forward while acknowledging both poles. The decision comes from integration, not from one pole trying to win.
              </p>
            </div>
            <p className={styles.highlight}>
              HOLD isn't a fix. It's a practice. You'll use it ten thousand times, and it will look different each time. The power isn't in getting it right—it's in having a way back when collapse happens.
            </p>
          </section>
          {isLoggedIn && hasCompletedQuickProfile && (
            <section className={styles.section}>
              <h2>Your Practice Journey</h2>
              <div className={styles.note} style={{ background: '#e0f2f1', borderLeft: '4px solid var(--color-teal)' }}>
                <p>
                  You've completed your Quick Profile assessment. Your personalized focus threads and practice guidance are waiting for you.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <Link to="/practice-tool" className={styles.navButton} style={{ flex: '1 1 auto', background: 'linear-gradient(135deg, var(--color-teal), var(--color-purple))', color: 'var(--color-white)', border: 'none' }}>
                    Start Interactive Practice →
                  </Link>
                  <Link to="/dashboard" className={styles.navButton} style={{ flex: '1 1 auto' }}>
                    View Your Dashboard →
                  </Link>
                  <Link to="/journal" className={styles.navButton} style={{ flex: '1 1 auto' }}>
                    Open Your Journal →
                  </Link>
                </div>
              </div>
            </section>
          )}
          <div className={styles.navigation}>
            <Link to="/holding-tension" className={styles.navButton}>← Holding the Tension</Link>
            <Link to="/collapse" className={styles.navButton}>Next: Anatomy of Collapse →</Link>
          </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <a href="#top" className={styles.backToTop}>↑ Back to Top</a>
          </div>
        </div>
      </article>
    </div>
  );
};
export default Practice;
