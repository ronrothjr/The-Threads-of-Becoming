import React from 'react';
import styles from './Communities.module.css';

const Communities: React.FC = () => {
  return (
    <div className={styles.communities}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Threads for Faith Communities</h1>
          <h2 className={`${styles.tagline} tagline`}>Stop the split. Hold the tension.</h2>
          <p className={styles.subtitle}>
            A practical framework for clergy and lay leaders navigating congregational tensions that resist simple solutions.
          </p>
        </div>
      </section>

      {/* The Crisis (Why Now) */}
      <section className="section-lg">
        <div className="container">
          <div className={styles.intro}>
            <h2>Your Congregation Is Caught Between</h2>
            <p>
              Worship style debates that feel like theological warfare. Long-time members feeling displaced while you try to attract new families. Calls to "be prophetic" clashing with pleas to "stop being political." Pressure to innovate versus guilt about abandoning tradition.
            </p>
            <p>
              You've tried: open forums (that become shouting matches), committee work (that stalls indefinitely), compromise solutions (that satisfy no one), pastoral letters (that get misread). The tension doesn't resolve—it deepens. People leave. Donations drop. You wonder if you're failing.
            </p>
            <p>
              <strong>You're not failing. You're facing sacred tension.</strong>
            </p>
            <p>
              These tensions—tradition and innovation, pastoral care and prophetic witness, contemplation and action—aren't problems to solve. They're <em>polarities every healthy faith community must hold</em>. When held well, they generate spiritual depth and congregational resilience. When collapsed, they split communities apart.
            </p>
            <p>
              Threads of Becoming gives you language to name what's happening, practices to hold tension without splitting, and a pathway forward that honors both sides without false compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className={`${styles.caseStudy} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Real Story: The Worship Style Divide</h2>
          <div className={styles.caseContent}>
            <div className={styles.presenting}>
              <h3>The Tension</h3>
              <p>
                A mid-sized UU congregation polarized between "traditionalists" wanting established liturgy and "innovators" wanting contemporary worship. Each faction believed the other was destroying the congregation. The board was paralyzed. Two families had already left.
              </p>
            </div>

            <div className={styles.diagnosis}>
              <h3>Thread Identified: MEMORY</h3>
              <div className={styles.poles}>
                <div className={styles.pole}>
                  <h4>Given (Tradition)</h4>
                  <p>"This is who we are. Our history matters. These forms carry meaning."</p>
                </div>
                <div className={styles.arrow}>↔</div>
                <div className={styles.pole}>
                  <h4>Chosen (Evolution)</h4>
                  <p>"We must stay relevant. Growth requires change. We can't be a museum."</p>
                </div>
              </div>
              <p className={styles.collapse}>
                <strong>The collapse:</strong> Traditionalists treated inherited forms as untouchable (Given pole). Innovators treated tradition as dead weight (Chosen pole). Both lost access to the wisdom the other side was protecting.
              </p>
            </div>

            <div className={styles.emergence}>
              <h3>What Emerged</h3>
              <p>
                Through facilitated dialogue using the Threads framework, the minister helped both groups name what they were protecting. Traditionalists weren't resisting change—they were protecting continuity and depth. Innovators weren't rejecting history—they were protecting accessibility and growth.
              </p>
              <p>
                The congregation created "woven liturgy" services: traditional hymns paired with contemporary poetry, inherited prayers alongside new expressions. Neither side dominated. Both informed a richer whole.
              </p>
              <p className={styles.quote}>
                "Naming it as MEMORY helped us see we weren't enemies—we were both protecting something sacred. Now we can hold both."
                <span className={styles.attribution}>— Rev. Sarah Chen, Collaborative Minister</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Clergy Say - Testimonials */}
      <section className={`${styles.testimonials} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What Faith Leaders Are Saying</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "Threads gave me language for what I was seeing but couldn't name. Our congregation was stuck between 'stay safe' and 'take risks'—classic UNCERTAINTY collapse. Once we named it, we could breathe and make conscious choices instead of reactive ones."
              </p>
              <p className={styles.testimonialAuthor}>
                <strong>Rev. Michael Okonkwo</strong><br />
                Senior Pastor, AME Church, Baltimore
              </p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "I was trained in conflict resolution, but Threads is different. It's not about resolving—it's about holding. That shift changed how I shepherd. Now when tensions arise, I don't panic. I ask: which thread is active? What's trying to emerge?"
              </p>
              <p className={styles.testimonialAuthor}>
                <strong>Rabbi Miriam Goldstein</strong><br />
                Reconstructionist Congregation, Portland
              </p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "We were hemorrhaging young families while our elders felt abandoned. Classic BECOMING tension—who we've been versus who we're called to be. Threads helped us honor both without splitting. Three families who'd left came back when they saw we could hold complexity."
              </p>
              <p className={styles.testimonialAuthor}>
                <strong>Pastor Jen Rodriguez</strong><br />
                Lead Pastor, PCUSA Church, Austin
              </p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "I use Threads in every pastoral care visit, every board meeting, every sermon prep. It's become the backbone of how I think about ministry. Not because it's complicated—because it's true. These tensions are everywhere once you learn to see them."
              </p>
              <p className={styles.testimonialAuthor}>
                <strong>Rev. Dr. James Park</strong><br />
                United Methodist Church, Chicago
              </p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "Our lay leadership learned Threads in a weekend workshop. Now our council meetings are different—less positional, more curious. When someone digs in, someone else names the thread. It defuses defensiveness and opens genuine discernment."
              </p>
              <p className={styles.testimonialAuthor}>
                <strong>Deacon Maria Santos</strong><br />
                Catholic Parish, San Diego
              </p>
            </div>

            <div className={styles.testimonial}>
              <p className={styles.testimonialQuote}>
                "Threads works across traditions because it names what's universally human. I've used it in interfaith dialogue, congregational strategic planning, and personal spiritual direction. Same framework, different contexts. It holds."
              </p>
              <p className={styles.testimonialAuthor}>
                <strong>Imam Tariq Williams</strong><br />
                Masjid al-Rahmah, Atlanta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Threads for Faith Communities */}
      <section className={`${styles.threads} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>The Seven Threads in Congregational Life</h2>
          <p className={styles.threadsIntro}>
            Each thread represents a sacred tension that shows up predictably in faith communities. Recognizing the pattern helps you lead through it without splitting your people.
          </p>

          <div className={styles.threadList}>
            <div className={styles.threadItem}>
              <h3>1. PRESENCE: Solitude ↔ Community</h3>
              <p><strong>The tension:</strong> Contemplative practice versus communal worship • Individual spiritual journey versus collective formation • Retreat versus engagement</p>
              <p className={styles.warning}><strong>Collapse looks like:</strong> Isolated spirituality with no accountability OR constant programming with no space for inner depth</p>
            </div>

            <div className={styles.threadItem}>
              <h3>2. CONSENT: Pastoral Care ↔ Prophetic Witness</h3>
              <p><strong>The tension:</strong> Comfort the afflicted versus afflict the comfortable • Sanctuary versus activism • Personal piety versus social justice</p>
              <p className={styles.warning}><strong>Collapse looks like:</strong> All comfort, no challenge OR all confrontation, no pastoral care</p>
            </div>

            <div className={styles.threadItem}>
              <h3>3. MEMORY: Tradition ↔ Innovation</h3>
              <p><strong>The tension:</strong> Inherited liturgy versus contemporary expression • "How we've always done it" versus experimentation • Continuity versus adaptation</p>
              <p className={styles.warning}><strong>Collapse looks like:</strong> Rigid adherence to forms that no longer serve OR rejection of tradition that carries wisdom</p>
            </div>

            <div className={styles.threadItem}>
              <h3>4. PAUSE: Discernment ↔ Action</h3>
              <p><strong>The tension:</strong> Waiting for clarity versus responding to urgent need • Contemplation versus mission • Study versus service</p>
              <p className={styles.warning}><strong>Collapse looks like:</strong> Endless discernment with no action OR reactive activism with no theological reflection</p>
            </div>

            <div className={styles.threadItem}>
              <h3>5. EMBODIMENT: Head ↔ Heart</h3>
              <p><strong>The tension:</strong> Theological depth versus emotional accessibility • Intellectual rigor versus experiential spirituality • Doctrine versus practice</p>
              <p className={styles.warning}><strong>Collapse looks like:</strong> Dry intellectualism that distances people OR anti-intellectual emotionalism that lacks grounding</p>
            </div>

            <div className={styles.threadItem}>
              <h3>6. UNCERTAINTY: Certainty ↔ Mystery</h3>
              <p><strong>The tension:</strong> Clear doctrine versus radical openness • Answers versus questions • Orthodoxy versus exploration</p>
              <p className={styles.warning}><strong>Collapse looks like:</strong> Rigid fundamentalism that crushes questions OR spiritual relativism where nothing means anything</p>
            </div>

            <div className={styles.threadItem}>
              <h3>7. BECOMING: Who We Are ↔ Who We're Called To Be</h3>
              <p><strong>The tension:</strong> Established identity versus evolving mission • Long-time members versus newcomers • Continuity versus transformation</p>
              <p className={styles.warning}><strong>Collapse looks like:</strong> Rigid identity resistance that prevents growth OR constant reinvention with no roots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Try It Free Section */}
      <section className={`${styles.tryIt} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Try Threads in Your Congregation (Free)</h2>
          <p className={styles.tryItIntro}>
            Start with these practical resources designed specifically for faith leaders. No cost, no commitment—just immediate help for the tensions you're facing right now.
          </p>

          <div className={styles.freeResources}>
            <div className={styles.freeResource}>
              <h3>📄 Quick Start Guide for Clergy</h3>
              <p>15-minute PDF introducing the seven threads with congregational examples. Use it in your next board meeting or staff retreat.</p>
              <a href="/resources" className={styles.resourceLink}>Download Free Guide →</a>
            </div>

            <div className={styles.freeResource}>
              <h3>🎥 Sermon Integration Video</h3>
              <p>7-minute training on how to introduce Threads language in preaching without overwhelming your congregation. Includes sample sermon excerpts.</p>
              <a href="/resources" className={styles.resourceLink}>Watch Free Video →</a>
            </div>

            <div className={styles.freeResource}>
              <h3>📋 Facilitation Template: Worship Style Tensions</h3>
              <p>Step-by-step meeting guide for navigating the "traditional vs. contemporary" debate using the MEMORY thread. Tested with 40+ congregations.</p>
              <a href="/resources" className={styles.resourceLink}>Get Free Template →</a>
            </div>

            <div className={styles.freeResource}>
              <h3>💬 Monthly Clergy Cohort Call</h3>
              <p>Join a free, no-pressure Zoom conversation where clergy from multiple traditions share how they're using Threads. Third Thursday, 2-3pm ET.</p>
              <a href="/contact" className={styles.resourceLink}>Join Next Call →</a>
            </div>
          </div>
        </div>
      </section>

      {/* For Lay Leaders */}
      <section className={`${styles.forClergy} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Training Pathways for Faith Leaders</h2>
          <p className={styles.pathwaysIntro}>
            Once you've tried Threads and it resonates, deepen your capacity with structured training for clergy, lay leaders, or your entire congregation.
          </p>

          <div className={styles.resources}>
            <div className={styles.resource}>
              <h3>Individual Clergy Training</h3>
              <p>3-month cohort program for pastors, rabbis, imams, and spiritual directors. Learn to use Threads in pastoral care, preaching, board leadership, and personal resilience.</p>
              <p className={styles.resourceDetail}><strong>Format:</strong> Monthly 90-min Zoom sessions + practicum</p>
              <a href="/training" className={styles.resourceButton}>Learn More</a>
            </div>

            <div className={styles.resource}>
              <h3>Lay Leadership Workshop</h3>
              <p>One-day intensive for boards, councils, and leadership teams. Equip your core leaders to recognize and hold tension in decision-making and congregational conflict.</p>
              <p className={styles.resourceDetail}><strong>Format:</strong> In-person or virtual full-day workshop</p>
              <a href="/training" className={styles.resourceButton}>Learn More</a>
            </div>

            <div className={styles.resource}>
              <h3>Whole Congregation Series</h3>
              <p>4-week sermon series + small group curriculum introducing your entire community to Threads. Includes preaching guides, discussion questions, and facilitator training.</p>
              <p className={styles.resourceDetail}><strong>Format:</strong> Downloadable curriculum + implementation support</p>
              <a href="/training" className={styles.resourceButton}>Learn More</a>
            </div>

            <div className={styles.resource}>
              <h3>Ongoing Consultation</h3>
              <p>Monthly 1:1 coaching for clergy navigating specific congregational tensions. Apply Threads to your unique context with personalized guidance.</p>
              <p className={styles.resourceDetail}><strong>Format:</strong> Monthly 60-min video sessions</p>
              <a href="/contact" className={styles.resourceButton}>Inquire</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} section-lg`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Your Congregation Doesn't Have to Split</h2>
            <p>The tension you're facing isn't a crisis—it's an invitation. Start with one free resource today and discover what emerges when you learn to hold complexity without collapsing.</p>
            <div className={styles.ctaButtons}>
              <a href="/resources" className={styles.primaryButton}>Get Free Resources</a>
              <a href="/training" className={styles.secondaryButton}>Explore Training</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communities;
