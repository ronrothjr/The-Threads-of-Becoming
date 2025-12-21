import React from 'react';
import styles from './WhenBullyingIsntPlay.module.css';

const WhenBullyingIsntPlay: React.FC = () => {
  return (
    <div className={styles.whenBullyingIsntPlay}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>When Bullying Isn't Play</h1>
        <h2 className={`${styles.tagline} tagline`}>
          Beyond S.A.F.E. to Threadwork
        </h2>
        <p className={styles.heroBrief}>
          When tension runs deeper, we need deeper tools.
        </p>
      </section>

      {/* Introduction */}
      <section className={`${styles.intro} section-lg`}>
        <div className="container">
          <h2>S.A.F.E. is a Deployment Vehicle</h2>
          <p className={styles.introText}>
            S.A.F.E. is a <em>rapid-deployment protocol</em> optimized for cases where tension is <strong>present and accessible</strong> —
            probably 60-70% of school incidents. It's simplified for school staff who need one sentence and 20 seconds.
          </p>
          <p className={styles.introText}>
            But <strong>Threads</strong> is the underlying architecture of human tension, and it applies to everything.
            The question becomes: <em>how</em> does Threadwork happen in each case, and <em>who</em> does it?
          </p>
        </div>
      </section>

      {/* Core Distinction */}
      <section className={`${styles.coreDistinction} section-lg`}>
        <div className="container">
          <h2>The Core Distinction</h2>

          <div className={styles.distinctionBox}>
            <div className={styles.safeBox}>
              <h3>S.A.F.E.</h3>
              <p>Assumes tension is <strong>present and accessible</strong> — we just need to surface it:</p>
              <ul>
                <li><strong>Rapid deployment</strong> (one sentence, 20 seconds, any trained staff member)</li>
                <li><strong>Covers 60-70% of incidents</strong> (status games, play collapse, pack behavior)</li>
                <li><strong>Works when capacity exists</strong> (nervous system can hold tension, reflection is available)</li>
              </ul>
            </div>

            <div className={styles.threadsBox}>
              <h3>Threads</h3>
              <p>Understands that tension is <strong>always there</strong> — but it can be:</p>
              <ul>
                <li><strong>Collapsed</strong> (one pole has "won," the other is suppressed or invisible)</li>
                <li><strong>Inaccessible</strong> (trauma, developmental difference, or lack of capacity prevents access)</li>
                <li><strong>Systemically reinforced</strong> (the environment keeps collapsing it)</li>
              </ul>
            </div>
          </div>

          <p className={styles.conclusionText}>
            Threadwork in harder cases isn't about surfacing existing tension. It's about <strong>re-opening collapsed tensions</strong>,
            <strong>building capacity to access tension</strong>, or <strong>changing the system that collapses it</strong>.
          </p>
        </div>
      </section>

      {/* Threads Applied to Each Bullying Type */}
      <section className={`${styles.bullyingTypes} section-lg`}>
        <div className="container">
          <h2>Threads Applied to Each Bullying Type</h2>

          {/* Type 1: Status Games / Play Under Distorted Conditions */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 1: Status Games / Play Under Distorted Conditions</h3>

            <div className={styles.collapseBox}>
              <strong>The collapse:</strong> This is <strong>collapsed play</strong> — the threads of healthy play (consent, pause, embodiment)
              have broken down, but the tension is <strong>present and accessible</strong>.
            </div>

            <div className={styles.threadSection}>
              <h4>Where Threads lives:</h4>
              <p>This is the sweet spot for S.A.F.E. The child can feel the tension between:</p>
              <ul>
                <li>"I wanted to be funny" AND "I see they're hurt"</li>
                <li>"Everyone was laughing" AND "I knew it wasn't okay"</li>
                <li>"I wanted power" AND "I didn't want to be mean"</li>
              </ul>
              <p>The tension exists — it just needs to be surfaced and held.</p>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork (S.A.F.E. works perfectly here):</h4>
              <p>This is what S.A.F.E. was designed for — rapid deployment when tension is accessible:</p>
              <ul>
                <li><strong>See:</strong> What happened? What did you notice?</li>
                <li><strong>Ask:</strong> What might have been happening for them?</li>
                <li><strong>Feel:</strong> Can you hold that both are true — you wanted X AND they experienced Y?</li>
                <li><strong>Emerge:</strong> Who are you choosing to be right now?</li>
              </ul>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>Teachers trained in S.A.F.E.</li>
                <li>School counselors</li>
                <li>Any staff member with basic training</li>
                <li>This represents 60-70% of school bullying incidents</li>
              </ul>
              <p className={styles.keyInsight}>
                <strong>Why this matters:</strong> For detailed exploration of this type, see the <a href="/safe/bullying-is-play">Bullying Is Play</a> page.
                This is the foundation — when bullying isn't this type, we need deeper Threadwork.
              </p>
            </div>
          </div>

          {/* Type 2: Ideological Bullying */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 2: Ideological Bullying (Inherited Bigotry)</h3>

            <div className={styles.collapseBox}>
              <strong>The collapse:</strong> UNCERTAINTY has collapsed into its shadow — <strong>dogmatism</strong>.
              The child isn't holding "Hide vs. Seek" or "Threat vs. Wonder" — they've landed permanently on one side.
              Certainty feels safe. The other (racial, ethnic, immigrant) has been categorized and dismissed.
            </div>

            <div className={styles.threadSection}>
              <h4>Where Threads lives:</h4>
              <p>The tension <em>is still there</em> — it's being actively suppressed. Somewhere in that child is:</p>
              <ul>
                <li>A moment of wonder about someone different (crushed by family messaging)</li>
                <li>An experience that didn't fit the narrative (explained away)</li>
                <li>A flicker of "but they seem... human?" (shut down)</li>
              </ul>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork (not S.A.F.E.):</h4>
              <p>This is UNCERTAINTY Threadwork — helping someone move from the <strong>Threat</strong> quadrant toward <strong>Wonder</strong>:</p>
              <blockquote>
                "You learned that [group] is [negative belief]. That's what you were given. Can you also hold that you don't actually know every person in that group?
                Can certainty AND curiosity both be present?"
              </blockquote>

              <p>The <strong>MEMORY Thread</strong> is also crucial here:</p>
              <p>This child is living in <strong>Given + Told</strong>. The work is movement toward <strong>Given + Telling</strong> —
              "I received this story AND I get to decide how I carry it."</p>
              <blockquote>
                "Your family believes X. That's real — that's what you were given. AND you're becoming someone too.
                What do YOU think when you actually talk to [person from that group]? Is there space for your own knowing?"
              </blockquote>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>Not a teacher in 20 seconds</li>
                <li>Possibly a skilled counselor over time</li>
                <li>Ideally, community/family — but that's often where the ideology comes from</li>
                <li>Sometimes: a mentor, a coach, a trusted adult outside the family system</li>
                <li>Long-term: exposure, relationship, counter-narrative</li>
              </ul>
              <p className={styles.hardTruth}>
                <strong>The hard truth:</strong> School may not be able to do this work if family actively reinforces the opposite.
                But school <em>can</em> create conditions where the child encounters disconfirming experiences — relationships with the "other" that don't fit the narrative.
                Those experiences become seeds for later Threadwork.
              </p>
            </div>
          </div>

          {/* Type 3: Religious Conviction Bullying */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 3: Religious Conviction Bullying</h3>

            <div className={styles.collapseBox}>
              <strong>The collapse:</strong> Multiple Threads collapsed simultaneously:
              <ul>
                <li><strong>UNCERTAINTY</strong> → dogmatism ("I know the truth")</li>
                <li><strong>CONSENT</strong> → coercion ("I must save you whether you want it or not")</li>
                <li><strong>BECOMING</strong> → foreclosed ("God/scripture has already told me who I must become")</li>
              </ul>
            </div>

            <div className={styles.threadSection}>
              <h4>Where Threads lives:</h4>
              <p>This is where it gets philosophically interesting. The child may genuinely believe they're <em>holding</em> tension well —
              they feel the pull of "I want to be kind AND I must speak truth." They might even articulate it that way.</p>
              <p>But look at the CONSENT Thread:</p>
              <p>The religious bully often can't access <strong>"Other + No"</strong> — the quadrant where the other's refusal is honored.
              The other's refusal to accept the message doesn't count as legitimate — it's seen as spiritual blindness, not genuine choice.
              <em>Their refusal must not be honored because honoring it would mean letting them go to hell.</em></p>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork (not S.A.F.E.):</h4>
              <p>This requires working <em>within</em> the religious framework, not against it:</p>
              <blockquote>
                "Your faith is important to you. I'm not asking you to change it. I'm asking: does your faith require the other person's consent to hear your message?
                Can you share what you believe AND honor that they get to say 'no, I don't want to hear this'? What does your tradition say about respecting others' choices?"
              </blockquote>

              <p>Most religious traditions actually <em>do</em> have resources for this:</p>
              <ul>
                <li>Free will theology (God doesn't force; why should you?)</li>
                <li>"Shake the dust off your feet" (Jesus's instruction when people don't receive the message — move on, don't coerce)</li>
                <li>Dignity of the person (even in disagreement)</li>
              </ul>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>Ideally: religious leaders within the child's own tradition</li>
                <li>Skilled counselors who can work within faith frameworks without dismissing them</li>
                <li>Parents, if they're willing to distinguish belief from behavior</li>
                <li>Interfaith dialogue contexts</li>
              </ul>
              <p className={styles.institutionalNote}>
                <strong>The institutional challenge:</strong> Schools often fear touching religion at all. But the work isn't about challenging the belief —
                it's about the CONSENT Thread. "You believe X. That's protected. What's not protected is imposing it on others who haven't consented to receive it."
              </p>
            </div>
          </div>

          {/* Type 4: Trauma-Driven Bullying */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 4: Trauma-Driven Bullying</h3>

            <div className={styles.collapseBox}>
              <strong>The collapse:</strong> The Threads aren't collapsed so much as <strong>inaccessible</strong>.
              The nervous system is running survival patterns that predate reflective capacity.
            </div>

            <div className={styles.threadSection}>
              <h4>Where Threads lives:</h4>
              <ul>
                <li><strong>MEMORY</strong> — "Given + Told": The trauma is a story that <em>tells</em> the child who they are and how the world works.
                They didn't choose it, and it runs automatically.</li>
                <li><strong>EMBODIMENT</strong> — The body holds the trauma. This child may be stuck in "Feel + Go" (overwhelm, dissociation) or
                "Think + Go" (escape into numbness, leaving the body behind). They can't "Stay" with sensation because staying means feeling the original wound.</li>
                <li><strong>BECOMING</strong> — The child is stuck in "Same + Return" — the stuck loop, repetition without transformation.
                They keep recreating the dynamic they experienced.</li>
              </ul>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork (not S.A.F.E.):</h4>
              <p>This requires <strong>sequenced</strong> work:</p>

              <div className={styles.sequencedWork}>
                <div className={styles.workStep}>
                  <h5>First: EMBODIMENT</h5>
                  <p>Help the body return to safety. Regulation before reflection. The child needs to learn they can "Stay" with sensation without being destroyed.</p>
                  <blockquote>"Where do you feel that in your body right now? Can we just notice it without doing anything? You're safe here."</blockquote>
                </div>

                <div className={styles.workStep}>
                  <h5>Then: MEMORY</h5>
                  <p>When the nervous system is regulated enough, the story can begin to shift from "Told" to "Telling."</p>
                  <blockquote>
                    "Something happened that taught you the world is dangerous and you have to hurt first. That's what you were given.
                    What would it mean if that's not the whole story? Who are you if you're not just what happened to you?"
                  </blockquote>
                </div>

                <div className={styles.workStep}>
                  <h5>Then: BECOMING</h5>
                  <p>Movement from "Same + Return" toward "Different + Return" — the spiral, coming back to old ground with new eyes.</p>
                  <blockquote>
                    "You've been here before — this moment where you want to hurt someone. You've always done the same thing.
                    What would it feel like to come to this moment and choose differently? Not because you're forced to, but because you're becoming someone new?"
                  </blockquote>
                </div>
              </div>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>Trained trauma therapists</li>
                <li>School counselors with trauma certification</li>
                <li>Therapeutic contexts, not classroom interventions</li>
                <li>S.A.F.E. can be a <em>supplement</em> but not the primary intervention</li>
              </ul>
              <p className={styles.integration}>
                <strong>The integration:</strong> Once the child has enough capacity, S.A.F.E. becomes available to them.
                They can hold tension because their nervous system isn't hijacking them. The Threadwork creates the <em>capacity</em> for S.A.F.E.
              </p>
            </div>
          </div>

          {/* Type 5: Neurodivergent Dynamics */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 5: Neurodivergent Dynamics</h3>

            <div className={styles.collapseBox}>
              <strong>The difference:</strong> This isn't collapse — it's a <strong>different pathway</strong> to the Threads.
            </div>

            <div className={styles.threadSection}>
              <h4>Where Threads lives:</h4>
              <p><strong>PRESENCE</strong> — The "Between" pole may be accessed differently. An autistic child might not intuit "what's happening between us"
              the way a neurotypical child does. But that doesn't mean the Thread isn't present — it means the <em>pathway</em> to it is different.</p>
              <p><strong>EMBODIMENT</strong> — "Body knows" operates differently. Sensory processing differences mean the body's signals may be louder, quieter,
              or organized differently than expected.</p>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork (adapted, not abandoned):</h4>
              <p>The Threads are universal — but the <em>access points</em> are individual.</p>

              <p>For a child who doesn't naturally read social cues:</p>
              <blockquote>
                "I know you don't always see what's happening on people's faces. That's okay — your brain works differently.
                Can you learn some patterns? When someone's arms are crossed and they're looking away, that often means something's wrong.
                That's a clue. What could you do when you see that clue?"
              </blockquote>
              <p className={styles.workNote}>This is still PRESENCE work — it's just explicit rather than intuitive.</p>

              <p>For a child whose sensory system overwhelms them:</p>
              <blockquote>
                "Your body feels things really intensely. That's real — that's how you're made.
                Can we notice together what happens in your body before you hit? Is there a signal we can catch?
                You're not bad — your body just gets loud. Let's learn its language."
              </blockquote>
              <p className={styles.workNote}>This is EMBODIMENT work — with explicit scaffolding.</p>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>Special education staff trained in both disability and Thread concepts</li>
                <li>Therapists specializing in neurodivergent populations</li>
                <li>Classroom teachers with appropriate training</li>
                <li>S.A.F.E. <em>can</em> work here with adaptations</li>
              </ul>
              <p className={styles.keyInsight}>
                <strong>The key insight:</strong> Neurodivergent kids aren't exempt from Threadwork — they just need different pathways in.
                The tensions are still universal. The access is individual.
              </p>
            </div>
          </div>

          {/* Type 6: Pack Behavior */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 6: Pack Behavior / Social Contagion</h3>

            <div className={styles.collapseBox}>
              <strong>The collapse:</strong> CONSENT has been surrendered to the group. The individual's agency has been collapsed into collective action.
            </div>

            <div className={styles.threadSection}>
              <h4>Where Threads lives:</h4>
              <p>This is actually rich Thread territory because the tension <em>is</em> felt — it's just overridden by social pressure.</p>
              <ul>
                <li><strong>CONSENT</strong> — "Self + No" (I exercise my right to refuse) has been abandoned.
                The child CAN feel their own resistance — they've just learned to suppress it.</li>
                <li><strong>THRESHOLD</strong> — "Who belongs?" The pack defines belonging, and the price of admission is participation in harm.</li>
                <li><strong>PRESENCE</strong> — "Between" has become dominant. The child exists only in relation to the group.
                "Within" (solitary knowing, private conscience) has gone quiet.</li>
              </ul>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork (S.A.F.E. CAN work here with skill):</h4>
              <p>This is where S.A.F.E. is actually powerful, because you're helping the child reconnect with a tension they already feel:</p>
              <blockquote>
                "You joined in. AND I can see part of you didn't want to. What was that part feeling? What did your body know that you didn't let yourself say?"
              </blockquote>

              <p>The work is recovering the surrendered "Self + No":</p>
              <blockquote>
                "The group was doing it. That's real pressure. AND you're still a person with choices.
                What would it mean to be someone who feels the pressure AND chooses differently? Who do you want to be when the pack is moving?"
              </blockquote>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>Teachers and counselors trained in S.A.F.E.</li>
                <li>This is actually the sweet spot for school-based intervention</li>
                <li>The individual work supports culture change when enough individuals reclaim their agency</li>
              </ul>
            </div>
          </div>

          {/* Type 7: Systemic/Environmental Bullying */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 7: Systemic/Environmental Bullying</h3>

            <div className={styles.collapseBox}>
              <strong>The collapse:</strong> The system itself is collapsed. The Threads aren't just collapsed in individuals — they're collapsed in the culture.
            </div>

            <div className={styles.threadSection}>
              <h4>Where Threads lives:</h4>
              <p>Every Thread can be collapsed at a systemic level:</p>
              <ul>
                <li><strong>PRESENCE:</strong> A school where no one really sees anyone</li>
                <li><strong>CONSENT:</strong> A culture where coercion is normalized ("boys will be boys")</li>
                <li><strong>MEMORY:</strong> A community locked in stories that can't be questioned</li>
                <li><strong>PAUSE:</strong> A system that rewards reaction, punishes reflection</li>
                <li><strong>EMBODIMENT:</strong> A culture that distrusts the body, over-values cognition</li>
                <li><strong>UNCERTAINTY:</strong> Institutional dogmatism, no room for not-knowing</li>
                <li><strong>BECOMING:</strong> Fixed identities, no space for transformation ("once a troublemaker, always a troublemaker")</li>
              </ul>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork (systemic, not individual):</h4>
              <p>This is where school-wide language work becomes Threadwork at scale.</p>
              <p>When every adult in a building speaks the same language of tension-holding, you're not just helping individuals —
              you're shifting what's <em>possible</em> in that culture.</p>

              <p>The S.A.F.E. assemblies, the public measurement, the staff training — all of this is systemic Threadwork.
              You're creating an environment where:</p>
              <ul>
                <li>PRESENCE is practiced (adults see kids, kids see each other)</li>
                <li>CONSENT is modeled (choices are honored)</li>
                <li>MEMORY can shift (new stories become possible)</li>
                <li>PAUSE is valued (reflection before reaction)</li>
                <li>EMBODIMENT is welcomed (body signals matter)</li>
                <li>UNCERTAINTY is safe (not-knowing isn't weakness)</li>
                <li>BECOMING is expected (everyone's still forming)</li>
              </ul>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>School leadership</li>
                <li>Entire staff communities</li>
                <li>Parent engagement</li>
                <li>Community partnerships</li>
                <li>District and policy level (for real scale)</li>
              </ul>
            </div>
          </div>

          {/* Type 8: Appearance-Based Bullying */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 8: Appearance-Based Bullying</h3>

            <div className={styles.collapseBox}>
              <strong>What it is:</strong> Weaponizing physical characteristics — weight, skin conditions, facial features, height, disability visibility,
              hair texture, clothing. Cultural beauty standards become enforcement mechanisms.
            </div>

            <div className={styles.threadSection}>
              <h4>Thread dynamics:</h4>
              <p><strong>EMBODIMENT</strong> is the primary site of attack:</p>
              <ul>
                <li>The target is being pushed toward "Think + Go" — escape from the body, dissociation from flesh</li>
                <li>The message received: "Your body is wrong. Leave it. Hide it. Fix it."</li>
              </ul>

              <p><strong>MEMORY</strong> — cultural standards are inherited stories:</p>
              <ul>
                <li>"Given + Told" — beauty standards that <em>tell</em> both bully and target what bodies are acceptable</li>
                <li>These aren't invented by the child — they're absorbed from everywhere</li>
                <li>The bully is often enforcing a story they're also terrorized by</li>
              </ul>

              <p><strong>PRESENCE</strong> — "Between" becomes dangerous:</p>
              <ul>
                <li>Being seen becomes threat rather than gift</li>
                <li>The target learns to avoid visibility, shrink, hide</li>
              </ul>

              <p><strong>THRESHOLD</strong> — who belongs in "acceptable bodies":</p>
              <ul>
                <li>The bully is patrolling the boundary</li>
                <li>"You don't belong in the category of normal/attractive/acceptable"</li>
              </ul>

              <p className={styles.hiddenTension}>
                <strong>The hidden tension in the bully:</strong> Often, the appearance-based bully is <em>also</em> terrified about their own body.
                They enforce standards they fear failing to meet. The cruelty is prophylactic — "If I point at them, no one will look at me."
              </p>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork:</h4>

              <p><strong>For the target — EMBODIMENT recovery:</strong></p>
              <blockquote>
                "Your body has been made into a problem. That's what the culture taught everyone, including the person who said that.
                Can you feel both? Your body IS your home AND the world has told you lies about it. What does your body know that they can't see?"
              </blockquote>
              <p className={styles.workNote}>The work is reclaiming "Feel + Stay" — staying present with the body without being destroyed by the messages about it.</p>

              <p><strong>For the bully — surfacing the hidden fear:</strong></p>
              <blockquote>
                "You notice things about other people's bodies. What happens in YOUR body when you say those things?
                Is there something you're afraid someone will notice about you?"
              </blockquote>

              <p>This is MEMORY work too:</p>
              <blockquote>
                "Where did you learn which bodies are okay and which aren't? Who taught you that? Is that a story you want to keep telling?"
              </blockquote>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>Counselors with body image training</li>
                <li>Health teachers who can address cultural beauty standards</li>
                <li>S.A.F.E. can work here when the bully's own tension is accessible</li>
                <li>For targets: often needs therapeutic support, possibly nutritional/medical team if disordered eating emerges</li>
              </ul>

              <p className={styles.institutionalNote}>
                <strong>Systemic dimension:</strong> This is heavily culturally reinforced. Individual intervention helps, but the child goes back to a world
                saturated with body-shaming messages. Schools can examine their own practices (fitness testing humiliation, dress codes that target certain bodies),
                create counter-narratives in health curriculum, and address staff language about bodies.
              </p>
            </div>
          </div>

          {/* Type 9: Digital/Cyberbullying */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 9: Digital/Cyberbullying</h3>

            <div className={styles.collapseBox}>
              <strong>What it is:</strong> Bullying through digital platforms — social media, texting, gaming, anonymous apps. Qualitatively different from in-person bullying.
              <ul>
                <li><strong>Disembodiment:</strong> No face-to-face feedback, no body reading the other body's pain</li>
                <li><strong>Permanence:</strong> Screenshots live forever, harm compounds over time</li>
                <li><strong>Amplification:</strong> Audiences can be massive, humiliation is scalable</li>
                <li><strong>Intrusion:</strong> Follows the target home, into bed, no escape geography</li>
              </ul>
            </div>

            <div className={styles.threadSection}>
              <h4>Thread dynamics:</h4>

              <p><strong>EMBODIMENT</strong> is fundamentally disrupted:</p>
              <ul>
                <li>The bully cannot feel the other's pain in their own body</li>
                <li>Mirror neurons don't fire when you're typing on a screen</li>
                <li>"Feel + Stay" is impossible when there's no body to stay with</li>
                <li>The target experiences the attack <em>in</em> their body while the bully experiences no embodied consequence</li>
              </ul>
              <p className={styles.coreProblem}>
                <strong>The core pathology:</strong> Digital mediation severs the body-to-body feedback loop that would normally create tension.
              </p>

              <p><strong>PRESENCE</strong> operates in distorted form:</p>
              <ul>
                <li>"Between" without physical between — you're between without being <em>with</em></li>
                <li>PRESENCE becomes surveillance rather than encounter</li>
              </ul>

              <p><strong>PAUSE</strong> is bypassed:</p>
              <ul>
                <li>The speed of digital interaction compresses reflection time</li>
                <li>Send happens before PAUSE can intervene</li>
                <li>The "Not Yet vs. Now" tension collapses into immediate Now</li>
              </ul>

              <p><strong>CONSENT</strong> is complexly violated:</p>
              <ul>
                <li>Content shared without consent</li>
                <li>Audience participation without the target's choice</li>
                <li>The target's image/words used in ways they didn't agree to</li>
              </ul>

              <p><strong>MEMORY</strong> becomes permanent record:</p>
              <ul>
                <li>"Given" in a new sense — the target is given a permanent digital history they didn't choose</li>
                <li>Screenshots become the "Told" story that follows them</li>
              </ul>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork:</h4>

              <p><strong>For the bully — artificially creating the embodiment bridge:</strong></p>
              <blockquote>
                "When you typed that, where were you? What was your body doing? Now imagine them reading it. Imagine their face. Imagine their body.
                Can you let yourself feel what they might have felt? Can you stay with that?"
              </blockquote>

              <p>The work is rebuilding the severed EMBODIMENT connection:</p>
              <blockquote>
                "You wrote words about a person. That person has a body that felt those words. What happens in YOUR body when you really let that in?"
              </blockquote>

              <p><strong>PAUSE intervention:</strong></p>
              <blockquote>
                "Before you send something, can you wait? Not because it's wrong — but because your best self needs time to show up.
                What would you want someone to do before sending something about you?"
              </blockquote>

              <p><strong>For the target — PRESENCE and MEMORY work:</strong></p>
              <blockquote>
                "This thing follows you everywhere. It's in your phone, your room, your bed. Can you find places where it doesn't reach?
                Can you remember who you are when you're not being watched?"
              </blockquote>

              <p>And the permanence:</p>
              <blockquote>
                "Screenshots exist. That's real. AND you are not a screenshot. You are becoming. What they captured was a moment.
                You are not a moment. How do you hold both — that this exists AND that it doesn't define you?"
              </blockquote>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>Teachers who understand digital platforms</li>
                <li>Counselors with cyberbullying training</li>
                <li>Peer mediation with digital literacy component</li>
                <li>S.A.F.E. can work but needs the embodiment bridge explicitly built</li>
              </ul>

              <p className={styles.institutionalNote}>
                <strong>The systemic challenge:</strong> Schools have limited reach into digital spaces that exist outside school hours on personal devices.
                Interventions include: digital citizenship curriculum, parent education about platform dynamics, restorative practices that bring digital harm
                back into embodied face-to-face accountability, and clear policies about school response to off-campus digital behavior.
              </p>
            </div>
          </div>

          {/* Type 10: Relational Aggression */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 10: Relational Aggression</h3>

            <div className={styles.collapseBox}>
              <strong>What it is:</strong> Sophisticated social manipulation — rumor-spreading, strategic exclusion, alliance-shifting,
              social isolation, friendship weaponization. Harm through relationship rather than through fist or word.
              <ul>
                <li>Often invisible to adults (looks like "friend drama")</li>
                <li>Plausible deniability ("I just don't want to be her friend, that's not bullying")</li>
                <li>Extremely damaging because it attacks the need for belonging</li>
                <li>Sophisticated cognitive skill required — this is not impulsive</li>
              </ul>
            </div>

            <div className={styles.threadSection}>
              <h4>Thread dynamics:</h4>

              <p><strong>THRESHOLD</strong> is the primary weapon:</p>
              <ul>
                <li>"Who belongs?" is weaponized</li>
                <li>The line is moved constantly — you're in, you're out, you're conditionally in</li>
                <li>Belonging becomes contingent on compliance</li>
              </ul>

              <p><strong>CONSENT</strong> is violated through coercion:</p>
              <ul>
                <li>"If you want to be in the group, you'll exclude her too"</li>
                <li>Consent is extracted through social threat</li>
                <li>"Self + No" becomes too costly to exercise</li>
              </ul>

              <p><strong>PRESENCE</strong> is strategically manipulated:</p>
              <ul>
                <li>"Between" offered and withdrawn</li>
                <li>Being seen, then being invisible</li>
                <li>The power comes from controlling access to presence</li>
              </ul>

              <p><strong>MEMORY</strong> is weaponized:</p>
              <ul>
                <li>Secrets shared in trust become ammunition</li>
                <li>Stories are crafted and spread strategically</li>
                <li>The narrative about the target is controlled by others</li>
              </ul>

              <p className={styles.sophisticationNote}>
                <strong>The sophistication problem:</strong> Unlike impulsive physical aggression, relational aggression requires theory of mind,
                social intelligence, and long-term planning. The child doing this is cognitively sophisticated. They often know exactly what they're doing.
                This means they're often also capable of sophisticated rationalization: "I just don't want to be her friend. You can't make me be friends with someone."
              </p>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork — penetrating the rationalization:</h4>

              <p><strong>THRESHOLD work:</strong></p>
              <blockquote>
                "You get to choose your friends. That's true — that's CONSENT. AND you're not just choosing — you're organizing exclusion.
                You're building a wall. What does it feel like to have that power? What happens in you when she tries to be included and can't?"
              </blockquote>

              <p><strong>CONSENT work (their own surrendered consent):</strong></p>
              <blockquote>
                "The group goes along with you. Do they want to? Or are they afraid of being next?
                Have you created a space where your friends can really say no to you?"
              </blockquote>

              <p><strong>MEMORY work:</strong></p>
              <blockquote>
                "You're telling a story about her. Once people believe it, that story follows her. Is it the whole truth?
                What parts are you leaving out? What story do you want told about YOU?"
              </blockquote>

              <p><strong>PRESENCE work:</strong></p>
              <blockquote>
                "When you're ignoring her — when she walks up and you all turn away — what do you see on her face?
                Can you let yourself see it? What does it feel like to have the power to make someone invisible?"
              </blockquote>

              <p className={styles.hiddenFear}>
                <strong>The hidden tension:</strong> Relational aggressors are often themselves afraid. The power they wield is often defensive —
                "If I'm in control of belonging, I can't be excluded." The Threadwork involves finding that fear:
                <em>"What would happen if you weren't in charge? If someone did to you what you're doing to her? Is that what you're afraid of?"</em>
              </p>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>Counselors skilled in group dynamics</li>
                <li>Teachers who can see the invisible patterns</li>
                <li>S.A.F.E. can work but requires getting past the rationalization</li>
                <li>Often needs family involvement (relational aggression is sometimes modeled at home)</li>
              </ul>

              <p className={styles.institutionalNote}>
                <strong>The adult visibility problem:</strong> Relational aggression is often invisible to adults because it looks like normal social friction,
                the aggressors are often "good students" who perform well for adults, the harm is psychological not physical, and the target may not report
                for fear of making it worse. Schools need systems to surface what adults typically miss.
              </p>
            </div>
          </div>

          {/* Type 11: Reactive Bullying (Victim-to-Aggressor Cycle) */}
          <div className={styles.typeCard}>
            <h3 className={styles.typeTitle}>Type 11: Reactive Bullying (Victim-to-Aggressor Cycle)</h3>

            <div className={styles.collapseBox}>
              <strong>What it is:</strong> The specific dynamic where a bullied child becomes a bully — not just general trauma-driven behavior,
              but the cyclical transformation of victim into perpetrator.
              <p className={styles.distinctionNote}>
                <strong>How this differs from Type 4:</strong> Type 4 is broader — any trauma creating bullying behavior.
                Type 11 is specifically about the <em>cycle</em> — the transmutation of received harm into delivered harm.
                The child isn't just acting out pain; they're specifically recreating the dynamic they experienced, now from the other position.
              </p>
            </div>

            <div className={styles.threadSection}>
              <h4>Thread dynamics:</h4>

              <p><strong>BECOMING</strong> is central:</p>
              <ul>
                <li>The child is stuck in "Same + Return" — the stuck loop</li>
                <li>They return to the same dynamic (bullying) but now occupy a different role</li>
                <li>This isn't transformation — it's rotation within the same pattern</li>
              </ul>

              <p><strong>MEMORY</strong> — the harm is internalized:</p>
              <ul>
                <li>"Given + Told" — the story of "people hurt each other" has become their operating system</li>
                <li>The original victimization <em>tells</em> them who they are and how the world works</li>
                <li>They're not choosing to harm; they're living out what they were taught</li>
              </ul>

              <p><strong>EMBODIMENT</strong> — the body remembers:</p>
              <ul>
                <li>The original harm is stored in the body</li>
                <li>When triggered, the body responds with fight (rather than freeze or flight)</li>
                <li>The new aggression is an embodied attempt to discharge what was received</li>
              </ul>

              <p className={styles.profoundTension}>
                <strong>The profound tension:</strong> This child contains both sides of the dynamic <em>simultaneously</em>.
                They know what it feels like to be hurt. They're choosing to create that feeling in someone else.
                <em>They hurt others to not feel their own pain. But each time they hurt, they also know exactly what they're doing because they've received it.</em>
              </p>
            </div>

            <div className={styles.threadWork}>
              <h4>Threadwork — holding the child's doubleness:</h4>

              <p><strong>MEMORY work first:</strong></p>
              <blockquote>
                "Something happened to you. You know what it feels like to be on the other side. That's in you.
                Can we talk about what happened before you started doing this to others?"
              </blockquote>

              <p><strong>BECOMING work — naming the stuck loop:</strong></p>
              <blockquote>
                "You were hurt. Now you're hurting. It feels like power, but look — you're doing the same thing that was done to you.
                Is that who you want to become? Someone who passes it on? Or can the cycle end with you?"
              </blockquote>
              <p className={styles.workNote}>This is the "Different + Forward" possibility — transformation, not rotation.</p>

              <p><strong>EMBODIMENT work:</strong></p>
              <blockquote>
                "When you're about to hurt someone — what happens in your body? Does it feel like something you HAVE to do?
                Like something builds up and needs to get out? Let's find another way to let it out.
                Your body learned something that's not true — that the only way to feel powerful is to make someone else feel small."
              </blockquote>

              <p className={styles.redemptionPossibility}>
                <strong>The redemption possibility:</strong> This type of bullying actually contains the seeds of its own transformation.
                The child <em>knows</em>. They have the empathy circuit — it's just being used in reverse. The work is flipping the circuit:
                <blockquote>
                  "You know exactly what they're feeling right now. Because you've felt it. That knowing can be used two ways.
                  You can use it to hurt them worse. Or you can use it to stop. Because you know something the other bullies don't — you know what it costs."
                </blockquote>
              </p>
            </div>

            <div className={styles.whoDoesThis}>
              <h4>Who does this work:</h4>
              <ul>
                <li>Therapists (this is clinical-level work)</li>
                <li>Counselors with trauma training</li>
                <li>The cycle often needs to be interrupted externally before inner work can happen</li>
                <li>May require intervention in the system that originally victimized the child</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Bigger Picture */}
      <section className={`${styles.biggerPicture} section-lg`}>
        <div className="container">
          <h2>The Bigger Picture</h2>

          <div className={styles.comparisonTable}>
            <table>
              <thead>
                <tr>
                  <th>Bullying Type</th>
                  <th>Thread Application</th>
                  <th>Mode of Work</th>
                  <th>Who Does It</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Status/Play</td>
                  <td>Surface existing tension</td>
                  <td>Standard S.A.F.E.</td>
                  <td>Teachers, all staff</td>
                </tr>
                <tr>
                  <td>Ideological</td>
                  <td>Re-open collapsed UNCERTAINTY and MEMORY</td>
                  <td>Long-term, relationship-based</td>
                  <td>Counselors, mentors, exposure</td>
                </tr>
                <tr>
                  <td>Religious</td>
                  <td>Work within CONSENT, leverage internal resources</td>
                  <td>Skilled dialogue, interfaith</td>
                  <td>Counselors, religious leaders</td>
                </tr>
                <tr>
                  <td>Trauma</td>
                  <td>Sequence through EMBODIMENT → MEMORY → BECOMING</td>
                  <td>Therapeutic, then S.A.F.E.</td>
                  <td>Therapists, trained counselors</td>
                </tr>
                <tr>
                  <td>Neurodivergent</td>
                  <td>Adapted pathways to same Threads</td>
                  <td>Explicit teaching, scaffolding</td>
                  <td>SpEd staff, adapted S.A.F.E.</td>
                </tr>
                <tr>
                  <td>Pack</td>
                  <td>Recover surrendered CONSENT</td>
                  <td>S.A.F.E. works well here</td>
                  <td>Teachers, counselors</td>
                </tr>
                <tr>
                  <td>Systemic</td>
                  <td>All Threads at culture level</td>
                  <td>School-wide transformation</td>
                  <td>Leadership, entire community</td>
                </tr>
                <tr>
                  <td>Appearance-based</td>
                  <td>EMBODIMENT, MEMORY (beauty standards), THRESHOLD</td>
                  <td>Body image + cultural work</td>
                  <td>Counselors, health teachers</td>
                </tr>
                <tr>
                  <td>Digital/Cyber</td>
                  <td>EMBODIMENT (severed), PAUSE (bypassed), MEMORY (permanent)</td>
                  <td>Rebuild embodiment bridge</td>
                  <td>Digital-literate staff</td>
                </tr>
                <tr>
                  <td>Relational</td>
                  <td>THRESHOLD (weaponized), CONSENT, PRESENCE, MEMORY</td>
                  <td>Penetrate rationalization</td>
                  <td>Counselors, group dynamics</td>
                </tr>
                <tr>
                  <td>Reactive (cycle)</td>
                  <td>BECOMING (stuck loop), MEMORY, EMBODIMENT</td>
                  <td>Interrupt cycle, flip empathy</td>
                  <td>Therapists, trauma specialists</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className={`${styles.whatThisMeans} section-lg`}>
        <div className="container">
          <h2>What This Means for the Framework</h2>

          <div className={styles.frameworkBox}>
            <p className={styles.coreStatement}>
              <strong>Threads is the universal architecture.</strong> It applies to all of these.
            </p>

            <p className={styles.coreStatement}>
              <strong>S.A.F.E. is a rapid-deployment protocol</strong> optimized for cases where tension is <em>present and accessible</em> —
              probably 60-70% of school incidents.
            </p>
          </div>

          <div className={styles.protocolGrid}>
            <div className={styles.protocolCard}>
              <h3>S.A.F.E.-Adjacent Protocols</h3>
              <p>For ideological/religious cases — same principles, different questions, longer timeline, different personnel</p>
            </div>

            <div className={styles.protocolCard}>
              <h3>S.A.F.E.-After-Therapy</h3>
              <p>For trauma cases — the protocol becomes available once capacity is built</p>
            </div>

            <div className={styles.protocolCard}>
              <h3>S.A.F.E.-Adapted</h3>
              <p>For neurodivergent cases — explicit pathways to universal tensions</p>
            </div>

            <div className={styles.protocolCard}>
              <h3>S.A.F.E.-At-Scale</h3>
              <p>For systemic cases — school-wide language and culture transformation</p>
            </div>
          </div>

          <p className={styles.finalStatement}>
            The Threads framework holds it all. S.A.F.E. is one deployment vehicle. But there's room for others —
            different vehicles for different terrain, all powered by the same engine.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhenBullyingIsntPlay;
