import React from 'react';
import styles from './SafeSupport.module.css';

const ParentEducation: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1>S.A.F.E. for Parents</h1>
        <p className={styles.heroTagline}>Educational Materials for Family Partnership</p>
      </section>

      {/* Core Understanding */}
      <section className={`${styles.content} section-lg`}>
        <div className="container">
          <h2>The Parent Problem in Bullying Dynamics</h2>
          <p className={styles.intro}>
            Parents are often the invisible force perpetuating bullying cycles, and most anti-bullying programs completely ignore this.
            <strong> Parents can't teach their kids to be S.A.F.E. if they're not practicing it themselves.</strong>
          </p>

          <div className={styles.collapseGrid}>
            <div className={styles.collapseCard}>
              <h3>Parents of Kids Being Hurt Often Collapse Into:</h3>
              <ul>
                <li><strong>Rescue mode:</strong> "I need to fix this for my child" (helicopter parenting)</li>
                <li><strong>Victim identity reinforcement:</strong> "You're being bullied because you're special/different"</li>
                <li><strong>Blame the school:</strong> "The teacher isn't doing enough"</li>
                <li><strong>Overprotection:</strong> Removing the child from all difficult situations (no resilience building)</li>
              </ul>
              <p className={styles.result}><strong>Result:</strong> The child learns they're helpless and need adults to solve their problems.</p>
            </div>

            <div className={styles.collapseCard}>
              <h3>Parents of Kids Doing Harm Often Collapse Into:</h3>
              <ul>
                <li><strong>Denial:</strong> "My kid would never do that"</li>
                <li><strong>Justification:</strong> "Boys will be boys" / "She's just assertive"</li>
                <li><strong>Blame the victim:</strong> "That other kid is too sensitive"</li>
                <li><strong>Punish at home, model aggression:</strong> Yelling, shaming, grounding harshly</li>
              </ul>
              <p className={styles.result}><strong>Result:</strong> The child learns to hide behavior and that power/control is how you handle problems.</p>
            </div>

            <div className={styles.collapseCard}>
              <h3>Parents of Witnesses Often Collapse Into:</h3>
              <ul>
                <li><strong>Dismissal:</strong> "Stay out of it, it's not your problem"</li>
                <li><strong>Fear:</strong> "Don't get involved or you'll be next"</li>
                <li><strong>Moral superiority:</strong> "I'm glad you're not like those kids"</li>
              </ul>
              <p className={styles.result}><strong>Result:</strong> The child learns to be a passive bystander or feel morally superior without acting.</p>
            </div>
          </div>

          <div className={styles.keyInsight}>
            <h3>The Hidden Truth</h3>
            <p>Parents are often living the same tensions their kids are:</p>
            <ul>
              <li>"How do I protect my child / How do I let them learn to handle hard things?"</li>
              <li>"How do I advocate for my kid / How do I trust the teacher?"</li>
              <li>"How do I discipline / How do I stay connected?"</li>
            </ul>
            <p><strong>When parents collapse in their own tensions, they model collapse for their kids.</strong></p>
          </div>
        </div>
      </section>

      {/* Parent Workshops */}
      <section className={`${styles.workshops} section-lg`}>
        <div className="container">
          <h2>Parent Workshop Series</h2>

          <div className={styles.workshop}>
            <h3>Workshop 1: When Your Child Is Hurt (90 minutes)</h3>

            <div className={styles.module}>
              <h4>Module 1: Your Own Collapse (20 min)</h4>
              <p><strong>Exercise:</strong> Think about the last time your child came home upset about a friend or classmate.</p>
              <ul>
                <li>What did you feel in your body?</li>
                <li>What did you want to do immediately?</li>
                <li>What did you actually do?</li>
              </ul>

              <p><strong>Common parent collapses:</strong></p>
              <ul>
                <li><strong>Rescue collapse:</strong> "I'll call that kid's parents right now"</li>
                <li><strong>Victim collapse:</strong> "You're too good for those kids anyway"</li>
                <li><strong>Fix-it collapse:</strong> "Here's what you should do tomorrow..."</li>
                <li><strong>Minimize collapse:</strong> "That's not a big deal, you're fine"</li>
              </ul>

              <div className={styles.safeSteps}>
                <p><strong>S.A.F.E. for you first:</strong></p>
                <ul>
                  <li><strong>See:</strong> "I notice I'm scared for my child. I notice I want to fix this."</li>
                  <li><strong>Ask:</strong> "I want to protect them / I want them to learn to handle this. What's the tension?"</li>
                  <li><strong>Feel:</strong> "Can I hold both? Can I be scared AND trust they're building capacity?"</li>
                  <li><strong>Emerge:</strong> "Who do I want to be as a parent in this moment?"</li>
                </ul>
              </div>
            </div>

            <div className={styles.module}>
              <h4>Module 2: S.A.F.E. Conversations at Home (30 min)</h4>

              <div className={styles.comparison}>
                <div className={styles.instead}>
                  <p><strong>Instead of:</strong> "What happened? Who did it? That's terrible!"</p>
                </div>
                <div className={styles.trySafe}>
                  <p><strong>Try S.A.F.E.:</strong></p>
                  <ul>
                    <li><strong>S - See:</strong> "I notice you seem upset. What did you notice happening?" "What does your body feel like right now?"</li>
                    <li><strong>A - Ask:</strong> "What did you want to happen? What actually happened?" "What do you think they wanted?"</li>
                    <li><strong>F - Feel:</strong> "Can you hold both? You want friends to be kind AND you can't control what they do?"</li>
                    <li><strong>E - Emerge:</strong> "Who do you want to be tomorrow when you see them?" "You get to choose - who are you becoming?"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.module}>
              <h4>Module 3: Partnering with Teachers (20 min)</h4>
              <p><strong>Your tension as a parent:</strong> "I need to advocate for my child / I need to trust the teacher"</p>

              <div className={styles.comparison}>
                <div className={styles.instead}>
                  <p><strong>Instead of:</strong> "My child says they're being bullied and you're not doing anything about it."</p>
                </div>
                <div className={styles.trySafe}>
                  <p><strong>Try:</strong></p>
                  <ul>
                    <li>"I'm practicing something with my child called S.A.F.E. and I wanted to let you know what's happening at home."</li>
                    <li>"My child told me about X situation. Can you help me understand what you're seeing?"</li>
                    <li>"How can I support what you're doing in the classroom?"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.module}>
              <h4>Module 4: Practice Scenarios (20 min)</h4>
              <p>Role-play common situations:</p>
              <ul>
                <li>Child excluded from birthday party</li>
                <li>Child says "Everyone hates me"</li>
                <li>Child comes home crying about being teased</li>
                <li>Child is the one who excluded someone else</li>
              </ul>
            </div>
          </div>

          <div className={styles.workshop}>
            <h3>Workshop 2: When Your Child Is the One Doing Harm (90 minutes)</h3>
            <p className={styles.workshopNote}>This is the hardest workshop - parents often don't show up or get defensive.</p>

            <div className={styles.module}>
              <h4>Module 1: The Shame Spiral</h4>
              <p>When you find out your child hurt someone, what happens?</p>
              <ul>
                <li>Shame: "What does this say about me as a parent?"</li>
                <li>Denial: "My child wouldn't do that"</li>
                <li>Rage: "How could you embarrass our family?"</li>
                <li>Over-punishment: Grounding, yelling, removing privileges</li>
              </ul>
              <p className={styles.emphasis}><strong>All of these make it worse.</strong></p>

              <p><strong>Why?</strong> Because the child learns:</p>
              <ol>
                <li>"I'm bad" (shame = identity)</li>
                <li>"I can't tell my parents when I mess up" (secrecy)</li>
                <li>"Power and control is how you solve problems" (modeling)</li>
              </ol>
            </div>

            <div className={styles.module}>
              <h4>Module 2: The S.A.F.E. Conversation</h4>
              <div className={styles.comparison}>
                <div className={styles.instead}>
                  <p><strong>Instead of:</strong> "I can't believe you did that! You're grounded! What were you thinking?!"</p>
                </div>
                <div className={styles.trySafe}>
                  <p><strong>Try S.A.F.E.:</strong></p>
                  <ul>
                    <li><strong>S - See:</strong> "I heard from your teacher that you said something mean to Alex. Is that what happened?" "What do you remember?"</li>
                    <li><strong>A - Ask:</strong> "What did you want in that moment?" "What do you think Alex wanted?"</li>
                    <li><strong>F - Feel:</strong> "You wanted to feel powerful AND you hurt someone. Can you feel both?"</li>
                    <li><strong>E - Emerge:</strong> "Is that who you want to be? Someone who makes others feel small to feel big?" "What would the person you want to become do next?"</li>
                  </ul>
                  <p><strong>Then:</strong> "What do you think you need to do now?" (Let them figure out the repair)</p>
                </div>
              </div>
            </div>

            <div className={styles.module}>
              <h4>Module 3: Repair vs. Punishment</h4>
              <div className={styles.repairBox}>
                <p><strong>Punishment teaches:</strong> "Don't get caught"</p>
                <p><strong>Repair teaches:</strong> "I can make things better"</p>
                <p><strong>Repair might look like:</strong></p>
                <ul>
                  <li>Genuine apology (only if the child is ready, not forced)</li>
                  <li>Changed behavior</li>
                  <li>Making amends in action</li>
                  <li>Reflecting on who they want to be</li>
                </ul>
              </div>
            </div>

            <div className={styles.module}>
              <h4>Module 4: When to Get Help</h4>
              <p><strong>Red flags that this is more than typical kid behavior:</strong></p>
              <ul>
                <li>Pattern of harm over time</li>
                <li>Escalating aggression</li>
                <li>No remorse or empathy</li>
                <li>Harm to animals or younger kids</li>
                <li>Enjoyment of others' pain</li>
              </ul>
              <p><strong>This might indicate:</strong> Trauma, mental health needs, developmental issues</p>
              <p><strong>You need:</strong> Professional support (therapy, evaluation)</p>
            </div>
          </div>

          <div className={styles.workshop}>
            <h3>Workshop 3: When Your Child Witnesses Harm (60 minutes)</h3>

            <div className={styles.module}>
              <h4>Module 1: The Bystander Dilemma</h4>
              <p>Your child sees someone being hurt and doesn't help. Why?</p>
              <ul>
                <li>Fear of becoming a target</li>
                <li>Don't know what to do</li>
                <li>Think adults will handle it</li>
                <li>Want to fit in with the "powerful" kids</li>
              </ul>
              <p><strong>Your tension as a parent:</strong> "I want my child to stand up for others / I'm scared they'll get hurt"</p>
            </div>

            <div className={styles.module}>
              <h4>Module 2: Safe Ways to Help</h4>
              <p>Not all helping means confronting directly:</p>
              <ul>
                <li>Tell an adult (not tattling - getting help)</li>
                <li>Befriend the person being hurt later</li>
                <li>Include them in another activity</li>
                <li>Say "That's not cool" and walk away</li>
                <li>Stand near them (physical presence matters)</li>
              </ul>
            </div>

            <div className={styles.module}>
              <h4>Module 3: Parent Conversations</h4>
              <p><strong>When your child says:</strong> "I saw kids being mean to someone today."</p>
              <div className={styles.comparison}>
                <div className={styles.instead}>
                  <p><strong>Instead of:</strong> "Why didn't you help?!" (shame) or "Stay out of it" (dismissal)</p>
                </div>
                <div className={styles.trySafe}>
                  <p><strong>Try:</strong></p>
                  <ul>
                    <li>"What did you notice about that? How did it feel to see it?"</li>
                    <li>"What did you want to do? What stopped you?"</li>
                    <li>"Who do you want to be when you see that happening?"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className={`${styles.resources} section-lg`}>
        <div className="container">
          <h2>Take-Home Resources for Parents</h2>

          <div className={styles.resourceGrid}>
            <div className={styles.resourceCard}>
              <h3>One-Page Quick Reference</h3>
              <h4>"S.A.F.E. Conversations at Home"</h4>
              <p><strong>When your child is upset:</strong></p>
              <ol>
                <li><strong>Breathe first</strong> - Notice your own reaction</li>
                <li><strong>See</strong> - "What do you notice?" (not "What did they do to you?")</li>
                <li><strong>Ask</strong> - "What's the push-pull?" (build complexity)</li>
                <li><strong>Feel</strong> - "Can both be true?" (hold tension)</li>
                <li><strong>Emerge</strong> - "Who do you want to be?" (identity, not fixing)</li>
              </ol>
            </div>

            <div className={styles.resourceCard}>
              <h3>Parent Practice Journal</h3>
              <h4>Weekly prompts:</h4>
              <ul>
                <li>"This week I noticed myself wanting to rescue when..."</li>
                <li>"The tension I'm holding as a parent right now is..."</li>
                <li>"I'm becoming a parent who..."</li>
              </ul>
            </div>

            <div className={styles.resourceCard}>
              <h3>Family Dinner Conversation Starters</h3>
              <h4>Using S.A.F.E. language:</h4>
              <ul>
                <li>"Share a time this week you had to hold two opposite feelings at once."</li>
                <li>"What's a tension you're navigating right now?"</li>
                <li>"Who did you want to be this week? Did you become that person?"</li>
              </ul>
            </div>

            <div className={styles.resourceCard}>
              <h3>Teacher-Parent Communication Template</h3>
              <div className={styles.templateBox}>
                <p>"Hi [Teacher],</p>
                <p>We're practicing S.A.F.E. at home with [child's name]. This week they shared a situation about [brief description]. I wanted to let you know what we talked about:</p>
                <ul>
                  <li>What they saw happening</li>
                  <li>The tension they were feeling</li>
                  <li>How they're thinking about who they want to be</li>
                </ul>
                <p>I'd love to hear what you're seeing in the classroom and how we can support what you're teaching.</p>
                <p>Thank you, [Parent Name]"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Packets */}
      <section className={`${styles.packets} section-lg`}>
        <div className="container">
          <h2>Monthly Parent Packets</h2>
          <p className={styles.sectionIntro}>Aligned with classroom themes to create home-school partnership</p>

          <div className={styles.packetGrid}>
            <div className={styles.packetCard}>
              <h3>Month 1: Introduction to S.A.F.E.</h3>
              <ul>
                <li>What it is</li>
                <li>How it works</li>
                <li>Practice at home</li>
              </ul>
            </div>

            <div className={styles.packetCard}>
              <h3>Month 2: Exclusion</h3>
              <ul>
                <li>Classroom focus: Inclusion tensions</li>
                <li>Home practice: "I want to belong / I want to be myself"</li>
                <li>Conversation starters</li>
              </ul>
            </div>

            <div className={styles.packetCard}>
              <h3>Month 3: Anger</h3>
              <ul>
                <li>Classroom focus: Managing big feelings</li>
                <li>Home practice: "I'm angry / I don't want to hurt people"</li>
                <li>Calming strategies</li>
              </ul>
            </div>

            <div className={styles.packetCard}>
              <h3>Month 4: Friendship</h3>
              <ul>
                <li>Classroom focus: Navigating friend tensions</li>
                <li>Home practice: "I want my way / I want my friend"</li>
                <li>Conflict resolution</li>
              </ul>
            </div>

            <div className={styles.packetCard}>
              <h3>Month 5: Courage</h3>
              <ul>
                <li>Classroom focus: Being a helper</li>
                <li>Home practice: "I want to help / I'm scared"</li>
                <li>Bystander empowerment</li>
              </ul>
            </div>

            <div className={styles.packetCard}>
              <h3>Month 6: Reflection</h3>
              <ul>
                <li>Classroom focus: Who am I becoming?</li>
                <li>Home practice: Looking back, looking forward</li>
                <li>Family celebration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className={`${styles.assessment} section-lg`}>
        <div className="container">
          <h2>How Do We Know It's Working?</h2>

          <div className={styles.indicators}>
            <div className={styles.indicatorColumn}>
              <h3>Before S.A.F.E.</h3>
              <ul>
                <li>Parents immediately jump to fixing/rescuing</li>
                <li>Parents blame school or other kids</li>
                <li>Parents feel helpless or over-involved</li>
                <li>Parent-teacher conversations are adversarial</li>
              </ul>
            </div>

            <div className={styles.indicatorColumn}>
              <h3>After S.A.F.E.</h3>
              <ul>
                <li>Parents practice S.A.F.E. with their own tensions first</li>
                <li>Parents partner with teachers</li>
                <li>Parents see incidents as learning opportunities</li>
                <li>Parent-teacher conversations are collaborative</li>
              </ul>
            </div>
          </div>

          <div className={styles.measureBox}>
            <h3>What We Measure</h3>
            <p><strong>Parent surveys (pre/post):</strong></p>
            <ul>
              <li>"When my child is upset, I immediately try to fix it" (↓)</li>
              <li>"I can hold tension without needing to solve it" (↑)</li>
              <li>"I trust my child to navigate difficult situations" (↑)</li>
              <li>"I feel like a partner with my child's teacher" (↑)</li>
            </ul>
            <p><strong>Anecdotal measures:</strong></p>
            <ul>
              <li>Parent workshop attendance</li>
              <li>Parent-teacher email tone shift</li>
              <li>Parents using S.A.F.E. language in communications</li>
              <li>Parents requesting more resources</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Partner with Parents?</h2>
          <p>Parent education is critical to making S.A.F.E. work school-wide.</p>
          <div className={styles.ctaButtons}>
            <a href="/safe" className={styles.ctaPrimary}>Back to S.A.F.E. Overview</a>
            <a href="/contact" className={styles.ctaSecondary}>Contact Us About Parent Training</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentEducation;
