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

      {/* The Problem We're Addressing */}
      <section className={`${styles.problem} section-lg`}>
        <div className="container">
          <h2>The Problem We're Addressing</h2>

          <div className={styles.problemContent}>
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
                  <li><strong>Immediate rage</strong> - PAUSE collapsed</li>
                  <li><strong>Argument from pure position</strong> - EMBODIMENT collapsed</li>
                  <li><strong>He's simply wrong and bad</strong> - CONSENT collapsed (no legitimate disagreement)</li>
                  <li><strong>Must defeat/shame him</strong> - THRESHOLD collapsed (attack mode)</li>
                  <li><strong>He's always been like this</strong> - MEMORY collapsed (fixed story)</li>
                  <li><strong>I KNOW I'm right</strong> - UNCERTAINTY collapsed</li>
                  <li><strong>He'll never change / I can't change</strong> - BECOMING collapsed</li>
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

          <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>
              <h2>For Both Sides: Different Doors, Same Practice</h2>
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

          {/* The Practice Progression */}
          <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>
              <h2>The Practice Progression</h2>
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
                  <li>Introduction to the seven Threads as underlying framework</li>
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

          {/* Five Pilot Opportunities */}
          <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>
              <h2>Five Pilot Opportunities</h2>
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

          {/* The Other Players */}
          <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>
              <h2>The Other Players in This Space</h2>
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

          {/* How HOLD Integrates */}
          <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>
              <h2>How HOLD Integrates With Existing Organizations</h2>
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

          {/* The Media Strategy */}
          <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>
              <h2>The Media Strategy</h2>
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

          {/* Does It Actually Work? */}
          <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>
              <h2>Does It Actually Work?</h2>
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
            </div>
          </details>

          {/* The Honest Limitations */}
          <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>
              <h2>The Honest Limitations</h2>
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

          {/* Deep Dive: Critique From Major Players */}
          <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>
              <h2>Deep Dive: Critique From Major Players</h2>
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

          {/* Where Threads Fits */}
          <details className={styles.accordion}>
            <summary className={styles.accordionSummary}>
              <h2>Where Threads Fits: The Unique Contribution</h2>
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
      </section>

    </div>
  );
};

export default Hold;
