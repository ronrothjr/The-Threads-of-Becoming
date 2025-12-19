import React from 'react';
import styles from './SafeSupport.module.css';

const SpecialPopulations: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>S.A.F.E. for Special Populations</h1>
          <p className={styles.tagline}>
            Universal framework, individualized adaptations
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className={`${styles.content} section-lg`}>
        <div className="container">
          <p className={styles.intro}>
            <strong>The Threads are universal—the timing, pacing, and facilitation must be individualized.</strong> Students with trauma histories, autism, ADHD, anxiety, language barriers, or other needs can absolutely engage S.A.F.E.—but not always in the same way, at the same pace, or with the same language as neurotypical, non-traumatized peers.
          </p>

          <div className={styles.highlight}>
            <strong>Core Principle:</strong> S.A.F.E. is <em>accessible</em> when we adapt the <em>method</em>, not when we water down the <em>content</em>. Every child can learn to hold tension—we just need to meet them where they are.
          </div>

          {/* Universal Design for Learning */}
          <h2 className={styles.sectionTitle}>Universal Design for Learning (UDL)</h2>

          <div className={`${styles.card} ${styles.resourceCard}`}>
            <h3>Three UDL Principles Applied to S.A.F.E.</h3>

            <h4>1. Multiple Means of Representation (How We Teach)</h4>
            <ul>
              <li><strong>Visual:</strong> Posters, emotion charts, Thread colors, picture books</li>
              <li><strong>Auditory:</strong> Read-alouds, songs, chants, audio stories</li>
              <li><strong>Kinesthetic:</strong> Role-plays, movement, acting out scenarios</li>
              <li><strong>Tactile:</strong> Manipulatives (Thread tokens), sensory tools during S.A.F.E. conversations</li>
            </ul>

            <h4>2. Multiple Means of Action & Expression (How Students Respond)</h4>
            <ul>
              <li><strong>Verbal:</strong> Traditional S.A.F.E. conversation</li>
              <li><strong>Written:</strong> Journal, draw, write on whiteboard</li>
              <li><strong>Artistic:</strong> Draw their feelings, create Thread collage</li>
              <li><strong>Physical:</strong> Point to emotion card, use gestures, body language</li>
              <li><strong>Digital:</strong> Type on device, use AAC (augmentative communication)</li>
            </ul>

            <h4>3. Multiple Means of Engagement (How We Motivate)</h4>
            <ul>
              <li><strong>Choice:</strong> Students choose how to engage S.A.F.E. (talk, draw, write)</li>
              <li><strong>Relevance:</strong> Connect to student's lived experience, interests</li>
              <li><strong>Autonomy:</strong> "You can say 'I'm not ready' and we'll wait"</li>
              <li><strong>Feedback:</strong> Specific, immediate, non-judgmental</li>
            </ul>
          </div>

          {/* Population-Specific Adaptations */}
          <h2 className={styles.sectionTitle}>Population-Specific Adaptations</h2>

          <div className={styles.resourceGrid}>
            {/* Trauma Histories */}
            <div className={`${styles.card} ${styles.workshopCard}`}>
              <h3>Students with Trauma Histories</h3>

              <h4>What to Know</h4>
              <ul>
                <li><strong>Hypervigilance:</strong> Constantly scanning for danger, hard to focus on internal feelings</li>
                <li><strong>Dysregulation:</strong> Emotions can flood quickly, hard to name or modulate</li>
                <li><strong>Trust issues:</strong> May not believe adults will keep them safe</li>
                <li><strong>Trauma responses:</strong> Fight/flight/freeze triggered by reminders of past harm</li>
              </ul>

              <h4>S.A.F.E. Adaptations</h4>
              <ul>
                <li><strong>Safety first, always:</strong> "You're safe here. I'm not going to let anyone hurt you."</li>
                <li><strong>Slow down SEE:</strong> May need extra time to notice what's happening (dissociation common)</li>
                <li><strong>Adapt ASK:</strong> Instead of "Ask them what they're feeling," try "Do you want me to ask for you?"</li>
                <li><strong>Support FEEL:</strong> May need emotion chart, body scan ("Where do you feel it in your body?")</li>
                <li><strong>Affirm EMERGE:</strong> "You're making a choice right now—that's powerful. You're not stuck."</li>
              </ul>

              <h4>When S.A.F.E. Can Wait</h4>
              <ul>
                <li><strong>Triggered state:</strong> If student is in trauma response, S.A.F.E. conversation must wait until regulated</li>
                <li><strong>Need for co-regulation:</strong> Counselor or trusted adult sits with student first, helps them return to window of tolerance</li>
                <li><strong>Trauma-specific therapy:</strong> Some students need professional therapeutic support beyond S.A.F.E.</li>
              </ul>
            </div>

            {/* Autism Spectrum */}
            <div className={`${styles.card} ${styles.workshopCard}`}>
              <h3>Autism Spectrum</h3>

              <h4>What to Know</h4>
              <ul>
                <li><strong>Literal thinking:</strong> Metaphors, abstract language can confuse</li>
                <li><strong>Difficulty reading social cues:</strong> May not "SEE" what's happening in conflict</li>
                <li><strong>Sensory sensitivities:</strong> Overwhelm can shut down processing</li>
                <li><strong>Need for predictability:</strong> Sudden S.A.F.E. circles can cause anxiety</li>
              </ul>

              <h4>S.A.F.E. Adaptations</h4>
              <ul>
                <li><strong>Concrete SEE:</strong> Use visuals, social stories, explicit teaching of cues ("When someone's arms are crossed and they're looking away, they might be upset")</li>
                <li><strong>Structured ASK:</strong> Provide scripts ("You can say: 'Are you okay?' or 'What do you need?'")</li>
                <li><strong>Adapted FEEL:</strong> Emotion chart with faces/colors, not just words. "Point to how you feel."</li>
                <li><strong>Predictable EMERGE:</strong> "We've talked about who you want to be. Which choice fits that?"</li>
                <li><strong>Advance notice:</strong> "In 10 minutes, we're going to have a S.A.F.E. conversation about what happened at recess."</li>
              </ul>

              <h4>Sensory Considerations</h4>
              <ul>
                <li><strong>Quiet space:</strong> Not in busy classroom—use counselor office or quiet corner</li>
                <li><strong>Fidgets allowed:</strong> Sensory tools help regulate during conversation</li>
                <li><strong>No eye contact required:</strong> Can talk while drawing, walking, or looking away</li>
                <li><strong>Breaks okay:</strong> "Do you need a sensory break before we continue?"</li>
              </ul>
            </div>

            {/* ADHD */}
            <div className={`${styles.card} ${styles.workshopCard}`}>
              <h3>ADHD</h3>

              <h4>What to Know</h4>
              <ul>
                <li><strong>Impulsivity:</strong> May react before thinking, hard to PAUSE</li>
                <li><strong>Emotional intensity:</strong> Feelings come on strong and fast</li>
                <li><strong>Difficulty with sustained attention:</strong> Long S.A.F.E. conversations can lose them</li>
                <li><strong>Need for movement:</strong> Sitting still during reflection feels impossible</li>
              </ul>

              <h4>S.A.F.E. Adaptations</h4>
              <ul>
                <li><strong>Movement-based SEE:</strong> "Let's walk while we talk about what happened"</li>
                <li><strong>Quick check-ins:</strong> Multiple short S.A.F.E. conversations instead of one long one</li>
                <li><strong>FEEL with urgency:</strong> "Right now, in this moment, what do you feel?" (not "think back and reflect")</li>
                <li><strong>Visual EMERGE:</strong> "Show me with your body—who do you want to be?" (stand tall, calm posture, etc.)</li>
                <li><strong>Practice PAUSE:</strong> Teach specific strategies (count to 5, take 3 breaths, squeeze hands)</li>
              </ul>

              <h4>Structure & Support</h4>
              <ul>
                <li><strong>Fidgets/movement breaks:</strong> Let them stand, pace, squeeze stress ball</li>
                <li><strong>Timer:</strong> "We're going to talk for 5 minutes, then you can go back to recess"</li>
                <li><strong>Immediate processing:</strong> Don't wait hours to debrief—do it right after incident (or they'll forget)</li>
                <li><strong>Written reminders:</strong> After S.A.F.E. conversation, write down key takeaway for student to keep</li>
              </ul>
            </div>

            {/* Anxiety Disorders */}
            <div className={`${styles.card} ${styles.workshopCard}`}>
              <h3>Anxiety Disorders</h3>

              <h4>What to Know</h4>
              <ul>
                <li><strong>Fear of judgment:</strong> Worried about "getting in trouble" during S.A.F.E. conversation</li>
                <li><strong>Catastrophizing:</strong> Small conflicts feel enormous, overwhelming</li>
                <li><strong>Avoidance:</strong> May shut down rather than engage tension</li>
                <li><strong>Physical symptoms:</strong> Stomachaches, headaches, rapid heartbeat during conflict</li>
              </ul>

              <h4>S.A.F.E. Adaptations</h4>
              <ul>
                <li><strong>Reassurance at SEE:</strong> "You're not in trouble. We're just figuring this out together."</li>
                <li><strong>Gentle ASK:</strong> "You don't have to talk to them directly—I can help with that"</li>
                <li><strong>Normalize FEEL:</strong> "Lots of people feel scared/worried/unsure in this situation. That's okay."</li>
                <li><strong>Small steps for EMERGE:</strong> "You don't have to fix everything right now. What's one small choice you can make?"</li>
              </ul>

              <h4>Regulation Support</h4>
              <ul>
                <li><strong>Breathing exercises:</strong> Start S.A.F.E. conversation with grounding (deep breaths, 5-4-3-2-1 sensory)</li>
                <li><strong>Private space:</strong> Anxious students often can't process in front of peers</li>
                <li><strong>Written option:</strong> "Do you want to write your feelings instead of saying them out loud?"</li>
                <li><strong>Exit plan:</strong> "If this feels like too much, you can say 'pause' and we'll stop"</li>
              </ul>
            </div>

            {/* English Language Learners */}
            <div className={`${styles.card} ${styles.workshopCard}`}>
              <h3>English Language Learners (ELL)</h3>

              <h4>What to Know</h4>
              <ul>
                <li><strong>Language barrier:</strong> May understand conflict but can't articulate in English</li>
                <li><strong>Cultural differences:</strong> Concepts like "boundaries" or "consent" may translate differently</li>
                <li><strong>Fear of misunderstanding:</strong> Worried about being misunderstood or misunderstanding others</li>
              </ul>

              <h4>S.A.F.E. Adaptations</h4>
              <ul>
                <li><strong>Visual supports:</strong> Emotion charts, picture cards, gestures</li>
                <li><strong>Simplified language:</strong> "What do you see?" instead of "Can you articulate your perspective?"</li>
                <li><strong>Translation support:</strong> Use interpreter, bilingual staff, or translation app if needed</li>
                <li><strong>Cultural bridge:</strong> "In your culture, how do people handle this kind of situation?" (honor their background)</li>
              </ul>

              <h4>Multilingual S.A.F.E.</h4>
              <ul>
                <li><strong>S.A.F.E. posters in multiple languages:</strong> Spanish, Mandarin, Arabic, etc.</li>
                <li><strong>Home language welcome:</strong> "You can say it in [home language] and we'll figure it out together"</li>
                <li><strong>Peer support:</strong> Bilingual peer can help translate feelings</li>
              </ul>
            </div>

            {/* Oppositional Defiant Disorder (ODD) */}
            <div className={`${styles.card} ${styles.workshopCard}`}>
              <h3>Oppositional Defiant Disorder (ODD)</h3>

              <h4>What to Know</h4>
              <ul>
                <li><strong>Authority resistance:</strong> May refuse to participate in S.A.F.E. conversation if it feels like being told what to do</li>
                <li><strong>Blame externalizing:</strong> "It's not my fault" default response</li>
                <li><strong>Need for control:</strong> Power struggles are central to behavior</li>
              </ul>

              <h4>S.A.F.E. Adaptations</h4>
              <ul>
                <li><strong>Offer choice:</strong> "Do you want to talk here or in the library?" (not "We're doing S.A.F.E. now")</li>
                <li><strong>Non-directive SEE:</strong> "Tell me what you noticed" (not "Let me tell you what I saw")</li>
                <li><strong>Autonomy in EMERGE:</strong> "What do YOU think should happen?" (give them agency)</li>
                <li><strong>Avoid power struggle:</strong> If they refuse, don't force. "Okay, when you're ready, I'm here."</li>
              </ul>

              <h4>Relationship First</h4>
              <ul>
                <li><strong>Build trust outside of conflict:</strong> S.A.F.E. won't work if there's no relationship foundation</li>
                <li><strong>Non-punitive framing:</strong> "I'm not here to punish—I'm here to figure this out with you"</li>
                <li><strong>Validate feelings:</strong> "I can see you're angry. That makes sense." (even if behavior isn't okay)</li>
              </ul>
            </div>

            {/* Students Experiencing Homelessness/Poverty */}
            <div className={`${styles.card} ${styles.workshopCard}`}>
              <h3>Students Experiencing Homelessness/Poverty</h3>

              <h4>What to Know</h4>
              <ul>
                <li><strong>Survival mode:</strong> Basic needs (food, safety, shelter) may not be met—hard to focus on social-emotional learning</li>
                <li><strong>Shame/stigma:</strong> May hide their situation, fear being "found out"</li>
                <li><strong>Inconsistent attendance:</strong> May miss S.A.F.E. teaching, assemblies, continuity of learning</li>
              </ul>

              <h4>S.A.F.E. Adaptations</h4>
              <ul>
                <li><strong>Meet basic needs first:</strong> "Have you eaten today? Let's get you a snack, then we can talk."</li>
                <li><strong>Acknowledge reality:</strong> "I know you have a lot going on outside of school. This is a safe space."</li>
                <li><strong>Flexible EMERGE:</strong> Don't ask "Who do you want to become?" if they're just trying to survive today. Ask "What do you need right now?"</li>
                <li><strong>Resource connection:</strong> Use S.A.F.E. conversations as opportunity to connect to counselor, social worker, resources</li>
              </ul>

              <h4>Dignity & Privacy</h4>
              <ul>
                <li><strong>Never ask about home situation in front of peers</strong></li>
                <li><strong>Private check-ins:</strong> "I noticed you seem stressed—want to talk?"</li>
                <li><strong>No assumptions:</strong> Don't assume behavior is "bad attitude"—it might be survival</li>
              </ul>
            </div>
          </div>

          {/* IEP/504 Integration */}
          <h2 className={styles.sectionTitle}>IEP/504 Integration</h2>

          <div className={`${styles.card} ${styles.measurementCard}`}>
            <h3>How S.A.F.E. Fits into Special Education Plans</h3>

            <h4>IEP Social-Emotional Goals Can Include S.A.F.E.</h4>
            <p><strong>Example Goals:</strong></p>
            <ul>
              <li>"Student will use S.A.F.E. framework to identify and name emotions in 4 out of 5 conflict situations, as measured by teacher observation."</li>
              <li>"Student will engage PAUSE step (wait 10 seconds before responding) when frustrated, with adult prompting, in 3 out of 5 opportunities."</li>
              <li>"Student will ASK a peer what they need during conflict (using visual script if needed) with 80% accuracy over 4 weeks."</li>
            </ul>

            <h4>504 Accommodations Can Support S.A.F.E. Engagement</h4>
            <p><strong>Example Accommodations:</strong></p>
            <ul>
              <li>"Student will receive advance notice (10 minutes) before S.A.F.E. conversation"</li>
              <li>"Student may use fidget tools during S.A.F.E. processing"</li>
              <li>"Student may write or draw responses instead of verbal participation"</li>
              <li>"S.A.F.E. conversations will be limited to 10 minutes with movement breaks"</li>
              <li>"Student may have S.A.F.E. conversation in counselor office (sensory-friendly space)"</li>
            </ul>

            <h4>Collaboration with Special Education Team</h4>
            <ul>
              <li><strong>IEP meetings:</strong> Include S.A.F.E. adaptations in behavior intervention plans</li>
              <li><strong>Data collection:</strong> Track S.A.F.E. engagement as part of progress monitoring</li>
              <li><strong>Parent communication:</strong> Teach parents S.A.F.E. language to use at home (consistency across environments)</li>
            </ul>
          </div>

          {/* Training for Special Ed Staff */}
          <h2 className={styles.sectionTitle}>Training for Special Education Staff</h2>

          <div className={`${styles.card} ${styles.workshopCard}`}>
            <h3>Specialized S.A.F.E. Training for SpEd Teachers, Paraprofessionals, and Related Services</h3>
            <span className={styles.duration}>4 hours (in addition to general S.A.F.E. training)</span>

            <h4>Module 1: Universal Design for S.A.F.E. (90 min)</h4>
            <ul>
              <li>UDL principles applied to S.A.F.E.</li>
              <li>Multiple means of representation, action, engagement</li>
              <li>Adapting S.A.F.E. for students who are non-verbal, minimally verbal</li>
              <li>Using AAC (augmentative communication) devices for S.A.F.E.</li>
            </ul>

            <h4>Module 2: Population-Specific Adaptations (90 min)</h4>
            <ul>
              <li>Trauma, autism, ADHD, anxiety, ODD, ELL—review adaptations for each</li>
              <li>Case studies and role-plays</li>
              <li>When S.A.F.E. can wait vs. when it's inappropriate</li>
              <li>Co-regulation strategies before/during S.A.F.E.</li>
            </ul>

            <h4>Module 3: IEP/504 Integration (60 min)</h4>
            <ul>
              <li>Writing S.A.F.E. goals and accommodations</li>
              <li>Data collection for progress monitoring</li>
              <li>Collaborating with gen ed teachers on S.A.F.E. implementation</li>
              <li>Parent education and home-school consistency</li>
            </ul>

            <h4>Ongoing Consultation</h4>
            <ul>
              <li>Monthly office hours with school psychologist or BCBA (behavior specialist)</li>
              <li>Case consultation for complex students</li>
              <li>Observation and feedback in classroom/therapy sessions</li>
            </ul>
          </div>

          {/* Key Takeaway */}
          <div className={styles.highlight}>
            <strong>Remember:</strong> The goal is not to make every student do S.A.F.E. the same way. The goal is to make the Threads accessible to every student in the way that works for them. Adaptation is not dilution—it's equity.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Make S.A.F.E. Accessible for All?</h2>
          <p>Let's ensure every student can engage the Threads—no matter their needs.</p>
          <a href="/contact" className={styles.ctaButton}>
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default SpecialPopulations;
