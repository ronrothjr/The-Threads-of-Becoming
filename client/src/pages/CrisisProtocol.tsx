import React from 'react';
import styles from './SafeSupport.module.css';

const CrisisProtocol: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>SEE & ACT: Crisis Protocol</h1>
          <p className={styles.tagline}>
            When to intervene immediately—and when S.A.F.E. can wait
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className={`${styles.content} section-lg`}>
        <div className="container">
          <p className={styles.intro}>
            <strong>S.A.F.E. is powerful—but it's not for every moment.</strong> When physical violence is happening NOW, when a child discloses abuse, when weapons are present, when self-harm is imminent—you don't facilitate tension-holding. You <strong>SEE the crisis and ACT immediately</strong>.
          </p>

          <div className={styles.highlight}>
            <strong>Critical Distinction:</strong> S.A.F.E. is for <em>conflict</em> (tension between people that can be held and explored). SEE & ACT is for <em>crisis</em> (immediate danger requiring adult intervention). Confusing the two can cause harm.
          </div>

          {/* Decision Tree */}
          <h2 className={styles.sectionTitle}>The Decision Tree: Crisis or Conflict?</h2>

          <div className={styles.assessmentGrid}>
            <div className={styles.beforeBox}>
              <h3>🚨 SEE & ACT (Crisis)</h3>
              <h4>Immediate Adult Intervention Required</h4>
              <ul>
                <li><strong>Physical violence happening NOW</strong> (hitting, kicking, choking, etc.)</li>
                <li><strong>Credible threat of imminent harm</strong> ("I'm going to hurt you after school")</li>
                <li><strong>Weapon present or threatened</strong></li>
                <li><strong>Sexual harassment or assault</strong> (touching, exposing, coercion)</li>
                <li><strong>Child abuse disclosure</strong> ("My dad hit me last night")</li>
                <li><strong>Self-harm risk</strong> ("I want to die," visible cutting, etc.)</li>
                <li><strong>Substance use on campus</strong></li>
                <li><strong>Severe emotional dysregulation</strong> (student a danger to self/others)</li>
              </ul>
              <p><strong>Action: Intervene immediately. Ensure safety first. No S.A.F.E. facilitation yet.</strong></p>
            </div>

            <div className={styles.afterBox}>
              <h3>🤝 S.A.F.E. (Conflict)</h3>
              <h4>Tension-Holding Appropriate</h4>
              <ul>
                <li><strong>Exclusion</strong> ("You can't play with us")</li>
                <li><strong>Unkind words</strong> (name-calling, teasing, rumors)</li>
                <li><strong>Social conflict</strong> (friendship breakups, group dynamics)</li>
                <li><strong>Disagreement over rules/games</strong></li>
                <li><strong>Hurt feelings</strong> (someone was left out, ignored)</li>
                <li><strong>Boundary testing</strong> (pushing limits, seeing what they can get away with)</li>
                <li><strong>Peer pressure situations</strong> (choosing between groups)</li>
                <li><strong>Identity exploration</strong> (trying on different roles, testing who they want to be)</li>
              </ul>
              <p><strong>Action: Facilitate S.A.F.E. process. Hold the tension. Help students learn.</strong></p>
            </div>
          </div>

          {/* SEE & ACT Steps */}
          <h2 className={styles.sectionTitle}>SEE & ACT Protocol (Step-by-Step)</h2>

          <div className={`${styles.card} ${styles.workshopCard}`}>
            <h3>When Crisis Is Happening</h3>

            <h4>STEP 1: SEE the Crisis</h4>
            <ul>
              <li><strong>Immediate assessment:</strong> Is someone in physical danger right now?</li>
              <li><strong>Trust your gut:</strong> If it feels like a crisis, treat it as one</li>
              <li><strong>Don't deliberate:</strong> You can debrief later—safety first</li>
            </ul>

            <h4>STEP 2: ACT to Ensure Safety</h4>
            <ul>
              <li><strong>Stop the harm:</strong> Physically separate if needed (verbal command first: "Stop. Separate now.")</li>
              <li><strong>Call for backup:</strong> Radio/phone for admin, counselor, or security immediately</li>
              <li><strong>Secure the scene:</strong> Remove other students if necessary, eliminate access to weapons/harm</li>
              <li><strong>Check for injuries:</strong> Attend to physical harm, call nurse/911 if needed</li>
            </ul>

            <h4>STEP 3: Report & Document</h4>
            <ul>
              <li><strong>Mandatory reporting:</strong> Abuse disclosure, weapons, assault—follow legal protocols immediately</li>
              <li><strong>Incident report:</strong> Document what you saw, heard, and did (facts, not interpretation)</li>
              <li><strong>Notify admin:</strong> Principal/AP must be informed immediately</li>
              <li><strong>Contact parents:</strong> Admin handles parent notification for crisis situations</li>
            </ul>

            <h4>STEP 4: Only THEN Consider S.A.F.E.</h4>
            <ul>
              <li><strong>After safety is secured:</strong> Once crisis is resolved, you may use S.A.F.E. for repair/learning</li>
              <li><strong>Not immediately:</strong> Students in crisis can't engage in reflection—give space first</li>
              <li><strong>Counselor-led:</strong> Crisis-to-S.A.F.E. transitions should involve trained counselor</li>
            </ul>
          </div>

          {/* Pocket Card Template */}
          <h2 className={styles.sectionTitle}>SEE & ACT Pocket Card (For All Staff)</h2>

          <div className={`${styles.card} ${styles.resourceCard}`}>
            <h3>Laminated Card (3x5) Every Staff Member Carries</h3>

            <div className={styles.info}>
              <h4>FRONT SIDE</h4>
              <p><strong>SEE & ACT: Crisis Protocol</strong></p>
              <p><em>When immediate danger is present</em></p>

              <p><strong>1. SEE the Crisis</strong></p>
              <ul>
                <li>Physical violence NOW?</li>
                <li>Weapon present?</li>
                <li>Abuse disclosure?</li>
                <li>Self-harm risk?</li>
                <li>Sexual harassment/assault?</li>
              </ul>

              <p><strong>2. ACT Immediately</strong></p>
              <ul>
                <li>Stop the harm (separate, command)</li>
                <li>Call for backup (radio/phone)</li>
                <li>Secure safety (remove students, eliminate access)</li>
                <li>Check for injuries (nurse/911)</li>
              </ul>

              <p><strong>3. Report</strong></p>
              <ul>
                <li>Mandatory reporting if required by law</li>
                <li>Incident report within 1 hour</li>
                <li>Notify admin immediately</li>
              </ul>
            </div>

            <div className={styles.info}>
              <h4>BACK SIDE</h4>
              <p><strong>S.A.F.E.: Conflict Protocol</strong></p>
              <p><em>When tension can be held and explored</em></p>

              <p><strong>S - SEE</strong></p>
              <p>"What do you notice happening?"</p>

              <p><strong>A - ASK</strong></p>
              <p>"Can you ask what they're feeling/needing?"</p>

              <p><strong>F - FEEL</strong></p>
              <p>"What do you feel? What do you need?"</p>

              <p><strong>E - EMERGE</strong></p>
              <p>"Who do you want to be in this moment?"</p>

              <p className={styles.note}><strong>Remember:</strong> If you're unsure whether it's crisis or conflict, choose SEE & ACT. You can always transition to S.A.F.E. after safety is secured.</p>
            </div>
          </div>

          {/* Training Scenarios */}
          <h2 className={styles.sectionTitle}>Training Scenarios: Crisis vs. Conflict</h2>

          <p className={styles.intro}>
            <strong>Staff training includes practicing these distinctions.</strong> Below are 12 scenarios staff discuss in groups: Crisis (SEE & ACT) or Conflict (S.A.F.E.)?
          </p>

          <div className={styles.resourceGrid}>
            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 1</h3>
              <p><strong>Situation:</strong> Two students are shoving each other on the playground. No punches thrown yet, but they're escalating.</p>
              <p><strong>Answer:</strong> <span style={{color: '#FF3333'}}>CRISIS (SEE & ACT)</span></p>
              <p><strong>Why:</strong> Physical aggression in progress—intervene before it escalates to violence. Separate immediately, then debrief with S.A.F.E. later.</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 2</h3>
              <p><strong>Situation:</strong> A student comes to you crying because their friend said "I don't want to be your friend anymore."</p>
              <p><strong>Answer:</strong> <span style={{color: '#00CC44'}}>CONFLICT (S.A.F.E.)</span></p>
              <p><strong>Why:</strong> Hurt feelings, friendship conflict—perfect for S.A.F.E. facilitation. No immediate danger.</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 3</h3>
              <p><strong>Situation:</strong> A student whispers to you, "My uncle touched me in a bad way last night."</p>
              <p><strong>Answer:</strong> <span style={{color: '#FF3333'}}>CRISIS (SEE & ACT)</span></p>
              <p><strong>Why:</strong> Mandatory reporting. Abuse disclosure requires immediate action—notify admin, follow legal protocols. No S.A.F.E. facilitation for abuse situations.</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 4</h3>
              <p><strong>Situation:</strong> You overhear a group of girls saying mean things about another girl who isn't present.</p>
              <p><strong>Answer:</strong> <span style={{color: '#00CC44'}}>CONFLICT (S.A.F.E.)</span></p>
              <p><strong>Why:</strong> Relational aggression, rumors—use S.A.F.E. to address. "I SEE something happening here. Can we talk about it?"</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 5</h3>
              <p><strong>Situation:</strong> A student shows you cuts on their arm and says, "I did this last night because I hate myself."</p>
              <p><strong>Answer:</strong> <span style={{color: '#FF3333'}}>CRISIS (SEE & ACT)</span></p>
              <p><strong>Why:</strong> Self-harm disclosure—immediate counselor/admin notification, parent contact, safety plan. S.A.F.E. may be part of long-term support, but crisis protocol first.</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 6</h3>
              <p><strong>Situation:</strong> A student refuses to work with their assigned partner, saying "They're annoying and I don't want to."</p>
              <p><strong>Answer:</strong> <span style={{color: '#00CC44'}}>CONFLICT (S.A.F.E.)</span></p>
              <p><strong>Why:</strong> Boundary/consent tension—perfect Thread work. "I FEEL the CONSENT thread here—you get to choose, and so do they. How do we hold that tension?"</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 7</h3>
              <p><strong>Situation:</strong> You see a student pull a pocket knife out of their backpack during lunch.</p>
              <p><strong>Answer:</strong> <span style={{color: '#FF3333'}}>CRISIS (SEE & ACT)</span></p>
              <p><strong>Why:</strong> Weapon on campus—immediate intervention. Secure the weapon, ensure safety, notify admin immediately.</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 8</h3>
              <p><strong>Situation:</strong> Two students are arguing loudly about who gets to use the basketball first.</p>
              <p><strong>Answer:</strong> <span style={{color: '#00CC44'}}>CONFLICT (S.A.F.E.)</span></p>
              <p><strong>Why:</strong> Disagreement over resources—classic S.A.F.E. moment. "I SEE both of you want the ball. What's needed here?"</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 9</h3>
              <p><strong>Situation:</strong> A student says to you, "Marcus said he's going to beat me up after school today."</p>
              <p><strong>Answer:</strong> <span style={{color: '#FF3333'}}>CRISIS (SEE & ACT)</span></p>
              <p><strong>Why:</strong> Credible threat of harm—investigate immediately, separate students, notify admin, ensure supervised dismissal. S.A.F.E. debrief only after safety secured.</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 10</h3>
              <p><strong>Situation:</strong> You notice a student sitting alone at lunch every day for a week, looking sad.</p>
              <p><strong>Answer:</strong> <span style={{color: '#00CC44'}}>CONFLICT (S.A.F.E.)</span></p>
              <p><strong>Why:</strong> Social exclusion pattern—check in using S.A.F.E. "I SEE you've been sitting alone. What's that like for you?" May also refer to counselor for deeper support.</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 11</h3>
              <p><strong>Situation:</strong> A student is having a meltdown, throwing chairs, screaming, and won't respond to verbal de-escalation.</p>
              <p><strong>Answer:</strong> <span style={{color: '#FF3333'}}>CRISIS (SEE & ACT)</span></p>
              <p><strong>Why:</strong> Severe dysregulation, danger to self/others—clear room, call admin/counselor, ensure safety. Once calm, you can explore what happened using S.A.F.E.</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Scenario 12</h3>
              <p><strong>Situation:</strong> A student tells you another student touched their private parts during recess.</p>
              <p><strong>Answer:</strong> <span style={{color: '#FF3333'}}>CRISIS (SEE & ACT)</span></p>
              <p><strong>Why:</strong> Sexual harassment/assault disclosure—mandatory reporting, immediate admin notification, parent contact, possible law enforcement. This is never a S.A.F.E. facilitation situation.</p>
            </div>
          </div>

          {/* When S.A.F.E. Can Wait */}
          <h2 className={styles.sectionTitle}>When S.A.F.E. Can Wait (Or Shouldn't Happen)</h2>

          <div className={`${styles.card} ${styles.resourceCard}`}>
            <h3>Situations Where S.A.F.E. Is Not Appropriate</h3>

            <h4>1. Trauma Responses</h4>
            <p>Student in trauma response (fight/flight/freeze) cannot engage in reflection or tension-holding. They need:</p>
            <ul>
              <li><strong>Safety and calm first:</strong> Quiet space, trusted adult, regulation support</li>
              <li><strong>Time:</strong> May be hours or days before S.A.F.E. conversation is possible</li>
              <li><strong>Counselor support:</strong> Trained professional should lead when ready</li>
            </ul>
            <p className={styles.note}><strong>What NOT to do:</strong> "Let's use S.A.F.E. to talk about this right now" when student is in crisis. You're adding cognitive load they can't handle.</p>

            <h4>2. Power Imbalances (Abuse, Assault)</h4>
            <p>S.A.F.E. is for <em>peer conflict</em>, not <em>harm by those with power</em>. Never use S.A.F.E. for:</p>
            <ul>
              <li><strong>Adult-to-child abuse:</strong> This is criminal, not conflict</li>
              <li><strong>Sexual assault:</strong> This is violence, not tension to hold</li>
              <li><strong>Severe bullying with power differential:</strong> When one student has systematic power over another (size, age, social status), S.A.F.E. can re-traumatize the victim</li>
            </ul>
            <p className={styles.note}><strong>What to do instead:</strong> SEE & ACT protocol, counselor-led safety planning, restorative justice circles (if appropriate and victim consents).</p>

            <h4>3. Special Populations in Crisis</h4>
            <p>Students with certain needs may not be able to engage S.A.F.E. in the moment:</p>
            <ul>
              <li><strong>Autism (sensory overload):</strong> Need quiet, predictable environment before any conversation</li>
              <li><strong>ADHD (emotional flooding):</strong> Need movement, time to regulate before processing</li>
              <li><strong>Anxiety (panic state):</strong> Need grounding, breathing, safety before reflection</li>
            </ul>
            <p className={styles.note}><strong>Adaptation:</strong> "I SEE you're overwhelmed right now. Let's find a safe spot and we can talk when you're ready." S.A.F.E. happens later, in adapted form.</p>

            <h4>4. Legal/Disciplinary Consequences Required</h4>
            <p>Some behaviors have non-negotiable consequences (suspension, expulsion, law enforcement):</p>
            <ul>
              <li><strong>Weapons on campus</strong></li>
              <li><strong>Drug distribution</strong></li>
              <li><strong>Assault causing injury</strong></li>
            </ul>
            <p>S.A.F.E. doesn't replace consequences—it can supplement them (restorative conversation after suspension, for example), but safety and accountability come first.</p>
          </div>

          {/* Warning Signs */}
          <h2 className={styles.sectionTitle}>Warning Signs: When S.A.F.E. Becomes Harmful</h2>

          <div className={`${styles.card} ${styles.measurementCard}`}>
            <h3>Red Flags Staff Must Watch For</h3>

            <h4>1. Forcing S.A.F.E. When Student Says "I'm Not Ready"</h4>
            <p><strong>What it looks like:</strong> Teacher insists on S.A.F.E. circle immediately after incident, student resists, teacher pushes anyway</p>
            <p><strong>Why it's harmful:</strong> Violates CONSENT thread—we don't force vulnerability</p>
            <p><strong>What to do instead:</strong> "I hear you're not ready. When would feel better? This afternoon? Tomorrow?"</p>

            <h4>2. Using S.A.F.E. to Avoid Necessary Discipline</h4>
            <p><strong>What it looks like:</strong> Student punches another student, teacher facilitates S.A.F.E. conversation but doesn't report incident or impose consequences</p>
            <p><strong>Why it's harmful:</strong> Minimizes harm, enables aggressor, teaches victim their safety doesn't matter</p>
            <p><strong>What to do instead:</strong> SEE & ACT first (report, consequences), S.A.F.E. as part of repair process after</p>

            <h4>3. Asking Victim to "Understand" Aggressor's Perspective Too Soon</h4>
            <p><strong>What it looks like:</strong> "I know they said something hurtful, but can you SEE why they might have been upset?"</p>
            <p><strong>Why it's harmful:</strong> Centers aggressor's feelings over victim's harm, can feel like gaslighting</p>
            <p><strong>What to do instead:</strong> Hold space for victim's feelings first. Separate conversations if needed. Repair happens when victim is ready, not on adult timeline.</p>

            <h4>4. Public S.A.F.E. Processing of Private Harm</h4>
            <p><strong>What it looks like:</strong> Teacher facilitates S.A.F.E. conversation about sexual harassment in front of whole class</p>
            <p><strong>Why it's harmful:</strong> Re-traumatizes victim, violates privacy, creates unsafe environment</p>
            <p><strong>What to do instead:</strong> Private conversations with counselor, parents notified, admin involved. Class-level education about consent/boundaries without naming individuals.</p>

            <h4>5. Staff Using S.A.F.E. Without Adequate Training</h4>
            <p><strong>What it looks like:</strong> Staff member skims S.A.F.E. overview, tries to facilitate complex conflict without understanding Threads framework</p>
            <p><strong>Why it's harmful:</strong> Can collapse tension prematurely, re-traumatize students, or escalate conflict</p>
            <p><strong>What to do instead:</strong> Require full training (6 hours minimum) before staff facilitate S.A.F.E. independently. Consult counselor for complex situations.</p>
          </div>

          {/* Staff Training Requirements */}
          <h2 className={styles.sectionTitle}>Staff Training: Crisis vs. Conflict</h2>

          <div className={`${styles.card} ${styles.workshopCard}`}>
            <h3>Mandatory Training for All Staff</h3>
            <span className={styles.duration}>3 hours, Before School Year</span>

            <h4>Module 1: Understanding Crisis vs. Conflict (60 min)</h4>
            <ul>
              <li>Definitions and examples</li>
              <li>Decision tree practice (12 scenarios above)</li>
              <li>SEE & ACT protocol step-by-step</li>
              <li>Mandatory reporting requirements (legal refresher)</li>
            </ul>

            <h4>Module 2: S.A.F.E. Basics (60 min)</h4>
            <ul>
              <li>Four S.A.F.E. steps with Thread foundations</li>
              <li>When S.A.F.E. is appropriate vs. when it's harmful</li>
              <li>Role-plays of simple conflicts (exclusion, unkind words)</li>
              <li>How to refer complex situations to counselor</li>
            </ul>

            <h4>Module 3: Practice & Q&A (60 min)</h4>
            <ul>
              <li>Small group practice with scenarios</li>
              <li>Review of pocket card (every staff receives one)</li>
              <li>When to call for backup (admin, counselor, security)</li>
              <li>Q&A with school counselor and admin</li>
            </ul>

            <h4>Ongoing Support</h4>
            <ul>
              <li>Monthly staff meetings include scenario discussion</li>
              <li>Office hours with counselor for case consultation</li>
              <li>Annual refresher training (2 hours)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Train Your Staff?</h2>
          <p>Let's ensure every adult knows when to SEE & ACT—and when to facilitate S.A.F.E.</p>
          <a href="/contact" className={styles.ctaButton}>
            Request Training
          </a>
        </div>
      </section>
    </div>
  );
};

export default CrisisProtocol;
