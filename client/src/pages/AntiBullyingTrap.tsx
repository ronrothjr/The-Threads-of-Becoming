import React from 'react';
import styles from './AntiBullyingTrap.module.css';

const AntiBullyingTrap: React.FC = () => {
  return (
    <div className={styles.antiBullyingTrap}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>The Anti-Bullying Trap</h1>
        <h2 className={`${styles.tagline} tagline`}>
          Why Protection Without Capacity Fails Our Children
        </h2>
        <p className={styles.subtitle}>
          The anti-bullying industrial complex may be creating the very dynamics it claims to prevent
        </p>
      </section>

      {/* Introduction */}
      <section className={`${styles.introduction} section-lg`}>
        <div className="container">
          <p className={styles.introLead}>
            This critique is foundational to why S.A.F.E. and Threads represent a genuine paradigm shift.
          </p>
        </div>
      </section>

      {/* The 7 Assumptions */}
      <section className={`${styles.assumptions} section-lg`}>
        <div className="container">
          <h2>The Unexamined Assumptions of Traditional Anti-Bullying</h2>

          {/* Assumption 1 */}
          <div className={styles.assumptionCard}>
            <h3>Assumption 1: Children Cannot Navigate Social Conflict</h3>

            <div className={styles.belief}>
              <h4>The belief:</h4>
              <p>Children are fragile, lack capacity, and need adults to intervene in their social world.</p>
            </div>

            <div className={styles.policy}>
              <h4>The policy:</h4>
              <p>Report immediately. Don't handle it yourself. Get an adult involved.</p>
            </div>

            <div className={styles.teaches}>
              <h4>What it teaches children:</h4>
              <ul>
                <li>You are not capable of managing difficulty</li>
                <li>Your feelings are emergencies requiring external intervention</li>
                <li>Conflict is dangerous and must be stopped, not navigated</li>
                <li>Adults have the answers; you do not</li>
              </ul>
            </div>

            <div className={styles.prevents}>
              <h4>What it prevents children from learning:</h4>
              <ul>
                <li>Discomfort is survivable</li>
                <li>Conflict can be generative</li>
                <li>You can advocate for yourself</li>
                <li>Relationships require repair, and you can do repair</li>
                <li>Tension is information, not crisis</li>
              </ul>
            </div>

            <div className={styles.threadCollapse}>
              <h4>The Thread collapse:</h4>
              <p>
                This collapses <strong>BECOMING</strong> into a fixed state of incapacity. The child is never given the opportunity
                to discover "I can hold this. I can emerge from this differently." Instead, they learn: "I cannot. I must outsource
                my social-emotional regulation to adults."
              </p>
              <p>
                It also collapses <strong>PAUSE</strong> - there's no space between experience and adult intervention. The child doesn't
                get to sit with the tension, notice what's arising, consider options. The system rushes to resolution.
              </p>
            </div>
          </div>

          {/* Assumption 2 */}
          <div className={styles.assumptionCard}>
            <h3>Assumption 2: Every Negative Social Interaction Is Bullying</h3>

            <div className={styles.belief}>
              <h4>The belief:</h4>
              <p>Children should never experience exclusion, unkindness, or conflict. These experiences are inherently harmful and require intervention.</p>
            </div>

            <div className={styles.policy}>
              <h4>The policy:</h4>
              <p>Zero tolerance. Report everything. All incidents are taken seriously.</p>
            </div>

            <div className={styles.teaches}>
              <h4>What it teaches children:</h4>
              <ul>
                <li>Any uncomfortable social experience is a violation</li>
                <li>You have a right to never be excluded</li>
                <li>Other people's choices about their own friendships are potentially bullying</li>
                <li>Hurt feelings = harm done</li>
              </ul>
            </div>

            <div className={styles.prevents}>
              <h4>What it prevents children from learning:</h4>
              <ul>
                <li>Not everyone will like you, and that's survivable</li>
                <li>Exclusion is sometimes painful but not always wrong</li>
                <li>Other people have CONSENT - they get to choose their friends</li>
                <li>Disappointment is part of social life</li>
                <li>Resilience comes from navigating difficulty, not avoiding it</li>
              </ul>
            </div>

            <div className={styles.consentParadox}>
              <h4>The CONSENT paradox:</h4>
              <p>Traditional anti-bullying often violates CONSENT in the name of protecting it:</p>
              <ul>
                <li>It tells children they have a right to be included (violating others' CONSENT to choose their relationships)</li>
                <li>It removes children's CONSENT about how their conflicts are handled (adults take over)</li>
                <li>It doesn't ask children if they <em>want</em> intervention - it's imposed</li>
              </ul>
              <p className={styles.consentMessage}>
                A child may want to work something out on their own. The system doesn't honor that choice. The message:
                "Your consent about your own social life doesn't matter. Adults know better."
              </p>
            </div>
          </div>

          {/* Assumption 3 */}
          <div className={styles.assumptionCard}>
            <h3>Assumption 3: Immediate Reporting Produces Better Outcomes</h3>

            <div className={styles.belief}>
              <h4>The belief:</h4>
              <p>The faster we know about incidents, the faster we can stop them.</p>
            </div>

            <div className={styles.policy}>
              <h4>The policy:</h4>
              <p>Report immediately. Don't wait. Silence enables bullying.</p>
            </div>

            <div className={styles.teaches}>
              <h4>What it teaches children:</h4>
              <ul>
                <li>Speed is more important than reflection</li>
                <li>Your first interpretation of an event is accurate</li>
                <li>There's no value in sitting with complexity before acting</li>
                <li>Escalation to authority is the appropriate first response</li>
              </ul>
            </div>

            <div className={styles.prevents}>
              <h4>What it prevents children from learning:</h4>
              <ul>
                <li>Initial perceptions can be incomplete</li>
                <li>Time reveals information</li>
                <li>Some conflicts resolve without intervention</li>
                <li>Reflection before action often produces better outcomes</li>
                <li>You might have contributed to what happened</li>
              </ul>
            </div>

            <div className={styles.pauseCollapse}>
              <h4>The PAUSE collapse:</h4>
              <p>
                The entire architecture is designed to eliminate PAUSE. But PAUSE is where wisdom lives:
              </p>
              <ul>
                <li>"Not Yet vs. Now" - maybe this doesn't need adult involvement yet</li>
                <li>"More vs. Enough" - maybe I have enough capacity to handle this</li>
              </ul>
              <p className={styles.pauseMessage}>
                The reporting imperative teaches that PAUSE is dangerous - that waiting is enabling. Children internalize:
                <em>Don't reflect. Don't wait. Report immediately.</em>
              </p>
              <p className={styles.adultConsequence}>
                This produces adults who escalate to HR, to lawyers, to social media at the first sign of conflict.
                The reporting muscle was overdeveloped; the reflection muscle atrophied.
              </p>
            </div>
          </div>

          {/* Assumption 4 */}
          <div className={styles.assumptionCard}>
            <h3>Assumption 4: The Victim/Bully Binary Is Real and Useful</h3>

            <div className={styles.belief}>
              <h4>The belief:</h4>
              <p>In every conflict, there's a victim (good, harmed, needs protection) and a bully (bad, harmful, needs consequences).</p>
            </div>

            <div className={styles.policy}>
              <h4>The policy:</h4>
              <p>Identify who's the victim, who's the bully. Protect one, punish the other.</p>
            </div>

            <div className={styles.teaches}>
              <h4>What it teaches children:</h4>
              <ul>
                <li>Conflict has clear good guys and bad guys</li>
                <li>You are one or the other</li>
                <li>The victim role provides protection and moral authority</li>
                <li>The bully role provides... nothing. Only punishment.</li>
                <li>There's no such thing as mutual conflict, provocation, or co-creation</li>
              </ul>
            </div>

            <div className={styles.perverseIncentive}>
              <h4>The perverse incentive:</h4>
              <p className={styles.incentiveSetup}>
                If victim = protection + moral authority + parental advocacy + adult attention, and bully = punishment + shame + parental anger + permanent record...
              </p>
              <p className={styles.incentiveConclusion}>
                <strong>Then children learn to race to the victim position.</strong>
              </p>
              <p>
                The first one to report is the victim. The one who didn't report is the bully. The incentive is to get your story in first,
                shaped to maximize your victimhood.
              </p>
            </div>

            <div className={styles.produces}>
              <h4>This produces:</h4>
              <ul>
                <li>Strategic victimhood (claiming the identity for protection)</li>
                <li>Story distortion (emphasizing their harm, minimizing your contribution)</li>
                <li>Parental escalation (parents advocate for their victim child)</li>
                <li>Relationship destruction (the binary makes repair nearly impossible)</li>
              </ul>
            </div>

            <div className={styles.becomingCollapse}>
              <h4>The BECOMING collapse:</h4>
              <p>
                This is catastrophic for identity formation. The child learns: "I am a victim" or "I am a bully." Both are fixed
                identities that foreclose BECOMING.
              </p>
              <p>
                The victim identity says: "I am someone things happen TO. I lack agency. I need protection."
              </p>
              <p>
                The bully identity says: "I am bad. My behavior defines me. I cannot change."
              </p>
              <p className={styles.becomingAlternative}>
                Neither allows for: "I am someone who is becoming. Today I was hurt AND I also contributed. Today I hurt someone AND I can repair.
                I am not my worst moment or my hardest moment."
              </p>
            </div>
          </div>

          {/* Assumption 5 */}
          <div className={styles.assumptionCard}>
            <h3>Assumption 5: Parents Are Helpful Allies</h3>

            <div className={styles.belief}>
              <h4>The belief:</h4>
              <p>Parents want what's best for their children and will support healthy resolution.</p>
            </div>

            <div className={styles.policy}>
              <h4>The policy:</h4>
              <p>Notify parents immediately. Keep them informed. Partner with families.</p>
            </div>

            <div className={styles.actuallyHappens}>
              <h4>What actually happens:</h4>
              <p>Parents receive a one-sided story from their child. That story has been shaped to:</p>
              <ul>
                <li>Present the child in the best light</li>
                <li>Minimize or omit the child's contribution</li>
                <li>Maximize the other party's wrongdoing</li>
                <li>Trigger parental protection instincts</li>
              </ul>
              <p className={styles.parentResponse}>The parent, armed with this distorted narrative, then:</p>
              <ul>
                <li>Contacts the school demanding action</li>
                <li>Contacts the other parents (escalation)</li>
                <li>Validates the victim identity ("You did nothing wrong, sweetie")</li>
                <li>Models aggression ("I'm going to talk to that kid's parents")</li>
                <li>Removes learning opportunities ("You're not playing with them anymore")</li>
              </ul>
            </div>

            <div className={styles.memoryDistortion}>
              <h4>The MEMORY distortion:</h4>
              <p>
                The story crystallizes immediately. What might have been a complex, mutual, ambiguous social moment becomes a fixed narrative:
                "She bullied me." Once the parent has heard and validated this story, it becomes the MEMORY that everyone carries forward.
              </p>
              <p>
                The parent then tells other parents. Social groups form around competing narratives. What started as a playground conflict
                becomes a community drama.
              </p>
            </div>

            <div className={styles.consentViolation}>
              <h4>The CONSENT violation:</h4>
              <p>
                No one asked the child if they wanted their parents involved. No one asked if they wanted the school involved. No one asked
                if they wanted this to become A Big Thing. The child's CONSENT about their own social life was never sought.
              </p>
              <p className={styles.childIntent}>
                And often, the child didn't want this. They wanted to tell someone, maybe process it, and then figure it out. Instead, the machinery took over.
              </p>
            </div>
          </div>

          {/* Assumption 6 */}
          <div className={styles.assumptionCard}>
            <h3>Assumption 6: Prevention Means Awareness Campaigns</h3>

            <div className={styles.belief}>
              <h4>The belief:</h4>
              <p>If we teach children that bullying is bad and tell them to be upstanders, they'll stop doing it.</p>
            </div>

            <div className={styles.policy}>
              <h4>The policy:</h4>
              <p>Assemblies, posters, Blue Shirt Day, pledges, guest speakers.</p>
            </div>

            <div className={styles.actuallyDoes}>
              <h4>What it actually does:</h4>
              <ul>
                <li>Creates awareness without capacity</li>
                <li>Children know bullying is "bad" but still don't know how to navigate tension</li>
                <li>Upstander messaging adds guilt without adding skill</li>
                <li>Performative anti-bullying (pledges, posters) doesn't change behavior</li>
              </ul>
            </div>

            <div className={styles.embodimentAbsence}>
              <h4>The EMBODIMENT absence:</h4>
              <p>
                Awareness lives in the head. Capacity lives in the body. Traditional anti-bullying is all cognition:
                "Bullying is wrong. You should be an upstander. Report what you see."
              </p>
              <p>
                But when a child is in the moment - heart racing, social pressure pressing, wanting to belong, fearing exclusion -
                cognitive awareness doesn't help. The body is running the show.
              </p>
              <p className={styles.safeContrast}>
                S.A.F.E. begins with EMBODIMENT: "What do you notice in your body right now?" This is radically different from
                "Remember that bullying is wrong."
              </p>
            </div>
          </div>

          {/* Assumption 7 */}
          <div className={styles.assumptionCard}>
            <h3>Assumption 7: Schools Can (and Should) Eliminate Social Harm</h3>

            <div className={styles.belief}>
              <h4>The belief:</h4>
              <p>A well-run school should have no bullying. Zero incidents is the goal.</p>
            </div>

            <div className={styles.policy}>
              <h4>The policy:</h4>
              <p>Measure success by incident reduction. Celebrate zero-tolerance. Aim for "bully-free" environments.</p>
            </div>

            <div className={styles.perverseIncentives}>
              <h4>The perverse incentives this creates:</h4>

              <div className={styles.incentiveCategory}>
                <h5>For students:</h5>
                <ul>
                  <li>Don't report (it makes the school look bad)</li>
                  <li>Handle it outside school grounds (off-campus = not our problem)</li>
                  <li>Digital bullying (invisible to school systems)</li>
                </ul>
              </div>

              <div className={styles.incentiveCategory}>
                <h5>For teachers:</h5>
                <ul>
                  <li>Don't document (incidents hurt your metrics)</li>
                  <li>Minimize ("That's just kids being kids")</li>
                  <li>Quick resolution over real resolution (close the case)</li>
                </ul>
              </div>

              <div className={styles.incentiveCategory}>
                <h5>For administrators:</h5>
                <ul>
                  <li>Suppress data</li>
                  <li>Focus on visible incidents, ignore systemic patterns</li>
                  <li>Claim success based on underreporting</li>
                </ul>
              </div>
            </div>

            <div className={styles.uncertaintyAvoidance}>
              <h4>The UNCERTAINTY avoidance:</h4>
              <p>
                The system demands certainty: "Is this bullying or not? Who's the victim? What are the consequences?" But social life is uncertain.
                Conflicts are ambiguous. Intentions are unclear. Outcomes are unpredictable.
              </p>
              <p className={styles.uncertaintyProduces}>A system that can't hold UNCERTAINTY produces:</p>
              <ul>
                <li>False certainty (forced binary decisions)</li>
                <li>Missed complexity (subtle patterns ignored)</li>
                <li>Premature closure (need to close the case)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Victim Identity Factory */}
      <section className={`${styles.victimFactory} section-lg`}>
        <div className="container">
          <h2>The Victim Identity Factory</h2>
          <p className={styles.factoryLead}>
            This is worth dwelling on, because it's the deepest critique.
          </p>
          <p className={styles.factoryThesis}>
            <strong>Traditional anti-bullying doesn't just fail to help children - it actively produces victim identity.</strong>
          </p>

          <div className={styles.howItWorks}>
            <h3>How the System Creates Victims</h3>
            <ol className={styles.victimSteps}>
              <li><strong>Step 1:</strong> Something uncomfortable happens (exclusion, unkind words, conflict)</li>
              <li><strong>Step 2:</strong> The child is told this is serious and must be reported</li>
              <li><strong>Step 3:</strong> Reporting requires adopting the victim frame ("I was bullied")</li>
              <li><strong>Step 4:</strong> Adults validate the victim identity ("You're so brave for reporting")</li>
              <li><strong>Step 5:</strong> Parents validate the victim identity ("I'm so sorry this happened to you")</li>
              <li><strong>Step 6:</strong> The "bully" is punished, confirming the child's victimhood</li>
              <li><strong>Step 7:</strong> The child learns: "When I present as a victim, I get protection, attention, moral authority, and the other person gets punished"</li>
              <li><strong>Step 8:</strong> The next conflict, the child reaches for the victim frame faster</li>
            </ol>
          </div>

          <div className={styles.consentCollapseYes}>
            <h3>The CONSENT Collapse Into "Yes"</h3>
            <p>Children facing social pressure often collapse CONSENT to "yes" because:</p>
            <ul>
              <li>Saying "no" marks you as weak</li>
              <li>Saying "no" risks exclusion</li>
              <li>Saying "no" draws attention</li>
              <li>Saying "no" requires capacity you haven't built</li>
            </ul>
            <p className={styles.systemsRole}>
              <strong>But here's the system's role: by removing opportunities to practice navigating social tension, the system prevents
              children from developing the CONSENT capacity to say "no."</strong>
            </p>
            <p>Every time an adult swoops in to handle a conflict, the child loses a chance to practice:</p>
            <ul>
              <li>"I don't like that. Stop."</li>
              <li>"I'm not going to do that."</li>
              <li>"I'm going to walk away now."</li>
              <li>"I need help" (choosing to ask, not being told to report)</li>
            </ul>
            <p className={styles.weakensCapacity}>
              The reporting imperative actually weakens CONSENT capacity. Children never develop the muscle because they're told not to use it -
              to outsource to adults instead.
            </p>
          </div>
        </div>
      </section>

      {/* What It Produces */}
      <section className={`${styles.produces} section-lg`}>
        <div className="container">
          <h2>What Traditional Anti-Bullying Actually Produces</h2>

          <div className={styles.effectsGrid}>
            <div className={styles.effectsCard}>
              <h3>Immediate Effects</h3>
              <ul>
                <li><strong>Victim identity consolidation</strong> in children who experience conflict</li>
                <li><strong>Bully identity consolidation</strong> in children who are labeled</li>
                <li><strong>Atrophied conflict capacity</strong> in all children (never allowed to practice)</li>
                <li><strong>Parental escalation</strong> based on distorted narratives</li>
                <li><strong>Staff burnout</strong> from managing manufactured crises</li>
                <li><strong>Relational damage</strong> that can't be repaired once the binary is invoked</li>
              </ul>
            </div>

            <div className={styles.effectsCard}>
              <h3>Long-Term Effects</h3>
              <ul>
                <li><strong>Adults who can't handle conflict</strong> (never learned, always outsourced)</li>
                <li><strong>Adults who immediately escalate</strong> (report first, reflect never)</li>
                <li><strong>Adults who see themselves as victims</strong> (identity formed early)</li>
                <li><strong>Adults who avoid uncomfortable relationships</strong> (easier than navigating)</li>
                <li><strong>Fragile emotional regulation</strong> (never developed capacity)</li>
                <li><strong>Binary thinking about complex social dynamics</strong> (good people/bad people)</li>
              </ul>
            </div>

            <div className={styles.effectsCard}>
              <h3>Generational Pattern</h3>
              <p>These adults become parents who:</p>
              <ul>
                <li>Immediately intervene in their children's social conflicts</li>
                <li>Demand schools protect their children from all discomfort</li>
                <li>Model victim identity or aggressive protection</li>
                <li>Never let their children navigate difficulty</li>
                <li>Produce a new generation with even less capacity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Threads Critique Table */}
      <section className={`${styles.threadsCritique} section-lg`}>
        <div className="container">
          <h2>The Threads Critique: What's Actually Collapsed</h2>

          <div className={styles.critiqueTable}>
            {[
              {
                thread: 'PRESENCE',
                collapse: "Removes children from their own social \"between\" - adults occupy the space"
              },
              {
                thread: 'CONSENT',
                collapse: "Doesn't ask children if they want intervention. Imposes adult will"
              },
              {
                thread: 'MEMORY',
                collapse: "Crystallizes distorted narratives immediately. No space for revision"
              },
              {
                thread: 'PAUSE',
                collapse: "Eliminates reflection. Immediate reporting. Speed over wisdom"
              },
              {
                thread: 'EMBODIMENT',
                collapse: "All cognition (awareness campaigns), no body (capacity building)"
              },
              {
                thread: 'UNCERTAINTY',
                collapse: "Demands false certainty. Forces binary determinations"
              },
              {
                thread: 'BECOMING',
                collapse: "Fixes identity (victim/bully) rather than holding becoming"
              }
            ].map((item, index) => (
              <div key={index} className={styles.critiqueRow}>
                <div className={styles.threadName}>{item.thread}</div>
                <div className={styles.collapseDescription}>{item.collapse}</div>
              </div>
            ))}
          </div>

          <p className={styles.critiqueConclusion}>
            The system collapses <em>every Thread</em> in the name of protecting children. And in doing so, it prevents children from
            developing the very capacities that would actually protect them.
          </p>
        </div>
      </section>

      {/* The Alternative */}
      <section className={`${styles.alternative} section-lg`}>
        <div className="container">
          <h2>What S.A.F.E. and Threads Offer Instead</h2>

          <div className={styles.paradigmShift}>
            <h3>The Paradigm Shift</h3>
            <div className={styles.comparisonTable}>
              {[
                {
                  traditional: 'Report to adults',
                  safe: 'Navigate with capacity (adults facilitate, not solve)'
                },
                {
                  traditional: 'Victim/bully binary',
                  safe: "Everyone's becoming"
                },
                {
                  traditional: 'Eliminate conflict',
                  safe: 'Hold tension as learning'
                },
                {
                  traditional: 'Immediate intervention',
                  safe: 'PAUSE before action'
                },
                {
                  traditional: 'Cognitive awareness',
                  safe: 'EMBODIMENT capacity'
                },
                {
                  traditional: 'Fixed identity',
                  safe: 'Fluid becoming'
                },
                {
                  traditional: 'Adult resolution',
                  safe: 'Child agency (scaffolded)'
                },
                {
                  traditional: 'Parent as advocate',
                  safe: 'Parent as fellow practitioner'
                },
                {
                  traditional: 'Zero tolerance',
                  safe: 'Developmental understanding'
                },
                {
                  traditional: 'Incident reduction',
                  safe: 'Capacity building'
                }
              ].map((row, index) => (
                <div key={index} className={styles.comparisonRow}>
                  <div className={styles.traditionalCell}>{row.traditional}</div>
                  <div className={styles.arrow}>→</div>
                  <div className={styles.safeCell}>{row.safe}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.fundamentalDifference}>
            <h3>The Fundamental Difference</h3>
            <div className={styles.differenceComparison}>
              <div className={styles.traditionalApproach}>
                <h4>Traditional:</h4>
                <p>"Bullying is a problem. We stop it."</p>
              </div>
              <div className={styles.safeApproach}>
                <h4>S.A.F.E./Threads:</h4>
                <p>"Conflict is tension. We learn to hold it. In holding it, we become who we want to be."</p>
              </div>
            </div>
          </div>

          <div className={styles.capacityFocus}>
            <h3>The Capacity Focus</h3>
            <p>Instead of removing children from their social challenges, we build their capacity to navigate those challenges:</p>

            <div className={styles.safeSteps}>
              <div className={styles.safeStep}>
                <strong>SEE</strong> - Notice what's happening (in body and situation) before reacting
              </div>
              <div className={styles.safeStep}>
                <strong>ASK</strong> - Name the tension (what are both pulls?)
              </div>
              <div className={styles.safeStep}>
                <strong>FEEL</strong> - Hold both sides (can both be true?)
              </div>
              <div className={styles.safeStep}>
                <strong>EMERGE</strong> - Choose who you're becoming (not what you should do)
              </div>
            </div>

            <p className={styles.capacityProduces}>This produces adults who:</p>
            <ul>
              <li>Can sit with discomfort</li>
              <li>Can navigate ambiguous social situations</li>
              <li>Can advocate for themselves without outsourcing</li>
              <li>Can hold complexity without collapsing into binary</li>
              <li>Can repair relationships after conflict</li>
              <li>Can be wrong, own it, and grow</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hard Questions */}
      <section className={`${styles.hardQuestions} section-lg`}>
        <div className="container">
          <h2>The Hard Questions This Raises</h2>

          <div className={styles.questionCard}>
            <h3>1. When IS Adult Intervention Appropriate?</h3>
            <p>
              The critique of over-intervention doesn't mean no intervention. Children do need protection. Some situations exceed their capacity.
              Physical violence, sexual harassment, abuse dynamics, severe power imbalances - these require adults.
            </p>
            <p>
              The SEE & ACT vs. S.A.F.E. distinction addresses this: crisis requires intervention; conflict requires facilitation.
            </p>
            <p className={styles.keyQuestion}>
              <strong>Question:</strong> How do we rebuild children's (and adults') capacity to distinguish between "I'm uncomfortable" and "I'm unsafe"?
            </p>
          </div>

          <div className={styles.questionCard}>
            <h3>2. What About Genuine Victimization?</h3>
            <p>
              This critique shouldn't minimize real harm. Some children ARE being systematically targeted. Some children ARE experiencing genuine
              persecution - for their identity, their body, their difference.
            </p>
            <p>
              The Threads framework doesn't say "everything is mutual." It says "capacity to hold tension is valuable." But some situations
              aren't tension to hold - they're harm to stop.
            </p>
            <p className={styles.keyQuestion}>
              <strong>Question:</strong> How do we build capacity for normal conflict while still protecting children from genuine victimization?
            </p>
          </div>

          <div className={styles.questionCard}>
            <h3>3. What About Parents Who ARE Helpful?</h3>
            <p>
              Not all parental involvement is destructive. Some parents genuinely support their children's development without taking over.
              Some parents hold complexity well.
            </p>
            <p className={styles.keyQuestion}>
              <strong>Question:</strong> How do we engage parents as Thread practitioners rather than as advocates for their child's victimhood?
            </p>
          </div>

          <div className={styles.questionCard}>
            <h3>4. What About Systemic Oppression?</h3>
            <p>
              The "build capacity" frame could be misused: "Just learn to handle the racism. Just develop resilience to homophobia."
            </p>
            <p>
              Some bullying reflects genuine oppression that shouldn't be individually navigated - it should be systemically challenged.
            </p>
            <p className={styles.keyQuestion}>
              <strong>Question:</strong> Where does individual capacity-building end and systemic change begin? How do we honor both?
            </p>
          </div>

          <div className={styles.questionCard}>
            <h3>5. What About Liability?</h3>
            <p>
              Schools are terrified of lawsuits. If a child is harmed and the school "didn't act," there's legal exposure. The over-intervention
              system is partly a legal protection mechanism.
            </p>
            <p className={styles.keyQuestion}>
              <strong>Question:</strong> How does S.A.F.E. navigate the legal reality that schools need documentation and demonstrable action?
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className={`${styles.conclusion} section-lg`}>
        <div className="container">
          <h2>Toward a Complete Critique</h2>
          <p className={styles.conclusionLead}>
            What you're building isn't just an alternative program. It's a fundamental challenge to how we've conceptualized childhood, conflict,
            protection, and development.
          </p>

          <div className={styles.anthropology}>
            <div className={styles.anthropologyTraditional}>
              <h4>Traditional anti-bullying says:</h4>
              <p>Children are fragile. Conflict is damage. Adults must prevent harm. Success means fewer incidents.</p>
            </div>
            <div className={styles.anthropologyThreads}>
              <h4>Threads/S.A.F.E. says:</h4>
              <p>Children are becoming. Conflict is tension. Adults facilitate capacity. Success means greater ability to hold complexity.</p>
            </div>
          </div>

          <p className={styles.anthropologyNote}>
            This is a different anthropology - a different view of what humans are and how they develop.
          </p>

          <p className={styles.courage}>
            And it requires courage to say out loud, because it sounds like "let kids suffer" to ears trained by the current paradigm.
          </p>

          <div className={styles.workAhead}>
            <h3>The work ahead is articulating this critique in ways that:</h3>
            <ul>
              <li>Don't dismiss genuine harm</li>
              <li>Don't minimize real victimization</li>
              <li>Don't blame children for their experiences</li>
              <li><strong>DO</strong> shift the paradigm from protection to capacity</li>
              <li><strong>DO</strong> restore agency to children</li>
              <li><strong>DO</strong> help adults see their own collapse patterns</li>
              <li><strong>DO</strong> offer a genuine alternative that works</li>
            </ul>
          </div>

          <div className={styles.returnToSafe}>
            <a href="/safe" className={styles.returnLink}>
              ← Return to S.A.F.E. For All
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntiBullyingTrap;
