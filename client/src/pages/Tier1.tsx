import React from 'react';
import styles from './Tier1.module.css';

const Tier1: React.FC = () => {
  return (
    <div className={styles.tier1}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Tier 1: Foundations</h1>
          <p className={styles.subtitle}>Learn the universal language of human tension</p>
          <div className={styles.quickInfo}>
            <span>4 hours</span>
            <span>•</span>
            <span>Foundations Certificate of Completion</span>
            <span>•</span>
            <span>No Prerequisites</span>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className={`${styles.forWhom} section-lg`}>
        <div className="container">
          <h2>Who This Is For</h2>
          <div className={styles.audiences}>
            <div className={styles.audienceCard}>
              <h3>Individuals</h3>
              <p>You're navigating your own tensions—in relationships, work, or personal growth—and want a framework to make sense of recurring patterns.</p>
            </div>
            <div className={styles.audienceCard}>
              <h3>Professionals Exploring</h3>
              <p>You're a coach, therapist, clergy member, or mediator curious about whether Threads could complement your practice.</p>
            </div>
            <div className={styles.audienceCard}>
              <h3>Leaders & Educators</h3>
              <p>You work with teams, communities, or organizations and want a shared language for navigating creative tension.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className={`${styles.curriculum} section-lg`}>
        <div className="container">
          <h2>What You'll Learn</h2>
          <p className={styles.curriculumIntro}>
            By the end of this 4-hour workshop, you'll have a complete introduction to the Threads framework—with both conceptual understanding and practical tools for your own life.
          </p>

          <div className={styles.modules}>
            <div className={styles.module}>
              <div className={styles.moduleHeader}>
                <h3>Module 1: The Core Insight</h3>
                <span className={styles.duration}>45 minutes</span>
              </div>
              <p className={styles.moduleDescription}>
                Understand the foundational premise: <em>tension, held without collapse, becomes the birthplace of the genuinely new.</em>
              </p>
              <ul>
                <li>What is creative tension?</li>
                <li>Why do we collapse?</li>
                <li>The "both/and" principle vs. false compromise</li>
              </ul>
            </div>

            <div className={styles.module}>
              <div className={styles.moduleHeader}>
                <h3>Module 2: The Seven Threads</h3>
                <span className={styles.duration}>60 minutes</span>
              </div>
              <p className={styles.moduleDescription}>
                Learn all seven threads, their seed questions, and the poles within each tension.
              </p>
              <ul>
                <li>PRESENCE, CONSENT, MEMORY, PAUSE, EMBODIMENT, UNCERTAINTY, BECOMING</li>
                <li>Seed questions for each thread</li>
                <li>Small group activity: Match real-life situations to threads</li>
                <li>Visual map handout for ongoing reference</li>
              </ul>
            </div>

            <div className={styles.module}>
              <div className={styles.moduleHeader}>
                <h3>Module 3: Collapse Dynamics</h3>
                <span className={styles.duration}>45 minutes</span>
              </div>
              <p className={styles.moduleDescription}>
                Recognize how collapse happens—and why it's information, not failure.
              </p>
              <ul>
                <li>Self-assessment: "Where do I tend to collapse?"</li>
                <li>Pairs exercise: Share patterns without fixing</li>
                <li>Protective mechanisms that become rigid</li>
              </ul>
            </div>

            <div className={styles.module}>
              <div className={styles.moduleHeader}>
                <h3>Module 4: Thread Discovery (Experiential)</h3>
                <span className={styles.duration}>60 minutes</span>
              </div>
              <p className={styles.moduleDescription}>
                Apply the framework to a real personal situation. Practice holding tension.
              </p>
              <ul>
                <li>Individual work: Identify a current tension</li>
                <li>Guided exercise: Name both poles; notice the pull</li>
                <li>Pairs practice: Share and reflect back</li>
                <li>Group debrief: What emerged?</li>
              </ul>
            </div>

            <div className={styles.module}>
              <div className={styles.moduleHeader}>
                <h3>Module 5: Spiral vs. Circle</h3>
                <span className={styles.duration}>30 minutes</span>
              </div>
              <p className={styles.moduleDescription}>
                Why do patterns recur? Learn to distinguish circular loops from spiral growth.
              </p>
              <ul>
                <li>The difference between repetition and advancement</li>
                <li>How to recognize which you're in</li>
                <li>Personal commitment: One tension to hold differently this week</li>
              </ul>
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
              <h4>Threads Visual Map</h4>
              <p>Print reference guide showing all seven threads and their poles</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Thread Discovery Worksheet</h4>
              <p>Step-by-step guide for identifying and working with your own tensions</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Personal Collapse Pattern Assessment</h4>
              <p>Self-assessment tool for recognizing your tendencies</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Seven Threads Quick Reference Card</h4>
              <p>Pocket-sized card with seed questions for all threads</p>
            </div>
            <div className={styles.materialItem}>
              <h4>Foundations Certificate of Completion</h4>
              <p>Official recognition of Foundations training (required for Tier 2)</p>
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
              <p>Available in-person or virtual via Zoom</p>
              <p>Cohort size: 8-24 participants</p>
              <p>Interactive with small group exercises and pair work</p>
            </div>

            <div className={styles.logisticsCard}>
              <h3>Schedule Options</h3>
              <p><strong>Half-day workshop:</strong> 4 hours with breaks</p>
              <p><strong>Two-session format:</strong> Two 2-hour sessions (one week apart)</p>
              <p>Multiple cohorts offered throughout the year</p>
            </div>

            <div className={styles.logisticsCard}>
              <h3>Investment</h3>
              <p><strong>Individual registration:</strong> $295</p>
              <p><strong>Group rate (5+):</strong> $250 per person</p>
              <p>Includes all materials and certificate</p>
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
                "For the first time, I understood why my marriage kept hitting the same wall. The PRESENCE thread gave me language for what was happening—and a way forward that didn't require my husband to change."
              </p>
              <p className={styles.attribution}>— Sarah M., Individual Participant*</p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.quote}>
                "I'm a therapist with 15 years of experience, and Threads gave me a missing piece. It's not another modality to learn—it's the navigational layer underneath everything I already do."
              </p>
              <p className={styles.attribution}>— Dr. James L., Licensed Therapist*</p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.quote}>
                "Our leadership team took Tier 1 together. Now we have a shared language for the tensions we face. Instead of avoiding conflict, we can name it and hold it together."
              </p>
              <p className={styles.attribution}>— Rev. Maria G., Senior Pastor*</p>
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
              <h4>Do I need any background or prerequisites?</h4>
              <p>
                No. Tier 1 is designed for anyone—no prior knowledge of process thought, therapy models, or facilitation required. If you experience tension (which means you're human), this training is for you.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Can I use this with clients after Tier 1?</h4>
              <p>
                Not professionally. Tier 1 gives you the framework for <em>personal use</em>. To use Threads in a professional helping capacity (coaching, therapy, pastoral care), you need Tier 2 Professional Development training.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>What if I'm already trained in IFS, EFT, NVC, or another modality?</h4>
              <p>
                Perfect. Threads is designed to work <em>underneath</em> other modalities, not replace them. Many participants find it enhances their existing practice by providing a diagnostic layer for recognizing where someone is before deciding which tool to use.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>Is this therapy?</h4>
              <p>
                No. Threads is a framework for navigating creative tension—not a therapeutic intervention. That said, many therapists integrate it with their clinical work (after Tier 2 training).
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>What's the difference between the half-day and two-session format?</h4>
              <p>
                The content is identical. The two-session format allows a week between sessions for reflection and practice. Some people prefer the immersion of a half-day; others prefer the spacing. Choose what works for your schedule and learning style.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>What happens after Tier 1?</h4>
              <p>
                You'll have everything you need for personal application. If you want to pursue professional training, Tier 1 is the prerequisite for Tier 2 (Professional Development). You can also join our Community of Practice for ongoing support and case consultation.
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
              <h4>Virtual Cohort — January 2025</h4>
              <p><strong>Format:</strong> Two 2-hour sessions</p>
              <p><strong>Dates:</strong> January 14 & 21, 2025 (7-9pm ET)</p>
              <p><strong>Instructor:</strong> Dr. Ron Wright</p>
              <p className={styles.availability}>8 spots remaining</p>
              <a href="/apply/tier1?cohort=jan2025-virtual" className={styles.cohortButton}>Register →</a>
            </div>

            <div className={styles.cohort}>
              <h4>In-Person — February 2025</h4>
              <p><strong>Format:</strong> Half-day workshop</p>
              <p><strong>Date:</strong> February 8, 2025 (9am-1pm)</p>
              <p><strong>Location:</strong> Durham, NC</p>
              <p className={styles.availability}>12 spots remaining</p>
              <a href="/apply/tier1?cohort=feb2025-durham" className={styles.cohortButton}>Register →</a>
            </div>

            <div className={styles.cohort}>
              <h4>Virtual Cohort — March 2025</h4>
              <p><strong>Format:</strong> Half-day workshop</p>
              <p><strong>Date:</strong> March 15, 2025 (10am-2pm ET)</p>
              <p><strong>Instructor:</strong> Dr. Ron Wright</p>
              <p className={styles.availability}>15 spots available</p>
              <a href="/apply/tier1?cohort=mar2025-virtual" className={styles.cohortButton}>Register →</a>
            </div>
          </div>

          <p className={styles.customCohort}>
            <strong>Interested in a private cohort for your team or organization?</strong> <a href="/contact">Contact us</a> to discuss custom training options.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className={styles.nextSteps}>
        <div className="container">
          <h2>Ready to Begin?</h2>
          <p>Choose a cohort above to register, or explore the full training pathway.</p>
          <div className={styles.nextStepsButtons}>
            <a href="/training" className={styles.secondaryButton}>← Back to Training Pathway</a>
            <a href="/training/tier2" className={styles.secondaryButton}>Explore Tier 2 →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tier1;
