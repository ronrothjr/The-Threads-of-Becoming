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
        </div>
      </section>

      {/* How S.A.F.E. Creates Safety */}
      <section className={`${styles.safety} section-lg`}>
        <div className="container">
          <h2>How S.A.F.E. Creates Safety for Everyone</h2>

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
        </div>
      </section>

      {/* Special Populations */}
      <section className={`${styles.specialPopulations} section-lg`}>
        <div className="container">
          <h2>S.A.F.E. for Special Populations</h2>
          <p className={styles.specialIntro}>
            S.A.F.E. is for everyone—but HOW we practice it must adapt to individual needs. Not "Can this child do S.A.F.E.?" but "How does S.A.F.E. work FOR this child?"
          </p>

          <div className={styles.populationGrid}>
            {/* Trauma */}
            <div className={styles.populationCard}>
              <h3>Students with Trauma Histories</h3>
              <h4>Key Adaptations:</h4>
              <ul>
                <li><strong>Start with safety:</strong> "Are you safe right now? Can you feel your feet on the floor?"</li>
                <li><strong>Go slower:</strong> Don't rush to "feel both sides" if they're in survival mode</li>
                <li><strong>Body first:</strong> Help them regulate before processing</li>
                <li><strong>Small steps:</strong> "Today we just keep you safe. S.A.F.E. can wait."</li>
              </ul>
              <p className={styles.populationNote}>Requires: Trauma-informed counseling, safety planning, possible IEP/504 accommodations</p>
            </div>

            {/* Autism */}
            <div className={styles.populationCard}>
              <h3>Students on the Autism Spectrum</h3>
              <h4>Key Adaptations:</h4>
              <ul>
                <li><strong>Concrete language:</strong> Avoid metaphors—"You wanted X, they wanted Y"</li>
                <li><strong>Visual supports:</strong> Social stories, emotion charts, picture sequences</li>
                <li><strong>Explicit teaching:</strong> "Your brain can think about two things. Let's practice."</li>
                <li><strong>Pre-teach:</strong> Practice S.A.F.E. in calm moments, not just conflicts</li>
              </ul>
              <p className={styles.populationNote}>Requires: Social skills instruction, visual aids, sensory accommodations, IEP support</p>
            </div>

            {/* ADHD */}
            <div className={styles.populationCard}>
              <h3>Students with ADHD</h3>
              <h4>Key Adaptations:</h4>
              <ul>
                <li><strong>Keep it short:</strong> "30 seconds. What happened?"</li>
                <li><strong>Movement okay:</strong> "You can stand/pace while we talk"</li>
                <li><strong>Action-oriented:</strong> "What are you going to do right now?"</li>
                <li><strong>Visual reminders:</strong> S.A.F.E. card on desk or in pocket</li>
              </ul>
              <p className={styles.populationNote}>Requires: Movement breaks, visual cues, repetition, immediate reinforcement</p>
            </div>

            {/* Anxiety */}
            <div className={styles.populationCard}>
              <h3>Students with Anxiety Disorders</h3>
              <h4>Key Adaptations:</h4>
              <ul>
                <li><strong>Ground first:</strong> "Let's take 3 deep breaths before we talk"</li>
                <li><strong>Time-limit difficult parts:</strong> "Just for 10 seconds. Both are true. Then we let it go."</li>
                <li><strong>Reassure often:</strong> "This isn't about who's right or wrong"</li>
                <li><strong>Small, concrete steps:</strong> "Just for today, what's one small thing?"</li>
              </ul>
              <p className={styles.populationNote}>Requires: Anxiety management tools, counseling support, predictability</p>
            </div>

            {/* ELL */}
            <div className={styles.populationCard}>
              <h3>English Language Learners</h3>
              <h4>Key Adaptations:</h4>
              <ul>
                <li><strong>Simple language:</strong> "What happened?" not "What do you notice?"</li>
                <li><strong>Visual supports:</strong> Draw it, act it out, use pictures</li>
                <li><strong>Physical representation:</strong> Hold two objects for "both sides"</li>
                <li><strong>Bilingual materials:</strong> Translated posters and parent letters</li>
              </ul>
              <p className={styles.populationNote}>Requires: ESL services, visual aids, cultural liaison, simplified vocabulary</p>
            </div>

            {/* ODD */}
            <div className={styles.populationCard}>
              <h3>Students with ODD</h3>
              <h4>Key Adaptations:</h4>
              <ul>
                <li><strong>Offer choices:</strong> "Do you want to talk here or walk and talk?"</li>
                <li><strong>Frame as strength:</strong> "Strong people can hold two things at once"</li>
                <li><strong>Their choice:</strong> "You decide. Who are you choosing to be?"</li>
                <li><strong>Stay neutral:</strong> Don't make it a power struggle</li>
              </ul>
              <p className={styles.populationNote}>Requires: Consistent consequences, relationship-building, possible therapy/BIP</p>
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

            <a href="/safe/special-populations" className={styles.developmentCard}>
              <h3>🌈 Special Populations</h3>
              <p>
                Adaptations for students with trauma, autism, ADHD, anxiety, language barriers, and other needs.
              </p>
              <span className={styles.cardLink}>See Adaptations →</span>
            </a>
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
