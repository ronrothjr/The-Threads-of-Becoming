import React from 'react';
import styles from './SafeSupport.module.css';

const PublicMeasurement: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Public Measurement & Celebration</h1>
          <p className={styles.tagline}>
            Making S.A.F.E. actions visible, valued, and celebrated
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className={`${styles.content} section-lg`}>
        <div className="container">
          <p className={styles.intro}>
            <strong>What gets measured gets done. What gets celebrated gets repeated.</strong> S.A.F.E. success isn't hidden in counselor offices or incident reports—it's displayed publicly, celebrated loudly, and tracked transparently. When students see their collective progress toward becoming a S.A.F.E. community, they become agents of that change.
          </p>

          <div className={styles.highlight}>
            <strong>The Shift:</strong> From "How many bullying incidents occurred?" (shame-based, punitive) to "How many S.A.F.E. actions did we take?" (growth-based, celebratory). We're not counting failures—we're counting courage.
          </div>

          {/* The S.A.F.E. Board */}
          <h2 className={styles.sectionTitle}>The S.A.F.E. Board</h2>

          <div className={`${styles.card} ${styles.measurementCard}`}>
            <h3>📊 Weekly Visual Tracking (Main Hallway)</h3>

            <h4>What It Looks Like</h4>
            <p>Large 6-foot display board near main entrance with four sections:</p>

            <div className={styles.info}>
              <p><strong>1. This Week's Focus Thread</strong></p>
              <p>Large visual of the thread (e.g., "CONSENT: Who gets to choose?") with explanation and examples</p>
            </div>

            <div className={styles.info}>
              <p><strong>2. S.A.F.E. Actions Counter</strong></p>
              <p>Three running tallies (updated daily):</p>
              <ul>
                <li><strong>Inclusion Actions:</strong> "This week: 34 | This year: 412"</li>
                <li><strong>Witness/Ask Actions:</strong> "This week: 21 | This year: 287"</li>
                <li><strong>Self-Awareness Actions:</strong> "This week: 18 | This year: 203"</li>
              </ul>
            </div>

            <div className={styles.info}>
              <p><strong>3. Incident Count (Transparent)</strong></p>
              <p>Simple graph showing weekly incidents:</p>
              <ul>
                <li>Exclusion incidents (green bars—trending down is good)</li>
                <li>Unkind words incidents (blue bars)</li>
                <li>Physical aggression (red bars—SEE & ACT invoked)</li>
              </ul>
              <p className={styles.note}>*Note: Numbers only, no names. Goal is transparency, not shame.*</p>
            </div>

            <div className={styles.info}>
              <p><strong>4. Featured S.A.F.E. Story</strong></p>
              <p>One student-written story per week (with permission) describing a S.A.F.E. action they took or witnessed</p>
            </div>

            <h4>Who Updates It</h4>
            <ul>
              <li><strong>Office staff:</strong> Daily tally updates (5 minutes/day)</li>
              <li><strong>Student council:</strong> Weekly story selection and posting</li>
              <li><strong>Principal:</strong> Friday assembly shout-out referencing the board</li>
            </ul>
          </div>

          {/* S.A.F.E. Slips */}
          <h2 className={styles.sectionTitle}>S.A.F.E. Slips System</h2>

          <div className={styles.resourceGrid}>
            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>What Are S.A.F.E. Slips?</h3>
              <p>Small cards (3x5) available everywhere—classrooms, cafeteria, office, library—that anyone can fill out to recognize a S.A.F.E. action they took or witnessed.</p>

              <h4>The Card Has:</h4>
              <ul>
                <li><strong>Who:</strong> Name of person who took S.A.F.E. action (optional for self-report)</li>
                <li><strong>What I Saw/Did:</strong> Brief description</li>
                <li><strong>Type of Action:</strong> ☐ Inclusion ☐ Witness/Ask ☐ Self-Awareness</li>
                <li><strong>Thread Involved:</strong> (optional, if they can name it)</li>
                <li><strong>Submitted by:</strong> Name or anonymous</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>Three Types of S.A.F.E. Actions</h3>

              <h4>1. Inclusion Actions</h4>
              <p><em>When patterns of exclusion happen, students voluntarily include someone</em></p>
              <ul>
                <li>"I saw Maya sitting alone, so I asked if she wanted to sit with us"</li>
                <li>"Jamal wasn't picked for the team, so I said we should pick him next"</li>
                <li>"I noticed the new kid didn't have a partner, so I partnered with them"</li>
              </ul>

              <h4>2. Witness/Ask Actions</h4>
              <p><em>When unkind words are said, students ask about hurt instead of ignoring or escalating</em></p>
              <ul>
                <li>"I heard someone call Aisha a name, so I asked if she was okay"</li>
                <li>"I saw two kids arguing and asked what they both needed"</li>
                <li>"My friend was spreading rumors, so I asked why they were doing that"</li>
              </ul>

              <h4>3. Self-Awareness Actions</h4>
              <p><em>Students voice feelings about what they're doing, needing, or wanting to become</em></p>
              <ul>
                <li>"I was about to exclude someone, but I noticed and chose differently"</li>
                <li>"I felt hurt when they left me out, so I said 'I feel left out' instead of being mean back"</li>
                <li>"I wanted to say something mean, but I paused and asked myself who I want to be"</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>What Happens to S.A.F.E. Slips?</h3>

              <h4>Daily Process</h4>
              <ul>
                <li><strong>Collection:</strong> Office staff collect from drop boxes each afternoon</li>
                <li><strong>Review:</strong> Counselor reviews for patterns (5 min/day)</li>
                <li><strong>Data Entry:</strong> Office staff tally by type in tracking system</li>
                <li><strong>Selection:</strong> Student council picks 5-7 to read at Friday assembly</li>
              </ul>

              <h4>Monthly Process</h4>
              <ul>
                <li><strong>Classroom tallies:</strong> Each class gets report of their S.A.F.E. actions</li>
                <li><strong>Individual recognition:</strong> Students with 3+ slips get certificate</li>
                <li><strong>S.A.F.E. Wall:</strong> Top 10 slips posted in main hallway</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.resourceCard}`}>
              <h3>Digital Option (Grades 3+)</h3>
              <p>Google Form or simple app where students can submit S.A.F.E. slips digitally</p>

              <h4>Benefits</h4>
              <ul>
                <li>Easier data tracking</li>
                <li>Anonymous submissions more comfortable for some</li>
                <li>Instant tallies for S.A.F.E. Board</li>
                <li>Can include photos of S.A.F.E. action (with permission)</li>
              </ul>

              <h4>Considerations</h4>
              <ul>
                <li>Not all students have device access—keep paper option</li>
                <li>Younger students may prefer tactile card experience</li>
                <li>Digital can feel less personal—balance both</li>
              </ul>
            </div>
          </div>

          {/* Monthly Assemblies */}
          <h2 className={styles.sectionTitle}>Monthly S.A.F.E. Assemblies</h2>

          <div className={`${styles.card} ${styles.workshopCard}`}>
            <h3>Whole-School Celebration</h3>
            <span className={styles.duration}>30 minutes, Last Friday of Month</span>

            <h4>Assembly Flow</h4>

            <div className={styles.moduleHeader}>
              <h4>1. Welcome & S.A.F.E. Board Review (5 min)</h4>
              <p>Principal presents:</p>
              <ul>
                <li>Total S.A.F.E. actions this month (celebrate number)</li>
                <li>Incident trends (transparent, not shaming)</li>
                <li>"We took 156 S.A.F.E. actions this month! And we're seeing exclusion incidents drop from 23 to 14. That's us becoming S.A.F.E. together."</li>
              </ul>
            </div>

            <div className={styles.moduleHeader}>
              <h4>2. S.A.F.E. Slip Readings (10 min)</h4>
              <p>Student council members read 10-12 selected slips aloud:</p>
              <ul>
                <li>Mix of all three action types</li>
                <li>Represent different grade levels</li>
                <li>Show range of situations (cafeteria, recess, classroom, bus)</li>
                <li>Students named stand and are applauded</li>
              </ul>
            </div>

            <div className={styles.moduleHeader}>
              <h4>3. Thread Teaching Moment (7 min)</h4>
              <p>Counselor or teacher leads interactive mini-lesson:</p>
              <ul>
                <li>Focus on one Thread (rotates monthly)</li>
                <li>Real scenario from school (anonymized)</li>
                <li>Students turn-and-talk: "What Thread do you see here?"</li>
                <li>Volunteers share insights</li>
              </ul>
            </div>

            <div className={styles.moduleHeader}>
              <h4>4. Class Recognition (5 min)</h4>
              <p>Top 3 classes for S.A.F.E. actions:</p>
              <ul>
                <li>Trophy or banner to display in classroom for the month</li>
                <li>Classes celebrate (standing ovation from peers)</li>
                <li>No prize—just recognition and pride</li>
              </ul>
            </div>

            <div className={styles.moduleHeader}>
              <h4>5. Next Month Preview (3 min)</h4>
              <p>Announce next month's focus Thread and challenge</p>
              <ul>
                <li>"Next month we're diving into UNCERTAINTY. Notice when you don't know what to do—that's when S.A.F.E. shows up."</li>
              </ul>
            </div>
          </div>

          {/* Public Incident Dashboard */}
          <h2 className={styles.sectionTitle}>Public Incident Dashboard</h2>

          <div className={`${styles.card} ${styles.measurementCard}`}>
            <h3>Transparency Builds Accountability</h3>

            <h4>What Gets Published (Monthly)</h4>
            <p>On school website and in newsletter:</p>

            <div className={styles.assessmentGrid}>
              <div className={styles.beforeBox}>
                <h3>Incidents (Numbers Only)</h3>
                <ul>
                  <li><strong>Exclusion incidents:</strong> 14 this month (down from 23 last month)</li>
                  <li><strong>Unkind words incidents:</strong> 8 this month (up from 6 last month)</li>
                  <li><strong>Physical aggression:</strong> 2 this month (same as last month)</li>
                </ul>
              </div>

              <div className={styles.afterBox}>
                <h3>S.A.F.E. Actions (Celebrate!)</h3>
                <ul>
                  <li><strong>Inclusion actions:</strong> 67 this month</li>
                  <li><strong>Witness/Ask actions:</strong> 42 this month</li>
                  <li><strong>Self-awareness actions:</strong> 28 this month</li>
                  <li><strong>Total:</strong> 137 S.A.F.E. actions!</li>
                </ul>
              </div>
            </div>

            <h4>Why Publish Incident Numbers?</h4>
            <ul>
              <li><strong>Honesty:</strong> We don't hide problems—we face them together</li>
              <li><strong>Context:</strong> Families see the full picture, not just what their kid reports</li>
              <li><strong>Accountability:</strong> Public tracking means staff can't ignore patterns</li>
              <li><strong>Progress:</strong> Over time, families see the culture shifting</li>
            </ul>

            <div className={styles.note}>
              <strong>Important:</strong> Never publish names associated with incidents. Numbers only. Privacy protected, patterns revealed.
            </div>
          </div>

          {/* S.A.F.E. Wall */}
          <h2 className={styles.sectionTitle}>The S.A.F.E. Wall</h2>

          <div className={`${styles.card} ${styles.resourceCard}`}>
            <h3>Permanent Visual in Main Hallway</h3>

            <h4>What It Is</h4>
            <p>Large bulletin board displaying:</p>
            <ul>
              <li><strong>Top 10 S.A.F.E. Slips of the Month</strong> (full text, with student names/photos if permission given)</li>
              <li><strong>Year-to-Date Stats</strong> (running totals of S.A.F.E. actions by type)</li>
              <li><strong>Thread Spotlight</strong> (current month's focus Thread with student reflections)</li>
              <li><strong>S.A.F.E. Pledge</strong> signed by all students at start of year</li>
            </ul>

            <h4>Who Maintains It</h4>
            <ul>
              <li>Student council (monthly updates)</li>
              <li>Art teacher (design/layout support)</li>
              <li>Custodian (ensures materials stay posted)</li>
            </ul>

            <h4>Impact</h4>
            <ul>
              <li>Every family sees it at pickup/drop-off</li>
              <li>Visitors ask about it (school pride moment)</li>
              <li>Students look for their names/friends' names</li>
              <li>Creates visual culture of "we're a S.A.F.E. school"</li>
            </ul>
          </div>

          {/* Class-Level Tracking */}
          <h2 className={styles.sectionTitle}>Class-Level Tracking</h2>

          <div className={styles.resourceGrid}>
            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Classroom S.A.F.E. Charts</h3>

              <h4>What Teachers Display</h4>
              <ul>
                <li><strong>Class S.A.F.E. Actions:</strong> Chart with three columns (Inclusion, Witness/Ask, Self-Awareness)</li>
                <li><strong>Weekly Goal:</strong> "Can we reach 15 S.A.F.E. actions this week?"</li>
                <li><strong>Student Reflections:</strong> Post-its where students write about S.A.F.E. moments</li>
              </ul>

              <h4>Not Competitive</h4>
              <p className={styles.note}>Classes aren't competing against each other for prizes—they're celebrating their own growth. Recognition at assembly, yes. Rewards/incentives, no.</p>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Individual Student Tracking (Private)</h3>

              <h4>What Teachers Keep</h4>
              <ul>
                <li>Simple spreadsheet or binder with student names</li>
                <li>Tally of S.A.F.E. slips submitted about/by each student</li>
                <li>Patterns teacher notices (who's struggling, who's flourishing)</li>
              </ul>

              <h4>When to Intervene</h4>
              <ul>
                <li><strong>Zero S.A.F.E. slips after 3 weeks:</strong> One-on-one check-in</li>
                <li><strong>Multiple incident reports:</strong> Counselor referral, parent contact</li>
                <li><strong>High S.A.F.E. engagement:</strong> Leadership opportunity (safety patrol, student council)</li>
              </ul>
            </div>

            <div className={`${styles.card} ${styles.measurementCard}`}>
              <h3>Monthly Class Debrief</h3>
              <span className={styles.duration}>20 minutes, End of Month</span>

              <h4>Class Reflection Circle</h4>
              <p>Teacher facilitates:</p>
              <ul>
                <li>"What S.A.F.E. actions did we take this month?"</li>
                <li>"What tensions are we still learning to hold?"</li>
                <li>"What do we want to practice next month?"</li>
              </ul>

              <h4>Data Share</h4>
              <p>Teacher shows class their numbers:</p>
              <ul>
                <li>"We had 23 S.A.F.E. actions this month! That's up from 18 last month."</li>
                <li>"We also had 4 exclusion incidents. What can we learn from that?"</li>
              </ul>
            </div>
          </div>

          {/* End-of-Year Celebration */}
          <h2 className={styles.sectionTitle}>End-of-Year S.A.F.E. Celebration</h2>

          <div className={`${styles.card} ${styles.workshopCard}`}>
            <h3>Annual S.A.F.E. Awards & Reflection</h3>
            <span className={styles.duration}>60 minutes, Final Week of School</span>

            <h4>Celebration Format</h4>

            <div className={styles.moduleHeader}>
              <h4>1. Year in Review (10 min)</h4>
              <p>Principal presents slideshow:</p>
              <ul>
                <li>Total S.A.F.E. actions for the year (big number reveal)</li>
                <li>Incident trends over time (graph showing downward trajectory)</li>
                <li>Photo montage of S.A.F.E. moments</li>
                <li>"This year we took 1,847 S.A.F.E. actions together. That's who we are."</li>
              </ul>
            </div>

            <div className={styles.moduleHeader}>
              <h4>2. Thread Awards (20 min)</h4>
              <p>One student per grade receives each Thread award (7 threads x 6 grades = 42 awards):</p>
              <ul>
                <li><strong>PRESENCE Award:</strong> "Always notices when someone's struggling"</li>
                <li><strong>CONSENT Award:</strong> "Respects everyone's choices and boundaries"</li>
                <li><strong>MEMORY Award:</strong> "Remembers our shared values even in hard moments"</li>
                <li><strong>PAUSE Award:</strong> "Takes time to think before reacting"</li>
                <li><strong>EMBODIMENT Award:</strong> "Lives their values in action every day"</li>
                <li><strong>UNCERTAINTY Award:</strong> "Stays curious even when they don't know what to do"</li>
                <li><strong>BECOMING Award:</strong> "Always choosing who they want to emerge as"</li>
              </ul>
              <p className={styles.note}>Teachers nominate, student council votes, principal announces</p>
            </div>

            <div className={styles.moduleHeader}>
              <h4>3. Class Recognitions (15 min)</h4>
              <ul>
                <li><strong>Most S.A.F.E. Actions:</strong> Class banner to keep in classroom next year</li>
                <li><strong>Most Growth:</strong> Class that increased S.A.F.E. actions most over year</li>
                <li><strong>Best Thread Work:</strong> Class that demonstrated deepest Thread understanding</li>
              </ul>
            </div>

            <div className={styles.moduleHeader}>
              <h4>4. Student Voices (10 min)</h4>
              <p>Pre-selected students (representing diverse experiences) share 1-minute reflections:</p>
              <ul>
                <li>"What S.A.F.E. means to me"</li>
                <li>"A time I saw S.A.F.E. in action"</li>
                <li>"Who I'm becoming because of Threads"</li>
              </ul>
            </div>

            <div className={styles.moduleHeader}>
              <h4>5. Commitment for Next Year (5 min)</h4>
              <p>Whole school recites S.A.F.E. pledge together</p>
            </div>

            <h4>PTA Sponsors</h4>
            <ul>
              <li>Certificates printed professionally</li>
              <li>Ice cream social after assembly</li>
              <li>S.A.F.E. t-shirts for Thread award winners</li>
            </ul>
          </div>

          {/* Assessment Metrics */}
          <h2 className={styles.sectionTitle}>What Success Looks Like</h2>

          <div className={styles.assessmentGrid}>
            <div className={styles.beforeBox}>
              <h3>⚠️ Before S.A.F.E.</h3>
              <ul>
                <li>High incident reports, staff overwhelmed</li>
                <li>Students don't report conflicts (fear of being snitch)</li>
                <li>Reactive discipline (punish after harm done)</li>
                <li>Victim/bully binary (good kid vs. bad kid)</li>
                <li>Parents defensive when contacted</li>
                <li>Recess monitors breaking up fights constantly</li>
                <li>Cafeteria exclusion rampant, unaddressed</li>
              </ul>
            </div>

            <div className={styles.afterBox}>
              <h3>✅ After 1 Year of S.A.F.E.</h3>
              <ul>
                <li>Incident reports decline 40-60%</li>
                <li>S.A.F.E. slips submitted regularly (150+/month)</li>
                <li>Proactive culture (students intervene before escalation)</li>
                <li>Tension-holding language (everyone's learning, everyone's becoming)</li>
                <li>Parents use S.A.F.E. language at home</li>
                <li>Recess monitors facilitate, not just intervene</li>
                <li>Cafeteria staff report visible inclusion efforts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Celebrate S.A.F.E. Publicly?</h2>
          <p>Let's create a culture where courage is counted and growth is visible.</p>
          <a href="/contact" className={styles.ctaButton}>
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default PublicMeasurement;
