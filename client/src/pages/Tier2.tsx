import React from 'react';
import styles from './Tier2.module.css';

const Tier2: React.FC = () => {
  return (
    <div className={styles.tier2}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Tier 2: Professional</h1>
          <p className={styles.subtitle}>Learn to guide others with skill, humility, and ethical clarity</p>
          <div className={styles.quickInfo}>
            <span>16 hours + 6 hours supervision</span>
            <span>•</span>
            <span>Professional Development Certificate</span>
            <span>•</span>
            <span>Tier 1 Required</span>
          </div>
        </div>
      </section>

      {/* Why Professional Development Matters */}
      <section className={`${styles.whyCertification} section-lg`}>
        <div className="container">
          <h2>Why Professional Development Matters</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <h3>Threads Isn't Therapy...</h3>
              <p>
                The framework is powerful for personal use—anyone can apply it to their own tensions. But using Threads <em>with clients, congregants, or those you serve</em> requires skill, diagnostic accuracy, and ethical judgment.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h3>...But It Requires Competency</h3>
              <p>
                Misidentifying a thread, joining someone's collapse, or pushing for emergence prematurely can do harm. Tier 2 develops the competencies needed to hold space for others without fixing, imposing, or overreaching.
              </p>
            </div>
            <div className={styles.whyCard}>
              <h3>Your Practice + This Framework</h3>
              <p>
                This training doesn't replace your existing credentials—it <strong>complements</strong> them. We train the navigational layer; you bring your clinical, coaching, or pastoral expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className={`${styles.forWhom} section-lg`}>
        <div className="container">
          <h2>Who This Is For</h2>
          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <h4>Therapists</h4>
              <p>Integrate Threads with IFS, EFT, ACT, or other clinical modalities</p>
            </div>
            <div className={styles.roleCard}>
              <h4>Coaches</h4>
              <p>Add diagnostic precision to individual and couples coaching</p>
            </div>
            <div className={styles.roleCard}>
              <h4>Clergy & Spiritual Directors</h4>
              <p>Navigate pastoral care and spiritual formation with clarity</p>
            </div>
            <div className={styles.roleCard}>
              <h4>Mediators</h4>
              <p>Guide two-party conflicts toward creative emergence</p>
            </div>
            <div className={styles.roleCard}>
              <h4>Counselors</h4>
              <p>Support individuals and dyads in school, community, or clinical settings</p>
            </div>
            <div className={styles.roleCard}>
              <h4>Mentors & Supervisors</h4>
              <p>Help others recognize and navigate their own tension patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className={`${styles.curriculum} section-lg`}>
        <div className="container">
          <h2>What You'll Learn</h2>
          <p className={styles.curriculumIntro}>
            Over 16 hours of training plus 6 hours of supervision, you'll master the complete Threadwork protocol and develop the skills to work with individuals and dyads (couples, pairs).
          </p>

          <div className={styles.weeks}>
            <div className={styles.week}>
              <div className={styles.weekHeader}>
                <h3>Week 1: Threadwork Protocol</h3>
                <span className={styles.duration}>4 hours</span>
              </div>
              <p className={styles.weekFocus}>
                <strong>Learning Focus:</strong> Master the signature 20-minute engagement protocol
              </p>
              <div className={styles.weekContent}>
                <h4>The Four-Phase Arc</h4>
                <ul>
                  <li><strong>ARRIVE:</strong> Ground the client and establish presence</li>
                  <li><strong>NAME:</strong> Identify the thread and both poles</li>
                  <li><strong>HOLD:</strong> Support tension-holding without collapse</li>
                  <li><strong>INTEGRATE:</strong> Notice emergence and support next steps</li>
                </ul>
                <h4>Practice Components</h4>
                <ul>
                  <li>Live demonstration by instructor</li>
                  <li>Triads practice: Practitioner, Client, Observer</li>
                  <li>Facilitator stance: "Am I trying to fix, or willing to hold?"</li>
                  <li>Scripts for each phase; when to use them, when to improvise</li>
                </ul>
                <p className={styles.homework}><strong>Homework:</strong> Conduct one practice Threadwork session; bring recording or notes</p>
              </div>
            </div>

            <div className={styles.week}>
              <div className={styles.weekHeader}>
                <h3>Week 2: Diagnostic Accuracy</h3>
                <span className={styles.duration}>4 hours</span>
              </div>
              <p className={styles.weekFocus}>
                <strong>Learning Focus:</strong> Develop reliable skill in identifying which thread is activated
              </p>
              <div className={styles.weekContent}>
                <h4>Core Skills</h4>
                <ul>
                  <li>Diagnostic questions for all seven threads</li>
                  <li>Common mis-diagnoses and how to avoid them</li>
                  <li>When multiple threads are activated: primary vs. secondary</li>
                  <li>Distinguishing between what <em>you</em> see and what the client is experiencing</li>
                </ul>
                <h4>Practice Components</h4>
                <ul>
                  <li>Case study analysis: Which thread is this?</li>
                  <li>Rapid-fire diagnosis exercises</li>
                  <li>Small group case consultation</li>
                </ul>
                <p className={styles.homework}><strong>Homework:</strong> Journal three real-world situations; diagnose threads; bring to supervision</p>
              </div>
            </div>

            <div className={styles.week}>
              <div className={styles.weekHeader}>
                <h3>Week 3: Collapse & Emergence</h3>
                <span className={styles.duration}>4 hours</span>
              </div>
              <p className={styles.weekFocus}>
                <strong>Learning Focus:</strong> Recognize collapse in real-time and support emergence without forcing
              </p>
              <div className={styles.weekContent}>
                <h4>Collapse Recognition</h4>
                <ul>
                  <li>Warning signs for each thread (language, energy, body cues)</li>
                  <li>How collapse happens: protective mechanisms becoming rigid</li>
                  <li>The practitioner's own collapse: managing activation</li>
                </ul>
                <h4>Correction & Emergence</h4>
                <ul>
                  <li>Correction moves: gentle redirects, not confrontations</li>
                  <li>Inviting the unchosen pole without imposing it</li>
                  <li>Signs of emergence: shift in energy, new language, "oh" moments</li>
                  <li>The difference between forcing resolution and allowing emergence</li>
                </ul>
                <h4>Practice Components</h4>
                <ul>
                  <li>Role-play collapse scenarios; practice correction</li>
                  <li>Observer feedback on practitioner presence</li>
                </ul>
                <p className={styles.homework}><strong>Homework:</strong> Notice collapse (in self and others) throughout the week</p>
              </div>
            </div>

            <div className={styles.week}>
              <div className={styles.weekHeader}>
                <h3>Week 4: Dyadic Application & Ethics</h3>
                <span className={styles.duration}>4 hours</span>
              </div>
              <p className={styles.weekFocus}>
                <strong>Learning Focus:</strong> Adapt the framework for couples/pairs; establish ethical practice
              </p>
              <div className={styles.weekContent}>
                <h4>Dyadic Dynamics</h4>
                <ul>
                  <li>How couples/pairs collapse toward opposite poles</li>
                  <li>Modified Threadwork for two-party contexts</li>
                  <li>Maintaining neutrality while honoring both parties</li>
                  <li>When one partner is activated and the other shut down</li>
                </ul>
                <h4>Ethical Guidelines</h4>
                <ul>
                  <li>Scope of practice: What Threads is (and isn't)</li>
                  <li>When to refer: mental health crisis, abuse, beyond competence</li>
                  <li>Managing dual relationships and power dynamics</li>
                  <li>Confidentiality and informed consent</li>
                  <li>The practitioner's own ongoing work</li>
                </ul>
                <h4>Practice Components</h4>
                <ul>
                  <li>Full dyadic Threadwork practice session</li>
                  <li>Introduction to Reflection Tool for ongoing practice</li>
                  <li>Case consultation on ethical dilemmas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supervision Requirements */}
      <section className={`${styles.supervision} section-lg`}>
        <div className="container">
          <h2>Supervision Requirements</h2>
          <p className={styles.supervisionIntro}>
            Participants complete <strong>6 hours of supervision</strong> across the training period in small groups (3-4 participants) with an experienced Threads facilitator.
          </p>
          <div className={styles.supervisionSessions}>
            <div className={styles.supervisionSession}>
              <h4>Session 1 (After Week 2)</h4>
              <p>Review of practice recordings; diagnostic accuracy feedback; troubleshooting stuck points</p>
            </div>
            <div className={styles.supervisionSession}>
              <h4>Session 2 (After Week 3)</h4>
              <p>Collapse recognition and correction feedback; managing practitioner activation; emergence support</p>
            </div>
            <div className={styles.supervisionSession}>
              <h4>Session 3 (After Week 4)</h4>
              <p>Dyadic practice review; ethical scenarios; readiness assessment for completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Completion Requirements */}
      <section className={`${styles.certification} section-lg`}>
        <div className="container">
          <h2>Completion Requirements</h2>
          <p className={styles.certificationIntro}>
            To receive your <strong>Professional Development Certificate</strong>, you must:
          </p>
          <div className={styles.requirements}>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Complete all four training modules</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Complete all three supervision sessions</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Submit one recorded Threadwork session for assessment</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Submit one written case study (2-3 pages) demonstrating framework application</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Pass competency assessment on protocol fidelity, diagnostic accuracy, collapse correction, emergence support, and facilitator presence</p>
            </div>
            <div className={styles.requirement}>
              <span className={styles.checkmark}>✓</span>
              <p>Sign the Professional Development Ethics Agreement</p>
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
              <h4>Complete Threadwork Manual</h4>
              <p>Full protocol guide with scripts, diagnostic questions, and case examples</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Practitioner Toolkit</h4>
              <p>Collapse correction moves, emergence markers, reflection tool templates</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Framework Crosswalk Guide</h4>
              <p>How Threads integrates with IFS, EFT, NVC, Bowen, ACT, and other modalities</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Ethics & Scope Manual</h4>
              <p>Clear guidelines on when to use Threads, when to refer, and how to navigate dual relationships</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Case Study Library</h4>
              <p>Annotated examples of Threadwork across all seven threads</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Professional Development Certificate</h4>
              <p>Official completion certificate for Tier 2 Professional training</p>
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
              <p>In-person or virtual cohorts via Zoom</p>
              <p>Cohort size: 6-12 participants</p>
              <p>4 weekly sessions (4 hours each) + 3 supervision sessions (2 hours each)</p>
              <p>Interactive with case consultation, triads, and live practice</p>
            </div>

            <div className={styles.logisticsCard}>
              <h3>Prerequisites</h3>
              <p><strong>Required:</strong> Tier 1 Foundations Certificate</p>
              <p><strong>Required:</strong> Professional helping role (therapist, coach, clergy, mediator, counselor, etc.)</p>
              <p>Application includes brief statement of practice context</p>
            </div>

            <div className={styles.logisticsCard}>
              <h3>Investment</h3>
              <p><strong>Training + Supervision:</strong> $1,200</p>
              <p>Includes all materials, supervision, and completion assessment</p>
              <p><strong>Payment plans available</strong></p>
              <p>Note: This is professional development training. Formal certification pathway with CE credits planned for 2026.</p>
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
                "I've been doing couples therapy for 10 years. Threads gave me the missing diagnostic piece—I can now recognize which thread is activated before deciding which intervention to use. It's made me a better therapist."
              </p>
              <p className={styles.attribution}>— Dr. Michelle R., Licensed Marriage & Family Therapist*</p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.quote}>
                "As a pastor, I do a lot of informal counseling. Threads gave me a framework to hold space for people's tensions without trying to fix them or impose theological answers. It's been transformative for my pastoral care."
              </p>
              <p className={styles.attribution}>— Rev. David K., Senior Pastor*</p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.quote}>
                "The supervision component was crucial. I thought I understood the framework after Tier 1, but the feedback on my practice sessions revealed blind spots I didn't know I had. The training process is rigorous—and that's exactly what it should be."
              </p>
              <p className={styles.attribution}>— Sarah T., Executive Coach*</p>
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
              <h4>What if I'm not a licensed therapist?</h4>
              <p>
                You don't need to be. Tier 2 is for anyone in a professional helping role—coaches, clergy, mediators, spiritual directors, counselors, mentors. If you work with people navigating tension, this training is for you.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Will this qualify me to do therapy?</h4>
              <p>
                No. This professional development training complements your existing credentials—it doesn't replace them. If you're not licensed to practice therapy, completing Tier 2 doesn't change that. But it <em>does</em> give you a powerful framework to integrate with whatever role you already hold.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>How does Threads integrate with IFS, EFT, or other modalities?</h4>
              <p>
                Threads works <em>underneath</em> other modalities as a diagnostic layer. For example, an IFS therapist might use Threads to identify which tension is activated before deciding which parts to work with. Week 4 includes a crosswalk guide showing how Threads complements major therapeutic and coaching frameworks.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>What's the time commitment?</h4>
              <p>
                4 weekly sessions (4 hours each) + 3 supervision sessions (2 hours each) = 22 hours total. Plus homework between sessions (practice recordings, journaling, case preparation). Plan for roughly 5-6 hours per week over the 4-week training period.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>What if I don't pass the competency assessment?</h4>
              <p>
                If you don't meet standard on one or two competencies, you can resubmit after additional practice and supervision. The goal is mastery, not gatekeeping. We want you to succeed—and we want to ensure the framework is used with skill and ethics.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Can I use Threads with groups after Tier 2?</h4>
              <p>
                No. Tier 2 prepares you for individual and dyadic (couples/pairs) work only. Group facilitation requires Tier 3 (Facilitator Training), which covers multi-party dynamics, discernment circles, and organizational application.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Is this a certification program?</h4>
              <p>
                Currently, this is professional development training with a Professional Development Certificate. A formal certification pathway with CE credits and external accreditation is planned for 2026. Early participants will have the opportunity to upgrade to full certification once accreditation is achieved.
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
              <h4>Virtual Cohort — Spring 2025</h4>
              <p><strong>Format:</strong> 4 weekly sessions + 3 supervision sessions</p>
              <p><strong>Dates:</strong> February 3, 10, 17, 24 (Mondays, 6-10pm ET)</p>
              <p><strong>Supervision:</strong> Scheduled with cohort after Week 2, 3, 4</p>
              <p><strong>Instructor:</strong> Dr. Ron Wright</p>
              <p className={styles.availability}>4 spots remaining</p>
              <a href="/apply/tier2?cohort=spring2025-virtual" className={styles.cohortButton}>Apply Now →</a>
            </div>

            <div className={styles.cohort}>
              <h4>In-Person — Durham, NC — Summer 2025</h4>
              <p><strong>Format:</strong> Intensive (4 consecutive days) + virtual supervision</p>
              <p><strong>Dates:</strong> June 16-19, 2025 (Monday-Thursday, 9am-2pm)</p>
              <p><strong>Supervision:</strong> 3 virtual sessions scheduled after intensive</p>
              <p><strong>Location:</strong> Durham, NC</p>
              <p className={styles.availability}>8 spots remaining</p>
              <a href="/apply/tier2?cohort=summer2025-durham" className={styles.cohortButton}>Apply Now →</a>
            </div>
          </div>

          <p className={styles.customCohort}>
            <strong>Questions about which cohort is right for you?</strong> <a href="/contact">Schedule a conversation</a> with our training team.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className={styles.nextSteps}>
        <div className="container">
          <h2>Ready to Pursue Professional Development?</h2>
          <p>Apply for an upcoming cohort, or explore the full training pathway.</p>
          <div className={styles.nextStepsButtons}>
            <a href="/training/tier1" className={styles.secondaryButton}>← Tier 1: Foundations</a>
            <a href="/training" className={styles.secondaryButton}>Training Pathway</a>
            <a href="/training/tier3" className={styles.secondaryButton}>Tier 3: Facilitator →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tier2;
