import React from 'react';
import styles from './Chapters.module.css';

const Chapters: React.FC = () => {
  return (
    <div className={styles.chapters}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Local Threads Chapters</h1>
          <h2 className={`${styles.tagline} tagline`}>Living out Community of Practice in your neighborhood</h2>
          <p className={styles.subtitle}>
            Bring Threads to life through local chapters that practice holding tension together and serve their communities
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-lg">
        <div className="container">
          <div className={styles.intro}>
            <h2>What Are Local Chapters?</h2>
            <p>
              Local Threads Chapters are community-based groups led by Creative Advance Institute (CAI) trained facilitators who gather regularly to practice the Threads framework and offer services to their neighborhoods, congregations, and organizations.
            </p>
            <p>
              Chapters embody the <strong>Community of Practice principles</strong>: they're spaces where people learn together by navigating real tensions, hold each other accountable to the framework's ethics, and extend Threadwork beyond individual practice into collective transformation.
            </p>
            <p>
              This isn't about creating new organizations—it's about weaving Threads into existing community life through people committed to holding tension without collapse.
            </p>
          </div>
        </div>
      </section>

      {/* What Chapters Do */}
      <section className={`${styles.activities} section-lg`}>
        <div className="container">
          <h2>What Local Chapters Do</h2>
          <p className={styles.sectionIntro}>Chapters operate at the intersection of practice and service</p>

          <div className={styles.activityGrid}>
            <div className={styles.activityCard}>
              <div className={styles.activityIcon}>🤝</div>
              <h3>Monthly Gatherings</h3>
              <p>Members practice holding tension together through real community issues, supporting each other's navigation of collapse, and deepening collective understanding of the threads.</p>
            </div>

            <div className={styles.activityCard}>
              <div className={styles.activityIcon}>💡</div>
              <h3>Free Community Workshops</h3>
              <p>Monthly "Holding Tension" workshops open to the public, using themed packets provided by CAI. These introduce Threads to neighbors navigating marriage, parenting, work, faith, and civic life.</p>
            </div>

            <div className={styles.activityCard}>
              <div className={styles.activityIcon}>🏛️</div>
              <h3>Organizational Facilitation</h3>
              <p>Chapters offer facilitation services to local congregations, nonprofits, schools, and businesses navigating difficult tensions—not as consultants, but as trained practitioners who can hold space.</p>
            </div>

            <div className={styles.activityCard}>
              <div className={styles.activityIcon}>📚</div>
              <h3>Study & Discovery</h3>
              <p>Working through the Thread Discovery Process together, testing emerging threads across difference, and contributing insights back to the broader Threads community.</p>
            </div>

            <div className={styles.activityCard}>
              <div className={styles.activityIcon}>🌱</div>
              <h3>Specialized Groups</h3>
              <p>Threads for Parents groups in schools, couples' circles, professional peer groups (therapists, coaches, clergy), and affinity spaces where the framework meets specific contexts.</p>
            </div>

            <div className={styles.activityCard}>
              <div className={styles.activityIcon}>🌐</div>
              <h3>Cross-Pollination</h3>
              <p>Collaborating with existing community groups—faith communities, mediation centers, civic organizations—to integrate Threads where it serves rather than replaces local wisdom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Leadership */}
      <section className={`${styles.leadership} section-lg`}>
        <div className="container">
          <h2>Chapter Leadership Requirements</h2>
          <div className={styles.leadershipContent}>
            <p className={styles.requirement}>
              <strong>All chapter leaders must be CAI-trained facilitators.</strong> This isn't about gatekeeping—it's about ensuring that people offering Threadwork in communities have been properly trained in the framework's ethics, boundaries, and application.
            </p>

            <div className={styles.trainingPath}>
              <h3>Training Pathway</h3>
              <div className={styles.tiers}>
                <div className={styles.tier}>
                  <h4>Tier 2: Facilitator Training</h4>
                  <p>Minimum requirement for leading a local chapter. Tier 2 training equips facilitators to hold space for groups, navigate collapse, and apply Threads in relational and organizational contexts.</p>
                  <a href="/training/tier2" className={styles.tierLink}>Learn about Tier 2 →</a>
                </div>
                <div className={styles.tier}>
                  <h4>Tier 3: Advanced Practitioner (Optional)</h4>
                  <p>Tier 3 graduates bring deeper capacity for complex organizational work and can supervise other chapter facilitators. Recommended for chapters serving multiple communities.</p>
                  <a href="/training/tier3" className={styles.tierLink}>Learn about Tier 3 →</a>
                </div>
              </div>
            </div>

            <div className={styles.ethics}>
              <h3>Ethical Commitments</h3>
              <p>Chapter leaders commit to:</p>
              <ul>
                <li><strong>Transparency:</strong> Making clear what Threads is and isn't (not therapy, not conflict resolution, not a replacement for professional help)</li>
                <li><strong>Humility:</strong> Acknowledging the limits of the framework and one's own capacity</li>
                <li><strong>Invitation:</strong> Offering Threads as one tool among many, never evangelizing or proselytizing</li>
                <li><strong>Integration:</strong> Respecting and building on local wisdom traditions rather than imposing external models</li>
                <li><strong>Accountability:</strong> Staying connected to CAI for ongoing support, consultation, and alignment with Community of Practice principles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAI Support */}
      <section className={`${styles.support} section-lg`}>
        <div className="container">
          <h2>What CAI Provides</h2>
          <p className={styles.sectionIntro}>Chapters don't operate in isolation—CAI offers ongoing support and resources</p>

          <div className={styles.supportGrid}>
            <div className={styles.supportCard}>
              <h3>📦 Monthly Workshop Packets</h3>
              <p>Themed facilitation guides for public "Holding Tension" workshops, including prompts, practices, and discussion questions ready to use with your community.</p>
            </div>

            <div className={styles.supportCard}>
              <h3>🎯 Consultation & Supervision</h3>
              <p>When chapters encounter tensions they can't navigate alone, CAI provides consultation calls with experienced practitioners to help hold complexity.</p>
            </div>

            <div className={styles.supportCard}>
              <h3>📚 Materials & Resources</h3>
              <p>Access to printable guides, digital tools, facilitation templates, and the full Threads Toolkit for use in workshops and study groups.</p>
            </div>

            <div className={styles.supportCard}>
              <h3>🌐 Chapter Network</h3>
              <p>Connection to other chapters for cross-learning, resource sharing, and mutual support across the broader Threads community.</p>
            </div>

            <div className={styles.supportCard}>
              <h3>📝 Documentation Templates</h3>
              <p>Guidelines for chapter agreements, facilitation protocols, and ethical frameworks to help chapters establish healthy structures.</p>
            </div>

            <div className={styles.supportCard}>
              <h3>🎓 Continuing Education</h3>
              <p>Quarterly webinars, case study discussions, and advanced training opportunities for chapter leaders to deepen their practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className={`${styles.howTo} section-lg`}>
        <div className="container">
          <h2>Starting a Chapter in Your Community</h2>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Complete Facilitator Training</h3>
                <p>Enroll in Tier 2 training through CAI. This typically takes 6-8 months and includes supervised practice, case studies, and integration work.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Assess Local Context</h3>
                <p>What's already working in your community? Where are the tensions? Who else is doing this work? Threads should complement, not compete with, existing resources.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Gather a Core Team</h3>
                <p>Chapters work best with 2-3 trained facilitators who can support each other, share the load, and hold accountability. Solo practitioners can lead, but partnership is encouraged.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Register with CAI</h3>
                <p>Submit your chapter proposal including location, leadership team, focus areas, and community context. CAI provides feedback and formal recognition.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepContent}>
                <h3>Launch with a Pilot Series</h3>
                <p>Begin with 3 monthly workshops using CAI packets. Learn what works in your context before expanding services or making long-term commitments.</p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>6</div>
              <div className={styles.stepContent}>
                <h3>Stay Connected</h3>
                <p>Participate in quarterly chapter network calls, share learnings, and reach out for consultation when tensions arise. Chapters thrive through connection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className={`${styles.examples} section-lg`}>
        <div className="container">
          <h2>What This Could Look Like</h2>
          <p className={styles.sectionIntro}>Imagining Threads chapters in different contexts</p>

          <div className={styles.exampleCards}>
            <div className={styles.exampleCard}>
              <h3>Portland Faith Communities Chapter</h3>
              <p className={styles.exampleContext}>3 CAI-trained clergy (Methodist, UU, Jewish) leading a chapter</p>
              <ul>
                <li>Monthly interfaith study group exploring threads across traditions</li>
                <li>Quarterly workshops for congregational leaders on navigating worship tensions</li>
                <li>Facilitation support for churches/synagogues facing conflict</li>
                <li>Couples' circles using the Threadwork Guide in partnership with local therapists</li>
              </ul>
            </div>

            <div className={styles.exampleCard}>
              <h3>Austin Professional Practitioners Chapter</h3>
              <p className={styles.exampleContext}>Licensed therapists and coaches integrating Threads into practice</p>
              <ul>
                <li>Peer consultation group for case review through Threads lens</li>
                <li>Public "Holding Tension" café series at local coffee shop</li>
                <li>Workshops for nonprofits navigating DEI tensions</li>
                <li>Collaboration with community mediation center</li>
              </ul>
            </div>

            <div className={styles.exampleCard}>
              <h3>Durham Neighborhood Chapter</h3>
              <p className={styles.exampleContext}>Community organizers and educators in a residential neighborhood</p>
              <ul>
                <li>Threads for Parents groups at 3 local elementary schools</li>
                <li>Monthly neighborhood conversations on civic tensions</li>
                <li>Support for local mutual aid organizations</li>
                <li>Teen facilitation training program</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} section-lg`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Bring Threads to Your Community?</h2>
            <p>Whether you're exploring the possibility or ready to start training, we're here to support your discernment.</p>
            <div className={styles.ctaButtons}>
              <a href="/training" className={styles.primaryButton}>Explore Facilitator Training</a>
              <a href="/contact" className={styles.secondaryButton}>Contact Us About Chapters</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chapters;
