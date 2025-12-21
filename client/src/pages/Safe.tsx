import React from 'react';
import styles from './Safe.module.css';

const Safe: React.FC = () => {
  return (
    <div className={styles.safe}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>S.A.F.E. For All</h1>
        <h2 className={`${styles.tagline} tagline`}>
          An anti-bullying framework built on Threads of Becoming
        </h2>
        <p className={styles.heroBrief}>
          See. Ask. Feel. Emerge.
        </p>
      </section>

      {/* Core Insight */}
      <section className={`${styles.insight} section-lg`}>
        <div className="container">
          <h2>The Core Insight</h2>
          <p className={styles.insightText}>
            Most anti-bullying programs fail because they collapse into the very binary they're trying to solve: good kid/bad kid, victim/bully, safe/unsafe.
          </p>
          <p className={styles.insightText}>
            <strong>S.A.F.E. works differently.</strong> It teaches everyone—the kid being hurt, the kid doing harm, and the witnesses—how to hold the tension of difficult moments without collapsing into shame, blame, or helplessness.
          </p>
          <p className={styles.insightHighlight}>
            When a child learns to be S.A.F.E., they're not learning rules. They're learning who they want to become when things get hard.
          </p>
        </div>
      </section>

      {/* Anti-Bullying Trap */}
      <section className={`${styles.antiBullyingTrap} section-lg`}>
        <div className="container">
          <h2>The Anti-Bullying Trap</h2>
          <p className={styles.trapTeaser}>
            Traditional anti-bullying programs may be creating the very dynamics they claim to prevent—producing victim identity,
            atrophying conflict capacity, and collapsing every Thread in the name of protecting children.
          </p>

          <details className={styles.trapAccordion}>
            <summary className={styles.trapSummary}>
              <span className={styles.trapIcon}>⚠️</span>
              <span className={styles.trapTitle}>Why Protection Without Capacity Fails Our Children</span>
              <span className={styles.trapChevron}>▼</span>
            </summary>

            <div className={styles.trapContent}>
              <h3>The 7 Unexamined Assumptions</h3>

              <div className={styles.assumptionsList}>
                <div className={styles.assumption}>
                  <h4>1. Children Cannot Navigate Social Conflict</h4>
                  <p>
                    The policy: "Report immediately. Don't handle it yourself." This collapses <strong>BECOMING</strong> into fixed incapacity
                    and eliminates <strong>PAUSE</strong>—no space between experience and adult intervention.
                  </p>
                </div>

                <div className={styles.assumption}>
                  <h4>2. Every Negative Social Interaction Is Bullying</h4>
                  <p>
                    Zero tolerance teaches children that any uncomfortable social experience is a violation, violating <strong>CONSENT</strong>
                    paradoxically: telling children they have a right to be included (violating others' consent to choose their friends).
                  </p>
                </div>

                <div className={styles.assumption}>
                  <h4>3. Immediate Reporting Produces Better Outcomes</h4>
                  <p>
                    The reporting imperative eliminates <strong>PAUSE</strong>. Children learn: "Don't reflect. Don't wait. Report immediately."
                    This produces adults who escalate to HR, lawyers, social media at the first sign of conflict.
                  </p>
                </div>

                <div className={styles.assumption}>
                  <h4>4. The Victim/Bully Binary Is Real and Useful</h4>
                  <p>
                    If victim = protection + moral authority, and bully = punishment + shame, children learn to race to the victim position.
                    This collapses <strong>BECOMING</strong> into fixed identity: "I am a victim" or "I am a bully."
                  </p>
                </div>

                <div className={styles.assumption}>
                  <h4>5. Parents Are Helpful Allies</h4>
                  <p>
                    Parents receive distorted narratives and often escalate conflicts. The <strong>MEMORY</strong> problem: once the story
                    is told, it crystallizes and becomes fixed truth—even if incomplete or self-serving.
                  </p>
                </div>

                <div className={styles.assumption}>
                  <h4>6. Prevention Means Awareness Campaigns</h4>
                  <p>
                    Awareness lives in the head; capacity lives in the body. Traditional anti-bullying lacks <strong>EMBODIMENT</strong>—all
                    cognition ("bullying is wrong") with no somatic capacity building.
                  </p>
                </div>

                <div className={styles.assumption}>
                  <h4>7. Schools Can (and Should) Eliminate Social Harm</h4>
                  <p>
                    The system demands certainty: "Is this bullying or not?" But social life requires holding <strong>UNCERTAINTY</strong>.
                    Systems that can't hold uncertainty produce false certainty and missed complexity.
                  </p>
                </div>
              </div>

              <div className={styles.victimFactory}>
                <h3>The Victim Identity Factory</h3>
                <p className={styles.factoryHighlight}>
                  Traditional anti-bullying doesn't just fail to help children—it actively produces victim identity.
                </p>
                <p>
                  When children learn that presenting as a victim gets them protection, attention, and moral authority, while the other person gets punished,
                  the system creates an incentive to claim victim status. This prevents children from developing the <strong>CONSENT</strong> capacity
                  to say "no" because they never get to practice—adults swoop in every time.
                </p>
              </div>

              <div className={styles.threadCollapse}>
                <h3>What Traditional Anti-Bullying Actually Collapses</h3>
                <div className={styles.collapseGrid}>
                  <div className={styles.collapseItem}>
                    <strong>PRESENCE:</strong> Removes children from their own social "between"—adults occupy the space
                  </div>
                  <div className={styles.collapseItem}>
                    <strong>CONSENT:</strong> Doesn't ask if children want intervention—imposes adult will
                  </div>
                  <div className={styles.collapseItem}>
                    <strong>MEMORY:</strong> Crystallizes distorted narratives immediately—no space for revision
                  </div>
                  <div className={styles.collapseItem}>
                    <strong>PAUSE:</strong> Eliminates reflection—immediate reporting, speed over wisdom
                  </div>
                  <div className={styles.collapseItem}>
                    <strong>EMBODIMENT:</strong> All cognition (awareness), no body (capacity building)
                  </div>
                  <div className={styles.collapseItem}>
                    <strong>UNCERTAINTY:</strong> Demands false certainty—forces binary determinations
                  </div>
                  <div className={styles.collapseItem}>
                    <strong>BECOMING:</strong> Fixes identity (victim/bully) rather than holding becoming
                  </div>
                </div>
              </div>

              <div className={styles.trapFooter}>
                <p className={styles.trapHighlight}>
                  S.A.F.E. and Threads offer a paradigm shift: from protection without capacity to capacity-building within appropriate protection.
                </p>
                <a href="/safe/anti-bullying-trap" className={styles.trapLink}>
                  Read the Full Critique: The Anti-Bullying Trap →
                </a>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* The Framework */}
      <section className={`${styles.framework} section-lg`}>
        <div className="container">
          <h2 className={styles.frameworkTitle}>S.A.F.E.: See. Ask. Feel. Emerge.</h2>

          <div className={styles.steps}>
            {/* S - See */}
            <div className={`${styles.step} ${styles.stepSee}`}>
              <div className={styles.stepHeader}>
                <div className={styles.stepLetter}>S</div>
                <div className={styles.stepTitleBlock}>
                  <h3>See What's Happening</h3>
                  <p className={styles.stepSubtitle}>Notice what's happening in your body and around you</p>
                </div>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepSection}>
                  <h4>What this means:</h4>
                  <ul>
                    <li>Your heart is beating fast</li>
                    <li>Your face feels hot</li>
                    <li>Someone is saying words that hurt</li>
                    <li>Someone is being left out</li>
                    <li>Your hands want to push</li>
                  </ul>
                </div>

                <div className={styles.threadConnection}>
                  <strong>Thread Foundation:</strong> PRESENCE (Within / Between) + EMBODIMENT (Body knows)
                </div>

                <div className={styles.perspectives}>
                  <div className={styles.perspective}>
                    <h5>For the kid being hurt:</h5>
                    <p>"I see that I'm being left out. I see that my stomach hurts."</p>
                  </div>
                  <div className={styles.perspective}>
                    <h5>For the kid doing harm:</h5>
                    <p>"I see that I'm about to say something mean. I see that I want them to feel small."</p>
                  </div>
                  <div className={styles.perspective}>
                    <h5>For the witness:</h5>
                    <p>"I see someone being hurt. I see that I'm scared to help."</p>
                  </div>
                </div>

                <div className={styles.transformation}>
                  <h4>Why this is transformative:</h4>
                  <p>Most programs tell kids "don't bully" or "tell an adult." S.A.F.E. teaches presence first—noticing what's happening in your body and around you before reacting.</p>
                  <p className={styles.transformHighlight}>When kids learn to SEE (both internally and externally), they develop <strong>awareness before action</strong>—the foundation of all self-regulation and empathy.</p>
                </div>
              </div>
            </div>

            {/* A - Ask */}
            <div className={`${styles.step} ${styles.stepAsk}`}>
              <div className={styles.stepHeader}>
                <div className={styles.stepLetter}>A</div>
                <div className={styles.stepTitleBlock}>
                  <h3>Ask About the Tension</h3>
                  <p className={styles.stepSubtitle}>What's the push-pull? What are both sides pulling toward?</p>
                </div>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepSection}>
                  <h4>Instead of "Who's the bad guy?" we ask "What tension is alive here?"</h4>

                  <div className={styles.tensionExamples}>
                    <div className={styles.tensionExample}>
                      <h5>Exclusion:</h5>
                      <p>"I want to belong / I want to be myself"</p>
                      <p>"I want my special friends / I know how it feels to be left out"</p>
                    </div>
                    <div className={styles.tensionExample}>
                      <h5>Physical aggression:</h5>
                      <p>"I'm angry / I don't want to hurt people"</p>
                      <p>"I want respect / I don't want to solve this with fists"</p>
                    </div>
                    <div className={styles.tensionExample}>
                      <h5>Relational aggression:</h5>
                      <p>"I want power / I don't want to be mean"</p>
                      <p>"I want them to like me / I can't control what others think"</p>
                    </div>
                    <div className={styles.tensionExample}>
                      <h5>For witnesses:</h5>
                      <p>"I want to help / I'm scared"</p>
                      <p>"I want to fit in / I know this is wrong"</p>
                    </div>
                  </div>
                </div>

                <div className={styles.threadConnection}>
                  <strong>Thread Foundation:</strong> All seven threads show up in bullying dynamics—PRESENCE, CONSENT, MEMORY, PAUSE, EMBODIMENT, UNCERTAINTY, BECOMING
                </div>

                <div className={styles.transformation}>
                  <h4>Why this is transformative:</h4>
                  <p>Traditional programs frame conflict as "victim vs. bully." ASK reframes it as tension—two competing needs or values pulling against each other.</p>
                  <p className={styles.transformHighlight}>When kids learn to ASK about the tension (not assign blame), they develop <strong>complexity thinking</strong>: "Both sides have needs. How do we hold that?"</p>
                </div>
              </div>
            </div>

            {/* F - Feel */}
            <div className={`${styles.step} ${styles.stepFeel}`}>
              <div className={styles.stepHeader}>
                <div className={styles.stepLetter}>F</div>
                <div className={styles.stepTitleBlock}>
                  <h3>Feel Both Sides</h3>
                  <p className={styles.stepSubtitle}>Can you feel both pulls at the same time? Can both be true?</p>
                </div>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepSection}>
                  <h4>This is the hardest step and the most powerful.</h4>
                  <p className={styles.emphasis}>Can you hold opposing truths without one winning?</p>
                </div>

                <div className={styles.perspectives}>
                  <div className={styles.perspective}>
                    <h5>For the kid being hurt:</h5>
                    <ul>
                      <li>"You deserve to be included AND other kids get to choose their friends. Both true?"</li>
                      <li>"You want them to stop AND you can't control what they do. Can you hold both?"</li>
                      <li>"You're brave AND you're scared. Both at the same time?"</li>
                    </ul>
                  </div>
                  <div className={styles.perspective}>
                    <h5>For the kid doing harm:</h5>
                    <ul>
                      <li>"You feel powerful when you're mean AND you don't like who you're being. Both true?"</li>
                      <li>"You're angry at them AND anger doesn't mean you get to hurt them. Can you feel both?"</li>
                      <li>"You want your friends to think you're tough AND being tough doesn't mean making others small. Both?"</li>
                    </ul>
                  </div>
                  <div className={styles.perspective}>
                    <h5>For the witness:</h5>
                    <ul>
                      <li>"You want to help AND you're scared of becoming a target. Both real?"</li>
                      <li>"You care about your friend being hurt AND you don't want to lose your other friends. Can both matter?"</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.threadConnection}>
                  <strong>Thread Foundation:</strong> HOLD (the core practice of holding tension without collapse)
                </div>

                <div className={styles.transformation}>
                  <h4>Why this is transformative:</h4>
                  <p>When kids learn to FEEL both sides, they stop collapsing into victim mentality ("I'm helpless"), aggressor mentality ("They deserve it"), or bystander paralysis ("There's nothing I can do").</p>
                  <p className={styles.transformHighlight}>Instead they develop <strong>agency within complexity</strong>: "This is hard AND I can choose who I want to be."</p>
                </div>
              </div>
            </div>

            {/* E - Emerge */}
            <div className={`${styles.step} ${styles.stepEmerge}`}>
              <div className={styles.stepHeader}>
                <div className={styles.stepLetter}>E</div>
                <div className={styles.stepTitleBlock}>
                  <h3>Emerge as Who You Want to Be</h3>
                  <p className={styles.stepSubtitle}>Who do you want to be in this moment? What kind of person are you becoming?</p>
                </div>
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepSection}>
                  <h4>This isn't "what should you do" (rules).</h4>
                  <p className={styles.emphasis}>It's "who are you becoming" (identity formation).</p>
                </div>

                <div className={styles.perspectives}>
                  <div className={styles.perspective}>
                    <h5>For the kid being hurt:</h5>
                    <ul>
                      <li>"Do you want to be someone who falls apart when one person is mean? Or someone who can feel hurt AND still have a good day?"</li>
                      <li>"Do you want to be someone who needs everyone to like them? Or someone who knows they're valuable even when excluded?"</li>
                    </ul>
                  </div>
                  <div className={styles.perspective}>
                    <h5>For the kid doing harm:</h5>
                    <ul>
                      <li>"Do you want to be someone who gets power by making others small? Or someone who can feel big without making others feel little?"</li>
                      <li>"When you're angry, who do you become? Is that who you want to be?"</li>
                    </ul>
                  </div>
                  <div className={styles.perspective}>
                    <h5>For the witness:</h5>
                    <ul>
                      <li>"Do you want to be someone who watches others get hurt because you're scared? Or someone who can be scared AND still do the right thing?"</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.threadConnection}>
                  <strong>Thread Foundation:</strong> BECOMING (Who I've been / Who I'm becoming) + UNCERTAINTY (Mystery unveiling)
                </div>

                <div className={styles.transformation}>
                  <h4>Why this is transformative:</h4>
                  <p>It shifts from external control ("You're in trouble") to internal formation ("You're becoming someone").</p>
                  <p className={styles.transformHighlight}>The kid learns: <strong>I'm not a victim or a bully. I'm a person learning who I want to become.</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Grounding Accordion */}
          <h2 className={styles.researchSectionTitle}>Is S.A.F.E. Actually Safe?</h2>
          <p className={styles.researchTeaser}>
            From a developmental psychology standpoint, does this approach hold up? Are we threading a needle when we need a fire blanket?
            What about protected status and the "endangered list"—when does capacity-building cross the line into expecting too much from vulnerable students?
          </p>

          <details className={styles.researchAccordion}>
            <summary className={styles.researchSummary}>
              <span className={styles.researchIcon}>📚</span>
              <span className={styles.researchTitle}>Research Evidence & Critical Examination</span>
              <span className={styles.researchChevron}>▼</span>
            </summary>

            <div className={styles.researchContent}>

              <div className={styles.researchEvidence}>
              <h4>The Research Says: Traditional Approaches Collapse Toward NOW</h4>
              <div className={styles.collapsePoints}>
                <div className={styles.collapsePoint}>
                  <strong>Learned Helplessness (Seligman, 1967-present):</strong>
                  <p>"Tell an adult to fix it" → Child learns they have no control → Helplessness becomes identity</p>
                </div>
                <div className={styles.collapsePoint}>
                  <strong>Self-Determination Theory (Deci & Ryan, 1985):</strong>
                  <p>Traditional approaches deny autonomy ("adults decide"), competence ("you can't handle it"), and conditional relatedness ("victim good, bully bad"). S.A.F.E. supports all three.</p>
                </div>
                <div className={styles.collapsePoint}>
                  <strong>Identity Development (Erikson, Marcia):</strong>
                  <p>Traditional = Identity foreclosure ("You're the victim"). S.A.F.E. = Identity achievement ("Who do you want to EMERGE as?")</p>
                </div>
              </div>

              <h4>The Protected Status Problem: When Does Anyone Come Off the List?</h4>
              <div className={styles.protectedStatusBox}>
                <p className={styles.criticalQuestion}>
                  Traditional anti-bullying creates a system where victimhood becomes identity, protection becomes the goal, and there's no exit.
                  <strong> Students learn that the path to safety is through protected status, not through capacity.</strong>
                </p>
                <div className={styles.exitRamps}>
                  <div className={styles.traditionalExit}>
                    <h5>Traditional Answer: Never</h5>
                    <ul>
                      <li>Your protection is permanent because your vulnerability is permanent</li>
                      <li>Power comes from victimhood status (borrowed from enforcers)</li>
                      <li>Safety only exists when authority is present</li>
                    </ul>
                  </div>
                  <div className={styles.safeExit}>
                    <h5>S.A.F.E. Answer: You Were Never ON the List</h5>
                    <ul>
                      <li>You're not "endangered species"—you're human navigating tension</li>
                      <li>You have vulnerability (real) AND capacity (also real)</li>
                      <li>You're defined by who you're BECOMING, not what happened to you</li>
                      <li>Safety comes from within (capacity) AND from without (authority)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.exitRampCallout}>
                <h4>🔑 Key Insight: Exit Ramps, Not Free Passes</h4>
                <p className={styles.exitRampText}>
                  <strong>S.A.F.E. doesn't remove consequences for bullying—it provides EXIT RAMPS from victim and aggressor roles.</strong>
                </p>
                <p>
                  Traditional approaches lock kids into permanent identities: "You're the victim" (helpless), "You're the bully" (bad).
                  S.A.F.E. says: "You're BECOMING. Who do you choose to be?" Consequences still apply for harm,
                  <strong> but the child also learns how to emerge differently.</strong>
                </p>
              </div>

              <h4>The Both/And We Must Hold</h4>
              <div className={styles.bothAndBox}>
                <div className={styles.bothAndSide}>
                  <h5>Traditional Approaches Are RIGHT:</h5>
                  <ul>
                    <li>Kids need protection NOW</li>
                    <li>Authority must intervene in crisis</li>
                    <li>Vulnerable students need to know adults will keep them safe</li>
                  </ul>
                </div>
                <div className={styles.bothAndSide}>
                  <h5>S.A.F.E. Is ALSO RIGHT:</h5>
                  <ul>
                    <li>Kids need capacity for NOT YET</li>
                    <li>Most conflicts (90-95%) are tension, not crisis</li>
                    <li>Vulnerable students need to know THEY can keep themselves safe (eventually)</li>
                  </ul>
                </div>
              </div>

              <p className={styles.researchConclusion}>
                <strong>S.A.F.E. is safe enough when it's part of a complete system</strong> (legal protections + crisis support + daily capacity-building).
                Alone, it's not enough. But traditional approaches alone aren't enough either.
                <strong> Together, they might be.</strong>
              </p>
            </div>

            <div className={styles.researchFooter}>
              <p className={styles.researchHighlight}>
                Want even more depth? Explore 6 areas of developmental psychology research, honest examination of when S.A.F.E. is NOT enough, and the critical question:
                <strong> When does anyone come off the endangered list?</strong>
              </p>
              <a href="/safe/capacity-building" className={styles.researchLink}>
                Read the Full Research & Critical Examination →
              </a>
            </div>
            </div>
          </details>
        </div>
      </section>

      {/* How S.A.F.E. Creates Safety */}
      <section className={`${styles.safety} section-lg`}>
        <div className="container">
          <h2>How S.A.F.E. Creates Safety for Everyone</h2>
          <p className={styles.safetyTeaser}>
            How does one framework simultaneously protect the student being hurt, the student doing harm, witnesses, and teachers?
          </p>

          <details className={styles.safetyAccordion}>
            <summary className={styles.safetySummary}>
              <span className={styles.safetyIcon}>🛡️</span>
              <span className={styles.safetyTitle}>See How S.A.F.E. Protects Each Person</span>
              <span className={styles.safetyChevron}>▼</span>
            </summary>

            <div className={styles.safetyContent}>

          <div className={styles.safetyGrid}>
            <div className={styles.safetyCard}>
              <h3>For the Kid Being Hurt</h3>
              <div className={styles.comparison}>
                <div className={styles.traditional}>
                  <h4>Traditional Approach Creates:</h4>
                  <ul>
                    <li>Helplessness ("I need adults to save me")</li>
                    <li>Shame ("Something's wrong with me")</li>
                    <li>Binary thinking ("They're bad, I'm good")</li>
                  </ul>
                </div>
                <div className={styles.safeApproach}>
                  <h4>S.A.F.E. Creates:</h4>
                  <ul>
                    <li><strong>See:</strong> "I notice what's happening" (awareness)</li>
                    <li><strong>Ask:</strong> "I see the tension they're in too" (complexity)</li>
                    <li><strong>Feel:</strong> "I can hold that I deserve respect AND I can't control them" (agency)</li>
                    <li><strong>Emerge:</strong> "I'm becoming someone who doesn't need everyone's approval to be okay" (resilience)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.safetyCard}>
              <h3>For the Kid Doing Harm</h3>
              <div className={styles.comparison}>
                <div className={styles.traditional}>
                  <h4>Traditional Approach Creates:</h4>
                  <ul>
                    <li>Defensiveness ("It wasn't my fault")</li>
                    <li>Shame ("I'm a bad kid")</li>
                    <li>Underground behavior ("Don't get caught next time")</li>
                  </ul>
                </div>
                <div className={styles.safeApproach}>
                  <h4>S.A.F.E. Creates:</h4>
                  <ul>
                    <li><strong>See:</strong> "I notice I'm about to do something I'll regret" (self-awareness)</li>
                    <li><strong>Ask:</strong> "I want to feel powerful but this isn't real power" (understanding)</li>
                    <li><strong>Feel:</strong> "I'm angry AND that doesn't mean I get to hurt people" (accountability without shame)</li>
                    <li><strong>Emerge:</strong> "I'm becoming someone who can be strong without making others weak" (transformation)</li>
                  </ul>
                  <p className={styles.safetyNote}>This is safe because: The child isn't told they're bad. They're invited to become who they want to be.</p>
                </div>
              </div>
            </div>

            <div className={styles.safetyCard}>
              <h3>For the Witness</h3>
              <div className={styles.comparison}>
                <div className={styles.traditional}>
                  <h4>Traditional Approach Creates:</h4>
                  <ul>
                    <li>Guilt ("I should have helped")</li>
                    <li>Helplessness ("What could I do?")</li>
                    <li>Relief ("At least it wasn't me")</li>
                  </ul>
                </div>
                <div className={styles.safeApproach}>
                  <h4>S.A.F.E. Creates:</h4>
                  <ul>
                    <li><strong>See:</strong> "I notice someone being hurt and I'm scared" (honesty)</li>
                    <li><strong>Ask:</strong> "I want to help AND I'm afraid of becoming a target" (real tension)</li>
                    <li><strong>Feel:</strong> "Both are true—I can be scared AND still act" (courage)</li>
                    <li><strong>Emerge:</strong> "I'm becoming someone who helps even when it's scary" (moral development)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.safetyCard}>
              <h3>For the Teacher</h3>
              <div className={styles.comparison}>
                <div className={styles.traditional}>
                  <h4>Traditional Approach Creates:</h4>
                  <ul>
                    <li>Exhaustion (constant enforcement)</li>
                    <li>Binary thinking (punish the bully, rescue the victim)</li>
                    <li>Failure (behaviors continue underground)</li>
                  </ul>
                </div>
                <div className={styles.safeApproach}>
                  <h4>S.A.F.E. Creates:</h4>
                  <ul>
                    <li>A shared language for the whole class</li>
                    <li>Culture change instead of incident management</li>
                    <li>Space to hold complexity without having all the answers</li>
                  </ul>
                  <p className={styles.safetyNote}>This is safe because: The teacher doesn't have to know who's "really" at fault or have perfect solutions. They facilitate tension-holding.</p>
                </div>
              </div>
            </div>
          </div>
            </div>
          </details>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className={`${styles.different} section-lg`}>
        <div className="container">
          <h2>What Makes This Different from Other Anti-Bullying Programs</h2>

          <div className={styles.comparisonTable}>
            <div className={styles.comparisonColumn}>
              <h3>Traditional Programs</h3>
              <ul>
                <li>❌ Focus on rules ("Don't bully")</li>
                <li>❌ Create victim/bully binary</li>
                <li>❌ External control (punishment/rewards)</li>
                <li>❌ Incident-focused</li>
                <li>❌ Teacher as enforcer</li>
              </ul>
            </div>
            <div className={styles.comparisonColumn}>
              <h3>S.A.F.E. with Threads</h3>
              <ul>
                <li>✅ Focus on identity formation ("Who are you becoming?")</li>
                <li>✅ Everyone is navigating tension</li>
                <li>✅ Internal development (agency within complexity)</li>
                <li>✅ Culture-focused</li>
                <li>✅ Teacher as facilitator of tension-holding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Training */}
      <section className={`${styles.training} section-lg`}>
        <div className="container">
          <h2>Teacher Training: S.A.F.E. Classroom Integration</h2>
          <p className={styles.trainingIntro}>
            16-hour professional development designed specifically for elementary educators
          </p>

          <div className={styles.modules}>
            <div className={styles.module}>
              <h3>Module 1: Your Own S.A.F.E. Practice</h3>
              <p className={styles.moduleTime}>4 hours</p>
              <p>Teachers practice S.A.F.E. with their own tensions. You can't teach what you don't embody.</p>
              <ul>
                <li>Personal work with classroom management tensions</li>
                <li>Colleague conflicts and admin pressures</li>
                <li>Experiencing the framework from the inside</li>
              </ul>
            </div>

            <div className={styles.module}>
              <h3>Module 2: Thread Foundation</h3>
              <p className={styles.moduleTime}>4 hours</p>
              <p>Understanding the seven threads underneath S.A.F.E.</p>
              <ul>
                <li>How threads show up in bullying dynamics</li>
                <li>Mapping S.A.F.E. to Threads framework</li>
                <li>Recognizing collapse vs. holding tension</li>
              </ul>
            </div>

            <div className={styles.module}>
              <h3>Module 3: Developmental Applications</h3>
              <p className={styles.moduleTime}>4 hours</p>
              <p>Age-appropriate language and complexity.</p>
              <ul>
                <li>K-2 vs. 3-5 adaptations</li>
                <li>Story-based teaching with picture books</li>
                <li>Role-play practice for different scenarios</li>
              </ul>
            </div>

            <div className={styles.module}>
              <h3>Module 4: Classroom Culture Building</h3>
              <p className={styles.moduleTime}>4 hours</p>
              <p>Creating S.A.F.E. as your classroom's shared language.</p>
              <ul>
                <li>Morning circle protocols</li>
                <li>Real-time coaching during conflicts</li>
                <li>Parent communication strategies</li>
                <li>Measuring culture change (not just incident reports)</li>
              </ul>
            </div>
          </div>

          <p className={styles.trainingNote}>
            <strong>Note:</strong> S.A.F.E. training is part of the Threads for Educators pathway. Teachers completing this training receive 1.6 CEUs and can continue to Tier 2 for full facilitator certification.
          </p>
        </div>
      </section>

      {/* SEE & ACT: Crisis Protocol */}
      <section className={`${styles.crisisProtocol} section-lg`}>
        <div className="container">
          <h2>Critical: SEE & ACT for Physical Violence or Serious Harm</h2>
          <p className={styles.crisisIntro}>
            <strong>S.A.F.E. is NOT for every situation.</strong> When there's physical violence or serious harm happening, you don't facilitate tension-holding—you intervene immediately.
          </p>

          <div className={styles.protocolComparison}>
            <div className={styles.crisisBox}>
              <h3>🚨 SEE & ACT (Immediate Response)</h3>
              <h4>Use When:</h4>
              <ul>
                <li>Physical violence happening NOW</li>
                <li>Credible threats of harm</li>
                <li>Sexual harassment/assault</li>
                <li>Weapons present</li>
                <li>Child abuse disclosure</li>
                <li>Student at risk of self-harm</li>
                <li>Serious bullying pattern escalating to danger</li>
              </ul>
              <h4>Action Steps:</h4>
              <ol>
                <li><strong>SEE the crisis clearly:</strong> "This is physical violence/threat/harm"</li>
                <li><strong>ACT immediately:</strong> Stop the harm, separate bodies, ensure safety</li>
                <li><strong>Get help:</strong> Admin, SRO, 911 if needed</li>
                <li><strong>Secure safety FIRST</strong></li>
              </ol>
              <p className={styles.crisisNote}>NO tension-holding. NO "both sides." Just STOP THE HARM.</p>
            </div>

            <div className={styles.safeBox}>
              <h3>🤝 S.A.F.E. (Tension-Holding)</h3>
              <h4>Use When:</h4>
              <ul>
                <li>Social conflict (no physical danger)</li>
                <li>Exclusion from activity/game</li>
                <li>Unkind words said</li>
                <li>Disagreement/argument</li>
                <li>Hurt feelings</li>
                <li>Navigating difficult tensions</li>
              </ul>
              <h4>Process:</h4>
              <ol>
                <li><strong>See</strong> what's happening</li>
                <li><strong>Ask</strong> about the tension</li>
                <li><strong>Feel</strong> both sides</li>
                <li><strong>Emerge</strong> as who you want to be</li>
              </ol>
              <p className={styles.safeNote}>Facilitate growth and learning through holding complexity.</p>
            </div>
          </div>

          <div className={styles.afterCrisis}>
            <h3>After Safety is Secured</h3>
            <p>Once the immediate crisis is resolved and physical safety is established, <strong>then</strong> you may use S.A.F.E. as part of:</p>
            <ul>
              <li>Restorative practices</li>
              <li>Counseling support</li>
              <li>Classroom re-entry planning</li>
              <li>Healing and accountability work</li>
            </ul>
            <p className={styles.emphasis}>The order matters: <strong>Safety FIRST → Then S.A.F.E.</strong></p>
          </div>

          {/* Misuse Prevention Accordion */}
          <details className={styles.critiqueAccordion}>
            <summary className={styles.critiqueSummary}>
              <span className={styles.critiqueIcon}>🚨</span>
              <span className={styles.critiqueText}>Misuse Prevention: When S.A.F.E. Must Not Be Used</span>
              <span className={styles.critiqueChevron}>▼</span>
            </summary>

            <div className={styles.critiqueContent}>
              {/* Introduction */}
              <div className={styles.critiqueIntro}>
                <p>While the S.A.F.E. framework is grounded in developmental psychology, it faces significant practical and philosophical challenges that could lead to failure if not managed correctly. This critique helps ensure responsible implementation.</p>
                <p className={styles.consequencesClarification}><strong>Important:</strong> Using S.A.F.E. does not eliminate consequences; it changes how learning and repair occur after safety is secured.</p>
              </div>

              {/* The 5 Critiques */}
              <div className={styles.critiquesGrid}>
                <div className={styles.critiqueCard}>
                  <div className={styles.critiqueNumber}>1</div>
                  <div className={styles.critiqueCardContent}>
                    <h3>The "Burning Victim" Paradox (Pace and Urgency)</h3>
                    <p className={styles.critiqueDesc}>S.A.F.E. might be too slow for an active crisis.</p>
                    <ul>
                      <li><strong>The Fire Blanket vs. The Needle:</strong> In a situation where a child is being tormented or physically harmed <em>now</em>, "holding the tension" can feel like an abdication of adult responsibility.</li>
                      <li><strong>Cognitive Overload:</strong> Students in a state of fight-or-flight (trauma response) are neurologically unable to engage in the reflection required for the SEE or FEEL steps.</li>
                      <li><strong>The Action Gap:</strong> If a school uses S.A.F.E. as a replacement for—rather than a supplement to—immediate intervention, it risks leaving vulnerable students in harm's way.</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.critiqueCard}>
                  <div className={styles.critiqueNumber}>2</div>
                  <div className={styles.critiqueCardContent}>
                    <h3>The Implementation Burden</h3>
                    <p className={styles.critiqueDesc}>S.A.F.E. is significantly "harder" to execute than traditional zero-tolerance policies.</p>
                    <ul>
                      <li><strong>Staff Fluency Requirements:</strong> It requires deep training for all staff; a teacher who skims the overview but doesn't understand the "Threads" can inadvertently re-traumatize a victim.</li>
                      <li><strong>Time Constraints:</strong> Traditional discipline (punishment) is fast; S.A.F.E. (capacity building) takes time that many teachers, managing 35–45 micro-conflicts a day, may not have.</li>
                      <li><strong>Systemic Fragility:</strong> The framework is "wishful thinking" if it exists in a vacuum without legal protections, clear consequences, or administrative backup.</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.critiqueCard}>
                  <div className={styles.critiqueNumber}>3</div>
                  <div className={styles.critiqueCardContent}>
                    <h3>The Power Differential Risk</h3>
                    <p className={styles.critiqueDesc}>S.A.F.E. could be misused in situations of extreme power imbalance.</p>
                    <ul>
                      <li><strong>False Neutrality:</strong> In cases of systematic bullying or abuse (where one student has massive social, physical, or age-related power over another), asking the victim to "hold tension" can feel like gaslighting.</li>
                      <li><strong>Coddling the Aggressor:</strong> By focusing on the bully's "unmet needs," the framework might avoid the necessary moral clarity that certain behaviors are simply unacceptable and require immediate sanction.</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.critiqueCard}>
                  <div className={styles.critiqueNumber}>4</div>
                  <div className={styles.critiqueCardContent}>
                    <h3>Behavioral Strategy "Stickiness"</h3>
                    <p className={styles.critiqueDesc}>Bullying often persists because it <strong>works</strong>—it provides status, laughter, and power.</p>
                    <ul>
                      <li><strong>The Reward Gap:</strong> If the social rewards for "collapsed play" (bullying) remain higher than the rewards for "holding tension," students will continue to choose the working strategy of bullying.</li>
                      <li><strong>Borrowed Pressure:</strong> If the child is managing intense pressure from home or trauma, the school-based S.A.F.E. protocol may not be enough to override the biological need to discharge that pressure through aggression.</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.critiqueCard}>
                  <div className={styles.critiqueNumber}>5</div>
                  <div className={styles.critiqueCardContent}>
                    <h3>Developmental Mismatch</h3>
                    <p className={styles.critiqueDesc}>If the framework asks for "therapy-level work" from children who are too young or cognitively overwhelmed, it will fail.</p>
                    <ul>
                      <li><strong>Age Appropriateness:</strong> Expecting a 5-year-old to navigate complex "identity formation" without heavy adult scaffolding may be unrealistic.</li>
                      <li><strong>Neurodiversity Barriers:</strong> Students with Autism or ADHD may find the abstract nature of "feeling the tension" inaccessible without heavy modification (Visuals/AAC).</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Red Flag Checklist */}
              <div className={styles.redFlagsSection}>
                <h3 className={styles.redFlagsSectionTitle}>🚨 The Red Flag Checklist: Stop S.A.F.E. Immediately</h3>
                <p className={styles.redFlagsIntro}>
                  To ensure S.A.F.E. is used responsibly, recognize when the "Not Yet" of capacity-building must yield to the "Now" of crisis intervention. The following conditions require immediate transition to the <strong>SEE & ACT</strong> crisis protocol.
                </p>

                <div className={styles.redFlagCategories}>
                  <div className={styles.redFlagCategory}>
                    <h4>1. Physical and Immediate Danger</h4>
                    <ul>
                      <li><strong>Active Violence:</strong> Physical harm is happening NOW (hitting, kicking, choking, or shoving).</li>
                      <li><strong>Weapon Presence:</strong> A student is in possession of or is threatening others with a weapon.</li>
                      <li><strong>Credible Threats:</strong> A student makes a specific, credible threat of imminent harm.</li>
                    </ul>
                  </div>

                  <div className={styles.redFlagCategory}>
                    <h4>2. Legal and Ethical Mandates</h4>
                    <ul>
                      <li><strong>Abuse Disclosure:</strong> A student discloses physical, sexual, or emotional abuse.</li>
                      <li><strong>Self-Harm/Suicide Risk:</strong> A student shows signs of self-harm or expresses suicidal ideation.</li>
                      <li><strong>Sexual Harassment/Assault:</strong> Any situation involving sexual coercion, touching, or exposure.</li>
                    </ul>
                  </div>

                  <div className={styles.redFlagCategory}>
                    <h4>3. Neurological Inaccessibility</h4>
                    <ul>
                      <li><strong>Trauma Response:</strong> A student is in an active "fight, flight, or freeze" state.</li>
                      <li><strong>Severe Dysregulation:</strong> A student is screaming, throwing objects, or experiencing a meltdown.</li>
                      <li><strong>The Refusal:</strong> A student explicitly states, "I'm not ready," or refuses to engage. S.A.F.E. requires CONSENT; it cannot be forced.</li>
                    </ul>
                  </div>

                  <div className={styles.redFlagCategory}>
                    <h4>4. Severe Power Imbalances</h4>
                    <ul>
                      <li><strong>Systemic Power:</strong> One student holds systematic power over another (due to age, size, social status, or disability).</li>
                      <li><strong>Adult-to-Child Harm:</strong> Any conflict involving an adult abusing their power over a child.</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.transitionProtocol}>
                  <h4>🛠️ The Transition: From Conflict to Crisis</h4>
                  <p>If you encounter any of the red flags above, follow the <strong>SEE & ACT</strong> protocol:</p>
                  <ol>
                    <li><strong>Stop the Harm:</strong> Physically separate students or use a firm verbal command to end the interaction.</li>
                    <li><strong>Call for Backup:</strong> Contact administration, the school counselor, or security immediately.</li>
                    <li><strong>Secure the Scene:</strong> Remove other students from the area to ensure privacy and safety.</li>
                    <li><strong>Check for Injuries:</strong> Attend to physical harm and call 911 or the school nurse if needed.</li>
                    <li><strong>Report & Document:</strong> Follow mandatory reporting laws and file an incident report within one hour.</li>
                  </ol>
                </div>

                <div className={styles.whySafeCanWait}>
                  <h4>Why S.A.F.E. Can Wait</h4>
                  <p>S.A.F.E. is <strong>not a replacement for discipline or safety</strong>.</p>
                  <ul>
                    <li><strong>Safety First:</strong> Reflection and identity work can only happen after the nervous system is regulated.</li>
                    <li><strong>Repair Happens Later:</strong> You can always return to a S.A.F.E. conversation hours or days later, once the crisis has been resolved and legal protocols have been followed.</li>
                  </ul>
                </div>
              </div>

              {/* Thread Collapse Cheat Sheet */}
              <div className={styles.threadCollapseSheet}>
                <h3 className={styles.sheetTitle}>🚨 S.A.F.E. Red Flags: The Thread Collapse Cheat Sheet</h3>
                <p className={styles.sheetIntro}>
                  This <strong>Staff Cheat Sheet</strong> maps the "Red Flags" directly to the <strong>Threads of Becoming</strong> framework. It helps staff recognize that a crisis is not just a "bad day," but a total collapse of the psychological safety mechanisms that allow for learning and capacity-building.
                </p>

                <div className={styles.collapseTable}>
                  {[
                    {
                      flag: 'Physical Violence / Weapons',
                      thread: 'CONSENT & PAUSE',
                      why: 'The "Now" has completely overwhelmed the "Not Yet." There is no space for choice; only the impulse for dominance remains.'
                    },
                    {
                      flag: 'Fight / Flight / Freeze (Trauma Response)',
                      thread: 'EMBODIMENT',
                      why: 'The "Body Knows" too much harm. The nervous system is flooded, making the cognitive reflection required for SEE and FEEL impossible.'
                    },
                    {
                      flag: 'Abuse or Assault Disclosure',
                      thread: 'CONSENT & PRESENCE',
                      why: 'This is a criminal violation of boundaries, not a peer conflict. Asking for "tension-holding" here is a betrayal of the adult\'s duty to protect.'
                    },
                    {
                      flag: 'Suicide Risk / Self-Harm',
                      thread: 'BECOMING',
                      why: 'The student\'s sense of an unfolding future has collapsed. They cannot EMERGE because they cannot see a "Not Yet".'
                    },
                    {
                      flag: 'Severe Power Imbalance',
                      thread: 'UNCERTAINTY',
                      why: 'The "Bully" has eliminated all uncertainty through total control. The "Victim" is trapped in a fixed identity of helplessness.'
                    }
                  ].map((row, index) => (
                    <div key={index} className={styles.collapseRow}>
                      <div className={styles.collapseCell}>
                        <h5>The Red Flag</h5>
                        <p>{row.flag}</p>
                      </div>
                      <div className={styles.threadCell}>
                        <h5>Thread Collapsed</h5>
                        <p><strong>{row.thread}</strong></p>
                      </div>
                      <div className={styles.whyCell}>
                        <h5>Why S.A.F.E. Won't Work</h5>
                        <p>{row.why}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Printable Cheat Sheet Link */}
              <div className={styles.printableLink}>
                <a href="/safe-red-flags-cheat-sheet.html" target="_blank" rel="noopener noreferrer" className={styles.printButton}>
                  🖨️ Download Printable Red Flags Cheat Sheet
                </a>
              </div>

              {/* Conflict vs Crisis Guide */}
              <div className={styles.conflictVsCrisisGuide}>
                <h3>🛑 When to "Pause" the Framework</h3>
                <p>Use this guide to determine if you are in <strong>Conflict</strong> (Practice S.A.F.E.) or <strong>Crisis</strong> (Use SEE & ACT).</p>

                <div className={styles.guideBoxes}>
                  <div className={styles.conflictGuideBox}>
                    <h4>Conflict: Use S.A.F.E.</h4>
                    <p className={styles.guideSubtitle}>The Threads are strained but intact.</p>
                    <ul>
                      <li>Students can still <strong>PAUSE</strong> and use their words.</li>
                      <li>There is <strong>UNCERTAINTY</strong> about the outcome (room for growth).</li>
                      <li>Both students are relatively regulated (within their <strong>EMBODIMENT</strong>).</li>
                    </ul>
                  </div>

                  <div className={styles.crisisGuideBox}>
                    <h4>Crisis: Use SEE & ACT</h4>
                    <p className={styles.guideSubtitle}>The Threads have snapped.</p>
                    <ul>
                      <li><strong>CONSENT</strong> is being actively violated through violence or coercion.</li>
                      <li><strong>MEMORY</strong> is fixed on trauma or "getting even" with no room for a new story.</li>
                      <li><strong>PRESENCE</strong> is lost to a "trance" of automatic aggression.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Staff Mantra */}
              <div className={styles.staffMantra}>
                <h3>📢 The Staff Mantra</h3>
                <blockquote className={styles.mantraQuote}>
                  "We cannot build capacity in a collapse."
                </blockquote>
                <p>If you see a Red Flag, you are witnessing a <strong>systemic collapse</strong>. Your role changes from <strong>Facilitator</strong> (building capacity) to <strong>Intervener</strong> (securing safety). S.A.F.E. can only return once the threads are re-anchored by adult intervention and the student is back in their "window of tolerance".</p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* Universal Design & Adaptations */}
      <section className={`${styles.specialPopulations} section-lg`}>
        <div className="container">
          <h2>S.A.F.E. for All Learners: Universal Design & Adaptations</h2>
          <p className={styles.specialIntro}>
            Design for those who struggle most, and everyone benefits. Not "Can this child do S.A.F.E.?" but "How does S.A.F.E. work FOR this child?"
          </p>

          <div className={styles.populationGrid}>
            {/* Trauma */}
            <div className={styles.populationCard}>
              <h4>Students with Trauma Histories</h4>
              <p className={styles.populationTeaser}>Safety first, S.A.F.E. second. When survival mode is activated, regulation comes before reflection.</p>

              <details className={styles.populationAccordion}>
                <summary className={styles.populationSummary}>
                  <span className={styles.populationTitle}>Key Adaptations</span>
                  <span className={styles.populationChevron}>▼</span>
                </summary>
                <div className={styles.populationContent}>
                  <h4>Key Adaptations:</h4>
                <ul>
                  <li><strong>Start with safety:</strong> "Are you safe right now? Can you feel your feet on the floor?"</li>
                  <li><strong>Go slower:</strong> Don't rush to "feel both sides" if they're in survival mode</li>
                  <li><strong>Body first:</strong> Help them regulate before processing</li>
                  <li><strong>Small steps:</strong> "Today we just keep you safe. S.A.F.E. can wait."</li>
                </ul>
                <p className={styles.populationNote}>Requires: Trauma-informed counseling, safety planning, possible IEP/504 accommodations</p>
              </div>
            </details>
            </div>

            {/* Autism */}
            <div className={styles.populationCard}>
              <h4>Students on the Autism Spectrum</h4>
              <p className={styles.populationTeaser}>Make the invisible visible. Concrete language, visual supports, and explicit teaching make S.A.F.E. accessible.</p>

              <details className={styles.populationAccordion}>
                <summary className={styles.populationSummary}>
                  <span className={styles.populationTitle}>Key Adaptations</span>
                  <span className={styles.populationChevron}>▼</span>
                </summary>
                <div className={styles.populationContent}>
                  <h4>Key Adaptations:</h4>
                  <ul>
                    <li><strong>Concrete language:</strong> Avoid metaphors—"You wanted X, they wanted Y"</li>
                    <li><strong>Visual supports:</strong> Social stories, emotion charts, picture sequences</li>
                    <li><strong>Explicit teaching:</strong> "Your brain can think about two things. Let's practice."</li>
                    <li><strong>Pre-teach:</strong> Practice S.A.F.E. in calm moments, not just conflicts</li>
                  </ul>
                  <p className={styles.populationNote}>Requires: Social skills instruction, visual aids, sensory accommodations, IEP support</p>
                </div>
              </details>
            </div>

            {/* ADHD */}
            <div className={styles.populationCard}>
              <h4>Students with ADHD</h4>
              <p className={styles.populationTeaser}>Keep it short, keep it moving. S.A.F.E. works when it's fast, active, and visual.</p>

              <details className={styles.populationAccordion}>
                <summary className={styles.populationSummary}>
                  <span className={styles.populationTitle}>Key Adaptations</span>
                  <span className={styles.populationChevron}>▼</span>
                </summary>
                <div className={styles.populationContent}>
                  <h4>Key Adaptations:</h4>
                  <ul>
                    <li><strong>Keep it short:</strong> "30 seconds. What happened?"</li>
                    <li><strong>Movement okay:</strong> "You can stand/pace while we talk"</li>
                    <li><strong>Action-oriented:</strong> "What are you going to do right now?"</li>
                    <li><strong>Visual reminders:</strong> S.A.F.E. card on desk or in pocket</li>
                  </ul>
                  <p className={styles.populationNote}>Requires: Movement breaks, visual cues, repetition, immediate reinforcement</p>
                </div>
              </details>
            </div>

            {/* Anxiety */}
            <div className={styles.populationCard}>
              <h4>Students with Anxiety Disorders</h4>
              <p className={styles.populationTeaser}>Ground first, process second. Holding tension is manageable when we time-limit and reassure.</p>

              <details className={styles.populationAccordion}>
                <summary className={styles.populationSummary}>
                  <span className={styles.populationTitle}>Key Adaptations</span>
                  <span className={styles.populationChevron}>▼</span>
                </summary>
                <div className={styles.populationContent}>
                  <h4>Key Adaptations:</h4>
                  <ul>
                    <li><strong>Ground first:</strong> "Let's take 3 deep breaths before we talk"</li>
                    <li><strong>Time-limit difficult parts:</strong> "Just for 10 seconds. Both are true. Then we let it go."</li>
                    <li><strong>Reassure often:</strong> "This isn't about who's right or wrong"</li>
                    <li><strong>Small, concrete steps:</strong> "Just for today, what's one small thing?"</li>
                  </ul>
                  <p className={styles.populationNote}>Requires: Anxiety management tools, counseling support, predictability</p>
                </div>
              </details>
            </div>

            {/* ELL */}
            <div className={styles.populationCard}>
              <h4>English Language Learners</h4>
              <p className={styles.populationTeaser}>Show, don't just tell. S.A.F.E. transcends language when we use visuals, gestures, and simple words.</p>

              <details className={styles.populationAccordion}>
                <summary className={styles.populationSummary}>
                  <span className={styles.populationTitle}>Key Adaptations</span>
                  <span className={styles.populationChevron}>▼</span>
                </summary>
                <div className={styles.populationContent}>
                  <h4>Key Adaptations:</h4>
                  <ul>
                    <li><strong>Simple language:</strong> "What happened?" not "What do you notice?"</li>
                    <li><strong>Visual supports:</strong> Draw it, act it out, use pictures</li>
                    <li><strong>Physical representation:</strong> Hold two objects for "both sides"</li>
                    <li><strong>Bilingual materials:</strong> Translated posters and parent letters</li>
                  </ul>
                  <p className={styles.populationNote}>Requires: ESL services, visual aids, cultural liaison, simplified vocabulary</p>
                </div>
              </details>
            </div>

            {/* ODD */}
            <div className={styles.populationCard}>
              <h4>Students with ODD</h4>
              <p className={styles.populationTeaser}>Choice, not control. Frame S.A.F.E. as their power, not our demand.</p>

              <details className={styles.populationAccordion}>
                <summary className={styles.populationSummary}>
                  <span className={styles.populationTitle}>Key Adaptations</span>
                  <span className={styles.populationChevron}>▼</span>
                </summary>
                <div className={styles.populationContent}>
                  <h4>Key Adaptations:</h4>
                  <ul>
                    <li><strong>Offer choices:</strong> "Do you want to talk here or walk and talk?"</li>
                    <li><strong>Frame as strength:</strong> "Strong people can hold two things at once"</li>
                    <li><strong>Their choice:</strong> "You decide. Who are you choosing to be?"</li>
                    <li><strong>Stay neutral:</strong> Don't make it a power struggle</li>
                  </ul>
                  <p className={styles.populationNote}>Requires: Consistent consequences, relationship-building, possible therapy/BIP</p>
                </div>
              </details>
            </div>
          </div>

          <div className={styles.specialNote}>
            <h3>Universal Design for Learning</h3>
            <p>Design S.A.F.E. for the students who struggle most, and everyone benefits. Provide:</p>
            <ul>
              <li><strong>Multiple ways to understand:</strong> Verbal, visual, physical, written</li>
              <li><strong>Multiple ways to respond:</strong> Talk, draw, write, act out, point, use AAC device</li>
              <li><strong>Multiple ways to engage:</strong> 1-on-1, small group, whole class, observation</li>
            </ul>
            <p className={styles.emphasis}>Sometimes the answer is: "Today, S.A.F.E. isn't accessible. Today we just keep them safe, fed, and regulated. S.A.F.E. can wait."</p>
          </div>
        </div>
      </section>

      {/* Further Development */}
      <section className={`${styles.furtherDevelopment} section-lg`}>
        <div className="container">
          <h2>Further Development: Deep Dive Resources</h2>
          <p className={styles.furtherIntro}>
            Explore comprehensive guides for implementing S.A.F.E. across every dimension of your school community.
          </p>

          <div className={styles.developmentGrid}>
            <a href="/safe/bullying-is-play" className={styles.developmentCard}>
              <h3>🔥 Bullying is Play</h3>
              <p>
                The paradigm shift from anti-bullying to anti-collapse. How bullying is collapsed play and how to disrupt its reward system.
              </p>
              <span className={styles.cardLink}>Read the Revolutionary Framework →</span>
            </a>

            <a href="/safe/parent-education" className={styles.developmentCard}>
              <h3>👨‍👩‍👧‍👦 Parent Education</h3>
              <p>
                How parents contribute to, enable, and can help break the bullying cycle. Includes workshops, resources, and monthly packets.
              </p>
              <span className={styles.cardLink}>Explore Parent Resources →</span>
            </a>

            <a href="/safe/school-wide" className={styles.developmentCard}>
              <h3>🏫 School-Wide Language</h3>
              <p>
                From crossing guards to administrators—making S.A.F.E. the common language across every role in your school.
              </p>
              <span className={styles.cardLink}>See School-Wide Implementation →</span>
            </a>

            <a href="/safe/public-measurement" className={styles.developmentCard}>
              <h3>📊 Public Measurement & Celebration</h3>
              <p>
                Track S.A.F.E. actions publicly with slips, boards, assemblies, and rewards that celebrate courage and growth.
              </p>
              <span className={styles.cardLink}>Learn About Measurement →</span>
            </a>

            <a href="/safe/crisis-protocol" className={styles.developmentCard}>
              <h3>🚨 SEE & ACT Crisis Protocol</h3>
              <p>
                When to intervene immediately for physical violence or serious harm—and when S.A.F.E. facilitation is appropriate.
              </p>
              <span className={styles.cardLink}>Review Crisis Protocols →</span>
            </a>

            <a href="/safe/all-learners" className={styles.developmentCard}>
              <h3>🌈 S.A.F.E. for All Learners</h3>
              <p>
                Universal design and adaptations for neurodivergent learners, students with trauma, language learners, and more.
              </p>
              <span className={styles.cardLink}>See Universal Design & Adaptations →</span>
            </a>

            <a href="/safe/stomp-out-comparison" className={styles.developmentCard}>
              <h3>🤝 S.A.F.E. + STOMP OUT Bullying</h3>
              <p>
                How S.A.F.E. complements STOMP OUT Bullying's crisis intervention and awareness campaigns—a complete K-12 system.
              </p>
              <span className={styles.cardLink}>See Partnership Vision →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className={`${styles.downloadables} section-lg`}>
        <div className="container">
          <h2>Minimum Viable S.A.F.E. — Printable Resources</h2>
          <p className={styles.mvSafeIntro}>
            <strong>These five resources are all you need to implement S.A.F.E. school-wide.</strong> No full program adoption required. Within 2 weeks, you'll see spontaneous student use, de-escalating adults, and fewer "who started it?" conversations.
          </p>

          <div className={styles.downloadGrid}>
            <div className={styles.downloadCard}>
              <h3>📄 Teacher One-Pagers (3)</h3>
              <p className={styles.downloadDesc}>
                5-minute scripts teachers read or paraphrase to students. Each fits on one page.
              </p>
              <div className={styles.downloadLinks}>
                <a href="/safe-teacher-onepager-1.html" target="_blank" className={styles.downloadLink}>
                  #1: What S.A.F.E. Is (and Isn't)
                </a>
                <a href="/safe-teacher-onepager-2.html" target="_blank" className={styles.downloadLink}>
                  #2: Using S.A.F.E. in the Moment
                </a>
                <a href="/safe-teacher-onepager-3.html" target="_blank" className={styles.downloadLink}>
                  #3: When It Doesn't Work
                </a>
              </div>
            </div>

            <div className={styles.downloadCard}>
              <h3>🪧 Student Poster</h3>
              <p className={styles.downloadDesc}>
                Visually calm, linguistically sparse. Hang in every classroom.
              </p>
              <div className={styles.downloadLinks}>
                <a href="/safe-student-poster.html" target="_blank" className={styles.downloadLink}>
                  S.A.F.E. Student Poster
                </a>
              </div>
            </div>

            <div className={styles.downloadCard}>
              <h3>📋 All-Staff Pamphlet</h3>
              <p className={styles.downloadDesc}>
                Half-sheet tri-fold in English/Spanish/Haitian Creole. Give one to every adult in the building.
              </p>
              <div className={styles.downloadLinks}>
                <a href="/safe-staff-pamphlet.html" target="_blank" className={styles.downloadLink}>
                  S.A.F.E. Staff Pamphlet (Trilingual)
                </a>
              </div>
            </div>
          </div>

          <div className={styles.mvNote}>
            <p><strong>What makes this "minimum viable"?</strong></p>
            <p>If a school reads the three one-pagers, hangs the poster, and gives every adult the pamphlet—that's enough. Shared verbs change behavior faster than shared values.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Bring S.A.F.E. to Your School?</h2>
          <p>Transform how your students navigate conflict, build resilience, and become who they want to be.</p>
          <div className={styles.ctaButtons}>
            <a href="/educators" className={styles.ctaPrimary}>Explore Educator Training</a>
            <a href="/contact" className={styles.ctaSecondary}>Contact Us About S.A.F.E.</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safe;
