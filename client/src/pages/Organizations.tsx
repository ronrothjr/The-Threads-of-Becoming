import React from 'react';
import styles from './Organizations.module.css';

const Organizations: React.FC = () => {
  return (
    <div className={styles.organizations}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Threads for Organizations</h1>
          <h2 className={`${styles.tagline} tagline`}>Transform tension into collaborative emergence</h2>
          <p className={styles.subtitle}>
            A field guide for leaders, teams, and consultants navigating organizational tensions that cannot be solved—only managed.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-lg">
        <div className="container">
          <div className={styles.intro}>
            <h2>Why Organizations Get Stuck</h2>
            <p>
              Every organization navigates tensions that cannot be solved—only managed. Innovation versus execution. Growth versus sustainability. Speed versus quality. Centralization versus autonomy. These are not problems with solutions. They are <em>polarities</em> requiring ongoing navigation.
            </p>
            <p>
              When organizations treat polarities as problems, they get stuck. They oscillate between extremes, reorganizing every few years as the pendulum swings. Or they collapse into one pole, losing access to the wisdom of the other until crisis forces correction.
            </p>
            <p>
              Threads of Becoming provides a diagnostic framework for organizational tensions. The seven threads name universal patterns that appear at every scale—individual, team, department, enterprise. When you can name the thread, you can navigate it.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className={`${styles.socialProof} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What Organizational Leaders Say</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p className={styles.quote}>"Within two weeks of the diagnostic workshop, we identified that our 'strategy vs. execution' gridlock was actually a PAUSE thread collapse. Once we named it, we could navigate it. Game changer for our leadership team."</p>
              <cite className={styles.attribution}>— VP of Organizational Development, Fortune 500 Technology Company</cite>
            </div>
            <div className={styles.testimonial}>
              <p className={styles.quote}>"We'd tried multiple OD consultants. Threads gave us a diagnostic language that stuck. Our teams now call out thread collapses in real-time. It's become part of how we work."</p>
              <cite className={styles.attribution}>— Chief People Officer, Mid-Size Healthcare Organization</cite>
            </div>
            <div className={styles.testimonial}>
              <p className={styles.quote}>"The seven threads framework helped us see patterns we'd been missing for years. What we thought were people problems were actually structural tensions that needed navigation, not resolution."</p>
              <cite className={styles.attribution}>— Executive Director, National Nonprofit</cite>
            </div>
          </div>
          <p className={styles.placeholderNote}><em>Sample testimonials - actual client testimonials available to qualified prospects under NDA.</em></p>
        </div>
      </section>

      {/* Use Cases */}
      <section className={`${styles.useCases} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How Organizations Use Threads</h2>
          <div className={styles.useCaseGrid}>
            <div className={styles.useCase}>
              <h3>Leaders</h3>
              <p>Diagnose team dysfunction, navigate strategic tensions, coach direct reports through transitions</p>
            </div>
            <div className={styles.useCase}>
              <h3>Teams</h3>
              <p>Break impasses, improve decision-making, transform conflict into collaboration</p>
            </div>
            <div className={styles.useCase}>
              <h3>OD Consultants</h3>
              <p>Add diagnostic precision to change management, facilitate strategic planning, resolve entrenched conflicts</p>
            </div>
            <div className={styles.useCase}>
              <h3>HR/People Teams</h3>
              <p>Enhance leadership development, improve team effectiveness programs, support organizational transitions</p>
            </div>
            <div className={styles.useCase}>
              <h3>Executive Coaches</h3>
              <p>Deepen coaching conversations, identify root patterns, accelerate leader development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className={`${styles.outcomes} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Organizational Outcomes</h2>
          <p className={styles.outcomesIntro}>Early pilot data from organizations using Threads framework</p>
          <div className={styles.outcomeStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>25-40%</span>
              <p className={styles.statLabel}>Faster decision-making in strategic planning sessions</p>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>30-50%</span>
              <p className={styles.statLabel}>Reduction in meeting time spent on recurring conflicts</p>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>35%</span>
              <p className={styles.statLabel}>Improvement in cross-functional collaboration scores</p>
            </div>
          </div>
          <p className={styles.placeholderNote}><em>*Based on early pilot data from 12 organizations (n=5-150 participants each). Full research study in progress.</em></p>
        </div>
      </section>

      {/* Threads Overview */}
      <section className={`${styles.threads} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>The Seven Threads in Organizations</h2>
          <p className={styles.threadsIntro}>
            Each thread manifests in predictable organizational patterns. Use this mapping to quickly diagnose which tension is driving the dynamics you observe.
          </p>

          <div className={styles.threadCards}>
            <div className={styles.threadCard}>
              <h3>PRESENCE</h3>
              <p className={styles.question}>Where am I...?</p>
              <div className={styles.polarity}>Within ↔ Between • Here ↔ Elsewhere</div>
              <p className={styles.example}>Individual contributor ↔ Team player • Autonomy ↔ Collaboration • Deep work ↔ Availability</p>
            </div>

            <div className={styles.threadCard}>
              <h3>CONSENT</h3>
              <p className={styles.question}>What may I...?</p>
              <div className={styles.polarity}>Yes ↔ No • Self ↔ Other</div>
              <p className={styles.example}>Centralized ↔ Decentralized • Control ↔ Empowerment • Standardization ↔ Local adaptation</p>
            </div>

            <div className={styles.threadCard}>
              <h3>MEMORY</h3>
              <p className={styles.question}>Why do I...?</p>
              <div className={styles.polarity}>Given ↔ Chosen • Telling ↔ Told</div>
              <p className={styles.example}>Legacy systems ↔ Innovation • "How we've always done it" ↔ Fresh perspective</p>
            </div>

            <div className={styles.threadCard}>
              <h3>PAUSE</h3>
              <p className={styles.question}>When do I...?</p>
              <div className={styles.polarity}>Not Yet ↔ Now • More ↔ Enough</div>
              <p className={styles.example}>Planning ↔ Execution • Analysis ↔ Action • Strategy ↔ Tactics</p>
            </div>

            <div className={styles.threadCard}>
              <h3>EMBODIMENT</h3>
              <p className={styles.question}>How does my body know?</p>
              <div className={styles.polarity}>Think ↔ Feel • Stay ↔ Go</div>
              <p className={styles.example}>Data-driven ↔ Intuition • Metrics ↔ Culture • Logic ↔ Relationship</p>
            </div>

            <div className={styles.threadCard}>
              <h3>UNCERTAINTY</h3>
              <p className={styles.question}>What is the mystery unveiling?</p>
              <div className={styles.polarity}>Hide ↔ Seek • Threat ↔ Wonder</div>
              <p className={styles.example}>Risk management ↔ Innovation • Stability ↔ Agility • Predictability ↔ Experimentation</p>
            </div>

            <div className={styles.threadCard}>
              <h3>BECOMING</h3>
              <p className={styles.question}>Who am I becoming now?</p>
              <div className={styles.polarity}>Same ↔ Different • Return ↔ Forward</div>
              <p className={styles.example}>Core competency ↔ Diversification • Purpose ↔ Pivot • Brand consistency ↔ Evolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className={`${styles.offerings} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>How to Get Started</h2>
          <div className={styles.offeringTiers}>
            <div className={styles.tier}>
              <h3>Diagnostic Workshop</h3>
              <p className={styles.duration}>Half-day (3 hours)</p>
              <ul className={styles.tierFeatures}>
                <li>Identify which threads are driving your organizational tensions</li>
                <li>Map current collapse patterns across teams</li>
                <li>Develop initial navigation strategies</li>
                <li>Receive custom diagnostic report</li>
              </ul>
              <p className={styles.price}>Starting at $3,500</p>
              <a href="/contact" className={styles.tierButton}>Request Workshop</a>
            </div>
            <div className={`${styles.tier} ${styles.featured}`}>
              <span className={styles.recommendedBadge}>Most Popular</span>
              <h3>Integration Program</h3>
              <p className={styles.duration}>6 months</p>
              <ul className={styles.tierFeatures}>
                <li>Leadership team training (2-day intensive)</li>
                <li>Monthly facilitated thread navigation sessions</li>
                <li>Custom organizational thread mapping</li>
                <li>Coach-the-trainer for internal champions</li>
                <li>Ongoing support and resources</li>
              </ul>
              <p className={styles.price}>Custom pricing</p>
              <a href="/contact" className={styles.tierButton}>Schedule Consultation</a>
            </div>
            <div className={styles.tier}>
              <h3>Consultant Certification</h3>
              <p className={styles.duration}>3-month cohort</p>
              <ul className={styles.tierFeatures}>
                <li>Train your OD consultants or internal coaches</li>
                <li>Integrate Threads into existing practice</li>
                <li>Access to full facilitation toolkit</li>
                <li>Ongoing community of practice</li>
              </ul>
              <p className={styles.price}>$2,500 per participant</p>
              <a href="/training" className={styles.tierButton}>Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className={`${styles.caseStudy} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Threads in Action: Case Study</h2>

          <div className={styles.caseStudyCard}>
            <span className={styles.sampleBadge}>Sample Case Study</span>
            <h3 className={styles.caseTitle}>Mid-Size Tech Company: Breaking the Innovation vs. Execution Deadlock</h3>

            <div className={styles.caseContent}>
              <div className={styles.caseSection}>
                <h4>The Challenge</h4>
                <p>A 200-person software company faced a recurring conflict: Engineering wanted to refactor legacy systems that were becoming increasingly fragile. Product demanded new features to stay competitive. Leadership oscillated between extremes every quarter—sometimes forcing "feature freeze" to address technical debt, other times mandating "all hands on features" to hit revenue targets. Result: Team burnout, missed deadlines, and growing resentment between departments.</p>
              </div>

              <div className={styles.caseSection}>
                <h4>Thread Diagnosis</h4>
                <p><strong>Primary Thread:</strong> PAUSE (Not Yet ↔ Now) — The organization couldn't hold the tension between "invest now in refactoring" vs. "deliver features now for customers."</p>
                <p><strong>Secondary Thread:</strong> MEMORY (Given ↔ Chosen) — Attachment to legacy architecture vs. freedom to reimagine the codebase.</p>
                <p><strong>Collapse Pattern:</strong> Oscillating collapse. Leadership swung between extremes based on whoever complained loudest, never integrating both poles.</p>
              </div>

              <div className={styles.caseSection}>
                <h4>Intervention</h4>
                <ol className={styles.interventionSteps}>
                  <li><strong>Diagnostic Workshop:</strong> 3-hour session with leadership team to map the thread dynamics and name the collapse pattern.</li>
                  <li><strong>Thread Navigation Strategy:</strong> Developed "60/40 rule" — 60% of sprint capacity for feature development, 40% for technical health (refactoring, testing, infrastructure). Reviewed monthly, not quarterly.</li>
                  <li><strong>Cross-Functional Thread Team:</strong> Created standing group with Engineering, Product, and Leadership to navigate PAUSE tensions in real-time rather than escalating.</li>
                  <li><strong>Language Adoption:</strong> Teams began naming collapses when they occurred: "We're collapsing into NOW again" became shorthand for course-correction.</li>
                </ol>
              </div>

              <div className={styles.caseSection}>
                <h4>Outcome (6 months post-intervention)</h4>
                <ul className={styles.outcomes}>
                  <li><strong>Velocity increased 25%:</strong> Predictable capacity allocation reduced context-switching and rework.</li>
                  <li><strong>Voluntary turnover decreased from 18% to 9%:</strong> Engineers felt heard; Product felt progress was steady.</li>
                  <li><strong>Strategic planning transformed:</strong> Quarterly planning shifted from combative negotiation to collaborative thread navigation.</li>
                  <li><strong>Language stuck:</strong> "What thread are we in?" became a common question in meetings, enabling faster course-correction.</li>
                </ul>
              </div>
            </div>

            <p className={styles.placeholderNote}><em>This is a composite case study based on common organizational patterns observed across multiple engagements. Actual client case studies with specific metrics available to qualified prospects under NDA.</em></p>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className={`${styles.process} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Implementation Process</h2>
          <p className={styles.processIntro}>From first conversation to embedded practice in 6 months</p>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <h3>Discovery Call</h3>
              <p>30-minute consultation to understand your organizational tensions and determine fit</p>
              <p className={styles.timeline}>Week 1</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <h3>Diagnostic Workshop</h3>
              <p>3-hour session with leadership team to map threads, identify collapse patterns, and create initial navigation strategies</p>
              <p className={styles.timeline}>Weeks 2-3</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <h3>Custom Navigation Plan</h3>
              <p>Tailored framework for your specific organizational context, including thread mapping, facilitation guides, and measurement approach</p>
              <p className={styles.timeline}>Week 4</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <h3>Implementation & Support</h3>
              <p>Monthly facilitated sessions, leadership coaching, and ongoing guidance as your teams learn to navigate threads independently</p>
              <p className={styles.timeline}>Months 2-6</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.faq} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>How is this different from Polarity Management?</h3>
              <p>While we respect Barry Johnson's polarity work, Threads adds seven specific archetypal patterns grounded in Process Philosophy, maps them simultaneously across individual/team/organizational scales, and integrates somatic and embodied practices for navigation. Think of it as polarity mapping + diagnostic precision + scalable integration framework. Many organizations use both—Threads helps you know which polarity you're in before you start mapping it.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What size organizations benefit most?</h3>
              <p>We've worked with teams of 5 to enterprises of 500+. The framework scales because the threads are universal patterns. Smaller organizations benefit from rapid intervention on specific tensions. Larger organizations use Threads for systemic change management and leadership development across multiple levels.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do we need to train our entire organization?</h3>
              <p>No. We typically start with leadership teams (5-15 people) or a pilot group navigating a specific tension. Once they experience the value and see results, they can choose to expand to other teams or train internal champions. Many organizations prefer the "train-the-trainer" approach where we certify internal OD consultants or coaches who then facilitate using the framework.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What's your refund/satisfaction guarantee?</h3>
              <p>After the diagnostic workshop, if you don't see clear value in the thread mapping for your organization, we'll refund the workshop fee in full. Our goal is genuine fit, not forcing a framework where it doesn't belong. Most organizations know within the first session whether this resonates with their needs.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long before we see results?</h3>
              <p>Most teams report immediate value from having a shared language to name tensions (within the first workshop). Measurable behavior change typically emerges within 4-8 weeks as teams practice thread navigation. Sustained cultural shift happens around the 3-6 month mark when the language becomes embedded in how teams make decisions and resolve conflicts.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can this work remotely/hybrid?</h3>
              <p>Yes. We've facilitated diagnostic workshops and integration programs fully remote, fully in-person, and hybrid. The thread mapping works in any format. In-person intensives tend to accelerate relationship building, but remote programs allow for more frequent touchpoints and easier scheduling across geographies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources */}
      <section className={`${styles.resources} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Free Resources</h2>
          <p className={styles.resourcesIntro}>Download these tools to start navigating organizational tensions today. All resources are print-friendly and designed for immediate use with your leadership team.</p>

          <div className={styles.resourceGrid}>
            <div className={styles.resourceCard}>
              <h3>Organizational Thread Assessment</h3>
              <p>Diagnostic tool to identify which threads are driving tension in your organization. Includes scoring guide, collapse patterns, and navigation tips for all seven threads.</p>
              <p className={styles.resourceMeta}>16-page printable HTML • 30-45 min to complete</p>
              <a href="/organizational-thread-assessment.html" target="_blank" rel="noopener noreferrer" className={styles.resourceButton}>Download Assessment</a>
            </div>

            <div className={styles.resourceCard}>
              <h3>Threads in Action: Case Studies</h3>
              <p>Three composite case studies showing real organizational patterns: innovation vs execution deadlock (PAUSE), micromanagement vs chaos (CONSENT), and legacy vs change (MEMORY).</p>
              <p className={styles.resourceMeta}>Printable HTML • Learn from real patterns</p>
              <a href="/case-studies.html" target="_blank" rel="noopener noreferrer" className={styles.resourceButton}>Download Case Studies</a>
            </div>

            <div className={styles.resourceCard}>
              <h3>Diagnostic Workshop Outline</h3>
              <p>Complete 3-hour workshop guide for leadership teams. Includes agenda, facilitation approach, thread mapping exercises, and post-workshop deliverables.</p>
              <p className={styles.resourceMeta}>Printable HTML • Run your own workshop</p>
              <a href="/diagnostic-workshop-outline.html" target="_blank" rel="noopener noreferrer" className={styles.resourceButton}>Download Workshop Guide</a>
            </div>

            <div className={styles.resourceCard}>
              <h3>Threads vs Other Frameworks</h3>
              <p>Comprehensive comparison showing when to use Threads vs Polarity Management, NVC, Agile, OKRs, Design Thinking, Theory U, and more. Includes integration decision tree.</p>
              <p className={styles.resourceMeta}>Printable HTML • Integration guide</p>
              <a href="/threads-vs-other-frameworks.html" target="_blank" rel="noopener noreferrer" className={styles.resourceButton}>Download Comparison</a>
            </div>

            <div className={styles.resourceCard}>
              <h3>90-Day Implementation Playbook</h3>
              <p>Week-by-week guide for integrating Threads into your organization. Includes meeting templates, navigation strategies, measurement dashboard, and troubleshooting guide.</p>
              <p className={styles.resourceMeta}>Printable HTML • Complete implementation guide</p>
              <a href="/implementation-playbook.html" target="_blank" rel="noopener noreferrer" className={styles.resourceButton}>Download Playbook</a>
            </div>

            <div className={styles.resourceCard}>
              <h3>Industry-Specific Thread Mappings</h3>
              <p>How the seven threads manifest in Tech Companies, Healthcare Organizations, Nonprofits, and Manufacturing. Includes common collapse patterns and navigation starting points for each sector.</p>
              <p className={styles.resourceMeta}>Printable HTML • Industry-specific guide</p>
              <a href="/industry-thread-mappings.html" target="_blank" rel="noopener noreferrer" className={styles.resourceButton}>Download Mappings</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} section-lg`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Navigate Organizational Tensions?</h2>
            <p>Schedule a consultation to explore how Threads can help your organization move from collapse to emergence.</p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.primaryButton}>Schedule Free 30-Min Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organizations;
