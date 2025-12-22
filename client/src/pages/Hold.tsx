import React from 'react';
import styles from './Hold.module.css';

const Hold: React.FC = () => {
  return (
    <div className={styles.holdPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>HOLD: A Four-Step Practice For Political Resilience</h1>
        <h2 className={`${styles.tagline} tagline`}>
          Stop Being Played. Take Back Your Response.
        </h2>
        <p className={styles.subtitle}>
          The simple practice that builds democratic capacity in a polarized world
        </p>
      </section>

      {/* 60-Second Explainer */}
      <section className={`${styles.explainer} section-lg`}>
        <div className="container">
          <h2>The 60-Second Explainer</h2>
          <p className={styles.explainerLead}>
            When politics triggers you - and it will - you have about 3 seconds before your reaction
            becomes automatic. HOLD is what you do in those 3 seconds.
          </p>

          <div className={styles.holdSteps}>
            <div className={styles.holdStep}>
              <div className={styles.stepLetter}>H</div>
              <div className={styles.stepContent}>
                <h3>HALT</h3>
                <p className={styles.stepDescription}>Stop before you react</p>
                <p className={styles.stepDetail}>
                  Not "calm down" - that's condescating. Rather: "Notice you're about to be hijacked.
                  The outrage you're feeling is exactly what someone wants you to feel. Halt before you
                  give them what they want."
                </p>
              </div>
            </div>

            <div className={styles.holdStep}>
              <div className={styles.stepLetter}>O</div>
              <div className={styles.stepContent}>
                <h3>OBSERVE</h3>
                <p className={styles.stepDescription}>What's happening in your body?</p>
                <p className={styles.stepDetail}>
                  Where do you feel the reaction? Chest tight? Jaw clenched? Heat rising? Your body knows
                  something your arguments don't. What is it telling you?
                </p>
              </div>
            </div>

            <div className={styles.holdStep}>
              <div className={styles.stepLetter}>L</div>
              <div className={styles.stepContent}>
                <h3>LOOK FOR THE TENSION</h3>
                <p className={styles.stepDescription}>What are the two things that can't both be true?</p>
                <p className={styles.stepDetail}>
                  Safety AND freedom? My experience AND their experience? What I'm certain about AND what
                  I don't actually know? Who I am AND who I might become? Standing firm AND staying connected?
                </p>
              </div>
            </div>

            <div className={styles.holdStep}>
              <div className={styles.stepLetter}>D</div>
              <div className={styles.stepContent}>
                <h3>DECIDE</h3>
                <p className={styles.stepDescription}>Who do you want to be in this moment?</p>
                <p className={styles.stepDetail}>
                  Not "what's the right answer?" Not "how do I win?" Rather: "Given everything - my values,
                  this situation, this tension - who do I want to be right now? What response would I be
                  proud of tomorrow?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Threads Primer */}
      <section className={`${styles.threadsPrimer} section-lg`}>
        <div className="container">
          <div className={styles.accordionSection}>
            <h2>What Are "Threads" and Why Does It Matter?</h2>
            <p className={styles.accordionTeaser}>
              HOLD is built on a deeper framework called "Threads"—seven fundamental capacities that allow humans
              to hold creative tension without collapsing. When these capacities are strong, we can navigate
              complexity, disagreement, and uncertainty. When they collapse, we lose the ability to be with what's
              difficult. Here's what you need to know.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>The Threads: A Quick Primer</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>

                <p className={styles.primerIntro}>
                  Think of Threads as the developmental capacities that allow you to hold complexity. Each Thread
                  represents a fundamental tension that can't be resolved—only held. When a Thread collapses, you
                  lose the ability to navigate that tension and fall to one extreme or the other. In politics, this
                  shows up as rigid polarization: either total withdrawal OR tribal warfare, either forced agreement OR
                  forced exposure, either absolute certainty OR complete relativism. The capacity to hold both poles
                  simultaneously—that's what's broken.
                </p>

                <div className={styles.threadGrid}>
                  <div className={styles.threadPrimerCard}>
                    <h4>PRESENCE</h4>
                    <p className={styles.threadTension}><span>Within ↔ Between |</span> <span>Here ↔ Elsewhere</span></p>
                    <p className={styles.threadCollapse}>
                      <strong>Collapsed:</strong> Either complete isolation ("I don't need anyone") or total enmeshment ("I can't exist without others")—no ability to move between
                    </p>
                    <p className={styles.threadOpen}>
                      <strong>Open:</strong> You can be fully present with yourself (internal processing) AND fully present with others (external engagement), moving fluidly between solitude and connection
                    </p>
                  </div>

                  <div className={styles.threadPrimerCard}>
                    <h4>CONSENT</h4>
                    <p className={styles.threadTension}><span>Yes ↔ No |</span> <span>Self ↔ Other</span></p>
                    <p className={styles.threadCollapse}>
                      <strong>Collapsed:</strong> "You must agree with me or you're wrong/evil/dangerous"—no legitimate disagreement allowed
                    </p>
                    <p className={styles.threadOpen}>
                      <strong>Open:</strong> You can hold your position strongly while allowing others to hold theirs—staying in relationship across difference
                    </p>
                  </div>

                  <div className={styles.threadPrimerCard}>
                    <h4>MEMORY</h4>
                    <p className={styles.threadTension}><span>Given ↔ Chosen |</span> <span>Telling ↔ Told</span></p>
                    <p className={styles.threadCollapse}>
                      <strong>Collapsed:</strong> You're possessed by stories you didn't choose and can't examine—or you reject all inheritance
                    </p>
                    <p className={styles.threadOpen}>
                      <strong>Open:</strong> You can hold your political identity as story rather than fate, examine what you inherited without abandoning it
                    </p>
                  </div>

                  <div className={styles.threadPrimerCard}>
                    <h4>PAUSE</h4>
                    <p className={styles.threadTension}><span>Not Yet ↔ Now |</span> <span>More ↔ Enough</span></p>
                    <p className={styles.threadCollapse}>
                      <strong>Collapsed:</strong> You react automatically to triggers—no space between stimulus and response
                    </p>
                    <p className={styles.threadOpen}>
                      <strong>Open:</strong> You can halt, notice your reaction, and choose what to do next
                    </p>
                  </div>

                  <div className={styles.threadPrimerCard}>
                    <h4>EMBODIMENT</h4>
                    <p className={styles.threadTension}><span>Think ↔ Feel |</span> <span>Stay ↔ Go</span></p>
                    <p className={styles.threadCollapse}>
                      <strong>Collapsed:</strong> You argue positions you've never felt, defend policies detached from actual human experience
                    </p>
                    <p className={styles.threadOpen}>
                      <strong>Open:</strong> You stay connected to what your body knows, to concrete experience, to the human reality beneath the argument
                    </p>
                  </div>

                  <div className={styles.threadPrimerCard}>
                    <h4>UNCERTAINTY</h4>
                    <p className={styles.threadTension}><span>Hide ↔ Seek |</span> <span>Threat ↔ Wonder</span></p>
                    <p className={styles.threadCollapse}>
                      <strong>Collapsed:</strong> Certainty as virtue—"the science is settled," "the truth is obvious"—nothing could change your mind
                    </p>
                    <p className={styles.threadOpen}>
                      <strong>Open:</strong> You can be certain about your values while genuinely uncertain about application, hold strong views lightly
                    </p>
                  </div>

                  <div className={styles.threadPrimerCard}>
                    <h4>BECOMING</h4>
                    <p className={styles.threadTension}><span>Same ↔ Different |</span> <span>Return ↔ Forward</span></p>
                    <p className={styles.threadCollapse}>
                      <strong>Collapsed:</strong> Your identity is fused with your positions—changing your mind = betraying yourself
                    </p>
                    <p className={styles.threadOpen}>
                      <strong>Open:</strong> You can hold current views strongly while remaining open to becoming someone who sees differently
                    </p>
                  </div>

                  <div className={styles.threadPrimerCard}>
                    <h4>THRESHOLD</h4>
                    <p className={styles.threadTension}><span>Inside ↔ Outside |</span> <span>Us ↔ Them</span></p>
                    <p className={styles.threadCollapse}>
                      <strong>Collapsed:</strong> Either rigid tribalism ("you're with us or against us") or dissolved identity ("no boundaries, everyone belongs everywhere")—no discernment about belonging
                    </p>
                    <p className={styles.threadOpen}>
                      <strong>Open:</strong> You can hold clear boundaries about your community AND genuine hospitality toward others, can define "us" without demonizing "them"
                    </p>
                  </div>
                </div>

                <div className={styles.thresholdNote}>
                  <p><strong>Note on THRESHOLD:</strong> While discovered more recently than the original seven Threads, THRESHOLD has become essential to political work. The "Who belongs?" question—the tension between Us and Them, Inside and Outside—sits at the heart of our political crisis. Every polarization issue involves drawing circles of belonging.</p>
                </div>

                <div className={styles.creativeTension}>
                  <h3>What Is "Creative Tension"?</h3>
                  <p>
                    Creative tension is what happens when you hold both poles of a Thread without collapsing to either side.
                    It's not "balance" or "moderation"—it's the capacity to move fluidly between poles depending on context,
                    while honoring both as necessary.
                  </p>
                  <div className={styles.tensionExample}>
                    <p><strong>Example:</strong> The CONSENT Thread doesn't ask you to soften your views. It asks: Can you
                    be absolutely certain you're right <em>and</em> genuinely allow that others might see differently? When
                    you can hold both—"I stand here" AND "you're allowed to stand there"—that's creative tension. That's
                    what makes dialogue possible.</p>
                  </div>
                  <p className={styles.tensionNote}>
                    <strong>The magic:</strong> Creative tension generates new possibilities. When you stop collapsing,
                    you stop being hijacked by reaction. You start choosing who you're becoming. That's not a technique—that's
                    transformation.
                  </p>
                </div>

                <div className={styles.holdConnectionBox}>
                  <h3>How HOLD Reopens Threads</h3>
                  <p>
                    Each step of HOLD corresponds to reopening specific Threads:
                  </p>
                  <ul>
                    <li><strong>H - HALT:</strong> Reopens PAUSE (space between trigger and reaction)</li>
                    <li><strong>O - OBSERVE:</strong> Reopens EMBODIMENT (what does your body know?) and PRESENCE (where are you—in your head or actually here?)</li>
                    <li><strong>L - LOOK for tension:</strong> Reopens CONSENT (can both poles be legitimate?), UNCERTAINTY (what don't I know?), and MEMORY (what story am I possessed by?)</li>
                    <li><strong>D - DECIDE who to be:</strong> Reopens BECOMING (choosing your character, not just your position)</li>
                  </ul>
                  <p className={styles.practiceNote}>
                    You don't need to understand all the Threads to practice HOLD. The practice does the Thread work
                    whether you know the theory or not. But understanding the framework helps you see what's actually
                    happening—and why it matters.
                  </p>
                </div>

                <div className={styles.deeperWork}>
                  <p>
                    <strong>Want to go deeper?</strong> HOLD is the entry point. The full Threads framework includes
                    diagnostic tools, developmental practices, and applications across education, politics, relationships,
                    and organizational life.
                  </p>
                  <a href="/threads" className={styles.threadsLink}>Explore the full Threads framework →</a>
                </div>

              </div>
            </details>
          </div>
        </div>
      </section>

      {/* The Problem We're Addressing */}
      <section className={`${styles.problem} section-lg`}>
        <div className="container">
          <h2>The Problem We're Addressing</h2>

          <div className={styles.problemContent}>
            <div className={`${styles.problemCard} ${styles.collapseExplainer}`}>
              <h3>What Is Collapse?</h3>
              <p>
                <strong>Collapse</strong> happens when a tension that should be held between two poles falls entirely
                to one side. Instead of "both/and," we get "only this, never that."
              </p>
              <p>
                In healthy political discourse, we hold the tension between competing values—safety AND freedom,
                individual rights AND collective responsibility, tradition AND progress. When one pole disappears—when
                only my side matters, when only winning counts—the tension collapses. Democracy becomes tribalism.
              </p>
              <div className={styles.collapseExample}>
                <p>
                  <strong>Example:</strong> You hold the tension between "I'm certain about my values" and "I might
                  not know everything about this issue." When certainty collapses—when there's nothing that could change
                  your mind—you've stopped thinking and started defending.
                </p>
              </div>
              <p className={styles.collapseNote}>
                Collapse isn't just about politics—it's a fundamental pattern in how humans lose capacity to hold
                complexity. <a href="/collapse" className={styles.collapseLink}>Explore the anatomy of collapse →</a>
              </p>
            </div>

            <div className={styles.problemCard}>
              <h3>This Is Not A Policy Problem</h3>
              <p>
                The political quagmire isn't about having the wrong policies. It's about having lost the
                <strong> capacity to hold tension together</strong>.
              </p>
              <p>
                The adults have already collapsed. We've lost the ability to navigate disagreement without
                destroying relationships, communities, and democratic institutions.
              </p>
            </div>

            <div className={styles.problemCard}>
              <h3>It's A Capacity Crisis</h3>
              <p>
                Democracy requires disagreement. It's the mechanism by which a pluralistic society navigates
                difference without violence. But disagreement requires capacity:
              </p>
              <ul>
                <li>The ability to pause before reacting</li>
                <li>Staying connected to lived experience, not just abstraction</li>
                <li>Allowing legitimate difference</li>
                <li>Tolerating discomfort without fleeing or attacking</li>
                <li>Examining inherited narratives</li>
                <li>Remaining genuinely open</li>
                <li>Allowing yourself and others to evolve</li>
              </ul>
              <p>
                <strong>When these capacities collapse, democracy itself collapses.</strong> Not because of
                policy, but because the substrate of democratic life erodes.
              </p>
            </div>

            <div className={styles.problemCard}>
              <h3>It's A Developmental Issue</h3>
              <p>
                The problem isn't that people are stupid, evil, misinformed, or uncaring. It's that they lack
                the <em>developmental capacity</em> to hold what democracy and pluralism require.
              </p>
              <p>
                That capacity was either never built or has been systematically eroded by systems designed to
                profit from our collapse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Tensions HOLD Holds */}
      <section className={`${styles.tensions} section-lg`}>
        <div className="container">
          <h2>The Tensions HOLD Holds</h2>
          <p className={styles.tensionsIntro}>
            These are the irresolvable polarities that political life presents. HOLD doesn't resolve them -
            it builds capacity to navigate them without collapsing.
          </p>

          <div className={styles.tensionsGrid}>
            <div className={styles.tensionCard}>
              <h3>Safety vs. Freedom</h3>
              <p>
                <strong>Left emphasis:</strong> "Safety first - we need protection from harm"
              </p>
              <p>
                <strong>Right emphasis:</strong> "Freedom first - we need protection from control"
              </p>
              <p className={styles.tensionNote}>
                Both legitimate. Both necessary. The tension can't be resolved - only held.
              </p>
            </div>

            <div className={styles.tensionCard}>
              <h3>Certainty vs. Openness</h3>
              <p>
                <strong>Left collapse:</strong> "The science is settled"
              </p>
              <p>
                <strong>Right collapse:</strong> "The truth is obvious"
              </p>
              <p className={styles.tensionNote}>
                Both sides have lost the capacity to hold genuine uncertainty.
              </p>
            </div>

            <div className={styles.tensionCard}>
              <h3>Individual vs. Collective</h3>
              <p>
                <strong>Right emphasis:</strong> "Personal responsibility, individual liberty"
              </p>
              <p>
                <strong>Left emphasis:</strong> "Collective care, structural solutions"
              </p>
              <p className={styles.tensionNote}>
                Democracy requires both. Neither alone is sufficient.
              </p>
            </div>

            <div className={styles.tensionCard}>
              <h3>Tradition vs. Progress</h3>
              <p>
                <strong>Conservative:</strong> "What wisdom are we losing?"
              </p>
              <p>
                <strong>Progressive:</strong> "What injustice are we perpetuating?"
              </p>
              <p className={styles.tensionNote}>
                Both questions are necessary. Both insights are real.
              </p>
            </div>

            <div className={styles.tensionCard}>
              <h3>Identity vs. Change</h3>
              <p>
                <strong>The collapse:</strong> "If you change your position, you've betrayed who you are"
              </p>
              <p>
                <strong>The capacity:</strong> "I can hold my current views strongly while remaining open
                to becoming someone who sees differently"
              </p>
              <p className={styles.tensionNote}>
                When this collapses, every disagreement is an existential threat.
              </p>
            </div>

            <div className={styles.tensionCard}>
              <h3>Justice vs. Order</h3>
              <p>
                <strong>Left emphasis:</strong> "Disruption for transformation"
              </p>
              <p>
                <strong>Right emphasis:</strong> "Stability for flourishing"
              </p>
              <p className={styles.tensionNote}>
                Societies need both. The question is proportion, not binary choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Universal Message */}
      <section className={`${styles.universalMessage} section-lg`}>
        <div className="container">
          <h2>The Universal Message: Stop Being Played</h2>

          <div className={styles.universalContent}>
            <div className={styles.appealCard}>
              <h3>Appeals to Conservatives</h3>
              <blockquote>
                "You're being played. Every time you rage-tweet, hate-click, or let some liberal talking
                head ruin your day, you're doing exactly what they want. HOLD is how you take back control.
                It's not about agreeing with people who are wrong. It's about being strong enough to choose
                your response instead of being triggered like a puppet. Stop giving them power over you."
              </blockquote>
              <div className={styles.appealValues}>
                <p><strong>Appeals to:</strong></p>
                <ul>
                  <li>Distrust of media manipulation</li>
                  <li>Value of self-control and strength</li>
                  <li>Resistance to being controlled</li>
                  <li>Personal responsibility framing</li>
                </ul>
              </div>
            </div>

            <div className={styles.appealCard}>
              <h3>Appeals to Progressives</h3>
              <blockquote>
                "When we react from outrage, we often become what we're fighting. HOLD is how you stay
                grounded in your values when facing views you find harmful. It's not about tolerating
                injustice - it's about responding with power and wisdom instead of triggered reactivity.
                The systems that oppress us also profit from our outrage. Don't give them both."
              </blockquote>
              <div className={styles.appealValues}>
                <p><strong>Appeals to:</strong></p>
                <ul>
                  <li>Awareness of systemic manipulation</li>
                  <li>Not becoming what you oppose</li>
                  <li>Strategic rather than reactive resistance</li>
                  <li>Values-grounded action</li>
                </ul>
              </div>
            </div>

            <div className={styles.magicNote}>
              <p>
                <strong>The magic:</strong> Both frames are true. Both lead to the same practice. The practice
                itself does the Thread work regardless of which door you entered through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How HOLD Opens Collapsed Threads */}
      <section className={`${styles.reopening} section-lg`}>
        <div className="container">
          <h2>How HOLD Opens Collapsed Threads</h2>

          <div className={styles.scenario}>
            <h3 className={styles.scenarioTitle}>Scenario: The Social Media Post That Infuriates You</h3>
            <p className={styles.scenarioSetup}>
              Your uncle shared something that feels racist/stupid/dangerous. Here's what happens with and
              without HOLD:
            </p>

            <div className={styles.comparison}>
              <div className={styles.comparisonColumn}>
                <h4>Without HOLD (Collapsed Threads)</h4>
                <ul>
                  <li><strong>Lost in my head, not actually here</strong> - PRESENCE collapsed (entirely Within, no Between)</li>
                  <li><strong>He's simply wrong and bad</strong> - CONSENT collapsed (no legitimate disagreement)</li>
                  <li><strong>He's always been like this</strong> - MEMORY collapsed (fixed story)</li>
                  <li><strong>Immediate rage</strong> - PAUSE collapsed</li>
                  <li><strong>Argument from pure position</strong> - EMBODIMENT collapsed</li>
                  <li><strong>I KNOW I'm right</strong> - UNCERTAINTY collapsed</li>
                  <li><strong>He'll never change / I can't change</strong> - BECOMING collapsed</li>
                  <li><strong>He's not one of us anymore</strong> - THRESHOLD collapsed (tribal exclusion)</li>
                </ul>
              </div>

              <div className={styles.comparisonColumn}>
                <h4>With HOLD (Thread Reopening)</h4>

                <div className={styles.holdStepScenario}>
                  <h5>H - HALT</h5>
                  <p>
                    "I notice I want to immediately attack. Let me stop. What does my reaction tell me?
                    Someone wants me to feel this. What do I actually want to do?"
                  </p>
                </div>

                <div className={styles.holdStepScenario}>
                  <h5>O - OBSERVE</h5>
                  <p>
                    "My chest is tight. My jaw is clenched. I feel heat in my face. Interesting - my body
                    is in threat response. Is this actually a threat? Or is my nervous system being hijacked?"
                  </p>
                </div>

                <div className={styles.holdStepScenario}>
                  <h5>L - LOOK FOR THE TENSION</h5>
                  <p>
                    "What are the two things that feel like they can't both be true? I believe X. He believes Y.
                    But the deeper tension... I want to be connected to family AND I want to stand for what's
                    right. I want to speak truth AND I want to be heard. I'm certain he's wrong AND I don't
                    fully understand why he sees it this way."
                  </p>
                  <p className={styles.threadNote}>
                    Just naming these tensions begins to reopen the collapsed Threads. The CONSENT Thread reopens
                    when you acknowledge the tension between standing firm and staying connected. The UNCERTAINTY
                    Thread reopens when you admit you don't fully understand.
                  </p>
                </div>

                <div className={styles.holdStepScenario}>
                  <h5>D - DECIDE</h5>
                  <p>
                    "Who do I want to be in this moment? What response would I be proud of tomorrow? Not what
                    wins the argument - who do I become through this choice?"
                  </p>
                  <p className={styles.threadNote}>
                    Maybe: engage with curiosity. Maybe: set a boundary. Maybe: say nothing now but raise it at
                    Thanksgiving. Maybe: write a thoughtful response instead of a reactive one. The point isn't
                    a prescribed answer. The point is that you <em>chose</em> instead of <em>reacted</em>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collapsible Accordions Start */}

      {/* For Both Sides */}
      <section className={`${styles.accordions} section-lg`}>
        <div className="container">

          <div className={styles.accordionSection}>
            <h2>For Both Sides: Different Doors, Same Practice</h2>
            <p className={styles.accordionTeaser}>
              What would be welcome on both Fox News and MSNBC? How can one practice appeal to conservatives
              and progressives without compromise? The same message, framed differently—because both sides
              are being played by the same outrage machines.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>How HOLD Speaks to Every Side</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>
              <h3>Fox News Messaging</h3>
              <div className={styles.messagingCard}>
                <h4>Guest Segment Concept:</h4>
                <blockquote>
                  "Americans are angrier than ever - and someone's profiting from it. Every rage-click, every
                  hate-share, every ruined family dinner makes money for media companies and gives power to
                  people who want you divided. Tonight: a simple practice that's helping people across the
                  political spectrum take back control of their own minds. It's not about agreeing with
                  liberals - it's about not letting anyone control your reactions."
                </blockquote>
                <p><strong>Appeal:</strong> Anti-manipulation, strength, self-control, not being played.</p>
              </div>

              <h3>MSNBC Messaging</h3>
              <div className={styles.messagingCard}>
                <h4>Guest Segment Concept:</h4>
                <blockquote>
                  "In the fight for justice, our greatest enemy might be our own reactivity. When we respond
                  from outrage, we often become what we're fighting against - and we play right into systems
                  designed to profit from our anger. Tonight: a practice that's helping activists, families,
                  and citizens respond from values rather than triggered rage. It's not about tolerating
                  injustice - it's about being strategic instead of reactive."
                </blockquote>
                <p><strong>Appeal:</strong> Not becoming the enemy, strategic resistance, values-grounded action.</p>
              </div>

              <h3>Joe Rogan / Long-Form Podcast Pitch</h3>
              <div className={styles.messagingCard}>
                <blockquote>
                  "So here's the thing - everyone thinks they're the reasonable ones being attacked by crazy
                  people on the other side. And the algorithms are literally designed to make you feel that
                  way because anger = engagement = money. What if there was a way to just... not play that
                  game? Not by becoming some zen master who doesn't care, but by actually choosing your
                  responses instead of being triggered like everyone else?"
                </blockquote>
                <p><strong>Appeal:</strong> Seeing through the game, not being a sheep, thinking for yourself.</p>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>The Practice Progression</h2>
            <p className={styles.accordionTeaser}>
              How does HOLD scale from millions learning a simple practice to thousands training as facilitators
              to hundreds of institutions embedding it in their culture? The journey from 60-second video to
              institutional transformation.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>From Mass Awareness to Institutional Integration</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>
              <div className={styles.progressionLevel}>
                <h3>Level 1: Mass Awareness (Millions)</h3>
                <ul>
                  <li>60-second video explainers</li>
                  <li>Social media content</li>
                  <li>Podcast appearances (both conservative and progressive shows)</li>
                  <li>Op-eds framed for different audiences</li>
                  <li>Simple website with free resources</li>
                  <li>App with daily HOLD prompts</li>
                </ul>
                <p className={styles.levelMessage}>
                  The message at this level: "Stop being manipulated. Take back your reactions."
                  No one needs to understand Threads. They just need to try HOLD.
                </p>
              </div>

              <div className={styles.progressionLevel}>
                <h3>Level 2: Practice Community (Hundreds of Thousands)</h3>
                <ul>
                  <li>Online courses going deeper into each step</li>
                  <li>Practice groups (virtual and in-person)</li>
                  <li>Introduction to the Threads as underlying framework (seven core capacities plus THRESHOLD)</li>
                  <li>"HOLD Circles" - regular practice gatherings</li>
                  <li>Integration with existing communities (churches, civic groups, workplaces)</li>
                </ul>
              </div>

              <div className={styles.progressionLevel}>
                <h3>Level 3: Facilitator Training (Thousands)</h3>
                <ul>
                  <li>Certification program for HOLD facilitators</li>
                  <li>Deep Thread understanding and diagnosis</li>
                  <li>Skills for guiding others through collapsed Threads</li>
                  <li>Partnership with existing bridge-building organizations</li>
                  <li>Train-the-trainer model</li>
                </ul>
              </div>

              <div className={styles.progressionLevel}>
                <h3>Level 4: Institutional Integration (Hundreds)</h3>
                <ul>
                  <li>Workplace programs</li>
                  <li>School integration (connects to S.A.F.E.)</li>
                  <li>Political organization training</li>
                  <li>Media/journalism applications</li>
                  <li>Legislative/government contexts</li>
                </ul>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>Political Collapse - Thread by Thread</h2>
            <p className={styles.accordionTeaser}>
              How does each Thread show up in our broken political discourse? What does it look
              like when PRESENCE collapses into isolation or tribal identity, when PAUSE collapses into outrage cycles,
              when CONSENT collapses into forced agreement, when BECOMING collapses into fixed political identities?
              And crucially—how do Left and Right collapse the same Threads, just in opposite directions?
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>The Threads Collapsed in Political Context</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>
              <p className={styles.collapseIntro}>
                The political quagmire isn't about having the wrong policies. It's about having lost the
                capacity to hold tension together. Here's how each Thread collapses in our political life—and
                what reopening them looks like.
              </p>

              <div className={styles.threadCollapseGrid}>
                <div className={styles.threadCollapseCard}>
                  <h3>PRESENCE (Collapsed)</h3>
                  <h4>What we're seeing:</h4>
                  <ul>
                    <li>Entirely "in your head"—no actual connection to others</li>
                    <li>Political identity as abstraction, not lived relationship</li>
                    <li>Screen-mediated outrage replacing face-to-face encounter</li>
                    <li>Collapse toward Within (isolation, echo chambers)</li>
                    <li>OR collapse toward Between (identity only exists in relation to tribe/enemy)</li>
                  </ul>
                  <p className={styles.collapsePattern}>
                    <strong>The collapse:</strong> Either total withdrawal from political engagement OR total enmeshment
                    where your identity exists only in relation to your tribe and their enemies.
                  </p>
                  <p className={styles.reopening}>
                    <strong>What reopening looks like:</strong> "I can be fully myself—with my own thoughts and values—AND
                    fully present with others who see differently. I don't need to withdraw to protect myself, and I don't
                    need others to agree to feel whole."
                  </p>
                  <p className={styles.impact}>
                    When PRESENCE collapses, politics becomes either lonely abstraction or tribal warfare. There's no
                    space for genuine encounter.
                  </p>
                </div>

                <div className={styles.threadCollapseCard}>
                  <h3>CONSENT (Collapsed)</h3>
                  <h4>What we're seeing:</h4>
                  <ul>
                    <li>Imposition as default ("you MUST agree")</li>
                    <li>Cancel culture (withdraw consent to exist in public)</li>
                    <li>"If you're not with us, you're against us"</li>
                    <li>No legitimate disagreement</li>
                    <li>Boundaries as betrayal</li>
                  </ul>
                  <p className={styles.collapsePattern}>
                    <strong>Left collapse:</strong> "Your disagreement is violence. Consent to our framing or
                    be expelled."
                  </p>
                  <p className={styles.collapsePattern}>
                    <strong>Right collapse:</strong> "Your boundaries are weakness. Real Americans don't need
                    safe spaces."
                  </p>
                  <p className={styles.reopening}>
                    <strong>What reopening looks like:</strong> "You have the right to see this differently. I
                    have the right to hold my view. Can we stay in relationship across that difference?"
                  </p>
                  <p className={styles.impact}>
                    This is the Thread most obviously broken in political life. We've lost the capacity to
                    consent to difference.
                  </p>
                </div>

                <div className={styles.threadCollapseCard}>
                  <h3>MEMORY (Collapsed)</h3>
                  <h4>What we're seeing:</h4>
                  <ul>
                    <li>Inherited political identities ("my family has always been...")</li>
                    <li>Historical narratives treated as fact, not interpretation</li>
                    <li>Inability to see one's own story as story</li>
                    <li>"That's not who we are" (denial) vs. "That's all we've ever been" (despair)</li>
                    <li>Nostalgia weaponized, history weaponized</li>
                  </ul>
                  <p className={styles.collapsePattern}>
                    <strong>The collapse:</strong> We're possessed by stories we didn't choose and can't examine.
                  </p>
                  <p className={styles.reopening}>
                    <strong>What reopening looks like:</strong> "What political story was I given? What story am
                    I telling? Can I hold my inheritance without being held by it?"
                  </p>
                </div>

                <div className={styles.threadCollapseCard}>
                  <h3>PAUSE (Collapsed)</h3>
                  <h4>What we're seeing:</h4>
                  <ul>
                    <li>Outrage cycles measured in hours</li>
                    <li>Social media as stimulus-response machine</li>
                    <li>"Clap back" culture as virtue</li>
                    <li>No space between hearing and reacting</li>
                    <li>The hot take as currency</li>
                  </ul>
                  <p className={styles.collapsePattern}>
                    <strong>The collapse:</strong> React → Defend → Escalate → Entrench
                  </p>
                  <p className={styles.reopening}>
                    <strong>What reopening looks like:</strong> "I notice I'm having a strong reaction. Let me
                    hold that before I respond."
                  </p>
                  <p className={styles.impact}>
                    The inability to PAUSE is why Twitter became a war zone, why family dinners explode, why
                    congressional hearings are performance rather than inquiry.
                  </p>
                </div>

                <div className={styles.threadCollapseCard}>
                  <h3>EMBODIMENT (Collapsed)</h3>
                  <h4>What we're seeing:</h4>
                  <ul>
                    <li>Disembodied debate (screens, not faces)</li>
                    <li>Ideology detached from lived experience</li>
                    <li>Talking points replacing felt sense</li>
                    <li>"The data says" while ignoring what bodies know</li>
                    <li>Political identity held in abstraction, not in flesh</li>
                  </ul>
                  <p className={styles.collapsePattern}>
                    <strong>The collapse:</strong> We argue positions we've never felt. We defend policies that
                    don't touch our lives. We attack people we've never met.
                  </p>
                  <p className={styles.reopening}>
                    <strong>What reopening looks like:</strong> "What does my body know about this that my
                    arguments don't? Have I actually experienced what I'm so certain about? When I imagine the
                    person I'm arguing with as a body—tired, scared, hopeful—what shifts?"
                  </p>
                </div>

                <div className={styles.threadCollapseCard}>
                  <h3>UNCERTAINTY (Collapsed)</h3>
                  <h4>What we're seeing:</h4>
                  <ul>
                    <li>Certainty as virtue on all sides</li>
                    <li>"The science is settled" / "The truth is obvious"</li>
                    <li>Doubt as weakness or betrayal</li>
                    <li>Nuance as cowardice</li>
                    <li>Complexity as elitism</li>
                    <li>Simple answers to complex problems</li>
                  </ul>
                  <p className={styles.collapsePattern}>
                    <strong>The collapse:</strong> We've made not-knowing shameful. So everyone performs
                    knowing—even when they don't.
                  </p>
                  <p className={styles.reopening}>
                    <strong>What reopening looks like:</strong> "I don't actually know. I have intuitions,
                    values, guesses—but I don't know. What if we're both partly right and partly wrong? What
                    would I need to see to change my mind?"
                  </p>
                  <p className={styles.impact}>
                    <strong>Diagnostic question:</strong> If there's nothing that could change your mind, your
                    UNCERTAINTY Thread is fully collapsed. You're not reasoning; you're defending.
                  </p>
                </div>

                <div className={styles.threadCollapseCard}>
                  <h3>BECOMING (Collapsed)</h3>
                  <h4>What we're seeing:</h4>
                  <ul>
                    <li>Fixed political identities ("I AM a conservative/progressive")</li>
                    <li>Change as betrayal ("you've sold out")</li>
                    <li>Purity tests</li>
                    <li>No legitimate evolution</li>
                    <li>"How dare you change your position?"</li>
                    <li>Identity so fused with position that questioning position = attacking self</li>
                  </ul>
                  <p className={styles.collapsePattern}>
                    <strong>The collapse:</strong> People can't change their minds without feeling they're losing
                    themselves.
                  </p>
                  <p className={styles.reopening}>
                    <strong>What reopening looks like:</strong> "Who I was politically five years ago isn't who
                    I am now. That's not betrayal—that's growth. I can hold my current views strongly while
                    remaining open to becoming someone who sees differently."
                  </p>
                  <p className={styles.impact}>
                    When BECOMING collapses, every disagreement is an existential threat.
                  </p>
                </div>

                <div className={styles.threadCollapseCard}>
                  <h3>THRESHOLD (Collapsed)</h3>
                  <h4>What we're seeing:</h4>
                  <ul>
                    <li>"You're either with us or against us"—rigid tribal boundaries</li>
                    <li>Purity tests determining who belongs in the group</li>
                    <li>Dehumanization of "them" to justify excluding or attacking</li>
                    <li>OR complete dissolution of identity ("borders are violence," "all boundaries are oppression")</li>
                    <li>Inability to hold both community identity AND hospitality to outsiders</li>
                    <li>Every difference becomes an existential threat to group coherence</li>
                  </ul>
                  <p className={styles.collapsePattern}>
                    <strong>The collapse:</strong> We've lost the ability to answer "Who belongs?" with discernment.
                    Either the circle is drawn so tightly that anyone different is excluded (tribalism), or the circle
                    dissolves entirely and there's no coherent "us" left (formless openness).
                  </p>
                  <p className={styles.reopening}>
                    <strong>What reopening looks like:</strong> "We have a clear identity and values as a community
                    AND we can welcome those who are different. We can define 'us' without demonizing 'them.' We can
                    hold boundaries that protect what matters while remaining hospitable to strangers."
                  </p>
                  <p className={styles.impact}>
                    THRESHOLD sits at the heart of political polarization. Immigration, identity politics, cancel culture,
                    nationalism—all are THRESHOLD collapses. The "Who belongs?" question shows up in every political divide.
                  </p>
                </div>
              </div>

              <div className={styles.comparisonTable}>
                <h3>The Meta-Pattern: Both Sides Collapse the Same Threads</h3>
                <p className={styles.tableIntro}>
                  Here's what makes the Threads framework genuinely apolitical: Both Left and Right collapse
                  the same Threads—just in opposite directions. This isn't false equivalence; it's recognizing
                  that the capacity failure is the same even when the content differs.
                </p>

                <table className={styles.symmetricTable}>
                  <thead>
                    <tr>
                      <th>Thread</th>
                      <th>Left Collapse</th>
                      <th>Right Collapse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>PRESENCE</strong></td>
                      <td>Entirely in abstraction, no embodied encounter</td>
                      <td>Tribal identity, no individual sovereignty</td>
                    </tr>
                    <tr>
                      <td><strong>CONSENT</strong></td>
                      <td>Forced agreement or exile</td>
                      <td>Forced exposure, "toughen up"</td>
                    </tr>
                    <tr>
                      <td><strong>MEMORY</strong></td>
                      <td>"That's all we've ever been" (despair)</td>
                      <td>"That's not who we are" (denial)</td>
                    </tr>
                    <tr>
                      <td><strong>PAUSE</strong></td>
                      <td>Callout culture, immediate cancellation</td>
                      <td>Trigger the libs, provocation as sport</td>
                    </tr>
                    <tr>
                      <td><strong>EMBODIMENT</strong></td>
                      <td>Abstracted identity politics</td>
                      <td>Abstracted nationalism</td>
                    </tr>
                    <tr>
                      <td><strong>UNCERTAINTY</strong></td>
                      <td>"The science is settled"</td>
                      <td>"The truth is obvious"</td>
                    </tr>
                    <tr>
                      <td><strong>BECOMING</strong></td>
                      <td>Purity tests, cancel the evolved</td>
                      <td>Loyalty tests, purge the dissenters</td>
                    </tr>
                    <tr>
                      <td><strong>THRESHOLD</strong></td>
                      <td>"No borders, all boundaries are violence"</td>
                      <td>"Build the wall, keep them out"</td>
                    </tr>
                  </tbody>
                </table>

                <p className={styles.symmetryNote}>
                  <strong>This is why the framework is genuinely apolitical.</strong> Both sides suffer from the
                  same collapsed capacities. Threads doesn't say which side is right. It asks: can you hold the
                  tension without collapsing?
                </p>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>Practical Applications</h2>
            <p className={styles.accordionTeaser}>
              How does this work in real life? What does HOLD look like in family conversations during the
              holidays, in friendships strained by political difference, in community dialogues, in political
              movements, in justice organizations? Here are specific interventions for each context.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>Specific Interventions for Real Contexts</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>
              <div className={styles.applicationCard}>
                <h3>Family Conversations</h3>
                <p className={styles.threadFocus}>
                  <strong>Primary Thread:</strong> MEMORY
                </p>
                <p>
                  The collapsed MEMORY Thread is usually what makes family political conversations impossible.
                  Everyone is carrying inherited stories they can't examine.
                </p>
                <div className={styles.intervention}>
                  <h4>A HOLD intervention:</h4>
                  <blockquote>
                    "Before we argue about what's true, can we each share what story we were given? Not defend
                    it—just name it. What did your family teach you about [government/justice/freedom/responsibility]?"
                  </blockquote>
                  <p className={styles.interventionNote}>
                    This doesn't resolve disagreement. It opens space to see that we're all navigating inherited
                    narratives, not pure reason.
                  </p>
                </div>
              </div>

              <div className={styles.applicationCard}>
                <h3>Friendships Across Difference</h3>
                <p className={styles.threadFocus}>
                  <strong>Primary Thread:</strong> CONSENT
                </p>
                <p>
                  The collapsed CONSENT Thread is what ends friendships and fragments communities. "If you voted
                  for X, we can't be friends" is a CONSENT collapse—an inability to stay in relationship across
                  difference.
                </p>
                <div className={styles.intervention}>
                  <h4>A HOLD intervention:</h4>
                  <blockquote>
                    "I feel strongly about this. I imagine you do too. Can we consent to care about each other
                    even when we disagree about politics? Can we hold the tension of loving someone whose
                    political views feel wrong to us?"
                  </blockquote>
                </div>
              </div>

              <div className={styles.applicationCard}>
                <h3>Community Dialogue</h3>
                <p className={styles.threadFocus}>
                  <strong>Primary Thread:</strong> THRESHOLD
                </p>
                <p>
                  The collapsed THRESHOLD Thread is what prevents productive community dialogue. People either
                  won't enter spaces where they might be challenged, or they enter to dominate rather than learn.
                </p>
                <div className={styles.intervention}>
                  <h4>A HOLD intervention:</h4>
                  <blockquote>
                    "This conversation will be uncomfortable. Discomfort isn't danger. We're going to practice
                    staying in the room when we want to leave, and staying curious when we want to be certain.
                    That's the work."
                  </blockquote>
                </div>
              </div>

              <div className={styles.applicationCard}>
                <h3>Political Movements</h3>
                <p className={styles.threadFocus}>
                  <strong>Primary Thread:</strong> UNCERTAINTY
                </p>
                <p>
                  The collapsed UNCERTAINTY Thread is what makes movements become cults. When doubt is disloyalty,
                  you're no longer a movement—you're a belief system that can't learn.
                </p>
                <div className={styles.intervention}>
                  <h4>A HOLD intervention:</h4>
                  <blockquote>
                    "What would need to be true for our approach to be wrong? If we can't answer that, we've
                    stopped thinking and started believing. Movements that can't question themselves become
                    what they oppose."
                  </blockquote>
                </div>
              </div>

              <div className={styles.applicationCard}>
                <h3>Justice Organizations</h3>
                <p className={styles.threadFocus}>
                  <strong>Primary Thread:</strong> BECOMING
                </p>
                <p>
                  The collapsed BECOMING Thread is what creates burnout and purges. When identity fuses with
                  position, people can't evolve, can't admit past mistakes, can't grow. So they perform purity
                  until they're exhausted or exiled.
                </p>
                <div className={styles.intervention}>
                  <h4>A HOLD intervention:</h4>
                  <blockquote>
                    "Your commitment to justice can deepen even as your understanding of justice evolves. You're
                    not the same organizer you were five years ago. That's not failure—that's learning. Can we
                    build a movement where people are allowed to become?"
                  </blockquote>
                </div>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>Five Pilot Opportunities</h2>
            <p className={styles.accordionTeaser}>
              Where do you start? Not with everyone, everywhere—but with specific contexts where the need is
              felt and the capacity can be built. Each pilot teaches us something different about how HOLD
              works in practice.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>Starting Points for Building Capacity</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>
              <div className={styles.pilotCard}>
                <h3>Family Conversations</h3>
                <p>
                  The collapsed MEMORY Thread is usually what makes family political conversations impossible.
                  Everyone is carrying inherited stories they can't examine.
                </p>
                <div className={styles.intervention}>
                  <strong>A HOLD intervention:</strong>
                  <p>
                    "Before we argue about what's true, can we each share what story we were given? Not defend
                    it - just name it. What did your family teach you about [government/justice/freedom/responsibility]?"
                  </p>
                  <p>
                    This doesn't resolve disagreement. It opens space to see that we're all navigating inherited
                    narratives, not pure reason.
                  </p>
                </div>
              </div>

              <div className={styles.pilotCard}>
                <h3>Workplace Dialogue</h3>
                <p>
                  The collapsed THRESHOLD Thread is what prevents productive workplace dialogue. People either
                  won't enter spaces where they might be challenged, or they enter to dominate rather than learn.
                </p>
                <div className={styles.intervention}>
                  <strong>A HOLD intervention:</strong>
                  <p>
                    "This conversation will be uncomfortable. Discomfort isn't danger. We're going to practice
                    staying in the room when we want to leave, and staying curious when we want to be certain.
                    That's the work."
                  </p>
                </div>
              </div>

              <div className={styles.pilotCard}>
                <h3>Community Organizations</h3>
                <p>
                  The collapsed CONSENT Thread is what ends friendships and fragments communities. "If you voted
                  for X, we can't be friends" is a CONSENT collapse - an inability to stay in relationship across
                  difference.
                </p>
                <div className={styles.intervention}>
                  <strong>A HOLD intervention:</strong>
                  <p>
                    "I feel strongly about this. I imagine you do too. Can we consent to care about each other
                    even when we disagree about politics? Can we hold the tension of loving someone whose
                    political views feel wrong to us?"
                  </p>
                </div>
              </div>

              <div className={styles.pilotCard}>
                <h3>Faith Communities</h3>
                <p>
                  The collapsed UNCERTAINTY Thread is what makes movements become cults. When doubt is disloyalty,
                  you're no longer a movement - you're a belief system that can't learn.
                </p>
                <div className={styles.intervention}>
                  <strong>A HOLD intervention:</strong>
                  <p>
                    "What would need to be true for our approach to be wrong? If we can't answer that, we've
                    stopped thinking and started believing. Movements that can't question themselves become
                    what they oppose."
                  </p>
                </div>
              </div>

              <div className={styles.pilotCard}>
                <h3>Campus Settings</h3>
                <p>
                  The collapsed BECOMING Thread is what creates burnout and purges. When identity fuses with
                  position, people can't evolve, can't admit past mistakes, can't grow.
                </p>
                <div className={styles.intervention}>
                  <strong>A HOLD intervention:</strong>
                  <p>
                    "Your commitment to justice can deepen even as your understanding of justice evolves.
                    You're not the same person you were five years ago. That's not failure - that's learning.
                    Can we build a community where people are allowed to become?"
                  </p>
                </div>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>The Other Players in This Space</h2>
            <p className={styles.accordionTeaser}>
              What's already being tried? Who else is working on depolarization and bridge-building? And why,
              with hundreds of organizations and millions of dollars invested, is polarization still worsening?
              The landscape, the limitations, and where Threads fits differently.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>The Depolarization Landscape and Its Limitations</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>
              <h3>Braver Angels (formerly Better Angels)</h3>
              <div className={styles.playerCard}>
                <p>
                  <strong>What they do:</strong> The "largest, grassroots, bipartisan organization in America
                  dedicated to reviving the communal spirit of American democracy." Red/Blue workshops using
                  family therapy principles.
                </p>
                <p>
                  <strong>The structural challenge:</strong> "It has always been challenging to get red voters
                  to come and engage." At one meeting, a conservative was "on the defensive, fielding
                  data-driven diatribes from the group's liberals" for the entire session.
                </p>
                <p>
                  <strong>The Thread diagnosis:</strong> Braver Angels works at the communication level -
                  teaching people to listen and find common ground. But when people's Threads are collapsed,
                  even good communication techniques fail. The conservative who was "on the defensive" wasn't
                  lacking listening skills - the group lacked the capacity to hold the THRESHOLD tension
                  (discomfort without attack), the CONSENT tension (legitimate disagreement), and the
                  UNCERTAINTY tension (genuine not-knowing).
                </p>
              </div>

              <h3>No Labels</h3>
              <div className={styles.playerCard}>
                <p>
                  <strong>What they tried:</strong> Founded in 2010 with the slogan "Not Left. Not Right.
                  Forward." Aimed to organize voters against partisanship and encourage "common ground"
                  approaches.
                </p>
                <p>
                  <strong>What happened:</strong> After nearly three years pursuing a "unity ticket," they
                  went 0 for 30 in recruiting candidates and shut down.
                </p>
                <p>
                  <strong>The Thread diagnosis:</strong> No Labels operated on a fundamentally flawed theory
                  of change. They assumed the problem was positions - that moderate positions and moderate
                  candidates would attract people. But the problem isn't positions. It's the collapsed capacity
                  to hold tension. A "unity ticket" doesn't rebuild anyone's capacity to navigate disagreement.
                  It just offers a different answer to rally around - which perpetuates the same dynamic of
                  answers dividing rather than questions uniting.
                </p>
              </div>

              <h3>Bridge Alliance & the Broader Ecosystem</h3>
              <div className={styles.playerCard}>
                <p>
                  <strong>What they are:</strong> A coalition of over 90 organizations dedicated to U.S.
                  revitalization, representing three million supporters across civic reform and civil discourse.
                </p>
                <p>
                  <strong>The challenge:</strong> With 90+ organizations and millions of supporters, why isn't
                  the needle moving more?
                </p>
                <p>
                  <strong>What's missing:</strong> Almost all depolarization organizations assume the capacity
                  to do the work they're proposing. They assume people can listen without defending, rally
                  around compromise, hold discomfort long enough to learn, stay curious when triggered.
                </p>
                <p>
                  <strong>But what if the capacity itself is what's broken?</strong>
                </p>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>Standing on the Shoulders of Giants</h2>
            <p className={styles.accordionTeaser}>
              HOLD didn't emerge in a vacuum. Major platforms, researchers, and thought leaders have been
              documenting this crisis for years—from Hidden Brain's research on affective polarization to
              Ezra Klein's analysis of systemic collapse to Jonathan Haidt's work on social media's impact.
              Their work validates the problem. HOLD offers a practical response.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>The Research and Thought Leadership That Makes HOLD Possible</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>

              <p className={styles.legitimacyIntro}>
                HOLD builds on years of research and analysis from established platforms and thought leaders
                who've been documenting our polarization crisis. Here's what they've found—and how HOLD responds.
              </p>

              <div className={styles.sourceCard}>
                <h3>Hidden Brain: "US 2.0" Series (NPR, 2024)</h3>
                <div className={styles.sourceFindings}>
                  <h4>Key Findings:</h4>
                  <ul>
                    <li><strong>Affective Polarization:</strong> Americans relate to political parties like sports
                    teams—defending "our side" regardless of policy</li>
                    <li>Only <strong>15% are "deeply involved"</strong> but they dominate media and discourse</li>
                    <li><strong>Misperception epidemic:</strong> People think opponents are more extreme than they are</li>
                    <li>The Lincoln model: working across deep disagreement without requiring agreement</li>
                  </ul>
                  <a href="https://www.hiddenbrain.org/podcast/us-2-0-what-we-have-in-common/" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                    Explore Hidden Brain's US 2.0 series on polarization →
                  </a>
                </div>
                <div className={styles.holdConnection}>
                  <h4>How HOLD Responds:</h4>
                  <p>
                    Hidden Brain documents the problem: we've lost the capacity to disagree without demonization.
                    HOLD provides the practice. The "L" step (Look for the tension) directly addresses misperception
                    by forcing acknowledgment of legitimate competing values. When you name "I want safety AND I want
                    freedom," you've already begun to see past caricature.
                  </p>
                </div>
              </div>

              <div className={styles.sourceCard}>
                <h3>Ezra Klein: "Why We're Polarized" (2020-2024)</h3>
                <div className={styles.sourceFindings}>
                  <h4>Key Insights:</h4>
                  <ul>
                    <li><strong>"We're polarized less about politics and more about the system itself"</strong> -
                    the fight is now about whether institutions are legitimate</li>
                    <li>Social media "ratchets up the emotional tenor"—supplies content to feel strongly about</li>
                    <li>Educational polarization now overwhelming racial polarization</li>
                    <li>The question isn't "why are we polarized?" but "can broad, diverse coalitions re-form?"</li>
                  </ul>
                  <a href="https://www.simonandschuster.com/books/Why-Were-Polarized/Ezra-Klein/9781476700366" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                    Read "Why We're Polarized" by Ezra Klein →
                  </a>
                </div>
                <div className={styles.holdConnection}>
                  <h4>How HOLD Responds:</h4>
                  <p>
                    Klein identified that social media weaponizes emotional reactivity. HOLD's "H" step (HALT) is
                    the circuit breaker: "Notice you're about to be hijacked. The outrage you're feeling is exactly
                    what someone wants you to feel." It's not about eliminating emotional response—it's about
                    reclaiming agency over it.
                  </p>
                </div>
              </div>

              <div className={styles.sourceCard}>
                <h3>Krista Tippett: On Being & The Civil Conversations Project</h3>
                <div className={styles.sourceFindings}>
                  <h4>Key Work:</h4>
                  <ul>
                    <li><strong>Civil Conversations Project (2011):</strong> "An emergent approach to healing our
                    fractured civic spaces"</li>
                    <li>Response to widespread sentiment that "civic life is broken, bipartisan consensus is
                    inconceivable"</li>
                    <li><strong>Political Bridge People series:</strong> Showcasing figures who work across
                    partisan divides</li>
                    <li>Better Conversations Guides for navigating difficult topics</li>
                  </ul>
                  <a href="https://onbeing.org/libraries/civil-conversations/" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                    Explore On Being's Civil Conversations Project →
                  </a>
                </div>
                <div className={styles.holdConnection}>
                  <h4>How HOLD Responds:</h4>
                  <p>
                    Tippett's work models what's possible when people bring capacity to conversation. HOLD builds
                    that capacity. Before you can have a civil conversation, you need the ability to PAUSE before
                    reacting, OBSERVE your somatic response, LOOK at the tension you're holding, and DECIDE who you
                    want to be. HOLD is the pre-work that makes Tippett's conversations possible.
                  </p>
                </div>
              </div>

              <div className={styles.sourceCard}>
                <h3>Jonathan Haidt: Social Media, Polarization, and Democratic Fragility</h3>
                <div className={styles.sourceFindings}>
                  <h4>Key Arguments:</h4>
                  <ul>
                    <li><strong>"Tribalism is pre-wired but not hardwired"</strong>—human societies are more plastic
                    than individuals and can be shaped by institutional design</li>
                    <li>Social media has become an <strong>"outrage machine"</strong> feeding a polarization spiral</li>
                    <li>Both extremes are becoming "more extreme, more powerful, and more intimidating"</li>
                    <li>Faith in democracy is waning; modern polarization could realize Founding Fathers' worst fears</li>
                    <li>Co-founded CivilPolitics.org and Heterodox Academy to apply moral psychology</li>
                  </ul>
                  <a href="https://jonathanhaidt.com/politics/" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                    Read Haidt's research on politics and polarization →
                  </a>
                </div>
                <div className={styles.holdConnection}>
                  <h4>How HOLD Responds:</h4>
                  <p>
                    Haidt argues societies can be "shaped by voluntary choices shaped by reason, goodwill, and
                    institutional design." HOLD is that institutional design—a simple, repeatable practice that
                    builds capacity person by person. The "D" step (DECIDE who you want to be) operationalizes
                    Haidt's insight: we can choose to shape ourselves differently, but we need a practice that makes
                    that choice actionable in the moment of trigger.
                  </p>
                </div>
              </div>

              <div className={styles.sourceCard}>
                <h3>Braver Angels: Depolarization Through Dialogue</h3>
                <div className={styles.sourceFindings}>
                  <h4>Key Work:</h4>
                  <ul>
                    <li><strong>Red/Blue workshops</strong> designed to facilitate understanding between conservatives
                    and progressives</li>
                    <li><strong>"Depolarizing Within" workshops</strong> teaching strategies for engaging without
                    demonization</li>
                    <li>Research shows depolarization most effective when it includes <strong>both informational AND
                    emotional components</strong></li>
                    <li>Emphasis on civic muscle: <strong>"Resilience doesn't just come from structures but from
                    practice—muscle that only grows by being used"</strong></li>
                  </ul>
                  <a href="https://braverangels.org/attend-a-workshop/" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                    Learn about Braver Angels workshops →
                  </a>
                </div>
                <div className={styles.holdConnection}>
                  <h4>How HOLD Responds:</h4>
                  <p>
                    Braver Angels' research confirms what Threads teaches: you need both informational (the "L" step)
                    AND emotional (the "O" step) work. HOLD provides the "civic muscle" practice Braver Angels
                    identifies. Where their workshops require bringing Reds and Blues together, HOLD starts with
                    individual practice—building capacity before requiring contact. It's the training program before
                    the game.
                  </p>
                </div>
              </div>

              <div className={styles.sourceCard}>
                <h3>TED & Big Think: Emotional Intelligence for 2025</h3>
                <div className={styles.sourceFindings}>
                  <h4>Emerging Themes:</h4>
                  <ul>
                    <li><strong>Daniel Goleman (Big Think):</strong> Emotional intelligence gaining urgency in
                    leadership</li>
                    <li><strong>Anxiety management</strong> as positive force rather than weakness</li>
                    <li><strong>Building trust and collaboration</strong> in conditions of uncertainty</li>
                    <li><strong>TED 2024:</strong> "Builders" movement replacing "us vs. them" thinking</li>
                    <li>Research on <strong>mindfulness for managing political polarization</strong></li>
                  </ul>
                  <a href="https://www.ted.com/playlists/775/the_political_mind" target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
                    Explore TED talks on the political mind →
                  </a>
                </div>
                <div className={styles.holdConnection}>
                  <h4>How HOLD Responds:</h4>
                  <p>
                    The emotional intelligence community has identified the need; HOLD provides the specific practice.
                    The "O" step (OBSERVE what's happening in your body) is emotional intelligence operationalized.
                    Where Goleman describes the competency, HOLD builds the capacity through daily practice. It's the
                    bridge between theory and embodiment.
                  </p>
                </div>
              </div>

              <div className={styles.standingTogether}>
                <h3>The Pattern Across All Sources</h3>
                <p>
                  Every major platform and thought leader is identifying the same crisis:
                </p>
                <ul>
                  <li>Social media amplifies emotional reactivity</li>
                  <li>Polarization is getting worse despite hundreds of organizations working on it</li>
                  <li>We've lost the capacity to disagree without destroying relationships and institutions</li>
                  <li>The problem is <strong>capacity</strong>, not information or policy positions</li>
                  <li>Solutions require both emotional and cognitive work</li>
                  <li>Individual practice must scale to cultural change</li>
                </ul>
                <p className={styles.holdAnswer}>
                  <strong>HOLD is the practical answer to the problem they're all documenting.</strong> It takes
                  their research and analysis and distills it into a four-step practice anyone can do in the moment
                  of trigger. It's not competing with their work—it's building on it.
                </p>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>HOLD's Unique Contribution: What Makes It Different</h2>
            <p className={styles.accordionTeaser}>
              With all this established work documenting polarization and capacity loss, what does HOLD offer that's
              genuinely new? Not just another analysis or dialogue technique—but the underlying developmental practice
              that builds the capacity all other efforts assume.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>The Distinctive Value HOLD Brings</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>

              <div className={styles.uniqueCard}>
                <h3>1. Individual Practice BEFORE Group Contact</h3>
                <p>
                  Most depolarization efforts require bringing Reds and Blues together (Braver Angels workshops),
                  finding moderate candidates (No Labels), or facilitating dialogue across difference (Civil
                  Conversations). These are important—but they all assume people arrive with the capacity to hold
                  tension.
                </p>
                <p className={styles.distinction}>
                  <strong>HOLD is different:</strong> You can practice alone, in the moment of trigger, before any
                  contact with "the other side." It builds capacity first, creating readiness for dialogue rather
                  than assuming readiness and structuring dialogue.
                </p>
                <div className={styles.example}>
                  <p>
                    <strong>Example:</strong> When your uncle's post enrages you, you don't need a facilitator or
                    workshop. You practice HOLD right then: HALT the reaction, OBSERVE your body, LOOK for the tension,
                    DECIDE who you want to be. The capacity builds through individual repetition, not group processing.
                  </p>
                </div>
              </div>

              <div className={styles.uniqueCard}>
                <h3>2. Apolitical at the Architectural Level</h3>
                <p>
                  Most "bipartisan" or "centrist" efforts are apolitical by avoiding positions or seeking middle
                  ground. HOLD is apolitical by operating at the <strong>question level, not the answer level</strong>.
                </p>
                <p className={styles.distinction}>
                  <strong>HOLD is different:</strong> It doesn't ask "what's the right policy?" It asks "can you hold
                  the tension between competing goods without collapsing?" A progressive with strong HOLD capacity and
                  a conservative with strong HOLD capacity can both pursue their values more effectively—and stay in
                  relationship while disagreeing vigorously.
                </p>
                <div className={styles.architectureNote}>
                  <p>
                    This is why the same practice can be framed for Fox News ("Stop letting them manipulate you") and
                    MSNBC ("Respond from values, not reactivity") without compromise. Both frames are true. Both lead
                    to the same capacity-building work.
                  </p>
                </div>
              </div>

              <div className={styles.uniqueCard}>
                <h3>3. Somatic Integration, Not Just Cognitive Reframing</h3>
                <p>
                  Dialogue programs teach better communication. Emotional intelligence training teaches self-awareness.
                  Mindfulness teaches present-moment attention. All valuable—but most stay cognitive or observational.
                </p>
                <p className={styles.distinction}>
                  <strong>HOLD is different:</strong> The "O" step (OBSERVE what's happening in your body) grounds
                  the entire practice in <strong>embodied experience</strong>. You're not just thinking differently;
                  you're noticing where collapse shows up in your flesh. Chest tight? Jaw clenched? Heat rising?
                  Your body knows something your arguments don't.
                </p>
                <div className={styles.somaticNote}>
                  <p>
                    This is how HOLD builds developmental capacity rather than behavioral compliance. When you repeatedly
                    practice noticing your somatic response before choosing your action, you're literally rewiring your
                    nervous system's relationship to political triggers. That's not skill—that's transformation.
                  </p>
                </div>
              </div>

              <div className={styles.uniqueCard}>
                <h3>4. Diagnostic Precision: Naming WHICH Capacity Is Collapsed</h3>
                <p>
                  Most frameworks offer general critiques: "polarization is bad," "we need more civility," "listening
                  is important." True but vague. When everything is the problem, nothing is actionable.
                </p>
                <p className={styles.distinction}>
                  <strong>HOLD is different:</strong> It connects to the Threads framework (seven core capacities plus
                  THRESHOLD for political contexts), allowing precise diagnosis. "Your CONSENT Thread is collapsed—you're
                  requiring agreement rather than allowing difference." "Your UNCERTAINTY Thread is collapsed—there's
                  nothing that could change your mind." This precision makes the work targetable.
                </p>
                <div className={styles.diagnosticExample}>
                  <p>
                    <strong>Example:</strong> A Braver Angels workshop struggles when a conservative is "on the
                    defensive, fielding data-driven diatribes." Thread diagnosis: THRESHOLD collapsed (discomfort =
                    attack), CONSENT collapsed (no legitimate disagreement), UNCERTAINTY collapsed (certainty as
                    weapon). Name the specific collapses, work with those. Not "be more civil"—"your THRESHOLD Thread
                    needs reopening."
                  </p>
                </div>
              </div>

              <div className={styles.uniqueCard}>
                <h3>5. The "L" Step: Holding Polarity, Not Seeking Resolution</h3>
                <p>
                  Dialogue efforts often aim for "common ground," "shared values," or "win-win solutions." These can
                  work when interests align. But what about genuine value conflicts where no resolution exists?
                </p>
                <p className={styles.distinction}>
                  <strong>HOLD is different:</strong> The "L" step (LOOK for the tension) explicitly trains people to
                  <strong>name irresolvable polarities</strong> and hold them without collapsing. Safety AND freedom.
                  My certainty AND my openness. Connection AND boundaries. Both necessary. Both in tension. Not seeking
                  synthesis—building capacity to navigate both poles.
                </p>
                <div className={styles.polarityNote}>
                  <p>
                    This is radically different from compromise or moderation. You're not finding the middle. You're
                    strengthening your ability to move fluidly between poles depending on context, while honoring both
                    as legitimate.
                  </p>
                </div>
              </div>

              <div className={styles.uniqueCard}>
                <h3>6. Identity-Based Rather Than Position-Based</h3>
                <p>
                  Political organizing focuses on defending positions and winning arguments. Even bridge-building
                  efforts often focus on positions—finding which ones people can agree on.
                </p>
                <p className={styles.distinction}>
                  <strong>HOLD is different:</strong> The "D" step (DECIDE who you want to be) fundamentally reframes
                  the question. Not "what's the right policy?" Not "how do I win?" But "given everything—my values,
                  this situation, this tension—<strong>who do I want to be right now?</strong>"
                </p>
                <div className={styles.identityNote}>
                  <p>
                    This is the BECOMING work. You're not just taking a stance; you're choosing who you're becoming
                    through your choices. That's developmental. When you ask "What response would I be proud of
                    tomorrow?" you've shifted from position-defense to character-formation. That's the work that
                    actually builds capacity.
                  </p>
                </div>
              </div>

              <div className={styles.uniqueCard}>
                <h3>7. Scalable Without Requiring Mass Coordination</h3>
                <p>
                  Most depolarization efforts require coordination: workshops need facilitators, dialogue needs
                  participants from both sides, civic organizations need funding and structure.
                </p>
                <p className={styles.distinction}>
                  <strong>HOLD is different:</strong> It can spread virally because it's individually actionable.
                  A 60-second video teaches the basics. You practice alone. You experience benefit. You share it.
                  No facilitator required for entry. No workshop fee. No need to convince anyone from "the other side"
                  to show up.
                </p>
                <div className={styles.scaleNote}>
                  <p>
                    Think of how mindfulness went mainstream: not through mass workshops but through millions of
                    individuals trying a simple practice, experiencing results, and sharing it. HOLD can follow the
                    same path. The simple practice creates the on-ramp; those who benefit become curious about the
                    deeper framework; that leads to facilitator training and institutional integration. Scale through
                    simplicity, not through centralized coordination.
                  </p>
                </div>
              </div>

              <div className={styles.summaryCard}>
                <h3>The Gap HOLD Fills</h3>
                <p className={styles.gapStatement}>
                  <strong>Every other effort assumes the capacity HOLD builds.</strong>
                </p>
                <p>
                  Bridge-building organizations assume people can tolerate discomfort without fleeing or attacking.
                  Dialogue programs assume people can listen without defending. Civic education assumes people can hold
                  legitimate disagreement. Emotional intelligence training assumes people will practice when triggered.
                </p>
                <p>
                  <strong>But what if those capacities are exactly what's broken?</strong>
                </p>
                <p className={styles.holdAnswer}>
                  HOLD builds the core capacities (PRESENCE, CONSENT, MEMORY, PAUSE, EMBODIMENT, UNCERTAINTY,
                  BECOMING, plus THRESHOLD for political contexts) that all other civic work requires. It's not competing
                  with existing efforts—it's providing the prerequisite capacity their work assumes. That's the gap. That's
                  what makes HOLD necessary even in a landscape with hundreds of organizations already working on depolarization.
                </p>
                <p className={styles.infrastructureRole}>
                  <strong>HOLD is civic infrastructure.</strong> Like building roads before asking people to drive,
                  or laying foundation before constructing a house. You don't see it. But nothing else works without it.
                </p>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>How HOLD Integrates With Existing Organizations</h2>
            <p className={styles.accordionTeaser}>
              HOLD doesn't compete with Braver Angels, Bridge Alliance, or other bridge-building organizations.
              It provides the prerequisite capacity their work requires. Here's how partnership could work.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>Partnership Models for Capacity Building</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>
              <p className={styles.integrationIntro}>
                HOLD doesn't compete with existing bridge-building organizations. It provides the
                <strong> prerequisite capacity</strong> their work requires.
              </p>

              <div className={styles.integrationCard}>
                <h3>For Braver Angels</h3>
                <p>
                  "HOLD is pre-work. Before your Red/Blue workshop, have everyone practice HOLD for a week.
                  They'll arrive with more capacity to actually do what you're asking."
                </p>
              </div>

              <div className={styles.integrationCard}>
                <h3>For Dialogue Programs</h3>
                <p>
                  "HOLD builds the muscle that makes your dialogue possible. Without it, people collapse as
                  soon as tension rises."
                </p>
              </div>

              <div className={styles.integrationCard}>
                <h3>For Bridge-Building Organizations</h3>
                <p>
                  "You're trying to build bridges. HOLD builds the capacity to walk across them."
                </p>
              </div>

              <div className={styles.integrationCard}>
                <h3>For Civic Education</h3>
                <p>
                  "You're teaching people about democracy. HOLD builds the capacity democracy requires."
                </p>
              </div>

              <div className={styles.modelNote}>
                <h4>The Infrastructure Provider Model</h4>
                <p>
                  HOLD as underlying framework that multiple organizations adopt, PLUS direct civic programming.
                  Partner with existing institutions to add capacity-building to their programs.
                </p>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>The Media Strategy</h2>
            <p className={styles.accordionTeaser}>
              How do you present the same practice to conservative and progressive audiences—without compromise,
              without false equivalence, and with both messages being authentically true? The framing that makes
              HOLD welcome on Fox News and MSNBC.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>Different Frames, Same Practice</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>
              <p className={styles.strategyIntro}>
                The same practice, framed differently for different audiences. Each frame is true. Each leads
                to the same capacity-building work.
              </p>

              <div className={styles.mediaStrategy}>
                <div className={styles.strategyCard}>
                  <h3>Conservative Media (Fox News, Talk Radio)</h3>
                  <div className={styles.strategyPitch}>
                    <strong>Frame:</strong> Strength, self-control, anti-manipulation
                    <blockquote>
                      "Stop letting liberals control your emotional state. Every time you let them make you
                      angry, they win. HOLD is how you take back control. It's not weakness - it's strength.
                      It's refusing to be manipulated."
                    </blockquote>
                  </div>
                </div>

                <div className={styles.strategyCard}>
                  <h3>Progressive Media (MSNBC, NPR)</h3>
                  <div className={styles.strategyPitch}>
                    <strong>Frame:</strong> Strategic action, not becoming the oppressor
                    <blockquote>
                      "Reactivity is what the systems of oppression want from us. When we respond from outrage,
                      we become ineffective and often harmful. HOLD is how we stay strategic, grounded in
                      values, and effective in our resistance."
                    </blockquote>
                  </div>
                </div>

                <div className={styles.strategyCard}>
                  <h3>Independent/Long-Form (Joe Rogan, Lex Fridman)</h3>
                  <div className={styles.strategyPitch}>
                    <strong>Frame:</strong> Seeing through the game, thinking for yourself
                    <blockquote>
                      "The algorithms are designed to make you angry because anger drives engagement. Both
                      sides are being played. HOLD is how you opt out of the manipulation and actually think
                      for yourself instead of being triggered like everyone else."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>Does It Actually Work?</h2>
            <p className={styles.accordionTeaser}>
              The hard question: Is HOLD just another "calm down" technique that doesn't build real developmental
              capacity? Or does it actually reopen collapsed Threads? And what conditions must be present for
              this work to succeed?
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>Why It's Different and What Makes It Possible</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>
              <p className={styles.workIntro}>
                Legitimate concern: Is HOLD just another "calm down" technique that doesn't build real
                developmental capacity?
              </p>

              <h3>Why It's Different</h3>

              <div className={styles.reasonCard}>
                <h4>1. The "L" Step Does Real Work</h4>
                <p>
                  "Look for the tension" forces acknowledgment of polarities. You can't do this step without
                  beginning to hold what you've collapsed. It's not "see both sides" (which people resist) -
                  it's "name what feels irreconcilable." The naming itself is therapeutic.
                </p>
                <p>
                  When you articulate "I want to be connected to family AND I want to stand for what's right,"
                  you've already begun to hold both poles simultaneously. The CONSENT Thread is reopening.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <h4>2. The "D" Step Is Identity-Based</h4>
                <p>
                  "Who do you want to be?" is fundamentally different from "what's the right answer?" It shifts
                  from position-defense to character-formation. This is the BECOMING work.
                </p>
                <p>
                  You're not asking "how do I win this argument?" You're asking "who am I becoming through
                  this choice?" That's developmental, not behavioral.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <h4>3. Repeated Practice Builds Capacity</h4>
                <p>
                  Like physical exercise, each repetition of HOLD builds the neural pathways for holding
                  tension. It's not a one-time intervention but a practice that develops capacity over time.
                </p>
                <p>
                  The first time you HOLD, it's effortful and incomplete. The hundredth time, it becomes
                  more natural. That's capacity development.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <h4>4. The Frame Invites Rather Than Demands</h4>
                <p>
                  "Stop being manipulated" is something people <em>want</em>. They'll practice because it
                  serves their interests, and the Thread-opening happens as a byproduct.
                </p>
                <p>
                  This is different from "you should be more civil" or "try to understand the other side" -
                  frames that trigger resistance. HOLD gives people agency: take back control of your own mind.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <h4>5. It Leads to Deeper Work</h4>
                <p>
                  People who practice HOLD and experience results become curious about the underlying framework.
                  The on-ramp leads to the highway.
                </p>
                <p>
                  Simple entry point → experienced benefit → curiosity about mechanism → exposure to full
                  Threads framework → deeper capacity building.
                </p>
              </div>

              <h3>What Makes It Possible: The Five Key Factors</h3>
              <p className={styles.factorsIntro}>
                Can this actually work with adults whose Threads have been collapsed for decades? Honest
                answer: it's harder than with children. But it's possible. Here's what needs to be present:
              </p>

              <div className={styles.factorCard}>
                <h4>1. Shared Stakes</h4>
                <p>
                  People have to want the relationship/community/country more than they want to win. Without
                  shared investment in something beyond the argument itself, there's no motivation to do the
                  harder work of holding tension.
                </p>
                <p className={styles.example}>
                  <strong>Example:</strong> A family that wants to stay connected despite political difference.
                  A workplace that needs to function across political lines. A community that shares geography
                  even when they don't share values.
                </p>
              </div>

              <div className={styles.factorCard}>
                <h4>2. Small Groups</h4>
                <p>
                  Threads can't reopen in mass discourse. They reopen in actual human contact, face to face,
                  body to body. The practice requires the intimacy of small groups where people can be seen
                  and held.
                </p>
                <p className={styles.example}>
                  <strong>Why scale requires this:</strong> HOLD spreads through small group practice, not
                  through mass media alone. The 60-second video creates awareness, but the practice circles
                  build capacity.
                </p>
              </div>

              <div className={styles.factorCard}>
                <h4>3. Skilled Facilitation</h4>
                <p>
                  Someone who can name the Thread without taking sides on the content. Someone who can hold
                  space for genuine difficulty without collapsing into fixing or dismissing. Someone who has
                  done their own Thread work.
                </p>
                <p className={styles.example}>
                  <strong>What this means:</strong> The facilitator training isn't optional. HOLD is simple
                  enough for individual practice, but guiding others through collapsed Threads requires skill
                  and preparation.
                </p>
              </div>

              <div className={styles.factorCard}>
                <h4>4. Repeated Practice</h4>
                <p>
                  One conversation doesn't rebuild capacity. It takes sustained work. Weekly practice groups.
                  Regular check-ins. Integration into daily life. The commitment to keep returning when it's
                  hard.
                </p>
                <p className={styles.example}>
                  <strong>The rhythm:</strong> Not a workshop you attend once, but a practice you maintain. Like
                  physical therapy or meditation—the benefits come from repetition over time.
                </p>
              </div>

              <div className={styles.factorCard}>
                <h4>5. Permission to Fail</h4>
                <p>
                  People will collapse. The practice is noticing and returning, not achieving perfection. If
                  collapse is treated as failure rather than information, people will perform rather than
                  practice.
                </p>
                <p className={styles.example}>
                  <strong>The culture shift:</strong> "I collapsed" becomes a useful observation, not a shameful
                  admission. "Let me try that again" becomes normalized. Failure is part of the practice, not
                  a sign the practice isn't working.
                </p>
              </div>

              <div className={styles.successNote}>
                <p>
                  <strong>When these five factors are present, Threads can reopen even in adults with decades
                  of collapse.</strong> The Right Relations work at UUFBR is evidence. It's not easy. It's not
                  fast. But it's possible.
                </p>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>The Honest Limitations</h2>
            <p className={styles.accordionTeaser}>
              HOLD won't reach everyone. Some people are too collapsed, too fused with their position, too
              rewarded by their outrage. But that's okay—because the goal isn't universal adoption. It's
              reaching the moveable middle and changing the culture.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>What HOLD Can and Cannot Do</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>
              <div className={styles.limitationSection}>
                <h3>HOLD Won't Reach Everyone</h3>
                <p>
                  Some people are so collapsed, so fused with their position, so rewarded by their outrage,
                  that no entry point will work. They're not interested in choosing their response - they're
                  interested in winning, dominating, or performing their identity.
                </p>
                <p>
                  <strong>But that's okay.</strong>
                </p>
              </div>

              <div className={styles.limitationSection}>
                <h3>The Moveable Middle Strategy</h3>
                <p>
                  The goal isn't 100% adoption. The goal is reaching the <strong>moveable middle</strong> -
                  the people who are:
                </p>
                <ul>
                  <li>Exhausted by their own reactivity</li>
                  <li>Sensing something is wrong with how they're engaging</li>
                  <li>Wanting to be better but don't know how</li>
                  <li>Tired of being manipulated by outrage machines</li>
                  <li>Desiring genuine conversation across difference</li>
                </ul>
                <p>
                  That's a lot of people. Maybe most people.
                </p>
              </div>

              <div className={styles.limitationSection}>
                <h3>Cultural Shift Through Critical Mass</h3>
                <p>
                  As the practice spreads, it changes the culture. It becomes normal to HOLD rather than react.
                  The people who can't or won't HOLD become visibly out of step. Social pressure shifts.
                </p>
                <p>
                  This is how mindfulness went mainstream. Not by converting hardcore skeptics, but by reaching
                  enough people that it became normalized. The same path is available for HOLD.
                </p>
              </div>

              <div className={styles.limitationSection}>
                <h3>What HOLD Cannot Do</h3>
                <ul>
                  <li>Fix systemic injustice (it builds capacity to navigate the tensions, not solve the problems)</li>
                  <li>Eliminate disagreement (nor should it - disagreement is essential)</li>
                  <li>Make everyone moderate (you can HOLD from any political position)</li>
                  <li>Replace organizing, advocacy, or policy work (it's complementary, not substitute)</li>
                  <li>Work instantly (capacity develops through repeated practice)</li>
                </ul>
              </div>

              <div className={styles.limitationSection}>
                <h3>What HOLD Can Do</h3>
                <ul>
                  <li>Build capacity to stay in relationship across political difference</li>
                  <li>Reduce reactivity-driven harm in families, workplaces, communities</li>
                  <li>Create space for genuine dialogue where it's currently impossible</li>
                  <li>Help individuals reclaim agency over their responses</li>
                  <li>Provide shared language for navigating tension</li>
                  <li>Rebuild the substrate that democracy requires</li>
                </ul>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>Deep Dive: Critique From Major Players</h2>
            <p className={styles.accordionTeaser}>
              The serious critiques from the depolarization field: bridge-building vs. power-building, the
              asymmetry problem, the exhausted middle myth, the sedative effect, the neutrality trap. And
              how HOLD responds to each without false equivalence or evasion.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>Addressing the Serious Critiques</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>

              <div className={styles.critiqueCard}>
                <h3>Critique 1: Bridge-Building vs. Power-Building</h3>
                <div className={styles.critiqueStatement}>
                  "Calls for 'healing divisions' and unity are often criticized as not addressing the root
                  causes of the problems we are facing as a nation (e.g., inequality, racism, etc.).
                  Bridge-builders who maintain 'neutrality' can be seen as propping up the status quo and
                  not in solidarity with movement causes."
                </div>
                <div className={styles.critiqueResponse}>
                  <strong>HOLD's Response:</strong>
                  <p>
                    HOLD doesn't ask anyone to "meet in the middle" between oppressor and oppressed. It builds
                    capacity to hold the tension between multiple goods and competing values. Justice movements
                    need people who can hold the tension between "disrupt for transformation" AND "maintain
                    coalition." Between "call out harm" AND "call in learning." These aren't compromises -
                    they're polarities to navigate.
                  </p>
                  <p>
                    The "L" step explicitly names tensions rather than resolving them. "Safety AND freedom"
                    doesn't collapse into "moderate safety." It holds both as necessary, then asks: in this
                    context, how do I navigate?
                  </p>
                </div>
              </div>

              <div className={styles.critiqueCard}>
                <h3>Critique 2: The Asymmetry Problem</h3>
                <div className={styles.critiqueStatement}>
                  "It has always been challenging to get red voters to come and engage. The right-wing media
                  ecosystem plants suspicion on mainstream media outlets and 'others' the blue voters."
                </div>
                <div className={styles.critiqueResponse}>
                  <strong>HOLD's Response:</strong>
                  <p>
                    This is precisely why HOLD doesn't position itself as bridge-building. The conservative
                    frame is explicitly anti-manipulation: "Stop letting them control you." This speaks to
                    existing values (strength, independence, resistance to control) rather than asking people
                    to cross enemy lines.
                  </p>
                  <p>
                    HOLD meets conservatives where they are: "You're being played by outrage merchants who
                    profit from keeping you angry." That's not bridge-building language - it's
                    self-determination language.
                  </p>
                </div>
              </div>

              <div className={styles.critiqueCard}>
                <h3>Critique 3: The "Exhausted Middle" Myth</h3>
                <div className={styles.critiqueStatement}>
                  "Tactics of engaging the 'exhausted middle' are criticized as a waste of time because the
                  mythical moderate/independent voter is seen as 'wishy washy.' Instead, activating the base
                  is prioritized."
                </div>
                <div className={styles.critiqueResponse}>
                  <strong>HOLD's Response:</strong>
                  <p>
                    HOLD isn't for moderates. It's for anyone tired of being manipulated. You can be strongly
                    progressive or strongly conservative and benefit from HOLD. The practice doesn't moderate
                    your positions - it gives you agency over your responses.
                  </p>
                  <p>
                    Base activation works through outrage and reactivity. HOLD offers an alternative: activation
                    through values-grounded choice rather than triggered reaction. You can be just as committed,
                    just as passionate - and far more effective.
                  </p>
                </div>
              </div>

              <div className={styles.critiqueCard}>
                <h3>Critique 4: The Sedative Effect</h3>
                <div className={styles.critiqueStatement}>
                  "Intergroup contact can have a 'sedative effect' - reducing the urgency for collective action
                  among marginalized groups by making the status quo feel more tolerable."
                </div>
                <div className={styles.critiqueResponse}>
                  <strong>HOLD's Response:</strong>
                  <p>
                    HOLD doesn't create contact or ask people to tolerate injustice. It builds capacity to
                    choose strategic responses. For marginalized people, this might mean: "I can hold my rage
                    without letting it control me. I can channel it into effective action rather than
                    self-destructive reaction."
                  </p>
                  <p>
                    The "D" step asks "Who do you want to be?" - not "what will make others comfortable?"
                    Becoming someone who confronts injustice powerfully is a valid answer. HOLD doesn't
                    sedate - it channels.
                  </p>
                </div>
              </div>

              <div className={styles.critiqueCard}>
                <h3>Critique 5: The Neutrality Trap</h3>
                <div className={styles.critiqueStatement}>
                  "Even if you're 100% correct in your criticism that a stance/ideology is bad and divisive,
                  sometimes criticizing it will drive away people who may actually largely agree with you."
                </div>
                <div className={styles.critiqueResponse}>
                  <strong>HOLD's Response:</strong>
                  <p>
                    HOLD doesn't critique ideologies - it builds capacity. This sidesteps the neutrality trap
                    entirely. We're not saying "both sides are equally right/wrong." We're saying "both sides
                    have lost capacity to hold tension, just in opposite directions."
                  </p>
                  <p>
                    That's not false equivalence. It's symmetric diagnosis. A progressive with strong HOLD
                    capacity can pursue justice more effectively than one who's collapsed into reactive outrage.
                    A conservative with strong HOLD capacity can preserve tradition more wisely than one who's
                    collapsed into defensive rigidity.
                  </p>
                </div>
              </div>
            </div>
          </details>
          </div>

          <div className={styles.accordionSection}>
            <h2>Where Threads Fits: The Unique Contribution</h2>
            <p className={styles.accordionTeaser}>
              With hundreds of organizations already working on depolarization, what does Threads offer that's
              different? Not better communication techniques or moderate positions—but the underlying capacity
              that makes all other work possible.
            </p>

            <details className={styles.accordion}>
              <summary className={styles.accordionSummary}>
                <h3>The Gap Threads Addresses</h3>
                <span className={styles.accordionChevron}>▼</span>
              </summary>
              <div className={styles.accordionContent}>

              <div className={styles.contributionCard}>
                <h3>1. Diagnostic Precision</h3>
                <p>
                  Threads can name <em>which</em> capacity is collapsed in any given interaction. "Your CONSENT
                  is collapsed toward forced agreement" is more actionable than "you're being divisive."
                </p>
                <p>
                  This precision helps people understand what's actually happening, not just that "something
                  is wrong." When you can name the specific Thread collapse, you can work with it.
                </p>
              </div>

              <div className={styles.contributionCard}>
                <h3>2. Symmetric Critique</h3>
                <p>
                  Threads diagnoses both Left and Right as suffering the same collapses in opposite directions.
                  This isn't false equivalence - it's recognizing that the <em>capacity failure</em> is the
                  same even when the <em>content</em> differs.
                </p>
                <table className={styles.symmetricTable}>
                  <thead>
                    <tr>
                      <th>Capacity</th>
                      <th>Left Collapse</th>
                      <th>Right Collapse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PAUSE</td>
                      <td>Callout culture, immediate cancellation</td>
                      <td>Trigger the libs, provocation as sport</td>
                    </tr>
                    <tr>
                      <td>CONSENT</td>
                      <td>Forced agreement or exile</td>
                      <td>Forced exposure, "toughen up"</td>
                    </tr>
                    <tr>
                      <td>THRESHOLD</td>
                      <td>Over-protection, safety as absolute</td>
                      <td>No acknowledged limits, cruelty as strength</td>
                    </tr>
                    <tr>
                      <td>UNCERTAINTY</td>
                      <td>"The science is settled"</td>
                      <td>"The truth is obvious"</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={styles.contributionCard}>
                <h3>3. Apolitical Architecture</h3>
                <p>
                  Threads doesn't say which positions are correct. It builds capacity to hold tension. A
                  conservative with strong Threads and a progressive with strong Threads can disagree
                  vigorously and stay in relationship. That's what democracy requires.
                </p>
                <p>
                  This makes Threads genuinely apolitical in a way that most "bipartisan" efforts are not.
                  It's not offering a moderate position. It's offering the substrate that makes any position
                  navigable.
                </p>
              </div>

              <div className={styles.contributionCard}>
                <h3>4. Developmental Rather Than Behavioral</h3>
                <p>
                  Threads doesn't ask people to behave differently. It builds the capacity from which different
                  behavior naturally emerges. This is more sustainable than behavioral compliance.
                </p>
                <p>
                  When HOLD becomes internalized, you don't have to remember to "be civil" or "listen well."
                  The capacity to hold tension means those behaviors emerge organically.
                </p>
              </div>

              <div className={styles.contributionCard}>
                <h3>5. Individual AND Collective</h3>
                <p>
                  Threads works at both levels. Individual capacity-building (personal HOLD practice) AND
                  collective practices (HOLD Circles, community dialogue using Thread language, organizational
                  integration).
                </p>
                <p>
                  This dual-level approach means change can happen from multiple directions: individuals
                  bringing capacity to their contexts, and contexts building capacity in individuals.
                </p>
              </div>

              <div className={styles.contributionSummary}>
                <h3>The Gap Threads Addresses</h3>
                <p>
                  Almost no one in the civic space is working on the <em>developmental capacity</em> that
                  makes all other work possible. Everyone assumes people can:
                </p>
                <ul>
                  <li>Listen without defending (requires PAUSE)</li>
                  <li>Stay grounded in experience (requires EMBODIMENT)</li>
                  <li>Allow legitimate disagreement (requires CONSENT)</li>
                  <li>Hold discomfort without collapsing (requires THRESHOLD)</li>
                  <li>Examine inherited stories (requires MEMORY)</li>
                  <li>Remain genuinely open (requires UNCERTAINTY)</li>
                  <li>Allow evolution (requires BECOMING)</li>
                </ul>
                <p>
                  <strong>Threads builds the capacity everyone else assumes.</strong> That's the gap. That's
                  the unique contribution.
                </p>
              </div>
            </div>
          </details>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Hold;
