import React from 'react';
import styles from './BehavioralEmotionalLandscape.module.css';

const BehavioralEmotionalLandscape: React.FC = () => {
  return (
    <div className={styles.behavioralEmotionalLandscape}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>The Behavioral and Emotional Landscape</h1>
        <h2 className={`${styles.tagline} tagline`}>
          How Threads Weaves Throughout
        </h2>
        <p className={styles.subtitle}>
          Understanding where Threads fits in the educational landscape and why it offers something SEL cannot
        </p>
      </section>

      {/* Introduction */}
      <section className={`${styles.introduction} section-lg`}>
        <div className="container">
          <p className={styles.introLead}>
            SEL (Social-Emotional Learning) is the dominant framework in schools right now. If you're bringing Threads and S.A.F.E.
            into educational contexts, you need to understand how it relates to what's already there - where it aligns, where it differs,
            and where it offers something SEL cannot.
          </p>
        </div>
      </section>

      {/* Understanding SEL */}
      <section className={`${styles.understandingSEL} section-lg`}>
        <div className="container">
          <h2>Understanding SEL</h2>

          <div className={styles.selOverview}>
            <h3>What SEL Is</h3>
            <p>
              SEL is primarily defined through CASEL (Collaborative for Academic, Social, and Emotional Learning),
              which identifies five core competencies:
            </p>

            <div className={styles.competencyGrid}>
              <div className={styles.competencyCard}>
                <h4>Self-Awareness</h4>
                <ul>
                  <li>Recognizing emotions</li>
                  <li>Accurate self-perception</li>
                  <li>Identifying strengths</li>
                  <li>Self-confidence</li>
                  <li>Self-efficacy</li>
                </ul>
              </div>

              <div className={styles.competencyCard}>
                <h4>Self-Management</h4>
                <ul>
                  <li>Impulse control</li>
                  <li>Stress management</li>
                  <li>Self-discipline</li>
                  <li>Self-motivation</li>
                  <li>Goal setting</li>
                  <li>Organizational skills</li>
                </ul>
              </div>

              <div className={styles.competencyCard}>
                <h4>Social Awareness</h4>
                <ul>
                  <li>Perspective-taking</li>
                  <li>Empathy</li>
                  <li>Appreciating diversity</li>
                  <li>Respect for others</li>
                </ul>
              </div>

              <div className={styles.competencyCard}>
                <h4>Relationship Skills</h4>
                <ul>
                  <li>Communication</li>
                  <li>Social engagement</li>
                  <li>Relationship building</li>
                  <li>Teamwork</li>
                </ul>
              </div>

              <div className={styles.competencyCard}>
                <h4>Responsible Decision-Making</h4>
                <ul>
                  <li>Identifying problems</li>
                  <li>Analyzing situations</li>
                  <li>Solving problems</li>
                  <li>Evaluating</li>
                  <li>Reflecting</li>
                  <li>Ethical responsibility</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.selAccomplishments}>
            <h3>What SEL Has Accomplished</h3>
            <p>Before dismissing SEL, let's acknowledge what it's done:</p>
            <div className={styles.accomplishmentsList}>
              <div className={styles.accomplishment}>
                <strong>Legitimized the domain.</strong> Before SEL, social-emotional development was invisible in education policy.
                SEL made it a legitimate area of concern, research, and funding.
              </div>
              <div className={styles.accomplishment}>
                <strong>Created shared language.</strong> Teachers now have vocabulary for talking about emotions, self-regulation,
                and social dynamics. This didn't exist at scale before.
              </div>
              <div className={styles.accomplishment}>
                <strong>Research base.</strong> There's substantial research showing SEL programs can improve academic outcomes,
                reduce behavior problems, and develop prosocial behavior.
              </div>
              <div className={styles.accomplishment}>
                <strong>Shifted teacher training.</strong> Many teacher prep programs now include SEL. Teachers are expected to
                attend to social-emotional development, not just content delivery.
              </div>
              <div className={styles.accomplishment}>
                <strong>Policy integration.</strong> SEL is now embedded in state standards, district priorities, and federal
                education policy. It has institutional permanence.
              </div>
              <div className={styles.accomplishment}>
                <strong>Counter to pure academics.</strong> SEL pushed back against the "test scores only" mentality.
                It insisted that whole-child development matters.
              </div>
            </div>
          </div>

          <div className={styles.selLimitations}>
            <h3>The Nine Limitations of SEL</h3>

            {/* Limitation 1 */}
            <div className={styles.limitationCard}>
              <h4>Limitation 1: Competency vs. Capacity</h4>
              <div className={styles.limitationContent}>
                <div className={styles.selFrame}>
                  <strong>SEL frame:</strong> These are skills to be acquired. You learn self-management like you learn multiplication.
                  You can be assessed on it.
                </div>
                <div className={styles.problem}>
                  <strong>The problem:</strong> Social-emotional life isn't a set of discrete skills. It's a dynamic, contextual,
                  embodied capacity that emerges through practice and relationship. You can "know" self-management strategies and
                  completely fail to access them when your nervous system is activated.
                </div>
                <div className={styles.threadDifference}>
                  <strong>Thread difference:</strong> Threads isn't about competencies to acquire - it's about tensions to hold.
                  You don't "have" PAUSE as a skill. You practice holding the "Not Yet vs. Now" tension in real situations.
                  The capacity emerges through practice, not instruction.
                </div>
              </div>
            </div>

            {/* Limitation 2 */}
            <div className={styles.limitationCard}>
              <h4>Limitation 2: Cognitive Bias</h4>
              <div className={styles.limitationContent}>
                <div className={styles.selFrame}>
                  <strong>SEL frame:</strong> Name the emotion. Identify the strategy. Apply the technique.
                  This is largely cognitive work - thinking about feelings rather than being with them.
                </div>
                <div className={styles.problem}>
                  <strong>The problem:</strong> When you're flooded with emotion, your prefrontal cortex goes offline.
                  The cognitive strategies you learned aren't accessible. The "name it to tame it" approach works for mild
                  emotional states but fails under pressure.
                </div>
                <div className={styles.threadDifference}>
                  <strong>Thread difference:</strong> Threads begins with EMBODIMENT - "What do you notice in your body?"
                  This isn't cognitive labeling. It's somatic attention. The body holds what the mind can't process.
                  Capacity lives in the body, not just the brain.
                </div>
              </div>
            </div>

            {/* Limitation 3 */}
            <div className={styles.limitationCard}>
              <h4>Limitation 3: Individual Focus</h4>
              <div className={styles.limitationContent}>
                <div className={styles.selFrame}>
                  <strong>SEL frame:</strong> These are YOUR competencies. YOU need to develop self-management.
                  YOU need to build self-awareness.
                </div>
                <div className={styles.problem}>
                  <strong>The problem:</strong> Social-emotional life is inherently relational. Emotions arise between people,
                  not just within individuals. The individual focus can become: "Learn to manage yourself so you don't cause
                  problems for others."
                </div>
                <div className={styles.threadDifference}>
                  <strong>Thread difference:</strong> Threads explicitly holds the relational field. PRESENCE has "Within" AND "Between."
                  CONSENT is "Self" AND "Other." The framework is inherently relational - you can't work a Thread alone.
                  Tensions exist in the space between.
                </div>
              </div>
            </div>

            {/* Limitation 4 */}
            <div className={styles.limitationCard}>
              <h4>Limitation 4: Compliance Orientation</h4>
              <div className={styles.limitationContent}>
                <div className={styles.selFrame}>
                  <strong>SEL frame:</strong> Self-management often means: regulate your emotions so you can comply with
                  classroom expectations.
                </div>
                <div className={styles.problem}>
                  <strong>The problem:</strong> This can become social control dressed as development. "Manage your anger"
                  can mean "don't disrupt my class." The child's emotional reality is treated as a problem to be managed
                  rather than information to be understood.
                </div>
                <div className={styles.threadDifference}>
                  <strong>Thread difference:</strong> Threads asks "Who do you want to become?" not "How should you behave?"
                  The BECOMING thread is fundamentally about agency and identity, not compliance. A child might EMERGE as
                  someone who challenges unjust authority - that's valid BECOMING, even if it's not "responsible decision-making"
                  by adult standards.
                </div>
              </div>
            </div>

            {/* Limitation 5 */}
            <div className={styles.limitationCard}>
              <h4>Limitation 5: Cultural Narrowness</h4>
              <div className={styles.limitationContent}>
                <div className={styles.selFrame}>
                  <strong>SEL frame:</strong> There's an implicit set of emotional norms - how emotions should be expressed,
                  what "healthy" regulation looks like, what "appropriate" social behavior means.
                </div>
                <div className={styles.problem}>
                  <strong>The problem:</strong> These norms are often white, middle-class, Western. Other cultural frameworks
                  for emotional expression, conflict, and relationship are measured against this standard and found deficient.
                </div>
                <div className={styles.threadDifference}>
                  <strong>Thread difference:</strong> The Threads are universal tensions, but HOW they're navigated allows for
                  cultural variation. CONSENT exists in every culture, but what consent looks like varies. The framework doesn't
                  prescribe the "right" way to hold a Thread - it creates space for different cultural expressions of the same
                  universal tension.
                </div>
              </div>
            </div>

            {/* Limitation 6 */}
            <div className={styles.limitationCard}>
              <h4>Limitation 6: Curriculum Delivery</h4>
              <div className={styles.limitationContent}>
                <div className={styles.selFrame}>
                  <strong>SEL frame:</strong> Deliver SEL through structured lessons. 30 minutes, three times a week.
                  Lesson 7: Identifying Emotions in Others.
                </div>
                <div className={styles.problem}>
                  <strong>The problem:</strong> Real social-emotional development doesn't happen in curriculum.
                  It happens in moments - the recess conflict, the cafeteria exclusion, the classroom power struggle.
                  Curriculum about SEL doesn't transfer to capacity in the moment.
                </div>
                <div className={styles.threadDifference}>
                  <strong>Thread difference:</strong> S.A.F.E. is designed to work IN the moment, not about the moment.
                  Every conflict is practice. You don't learn Threads in a lesson and apply them later.
                  You practice them live, with support, repeatedly.
                </div>
              </div>
            </div>

            {/* Limitation 7 */}
            <div className={styles.limitationCard}>
              <h4>Limitation 7: Assessment Distortion</h4>
              <div className={styles.limitationContent}>
                <div className={styles.selFrame}>
                  <strong>SEL frame:</strong> We need to measure SEL competencies. Surveys. Rubrics. Observation protocols.
                  Data for continuous improvement.
                </div>
                <div className={styles.problem}>
                  <strong>The problem:</strong> What gets measured gets gamed. Children learn to give the "right" answers on
                  SEL surveys. Teachers learn to demonstrate the "right" behaviors during observations. The appearance of SEL
                  replaces the reality.
                </div>
                <div className={styles.threadDifference}>
                  <strong>Thread difference:</strong> Threads doesn't lend itself to rubric assessment. You can't check a box
                  for "holds UNCERTAINTY well." You can observe growth over time. You can notice pattern changes. But the capacity
                  is emergent and contextual, not measurable in standardized ways. S.A.F.E. tracks actions (S.A.F.E. slips) and
                  incidents (pattern changes), not competencies.
                </div>
              </div>
            </div>

            {/* Limitation 8 */}
            <div className={styles.limitationCard}>
              <h4>Limitation 8: Avoidance of Real Tensions</h4>
              <div className={styles.limitationContent}>
                <div className={styles.selFrame}>
                  <strong>SEL frame:</strong> Develop social awareness. Appreciate diversity. Respect others.
                </div>
                <div className={styles.problem}>
                  <strong>The problem:</strong> This can become soft consensus that avoids genuine conflict.
                  "Appreciate diversity" doesn't address what happens when values genuinely clash. "Respect others"
                  doesn't navigate the tension between my rights and yours.
                </div>
                <div className={styles.threadDifference}>
                  <strong>Thread difference:</strong> Threads is BUILT for tension. It doesn't resolve into harmony.
                  "Can both be true?" doesn't mean "find the compromise." It means hold the genuine opposition without collapsing.
                  This is harder, truer, and more useful than SEL's soft skills.
                </div>
              </div>
            </div>

            {/* Limitation 9 */}
            <div className={styles.limitationCard}>
              <h4>Limitation 9: The Political Vulnerability</h4>
              <div className={styles.limitationContent}>
                <div className={styles.selFrame}>
                  <strong>SEL has become a political target:</strong>
                  <ul>
                    <li>From the right: "Schools shouldn't teach emotions - that's the family's job"</li>
                    <li>From the right: "SEL is progressive indoctrination"</li>
                    <li>From the left: "SEL is about producing compliant workers for capitalism"</li>
                    <li>From the left: "It's white emotional norms imposed on everyone"</li>
                  </ul>
                </div>
                <div className={styles.problem}>
                  <strong>The vulnerability:</strong> SEL makes claims about what children should feel, how they should regulate,
                  what "healthy" looks like. These claims are contestable, and the contest has become politically weaponized.
                </div>
                <div className={styles.threadDifference}>
                  <strong>Thread difference:</strong> Threads doesn't prescribe outcomes. It doesn't say what you should feel
                  or how you should be. It says: "These are universal tensions. How do you want to hold them? Who do you want
                  to become?" This is harder to attack because it's not telling anyone what to think or feel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Threads Maps to SEL */}
      <section className={`${styles.threadsMapping} section-lg`}>
        <div className="container">
          <h2>How Threads Maps to SEL Competencies</h2>

          <div className={styles.mappingTable}>
            <table>
              <thead>
                <tr>
                  <th>CASEL Competency</th>
                  <th>Threads Approach</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Self-Awareness</strong></td>
                  <td>PRESENCE (Within) + EMBODIMENT - but not as "knowing your strengths" - as attending to what's arising in body and experience</td>
                </tr>
                <tr>
                  <td><strong>Self-Management</strong></td>
                  <td>PAUSE + EMBODIMENT - but not as "controlling impulses" - as holding "Not Yet vs. Now" and "Stay vs. Go" tensions</td>
                </tr>
                <tr>
                  <td><strong>Social Awareness</strong></td>
                  <td>PRESENCE (Between) + CONSENT - but not as "appreciating diversity" - as genuinely holding Self AND Other</td>
                </tr>
                <tr>
                  <td><strong>Relationship Skills</strong></td>
                  <td>All Threads live in relationship - every Thread has relational dimensions. This isn't a separate skill set</td>
                </tr>
                <tr>
                  <td><strong>Responsible Decision-Making</strong></td>
                  <td>BECOMING - but not as "making good choices" - as choosing who you're becoming in each moment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={styles.mappingNote}>
            The mapping is possible but imperfect. Threads doesn't carve the territory the same way SEL does.
          </p>
        </div>
      </section>

      {/* The Deeper Philosophical Difference */}
      <section className={`${styles.philosophicalDifference} section-lg`}>
        <div className="container">
          <h2>The Deeper Philosophical Difference</h2>

          <div className={styles.anthropologyComparison}>
            <div className={styles.anthropologyCard}>
              <h3>SEL's Implicit Anthropology</h3>
              <p>SEL assumes humans are:</p>
              <ul>
                <li>Bundles of competencies to be developed</li>
                <li>Capable of learning social-emotional skills like academic skills</li>
                <li>In need of explicit instruction in emotional life</li>
                <li>Able to apply learned strategies in real situations</li>
                <li>Measurable on standardized dimensions</li>
              </ul>
              <div className={styles.goal}>
                <strong>SEL's implicit goal:</strong> Produce competent, well-regulated, socially appropriate individuals.
              </div>
            </div>

            <div className={styles.anthropologyCard}>
              <h3>Threads' Implicit Anthropology</h3>
              <p>Threads assumes humans are:</p>
              <ul>
                <li>Beings in perpetual becoming</li>
                <li>Living in universal tensions that can't be resolved, only held</li>
                <li>Capable of developing capacity through practice in real situations</li>
                <li>Fundamentally relational (tensions exist between, not just within)</li>
                <li>Unique in how they navigate universal tensions</li>
              </ul>
              <div className={styles.goal}>
                <strong>Threads' implicit goal:</strong> Develop capacity to hold tension so that genuine becoming is possible.
              </div>
            </div>
          </div>

          <div className={styles.keyDistinction}>
            <h3>The Key Distinction: Resolution vs. Holding</h3>
            <div className={styles.distinctionComparison}>
              <div className={styles.distinctionItem}>
                <strong>SEL wants resolution:</strong>
                <p>Identify the emotion, apply the strategy, achieve regulation. Problem → Solution.</p>
              </div>
              <div className={styles.distinctionItem}>
                <strong>Threads wants holding:</strong>
                <p>Notice the tension, feel both poles, stay present without collapsing. The tension doesn't resolve - you develop capacity to hold it.</p>
              </div>
            </div>
            <p className={styles.distinctionNote}>
              This is profound. SEL is ultimately about fixing problems. Threads is about building capacity for problems that can't be fixed -
              which is most of social-emotional life.
            </p>
          </div>
        </div>
      </section>

      {/* What Threads Offers That SEL Cannot */}
      <section className={`${styles.threadsOffers} section-lg`}>
        <div className="container">
          <h2>What Threads Offers That SEL Cannot</h2>

          <div className={styles.offeringsGrid}>
            <div className={styles.offeringCard}>
              <h3>1. A Framework for Genuine Complexity</h3>
              <p>
                SEL doesn't know what to do with irresolvable tensions: My need vs. your need (both legitimate).
                My identity vs. your beliefs (both protected). Freedom vs. belonging (both essential).
              </p>
              <p>
                These don't resolve through "responsible decision-making." They require holding.
              </p>
              <p>
                <strong>Threads is BUILT for this.</strong> "Can both be true?" is the core move. You don't find the right answer.
                You develop capacity to hold the question.
              </p>
            </div>

            <div className={styles.offeringCard}>
              <h3>2. Embodied Practice, Not Just Cognitive Learning</h3>
              <p>
                SEL lives in the head. Name the emotion. Identify the strategy. Think about what you should do.
              </p>
              <p>
                Threads lives in the body. "What do you notice in your body right now?" comes first, before any thinking.
              </p>
              <p>
                This matters because emotional regulation happens (or doesn't) in the body. The nervous system doesn't care
                what cognitive strategies you've learned. It cares whether your body can hold activation without collapse.
              </p>
            </div>

            <div className={styles.offeringCard}>
              <h3>3. Identity Formation, Not Just Skill Acquisition</h3>
              <p>SEL asks: "What should you do?"</p>
              <p>Threads asks: "Who do you want to become?"</p>
              <p>
                This is the BECOMING thread - the recognition that every moment is an opportunity for identity formation.
                You're not applying a skill. You're choosing who you're going to be.
              </p>
              <p>This is developmentally profound for children. They're not just learning behaviors. They're forming selves.</p>
            </div>

            <div className={styles.offeringCard}>
              <h3>4. Relational Field, Not Just Individual Competence</h3>
              <p>
                SEL locates competencies in individuals. YOU have self-awareness. YOU have relationship skills.
              </p>
              <p>
                Threads locates tension in the field between. PRESENCE lives in "Within AND Between." CONSENT lives in "Self AND Other."
              </p>
              <p>
                This means Threads work is inherently relational. You don't develop Thread capacity alone.
                You develop it in relationship, through relationship, for relationship.
              </p>
            </div>

            <div className={styles.offeringCard}>
              <h3>5. Cultural Openness, Not Cultural Prescription</h3>
              <p>
                SEL (often unintentionally) prescribes cultural norms for emotional expression and social behavior.
              </p>
              <p>
                Threads identifies universal tensions but leaves HOW they're navigated open for cultural interpretation.
                CONSENT is universal - every culture has some framework for agency and agreement. But what consent looks like varies.
              </p>
              <p>
                This makes Threads more portable across cultural contexts and less vulnerable to the "whose values?" critique.
              </p>
            </div>

            <div className={styles.offeringCard}>
              <h3>6. Resistance to Compliance Capture</h3>
              <p>
                SEL can be (and has been) captured for behavior management. "Regulate yourself so you're easier to teach."
              </p>
              <p>
                Threads is harder to capture this way because it's not about outcomes. "Who do you want to become?" doesn't have
                a predetermined right answer. A child might become someone who challenges authority, sets strong boundaries,
                refuses to comply with unjust demands. That's valid BECOMING.
              </p>
              <p>The framework serves the child's development, not the institution's convenience.</p>
            </div>

            <div className={styles.offeringCard}>
              <h3>7. Honest About What Can't Be Fixed</h3>
              <p>
                SEL implicitly promises that with the right competencies, social-emotional problems are solvable.
              </p>
              <p>
                Threads is honest: some tensions don't resolve. You don't fix the CONSENT tension between self and other.
                You hold it. You live in it. You develop capacity to stay present with it.
              </p>
              <p>
                This honesty is more useful than SEL's implicit promise, because life will present irresolvable tensions,
                and people need capacity to hold them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Political Landscape */}
      <section className={`${styles.politicalLandscape} section-lg`}>
        <div className="container">
          <h2>The Political Landscape</h2>

          <div className={styles.floridaSituation}>
            <h3>What Happened in Florida</h3>
            <p>
              SLL ("Skills for Learning and Life") is Palm Beach County's rebranding of SEL after the DeSantis administration
              effectively banned the term and targeted SEL curricula as violating the "Stop W.O.K.E. Act." Districts across Florida
              scrubbed "social emotional learning" from their websites and budgets, replacing it with alternative terminology to
              avoid state scrutiny.
            </p>
            <p>
              The substance hasn't necessarily changed - the rename is largely a survival mechanism. Districts still need to address
              social-emotional development (it's built into federal requirements, school safety mandates post-Parkland, and basic functioning).
              They just can't call it SEL anymore.
            </p>
          </div>

          <div className={styles.conservativeCritique}>
            <h3>The Conservative Critique of SEL</h3>
            <p>The attack on SEL came primarily from Christopher Rufo, the same activist who made CRT a rallying cry:</p>
            <blockquote className={styles.rufoQuote}>
              "SEL serves as a delivery mechanism for radical pedagogy, such as critical race theory and gender deconstructionism...
              The intention of SEL is to soften children at an emotional level, reinterpret their normative behavior as an expression
              of 'repression,' 'whiteness,' or 'internalized racism,' and then rewire their behavior according to the dictates of
              left-wing ideology."
            </blockquote>

            <div className={styles.critiqueThreads}>
              <h4>The critique has several threads:</h4>
              <ul>
                <li><strong>"Trojan Horse" Claim:</strong> SEL is framed as a disguise for smuggling CRT, gender ideology, and progressive values into curriculum</li>
                <li><strong>"Softening Children":</strong> Emotional attention is weakness, talking about feelings is feminizing, schools should harden not soften</li>
                <li><strong>State Overreach:</strong> A child's social-emotional development is a responsibility that rests with parents, not educators</li>
                <li><strong>Data Collection Concerns:</strong> SEL involves surveys and tracking of student emotional states - seen as "data mining"</li>
              </ul>
            </div>
          </div>

          <div className={styles.howThreadsDiffers}>
            <h3>How Threads Differs from SEL in Politically Relevant Ways</h3>

            <div className={styles.differenceTable}>
              <table>
                <thead>
                  <tr>
                    <th>SEL Vulnerability</th>
                    <th>Threads Difference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Competency-based (schools assess your emotional skills)</td>
                    <td>Capacity-based (you develop ability to hold tension - no assessment rubric)</td>
                  </tr>
                  <tr>
                    <td>Prescriptive outcomes (what you should feel, how you should regulate)</td>
                    <td>Non-prescriptive (who do YOU want to become?)</td>
                  </tr>
                  <tr>
                    <td>Institutional framing (schools define emotional health)</td>
                    <td>Individual agency (the child chooses their own becoming)</td>
                  </tr>
                  <tr>
                    <td>Survey/assessment heavy (data collection on psychological states)</td>
                    <td>Action-based tracking (count S.A.F.E. slips, not feelings)</td>
                  </tr>
                  <tr>
                    <td>Curriculum delivery (lessons about emotions)</td>
                    <td>In-moment practice (one sentence when conflict happens)</td>
                  </tr>
                  <tr>
                    <td>Compliance orientation (regulate yourself for classroom order)</td>
                    <td>Identity formation (become who you want to be, even if that's challenging)</td>
                  </tr>
                  <tr>
                    <td>Progressive association (CASEL, DEI alignment)</td>
                    <td>No ideological home (tension-holding doesn't prescribe political conclusions)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className={`${styles.strategicPositioning} section-lg`}>
        <div className="container">
          <h2>Strategic Positioning</h2>

          <div className={styles.framingOptions}>
            <h3>Four Framing Options</h3>

            <div className={styles.framingGrid}>
              <div className={styles.framingCard}>
                <h4>Frame 1: "This is how SEL actually works"</h4>
                <p>
                  "You're already committed to social-emotional development. S.A.F.E. makes it work in real time,
                  in the hallways, at recess - not just in SEL lessons."
                </p>
              </div>

              <div className={styles.framingCard}>
                <h4>Frame 2: "This is the missing piece"</h4>
                <p>
                  "SEL gives vocabulary and strategies. S.A.F.E. gives practice. You need both. But without the practice
                  component, SEL doesn't transfer."
                </p>
              </div>

              <div className={styles.framingCard}>
                <h4>Frame 3: "This is SEL for adults"</h4>
                <p>
                  "S.A.F.E. isn't just for students. It's a shared language for everyone - teachers, staff, parents.
                  That's what makes culture change possible."
                </p>
              </div>

              <div className={styles.framingCard}>
                <h4>Frame 4: "This is deeper than competencies"</h4>
                <p>
                  "SEL develops skills. Threads develops the capacity to hold tension that skills can't address.
                  When life gets genuinely hard, skills aren't enough. You need the ability to stay present with what can't be fixed."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Positioning Statements */}
      <section className={`${styles.corePositioning} section-lg`}>
        <div className="container">
          <h2>Core Positioning Statements for Different Audiences</h2>

          <div className={styles.positioningStatements}>
            <div className={styles.statementCard}>
              <h3>For Schools:</h3>
              <blockquote>
                "We're not telling your community what values to hold. We're giving everyone - teachers, parents, students, staff -
                shared language for navigating conflict. What emerges from that navigation reflects YOUR community's values, not ours."
              </blockquote>
            </div>

            <div className={styles.statementCard}>
              <h3>For Parents:</h3>
              <blockquote>
                "Threads doesn't replace your role as the primary former of your child's character. It gives you and your child
                shared language for the conversations you're already having. You decide who your child should become.
                Threads helps them practice conscious choice."
              </blockquote>
            </div>

            <div className={styles.statementCard}>
              <h3>For Districts:</h3>
              <blockquote>
                "This isn't a curriculum with content to approve or reject. It's a protocol for moments. There's no ideology
                to vet because there's no prescribed outcome. The outcomes are determined by your community."
              </blockquote>
            </div>

            <div className={styles.statementCard}>
              <h3>For Politically Diverse Contexts:</h3>
              <blockquote>
                "Conservative parents and progressive parents both want their children to be able to hold difficulty without collapsing.
                They disagree about what that looks like. Threads doesn't resolve that disagreement - it gives both families
                capacity-building tools that work regardless of their conclusions."
              </blockquote>
            </div>

            <div className={styles.statementCard}>
              <h3>For General Audiences:</h3>
              <blockquote>
                "Threads doesn't tell children what to think or feel. It helps them develop capacity to navigate life's genuine
                tensions - tensions every human faces regardless of background or belief. Families and communities provide the values.
                Threads provides the practice."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Thread Examples Across Divides */}
      <section className={`${styles.threadExamples} section-lg`}>
        <div className="container">
          <h2>Thread Examples Across Political Divides</h2>

          <div className={styles.examplesGrid}>
            <div className={styles.exampleCard}>
              <h3>CONSENT Thread</h3>
              <p className={styles.question}>The question: "What may I? Who gets to choose?"</p>

              <div className={styles.navigation}>
                <div className={styles.navItem}>
                  <strong>Progressive navigation:</strong>
                  <p>"My body, my choice. Question authority. Consent must be affirmative and ongoing."</p>
                </div>
                <div className={styles.navItem}>
                  <strong>Conservative navigation:</strong>
                  <p>"Respect for elders. Boundaries within tradition. Consent exists within structures of legitimate authority."</p>
                </div>
              </div>

              <p className={styles.exampleNote}>
                Both families are navigating the same Thread. The capacity to hold the CONSENT tension - to feel both "Self + Yes"
                and "Other + No" simultaneously - is valuable regardless of where you land.
              </p>
            </div>

            <div className={styles.exampleCard}>
              <h3>MEMORY Thread</h3>
              <p className={styles.question}>The question: "Why do I...? What stories am I carrying?"</p>

              <div className={styles.navigation}>
                <div className={styles.navItem}>
                  <strong>Progressive exploration:</strong>
                  <p>"What inherited biases am I carrying? What needs to be unlearned?"</p>
                </div>
                <div className={styles.navItem}>
                  <strong>Conservative exploration:</strong>
                  <p>"What wisdom from ancestors am I losing? What needs to be recovered?"</p>
                </div>
              </div>

              <p className={styles.exampleNote}>
                Same Thread. Different directions. Both legitimate. The capacity to distinguish "Given + Told" (story that tells me
                who I must be) from "Given + Telling" (inheritance I carry freely) is valuable for both.
              </p>
            </div>

            <div className={styles.exampleCard}>
              <h3>UNCERTAINTY Thread</h3>
              <p className={styles.question}>The question: "What is the mystery unveiling?"</p>

              <div className={styles.navigation}>
                <div className={styles.navItem}>
                  <strong>Religious conservative holding:</strong>
                  <p>"I rest in faith. Mystery is God's domain. Certainty comes from revelation."</p>
                </div>
                <div className={styles.navItem}>
                  <strong>Secular progressive holding:</strong>
                  <p>"I stay curious. Mystery is endless. Certainty is the enemy of growth."</p>
                </div>
              </div>

              <p className={styles.exampleNote}>
                Both are navigating the same Thread. The "Hide vs. Seek" and "Threat vs. Wonder" tensions are universal.
                How you resolve them is yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Profound Insight */}
      <section className={`${styles.profoundInsight} section-lg`}>
        <div className="container">
          <h2>The Profound Insight: Questions Unite, Answers Divide</h2>

          <div className={styles.insightContent}>
            <p className={styles.insightLead}>
              The deepest claim in this positioning:
            </p>

            <blockquote className={styles.insightQuote}>
              "Questions unite, answers divide. When we share questions, we can be in genuine relationship even with different answers."
            </blockquote>

            <div className={styles.insightExplanation}>
              <p>Traditional frameworks offer <strong>answers</strong>. Answers create sides:</p>
              <ul>
                <li>SEL says: "Here's what emotional health looks like"</li>
                <li>Anti-SEL says: "That's indoctrination - we reject it"</li>
                <li>Now we have two camps, fighting over whose answer wins</li>
              </ul>

              <p>Threads offers <strong>questions</strong>. Questions create shared inquiry:</p>
              <ul>
                <li>"What tension is alive here?"</li>
                <li>"Can both be true?"</li>
                <li>"Who do you want to become?"</li>
              </ul>

              <p className={styles.insightConclusion}>
                These questions don't have liberal or conservative answers. They have <em>human</em> answers - and those answers
                will vary by person, family, community, tradition.
              </p>

              <p className={styles.insightFinal}>
                <strong>The "between" outcome isn't compromise.</strong> It's not splitting the difference between Left and Right.
                It's creating a space where the question itself is shared, even when answers differ.
              </p>
            </div>

            <div className={styles.universality}>
              <h3>This is why Threads can work across:</h3>
              <ul>
                <li>Red and blue states</li>
                <li>Religious and secular contexts</li>
                <li>Different cultural traditions</li>
                <li>Progressive and conservative families</li>
              </ul>
              <p className={styles.universalityNote}>
                <strong>The Threads are universal. The navigation is local.</strong>
              </p>
            </div>

            <div className={styles.belovedCommunity}>
              <h3>The "Beloved Community" Connection</h3>
              <p>
                This connects to UU work on Beloved Community. The Beloved Community isn't agreement - it's the capacity to remain
                in relationship across difference.
              </p>
              <p>
                Threads provides the <em>capacity</em> for Beloved Community without defining what that community believes.
                It's infrastructure for relationship, not content for agreement.
              </p>
              <p>
                In this sense, Threads is deeply aligned with the pluralistic vision of American democracy at its best -
                not "we all agree" but "we can hold tension together while disagreeing."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BehavioralEmotionalLandscape;
