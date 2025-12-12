import React from 'react';
import styles from './ExploreThreads.module.css';

const ExploreThreads: React.FC = () => {
  const threads = [
    {
      number: 1,
      name: 'PRESENCE',
      seed: 'Where am I...?',
      poles: 'Within ↔ Between • Here ↔ Elsewhere',
      description: 'The tension between needing solitude and needing connection, between being present to what\'s here and what\'s elsewhere.',
      color: 'blue',
    },
    {
      number: 2,
      name: 'CONSENT',
      seed: 'What may I...?',
      poles: 'Yes ↔ No • Self ↔ Other',
      description: 'The capacity to say both yes and no, honoring your boundaries while remaining open to others.',
      color: 'purple',
    },
    {
      number: 3,
      name: 'MEMORY',
      seed: 'Why do I...?',
      poles: 'Given ↔ Chosen • Telling ↔ Told',
      description: 'The stories we inherit versus the stories we author, being shaped by the past while choosing what to carry forward.',
      color: 'teal',
    },
    {
      number: 4,
      name: 'PAUSE',
      seed: 'When can I...?',
      poles: 'Not Yet ↔ Now • More ↔ Enough',
      description: 'Discerning right timing between patience and urgency, recognizing when you have enough versus needing more.',
      color: 'orange',
    },
    {
      number: 5,
      name: 'EMBODIMENT',
      seed: 'How does my body know?',
      poles: 'Think ↔ Feel • Stay ↔ Go',
      description: 'Integrating head knowledge and body wisdom, staying present in your body versus fleeing into abstraction or overwhelm.',
      color: 'pink',
    },
    {
      number: 6,
      name: 'UNCERTAINTY',
      seed: 'What is the mystery unveiling?',
      poles: 'Hide ↔ Seek • Threat ↔ Wonder',
      description: 'Your relationship with not-knowing, whether uncertainty feels threatening or inviting, grasping for answers versus resting in mystery.',
      color: 'brown',
    },
    {
      number: 7,
      name: 'BECOMING',
      seed: 'Who am I becoming?',
      poles: 'Same ↔ Different • Return ↔ Forward',
      description: 'Identity transformation, honoring who you\'ve been while becoming who\'s next, spiraling forward versus going in circles.',
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
            <p className={styles.pageGuide}>
              <strong>On this page:</strong> You'll see a real example, learn the 6-step practice, explore all seven threads with detailed case studies, and discover how to apply Threads in your life or work.
            </p>
          </div>

          {/* Jump Navigation */}
          <nav className={styles.jumpNav}>
            <h3>Jump to:</h3>
            <div className={styles.jumpLinks}>
              <a href="#example">See It Work</a>
              <a href="#method">How It Works</a>
              <a href="#threads">The Seven Threads</a>
              <a href="#who">Who It's For</a>
              <a href="#next-steps">Next Steps</a>
            </div>
          </nav>
        </div>
      </section>

      {/* Featured Example - Early */}
      <section id="example" className={styles.featuredExample}>
        <div className="container">
          <h2>See It Work: A Real Example</h2>
          <p className={styles.featuredIntro}>
            Marcus, a nonprofit executive director, was burning out. Working 70-hour weeks, serving on three boards, unable to say no. His solution? "I need better time management." But the real issue was deeper.
          </p>

          <div className={styles.featuredCard}>
            <div className={styles.featuredThread}>Thread: CONSENT (Yes ↔ No • Self ↔ Other)</div>

            <div className={styles.featuredSection}>
              <h3>The Problem</h3>
              <p>Every request felt like an obligation. Saying no felt like betrayal. His identity was fused with being "the one who shows up." Worth came from what he gave. Setting limits felt selfish.</p>
            </div>

            <div className={styles.featuredSection}>
              <h3>What Shifted</h3>
              <p>This wasn't about time management—it was about <strong>consent</strong>. He'd collapsed into perpetual "yes," losing access to "no." The framework helped him see that both poles carry truth: generosity matters AND boundaries matter.</p>
            </div>

            <div className={styles.featuredSection}>
              <h3>What Emerged</h3>
              <p>He created a "Consent Inventory"—rating every commitment by energy cost and mission alignment. He resigned from one board, delegated two programs. Counterintuitively, his effectiveness <em>increased</em>.</p>
              <blockquote className={styles.featuredQuote}>
                "I used to think boundaries were selfish. Now I see they sustain my real yeses."
              </blockquote>
            </div>
          </div>

          <p className={styles.featuredCallout}>
            This is what Threads does: it helps you name the tension, hold both truths, and find what emerges when you don't collapse.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="method" className={`${styles.howItWorks} section-lg`}>
        <div className="container">
          <h2>How Does It Work?</h2>
          <p className={styles.howItWorksIntro}>
            The Threads framework provides a simple practice for navigating tension without collapsing toward one side:
          </p>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Identify</h3>
              <p>Which thread is present? Naming it reduces its unconscious power.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Locate</h3>
              <p>Where do you feel it in your body? Tension lives in flesh before thought.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Breathe</h3>
              <p>Stay present to both poles. Don't choose sides yet.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Listen</h3>
              <p>What is the tension teaching? What needs does it reveal?</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <h3>Choose</h3>
              <p>Make a conscious choice, including the choice to wait.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>6</div>
              <h3>Learn</h3>
              <p>What emerged from holding the tension rather than resolving it?</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Seven Threads with Examples */}
      <section id="threads" className={`${styles.threadsWithExamples} section-lg`}>
        <div className="container">
          <h2>The Seven Threads</h2>
          <p className={styles.threadsIntro}>
            Each thread represents a fundamental human tension. Here's what they look like in practice:
          </p>

          {/* Thread 1: PRESENCE */}
          <div className={styles.threadWithExample}>
            <div className={`${styles.threadCard} ${styles.blue}`}>
              <div className={styles.threadNumber}>1</div>
              <h3 className={styles.threadName}>PRESENCE</h3>
              <p className={styles.threadSeed}>
                <span className={styles.seedLabel}>Seed Question:</span> Where am I...?
              </p>
              <p className={styles.threadPoles}>
                <span className={styles.polesLabel}>Tensions:</span> Within ↔ Between • Here ↔ Elsewhere
              </p>
              <p className={styles.threadDescription}>The tension between needing solitude and needing connection, between being present to what's here and what's elsewhere.</p>
            </div>
            <div className={styles.inlineExample}>
              <h4>Couples Conflict</h4>
              <p className={styles.exampleSituation}>
                Elena says Marc is emotionally unavailable. Marc says Elena is suffocating him. Each feels the other is the problem.
              </p>
              <div className={styles.exampleTension}>
                <strong>The Tension:</strong> Marc withdraws to regulate (Within). Elena reaches for connection when distressed (Between).
              </div>
              <div className={styles.exampleSteps}>
                <strong>How It Worked:</strong>
                <ol>
                  <li><strong>Identify:</strong> Named PRESENCE as the activated thread—about where they are in relation to each other</li>
                  <li><strong>Locate:</strong> Marc noticed his shoulders curling inward (protecting/withdrawing). Elena felt hollow in her chest (absence of connection)</li>
                  <li><strong>Breathe:</strong> Both took a shared breath before diving into accusations</li>
                  <li><strong>Listen:</strong> Marc's withdrawal protects him from feeling overwhelmed. Elena's reaching protects her from feeling abandoned. Both are valid</li>
                  <li><strong>Choose:</strong> Neither full withdrawal nor constant connection. They designed something in between</li>
                  <li><strong>Learn:</strong> Partial connection beats collapse. The tension doesn't need to be "solved"</li>
                </ol>
              </div>
              <div className={styles.exampleEmergence}>
                <strong>What Emerged:</strong> A "90-second pause" ritual. When tension rises, Marc stays in the room but can be silent. Elena asks for one sentence of reassurance. Neither gets their full pole—but neither collapses.
              </div>
            </div>
          </div>

          {/* Thread 2: CONSENT */}
          <div className={styles.threadWithExample}>
            <div className={`${styles.threadCard} ${styles.purple}`}>
              <div className={styles.threadNumber}>2</div>
              <h3 className={styles.threadName}>CONSENT</h3>
              <p className={styles.threadSeed}>
                <span className={styles.seedLabel}>Seed Question:</span> What may I...?
              </p>
              <p className={styles.threadPoles}>
                <span className={styles.polesLabel}>Tensions:</span> Yes ↔ No • Self ↔ Other
              </p>
              <p className={styles.threadDescription}>The capacity to say both yes and no, honoring your boundaries while remaining open to others.</p>
            </div>
            <div className={styles.inlineExample}>
              <h4>Leadership Burnout</h4>
              <p className={styles.exampleSituation}>
                Marcus, nonprofit ED, works 70-hour weeks, serves on three boards, can't say no. "I need better time management."
              </p>
              <div className={styles.exampleTension}>
                <strong>The Tension:</strong> Every request feels like obligation (collapsed into Yes). Saying no feels like betrayal.
              </div>
              <div className={styles.exampleSteps}>
                <strong>How It Worked:</strong>
                <ol>
                  <li><strong>Identify:</strong> Named CONSENT—this isn't time management, it's about his capacity to say both Yes AND No</li>
                  <li><strong>Locate:</strong> Stomach tightening when asked for things. Swallowed "no" stuck in his throat</li>
                  <li><strong>Breathe:</strong> Paused before automatically saying yes. "Let me think about that"</li>
                  <li><strong>Listen:</strong> Yes protects his identity as "the one who shows up." No threatens his sense of worth. Both need honoring</li>
                  <li><strong>Choose:</strong> Started practicing small nos. Tracked what happened. Stories shifted</li>
                  <li><strong>Learn:</strong> Boundaries actually sustain the mission. Chosen yeses are more powerful than obligated ones</li>
                </ol>
              </div>
              <div className={styles.exampleEmergence}>
                <strong>What Emerged:</strong> "Consent Inventory"—rating commitments by energy cost and mission alignment. Resigns from one board, delegates two programs. "Boundaries aren't selfish—they sustain my real yeses."
              </div>
            </div>
          </div>

          {/* Thread 3: MEMORY */}
          <div className={styles.threadWithExample}>
            <div className={`${styles.threadCard} ${styles.teal}`}>
              <div className={styles.threadNumber}>3</div>
              <h3 className={styles.threadName}>MEMORY</h3>
              <p className={styles.threadSeed}>
                <span className={styles.seedLabel}>Seed Question:</span> Why do I...?
              </p>
              <p className={styles.threadPoles}>
                <span className={styles.polesLabel}>Tensions:</span> Given ↔ Chosen • Telling ↔ Told
              </p>
              <p className={styles.threadDescription}>The stories we inherit versus the stories we author, being shaped by the past while choosing what to carry forward.</p>
            </div>
            <div className={styles.inlineExample}>
              <h4>Family Legacy</h4>
              <p className={styles.exampleSituation}>
                A daughter inherits her immigrant parents' belief that "we don't ask for help." She's drowning but can't reach out—it feels like betraying her heritage.
              </p>
              <div className={styles.exampleTension}>
                <strong>The Tension:</strong> Honoring the resilience her parents taught her (Given) versus authoring a new story about interdependence (Chosen).
              </div>
              <div className={styles.exampleSteps}>
                <strong>How It Worked:</strong>
                <ol>
                  <li><strong>Identify:</strong> Named MEMORY—this is about inherited narrative versus authored choice</li>
                  <li><strong>Locate:</strong> Chest constriction when thinking about asking for help. Shame rising</li>
                  <li><strong>Breathe:</strong> Paused. "What am I protecting by staying silent?"</li>
                  <li><strong>Listen:</strong> Self-reliance protected her parents' dignity in hostile environments. Asking for help honors the safety they built so she could have choices</li>
                  <li><strong>Choose:</strong> Can honor the Given while choosing differently. Both stories matter</li>
                  <li><strong>Learn:</strong> Transformation doesn't require rejection. The inherited story evolves</li>
                </ol>
              </div>
              <div className={styles.exampleEmergence}>
                <strong>What Emerged:</strong> She reframes: "My parents survived by self-reliance because they had to. I honor them by choosing community because I can." The inherited story transforms rather than being rejected.
              </div>
            </div>
          </div>

          {/* Thread 4: PAUSE */}
          <div className={styles.threadWithExample}>
            <div className={`${styles.threadCard} ${styles.orange}`}>
              <div className={styles.threadNumber}>4</div>
              <h3 className={styles.threadName}>PAUSE</h3>
              <p className={styles.threadSeed}>
                <span className={styles.seedLabel}>Seed Question:</span> When can I...?
              </p>
              <p className={styles.threadPoles}>
                <span className={styles.polesLabel}>Tensions:</span> Not Yet ↔ Now • More ↔ Enough
              </p>
              <p className={styles.threadDescription}>Discerning right timing between patience and urgency, recognizing when you have enough versus needing more.</p>
            </div>
            <div className={styles.inlineExample}>
              <h4>Organizational Impasse</h4>
              <p className={styles.exampleSituation}>
                Director of Product wants to "move fast." Director of Operations wants to "get it right." Projects stall as they battle.
              </p>
              <div className={styles.exampleTension}>
                <strong>The Tension:</strong> "We don't know enough yet" (Not Yet) vs. "We're losing ground" (Now).
              </div>
              <div className={styles.exampleSteps}>
                <strong>How It Worked:</strong>
                <ol>
                  <li><strong>Identify:</strong> Named PAUSE as the thread—this is about timing, not about who's right</li>
                  <li><strong>Locate:</strong> Product director felt restlessness, urgency in the body. Operations director felt heaviness, stuck waiting</li>
                  <li><strong>Breathe:</strong> Slowed the debate. "Let's look at the timing question itself"</li>
                  <li><strong>Listen:</strong> Product protects against losing competitive ground. Operations protects against technical debt. Both carry organizational wisdom</li>
                  <li><strong>Choose:</strong> What can move now? What genuinely needs more time? Split the decision</li>
                  <li><strong>Learn:</strong> Not everything moves at the same pace. Good timing varies by component</li>
                </ol>
              </div>
              <div className={styles.exampleEmergence}>
                <strong>What Emerged:</strong> Phased rollout—core features ship immediately while complex integrations get structured development time. Regular checkpoints prevent collapse.
              </div>
            </div>
          </div>

          {/* Thread 5: EMBODIMENT */}
          <div className={styles.threadWithExample}>
            <div className={`${styles.threadCard} ${styles.pink}`}>
              <div className={styles.threadNumber}>5</div>
              <h3 className={styles.threadName}>EMBODIMENT</h3>
              <p className={styles.threadSeed}>
                <span className={styles.seedLabel}>Seed Question:</span> How does my body know?
              </p>
              <p className={styles.threadPoles}>
                <span className={styles.polesLabel}>Tensions:</span> Think ↔ Feel • Stay ↔ Go
              </p>
              <p className={styles.threadDescription}>Integrating head knowledge and body wisdom, staying present in your body versus fleeing into abstraction or overwhelm.</p>
            </div>
            <div className={styles.inlineExample}>
              <h4>Career Decision</h4>
              <p className={styles.exampleSituation}>
                An executive has a lucrative job offer. On paper it's perfect. But her stomach knots every time she thinks about it. She keeps making pro/con lists.
              </p>
              <div className={styles.exampleTension}>
                <strong>The Tension:</strong> Her head says "this makes sense" (Think). Her body says "something's off" (Feel).
              </div>
              <div className={styles.exampleSteps}>
                <strong>How It Worked:</strong>
                <ol>
                  <li><strong>Identify:</strong> Named EMBODIMENT—head and gut are giving different information</li>
                  <li><strong>Locate:</strong> Stomach knot. Tightness. Body knows something mind is dismissing</li>
                  <li><strong>Breathe:</strong> Stopped making lists. Sat with the knot. "What are you trying to tell me?"</li>
                  <li><strong>Listen:</strong> The role requires constant travel. Her aging parents need proximity. The body was protecting a value her head hadn't named</li>
                  <li><strong>Choose:</strong> Both matter—career advancement AND family proximity. Not either/or</li>
                  <li><strong>Learn:</strong> Body wisdom isn't irrational. It holds information head hasn't processed yet</li>
                </ol>
              </div>
              <div className={styles.exampleEmergence}>
                <strong>What Emerged:</strong> She declines the role but negotiates a different position with her current employer—more responsibility, less travel. Head and body align: "I can grow here AND stay close."
              </div>
            </div>
          </div>

          {/* Thread 6: UNCERTAINTY */}
          <div className={styles.threadWithExample}>
            <div className={`${styles.threadCard} ${styles.brown}`}>
              <div className={styles.threadNumber}>6</div>
              <h3 className={styles.threadName}>UNCERTAINTY</h3>
              <p className={styles.threadSeed}>
                <span className={styles.seedLabel}>Seed Question:</span> What is the mystery unveiling?
              </p>
              <p className={styles.threadPoles}>
                <span className={styles.polesLabel}>Tensions:</span> Hide ↔ Seek • Threat ↔ Wonder
              </p>
              <p className={styles.threadDescription}>Your relationship with not-knowing, whether uncertainty feels threatening or inviting, grasping for answers versus resting in mystery.</p>
            </div>
            <div className={styles.inlineExample}>
              <h4>Health Crisis</h4>
              <p className={styles.exampleSituation}>
                After an unclear diagnosis, someone spirals into obsessive medical research, needing to control the unknowable. Anxiety skyrockets.
              </p>
              <div className={styles.exampleTension}>
                <strong>The Tension:</strong> Grasping for certainty through information (Seek/control the Threat) versus accepting limits of knowing (rest in the mystery).
              </div>
              <div className={styles.exampleSteps}>
                <strong>How It Worked:</strong>
                <ol>
                  <li><strong>Identify:</strong> Named UNCERTAINTY—this is about relationship with not-knowing, not about finding answers</li>
                  <li><strong>Locate:</strong> Racing heart. Mind spinning. Body in threat response to the unknown</li>
                  <li><strong>Breathe:</strong> Noticed the grasping. "What if I can't know everything right now?"</li>
                  <li><strong>Listen:</strong> Seeking protects against helplessness. Resting in mystery requires trust. Both are valid responses to the unknowable</li>
                  <li><strong>Choose:</strong> Research what's knowable. Accept what isn't. Do next right thing</li>
                  <li><strong>Learn:</strong> Not-knowing doesn't require constant crisis. Can act from here without all answers</li>
                </ol>
              </div>
              <div className={styles.exampleEmergence}>
                <strong>What Emerged:</strong> "I can research what's knowable AND accept I can't eliminate uncertainty." Shifts from "I need all answers now" to "I can take next right step from here." Anxiety doesn't vanish—but doesn't dictate everything.
              </div>
            </div>
          </div>

          {/* Thread 7: BECOMING */}
          <div className={styles.threadWithExample}>
            <div className={`${styles.threadCard} ${styles.navy}`}>
              <div className={styles.threadNumber}>7</div>
              <h3 className={styles.threadName}>BECOMING</h3>
              <p className={styles.threadSeed}>
                <span className={styles.seedLabel}>Seed Question:</span> Who am I becoming?
              </p>
              <p className={styles.threadPoles}>
                <span className={styles.polesLabel}>Tensions:</span> Same ↔ Different • Return ↔ Forward
              </p>
              <p className={styles.threadDescription}>Identity transformation, honoring who you've been while becoming who's next, spiraling forward versus going in circles.</p>
            </div>
            <div className={styles.inlineExample}>
              <h4>Identity Crossroads</h4>
              <p className={styles.exampleSituation}>
                A senior leader torn about stepping into a C-suite role. Pulled between comfort of current expertise and excitement about opportunity. Flip-flops weekly.
              </p>
              <div className={styles.exampleTension}>
                <strong>The Tension:</strong> "I know who I am here" (Same) vs. "What if this is who I'm meant to become?" (Different).
              </div>
              <div className={styles.exampleSteps}>
                <strong>How It Worked:</strong>
                <ol>
                  <li><strong>Identify:</strong> Named BECOMING—this is about identity transformation, not just a job decision</li>
                  <li><strong>Locate:</strong> Skin feeling too tight. Exhaustion from holding back what wants to emerge</li>
                  <li><strong>Breathe:</strong> Stopped flip-flopping. Sat with both truths at once</li>
                  <li><strong>Listen:</strong> Same protects earned expertise and known competence. Different reaches toward growth and new capacity. Both are valid</li>
                  <li><strong>Choose:</strong> What to carry forward from current self? What to release? What's genuinely new?</li>
                  <li><strong>Learn:</strong> She could be both—bring who she is AND become who's next. Not either/or</li>
                </ol>
              </div>
              <div className={styles.exampleEmergence}>
                <strong>What Emerged:</strong> 90-day transition honoring existing identity while stepping into new one. Takes role with "learning stance"—bringing expertise while openly developing new capacities.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Who is it for */}
      <section id="who" className={styles.who}>
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

      {/* Call to Action */}
      <section id="next-steps" className={styles.cta}>
        <div className="container">
          <h2>Ready to Apply Threads?</h2>
          <p className={styles.ctaIntro}>
            Whether you're navigating personal transformation, relational complexity, or organizational change, Threads provides a practical framework for holding tension without collapse.
          </p>
          <div className={styles.ctaOptions}>
            <div className={styles.ctaOption}>
              <h3>For Individuals & Couples</h3>
              <p>One-on-one coaching and couples work using the Threads framework.</p>
              <a href="/services#individual" className={styles.ctaButton}>Learn More</a>
            </div>
            <div className={styles.ctaOption}>
              <h3>For Organizations</h3>
              <p>Workshops, training, and organizational consulting grounded in Threads.</p>
              <a href="/services#organizational" className={styles.ctaButton}>Learn More</a>
            </div>
            <div className={styles.ctaOption}>
              <h3>For Professionals</h3>
              <p>Integrate Threads into your practice as a coach, therapist, or spiritual director.</p>
              <a href="/services#professional" className={styles.ctaButton}>Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreThreads;
