import React from 'react';
import styles from './Educators.module.css';

const Educators: React.FC = () => {
  return (
    <div className={styles.educators}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Threads for Educators</h1>
        <h2 className={`${styles.tagline} tagline`}>
          Professional development that transforms how you hold space for learning
        </h2>
        <p className={styles.heroBrief}>
          Bring the power of polarity thinking into K-12 classrooms. Earn professional development credits while learning to help students navigate complexity with creativity and courage.
        </p>
      </section>

      {/* S.A.F.E. Callout */}
      <section className={`${styles.safeCallout} section-lg`}>
        <div className="container">
          <div className={styles.safeCard}>
            <h2>Introducing S.A.F.E. For All</h2>
            <p className={styles.safeTagline}>An anti-bullying framework built on Threads</p>
            <p className={styles.safeDescription}>
              <strong>S.A.F.E.</strong> (See. Ask. Feel. Emerge.) teaches students to navigate conflict without collapsing into victim/bully binaries. Instead of rules, students learn who they want to become when things get hard.
            </p>
            <p className={styles.safeDescription}>
              Built specifically for elementary classrooms, S.A.F.E. creates psychological safety for everyone—the kid being hurt, the kid doing harm, the witnesses, and the teacher.
            </p>
            <a href="/safe" className={styles.safeButton}>Explore S.A.F.E. For All →</a>
          </div>
        </div>
      </section>

      {/* Why Threads for Teaching */}
      <section className={`${styles.whySection} section-lg`}>
        <h2>Why Threads for Teaching?</h2>
        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🎯</div>
            <h3>Student-Centered Learning</h3>
            <p>Help students navigate genuine tensions in their lives rather than memorizing answers</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>❤️</div>
            <h3>Social-Emotional Learning</h3>
            <p>Integrate SEL naturally through practicing how to hold difficult feelings and relationships</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🌱</div>
            <h3>Classroom Management</h3>
            <p>Transform conflicts into learning opportunities by teaching students to hold tension together</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>💭</div>
            <h3>Critical Thinking</h3>
            <p>Develop genuine critical thinking by practicing with multiple perspectives simultaneously</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🤝</div>
            <h3>Inclusive Pedagogy</h3>
            <p>Create classrooms where differences become resources rather than problems to solve</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🌿</div>
            <h3>Teacher Wellness</h3>
            <p>Sustain yourself by learning to hold the tensions of teaching without burning out</p>
          </div>
        </div>
      </section>

      {/* How Teachers Use Threads by Grade Band */}
      <section className={`${styles.gradeBands} section-lg`}>
        <h2>How Teachers Use Threads</h2>
        <p className={styles.sectionIntro}>
          Threads adapts to every developmental stage, from picture books to college essays
        </p>

        <div className={styles.gradeBandCards}>
          {/* Elementary */}
          <div className={styles.gradeBandCard}>
            <div className={styles.gradeBandHeader}>
              <h3>Elementary (K-5)</h3>
              <span className={styles.gradeBandTag}>Ages 5-11</span>
            </div>
            <p className={styles.gradeBandDescription}>
              Use simple language and story-based exploration to introduce tension-holding through play and imagination
            </p>
            <div className={styles.examples}>
              <h4>Classroom Applications:</h4>
              <ul>
                <li><strong>Story Time:</strong> Identify tensions in children's literature (brave/scared, sharing/keeping)</li>
                <li><strong>Circle Time:</strong> Practice PAUSE when conflicts arise—"Can we hold both feelings at once?"</li>
                <li><strong>Creative Play:</strong> Act out different poles of a tension to explore both sides safely</li>
              </ul>
            </div>
          </div>

          {/* Middle School */}
          <div className={styles.gradeBandCard}>
            <div className={styles.gradeBandHeader}>
              <h3>Middle School (6-8)</h3>
              <span className={styles.gradeBandTag}>Ages 11-14</span>
            </div>
            <p className={styles.gradeBandDescription}>
              Center identity formation work as students navigate peer dynamics and the question "Who am I becoming?"
            </p>
            <div className={styles.examples}>
              <h4>Classroom Applications:</h4>
              <ul>
                <li><strong>Advisory Groups:</strong> Explore BECOMING through identity tensions (fitting in/standing out)</li>
                <li><strong>Project-Based Learning:</strong> Design projects around genuine community tensions</li>
                <li><strong>Peer Mediation:</strong> Train students to facilitate tension-holding for each other</li>
              </ul>
            </div>
          </div>

          {/* High School */}
          <div className={styles.gradeBandCard}>
            <div className={styles.gradeBandHeader}>
              <h3>High School (9-12)</h3>
              <span className={styles.gradeBandTag}>Ages 14-18</span>
            </div>
            <p className={styles.gradeBandDescription}>
              Engage complex ethical discussions and prepare students for college, career, and citizenship through nuanced thinking
            </p>
            <div className={styles.examples}>
              <h4>Classroom Applications:</h4>
              <ul>
                <li><strong>Humanities:</strong> Analyze literature, history, and philosophy through polarity lenses</li>
                <li><strong>College Readiness:</strong> Help students navigate competing pressures and future choices</li>
                <li><strong>Student Leadership:</strong> Train student facilitators to lead workshops for peers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development Credits */}
      <section className={`${styles.pdCredits} section-lg`}>
        <div className={styles.pdCreditsContent}>
          <h2>Earn Professional Development Credits</h2>
          <p className={styles.pdIntro}>
            CAI training qualifies for continuing education credits required for teacher licensure renewal in most states.
          </p>

          <div className={styles.creditInfo}>
            <div className={styles.creditCard}>
              <h3>CEU Credit Hours</h3>
              <ul>
                <li><strong>Tier 1:</strong> 15-20 contact hours = 1.5-2 CEUs</li>
                <li><strong>Tier 2:</strong> 40-60 contact hours = 4-6 CEUs</li>
                <li><strong>Tier 3:</strong> 80-100 contact hours = 8-10 CEUs</li>
              </ul>
            </div>

            <div className={styles.creditCard}>
              <h3>Approval & Partnerships</h3>
              <ul>
                <li>State education department approval in process</li>
                <li>Partnering with universities for graduate credit</li>
                <li>Submit to your district for local PD approval</li>
                <li>Digital badges and certificates provided</li>
              </ul>
            </div>
          </div>

          <p className={styles.pdNote}>
            <strong>Note:</strong> Check with your state's department of education or district professional development office about specific requirements for your certification renewal.
          </p>
        </div>
      </section>

      {/* Training Pathway for Educators */}
      <section className={`${styles.trainingPathway} section-lg`}>
        <h2>Training Pathway for Educators</h2>
        <p className={styles.sectionIntro}>
          Three tiers designed specifically for K-12 teachers, with pedagogical focus and classroom applications
        </p>

        <div className={styles.tiers}>
          {/* Tier 1 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNumber}>1</span>
              <div>
                <h3>Classroom Integration</h3>
                <p className={styles.tierMeta}>15-20 hours | 1.5-2 CEUs</p>
              </div>
            </div>
            <p className={styles.tierDescription}>
              Develop your personal thread practice while learning to integrate tension-holding into your existing curriculum
            </p>
            <div className={styles.tierContent}>
              <h4>What You'll Learn:</h4>
              <ul>
                <li>Personal practice with all seven threads</li>
                <li>Age-appropriate thread introduction for your grade level</li>
                <li>Lesson plan development and curriculum mapping</li>
                <li>Classroom management through tension-holding</li>
                <li>Student assessment strategies</li>
                <li>Parent communication about your approach</li>
              </ul>
            </div>
          </div>

          {/* Tier 2 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNumber}>2</span>
              <div>
                <h3>Student Workshop Facilitation</h3>
                <p className={styles.tierMeta}>40-60 hours | 4-6 CEUs</p>
              </div>
            </div>
            <p className={styles.tierDescription}>
              Learn to facilitate structured thread workshops for students and lead teacher study groups
            </p>
            <div className={styles.tierContent}>
              <h4>What You'll Learn:</h4>
              <ul>
                <li>Facilitating thread discovery workshops with students</li>
                <li>Creating psychologically safe learning environments</li>
                <li>School-wide integration and culture building</li>
                <li>Leading teacher professional learning communities</li>
                <li>Interdisciplinary curriculum design</li>
                <li>Measuring student growth and learning outcomes</li>
              </ul>
            </div>
          </div>

          {/* Tier 3 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierNumber}>3</span>
              <div>
                <h3>Educational Leadership</h3>
                <p className={styles.tierMeta}>80-100 hours | 8-10 CEUs</p>
              </div>
            </div>
            <p className={styles.tierDescription}>
              Become a trainer of teachers and consultant for school-wide transformation
            </p>
            <div className={styles.tierContent}>
              <h4>What You'll Learn:</h4>
              <ul>
                <li>Training other teachers in thread practice</li>
                <li>School transformation consulting and planning</li>
                <li>District-wide professional development design</li>
                <li>Educational research and program assessment</li>
                <li>Policy development and advocacy</li>
                <li>Building regional educator networks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className={`${styles.resources} section-lg`}>
        <h2>What You'll Receive</h2>
        <div className={styles.resourceGrid}>
          <div className={styles.resourceCard}>
            <h3>Training Materials</h3>
            <ul>
              <li>Grade-level training cohorts</li>
              <li>Classroom-ready lesson plans</li>
              <li>Student activity guides</li>
              <li>Assessment rubrics</li>
              <li>Curriculum integration maps</li>
            </ul>
          </div>

          <div className={styles.resourceCard}>
            <h3>Classroom Resources</h3>
            <ul>
              <li>Student handout templates</li>
              <li>Classroom posters and visual aids</li>
              <li>Book lists with thread themes</li>
              <li>Subject integration guides</li>
              <li>Video demonstrations</li>
            </ul>
          </div>

          <div className={styles.resourceCard}>
            <h3>Communication Tools</h3>
            <ul>
              <li>Parent communication templates</li>
              <li>Administrator briefing materials</li>
              <li>Board presentation slides</li>
              <li>Grant writing support</li>
              <li>Case studies and research</li>
            </ul>
          </div>

          <div className={styles.resourceCard}>
            <h3>Ongoing Support</h3>
            <ul>
              <li>Monthly educator packets</li>
              <li>Access to educator community</li>
              <li>Consultation support</li>
              <li>Digital resource library</li>
              <li>Professional learning network</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How Educator Training Differs */}
      <section className={`${styles.differences} section-lg`}>
        <h2>How Educator Training Differs</h2>
        <p className={styles.sectionIntro}>
          While general facilitator training focuses on adult workshops, educator training emphasizes pedagogy and classroom practice
        </p>
        <div className={styles.differenceGrid}>
          <div className={styles.differenceCard}>
            <h3>Pedagogical Focus</h3>
            <p>Not just facilitation skills, but teaching strategies, learning theory, and developmental psychology</p>
          </div>
          <div className={styles.differenceCard}>
            <h3>Grade-Level Adaptations</h3>
            <p>Learn how to adjust language, activities, and complexity for your specific students</p>
          </div>
          <div className={styles.differenceCard}>
            <h3>Standards Alignment</h3>
            <p>Map threads to Common Core, state standards, and SEL competencies</p>
          </div>
          <div className={styles.differenceCard}>
            <h3>Classroom Management</h3>
            <p>Apply tension-holding to behavior, conflicts, and classroom community building</p>
          </div>
          <div className={styles.differenceCard}>
            <h3>Student Assessment</h3>
            <p>Measure student learning and growth in tension-holding capacity</p>
          </div>
          <div className={styles.differenceCard}>
            <h3>School Culture</h3>
            <p>Navigate institutional dynamics, administration, parents, and systemic change</p>
          </div>
        </div>
      </section>

      {/* School & District Partnerships */}
      <section className={`${styles.partnerships} section-lg`}>
        <h2>School & District Partnerships</h2>
        <p className={styles.sectionIntro}>
          Bring Threads to your entire school or district with comprehensive implementation support
        </p>
        <div className={styles.partnershipOptions}>
          <div className={styles.partnershipCard}>
            <h3>School-Wide Implementation</h3>
            <ul>
              <li>Whole-faculty professional development</li>
              <li>Grade-level team training</li>
              <li>Administrator coaching</li>
              <li>Culture transformation support</li>
              <li>Multi-year implementation planning</li>
            </ul>
          </div>

          <div className={styles.partnershipCard}>
            <h3>District Contracts</h3>
            <ul>
              <li>Customized PD for multiple schools</li>
              <li>Train-the-trainer programs</li>
              <li>Curriculum development support</li>
              <li>Program evaluation and assessment</li>
              <li>Grant writing and research partnerships</li>
            </ul>
          </div>

          <div className={styles.partnershipCard}>
            <h3>Teacher Learning Communities</h3>
            <ul>
              <li>Facilitated study groups</li>
              <li>Peer observation protocols</li>
              <li>Lesson study cohorts</li>
              <li>Action research teams</li>
              <li>Summer intensive programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Educator Chapters */}
      <section className={`${styles.chapters} section-lg`}>
        <h2>Educator Chapters</h2>
        <p className={styles.sectionIntro}>
          Join or start a local chapter of educators practicing Threads together
        </p>
        <div className={styles.chapterTypes}>
          <div className={styles.chapterType}>
            <h3>School-Based Cohorts</h3>
            <p>Teachers from the same school meet regularly to support each other's practice and build school culture</p>
          </div>
          <div className={styles.chapterType}>
            <h3>District Study Groups</h3>
            <p>Teachers from across a district gather to share resources and learn from each other's classrooms</p>
          </div>
          <div className={styles.chapterType}>
            <h3>Regional Networks</h3>
            <p>Educators from multiple districts connect for workshops, conferences, and professional development</p>
          </div>
        </div>
        <p className={styles.chapterNote}>
          All educator chapters require at least one CAI Tier 2 certified facilitator to ensure quality and support. <a href="/chapters">Learn more about starting a chapter →</a>
        </p>
      </section>

      {/* FAQ */}
      <section className={`${styles.faq} section-lg`}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3>How long does training take?</h3>
            <p>Tier 1 takes 15-20 hours and can be completed over several weekends or a summer intensive. Tier 2 and 3 are more extensive commitments spread over months.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>Will I get PD credits?</h3>
            <p>Yes. CAI provides certificates documenting contact hours that qualify for CEUs in most states. We're also pursuing formal approval and university partnerships for graduate credit.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>Can I use this with my current curriculum?</h3>
            <p>Absolutely. Threads integrates with what you're already teaching—it's a lens for approaching any content, not a separate curriculum to add.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>What ages is this appropriate for?</h3>
            <p>All ages, K-12. The concepts adapt to any developmental stage with appropriate language and activities for each grade band.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>Do I need administrator approval?</h3>
            <p>Not necessarily for your own professional development, but we recommend sharing your learning with administrators—many schools want to expand once they see the impact.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>How much does it cost?</h3>
            <p>Pricing varies by training tier and whether you enroll individually or as a school cohort. Contact us for current rates and district partnership pricing.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>Is this aligned with standards?</h3>
            <p>Yes. Thread practice naturally aligns with SEL competencies, Common Core critical thinking standards, and most state learning standards. We provide mapping documents.</p>
          </div>

          <div className={styles.faqItem}>
            <h3>What if I teach multiple grade levels?</h3>
            <p>You'll learn principles that apply across ages, plus specific adaptations for each grade band you work with. Many special area teachers find this especially valuable.</p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className={`${styles.gettingStarted} section-lg`}>
        <h2>Getting Started</h2>
        <p className={styles.sectionIntro}>Choose the pathway that fits your situation</p>

        <div className={styles.pathways}>
          <div className={styles.pathwayCard}>
            <h3>Individual Teacher</h3>
            <p>Join the next educator cohort for your grade level</p>
            <ul>
              <li>Enroll in Tier 1 training</li>
              <li>Connect with educator community</li>
              <li>Begin integrating in your classroom</li>
              <li>Share with colleagues</li>
            </ul>
            <a href="/contact" className={styles.pathwayButton}>Apply for Training</a>
          </div>

          <div className={styles.pathwayCard}>
            <h3>School Team</h3>
            <p>Bring a cohort of teachers from your school</p>
            <ul>
              <li>Gather 3-5 interested teachers</li>
              <li>Schedule school-based training</li>
              <li>Build school-wide culture together</li>
              <li>Start a school chapter</li>
            </ul>
            <a href="/contact" className={styles.pathwayButton}>Request School Partnership</a>
          </div>

          <div className={styles.pathwayCard}>
            <h3>District Contract</h3>
            <p>Implement across multiple schools in your district</p>
            <ul>
              <li>Schedule consultation call</li>
              <li>Design customized PD plan</li>
              <li>Train teacher leaders</li>
              <li>Support multi-year implementation</li>
            </ul>
            <a href="/contact" className={styles.pathwayButton}>Explore District Partnership</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Transform Your Classroom</h2>
        <p>Join educators who are learning to hold tension with their students</p>
        <div className={styles.ctaButtons}>
          <a href="/contact" className={styles.ctaPrimary}>Apply for Training</a>
          <a href="/training" className={styles.ctaSecondary}>Learn More About Training</a>
        </div>
      </section>
    </div>
  );
};

export default Educators;
