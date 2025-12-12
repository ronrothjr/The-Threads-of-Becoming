import React from 'react';
import styles from './Tier3.module.css';

const Tier3: React.FC = () => {
  return (
    <div className={styles.tier3}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Tier 3: Facilitator</h1>
          <p className={styles.subtitle}>Learn to transform systems, teams, and institutions</p>
          <div className={styles.quickInfo}>
            <span>24 hours + 20-hour practicum</span>
            <span>•</span>
            <span>Facilitator Training Certificate</span>
            <span>•</span>
            <span>Tier 2 + 1 Year Practice Required</span>
          </div>
        </div>
      </section>

      {/* From Individual to Systemic */}
      <section className={`${styles.fromTo} section-lg`}>
        <div className="container">
          <h2>From Individual Work to Systemic Transformation</h2>
          <div className={styles.fromToGrid}>
            <div className={styles.fromToCard}>
              <h3>Tier 2 Prepared You For...</h3>
              <ul>
                <li>One-on-one Threadwork sessions</li>
                <li>Dyadic (couples/pairs) navigation</li>
                <li>Individual tension patterns</li>
                <li>Personal collapse dynamics</li>
              </ul>
            </div>
            <div className={styles.arrow}>→</div>
            <div className={styles.fromToCard}>
              <h3>Tier 3 Prepares You For...</h3>
              <ul>
                <li>Multi-party group facilitation (3+ people)</li>
                <li>Organizational collapse diagnosis</li>
                <li>Discernment circles and strategic planning</li>
                <li>Training others and supervising practitioners</li>
              </ul>
            </div>
          </div>
          <p className={styles.systemicNote}>
            <strong>The shift:</strong> In groups and organizations, tensions don't just exist <em>between</em> people—they exist in the <em>system itself</em>. Tier 3 teaches you to see and work with field-level dynamics, not just individual patterns.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className={`${styles.forWhom} section-lg`}>
        <div className="container">
          <h2>Who This Is For</h2>
          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <h4>Organizational Development Consultants</h4>
              <p>Work with leadership teams, strategic planning, and organizational transformation</p>
            </div>
            <div className={styles.roleCard}>
              <h4>Senior Clergy</h4>
              <p>Guide congregations through discernment, strategic transitions, and systemic tensions</p>
            </div>
            <div className={styles.roleCard}>
              <h4>Executive Coaches</h4>
              <p>Facilitate leadership teams, boards, and multi-stakeholder decision-making</p>
            </div>
            <div className={styles.roleCard}>
              <h4>Mediators (Multi-Party)</h4>
              <p>Navigate complex conflicts involving 3+ parties or organizational dynamics</p>
            </div>
            <div className={styles.roleCard}>
              <h4>Community Organizers</h4>
              <p>Facilitate community discernment and collective action processes</p>
            </div>
            <div className={styles.roleCard}>
              <h4>Trainer-Supervisors</h4>
              <p>Teach Tier 1, supervise Tier 2 candidates, and develop practitioners</p>
            </div>
          </div>
          <p className={styles.prerequisiteNote}>
            <strong>Important:</strong> Tier 3 requires both Tier 2 completion <em>and</em> at least 1 year of active practice applying Threads in professional contexts. This ensures you have embodied competency before working at systemic scale.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className={`${styles.curriculum} section-lg`}>
        <div className="container">
          <h2>What You'll Learn</h2>
          <p className={styles.curriculumIntro}>
            Over 24 hours of training plus a 20-hour supervised practicum, you'll develop mastery in group facilitation, organizational diagnosis, and training/supervision competencies.
          </p>

          <div className={styles.weeks}>
            <div className={styles.week}>
              <div className={styles.weekHeader}>
                <h3>Week 1: Multi-Party Dynamics</h3>
                <span className={styles.duration}>4 hours</span>
              </div>
              <p className={styles.weekFocus}>
                <strong>Learning Focus:</strong> Move from dyadic to group application
              </p>
              <div className={styles.weekContent}>
                <h4>How Groups Collapse</h4>
                <ul>
                  <li>Faction formation: When a group splits into polarized camps</li>
                  <li>Scapegoating: When tension gets projected onto one person</li>
                  <li>False consensus: When agreement is reached by silencing dissent</li>
                  <li>Paralysis: When fear of collapse prevents any decision</li>
                </ul>
                <h4>The Facilitator's Position</h4>
                <ul>
                  <li>Staying neutral while holding multiple perspectives</li>
                  <li>When different parties are on different threads simultaneously</li>
                  <li>Managing your own activation in charged group settings</li>
                  <li>Knowing when to name systemic patterns vs. individual dynamics</li>
                </ul>
                <h4>Practice Components</h4>
                <ul>
                  <li>Modified Threadwork protocol for groups</li>
                  <li>Facilitate a 4-person tension scenario</li>
                  <li>Observer feedback on facilitator presence and neutrality</li>
                </ul>
              </div>
            </div>

            <div className={styles.week}>
              <div className={styles.weekHeader}>
                <h3>Week 2: Discernment Circles</h3>
                <span className={styles.duration}>4 hours</span>
              </div>
              <p className={styles.weekFocus}>
                <strong>Learning Focus:</strong> Design and lead group discernment processes
              </p>
              <div className={styles.weekContent}>
                <h4>Discernment vs. Decision-Making</h4>
                <ul>
                  <li>When to use discernment (complex, values-laden, no clear answer)</li>
                  <li>When to use decision-making (clear options, data-driven, urgency)</li>
                  <li>How to know which you're actually doing</li>
                </ul>
                <h4>Circle Design</h4>
                <ul>
                  <li>Opening: Setting container and intention</li>
                  <li>Rounds: Using seed questions as prompts</li>
                  <li>Emergence: Noticing what's arising without forcing it</li>
                  <li>Closing: Integration and next steps</li>
                </ul>
                <h4>Practice Components</h4>
                <ul>
                  <li>Design a 45-minute discernment circle for a real scenario</li>
                  <li>Facilitate the circle with cohort as participants</li>
                  <li>Holding space for "not yet knowing"</li>
                  <li>Recognizing premature closure vs. genuine emergence</li>
                </ul>
              </div>
            </div>

            <div className={styles.week}>
              <div className={styles.weekHeader}>
                <h3>Week 3: Organizational Application</h3>
                <span className={styles.duration}>4 hours</span>
              </div>
              <p className={styles.weekFocus}>
                <strong>Learning Focus:</strong> Apply the framework in workplace and institutional contexts
              </p>
              <div className={styles.weekContent}>
                <h4>Common Organizational Tensions</h4>
                <ul>
                  <li>Innovation vs. Stability (MEMORY thread)</li>
                  <li>Growth vs. Sustainability (PAUSE thread)</li>
                  <li>Autonomy vs. Alignment (CONSENT thread)</li>
                  <li>Mission vs. Margin (EMBODIMENT thread)</li>
                </ul>
                <h4>Strategic Application</h4>
                <ul>
                  <li>Using Threads in strategic planning sessions</li>
                  <li>Working with leadership teams and boards</li>
                  <li>Navigating organizational power dynamics</li>
                  <li>When the facilitator is also inside the system</li>
                </ul>
                <h4>Case Study</h4>
                <ul>
                  <li>Organizational collapse and recovery: What it looks like</li>
                  <li>Multi-session engagement arc for organizational work</li>
                  <li>When to recommend deeper organizational development work</li>
                </ul>
              </div>
            </div>

            <div className={styles.week}>
              <div className={styles.weekHeader}>
                <h3>Week 4: Systemic Diagnosis</h3>
                <span className={styles.duration}>4 hours</span>
              </div>
              <p className={styles.weekFocus}>
                <strong>Learning Focus:</strong> See and work with system-level patterns
              </p>
              <div className={styles.weekContent}>
                <h4>Organizational Collapse Patterns</h4>
                <ul>
                  <li>What systemic collapse looks like (vs. individual collapse)</li>
                  <li>Diagnostic interviews and observation techniques</li>
                  <li>Identifying which thread is activated at the system level</li>
                  <li>When multiple threads are interlocking</li>
                </ul>
                <h4>Designing Interventions</h4>
                <ul>
                  <li>Single-session vs. multi-session engagements</li>
                  <li>Who needs to be in the room for effective intervention</li>
                  <li>The limits of individual intervention in systemic collapse</li>
                  <li>Contracting and scope definition</li>
                </ul>
                <h4>Practice Components</h4>
                <ul>
                  <li>Diagnose a complex organizational case study</li>
                  <li>Design a multi-session intervention plan</li>
                  <li>Present and defend your diagnosis to peers</li>
                </ul>
              </div>
            </div>

            <div className={styles.week}>
              <div className={styles.weekHeader}>
                <h3>Week 5: Training & Supervision</h3>
                <span className={styles.duration}>4 hours</span>
              </div>
              <p className={styles.weekFocus}>
                <strong>Learning Focus:</strong> Develop competency in teaching and supervising
              </p>
              <div className={styles.weekContent}>
                <h4>Teaching Tier 1</h4>
                <ul>
                  <li>Curriculum fidelity: What must stay, what can adapt</li>
                  <li>Common teaching mistakes and how to avoid them</li>
                  <li>Managing diverse learning styles and resistance</li>
                  <li>Creating psychological safety in foundational training</li>
                </ul>
                <h4>Supervising Tier 2 Candidates</h4>
                <ul>
                  <li>What to look for in practice recordings</li>
                  <li>How to give feedback that develops competency</li>
                  <li>Recognizing readiness for completion</li>
                  <li>Common supervision pitfalls (over-helping, under-challenging)</li>
                </ul>
                <h4>Practice Components</h4>
                <ul>
                  <li>Teach a 30-minute segment of Tier 1 curriculum</li>
                  <li>Conduct a supervision session with a peer</li>
                  <li>Receive feedback on teaching and supervision presence</li>
                </ul>
              </div>
            </div>

            <div className={styles.week}>
              <div className={styles.weekHeader}>
                <h3>Week 6: Advanced Ethics & Integration</h3>
                <span className={styles.duration}>4 hours</span>
              </div>
              <p className={styles.weekFocus}>
                <strong>Learning Focus:</strong> Navigate complex situations; integrate personal practice
              </p>
              <div className={styles.weekContent}>
                <h4>Complex Ethical Scenarios</h4>
                <ul>
                  <li>Power dynamics in organizational consulting</li>
                  <li>Dual relationships: When you're both facilitator and member</li>
                  <li>Organizational politics: When hidden agendas surface</li>
                  <li>When to engage, when to decline, when to refer</li>
                </ul>
                <h4>Facilitator Self-Care & Sustainability</h4>
                <ul>
                  <li>Managing vicarious trauma and activation</li>
                  <li>Supervision and peer consultation for facilitators</li>
                  <li>Maintaining your own practice while teaching others</li>
                  <li>Recognizing burnout and taking appropriate action</li>
                </ul>
                <h4>Personal Integration</h4>
                <ul>
                  <li>Your ongoing relationship with the framework</li>
                  <li>Where are you still collapsing?</li>
                  <li>Commitment to ongoing community of practice</li>
                  <li>Closing ritual and completion process review</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practicum Requirements */}
      <section className={`${styles.practicum} section-lg`}>
        <div className="container">
          <h2>Practicum Requirements</h2>
          <p className={styles.practicumIntro}>
            Facilitator candidates complete a <strong>20-hour supervised practicum</strong> demonstrating competency in group and organizational application. The practicum may be completed in your professional context with appropriate permissions and confidentiality.
          </p>
          <div className={styles.practicumRequirements}>
            <div className={styles.practicumItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>Minimum 3 Group Facilitations</h4>
                <p>Each with 3+ participants; documented with written reflections using the Reflection Tool</p>
              </div>
            </div>
            <div className={styles.practicumItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>At Least 1 Organizational/Team Context</h4>
                <p>Leadership team, board, or organizational strategic session</p>
              </div>
            </div>
            <div className={styles.practicumItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>At Least 1 Discernment Circle</h4>
                <p>Designed and facilitated using seed questions and circle protocol</p>
              </div>
            </div>
            <div className={styles.practicumItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>Supervision After Each Facilitation</h4>
                <p>Meeting with your practicum supervisor to review recordings/notes and receive feedback</p>
              </div>
            </div>
            <div className={styles.practicumItem}>
              <span className={styles.checkmark}>✓</span>
              <div>
                <h4>Practicum Portfolio</h4>
                <p>Compiled reflections, supervisor feedback, and integration essay (5-7 pages)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Completion Requirements */}
      <section className={`${styles.certification} section-lg`}>
        <div className="container">
          <h2>Completion Requirements</h2>
          <p className={styles.certificationIntro}>
            To receive your <strong>Facilitator Training Certificate</strong>, you must:
          </p>
          <div className={styles.requirements}>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Complete all six training modules</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Complete 20-hour practicum with full documentation</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Submit practicum portfolio (reflections + supervisor feedback + integration essay)</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Pass live assessment: Facilitate a group Threadwork session with observers</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Demonstrate competency in teaching Tier 1 (observed teaching session)</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Sign the Facilitator Ethics Agreement</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Commit to ongoing community of practice participation (required, not optional)</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className={`${styles.materials} section-lg`}>
        <div className="container">
          <h2>What You'll Receive</h2>
          <div className={styles.materialsList}>
            <div className={styles.materialItem}>
              <h4>Facilitator Handbook</h4>
              <p>Complete guide to multi-party facilitation, discernment circles, and organizational application</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Organizations Field Guide</h4>
              <p>Systemic diagnosis tools, intervention design templates, and organizational case library</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Tier 1 Teaching Materials</h4>
              <p>Full curriculum, slide decks, handouts, and teaching notes with permission to deliver</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Supervision Guide</h4>
              <p>Rubrics, feedback frameworks, and competency assessment tools for supervising Tier 2 candidates</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Advanced Ethics Manual</h4>
              <p>Case studies and decision frameworks for complex ethical scenarios</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Facilitator Training Certificate</h4>
              <p>Official completion certificate for Tier 3 Facilitator program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Format & Schedule */}
      <section className={`${styles.logistics} section-lg`}>
        <div className="container">
          <div className={styles.logisticsGrid}>
            <div className={styles.logisticsCard}>
              <h3>Format</h3>
              <p><strong>Strongly preferred:</strong> In-person cohorts</p>
              <p>Virtual option available for international participants</p>
              <p>Cohort size: 4-8 participants (intentionally small for depth)</p>
              <p>6 weekly sessions (4 hours each) + supervised practicum over 3-6 months</p>
            </div>

            <div className={styles.logisticsCard}>
              <h3>Prerequisites</h3>
              <p><strong>Required:</strong> Tier 2 Professional Development completion</p>
              <p><strong>Required:</strong> Minimum 1 year of active practice applying Threads professionally</p>
              <p>Application includes portfolio of practice (3-5 case summaries) and statement of intent</p>
              <p>Acceptance by interview to ensure readiness</p>
            </div>

            <div className={styles.logisticsCard}>
              <h3>Investment</h3>
              <p><strong>Training + Practicum Supervision:</strong> $3,500</p>
              <p>Includes all materials, practicum supervision, completion assessment, and ongoing access to community of practice</p>
              <p><strong>Payment plans available</strong></p>
              <p>Note: This is advanced professional training. Formal certification pathway planned for 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} section-lg`}>
        <div className="container">
          <h2>Sample Testimonials*</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonial}>
              <p className={styles.quote}>
                "I thought I knew the framework after Tier 2. Tier 3 showed me I'd only scratched the surface. Working at the systemic level requires a completely different set of skills—and this training developed them."
              </p>
              <p className={styles.attribution}>— Dr. Angela M., OD Consultant*</p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.quote}>
                "As a senior pastor, I've led our congregation through major transitions using the discernment circle protocol. It transformed our decision-making culture from win/lose politics to genuine collective discernment."
              </p>
              <p className={styles.attribution}>— Rev. Thomas H., Senior Pastor*</p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.quote}>
                "The practicum was rigorous—exactly as it should be. The supervision helped me see blind spots in my facilitation I never would have caught on my own. I'm a better facilitator and a better practitioner because of Tier 3."
              </p>
              <p className={styles.attribution}>— Jennifer K., Executive Coach*</p>
            </div>
          </div>
          <p style={{textAlign: 'center', marginTop: '2rem', fontSize: 'var(--text-sm)', color: 'var(--color-text-light)', fontStyle: 'italic'}}>
            *Sample testimonials represent anticipated feedback based on pilot participant experiences
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.faq} section-lg`}>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h4>Why is Tier 3 in-person preferred?</h4>
              <p>
                Group facilitation and organizational work require embodied presence—reading the room, managing group energy, and navigating multi-party dynamics in real-time. While virtual facilitation is possible (and covered), the training itself is most effective when cohort members are physically present together. Virtual cohorts are offered for international participants or when in-person isn't feasible.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>What if I don't have organizational clients yet?</h4>
              <p>
                The practicum can be completed in volunteer, pro bono, or educational contexts—faith communities, nonprofits, community groups, etc. What matters is that you're working with real groups navigating real tensions, not that you're getting paid for it. Your supervisor will help you identify appropriate practicum opportunities.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Can I teach Tier 1 before completing my practicum?</h4>
              <p>
                No. Full Tier 3 completion (including practicum and assessment) is required to teach Tier 1 or supervise Tier 2 participants. However, you can begin designing your first Tier 1 offering during your practicum period.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>What's the time commitment for the practicum?</h4>
              <p>
                Plan for 20 hours of facilitation work + documentation time + supervision sessions. Most participants complete it over 3-6 months while maintaining their regular practice. The timeline is flexible to accommodate your professional context.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Is this a certification program?</h4>
              <p>
                Currently, this is advanced professional training with a Certificate of Completion. A formal certification pathway with teaching/supervision credentials and external accreditation is planned for 2026. Early participants will have priority access to the certification track once established.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>What if I don't meet standards on the live assessment?</h4>
              <p>
                If you don't meet standard on your live group facilitation or teaching demonstration, you'll receive detailed feedback and have the opportunity to re-attempt after additional practice and supervision. The goal is mastery, not gatekeeping—we want you to succeed.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Can I teach Tier 1 after completing this training?</h4>
              <p>
                Upon completion, you'll have the skills and materials to teach Tier 1. However, formal authorization to offer Tier 1 trainings under the Creative Advance Institute will be part of the future certification pathway (2026). Early graduates will be grandfathered into teaching authorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Cohorts */}
      <section className={`${styles.cohorts} section-lg`}>
        <div className="container">
          <h2>Upcoming Cohorts</h2>
          <div className={styles.cohortsGrid}>
            <div className={styles.cohort}>
              <h4>In-Person — Durham, NC — Fall 2025</h4>
              <p><strong>Format:</strong> 6 weekly sessions + practicum supervision</p>
              <p><strong>Dates:</strong> September 8 - October 13, 2025 (Mondays, 9am-1pm)</p>
              <p><strong>Practicum:</strong> Complete by March 2026 with ongoing supervision</p>
              <p><strong>Location:</strong> Durham, NC</p>
              <p><strong>Instructor:</strong> Dr. Ron Wright</p>
              <p className={styles.availability}>3 spots remaining</p>
              <a href="/apply/tier3?cohort=fall2025-durham" className={styles.cohortButton}>Apply Now →</a>
            </div>

            <div className={styles.cohort}>
              <h4>Virtual (International) — Winter 2026</h4>
              <p><strong>Format:</strong> 6 weekly sessions + virtual practicum supervision</p>
              <p><strong>Dates:</strong> January 12 - February 16, 2026 (Tuesdays, 10am-2pm ET)</p>
              <p><strong>Practicum:</strong> Complete by August 2026 with virtual supervision</p>
              <p><strong>Note:</strong> For participants outside North America</p>
              <p className={styles.availability}>5 spots available</p>
              <a href="/apply/tier3?cohort=winter2026-virtual" className={styles.cohortButton}>Apply Now →</a>
            </div>
          </div>

          <p className={styles.customCohort}>
            <strong>Questions about readiness for Tier 3?</strong> <a href="/contact">Schedule a conversation</a> with Dr. Wright to discuss your practice and training goals.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className={styles.nextSteps}>
        <div className="container">
          <h2>Ready to Pursue Facilitator Training?</h2>
          <p>Apply for an upcoming cohort, or explore the training pathway.</p>
          <div className={styles.nextStepsButtons}>
            <a href="/training/tier2" className={styles.secondaryButton}>← Tier 2: Professional</a>
            <a href="/training" className={styles.secondaryButton}>Training Pathway</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tier3;
