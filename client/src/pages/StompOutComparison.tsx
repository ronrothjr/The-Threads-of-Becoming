import React from 'react';
import styles from './SafeSupport.module.css';

const StompOutComparison: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>S.A.F.E. + STOMP OUT Bullying</h1>
          <p className={styles.tagline}>
            A campaign partnership: Crisis intervention meets daily capacity-building
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className={`${styles.content} section-lg`}>
        <div className="container">
          <p className={styles.intro}>
            <strong>STOMP OUT Bullying has reached 5.5 million students with awareness campaigns and crisis support.</strong> S.A.F.E. offers what comes next: a daily, developmentally-appropriate framework that teaches elementary students how to hold tension <em>before</em> it becomes a crisis.
          </p>

          <div className={styles.highlight}>
            <strong>Together, we create a complete system:</strong> STOMP OUT Bullying handles awareness, advocacy, and crisis intervention at scale. S.A.F.E. provides the psychological foundation and daily practice framework that prevents conflicts from escalating to crisis—starting in kindergarten.
          </div>

          {/* What STOMP OUT Does Well */}
          <h2 className={styles.sectionTitle}>What STOMP OUT Bullying Does Brilliantly</h2>

          <div className={styles.resourceGrid}>
            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>🆘 Crisis Intervention</h3>
              <ul>
                <li><strong>HelpChat Crisis Line:</strong> Free support for ages 13-24</li>
                <li><strong>150,000+ students assisted</strong></li>
                <li><strong>~6,000 lives saved</strong></li>
                <li>Suicide prevention resources</li>
                <li>Immediate access to trained counselors</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>📢 Awareness at Scale</h3>
              <ul>
                <li><strong>World Day of Bullying Prevention®</strong> (Blue Shirt Day)</li>
                <li><strong>90,000 schools partnered</strong></li>
                <li>Celebrity ambassador network</li>
                <li>Social media campaigns reaching millions</li>
                <li>PSA videos and educational content</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>🌈 Inclusivity & Advocacy</h3>
              <ul>
                <li><strong>LGBTQ+ discrimination education</strong></li>
                <li>Racism and bias awareness</li>
                <li>Cyberbullying prevention</li>
                <li>#SeeMe Campaign (visibility for marginalized students)</li>
                <li>Youth Leadership program (20+ teen advocates)</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>🏫 School Resources</h3>
              <ul>
                <li>Wellness rooms in schools</li>
                <li>Educator toolkits</li>
                <li>Parent awareness resources</li>
                <li>Peer mentoring programs</li>
                <li>National Block It Out Day</li>
              </ul>
            </div>
          </div>

          {/* The Gap S.A.F.E. Fills */}
          <h2 className={styles.sectionTitle}>The Critical Gap S.A.F.E. Fills for Elementary Students</h2>

          <div className={styles.highlight}>
            <strong>STOMP OUT Bullying's HelpChat starts at age 13.</strong> But bullying patterns form in elementary school—between ages 5 and 11—when children first learn whether to collapse under tension or hold it. S.A.F.E. meets them there.
          </div>

          <div className={styles.assessmentGrid}>
            <div className={styles.beforeBox}>
              <h3>❌ What's Missing for K-5</h3>
              <ul>
                <li><strong>No daily framework:</strong> "Tell an adult" and "be an upstander" don't give kids steps for the 47 micro-conflicts per day</li>
                <li><strong>No developmental fit:</strong> "Comebacks" require verbal sophistication 7-year-olds don't have</li>
                <li><strong>Reactive, not preventive:</strong> Crisis support is vital, but what happens <em>before</em> crisis?</li>
                <li><strong>No psychological foundation:</strong> Why does bullying happen? What tension is underneath?</li>
                <li><strong>Binary roles:</strong> Victim (needs rescue) / Bully (needs punishment) / Upstander (needs courage)</li>
                <li><strong>No school-wide language:</strong> Students learn in programs, but cafeteria staff, bus drivers, crossing guards don't speak the same language</li>
                <li><strong>No parent education:</strong> How parents enable the cycle isn't addressed</li>
              </ul>
            </div>

            <div className={styles.afterBox}>
              <h3>✅ What S.A.F.E. Adds</h3>
              <ul>
                <li><strong>Daily practice framework:</strong> SEE. ASK. FEEL. EMERGE. works for every conflict (friend won't share, group excludes, someone says something mean)</li>
                <li><strong>Developmentally appropriate:</strong> 5-year-olds can "See my stomach hurts" and "Feel I need space"</li>
                <li><strong>Preventive capacity-building:</strong> Teach tension-holding before conflicts escalate to crisis</li>
                <li><strong>Threads foundation:</strong> Understand the <em>why</em> (CONSENT, THRESHOLD, MEMORY tensions drive behavior)</li>
                <li><strong>Everyone's becoming:</strong> Kid being hurt, kid doing harm, witness—all learning who they want to be</li>
                <li><strong>Universal school language:</strong> Crossing guards to principal all use S.A.F.E. steps</li>
                <li><strong>Parent workshops:</strong> How parents collapse and reinforce cycles—and how to hold tension instead</li>
              </ul>
            </div>
          </div>

          {/* Side-by-Side Comparison */}
          <h2 className={styles.sectionTitle}>How They Work Together: A Complete System</h2>

          <div className={`${styles.card} ${styles.measurementCard}`}>
            <h3>The Partnership Model</h3>

            <div className={styles.info}>
              <p><strong>STOMP OUT Bullying: Awareness + Crisis Layer (Ages 13+)</strong></p>
              <ul>
                <li>Students know bullying is wrong (awareness campaigns)</li>
                <li>Students know where to get help (HelpChat, hotlines)</li>
                <li>Crisis intervention saves lives when situations escalate</li>
                <li>Inclusivity messaging reaches millions</li>
              </ul>
            </div>

            <div className={styles.info}>
              <p><strong>S.A.F.E.: Daily Capacity-Building Layer (Ages 5-11)</strong></p>
              <ul>
                <li>Students learn <em>how</em> to hold tension in everyday conflicts</li>
                <li>Students practice S.A.F.E. 10+ times per day (recess, cafeteria, classroom, bus)</li>
                <li>Preventive framework reduces conflicts that would escalate to crisis</li>
                <li>Psychological foundation: understand the <em>why</em> underneath behavior</li>
              </ul>
            </div>

            <h4>The Result:</h4>
            <p><strong>Elementary students build S.A.F.E. capacity daily → Middle/high school students access STOMP OUT crisis support when needed → Fewer students need crisis intervention because they learned tension-holding early.</strong></p>
          </div>

          {/* Elementary-Specific Comparison */}
          <h2 className={styles.sectionTitle}>For Elementary Students: What Changes?</h2>

          <div className={styles.resourceGrid}>
            <div className={`${styles.card} ${styles.workshopCard}`}>
              <h3>Scenario: 2nd Grader Left Out at Recess</h3>

              <h4>STOMP OUT Bullying Approach:</h4>
              <ul>
                <li>"Tell a trusted adult"</li>
                <li>"Be an upstander—include them"</li>
                <li>Teacher intervenes, reminds class about kindness</li>
                <li>Awareness lesson on inclusion</li>
              </ul>
              <p className={styles.note}><strong>Limitation:</strong> Student didn't learn <em>how</em> to navigate the tension of "I want to belong / They want their special friends." Next time, same collapse.</p>

              <h4>S.A.F.E. Approach:</h4>
              <ul>
                <li><strong>SEE:</strong> "I see I'm being left out. I see my stomach hurts."</li>
                <li><strong>ASK:</strong> Teacher prompts: "Can you ask what they're playing and if you can join?" (not demand—ASK)</li>
                <li><strong>FEEL:</strong> "What do you feel you need? A different group? Time alone? To try again?"</li>
                <li><strong>EMERGE:</strong> "Who do you want to be? Someone who tries? Someone who finds a new group? Someone who tells the teacher what they need?"</li>
              </ul>
              <p className={styles.note}><strong>Result:</strong> Student learns to hold the THRESHOLD tension (who belongs?) without collapsing into victim identity. Builds capacity for next time.</p>
            </div>

            <div className={`${styles.card} ${styles.workshopCard}`}>
              <h3>Scenario: 4th Grader Calls Another Student a Name</h3>

              <h4>STOMP OUT Bullying Approach:</h4>
              <ul>
                <li>"That's bullying—stop immediately"</li>
                <li>Student sent to office (consequence)</li>
                <li>Victim receives support/counseling</li>
                <li>Bully receives education on kindness</li>
              </ul>
              <p className={styles.note}><strong>Limitation:</strong> Binary framing (bad kid/hurt kid). Doesn't address <em>why</em> the name-calling happened or give student capacity to handle their feelings differently.</p>

              <h4>S.A.F.E. Approach:</h4>
              <ul>
                <li><strong>SEE:</strong> Teacher: "I see something hurtful just happened. What did you see?"</li>
                <li><strong>ASK (to name-caller):</strong> "What were you feeling right before you said that?" (EMBODIMENT: body knows before brain)</li>
                <li><strong>FEEL:</strong> "I felt angry because they were ignoring me" → "So you needed to be seen?"</li>
                <li><strong>EMERGE:</strong> "When you need to be seen, who do you want to be? Someone who hurts to get attention, or someone who asks for what they need?"</li>
              </ul>
              <p className={styles.note}><strong>Result:</strong> Student learns the tension underneath (PRESENCE: I need to be seen vs. I'm being ignored). Next time, different choice. <em>Consequences may still apply, but learning happens too.</em></p>
            </div>

            <div className={`${styles.card} ${styles.workshopCard}`}>
              <h3>Scenario: Kindergartener Witnesses Exclusion</h3>

              <h4>STOMP OUT Bullying Approach:</h4>
              <ul>
                <li>"Be an upstander—help your friend"</li>
                <li>"Tell the teacher what you saw"</li>
              </ul>
              <p className={styles.note}><strong>Limitation:</strong> Abstract concept ("upstander") for 5-year-old. No concrete steps. Relies on adult intervention.</p>

              <h4>S.A.F.E. Approach:</h4>
              <ul>
                <li><strong>SEE:</strong> "I see someone being left out. I see I'm scared to help." (Honesty about their own fear)</li>
                <li><strong>ASK:</strong> Teacher prompts: "Can you ask them if they want to play with you instead?" (Concrete action, within their capacity)</li>
                <li><strong>FEEL:</strong> "What do you feel? Scared? Sad for them? Worried the group will leave you out too?" (Name the tension)</li>
                <li><strong>EMERGE:</strong> "Who do you want to be? Someone who stays quiet, or someone who makes space?" (Age-appropriate identity choice)</li>
              </ul>
              <p className={styles.note}><strong>Result:</strong> Kindergartener gets a concrete action (ask if they want to play) and language for their feelings. Practices becoming S.A.F.E.</p>
            </div>
          </div>

          {/* Philosophical Difference */}
          <h2 className={styles.sectionTitle}>The Fundamental Philosophical Difference</h2>

          <div className={styles.assessmentGrid}>
            <div className={styles.beforeBox}>
              <h3>STOMP OUT Bullying Philosophy</h3>
              <p><strong>Problem-Solving Model</strong></p>
              <ul>
                <li>Bullying is a <strong>problem</strong> to solve</li>
                <li>Solutions: Awareness, reporting, crisis support, consequences</li>
                <li>Roles: Victim (needs protection), Bully (needs consequences), Upstander (needs courage)</li>
                <li>Goal: <strong>Stop bullying behavior</strong></li>
                <li>When: <strong>Reactive</strong> (when bullying happens, respond)</li>
              </ul>
            </div>

            <div className={styles.afterBox}>
              <h3>S.A.F.E. Philosophy</h3>
              <p><strong>Tension-Holding Model</strong></p>
              <ul>
                <li>Conflict is <strong>tension</strong> between competing needs</li>
                <li>Learning: Hold tension without collapsing into victim/aggressor</li>
                <li>Roles: Everyone's <strong>becoming</strong> (kid hurt, kid harming, witness, teacher—all learning)</li>
                <li>Goal: <strong>Build capacity to emerge as who you want to be</strong></li>
                <li>When: <strong>Preventive + daily</strong> (every conflict is practice)</li>
              </ul>
            </div>
          </div>

          {/* What Elementary Schools Need */}
          <h2 className={styles.sectionTitle}>What Elementary Schools Actually Need</h2>

          <div className={`${styles.card} ${styles.measurementCard}`}>
            <h3>The Reality of Elementary Conflict</h3>

            <h4>Daily Conflict Count (Average Elementary Classroom)</h4>
            <ul>
              <li><strong>Recess:</strong> 12-15 conflicts per 30-minute period (exclusion from games, "not it" arguments, accidental bumps interpreted as aggression)</li>
              <li><strong>Cafeteria:</strong> 8-10 conflicts per lunch (table exclusion, food teasing, seat-saving disputes)</li>
              <li><strong>Classroom:</strong> 10-12 conflicts per day (partner selection, sharing materials, perceived favoritism)</li>
              <li><strong>Bus/arrival/dismissal:</strong> 5-8 conflicts per transition (line-cutting, seat disputes, backpack bumps)</li>
              <li><strong>Total:</strong> <strong>35-45 micro-conflicts per day</strong></li>
            </ul>

            <h4>What Percentage Become "Bullying"?</h4>
            <p>Research suggests <strong>5-10% of conflicts escalate to repeated, intentional harm</strong> (bullying). The other 90-95% are <strong>conflict, tension, and social learning opportunities</strong>.</p>

            <h4>What Schools Need:</h4>
            <ul>
              <li><strong>For the 5-10% (bullying/crisis):</strong> STOMP OUT Bullying's crisis support, reporting systems, awareness campaigns</li>
              <li><strong>For the 90-95% (daily conflict):</strong> S.A.F.E.'s tension-holding framework, practiced 35-45 times per day</li>
            </ul>

            <div className={styles.highlight}>
              <strong>The Gap:</strong> Most anti-bullying programs focus on the 5-10%. S.A.F.E. addresses the 90-95%—and by doing so, prevents many conflicts from escalating to the 5-10%.
            </div>
          </div>

          {/* Campaign Partnership Vision */}
          <h2 className={styles.sectionTitle}>Campaign Partnership: How This Could Work</h2>

          <div className={`${styles.card} ${styles.workshopCard}`}>
            <h3>A Two-Layer System for Schools</h3>

            <h4>Layer 1: S.A.F.E. Daily Practice (K-5)</h4>
            <ul>
              <li><strong>Morning:</strong> Crossing guards greet with "I SEE you today"</li>
              <li><strong>Classroom:</strong> Teachers facilitate S.A.F.E. for daily conflicts</li>
              <li><strong>Recess:</strong> Monitors prompt "Can you ASK what they need?"</li>
              <li><strong>Cafeteria:</strong> Staff notice exclusion, prompt inclusion actions</li>
              <li><strong>Monthly:</strong> S.A.F.E. assembly tracks actions, celebrates growth</li>
              <li><strong>Result:</strong> Students build tension-holding capacity daily</li>
            </ul>

            <h4>Layer 2: STOMP OUT Bullying Awareness + Crisis (K-12)</h4>
            <ul>
              <li><strong>Annual:</strong> World Day of Bullying Prevention (Blue Shirt Day)</li>
              <li><strong>Awareness:</strong> Posters, PSAs, inclusivity campaigns</li>
              <li><strong>Crisis:</strong> HelpChat available for older students (13+)</li>
              <li><strong>Reporting:</strong> Clear pathways for serious incidents</li>
              <li><strong>Advocacy:</strong> LGBTQ+, racism, cyberbullying education</li>
              <li><strong>Result:</strong> Students know where to get help when S.A.F.E. isn't enough</li>
            </ul>

            <h4>Integration Points:</h4>
            <ul>
              <li><strong>Blue Shirt Day + S.A.F.E. Assembly:</strong> STOMP OUT awareness campaign becomes S.A.F.E. celebration (count S.A.F.E. actions for the month)</li>
              <li><strong>HelpChat for Middle/High + S.A.F.E. Alumni:</strong> Students who learned S.A.F.E. in elementary have language for their feelings when they call HelpChat</li>
              <li><strong>Wellness Rooms + S.A.F.E. Space:</strong> Wellness rooms use S.A.F.E. framework for de-escalation</li>
              <li><strong>Youth Leaders + S.A.F.E. Training:</strong> STOMP OUT's teen advocates learn S.A.F.E. to mentor elementary students</li>
            </ul>
          </div>

          {/* Measurement Together */}
          <h2 className={styles.sectionTitle}>How We Measure Success Together</h2>

          <div className={styles.resourceGrid}>
            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>STOMP OUT Metrics</h3>
              <h4>Crisis Intervention</h4>
              <ul>
                <li>HelpChat calls answered</li>
                <li>Lives saved (suicide prevention)</li>
                <li>Students reached via campaigns</li>
              </ul>
              <h4>Awareness</h4>
              <ul>
                <li>Schools participating in Blue Shirt Day</li>
                <li>Social media impressions</li>
                <li>Educator toolkits downloaded</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>S.A.F.E. Metrics</h3>
              <h4>Daily Practice</h4>
              <ul>
                <li>S.A.F.E. slips submitted (150+/month per school)</li>
                <li>Incident reports (track decline 40-60% year 1)</li>
                <li>Three action types: Inclusion, Witness/Ask, Self-Awareness</li>
              </ul>
              <h4>Capacity-Building</h4>
              <ul>
                <li>Teachers facilitating (vs. solving) conflicts</li>
                <li>Parents using S.A.F.E. language at home</li>
                <li>School-wide staff fluency in Threads</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Combined Impact</h3>
              <h4>What We'd See Together</h4>
              <ul>
                <li><strong>Fewer crisis calls:</strong> HelpChat calls from S.A.F.E. schools decline because students learned tension-holding early</li>
                <li><strong>Better awareness outcomes:</strong> STOMP OUT campaigns land deeper because students have S.A.F.E. framework to apply them</li>
                <li><strong>K-12 continuity:</strong> S.A.F.E. in elementary → STOMP OUT support in middle/high → full developmental coverage</li>
                <li><strong>Parent engagement:</strong> S.A.F.E. parent workshops + STOMP OUT parent resources = comprehensive family education</li>
              </ul>
            </div>
          </div>

          {/* Why This Partnership Matters */}
          <h2 className={styles.sectionTitle}>Why This Partnership Matters</h2>

          <div className={styles.highlight}>
            <p><strong>STOMP OUT Bullying has the reach, the brand recognition, and the crisis infrastructure.</strong></p>
            <p><strong>S.A.F.E. has the psychological depth, the daily practice framework, and the elementary developmental fit.</strong></p>
            <p><strong>Together, we offer what schools actually need: a complete system from kindergarten through high school, from daily micro-conflicts to life-threatening crises.</strong></p>
          </div>

          <div className={`${styles.card} ${styles.workshopCard}`}>
            <h3>The Vision: A S.A.F.E. Generation</h3>

            <p><strong>Imagine a student's journey:</strong></p>

            <h4>Kindergarten (Age 5):</h4>
            <p>"I see someone being left out. I feel sad. I ask if they want to play."</p>

            <h4>3rd Grade (Age 8):</h4>
            <p>"I notice I want to say something mean because I feel ignored. I hold the PRESENCE tension: I need to be seen. Who do I want to be? I ask for what I need instead."</p>

            <h4>5th Grade (Age 10):</h4>
            <p>"My friend group is excluding someone. I feel the THRESHOLD tension: who belongs? I choose to make space even though it's uncomfortable. That's who I want to emerge as."</p>

            <h4>7th Grade (Age 12):</h4>
            <p>"I learned S.A.F.E. in elementary. Now when I see cyberbullying, I know how to hold the tension instead of collapsing. I still struggle sometimes, but I have language for it."</p>

            <h4>10th Grade (Age 15):</h4>
            <p>"When depression hit and I felt suicidal, I called STOMP OUT's HelpChat. They saved my life. I already knew how to name my feelings from S.A.F.E.—I just needed crisis support to get through."</p>

            <p className={styles.note}><strong>That's the partnership. That's the complete system.</strong></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Build a Complete System?</h2>
          <p>Let's bring S.A.F.E. + STOMP OUT Bullying to your school community.</p>
          <a href="/contact" className={styles.ctaButton}>
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default StompOutComparison;
