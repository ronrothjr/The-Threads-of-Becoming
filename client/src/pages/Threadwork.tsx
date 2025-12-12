import { Link } from 'react-router-dom';
import styles from './Article.module.css';

export default function Threadwork() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>THREADWORK</h1>
        <p className={styles.subtitle}>
          A Threads of Becoming Protocol
        </p>
        <p style={{ fontSize: 'var(--text-xl)', marginTop: '1rem' }}>
          The Signature 20-Minute Intervention
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <p>
            A complete, scripted conversation for identifying tensions, preventing collapse,
            and holding space for emergence.
          </p>
          <p><strong>Total Time: 18-25 minutes</strong></p>
          <p style={{ fontSize: 'var(--text-base)', fontStyle: 'italic', marginTop: '2rem' }}>
            The Threads of Becoming<br />
            Creative Commons Attribution-ShareAlike 4.0
          </p>
        </div>

        {/* Overview */}
        <div className={styles.section}>
          <h2>Overview</h2>
          <p>
            Threadwork is the signature intervention of the Threads of Becoming framework. It is a complete,
            repeatable conversation structure that any practitioner can use to help individuals, couples, teams,
            or groups identify the creative tension alive in their situation and hold it long enough for something
            new to emerge.
          </p>

          <h3>What It Does</h3>
          <ul>
            <li>Identifies which of the seven threads is most activated</li>
            <li>Names the poles creating tension</li>
            <li>Recognizes and gently corrects collapse</li>
            <li>Holds space for creative tension</li>
            <li>Allows emergence of insight, clarity, or next steps</li>
          </ul>

          <h3>The Four Phases</h3>
          <div style={{ overflowX: 'auto', margin: '2rem 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(22, 160, 133, 0.1)', borderBottom: '2px solid var(--color-teal)' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--color-navy)' }}>Phase</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--color-navy)' }}>Time</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--color-navy)' }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-light-gray)' }}>
                  <td style={{ padding: '1rem' }}><strong>1. ARRIVE</strong></td>
                  <td style={{ padding: '1rem' }}>2-3 min</td>
                  <td style={{ padding: '1rem' }}>Establish mutual presence; open the space</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-light-gray)' }}>
                  <td style={{ padding: '1rem' }}><strong>2. NAME</strong></td>
                  <td style={{ padding: '1rem' }}>4-6 min</td>
                  <td style={{ padding: '1rem' }}>Identify the thread; name both poles; check for collapse</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-light-gray)' }}>
                  <td style={{ padding: '1rem' }}><strong>3. HOLD</strong></td>
                  <td style={{ padding: '1rem' }}>8-12 min</td>
                  <td style={{ padding: '1rem' }}>Hold creative tension; validate both poles; watch for emergence</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem' }}><strong>4. INTEGRATE</strong></td>
                  <td style={{ padding: '1rem' }}>3-4 min</td>
                  <td style={{ padding: '1rem' }}>Name what emerged; identify next step; close with presence</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.note}>
            <p><strong>BEFORE YOU BEGIN</strong></p>
            <p>
              Center yourself. Ask: "Am I trying to fix this, or am I willing to hold space for what wants to emerge?"
              If your energy is toward fixing, pause until you can release the outcome. Your capacity to hold tension
              is the container that makes this work possible.
            </p>
          </div>
        </div>

        {/* Phase 1: ARRIVE */}
        <div className={styles.section}>
          <h2>PHASE 1: ARRIVE • 2-3 minutes</h2>

          <h3>Purpose</h3>
          <p>
            Establish mutual presence before doing any work. Create the container. This phase is often rushed—resist
            that impulse. Arrival is its own work.
          </p>

          <h3>The Script</h3>

          <div className={styles.example}>
            <h3>Step 1: Ground yourself (30 seconds)</h3>
            <p>
              Before speaking, take one conscious breath. Feel your feet on the floor. Settle into your body.
              Model the presence you're inviting.
            </p>
          </div>

          <div className={styles.example}>
            <h3>Step 2: Invite arrival (30-60 seconds)</h3>
            <p>
              <strong>Facilitator:</strong> "Before we dive in, let's take a moment to arrive. Would you be
              willing to take one breath with me?"
            </p>
            <p>[Breathe together]</p>
            <p>
              <strong>Facilitator:</strong> "Good. Now—how are you actually doing right now? Not the presenting
              issue yet. Just: how are you?"
            </p>
          </div>

          <div className={styles.example}>
            <h3>Step 3: Open the space (60-90 seconds)</h3>
            <p>
              <strong>Facilitator:</strong> "What's alive for you right now? What brought you here today?"
            </p>
            <p>
              [Listen without interrupting. Let them speak. You're listening for which thread might be activated,
              but don't rush to identify it yet.]
            </p>
          </div>

          <div className={styles.note}>
            <p><strong>WHAT YOU'RE LISTENING FOR</strong></p>
            <p>
              As they speak, notice: What seed question seems to be underneath their words? Are they asking "Where
              am I…?" (Presence), "What may I…?" (Consent), "Why do I…?" (Memory), "When can I…?" (Pause), "How
              does my body know?" (Embodiment), "What is the Mystery unveiling?" (Uncertainty), or "Who am I becoming
              now?" (Becoming)? Don't force it. Let the thread reveal itself.
            </p>
          </div>

          <h3>Signs That Arrival Is Complete</h3>
          <ul>
            <li>Their breathing has slowed</li>
            <li>Eye contact feels natural, not forced</li>
            <li>They've said something true (not just polite)</li>
            <li>You feel genuinely present to each other</li>
          </ul>

          <h3>Transition to Phase 2</h3>
          <div className={styles.example}>
            <p>
              <strong>Facilitator:</strong> "Thank you for sharing that. I'm hearing something important here.
              Can we stay with it for a few minutes?"
            </p>
          </div>
        </div>

        {/* Phase 2: NAME */}
        <div className={styles.section}>
          <h2>PHASE 2: NAME • 4-6 minutes</h2>

          <h3>Purpose</h3>
          <p>
            Identify which thread is most alive. Name the poles creating tension. Check for collapse. This is
            diagnostic work—you're mapping the territory before holding the tension.
          </p>

          <h3>The Script</h3>

          <div className={styles.example}>
            <h3>Step 1: Name the thread (60-90 seconds)</h3>
            <p>
              Based on what you heard in Phase 1, offer a tentative identification of the thread. Use soft
              language—you're checking, not declaring.
            </p>
          </div>

          <p><strong>If you hear PRESENCE signals:</strong></p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "It sounds like there's something here about presence—about who's really showing up, or how you're
            showing up for each other. Does that land?"
          </p>

          <p><strong>If you hear CONSENT signals:</strong></p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "I'm hearing something about permission—about whether you feel like you have a real choice here,
            or whether something is being decided for you. Is that right?"
          </p>

          <p><strong>If you hear MEMORY signals:</strong></p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "There seems to be a story from before that's shaping how this feels now. Is there something from
            the past that's alive in this moment?"
          </p>

          <p><strong>If you hear PAUSE signals:</strong></p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "I'm noticing something about timing—about whether to move or wait, whether there's enough or you
            need more. Does that resonate?"
          </p>

          <p><strong>If you hear EMBODIMENT signals:</strong></p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "Let me check something. Right now, can you feel your body? Not think about it—actually feel it?
            What's happening there?"
          </p>

          <p><strong>If you hear UNCERTAINTY signals:</strong></p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "There's something here about not-knowing—about what you can and can't be certain of. How are you
            relating to that uncertainty?"
          </p>

          <p><strong>If you hear BECOMING signals:</strong></p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "It sounds like you're in a threshold—something about who you're becoming, or whether you've actually
            changed. Is that what's alive?"
          </p>

          <div className={styles.example}>
            <h3>Step 2: Name the poles (60-90 seconds)</h3>
            <p>Once they confirm the thread, name both poles. Make it concrete to their situation.</p>
            <p>
              <strong>Facilitator:</strong> "So there are two pulls here. On one side, [Pole A]—[describe how
              it shows up for them]. On the other side, [Pole B]—[describe how it shows up for them]. Do I have
              that right?"
            </p>
            <p><em>Example (PRESENCE thread):</em></p>
            <p>
              "So there are two pulls here. On one side, you need some solitude—space to think, to be with yourself.
              On the other side, you want connection—to feel met, to not be alone in this. Both of these are real.
              Do I have that right?"
            </p>
          </div>

          <div className={styles.example}>
            <h3>Step 3: Check for collapse (60-90 seconds)</h3>
            <p>Now assess: Are they holding tension, or have they collapsed into one pole?</p>
            <p>
              <strong>Facilitator:</strong> "As you sit with both of these—[Pole A] and [Pole B]—where do you
              feel most pulled? Is one of these feeling more like 'the answer' right now?"
            </p>
            <p><strong>If they've collapsed:</strong></p>
            <p>
              <strong>Facilitator:</strong> "I notice you've landed pretty firmly in [Pole]. And there's real
              wisdom there—it's not wrong. But I'm curious about [Other Pole]. What happens if we give it a
              little space too?"
            </p>
          </div>

          <div className={styles.note}>
            <p><strong>COLLAPSE RECOGNITION</strong></p>
            <p>
              Signs of collapse: Rigidity ("This is just how it is"), either/or language ("I have to choose"),
              urgency to resolve rather than explore, defending one pole rather than holding both, body armoring
              (tension, bracing). If you see these, name the collapse gently before moving to Phase 3.
            </p>
          </div>
        </div>

        {/* Phase 3: HOLD */}
        <div className={styles.section}>
          <h2>PHASE 3: HOLD • 8-12 minutes</h2>

          <h3>Purpose</h3>
          <p>
            This is the core work. Help them stay in creative tension without collapsing toward either pole.
            Validate both sides. Watch for emergence—something new trying to arise that neither pole could produce alone.
          </p>

          <div className={styles.note}>
            <p><strong>THE FUNDAMENTAL MOVE</strong></p>
            <p>
              Your job in this phase is NOT to resolve the tension. It is to hold the space while they experience
              the tension fully. Resist the urge to offer solutions. Trust that something will emerge from the
              holding itself.
            </p>
          </div>

          <h3>The Script</h3>

          <div className={styles.example}>
            <h3>Step 1: Validate both poles (90 seconds)</h3>
            <p>
              <strong>Facilitator:</strong> "Let me say something important: Both of these poles carry truth.
              [Pole A] matters because [why it matters]. [Pole B] matters because [why it matters]. Neither is
              wrong. The tension between them isn't a problem to solve—it's where something new can emerge."
            </p>
          </div>

          <div className={styles.example}>
            <h3>Step 2: Deepen with diagnostic questions (3-5 minutes)</h3>
            <p>
              Use the diagnostic questions for the activated thread. These help them stay in exploration rather
              than rushing to resolution.
            </p>
          </div>

          <p><strong>PRESENCE questions:</strong></p>
          <ul>
            <li>"What's the quality of presence right now—yours, and between us?"</li>
            <li>"What would 'enough' presence look like in this situation?"</li>
            <li>"Where is your attention actually—here, elsewhere, or split?"</li>
          </ul>

          <p><strong>CONSENT questions:</strong></p>
          <ul>
            <li>"Do you feel like you have a genuine choice here—where 'no' is safe to say?"</li>
            <li>"Whose sovereignty feels at stake right now?"</li>
            <li>"If you said yes, would it be a gift freely given—or a surrender?"</li>
          </ul>

          <p><strong>MEMORY questions:</strong></p>
          <ul>
            <li>"Where did this story come from? Did you choose it, or did it choose you?"</li>
            <li>"Right now, are you telling your story—or is your story telling you?"</li>
            <li>"Does this story still fit who you're becoming?"</li>
          </ul>

          <p><strong>PAUSE questions:</strong></p>
          <ul>
            <li>"Is this a 'now' moment or a 'not yet' moment? What's the evidence?"</li>
            <li>"Is the urgency from the situation—or from inside you?"</li>
            <li>"Do you have enough to act, or are you grasping because 'enough' feels unsafe?"</li>
          </ul>

          <p><strong>EMBODIMENT questions:</strong></p>
          <ul>
            <li>"Right now, can you feel your body? What's happening there?"</li>
            <li>"If your body had a vote in this decision, what would it say?"</li>
            <li>"Where in your body do you feel this tension?"</li>
          </ul>

          <p><strong>UNCERTAINTY questions:</strong></p>
          <ul>
            <li>"What's your relationship with not-knowing right now?"</li>
            <li>"Is this uncertainty a threat or an invitation?"</li>
            <li>"What are you trying to control that might not be controllable?"</li>
          </ul>

          <p><strong>BECOMING questions:</strong></p>
          <ul>
            <li>"Who were you before? Who are you now? Who is trying to emerge?"</li>
            <li>"Does this feel like going in circles—or spiraling?"</li>
            <li>"What do you want to carry forward? What's ready to release?"</li>
          </ul>

          <h3>Step 3: Watch for and correct collapse (ongoing)</h3>
          <p>Throughout this phase, watch for collapse. When you see it, gently redirect:</p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
              "I notice we've drifted toward [Pole]. That's natural—it feels safer there. But let's come back
              to the tension. What does [Other Pole] want to say?"
            </li>
            <li style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
              "You're working hard to find the answer. What if we stay in the question a little longer?"
            </li>
            <li style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
              "I see you're ready to decide. Before we do—is there anything we haven't honored yet?"
            </li>
          </ul>

          <h3>Step 4: Watch for emergence (ongoing)</h3>
          <p>Emergence often shows up as:</p>
          <ul>
            <li>A shift in energy (relief, opening, tears, laughter)</li>
            <li>New language they haven't used before</li>
            <li>A synthesis that honors both poles</li>
            <li>A question that reframes everything</li>
            <li>A sense of "oh"—recognition of something they already knew</li>
          </ul>

          <p><strong>When you see emergence:</strong></p>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
              "Something just shifted. Can you name what that is?"
            </li>
            <li style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
              "I saw something move across your face. What's happening?"
            </li>
            <li style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
              "That's new. Say more about that."
            </li>
          </ul>
        </div>

        {/* Phase 4: INTEGRATE */}
        <div className={styles.section}>
          <h2>PHASE 4: INTEGRATE • 3-4 minutes</h2>

          <h3>Purpose</h3>
          <p>
            Name what emerged. Don't force resolution—partial emergence is real. Identify the smallest next step
            (if any). Close with presence, completing the container.
          </p>

          <h3>The Script</h3>

          <div className={styles.example}>
            <h3>Step 1: Name what emerged (60-90 seconds)</h3>
            <p>
              <strong>Facilitator:</strong> "Let's pause and name what's happened. What's different now than
              when we started?"
            </p>
            <p>[Let them speak first. They name their own emergence.]</p>
            <p><strong>If they struggle to name it:</strong></p>
            <p>
              <strong>Facilitator:</strong> "Here's what I saw: [name the shift you observed]. Does that match
              your experience?"
            </p>
          </div>

          <div className={styles.example}>
            <h3>Step 2: Honor partial emergence (30-60 seconds)</h3>
            <p>If the tension isn't fully resolved (it often isn't), validate that:</p>
            <p>
              <strong>Facilitator:</strong> "This doesn't have to be complete. The tension is still alive—and
              now you can hold it more consciously. That's real progress."
            </p>
          </div>

          <div className={styles.example}>
            <h3>Step 3: Identify next step (60-90 seconds)</h3>
            <p>Look for the smallest action that honors what emerged. Not a solution—a step.</p>
            <p>
              <strong>Facilitator:</strong> "Given what's emerged, is there one small thing—a conversation, a
              choice, a practice—that feels like a natural next step?"
            </p>
            <p><strong>If no clear next step:</strong></p>
            <p>
              <strong>Facilitator:</strong> "Sometimes the next step is just to sit with this. Would you be
              willing to notice how this tension shows up over the next few days, without trying to fix it?"
            </p>
          </div>

          <div className={styles.example}>
            <h3>Step 4: Close with presence (30-60 seconds)</h3>
            <p>Return to the beginning—arrive together before departing.</p>
            <p><strong>Facilitator:</strong> "Before we close, let's take one more breath together."</p>
            <p>[Breathe together]</p>
            <p>
              <strong>Facilitator:</strong> "How are you doing now? Different than when we started?"
            </p>
            <p>
              [Acknowledge their response, thank them for their willingness to stay in the tension, close.]
            </p>
            <p>
              <strong>Facilitator:</strong> "Thank you for being willing to hold this with me. The tension doesn't
              go away, but now you can work with it differently."
            </p>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className={styles.section}>
          <h2>Troubleshooting</h2>

          <h3>When You Can't Identify the Thread</h3>
          <p>Start with EMBODIMENT. The body often knows which thread is alive before the mind does.</p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "Let's try something. Close your eyes for a moment. Where do you feel this situation in your body?
            What sensation is there?"
          </p>
          <p>
            The body sensation often points to the thread: tightness in the throat (Consent—swallowed no), heaviness
            in shoulders (Memory—carrying what wasn't yours), restlessness (Pause—urgency), numbness
            (Embodiment—fled), etc.
          </p>

          <h3>When They Keep Collapsing</h3>
          <p>Don't fight the collapse. Name it as information:</p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "I notice you keep returning to [Pole]. There's something important there—something that feels safer
            or more true. Can you tell me what that pole protects you from?"
          </p>
          <p>
            This often reveals the fear that makes the other pole feel threatening, which is itself valuable
            diagnostic information.
          </p>

          <h3>When Nothing Seems to Be Emerging</h3>
          <p>Slow down. Sometimes emergence needs more time, or a different thread.</p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "We've been exploring [Thread], and I'm wondering if there's something underneath it—another layer.
            What else is true here that we haven't named?"
          </p>

          <h3>When They Want You to Solve It</h3>
          <p>Resist the pull. Stay in your role:</p>
          <p style={{ fontStyle: 'italic', marginLeft: '2rem' }}>
            "I don't have the answer to this—and I'm not sure there is 'an answer.' What I can do is help you
            stay in the question long enough to find your own way through. Is that okay?"
          </p>
        </div>

        {/* Link to GitHub */}
        <div className={styles.section}>
          <h2>Full Protocol Document</h2>
          <p>
            For the complete Threadwork protocol including quick reference cards and emergency phrases, visit:
          </p>
          <p>
            <a
              href="https://github.com/ronrothjr/The-Threads-of-Becoming/blob/main/threadwork.md"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-teal)', fontWeight: 'var(--font-semibold)' }}
            >
              View Threadwork Protocol on GitHub →
            </a>
          </p>
        </div>
      </section>

      <div className={styles.backToTop}>
        <a href="#top">↑ Back to Top</a>
      </div>
    </div>
  );
}
