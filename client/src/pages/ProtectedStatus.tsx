import React from 'react';
import styles from './ProtectedStatus.module.css';

const ProtectedStatus: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1>Beyond Protection: Building Capacity, Not Dependency</h1>
        <p className={styles.heroTagline}>A critical examination of S.A.F.E. from developmental psychology and lived experience</p>
      </section>

      {/* The Urgent Question */}
      <section className={`${styles.content} section-lg`}>
        <div className="container">
          <h2>The Urgent Question</h2>
          <div className={styles.urgentBox}>
            <p className={styles.urgentQuestion}>
              <strong>From a Developmental Psychology standpoint, is S.A.F.E. actually "safe"?</strong>
            </p>
            <p>
              Are we threading a needle when we need to cover the burning victim with a fire blanket?
              That's the urgency we're facing when people look at this approach, no?
            </p>
            <p className={styles.emphasis}>
              <strong>Do traditional approaches collapse toward NOW where S.A.F.E. tries to hold both NOW and NOT YET?</strong>
            </p>
            <p>Is there any real wisdom here or is this just wishful thinking?</p>
          </div>
        </div>
      </section>

      {/* Personal Stake */}
      <section className={`${styles.personalStake} section-lg`}>
        <div className="container">
          <h2>The Personal Stake</h2>
          <div className={styles.stakeBox}>
            <p className={styles.stakeAuthor}>From the author:</p>
            <blockquote className={styles.quote}>
              "As a bullying victim, I spent a life avoiding conflict when I should have been learning to hold the tension
              with honesty and courage. The traditional approach, from STOMP OUT Bullying and others, involves comebacks,
              crisis intervention, and aligning with protected groups. But are we not coddling? Are we not teaching people
              that being in a protected group means that the purpose of authority is to enforce the undisputed rightness
              of the protected group and the wrongness of those who might ever have legitimate questions of fairness and true equity?"
            </blockquote>

            <div className={styles.tension}>
              <h3>The tension:</h3>
              <ul>
                <li>I needed protection AND I needed to learn capacity</li>
                <li>I needed adults to intervene AND I needed to learn agency</li>
                <li>I needed to be seen as vulnerable AND I needed to not be defined by my vulnerability</li>
              </ul>
              <p className={styles.critical}>
                <strong>What if the traditional approach gave me the fire blanket but never taught me how to handle fire?</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collapse Toward NOW */}
      <section className={`${styles.collapse} section-lg`}>
        <div className="container">
          <h2>The Collapse Toward NOW</h2>

          <div className={styles.traditionalBox}>
            <h3>Traditional Approaches: Protect the Victim NOW</h3>

            <div className={styles.brilliant}>
              <h4>What they do brilliantly:</h4>
              <ul>
                <li>Stop the harm immediately</li>
                <li>Validate the victim's pain</li>
                <li>Create consequences for the aggressor</li>
                <li>Establish clear boundaries (this is not okay)</li>
                <li>Provide crisis support</li>
              </ul>
            </div>

            <div className={styles.collapsePoints}>
              <h4>Where they collapse:</h4>
              <div className={styles.collapsePoint}>
                <strong>Binary framing:</strong>
                <p>You're either victim (powerless) or bully (powerful). No third option.</p>
              </div>
              <div className={styles.collapsePoint}>
                <strong>Learned helplessness:</strong>
                <p>"Tell an adult to fix it" becomes "I can't fix it myself"</p>
              </div>
              <div className={styles.collapsePoint}>
                <strong>Protected status becomes identity:</strong>
                <p>"I'm bullied because I'm [different/sensitive/LGBTQ+/etc.]" becomes permanent self-definition</p>
              </div>
              <div className={styles.collapsePoint}>
                <strong>Authority dependence:</strong>
                <p>Safety only exists when an adult is enforcing it</p>
              </div>
              <div className={styles.collapsePoint}>
                <strong>No exit ramp:</strong>
                <p>Once you're a victim, you stay a victim. Once you're a bully, you stay a bully.</p>
              </div>
            </div>

            <div className={styles.unintendedBox}>
              <h4>The unintended consequence:</h4>
              <p>
                Students learn that being in a protected group means the purpose of authority is to enforce the undisputed
                rightness of the protected group and the wrongness of those who might ever have legitimate questions of
                fairness and true equity.
              </p>
              <p className={styles.translation}>
                <strong>Translation:</strong> Power comes from victimhood status, not from capacity. The goal becomes
                maintaining victim status (because that's where protection comes from), not building the capacity to navigate conflict.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S.A.F.E. Risk */}
      <section className={`${styles.risk} section-lg`}>
        <div className="container">
          <h2>The S.A.F.E. Risk: Are We Threading a Needle?</h2>

          <div className={styles.critiqueBox}>
            <h3>The Valid Critique</h3>
            <div className={styles.tooSlow}>
              <h4>What if S.A.F.E. is too slow?</h4>
              <ul>
                <li>The kid is being tormented NOW</li>
                <li>The parent wants intervention NOW</li>
                <li>The principal needs to show action NOW</li>
                <li>The community demands safety NOW</li>
              </ul>
            </div>

            <div className={styles.safeSays}>
              <p><strong>S.A.F.E. says:</strong></p>
              <p>"Let's hold the tension. Let's build capacity. Let's not collapse into victim/aggressor."</p>
            </div>

            <div className={styles.victimSays}>
              <p><strong>But the burning victim says:</strong></p>
              <p>"I don't need tension-holding. I need you to PUT OUT THE FIRE."</p>
            </div>
          </div>

          <div className={styles.honestAnswer}>
            <h3>The Honest Answer: Both Are True</h3>
            <p className={styles.feelStep}>
              <strong>This is the FEEL step applied to the framework itself:</strong>
            </p>

            <div className={styles.bothTrue}>
              <div className={styles.traditionalRight}>
                <h4>Traditional approaches are right:</h4>
                <p>
                  Some situations require immediate intervention. SEE & ACT protocol exists for this reason.
                  When a child is being physically harmed, when abuse is occurring, when suicide is imminent—you
                  don't facilitate a S.A.F.E. conversation. You act.
                </p>
              </div>

              <div className={styles.safeRight}>
                <h4>S.A.F.E. is right:</h4>
                <p>
                  Most daily conflicts (35-45 per day in an average elementary classroom) are NOT crisis. They're tension.
                  And if we treat every tension as crisis, we never build capacity.
                </p>
              </div>
            </div>

            <div className={styles.needle}>
              <h4>The needle we're threading:</h4>
              <ul>
                <li><strong>Now:</strong> Stop the harm when it's happening</li>
                <li><strong>Not Yet:</strong> Build the capacity so harm doesn't keep happening</li>
              </ul>
              <p className={styles.needleConclusion}>
                Traditional approaches do NOW brilliantly. They fail at NOT YET.<br />
                S.A.F.E. addresses NOT YET. It still needs NOW (that's why SEE & ACT exists).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Evidence */}
      <section className={`${styles.research} section-lg`}>
        <div className="container">
          <h2>The Developmental Psychology Evidence</h2>
          <p className={styles.researchIntro}>What Research Actually Says</p>

          <div className={styles.researchGrid}>
            {/* 1. Learned Helplessness */}
            <div className={styles.researchCard}>
              <h3>1. Learned Helplessness</h3>
              <p className={styles.researcher}>Seligman, 1967-present</p>

              <div className={styles.finding}>
                <h4>Finding:</h4>
                <p>
                  When individuals are repeatedly exposed to uncontrollable negative events and learn that their actions
                  don't affect outcomes, they develop learned helplessness—a state where they stop trying to change their
                  circumstances even when escape becomes possible.
                </p>
              </div>

              <div className={styles.applied}>
                <h4>Applied to bullying:</h4>
                <div className={styles.comparison}>
                  <div className={styles.traditionalApproach}>
                    <strong>Traditional approach:</strong>
                    <p>"Tell an adult to fix it" → Child learns they have no control → Helplessness</p>
                  </div>
                  <div className={styles.safeApproach}>
                    <strong>S.A.F.E. approach:</strong>
                    <p>"What do YOU notice? What do YOU need? Who do YOU want to be?" → Child learns they have choices → Agency</p>
                  </div>
                </div>
              </div>

              <div className={styles.researchSupport}>
                <h4>Research support:</h4>
                <p>
                  Seligman's work on learned optimism shows that teaching children to see events as changeable (not permanent),
                  specific (not pervasive), and influenced by their choices (not external) builds resilience.
                </p>
                <p className={styles.mapping}>
                  <strong>S.A.F.E. maps directly to this:</strong> The EMERGE step ("Who do you want to be?") is teaching internal locus of control.
                </p>
              </div>
            </div>

            {/* 2. Self-Determination Theory */}
            <div className={styles.researchCard}>
              <h3>2. Self-Determination Theory</h3>
              <p className={styles.researcher}>Deci & Ryan, 1985-present</p>

              <div className={styles.finding}>
                <h4>Finding:</h4>
                <p>
                  Humans have three basic psychological needs: <strong>Autonomy, Competence, and Relatedness</strong>.
                  When these are supported, people thrive. When they're thwarted, people collapse.
                </p>
              </div>

              <div className={styles.applied}>
                <h4>Applied to bullying:</h4>
                <div className={styles.needsGrid}>
                  <div className={styles.need}>
                    <h5>Autonomy:</h5>
                    <p>Do I have a say in what happens to me?</p>
                  </div>
                  <div className={styles.need}>
                    <h5>Competence:</h5>
                    <p>Do I have the skills to navigate this?</p>
                  </div>
                  <div className={styles.need}>
                    <h5>Relatedness:</h5>
                    <p>Do I belong, even in conflict?</p>
                  </div>
                </div>

                <div className={styles.comparison}>
                  <div className={styles.traditionalApproach}>
                    <strong>Traditional approach:</strong>
                    <ul>
                      <li><strong>Autonomy:</strong> NO (adults decide and fix)</li>
                      <li><strong>Competence:</strong> NO (I'm told I can't handle it—tell an adult)</li>
                      <li><strong>Relatedness:</strong> CONDITIONAL (I belong if I'm the victim; I'm cast out if I'm the aggressor)</li>
                    </ul>
                  </div>
                  <div className={styles.safeApproach}>
                    <strong>S.A.F.E. approach:</strong>
                    <ul>
                      <li><strong>Autonomy:</strong> YES (I choose who I want to become)</li>
                      <li><strong>Competence:</strong> YES (I'm learning to hold tension)</li>
                      <li><strong>Relatedness:</strong> YES (everyone's becoming, no one's cast out)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.researchSupport}>
                <h4>Research support:</h4>
                <p>
                  Decades of SDT research show that autonomy-supportive environments (where people feel they have choice and voice)
                  lead to better outcomes in mental health, academic achievement, and social development.
                </p>
              </div>
            </div>

            {/* 3. Identity Development */}
            <div className={styles.researchCard}>
              <h3>3. Identity Development</h3>
              <p className={styles.researcher}>Erikson, Marcia, 1950s-present</p>

              <div className={styles.finding}>
                <h4>Finding:</h4>
                <p>
                  Adolescent identity formation requires <strong>exploration</strong> (trying on different selves) and
                  <strong>commitment</strong> (choosing who you want to be). Identity foreclosure (accepting an identity
                  given by others without exploration) leads to poor outcomes.
                </p>
              </div>

              <div className={styles.applied}>
                <h4>Applied to bullying:</h4>
                <div className={styles.comparison}>
                  <div className={styles.traditionalApproach}>
                    <strong>Traditional approach:</strong>
                    <p>Identity foreclosure. "You're the victim. They're the bully. Stay in your lane."</p>
                  </div>
                  <div className={styles.safeApproach}>
                    <strong>S.A.F.E. approach:</strong>
                    <p>Identity exploration. "Who do you want to EMERGE as? You get to choose."</p>
                  </div>
                </div>
              </div>

              <div className={styles.researchSupport}>
                <h4>Research support:</h4>
                <p>
                  James Marcia's identity status research shows that adolescents who achieve identity (exploration + commitment)
                  have higher self-esteem, better relationships, and more resilience than those who foreclose (accept identity without exploration).
                </p>
                <p className={styles.mapping}>
                  <strong>S.A.F.E.'s EMERGE step is literally teaching identity achievement.</strong>
                </p>
              </div>
            </div>

            {/* 4. Constructive Controversy */}
            <div className={styles.researchCard}>
              <h3>4. Constructive Controversy</h3>
              <p className={styles.researcher}>Johnson & Johnson, 1979-present</p>

              <div className={styles.finding}>
                <h4>Finding:</h4>
                <p>
                  When students learn to engage controversy constructively (holding opposing views in tension, exploring both sides,
                  integrating perspectives), they develop higher-order thinking, better problem-solving, and stronger relationships.
                </p>
              </div>

              <div className={styles.applied}>
                <h4>Applied to bullying:</h4>
                <div className={styles.comparison}>
                  <div className={styles.traditionalApproach}>
                    <strong>Traditional approach:</strong>
                    <p>No controversy. Victim is right, bully is wrong. Case closed.</p>
                  </div>
                  <div className={styles.safeApproach}>
                    <strong>S.A.F.E. approach:</strong>
                    <p>Controversy as learning. "Can both needs be real? Can you hold that tension?"</p>
                  </div>
                </div>
              </div>

              <div className={styles.researchSupport}>
                <h4>Research support:</h4>
                <p>
                  50+ years of research by David and Roger Johnson shows that students who learn to engage controversy
                  (not avoid it or collapse into win/lose) develop:
                </p>
                <ul>
                  <li>Higher achievement</li>
                  <li>Better retention of learning</li>
                  <li>More creativity</li>
                  <li>Healthier relationships</li>
                </ul>
                <p className={styles.mapping}>
                  <strong>S.A.F.E.'s ASK and FEEL steps are teaching constructive controversy.</strong>
                </p>
              </div>
            </div>

            {/* 5. Emotional Granularity */}
            <div className={styles.researchCard}>
              <h3>5. Emotional Granularity</h3>
              <p className={styles.researcher}>Barrett, Kashdan, 2000s-present</p>

              <div className={styles.finding}>
                <h4>Finding:</h4>
                <p>
                  The ability to make fine-grained distinctions between emotions (emotional granularity) predicts better
                  emotion regulation, mental health, and social functioning.
                </p>
              </div>

              <div className={styles.applied}>
                <h4>Applied to bullying:</h4>
                <div className={styles.comparison}>
                  <div className={styles.traditionalApproach}>
                    <strong>Traditional approach:</strong>
                    <p>Coarse emotions. "I'm hurt." "I'm angry." "I'm scared."</p>
                  </div>
                  <div className={styles.safeApproach}>
                    <strong>S.A.F.E. approach:</strong>
                    <p>Granular emotions. "I feel left out AND I want to belong AND I'm worried about being myself AND I'm scared to ask."</p>
                  </div>
                </div>
              </div>

              <div className={styles.researchSupport}>
                <h4>Research support:</h4>
                <p>Lisa Feldman Barrett's work shows that people with high emotional granularity:</p>
                <ul>
                  <li>Regulate emotions more effectively</li>
                  <li>Are less likely to use maladaptive coping (aggression, substance use)</li>
                  <li>Have better social relationships</li>
                </ul>
                <p className={styles.mapping}>
                  <strong>S.A.F.E.'s FEEL step is teaching emotional granularity: "Can you feel both sides?"</strong>
                </p>
              </div>
            </div>

            {/* 6. Growth Mindset */}
            <div className={styles.researchCard}>
              <h3>6. Growth Mindset</h3>
              <p className={styles.researcher}>Dweck, 1980s-present</p>

              <div className={styles.finding}>
                <h4>Finding:</h4>
                <p>
                  Students who believe their abilities can grow with effort (growth mindset) outperform those who believe
                  abilities are fixed (fixed mindset).
                </p>
              </div>

              <div className={styles.applied}>
                <h4>Applied to bullying:</h4>
                <div className={styles.comparison}>
                  <div className={styles.traditionalApproach}>
                    <strong>Traditional approach:</strong>
                    <p>Fixed mindset. "You're a victim (can't change)." "You're a bully (can't change)."</p>
                  </div>
                  <div className={styles.safeApproach}>
                    <strong>S.A.F.E. approach:</strong>
                    <p>Growth mindset. "You're BECOMING. Who do you want to become?"</p>
                  </div>
                </div>
              </div>

              <div className={styles.researchSupport}>
                <h4>Research support:</h4>
                <p>Carol Dweck's decades of research show that growth mindset predicts:</p>
                <ul>
                  <li>Higher achievement</li>
                  <li>Greater resilience after failure</li>
                  <li>More willingness to take on challenges</li>
                  <li>Better response to criticism</li>
                </ul>
                <p className={styles.mapping}>
                  <strong>S.A.F.E.'s entire framework is built on BECOMING—the ultimate growth mindset.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protected Status Problem */}
      <section className={`${styles.protectedStatus} section-lg`}>
        <div className="container">
          <h2>The Protected Status Problem</h2>
          <h3 className={styles.endangeredQuestion}>When Does Anyone Come Off the Endangered List?</h3>

          <div className={styles.critiqueValid}>
            <p className={styles.validIntro}>The critique is valid and urgent:</p>
            <p>Traditional anti-bullying approaches create a system where:</p>
            <ol>
              <li><strong>Victimhood becomes identity:</strong> "I'm bullied because I'm [different]"</li>
              <li><strong>Protection becomes the goal:</strong> Authority enforces my rightness, others' wrongness</li>
              <li><strong>No exit:</strong> Once you're in a protected class, staying there is how you maintain safety</li>
              <li><strong>Power inversion:</strong> The weak become powerful through victimhood status, but it's borrowed power (comes from enforcers, not from self)</li>
            </ol>
          </div>

          <div className={styles.thisCreates}>
            <h4>This creates:</h4>
            <div className={styles.createsGrid}>
              <div className={styles.creates}>
                <h5>Victim dependency</h5>
                <p>Safety only exists when authority is present to enforce it</p>
              </div>
              <div className={styles.creates}>
                <h5>Resentment</h5>
                <p>Those not in protected groups see unfairness ("They can do no wrong")</p>
              </div>
              <div className={styles.creates}>
                <h5>Arrested development</h5>
                <p>Victims never learn to navigate tension, aggressors never learn repair</p>
              </div>
              <div className={styles.creates}>
                <h5>False equity</h5>
                <p>We call it equity, but it's just inverted hierarchy (protected class on top, others below)</p>
              </div>
            </div>

            <div className={styles.devastatingOutcome}>
              <h4>The devastating outcome:</h4>
              <p>
                Students learn that the path to safety is through protected status, not through capacity.
                They learn to maintain vulnerability (because that's where protection comes from), not to build strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S.A.F.E.'s Response */}
      <section className={`${styles.response} section-lg`}>
        <div className="container">
          <h2>S.A.F.E.'s Response: Exit Ramps for Everyone</h2>

          <div className={styles.exitRampsGrid}>
            <div className={styles.exitRamp}>
              <h3>1. No Permanent Roles</h3>
              <div className={styles.comparison}>
                <div className={styles.traditionalWay}>
                  <strong>Traditional:</strong> "You're the victim" (permanent)
                </div>
                <div className={styles.safeWay}>
                  <strong>S.A.F.E.:</strong> "You're feeling hurt right now AND you're choosing who you want to be" (temporary state, ongoing choice)
                </div>
              </div>
            </div>

            <div className={styles.exitRamp}>
              <h3>2. Power Comes From Within, Not From Authority</h3>
              <div className={styles.comparison}>
                <div className={styles.traditionalWay}>
                  <strong>Traditional:</strong> "Tell an adult to enforce your rightness"
                </div>
                <div className={styles.safeWay}>
                  <strong>S.A.F.E.:</strong> "What do YOU choose? Who do YOU want to become?"
                </div>
              </div>
            </div>

            <div className={styles.exitRamp}>
              <h3>3. Both Sides Have Needs (Not Both Sides Are Right)</h3>
              <p className={styles.criticalNuance}>This is critical nuance:</p>
              <div className={styles.comparison}>
                <div className={styles.traditionalWay}>
                  <strong>Traditional:</strong> "Your needs are right, their needs are wrong" (zero-sum)
                </div>
                <div className={styles.safeWay}>
                  <strong>S.A.F.E.:</strong> "Both sides have needs—BOTH ARE REAL. How do we hold that?" (complexity)
                </div>
              </div>

              <div className={styles.example}>
                <h4>Example:</h4>
                <p className={styles.scenario}>
                  Kid A (LGBTQ+) is being called slurs by Kid B
                </p>

                <div className={styles.scenarioComparison}>
                  <div className={styles.traditionalScenario}>
                    <strong>Traditional:</strong>
                    <p>Kid A is victim (protected status). Kid B is homophobic (wrong). Authority enforces A's rightness, B's wrongness.</p>
                  </div>

                  <div className={styles.safeScenario}>
                    <strong>S.A.F.E.:</strong>
                    <ul>
                      <li><strong>SEE:</strong> "What's happening? Kid A is being hurt by words that attack their identity. Kid B is angry about something."</li>
                      <li><strong>ASK:</strong> "What's the tension? Kid A needs to be seen and safe. Kid B is... what? Scared? Threatened by difference? Acting out religious training? Trying to fit in?"</li>
                      <li><strong>FEEL:</strong> "Can both needs be real? Kid A needs safety. Kid B needs... what? Understanding? Belonging? Permission to question what they've been taught?"</li>
                      <li><strong>EMERGE:</strong> "Who does Kid A want to be? Someone whose identity is validated by authority? Or someone who knows who they are regardless of what others say? Who does Kid B want to be? Someone who makes others small to feel big? Or someone who can hold their own questions without attacking?"</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.notBothSides}>
                  <h4>This is NOT "both sides are the same."</h4>
                  <ul>
                    <li>Kid B's behavior is NOT okay (that's non-negotiable)</li>
                    <li>Consequences may still apply</li>
                    <li>But Kid A builds capacity (not just borrowed authority-power)</li>
                    <li>And Kid B learns repair (not just punishment)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.exitRamp}>
              <h3>4. Protected Groups Need Protection AND Capacity</h3>
              <p className={styles.bothAnd}>The both/and:</p>
              <div className={styles.protectedNeed}>
                <div className={styles.yes}>
                  <strong>YES:</strong>
                  <p>LGBTQ+ students need schools to be safe (policies, consequences, education)</p>
                </div>
                <div className={styles.and}>
                  <strong>AND:</strong>
                  <p>
                    LGBTQ+ students need to learn "I can be hurt by words AND not be defined by them.
                    I can be different AND not need everyone to agree. I can be me AND know that my worth
                    isn't determined by others' acceptance."
                  </p>
                </div>
              </div>
              <p className={styles.notCoddling}>
                <strong>This isn't coddling the aggressor. This is empowering the victim beyond what authority alone can provide.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When S.A.F.E. Is NOT Enough */}
      <section className={`${styles.notEnough} section-lg`}>
        <div className="container">
          <h2>The Honest Tension: When Is S.A.F.E. NOT Enough?</h2>

          <div className={styles.essentialBox}>
            <h3>Where Traditional Approaches Are Essential</h3>
            <p className={styles.notReplacement}>S.A.F.E. is NOT a replacement for:</p>

            <div className={styles.essentialGrid}>
              <div className={styles.essential}>
                <h4>1. Crisis intervention</h4>
                <p>
                  (STOMP OUT HelpChat): When a student is suicidal, you don't facilitate tension-holding. You save their life.
                </p>
              </div>

              <div className={styles.essential}>
                <h4>2. Legal protection</h4>
                <p>
                  (Title IX, anti-discrimination policies): LGBTQ+ students, students of color, students with disabilities
                  NEED legal protections. Authority MUST enforce their safety.
                </p>
              </div>

              <div className={styles.essential}>
                <h4>3. Immediate physical safety</h4>
                <p>
                  (SEE & ACT): When violence is happening NOW, you intervene. S.A.F.E. comes after safety is secured.
                </p>
              </div>

              <div className={styles.essential}>
                <h4>4. Systemic advocacy</h4>
                <p>
                  (STOMP OUT's inclusivity campaigns): Schools need policies, training, cultural change.
                  S.A.F.E. works within that context, not instead of it.
                </p>
              </div>

              <div className={styles.essential}>
                <h4>5. Power differential situations</h4>
                <p>
                  When one student has systematic power over another (age, size, social status, disability),
                  you can't ask the vulnerable student to "hold tension" with their oppressor. You intervene.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.essentialBox}>
            <h3>Where S.A.F.E. Is Essential (And Traditional Approaches Fail)</h3>
            <p className={styles.notReplacement}>S.A.F.E. is needed for:</p>

            <div className={styles.essentialGrid}>
              <div className={styles.essential}>
                <h4>1. Daily micro-conflicts</h4>
                <p>(35-45 per day): These don't need crisis intervention. They need capacity-building.</p>
              </div>

              <div className={styles.essential}>
                <h4>2. Identity formation</h4>
                <p>Kids need to learn "I'm not defined by what others say/do. I'm becoming who I choose to be."</p>
              </div>

              <div className={styles.essential}>
                <h4>3. Exit ramps from victim/aggressor roles</h4>
                <p>Traditional programs trap kids in these roles. S.A.F.E. offers escape.</p>
              </div>

              <div className={styles.essential}>
                <h4>4. Long-term resilience</h4>
                <p>Protecting someone doesn't teach them to protect themselves. S.A.F.E. does.</p>
              </div>

              <div className={styles.essential}>
                <h4>5. True equity</h4>
                <p>Not "authority enforces your rightness" but "you have the capacity to hold your own in complexity."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Verdict */}
      <section className={`${styles.verdict} section-lg`}>
        <div className="container">
          <h2>The Verdict: Wisdom or Wishful Thinking?</h2>

          <div className={styles.verdictGrid}>
            <div className={styles.wisdomBox}>
              <h3>Wisdom</h3>
              <p><strong>S.A.F.E. is wise because:</strong></p>
              <ol>
                <li><strong>Research-aligned:</strong> Maps to 50+ years of developmental psychology (learned helplessness, SDT, identity development, constructive controversy, growth mindset)</li>
                <li><strong>Addresses the real problem:</strong> Most conflicts (90-95%) are tension, not crisis. Traditional approaches treat all tension as crisis.</li>
                <li><strong>Builds capacity:</strong> Doesn't just protect—teaches kids to navigate</li>
                <li><strong>Offers exit ramps:</strong> From victim, aggressor, bystander roles</li>
                <li><strong>Targets the right age:</strong> Elementary (5-11) is when patterns form</li>
                <li><strong>Empowers, not coddles:</strong> Gives tools, not just rescue</li>
              </ol>
            </div>

            <div className={styles.wishfulBox}>
              <h3>Wishful Thinking</h3>
              <p><strong>S.A.F.E. is wishful thinking if:</strong></p>
              <ol>
                <li><strong>We pretend it's enough alone:</strong> Without crisis support, legal protections, consequences for harm—it's insufficient</li>
                <li><strong>We skip training:</strong> Teachers can't just "do S.A.F.E." without deep understanding of Threads</li>
                <li><strong>We ignore power differentials:</strong> Some situations require intervention, not tension-holding</li>
                <li><strong>We ask too much of kids:</strong> If we expect 5-year-olds to do therapy-level work, we're setting them up to fail</li>
                <li><strong>We don't measure:</strong> If we can't show that incidents decline and capacity increases, it's just philosophy</li>
              </ol>
            </div>
          </div>

          <div className={styles.finalTension}>
            <h3>The Both/And We Must Hold</h3>

            <div className={styles.finalBothAnd}>
              <div className={styles.finalSide}>
                <h4>Traditional approaches are RIGHT:</h4>
                <ul>
                  <li>Kids need protection</li>
                  <li>Authority must intervene</li>
                  <li>Some situations require immediate action</li>
                  <li>Vulnerable students need to know adults will keep them safe</li>
                </ul>
              </div>

              <div className={styles.finalSide}>
                <h4>S.A.F.E. is ALSO RIGHT:</h4>
                <ul>
                  <li>Kids need capacity, not just protection</li>
                  <li>Identity must be chosen, not assigned</li>
                  <li>Most situations benefit from tension-holding, not just intervention</li>
                  <li>Vulnerable students need to know THEY can keep themselves safe (eventually)</li>
                </ul>
              </div>
            </div>

            <div className={styles.needleThreading}>
              <h4>The needle we're threading:</h4>
              <ul>
                <li><strong>Protect AND empower</strong></li>
                <li><strong>Intervene AND build capacity</strong></li>
                <li><strong>Validate vulnerability AND teach strength</strong></li>
                <li><strong>Provide safety AND expect growth</strong></li>
              </ul>

              <p className={styles.hard}>
                This is hard. Threading a needle is always harder than throwing a blanket.
              </p>

              <p className={styles.blanket}>
                <strong>But the blanket only keeps them warm while you're holding it.</strong>
              </p>

              <p className={styles.needle}>
                <strong>The threaded needle becomes a tool they can use to stitch their own life together.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className={`${styles.conclusion} section-lg`}>
        <div className="container">
          <h2>Conclusion: The Endangered List Question</h2>

          <div className={styles.conclusionBox}>
            <h3>When does anyone come off the endangered list?</h3>

            <div className={styles.answers}>
              <div className={styles.traditionalAnswer}>
                <h4>Traditional answer:</h4>
                <p>Never. Your protection is permanent because your vulnerability is permanent.</p>
              </div>

              <div className={styles.safeAnswer}>
                <h4>S.A.F.E. answer:</h4>
                <p>
                  You were never ON the list—you're human. Humans experience vulnerability AND develop capacity.
                  Both are real. Both matter. Neither defines you permanently.
                </p>
              </div>
            </div>

            <div className={styles.goal}>
              <p><strong>The goal isn't to keep you safe from all harm (impossible).</strong></p>
              <p>
                <strong>The goal is to teach you to hold tension so you can navigate harm without collapsing
                into helplessness OR hardness.</strong>
              </p>
            </div>

            <div className={styles.finalStatements}>
              <p className={styles.statement}>That's not coddling. <strong>That's empowerment.</strong></p>
              <p className={styles.statement}>That's not wishful thinking. <strong>That's wisdom backed by research.</strong></p>
              <p className={styles.statement}>That's not threading an unnecessary needle. <strong>That's building a tool for life.</strong></p>
            </div>

            <div className={styles.honestDialogue}>
              <p className={styles.dialogueIntro}>
                <em>Written in honest dialogue with the urgent question:</em><br />
                <em>Is S.A.F.E. actually safe, or are we experimenting on children while they burn?</em>
              </p>

              <div className={styles.finalAnswer}>
                <p><strong>The answer: S.A.F.E. is safe enough when it's part of a complete system.</strong></p>
                <p>Alone, it's not enough.</p>
                <p>But traditional approaches alone aren't enough either.</p>
                <p><strong>Together, they might be.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Continue Exploring S.A.F.E.</h2>
          <p>Ready to see how this research translates into practical classroom implementation?</p>
          <div className={styles.ctaButtons}>
            <a href="/safe" className={styles.ctaPrimary}>Back to S.A.F.E. Overview</a>
            <a href="/contact" className={styles.ctaSecondary}>Contact Us About Implementation</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProtectedStatus;
