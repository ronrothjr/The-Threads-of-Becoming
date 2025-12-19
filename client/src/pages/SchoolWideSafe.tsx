import React from 'react';
import styles from './SafeSupport.module.css';

const SchoolWideSafe: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>School-Wide S.A.F.E. Language</h1>
          <p className={styles.tagline}>
            From crossing guards to administrators—everyone speaks S.A.F.E.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className={`${styles.content} section-lg`}>
        <div className="container">
          <p className={styles.intro}>
            <strong>S.A.F.E. isn't just a classroom program—it's the common language of your entire school community.</strong> When crossing guards, cafeteria staff, recess monitors, safety patrol, office staff, custodians, and administrators all speak the same language of tension-holding, students experience consistency, safety, and genuine community everywhere they go.
          </p>

          <div className={styles.highlight}>
            <strong>The Power of Shared Language:</strong> When a crossing guard says "I see you holding the PAUSE thread right now" and a cafeteria worker says "Can you ASK what they're needing?" and a principal says "I FEEL the UNCERTAINTY thread here"—students know they're in a culture that understands them, not just a program that manages them.
          </div>

          <h2 className={styles.sectionTitle}>Every Role, Every Person</h2>

          <div className={styles.roleGrid}>
            {/* Crossing Guards */}
            <div className={`${styles.card} ${styles.roleCard}`}>
              <h3>🚸 Crossing Guards</h3>
              <h4>Morning Greeter Role</h4>
              <ul>
                <li><strong>"Good morning! I SEE you today."</strong> Simple presence acknowledgment</li>
                <li>Notice visible distress: "I see something's hard this morning. Want to share?"</li>
                <li>Safety patrol students model S.A.F.E. greetings</li>
                <li>Weekly focus thread posted on crossing guard vest</li>
              </ul>
              <h4>Scripts They Use</h4>
              <ul>
                <li>"I SEE you need extra space this morning—that's okay."</li>
                <li>"Can you ASK your friend if they're ready to talk?"</li>
                <li>"I FEEL the PAUSE thread here—let's take a breath before we cross."</li>
              </ul>
            </div>

            {/* Bus Drivers */}
            <div className={`${styles.card} ${styles.roleCard}`}>
              <h3>🚌 Bus Drivers</h3>
              <h4>Moving Classroom Role</h4>
              <ul>
                <li>S.A.F.E. bus expectations posted at front</li>
                <li>Weekly S.A.F.E. challenge ("This week we're practicing ASK—notice when someone looks uncomfortable")</li>
                <li>S.A.F.E. slips available for riders to fill out</li>
                <li>Bus driver reports S.A.F.E. actions to school office</li>
              </ul>
              <h4>Scripts They Use</h4>
              <ul>
                <li>"I SEE some tension back there. What's needed?"</li>
                <li>"Remember our FEEL practice—you can say 'I need quiet' or 'I need space.'"</li>
                <li>"That was beautiful ASKing, Maya—you checked in before assuming."</li>
              </ul>
            </div>

            {/* Cafeteria Staff */}
            <div className={`${styles.card} ${styles.roleCard}`}>
              <h3>🍽️ Cafeteria Staff</h3>
              <h4>Inclusion Guardians</h4>
              <ul>
                <li>Notice exclusion patterns at lunch tables</li>
                <li>Prompt S.A.F.E. actions: "I see someone sitting alone—who wants to ASK if they'd like company?"</li>
                <li>Recognize and affirm: "I saw you make space for Jordan—that's EMERGENCE."</li>
                <li>Report S.A.F.E. actions to classroom teachers</li>
              </ul>
              <h4>Scripts They Use</h4>
              <ul>
                <li>"I SEE you looking for a place to sit. Would you like me to ASK that table?"</li>
                <li>"I notice you're holding the CONSENT thread—you don't have to sit somewhere you don't want to."</li>
                <li>"Thank you for EMERGing—you made a choice that created space for everyone."</li>
              </ul>
            </div>

            {/* Recess Monitors */}
            <div className={`${styles.card} ${styles.roleCard}`}>
              <h3>⚽ Recess Monitors</h3>
              <h4>Conflict Navigators</h4>
              <ul>
                <li>Don't solve conflicts—facilitate S.A.F.E. process</li>
                <li>Ask: "Can you SEE what happened from their perspective?"</li>
                <li>Prompt: "Can you ASK what they were feeling?"</li>
                <li>Hold space: "Can you FEEL what you need right now?"</li>
              </ul>
              <h4>When They Intervene</h4>
              <ul>
                <li><strong>Physical safety first:</strong> If SEE & ACT needed, they act immediately</li>
                <li><strong>Conflict:</strong> "Let's pause. I SEE both of you are holding big feelings. Can we ASK what happened?"</li>
                <li><strong>Exclusion:</strong> "I notice the THRESHOLD thread—who gets to play? Can we hold that tension together?"</li>
              </ul>
            </div>

            {/* Safety Patrol */}
            <div className={`${styles.card} ${styles.roleCard}`}>
              <h3>🦺 Safety Patrol</h3>
              <h4>Student Leaders</h4>
              <ul>
                <li>Trained in full S.A.F.E. framework (special workshop)</li>
                <li>Model S.A.F.E. language at arrival, dismissal, hallways</li>
                <li>Fill out S.A.F.E. slips when they witness S.A.F.E. actions</li>
                <li>Monthly recognition at S.A.F.E. assembly</li>
              </ul>
              <h4>Their Special Role</h4>
              <ul>
                <li>"I SEE you" greetings as students arrive</li>
                <li>Notice and affirm: "I saw you ASK before joining the game—that's consent."</li>
                <li>Gentle prompts: "I notice the PAUSE thread—want to take a breath before going in?"</li>
                <li>Report exclusion or concerning patterns to teachers</li>
              </ul>
            </div>

            {/* Office Staff */}
            <div className={`${styles.card} ${styles.roleCard}`}>
              <h3>📋 Office Staff</h3>
              <h4>First Contact Role</h4>
              <ul>
                <li>When students are sent to office: "I SEE you're here. What happened?"</li>
                <li>Use S.A.F.E. language in discipline conversations</li>
                <li>Track S.A.F.E. slips and incidents in system</li>
                <li>Connect students with counselor when needed</li>
              </ul>
              <h4>Scripts They Use</h4>
              <ul>
                <li>"Can you SEE what led to this moment?"</li>
                <li>"What do you FEEL you needed that you weren't getting?"</li>
                <li>"Let's ASK: What does repair look like here?"</li>
                <li>"I see you EMERGing—you're making a different choice now."</li>
              </ul>
            </div>

            {/* Custodians */}
            <div className={`${styles.card} ${styles.roleCard}`}>
              <h3>🧹 Custodians</h3>
              <h4>Community Keepers</h4>
              <ul>
                <li>Maintain S.A.F.E. visual environment (posters, boards)</li>
                <li>Notice and report vandalism or concerning messages</li>
                <li>Brief training on S.A.F.E. language basics</li>
                <li>Friendly check-ins with students they see regularly</li>
              </ul>
              <h4>What This Looks Like</h4>
              <ul>
                <li>"I SEE you taking care of our space—thank you."</li>
                <li>"I notice someone's been writing unkind things in the bathroom—can we ASK why that's happening?"</li>
                <li>Report patterns to counselor or admin</li>
              </ul>
            </div>

            {/* School Counselor */}
            <div className={`${styles.card} ${styles.roleCard}`}>
              <h3>💚 School Counselor</h3>
              <h4>Thread Expert</h4>
              <ul>
                <li>Deep training in all seven Threads</li>
                <li>Individual and small group S.A.F.E. sessions</li>
                <li>Crisis support using SEE & ACT protocol</li>
                <li>Teacher consultation on complex situations</li>
              </ul>
              <h4>Special Populations Support</h4>
              <ul>
                <li>Adapted S.A.F.E. for trauma, autism, anxiety, etc.</li>
                <li>Parent consultation when patterns emerge</li>
                <li>IEP/504 integration of S.A.F.E. language</li>
                <li>Monthly data review with admin</li>
              </ul>
            </div>

            {/* Administration */}
            <div className={`${styles.card} ${styles.roleCard}`}>
              <h3>👔 Administration</h3>
              <h4>Culture Architects</h4>
              <ul>
                <li>Model S.A.F.E. language in all communications</li>
                <li>Monthly S.A.F.E. assemblies (principal leads)</li>
                <li>Staff meeting check-ins using Threads</li>
                <li>Budget allocation for S.A.F.E. materials/training</li>
              </ul>
              <h4>Discipline Integration</h4>
              <ul>
                <li>Restorative circles use S.A.F.E. framework</li>
                <li>"Can you SEE how your actions affected others?"</li>
                <li>"What do you FEEL you need to repair this?"</li>
                <li>"How can we EMERGE from this differently?"</li>
              </ul>
            </div>

            {/* Specials Teachers */}
            <div className={`${styles.card} ${styles.roleCard}`}>
              <h3>🎨 Specials Teachers (Art, Music, PE, Library)</h3>
              <h4>Thread Application Experts</h4>
              <ul>
                <li><strong>Art:</strong> "How does this artwork help us SEE differently?"</li>
                <li><strong>Music:</strong> "Notice the PAUSE between notes—what emerges from silence?"</li>
                <li><strong>PE:</strong> "Can you FEEL when your body needs rest vs. when fear is talking?"</li>
                <li><strong>Library:</strong> "This character is holding the THRESHOLD thread—who belongs?"</li>
              </ul>
              <h4>Consistent Language</h4>
              <ul>
                <li>Use same S.A.F.E. steps for conflict resolution</li>
                <li>Weekly focus thread integrated into lesson</li>
                <li>Fill out S.A.F.E. slips for positive actions</li>
                <li>Communicate patterns to classroom teachers</li>
              </ul>
            </div>
          </div>

          {/* School-Wide Visuals */}
          <h2 className={styles.sectionTitle}>School-Wide Visual Language</h2>

          <div className={styles.highlight}>
            <strong>S.A.F.E. is everywhere:</strong> When students see the same language in every hallway, bathroom, cafeteria, and classroom, it becomes the air they breathe—not a program they're taught.
          </div>

          <div className={styles.resourceGrid}>
            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>Hallway Posters</h3>
              <ul>
                <li><strong>S.A.F.E. Steps</strong> posted near main entrance</li>
                <li><strong>Weekly Focus Thread</strong> on bulletin boards</li>
                <li><strong>Student Quotes</strong> about their S.A.F.E. experiences</li>
                <li><strong>S.A.F.E. Actions</strong> celebrated with names/photos</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>Bathroom Mirrors</h3>
              <ul>
                <li>"I SEE you"—mirror stickers</li>
                <li>"What do you FEEL right now?"—reflection prompts</li>
                <li>"You can ASK for help"—resource numbers</li>
                <li>"Who are you EMERGing to become?"</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>Cafeteria</h3>
              <ul>
                <li>Table tents with S.A.F.E. conversation starters</li>
                <li>"Inclusion Zone" signs</li>
                <li>Weekly S.A.F.E. challenge posted</li>
                <li>S.A.F.E. slip drop box near exit</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>Playground</h3>
              <ul>
                <li>S.A.F.E. posters on fence/walls</li>
                <li>"Need a friend?" bench with ASK prompt</li>
                <li>Recess monitor station with visual prompts</li>
                <li>Game inclusion guidelines using S.A.F.E.</li>
              </ul>
            </div>
          </div>

          {/* Morning Announcements */}
          <h2 className={styles.sectionTitle}>Daily Integration</h2>

          <div className={styles.moduleHeader}>
            <h4>Morning Announcements Script (Weekly Rotation)</h4>
            <p>Principal or student leader reads 60-second S.A.F.E. prompt</p>
          </div>

          <div className={`${styles.card} ${styles.resourceCard}`}>
            <h3>Sample Week</h3>

            <h4>Monday: SEE Focus</h4>
            <p><em>"Good morning! This week we're practicing SEE. Today, notice one person who might be feeling left out. You don't have to do anything yet—just practice seeing them. What do you notice?"</em></p>

            <h4>Tuesday: ASK Focus</h4>
            <p><em>"Good morning! Today's S.A.F.E. challenge: ASK one person 'How are you really doing?' and wait for their honest answer. Don't fix it—just listen."</em></p>

            <h4>Wednesday: FEEL Focus</h4>
            <p><em>"Good morning! Today, notice when you FEEL left out, hurt, or angry. Can you name it to yourself? 'I feel _____ because I need _____.' That's the FEEL step."</em></p>

            <h4>Thursday: EMERGE Focus</h4>
            <p><em>"Good morning! Today's question: Who do you want to EMERGE as today? Someone who includes? Someone who asks? Someone who's honest about their feelings? You get to choose."</em></p>

            <h4>Friday: S.A.F.E. Celebration</h4>
            <p><em>"Good morning! This week we saw 47 S.A.F.E. slips turned in! Shout-out to Mrs. Johnson's class with 12 inclusion actions. Let's celebrate becoming S.A.F.E. together."</em></p>
          </div>

          {/* Monthly Staff Meetings */}
          <h2 className={styles.sectionTitle}>Staff Development</h2>

          <div className={`${styles.card} ${styles.workshopCard}`}>
            <h3>Monthly Staff Meetings (30 minutes)</h3>
            <span className={styles.duration}>Last Friday of Month</span>

            <h4>Meeting Structure</h4>
            <ul>
              <li><strong>Check-In (5 min):</strong> "What Thread are you holding this month?" Staff share</li>
              <li><strong>Data Review (10 min):</strong> S.A.F.E. slips, incident trends, class patterns</li>
              <li><strong>Case Consultation (10 min):</strong> One teacher presents complex situation, group problem-solves using Threads</li>
              <li><strong>Next Month Focus (5 min):</strong> Announce focus thread, new resources, upcoming assembly theme</li>
            </ul>

            <h4>What This Builds</h4>
            <ul>
              <li>Staff fluency in Thread language</li>
              <li>Shared problem-solving culture</li>
              <li>Data-informed adjustments</li>
              <li>Professional learning community</li>
            </ul>
          </div>

          {/* Incident Reporting */}
          <h2 className={styles.sectionTitle}>Incident Reporting System</h2>

          <div className={`${styles.card} ${styles.measurementCard}`}>
            <h3>How Everyone Reports</h3>

            <h4>S.A.F.E. Slip (Positive Actions)</h4>
            <ul>
              <li>Anyone can fill out (staff, students, parents)</li>
              <li>Drop boxes in cafeteria, office, library</li>
              <li>Digital option for older students</li>
              <li>Read at weekly assembly</li>
            </ul>

            <h4>Incident Report (Concerning Behaviors)</h4>
            <ul>
              <li>Staff-only form (paper or digital)</li>
              <li>Submitted to office within 24 hours</li>
              <li>Counselor reviews daily</li>
              <li>Patterns trigger intervention</li>
            </ul>

            <h4>What Gets Tracked</h4>
            <ul>
              <li>Exclusion incidents (who, where, when)</li>
              <li>Unkind words (context, Thread involved)</li>
              <li>Physical aggression (SEE & ACT invoked)</li>
              <li>S.A.F.E. actions (type: inclusion, witness, self-awareness)</li>
            </ul>
          </div>

          {/* PTA Integration */}
          <h2 className={styles.sectionTitle}>PTA & Family Engagement</h2>

          <div className={`${styles.card} ${styles.resourceCard}`}>
            <h3>PTA S.A.F.E. Nights (Quarterly)</h3>
            <span className={styles.duration}>90 minutes, Evening</span>

            <h4>Event Structure</h4>
            <ul>
              <li><strong>Welcome & S.A.F.E. Overview (15 min):</strong> Principal or counselor presents current data</li>
              <li><strong>Student Demonstration (15 min):</strong> Student leaders demonstrate S.A.F.E. in action</li>
              <li><strong>Breakout Sessions (45 min):</strong> Grade-level groups discuss common conflicts, practice S.A.F.E. responses</li>
              <li><strong>Resource Fair (15 min):</strong> Take-home materials, Q&A with teachers</li>
            </ul>

            <h4>PTA Support</h4>
            <ul>
              <li>Fund S.A.F.E. materials and assemblies</li>
              <li>Organize parent workshops</li>
              <li>Sponsor end-of-year S.A.F.E. celebration</li>
              <li>Communicate S.A.F.E. in newsletters</li>
            </ul>
          </div>

          {/* New Staff Onboarding */}
          <h2 className={styles.sectionTitle}>New Staff Onboarding</h2>

          <div className={`${styles.card} ${styles.workshopCard}`}>
            <h3>S.A.F.E. Foundations for New Hires</h3>
            <span className={styles.duration}>3 hours, Before School Year</span>

            <h4>Session Content</h4>
            <ul>
              <li><strong>Hour 1:</strong> Threads of Becoming foundation (overview of seven threads)</li>
              <li><strong>Hour 2:</strong> S.A.F.E. steps and role-specific applications</li>
              <li><strong>Hour 3:</strong> Practice scenarios, Q&A, resources tour</li>
            </ul>

            <h4>Ongoing Support</h4>
            <ul>
              <li>Buddy teacher for first month</li>
              <li>Check-in with counselor after 2 weeks</li>
              <li>Observation of S.A.F.E. assembly</li>
              <li>Access to digital resource library</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Make S.A.F.E. Your School's Language?</h2>
          <p>Let's create a culture where every adult speaks the language of tension-holding.</p>
          <a href="/contact" className={styles.ctaButton}>
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default SchoolWideSafe;
