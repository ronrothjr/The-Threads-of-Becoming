import React from 'react';
import styles from './Collapse.module.css';

const Collapse: React.FC = () => {
  return (
    <div className={styles.collapsePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Understanding Collapse</h1>
          <h2 className={styles.subtitle}>When tension stops creating and starts destroying</h2>
          <p className={styles.heroIntro}>
            Every relationship, team, and organization is shaped by tension. The question isn't whether tension exists—it's whether you're navigating it consciously or collapsing unconsciously.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className={styles.content}>

          {/* The Problem */}
          <section className={styles.section}>
            <h2>The Problem Most Systems Face</h2>
            <p className={styles.largeText}>
              You've had the same argument before. Different day, different trigger, but the same underlying tension.
            </p>
            <p>
              Maybe it's the couple who keeps fighting about how much time to spend together versus apart. Maybe it's the team that can't decide whether to move fast or be careful. Maybe it's the organization torn between honoring tradition and embracing change. Maybe it's you at 2am, unable to sleep, caught between staying in the familiar or taking the risk.
            </p>
            <p>
              You've tried to solve it. You've compromised. You've picked a side. You've analyzed it from every angle. And somehow, you end up right back here.
            </p>
            <p className={styles.highlight}>
              Here's what nobody tells you: <strong>the problem isn't the tension. The problem is collapse.</strong>
            </p>
          </section>

          {/* What is Collapse */}
          <section className={styles.section}>
            <h2>What Is Collapse?</h2>
            <p>
              Collapse happens when we stop holding creative tension and instead get stuck in one of three predictable patterns. Sometimes we collapse unconsciously—we don't realize we're doing it. But often, we collapse <em>on purpose</em>. We pick a side because holding tension feels too hard. We flip-flop because we're desperate for relief. We split the difference because we think that's what compromise means.
            </p>
            <p>
              None of these strategies are wrong or bad. They're human responses to discomfort. But they have consequences. And recognizing the pattern—whether you're doing it on purpose or not—is the first step toward something different.
            </p>
            <p className={styles.largeText} style={{marginTop: '1.5rem'}}>
              <strong>The three patterns of collapse:</strong>
            </p>

            <div className={styles.collapseTypes}>
              <div className={styles.collapseType}>
                <div className={styles.typeNumber}>1</div>
                <div className={styles.typeContent}>
                  <h3>Stuck at One Pole</h3>
                  <p className={styles.definition}>
                    When one side dominates completely, dismissing or demonizing the opposite as wrong, dangerous, or unnecessary.
                  </p>
                  <div className={styles.examples}>
                    <p><strong>Looks like:</strong></p>
                    <ul>
                      <li>"I just need space" (solitude wins, connection dismissed as suffocating)</li>
                      <li>"We have to act NOW" (urgency wins, patience dismissed as overthinking)</li>
                      <li>"The past is the past" (forward wins, history dismissed as baggage)</li>
                      <li>"Just say yes" (compliance wins, boundaries dismissed as obstruction)</li>
                    </ul>
                  </div>
                  <div className={styles.consequence}>
                    <strong>What happens:</strong> The neglected pole doesn't disappear—it goes underground. What we refuse to honor consciously returns as resentment, passive resistance, physical symptoms, or sudden crisis.
                  </div>
                </div>
              </div>

              <div className={styles.collapseType}>
                <div className={styles.typeNumber}>2</div>
                <div className={styles.typeContent}>
                  <h3>Oscillating Between Extremes</h3>
                  <p className={styles.definition}>
                    When we swing violently between poles—overcompensating for one extreme by rushing to the opposite—never finding equilibrium.
                  </p>
                  <div className={styles.examples}>
                    <p><strong>Looks like:</strong></p>
                    <ul>
                      <li>Saying yes to everything until burnout, then saying no to everything in reactive withdrawal</li>
                      <li>Being all in your head analyzing, then swinging to pure emotion without thought</li>
                      <li>Obsessively seeking answers, then giving up in "nothing matters anyway"</li>
                      <li>Chasing constant reinvention, then clinging desperately to the familiar</li>
                    </ul>
                  </div>
                  <div className={styles.consequence}>
                    <strong>What happens:</strong> Energy gets spent on the swing itself rather than on creative navigation. Teams whipsaw between opposing strategies. Individuals exhaust themselves ping-ponging. Nothing new can emerge because we're too busy overcorrecting.
                  </div>
                </div>
              </div>

              <div className={styles.collapseType}>
                <div className={styles.typeNumber}>3</div>
                <div className={styles.typeContent}>
                  <h3>Fragmented Middle (False Compromise)</h3>
                  <p className={styles.definition}>
                    When we "split the difference" or "do a little of both" without actually honoring either pole—resulting in tepid mediocrity that satisfies no one.
                  </p>
                  <div className={styles.examples}>
                    <p><strong>Looks like:</strong></p>
                    <ul>
                      <li>"Let's schedule exactly 3.5 hours of togetherness per week" (connection becomes obligation)</li>
                      <li>"We'll keep some traditions and change others" (without discernment, creating incoherence)</li>
                      <li>"Let's launch a half-version now" (neither fast enough nor thorough enough)</li>
                      <li>"Everyone's right in their own way" (avoiding the actual tension)</li>
                    </ul>
                  </div>
                  <div className={styles.consequence}>
                    <strong>What happens:</strong> We avoid discomfort by diluting both poles. Nothing vibrates, nothing creates. The middle ground becomes a wasteland. We get agreements nobody believes in, strategies nobody commits to, relationships nobody feels seen in.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recognition */}
          <section className={styles.section}>
            <h2>How to Recognize Collapse</h2>
            <p>Collapse has signatures. Learn to spot them in yourself and your systems:</p>

            <div className={styles.signatureGrid}>
              <div className={styles.signatureCard}>
                <h3>Emotional</h3>
                <ul>
                  <li><strong>Righteousness:</strong> You feel morally superior about your position</li>
                  <li><strong>Contempt:</strong> The other pole seems obviously wrong</li>
                  <li><strong>Urgency:</strong> Must resolve the tension NOW</li>
                  <li><strong>Exhaustion:</strong> The swing drains more than the tension</li>
                  <li><strong>Numbness:</strong> Disconnected from the aliveness</li>
                </ul>
              </div>

              <div className={styles.signatureCard}>
                <h3>Conversational</h3>
                <ul>
                  <li><strong>"We have to..."</strong> (urgency that forecloses options)</li>
                  <li><strong>"They're just..."</strong> (dismissing pole as character flaw)</li>
                  <li><strong>"Let's meet in the middle"</strong> (avoiding real tension)</li>
                  <li><strong>"I know what's right"</strong> (certainty stops curiosity)</li>
                  <li><strong>"That's just how I am"</strong> (identity fused with pole)</li>
                </ul>
              </div>

              <div className={styles.signatureCard}>
                <h3>Systemic</h3>
                <ul>
                  <li><strong>Recurring conflicts:</strong> Same argument, different day</li>
                  <li><strong>Factions forming:</strong> People identified by pole they defend</li>
                  <li><strong>Decision paralysis:</strong> Can't move because can't choose</li>
                  <li><strong>Pendulum leadership:</strong> Each leader swings opposite</li>
                  <li><strong>Underground resistance:</strong> Public agreement, private sabotage</li>
                  <li><strong>Sudden crises:</strong> Ignored pole returns as emergency</li>
                </ul>
              </div>

              <div className={styles.signatureCard}>
                <h3>Somatic</h3>
                <ul>
                  <li><strong>Clenching:</strong> Jaw, fists, shoulders tight</li>
                  <li><strong>Disconnection:</strong> Can't feel your body</li>
                  <li><strong>Vertigo:</strong> Dizziness, disorientation</li>
                  <li><strong>Chronic tension:</strong> Headaches, back pain</li>
                  <li><strong>Energy collapse:</strong> Sudden exhaustion when tension arises</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Real Example */}
          <section className={styles.section}>
            <h2>Collapse in Action</h2>
            <div className={styles.caseStudy}>
              <div className={styles.caseHeader}>
                <h3>Recess: Three Friends, Three Ideas</h3>
              </div>

              <div className={styles.caseBody}>
                <div className={styles.caseBlock}>
                  <h4>The Pattern</h4>
                  <p>
                    The bell rings for recess. Three friends run outside together. But they can't agree on what to play.
                  </p>
                  <p>
                    <strong>Maya:</strong> "Let's play soccer! There's already a game going on the field. Come on!"
                  </p>
                  <p>
                    <strong>Jordan:</strong> "I want to go on the swings and monkey bars. We always play soccer."
                  </p>
                  <p>
                    <strong>Alex:</strong> "Can we play hide and seek in the trees? Please? We never get to do that."
                  </p>
                  <p>
                    They're standing in the middle of the playground. Recess is only twenty minutes. The clock is ticking.
                  </p>
                </div>

                <div className={styles.caseBlock}>
                  <h4>The Collapse</h4>
                  <p>
                    <strong>Stuck at one choice:</strong> Maya insists soccer is the only good option. "If you were really my friends, you'd play what I want." She runs to the field alone. Jordan and Alex feel guilty but also mad. They didn't get a say.
                  </p>
                  <p>
                    <strong>Oscillating between options:</strong> They can't decide, so they try all three. Five minutes at soccer (not enough time to really play). Run to the swings (barely get started). Head toward the trees (bell rings). Nobody got to actually play anything. Everyone's frustrated.
                  </p>
                  <p>
                    <strong>False compromise:</strong> "Let's just walk around and talk." Nobody wanted that. They're together but nobody's happy. They spend recess complaining about how they never get to do what they want. The tension doesn't go away—it just goes underground.
                  </p>
                  <p>
                    By the time they line up to go back inside, they're barely speaking to each other. Same thing happened yesterday. And the day before.
                  </p>
                </div>

                <div className={styles.caseBlock}>
                  <h4>The Shift</h4>
                  <p>
                    One day, Alex tries something different: "Can we just say what we each actually want? Not to fight, just to know?"
                  </p>
                  <p>
                    They realize: Maya loves the teamwork and energy of soccer. Jordan needs to move their body in a different way after sitting all morning. Alex wants adventure and imagination, not just running in circles.
                  </p>
                  <p>
                    They stop trying to force one option or please everyone. Instead: "Today we'll do soccer because Maya's been having a hard week. Tomorrow we do the equipment. Friday we do hide and seek. And we each get the whole recess, not five minutes."
                  </p>
                  <p>
                    Or: "What if we play soccer but make it hide-and-seek soccer in the trees?" Neither idea wins completely, but something new emerges that actually sounds fun.
                  </p>
                  <p className={styles.emergence}>
                    <strong>What emerges:</strong> They learn to name what they each need instead of just fighting about activities. They take turns holding the tension—sometimes Maya doesn't get her first choice, sometimes Jordan doesn't, sometimes Alex doesn't. But they stay friends because the tension isn't trying to destroy them anymore.
                  </p>
                </div>
              </div>
            </div>

            <p className={styles.insight}>
              <strong>The key insight:</strong> The three different ideas for recess weren't the problem. Collapse was the problem. When they stopped trying to eliminate the tension and learned to hold it, they got their friendship back.
            </p>
          </section>

          {/* Why We Collapse */}
          <section className={styles.section}>
            <h2>Why We Collapse (Whether We Mean To or Not)</h2>
            <p>Collapse isn't a character flaw. Sometimes we do it without thinking. Sometimes we choose it deliberately because it seems like the only option. Either way, it's a predictable response to the discomfort of holding tension. We collapse because:</p>

            <div className={styles.reasonsGrid}>
              <div className={styles.reasonCard}>
                <h4>Holding Tension Is Hard</h4>
                <p>
                  Your nervous system interprets uncertainty as danger. Collapsing feels like relief. We're wired to resolve ambiguity quickly, not hold it consciously.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <h4>We're Not Taught How</h4>
                <p>
                  Culture rewards decisiveness, being right, picking a side. We're taught that ambiguity is weakness, that "both/and" thinking is wishy-washy.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <h4>Systems Pressure Us</h4>
                <p>
                  Organizations want clear strategy. Relationships want consistency. Communities want shared identity. The pressure to "be clear" pushes us toward poles.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <h4>It Seems Like the Solution</h4>
                <p>
                  Sometimes we deliberately pick a side because we think that's what decisiveness looks like. We flip-flop because we're trying different options. We compromise because we think that's mature. These aren't mistakes—they're honest attempts to solve tension. They just don't work long-term.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <h4>Collapse Feels Righteous</h4>
                <p>
                  When stuck at a pole, it feels like truth. You build worldviews defending your position. The most insidious collapse: when it masquerades as wisdom.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <h4>The Neglected Pole Scares Us</h4>
                <p>
                  Every pole we're stuck at protects us from something the opposite represents. If you're collapsed toward activity, stillness might feel like death. We collapse to avoid terror.
                </p>
              </div>
            </div>
          </section>

          {/* The Alternative */}
          <section className={styles.section}>
            <h2>The Alternative to Collapse</h2>
            <p className={styles.largeText}>
              What if tension isn't the problem? What if tension is the point?
            </p>
            <p>
              Think of a violin string. Slack, it produces nothing. Too tight, it snaps. But held at just the right tension—pulled between two opposing forces—it vibrates. It sings.
            </p>
            <p className={styles.highlight}>
              <strong>You are made of tensions.</strong>
            </p>
            <p>
              The pull between togetherness and solitude. Between action and patience. Between what you've inherited and what you're choosing. Between certainty and mystery. These aren't bugs in your operating system. They're the architecture.
            </p>
            <p>
              Collapse is what happens when we let the string go slack—or pull it so tight it snaps. Creative tension is what happens when we learn to hold the pull without collapsing.
            </p>
            <p className={styles.highlight}>
              When you stop trying to eliminate tension and learn to hold it instead, something starts to hum.
            </p>
            <p>
              That hum is the sound of reality creating itself through you. That's the music collapse silences. That's the music conscious navigation restores.
            </p>
          </section>

          {/* Seven Threads */}
          <section className={styles.section}>
            <h2>The Seven Universal Tensions</h2>
            <p>
              These tensions show up everywhere—in every relationship, team, organization, and individual life. Not because someone invented them, but because they keep appearing wherever humans wrestle with what matters.
            </p>

            <div className={styles.threadsGrid}>
              <div className={styles.threadCard}>
                <h3>PRESENCE</h3>
                <p className={styles.threadTension}>Within ↔ Between<br/>Here ↔ Elsewhere</p>
                <p>Where is attention being met? The pull between solitude and connection, internal processing and external engagement.</p>
              </div>

              <div className={styles.threadCard}>
                <h3>CONSENT</h3>
                <p className={styles.threadTension}>Yes ↔ No<br/>Self ↔ Other</p>
                <p>Who gets to decide? The tension between accommodating and setting boundaries, serving others and honoring self.</p>
              </div>

              <div className={styles.threadCard}>
                <h3>MEMORY</h3>
                <p className={styles.threadTension}>Given ↔ Chosen<br/>Telling ↔ Told</p>
                <p>What happened? The tension between inherited story and chosen narrative, honoring history and creating new meaning.</p>
              </div>

              <div className={styles.threadCard}>
                <h3>PAUSE</h3>
                <p className={styles.threadTension}>Not Yet ↔ Now<br/>More ↔ Enough</p>
                <p>When do we act? The pull between urgency and patience, moving fast and being careful.</p>
              </div>

              <div className={styles.threadCard}>
                <h3>EMBODIMENT</h3>
                <p className={styles.threadTension}>Think ↔ Feel<br/>Stay ↔ Go</p>
                <p>How does my body know? The tension between cognition and emotion, staying present and leaving.</p>
              </div>

              <div className={styles.threadCard}>
                <h3>UNCERTAINTY</h3>
                <p className={styles.threadTension}>Hide ↔ Seek<br/>Threat ↔ Wonder</p>
                <p>How do we meet the unknown? The pull between seeking answers and sitting with mystery, treating uncertainty as danger or invitation.</p>
              </div>

              <div className={styles.threadCard}>
                <h3>BECOMING</h3>
                <p className={styles.threadTension}>Same ↔ Different<br/>Return ↔ Forward</p>
                <p>Who am I now? The tension between continuity and transformation, staying who we've been and becoming who we're called to be.</p>
              </div>
            </div>

            <p style={{marginTop: '2rem', textAlign: 'center', fontSize: 'var(--text-lg)', color: 'var(--color-text-light)'}}>
              Each thread represents a fundamental tension that runs through human experience—pulled between truths that seem opposite but are actually partners.
            </p>
          </section>

          {/* What's Next */}
          <section className={styles.ctaSection}>
            <h2>Learn to Navigate Tension</h2>
            <p>
              The framework doesn't eliminate tension—it teaches you to work with it consciously. To recognize collapse when it happens. To return to creative tension. To let something new emerge.
            </p>

            <div className={styles.ctaGrid}>
              <a href="/explore" className={styles.ctaCard}>
                <h3>Explore the Seven Threads</h3>
                <p>Deep dive into each universal tension with examples, questions, and navigation guidance.</p>
                <span className={styles.ctaArrow}>→</span>
              </a>

              <a href="/practice" className={styles.ctaCard}>
                <h3>Learn the Practice</h3>
                <p>A simple 6-step framework for holding tension: Identify, Locate, Breathe, Listen, Choose, Learn.</p>
                <span className={styles.ctaArrow}>→</span>
              </a>

              <a href="/training" className={styles.ctaCard}>
                <h3>Get Trained</h3>
                <p>Become certified to facilitate thread navigation for individuals, teams, or organizations.</p>
                <span className={styles.ctaArrow}>→</span>
              </a>
            </div>
          </section>

      </article>
    </div>
  );
};

export default Collapse;
