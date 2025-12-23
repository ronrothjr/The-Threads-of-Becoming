import React from 'react';
import styles from './Reckon.module.css';

const Reckon: React.FC = () => {
  return (
    <div className={styles.reckonPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>RECKONing the Colonial Moment: Threads for Racial Justice</h1>
        <h2 className={styles.subtitle}>
          A Framework for Civilization-Scale Transformation
        </h2>
      </section>

      {/* Paradigm Shift Section */}
      <section className={`${styles.paradigmShift} section-lg`}>
        <div className="container">
          <h2>The Paradigm Shift</h2>

          <div className={styles.notStatements}>
            <p className={styles.notStatement}><strong>It's not:</strong> "Racism is individual prejudice that bad people have."</p>
            <p className={styles.notStatement}><strong>It's not:</strong> "Racism is a system that makes everyone either oppressor or oppressed."</p>
            <p className={styles.notStatement}><strong>It's not:</strong> "We just need to understand each other better."</p>
            <p className={styles.notStatement}><strong>It's not:</strong> "The answer is more education / diversity training / representation."</p>
          </div>

          <div className={styles.isStatement}>
            <h3>It IS:</h3>
            <p>
              Racism is the civilizational-scale institutionalization of Thread collapse. It emerged from a historical moment where the universal human tendency toward in-group preference collapsed across multiple Threads simultaneously—and then got locked into structure, law, economy, and culture. The categories it created are both constructed AND real. Everyone born into this system inherits collapsed Threads, though positioned differently within the collapse. Most responses to racism—including most anti-racism—are also collapsed, which is why they don't work. The path forward is building collective capacity to hold what has been too painful to hold, at individual, relational, institutional, and civilizational scales.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Architecture Section */}
      <section className={`${styles.frameworkArchitecture} section-lg`}>
        <div className="container">
          <h2>The Framework Architecture</h2>

          <div className={styles.architectureContent}>
            <div className={styles.architectureCard}>
              <h3>The Seven Threads (Individual Capacity)</h3>
              <p className={styles.architectureIntro}>The psychological/embodied ability to hold specific creative tensions:</p>
              <ul className={styles.threadsList}>
                <li><strong>PRESENCE</strong> — "Where am I?" — Within vs. Between / Here vs. Elsewhere</li>
                <li><strong>CONSENT</strong> — "What may I?" — Yes vs. No / Self vs. Other</li>
                <li><strong>MEMORY</strong> — "Why do I?" — Given vs. Chosen / Telling vs. Told</li>
                <li><strong>PAUSE</strong> — "When can I?" — Not Yet vs. Now / More vs. Enough</li>
                <li><strong>EMBODIMENT</strong> — "How does my body know?" — Think vs. Feel / Stay vs. Go</li>
                <li><strong>UNCERTAINTY</strong> — "What is the mystery unveiling?" — Hide vs. Seek / Threat vs. Wonder</li>
                <li><strong>BECOMING</strong> — "Who am I becoming now?" — Same vs. Different / Return vs. Forward</li>
              </ul>
            </div>

            <div className={styles.architectureCard}>
              <h3>The Four Meta-Threads (Transformational Capacity)</h3>
              <p className={styles.architectureIntro}>The capacities that allow individual work to become collective change:</p>
              <ul className={styles.threadsList}>
                <li><strong>THRESHOLD</strong> — "Who belongs?" — Inside vs. Outside / Us vs. Them</li>
                <li><strong>POWER</strong> — "Who decides?" — Control vs. Helplessness / Free vs. Determined</li>
                <li><strong>WITNESS</strong> — "What must be named?" — Comfort vs. Courage / Private vs. Collective</li>
                <li><strong>TRANSLATION</strong> — "What carries across?" — Particular vs. Universal / Literal vs. Metaphor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Part One: What Racism Actually Is */}
      <section className={`${styles.whatRacismIs} section-lg`}>
        <div className="container">
          <h2>Part One: What Racism Actually Is</h2>

          <div className={styles.insight}>
            <h3>The Insight</h3>
            <p>
              Just as the bullying paradigm shift revealed that most bullying is normal social behavior (play, calibration, hierarchy negotiation) that becomes harmful when Threads collapse, the racism paradigm shift reveals:
            </p>
            <p className={styles.keyInsight}>
              <strong>What we call "racism" is the catastrophic result of universal human in-group preference collapsing and getting institutionalized across centuries.</strong>
            </p>
            <p>
              In-group preference is universal. Every human culture, every human being, pattern-matches and prefers their own. This is not pathology—it's how belonging works. It only becomes racism when:
            </p>
            <ol>
              <li>The Threads collapse (difference becomes threat, belonging becomes exclusion)</li>
              <li>The collapse gets institutionalized (written into law, economy, geography)</li>
              <li>The institution reproduces itself across generations (inheritance)</li>
              <li>The categories become identity (constructed becomes "natural")</li>
            </ol>
          </div>

          <div className={styles.colonialMoment}>
            <h3>The Colonial Moment: A Collapse Event</h3>
            <p>
              Imagine the moment of contact: Europeans with technological advantage encounter peoples who look different, live differently, worship differently. At this threshold, the full humanity of the Other is available to be seen—but also available to be collapsed away.
            </p>
            <p>What happens when multiple Threads collapse simultaneously?</p>

            <div className={styles.collapseCard}>
              <h4>PRESENCE collapses → Between/Elsewhere</h4>
              <p>
                The Other cannot be met. There is no "shared presence, same room, reality built together." The encounter happens, but no genuine meeting occurs. The Other exists only as object, abstraction, Elsewhere—never as a presence that can be met Here, Between. The Meta-Question of PRESENCE—"What is being met here?"—is answered: Nothing. No one.
              </p>
            </div>

            <div className={styles.collapseCard}>
              <h4>PAUSE collapses → Now/More</h4>
              <p>
                No gap. Instant categorization. The complex reality of another human being reduced to a snap judgment. "Savage." "Primitive." "Other." No sacred pause, no "complete in the waiting." Only urgency, grasping, acting to prove.
              </p>
            </div>

            <div className={styles.collapseCard}>
              <h4>EMBODIMENT collapses → Think/Go</h4>
              <p>
                The Other becomes an abstraction, not a felt being. Escape into mind, leaving the body behind. You cannot feel their suffering because you cannot feel them at all. They exist in your mind as a concept—"the native," "the African"—not in your body as a presence. This disembodiment is what makes atrocity <em>possible</em>.
              </p>
            </div>

            <div className={styles.collapseCard}>
              <h4>CONSENT collapses → Other/No</h4>
              <p>
                The Other is exiled from the circle of moral consideration. Their consent is not required because they are not the kind of being whose consent matters. They can be taken, moved, owned, used. Their refusal is not honored; their agency is erased.
              </p>
            </div>

            <div className={styles.collapseCard}>
              <h4>MEMORY collapses → Told</h4>
              <p>
                A story must be constructed to justify what the collapse has enabled. "They are cursed by God." "They are a lower form of humanity." "They are children who need our guidance." The story is fabricated after the fact to rationalize exploitation—Told, not Given. Then the story is inherited as if it were simply how things are, possessing future generations.
              </p>
            </div>

            <div className={styles.collapseCard}>
              <h4>UNCERTAINTY collapses → Threat</h4>
              <p>
                Difference cannot be held with curiosity or wonder. The unknown is dangerous. Dogma, certainty as armor, refusing to look at what we don't know. What I do not understand, I must control or destroy.
              </p>
            </div>

            <div className={styles.collapseCard}>
              <h4>BECOMING collapses → Same</h4>
              <p>
                Only one way of being human is valid: ours. They must become Same—assimilate, convert, adopt our ways—or remain forever lesser. No spiral gift of "back to the same place with new eyes." Only linear imposition without transformation.
              </p>
            </div>
          </div>

          <div className={styles.metaThreadCollapses}>
            <h3>The Meta-Thread Collapses</h3>
            <p>The individual Thread collapses enabled—and were enabled by—Meta-Thread collapse:</p>

            <div className={styles.metaCollapseCard}>
              <h4>THRESHOLD collapses → Closed/Fear</h4>
              <p>
                The circle of "us" is drawn tight. White/European inside; everyone else outside. The boundary that could have been permeable—welcoming difference while maintaining identity—becomes a wall. And crucially: the wall is drawn in fear, not love. This is the central collapse. The Meta-Question—"How do we know if our circle is drawn in love or in fear?"—is answered definitively: Fear.
              </p>
            </div>

            <div className={styles.metaCollapseCard}>
              <h4>POWER collapses → Control/Free</h4>
              <p>
                Domination becomes the mode. Those with power decide for those without. The "Free" collapse denies systemic constraint entirely—pure individualism that refuses to see the structures being built. Agency is hoarded; helplessness is imposed.
              </p>
            </div>

            <div className={styles.metaCollapseCard}>
              <h4>WITNESS collapses → Comfort/Private</h4>
              <p>
                What is happening is not named. The atrocities remain private, denied, invisible. Comfort is preserved for those committing harm. The particular suffering of individuals is never allowed to become collective acknowledgment.
              </p>
            </div>

            <div className={styles.metaCollapseCard}>
              <h4>TRANSLATION collapses → Universal-erasure</h4>
              <p>
                False universalism: "We are bringing civilization." The particular humanity of colonized peoples is erased in favor of a "universal" (actually particular European) standard. Their ways of being human don't translate; they're simply invalid.
              </p>
            </div>
          </div>

          <div className={styles.intentionality}>
            <h3>Was It Intentional?</h3>
            <p className={styles.paradigmShiftStatement}>Here's the paradigm shift: <strong>It didn't need to be intentional. The collapses created their own logic.</strong></p>
            <p>No one had to sit in a room and "invent" racism. What happened was:</p>
            <ol>
              <li>A moment of encounter where genuine meeting was possible</li>
              <li>Simultaneous Thread collapse across multiple dimensions</li>
              <li>Exploitation became possible because the collapses removed moral barriers</li>
              <li>Economic incentive locked it in—slavery was profitable, colonization was profitable</li>
              <li>Rationalization followed—stories of superiority constructed after the fact</li>
              <li>Institutionalization cemented it—collapses written into law, economy, geography</li>
              <li>Inheritance perpetuated it—children born into the collapsed system inherited both the categories and the stories</li>
            </ol>
            <p>
              After enough generations, <strong>no one needs to intend racism</strong>. The collapses reproduce themselves through institutions and inherited narratives. A person can be "not racist" in their conscious intentions and still participate in and benefit from a system built on collapse.
            </p>
          </div>

          <div className={styles.collapseCascade}>
            <h3>The Collapse Cascade</h3>
            <p>Once the Threads collapse together, they reinforce each other:</p>

            <div className={styles.cascadeBox}>
              <pre className={styles.cascadeDiagram}>
{`PRESENCE collapses → the Other cannot be met
    ↓
PAUSE collapses → instant categorization
    ↓
EMBODIMENT collapses → can't feel their humanity
    ↓
CONSENT collapses → their agency doesn't count
    ↓
MEMORY collapses → stories justify the exclusion
    ↓
UNCERTAINTY collapses → certainty about the categories
    ↓
BECOMING collapses → fixed identity hierarchy
    ↓
(Feeds back to PRESENCE: categories prevent meeting)`}
              </pre>
            </div>

            <p>And at the Meta level:</p>

            <div className={styles.cascadeBox}>
              <pre className={styles.cascadeDiagram}>
{`THRESHOLD collapses → circle drawn in fear
    ↓
POWER collapses → domination institutionalized
    ↓
WITNESS collapses → truth suppressed
    ↓
TRANSLATION collapses → false universal imposed
    ↓
(Feeds back to THRESHOLD: system reproduces itself)`}
              </pre>
            </div>

            <p className={styles.cascadeConclusion}>
              Each collapse enables and reinforces the others. The system becomes self-sustaining.
            </p>

            <p className={styles.keyTakeaway}>
              <strong>You cannot undo one collapse while the others remain.</strong>
            </p>

            <p>
              This is why anti-racism efforts so often fail. They might address MEMORY (teach the real history) but leave PRESENCE collapsed (still can't genuinely meet across difference). They might address conscious PAUSE (train people to catch bias) but leave THRESHOLD collapsed (the circle of "us" unchanged). They might demand CONSENT (you must agree this is wrong) while collapsing others' PAUSE (no room for people to arrive there themselves).
            </p>
          </div>
        </div>
      </section>

      {/* Part Two: Seven Threads Applied */}
      <section className={`${styles.sevenThreads} section-lg`}>
        <div className="container">
          <h2>Part Two: The Seven Threads Applied to Racial Justice</h2>

          <div className={styles.threadDetail}>
            <h3>PRESENCE</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "Where am I...?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Within vs. Between / Here vs. Elsewhere</p>
            <p className={styles.threadMetaQuestion}><strong>Meta-Question:</strong> "What is being met here?"</p>

            <h4>In Racial Justice:</h4>
            <p>
              PRESENCE is perhaps the most fundamental Thread collapsed in racism. The colonial moment was, at its core, a failure of meeting. The Other was never genuinely encountered—never met in "shared presence, same room, reality built together."
            </p>
            <p>
              The collapse toward <em>Within/Elsewhere</em> creates isolation—retreating into solitary processing, unable to build reality together across difference, relating only to the distant or the dead (ancestors, abstractions) rather than living people here.
            </p>
            <p>
              The collapse toward <em>Between</em> without <em>Within</em> creates loss of self—so merged with others that one's own truth disappears, unable to bring anything authentic to the meeting.
            </p>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "I can be fully here AND meet you. I can maintain my within AND create between. What is being met here is real—you, me, and something new that neither of us could create alone."
            </div>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>Inability to genuinely meet across racial difference (Elsewhere)</li>
                <li>Relating to abstractions ("Black people," "white people") rather than persons</li>
                <li>Isolation from those who see differently (Within only)</li>
                <li>Loss of self in proximity to difference (Between only)</li>
                <li>Communion only with ancestors/the dead of your own group</li>
                <li>Performative presence without genuine meeting</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>Can I genuinely meet this person, or are they a category in my mind?</li>
                <li>What is actually being met in this encounter?</li>
                <li>Am I present here, or am I elsewhere—in ideology, in fear, in abstraction?</li>
                <li>What space exists between us that we could build together?</li>
              </ul>
            </div>
          </div>

          <div className={styles.threadDetail}>
            <h3>CONSENT</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "What may I...?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Yes vs. No / Self vs. Other</p>
            <p className={styles.threadMetaQuestion}><strong>Meta-Question:</strong> "Is every being choosing?"</p>

            <h4>In Racial Justice:</h4>
            <p>
              The colonial moment erased consent entirely for colonized peoples. Their Yes meant nothing; their No was not honored. CONSENT collapse is how enslavement, forced removal, cultural destruction became possible.
            </p>
            <p>
              The collapse toward <em>Self/Yes</em> (forcing agreement) creates coercive anti-racism—demanding everyone arrive at the same conclusions, no room for developmental journeys, purity tests that shrink the coalition.
            </p>
            <p>
              The collapse toward <em>Other/No</em> (exile) creates severed relationships—cutting off anyone who disagrees, shrinking circles until only the pure remain.
            </p>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "I can give my consent freely AND honor others' right to refuse. I can exercise my right to refuse AND stay in relationship. Every being in this encounter is choosing—and those choices are honored."
            </div>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>Coercive agreement ("you MUST see it this way")</li>
                <li>Purity tests that shrink coalitions</li>
                <li>Cutting off everyone who doesn't agree</li>
                <li>Expecting marginalized people to educate (violating their consent)</li>
                <li>Centering your own need to convince</li>
                <li>Colonial patterns: deciding for others what they need</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>Am I sharing my truth or demanding agreement?</li>
                <li>Is every being in this situation genuinely choosing?</li>
                <li>Whose consent am I failing to consider?</li>
                <li>Am I honoring refusals—mine and theirs?</li>
              </ul>
            </div>
          </div>

          <div className={styles.threadDetail}>
            <h3>MEMORY</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "Why do I...?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Given vs. Chosen / Telling vs. Told</p>
            <p className={styles.threadMetaQuestion}><strong>Meta-Question:</strong> "What do we want our story to be?"</p>

            <h4>In Racial Justice:</h4>
            <p>
              The racial categories came with stories—Told, not Given. Fabricated narratives of superiority and inferiority, constructed after the fact to justify exploitation, then inherited as if they were simply reality. MEMORY collapse is how these stories possess generations who never chose them.
            </p>
            <p>
              The collapse toward <em>Given/Told</em> means being possessed by inherited narratives—the stories of superiority or inferiority, the "just how things are" that was actually fabricated.
            </p>
            <p>
              The collapse toward <em>Chosen/Telling</em> without honoring inheritance means rootlessness—rejecting all ancestry, no anchor in history, pretending to start from scratch.
            </p>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "I carry inherited stories AND I can examine them. Some of my inheritance serves life AND some serves death. I can honor my ancestors AND refuse their collapses. I am shaped by history AND I help choose what story we tell now."
            </div>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>White innocence narratives ("my family didn't own slaves")</li>
                <li>Possession by victim or oppressor narratives (Told)</li>
                <li>Rejection of all tradition as tainted</li>
                <li>Inherited certainty about "how they are"</li>
                <li>Historical amnesia ("that was a long time ago")</li>
                <li>Identity loops where even chosen stories become prisons</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>What stories about race did I inherit? From whom?</li>
                <li>Am I telling my story, or is it telling me?</li>
                <li>What would I keep from my inheritance? What would I release?</li>
                <li>What do we want our collective story to become?</li>
              </ul>
            </div>
          </div>

          <div className={styles.threadDetail}>
            <h3>PAUSE</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "When can I...?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Not Yet vs. Now / More vs. Enough</p>
            <p className={styles.threadMetaQuestion}><strong>Meta-Question:</strong> "Does patience here lead to better actions?"</p>

            <h4>In Racial Justice:</h4>
            <p>
              The collapse toward <em>Now/More</em> creates reactive anti-racism—call-outs that feel righteous but change nothing, urgency that destroys what patience would have built, acting to prove rather than from fullness.
            </p>
            <p>
              The collapse toward <em>Not Yet</em> creates endless deliberation—sacred patience that becomes fear wearing wisdom's clothes, waiting that becomes complicity.
            </p>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "I can feel the urgency AND create space to respond rather than react. I know when waiting is sacred patience AND when it is avoidance. Right action from fullness, responding not reacting."
            </div>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>Reactive call-outs (Now/More)</li>
                <li>Analysis paralysis (Not Yet as avoidance)</li>
                <li>Tone policing (using form to avoid substance)</li>
                <li>Instant categorization of people as ally/enemy</li>
                <li>Impatience that destroys coalition</li>
                <li>Patience that becomes complicity</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>Am I responding or reacting?</li>
                <li>Is my urgency serving the goal or serving my need to discharge?</li>
                <li>Am I pausing from fullness or from avoidance?</li>
                <li>Does patience here lead to better action, or is it complicity?</li>
              </ul>
            </div>
          </div>

          <div className={styles.threadDetail}>
            <h3>EMBODIMENT</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "How does my body know?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Think vs. Feel / Stay vs. Go</p>
            <p className={styles.threadMetaQuestion}><strong>Meta-Question:</strong> "Can my body find solid ground here?"</p>

            <h4>In Racial Justice:</h4>
            <p>
              The colonial moment required disembodiment—escape into abstraction that allowed atrocity. If you could feel the Other in your body, you could not enslave them. EMBODIMENT collapse is how people became concepts.
            </p>
            <p>
              The collapse toward <em>Think/Go</em> creates disembodied anti-racism—all theory and no presence, frameworks that explain everything but feel nothing, abstraction that escapes the real.
            </p>
            <p>
              The collapse toward <em>Feel/Go</em> creates overwhelm—flooded by sensation, dissociation, driven out by the weight of it all.
            </p>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "I can think clearly AND feel fully. My body can find solid ground even in difficult truth. I trust what my body knows AND I don't let sensation flood me out."
            </div>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>Intellectualized anti-racism (Think/Go)</li>
                <li>Overwhelm and burnout (Feel/Go)</li>
                <li>Disembodied allyship (saying right things, body untouched)</li>
                <li>Abstracting people into categories</li>
                <li>Spiritual bypass that transcends the body</li>
                <li>Dissociation when topics become painful</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>Can I feel the person in front of me, or have they become a category?</li>
                <li>What is happening in my body right now?</li>
                <li>Can my body find solid ground in this conversation?</li>
                <li>Am I escaping into thought or flooded by feeling?</li>
              </ul>
            </div>
          </div>

          <div className={styles.threadDetail}>
            <h3>UNCERTAINTY</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "What is the mystery unveiling?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Hide vs. Seek / Threat vs. Wonder</p>
            <p className={styles.threadMetaQuestion}><strong>Meta-Question:</strong> "How can wanting control give way to discovery?"</p>

            <h4>In Racial Justice:</h4>
            <p>
              The colonial moment collapsed UNCERTAINTY into threat. Difference could not be held with wonder. The unknown demanded control or destruction. Dogma—certainty as armor—replaced reverent inquiry.
            </p>
            <p>
              The collapse toward <em>Hide/Threat</em> creates dogmatism—refusing to look at what we don't know, needing answers for control, certainty as armor.
            </p>
            <p>
              The collapse toward <em>Seek/Threat</em> creates anxious searching—endlessly seeking to eliminate uncertainty rather than walking with questions like old friends.
            </p>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "I can rest in mystery without grasping AND pursue reverent inquiry. I can act decisively without pretending to know more than I do. Wonder, not threat, is my relationship to what I don't understand."
            </div>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>"I've done the work" (certainty, nothing more to learn)</li>
                <li>"It's complicated" as excuse for inaction</li>
                <li>Certainty about what other groups think/feel/experience</li>
                <li>Refusing to take positions ("who am I to say")</li>
                <li>Weaponized uncertainty ("we can't really know")</li>
                <li>Needing to be right rather than curious</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>What am I certain about that I haven't tested?</li>
                <li>Am I seeking to control or to discover?</li>
                <li>Can I hold conviction AND genuine curiosity?</li>
                <li>What would wonder—not threat—look like here?</li>
              </ul>
            </div>
          </div>

          <div className={styles.threadDetail}>
            <h3>BECOMING</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "Who am I becoming now?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Same vs. Different / Return vs. Forward</p>
            <p className={styles.threadMetaQuestion}><strong>Meta-Question:</strong> "What isn't finished in me?"</p>

            <h4>In Racial Justice:</h4>
            <p>
              The racial categories collapsed BECOMING into fixed identity. You ARE your race—permanent, essential, determined. The spiral gift—"back to the same place with new eyes"—was foreclosed.
            </p>
            <p>
              The collapse toward <em>Same/Return</em> creates stuck loops—repetition without transformation, going in circles rather than spiraling forward.
            </p>
            <p>
              The collapse toward <em>Same/Forward</em> creates linear progress without real change—moving but not becoming, reformed but not transformed.
            </p>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "I am not who I was AND I recognize where I came from. I am always becoming AND I have continuity. The categories are real AND they are not the whole of me AND they can transform."
            </div>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>Race essentialism (you ARE your category)</li>
                <li>"I don't see race" (denying the categories' reality)</li>
                <li>Making your awakening the center of the story</li>
                <li>Identity as fixed destination</li>
                <li>Performing wokeness (image rather than becoming)</li>
                <li>Believing nothing can change</li>
                <li>Believing everything must change instantly</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>What isn't finished in me regarding race?</li>
                <li>Am I spiraling forward or going in circles?</li>
                <li>How has my understanding evolved? How might it continue?</li>
                <li>Can I hold my racial identity as real AND constructed AND evolving?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Part Three: Four Meta-Threads */}
      <section className={`${styles.fourMetaThreads} section-lg`}>
        <div className="container">
          <h2>Part Three: The Four Meta-Threads</h2>
          <p className={styles.metaIntro}>
            The Seven Threads operate at the level of individual capacity. The Meta-Threads operate at the level of transformation—where individual work becomes collective change, where psychology becomes institution, where the personal becomes civilizational.
          </p>

          <div className={styles.metaThreadDetail}>
            <h3>THRESHOLD</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "Who belongs?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Inside vs. Outside / Us vs. Them</p>
            <p className={styles.threadMetaQuestion}><strong>Meta-Question:</strong> "How do we know if our circle is drawn in love or in fear?"</p>

            <h4>Why It's Meta:</h4>
            <p>
              THRESHOLD is the Thread most directly collapsed in racism itself—the drawing of the circle that determines who counts as "us," who counts as fully human. The colonial moment was fundamentally a THRESHOLD collapse: the circle of humanity drawn tight around whiteness, in fear rather than love.
            </p>
            <p>
              Every community draws boundaries. The question is not whether to have a circle but <em>how</em> the circle is drawn.
            </p>

            <h4>Collapse Points:</h4>
            <div className={styles.tableContainer}>
              <table className={styles.collapseTable}>
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Collapse A</th>
                    <th>Collapse B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Boundary</strong></td>
                    <td>Closed (rigid, wall, fortress)</td>
                    <td>Dissolved (no coherence, no container)</td>
                  </tr>
                  <tr>
                    <td><strong>Motivation</strong></td>
                    <td>Fear (threat-based, "we are not them")</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "We can have identity AND permeable boundaries. We can protect what matters AND welcome difference. The circle can be drawn in love rather than fear. Belonging does not require exclusion as its foundation."
            </div>

            <div className={styles.circleComparison}>
              <div className={styles.circleType}>
                <h4>Fear-Based Circles:</h4>
                <ul>
                  <li>Rigid boundaries</li>
                  <li>Purity requirements</li>
                  <li>Threat-based identity ("we are not them")</li>
                  <li>Exclusion as primary mechanism</li>
                </ul>
              </div>

              <div className={styles.circleType}>
                <h4>Love-Based Circles:</h4>
                <ul>
                  <li>Permeable boundaries</li>
                  <li>Growth orientation</li>
                  <li>Positive identity ("this is who we are")</li>
                  <li>Inclusion as primary, discernment as secondary</li>
                </ul>
              </div>
            </div>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>Racism itself (circle drawn around race, in fear)</li>
                <li>Nationalism (circle drawn around nation, in fear)</li>
                <li>Radical inclusion that dissolves all group coherence</li>
                <li>Anti-racist spaces that become new exclusionary circles</li>
                <li>"Reverse racism" claims (misunderstanding asymmetry)</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>Where have I drawn the circle of "us"? Why there?</li>
                <li>Is this boundary drawn in love or in fear?</li>
                <li>What would it mean to maintain identity while welcoming difference?</li>
                <li>Who am I treating as "them"?</li>
              </ul>
            </div>
          </div>

          <div className={styles.metaThreadDetail}>
            <h3>POWER</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "Who decides?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Control vs. Helplessness / Free vs. Determined</p>

            <h4>Why It's Meta:</h4>
            <p>
              POWER is where individual Thread capacity meets institutional structure. Collapsed Threads don't just affect individuals—they get <em>written into systems</em> that reproduce collapse across generations. POWER names what happened at the colonial moment (domination institutionalized), what perpetuates racism (systems reproducing themselves), and what must be transformed (who decides, and how).
            </p>

            <h4>Collapse Points:</h4>
            <div className={styles.tableContainer}>
              <table className={styles.collapseTable}>
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Collapse A</th>
                    <th>Collapse B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Agency</strong></td>
                    <td>Control (domination, savior, deciding for others)</td>
                    <td>Helplessness (paralysis, "nothing I can do")</td>
                  </tr>
                  <tr>
                    <td><strong>Structure</strong></td>
                    <td>Free (pure individualism, denial of systems)</td>
                    <td>Determined (fatalism, "nothing can change")</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "I have real agency AND I am embedded in systems that shape me. I can act AND my action alone is not enough. Systems are powerful AND systems can be transformed. I am responsible for my choices AND I didn't create this."
            </div>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>Savior dynamics (Control)</li>
                <li>"I'm just one person" (Helplessness)</li>
                <li>"We're all individuals" / meritocracy myth (Free)</li>
                <li>"Nothing ever changes" (Determined)</li>
                <li>Centering your own journey</li>
                <li>Waiting for permission to act</li>
                <li>Colonial patterns in progressive clothing</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>Where is my actual power? What can I influence?</li>
                <li>Am I using "I can't do anything" to avoid responsibility?</li>
                <li>Am I using "I'll fix this" to center myself?</li>
                <li>What collective power could I build with others?</li>
              </ul>
            </div>
          </div>

          <div className={styles.metaThreadDetail}>
            <h3>WITNESS</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "What must be named?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Comfort vs. Courage / Private vs. Collective</p>

            <h4>Why It's Meta:</h4>
            <p>
              WITNESS is how private experience becomes collective acknowledgment. Without WITNESS, truth stays hidden, denied, individual. The colonial era—and its aftermath—depended on suppressed witness: atrocities unnamed, suffering privatized, the comfort of perpetrators protected. WITNESS transforms personal suffering into shared reality—the testimony that makes the invisible visible.
            </p>

            <h4>Collapse Points:</h4>
            <div className={styles.tableContainer}>
              <table className={styles.collapseTable}>
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Collapse A</th>
                    <th>Collapse B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Cost</strong></td>
                    <td>Comfort (silence to preserve ease)</td>
                    <td>Courage-as-weapon (naming to harm, not heal)</td>
                  </tr>
                  <tr>
                    <td><strong>Scope</strong></td>
                    <td>Private (your experience only; no collective truth)</td>
                    <td>Collective-erasure (individual truth lost in "our" story)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "This must be named. Naming costs something AND I pay that cost. My particular truth matters AND it connects to larger patterns. I witness without weaponizing. I name without erasing."
            </div>

            <h4>For Racial Justice:</h4>
            <p>
              WITNESS is testimony—the truth-telling that breaks centuries of denial. It's what happens in truth and reconciliation processes. It's the naming of what was done, what continues, what has been hidden.
            </p>
            <p>
              But collapsed WITNESS becomes either silence (too comfortable to name) or weaponization (naming as attack rather than healing). The held position is truth-telling that serves collective healing, not individual satisfaction.
            </p>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>Silence to preserve comfort</li>
                <li>Call-outs as weapon rather than witness</li>
                <li>"That's just your experience" (privatizing)</li>
                <li>Grand narratives that erase particular truths</li>
                <li>Testimony performed for audience rather than healing</li>
                <li>Refusing to hear witness</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>What truth am I avoiding naming?</li>
                <li>Am I naming to heal or to harm?</li>
                <li>Whose truth is being erased by the collective narrative?</li>
                <li>What would it cost to witness this? Am I willing to pay?</li>
              </ul>
            </div>
          </div>

          <div className={styles.metaThreadDetail}>
            <h3>TRANSLATION</h3>
            <p className={styles.threadSeed}><strong>Seed:</strong> "What carries across?"</p>
            <p className={styles.threadTension}><strong>The Tension:</strong> Particular vs. Universal / Literal vs. Metaphor</p>

            <h4>Why It's Meta:</h4>
            <p>
              TRANSLATION is how understanding moves between different positions, contexts, experiences. Without TRANSLATION, we stay siloed—my experience incomprehensible to you, frameworks developed here inapplicable there. The colonial moment collapsed TRANSLATION into false universalism: European particularity imposed as universal standard, all other particularities erased or invalidated.
            </p>

            <h4>Collapse Points:</h4>
            <div className={styles.tableContainer}>
              <table className={styles.collapseTable}>
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Collapse A</th>
                    <th>Collapse B</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Scope</strong></td>
                    <td>Particular-only (you can't understand; no bridges)</td>
                    <td>Universal-erasure ("we all suffer"; flattening difference)</td>
                  </tr>
                  <tr>
                    <td><strong>Mode</strong></td>
                    <td>Literal-only (only concrete counts; no pattern recognition)</td>
                    <td>Metaphor-escape (abstraction that escapes the real)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.heldPosition}>
              <strong>The Held Position:</strong> "My particular experience contains truth AND your particular experience contains different truth. The specific matters AND patterns matter. I can translate without erasing. I can find connection without flattening."
            </div>

            <h4>For Racial Justice:</h4>
            <p>
              TRANSLATION is how experience crosses the divide. How does the particular experience of Black Americans become comprehensible to others without being appropriated or diluted? How does a framework developed from one positionality apply to another? How do we find genuine universality without false equivalence?
            </p>
            <p>
              Collapsed TRANSLATION is either "you can't understand" (siloed particularity) or "we all suffer" (false universal). The held position finds what genuinely carries across while honoring what doesn't.
            </p>

            <div className={styles.practiceDetails}>
              <h4>Collapse Patterns:</h4>
              <ul>
                <li>"You can't understand" (no bridges possible)</li>
                <li>"We all suffer" (flattening into false equivalence)</li>
                <li>Only concrete particulars count (no pattern recognition)</li>
                <li>Abstract universals that escape particular reality</li>
                <li>Appropriation disguised as translation</li>
                <li>Frameworks that only work for one position</li>
              </ul>

              <h4>Practice Questions:</h4>
              <ul>
                <li>What from my experience might be universal? What is particular?</li>
                <li>Am I flattening difference to find connection?</li>
                <li>Am I refusing connection to protect particularity?</li>
                <li>What would genuine translation—not appropriation—look like?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Part Four: Collapsed Anti-Racism */}
      <section className={`${styles.collapsedAntiRacism} section-lg`}>
        <div className="container">
          <h2>Part Four: Collapsed Anti-Racism</h2>
          <p className={styles.sectionIntro}>
            One of the framework's key insights is that most anti-racism is also collapsed—which is why decades of diversity training haven't moved the needle.
          </p>

          <h3>Common Collapsed Patterns</h3>
          <div className={styles.tableContainer}>
            <table className={styles.collapsedPatternsTable}>
              <thead>
                <tr>
                  <th>Pattern</th>
                  <th>Threads/Meta-Threads Collapsed</th>
                  <th>What It Looks Like</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>White Fragility</strong></td>
                  <td>THRESHOLD + PAUSE + EMBODIMENT</td>
                  <td>Can't stay present; reacts defensively; flees into abstraction</td>
                </tr>
                <tr>
                  <td><strong>Performative Allyship</strong></td>
                  <td>BECOMING + POWER + PRESENCE</td>
                  <td>Making transformation the point; savior dynamics; no genuine meeting</td>
                </tr>
                <tr>
                  <td><strong>Colorblindness</strong></td>
                  <td>PAUSE + THRESHOLD + MEMORY</td>
                  <td>Instant denial + closed circle + innocence narrative</td>
                </tr>
                <tr>
                  <td><strong>Call-Out Culture</strong></td>
                  <td>PAUSE + CONSENT + WITNESS</td>
                  <td>Reactive shaming; forced agreement; naming as weapon</td>
                </tr>
                <tr>
                  <td><strong>Paralysis</strong></td>
                  <td>POWER + UNCERTAINTY</td>
                  <td>"It's too big / complex to do anything"</td>
                </tr>
                <tr>
                  <td><strong>Race Essentialism</strong></td>
                  <td>BECOMING + UNCERTAINTY + THRESHOLD</td>
                  <td>Fixed categories; certainty; rigid circles</td>
                </tr>
                <tr>
                  <td><strong>Activist Burnout</strong></td>
                  <td>EMBODIMENT + POWER + THRESHOLD</td>
                  <td>Can't stay embodied; oscillating between fight and withdrawal</td>
                </tr>
                <tr>
                  <td><strong>Purity Spirals</strong></td>
                  <td>CONSENT + THRESHOLD + BECOMING</td>
                  <td>Shrinking circles; exile of impure; identity as arrived</td>
                </tr>
                <tr>
                  <td><strong>Intellectual Anti-Racism</strong></td>
                  <td>EMBODIMENT + PRESENCE + WITNESS</td>
                  <td>All theory; no felt presence; no genuine meeting</td>
                </tr>
                <tr>
                  <td><strong>Savior Dynamics</strong></td>
                  <td>POWER + CONSENT + PRESENCE</td>
                  <td>Control collapse; deciding for others; no genuine meeting</td>
                </tr>
                <tr>
                  <td><strong>Tokenization</strong></td>
                  <td>PRESENCE + CONSENT + TRANSLATION</td>
                  <td>Relating to categories not persons; erasing particularity</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.whyItDoesntWork}>
            <h3>Why Collapsed Anti-Racism Doesn't Work</h3>
            <p>
              You cannot dismantle collapsed systems while you yourself are collapsed. Collapsed activism reproduces the dynamics it claims to oppose—just with different people on top.
            </p>
            <ul>
              <li>Call-out culture collapses PAUSE, CONSENT, and WITNESS—the very capacities needed for transformation</li>
              <li>Purity tests collapse BECOMING and CONSENT—shrinking coalitions until only the "pure" remain</li>
              <li>Savior dynamics collapse POWER and CONSENT—replicating colonial patterns in progressive clothing</li>
              <li>Intellectual anti-racism collapses EMBODIMENT and PRESENCE—all analysis, no genuine meeting</li>
            </ul>
            <p className={styles.pathForward}>
              The path forward requires building Thread capacity, not just adopting correct positions.
            </p>
          </div>
        </div>
      </section>

      {/* Part Five: The RECKON Practice */}
      <section className={`${styles.reckonPractice} section-lg`}>
        <div className="container">
          <h2>Part Five: The RECKON Practice</h2>

          <div className={styles.overview}>
            <h3>Overview</h3>
            <p>
              <strong>RECKON</strong> transforms anti-racism into civilization-scale evolutionary capacity-building. Not reckon in the punitive sense, but in the full meaning:
            </p>
            <ul>
              <li>To calculate, to account for</li>
              <li>To consider, to regard</li>
              <li>To face squarely, to come to terms with</li>
              <li>To settle accounts—in the restorative sense</li>
            </ul>
          </div>

          <h3 className={styles.practiceHeading}>The Practice</h3>

          <div className={styles.reckonStep}>
            <h4>R — RECOGNIZE POSITION</h4>
            <p className={styles.stepIntro}>Where do you stand? Not as confession, but as orientation.</p>
            <p>
              Your position shapes everything—what you see, what you don't see, what work is yours to do. This isn't about guilt or pride. It's about accuracy.
            </p>

            <div className={styles.stepQuestions}>
              <strong>Questions:</strong>
              <ul>
                <li>Where am I positioned in this system?</li>
                <li>What do I see from here? What can't I see?</li>
                <li>What power do I have? What power is acting on me?</li>
                <li>What is my relationship to the inherited collapse?</li>
              </ul>
            </div>

            <p className={styles.metaThreadNote}><em>Meta-Thread: POWER — understanding agency and structure</em></p>
          </div>

          <div className={styles.reckonStep}>
            <h4>E — EMBODY ACROSS</h4>
            <p className={styles.stepIntro}>
              Feel across the divide. Not "imagine what it's like" (which keeps you in your head) but actually let your body register the humanity of those your system has taught you to abstract.
            </p>
            <p>
              This is EMBODIMENT and PRESENCE work aimed at undoing the colonial disembodiment and absence that made atrocity possible.
            </p>

            <div className={styles.stepPractice}>
              <strong>Practice:</strong>
              <ul>
                <li>When you encounter someone across racial difference, notice: Can you feel them? Can you meet them? Or have they become a category?</li>
                <li>What happens in your body when you let them become real?</li>
                <li>What is actually being met here?</li>
              </ul>
            </div>

            <p className={styles.metaThreadNote}>
              <em>Meta-Thread: TRANSLATION — what carries across the divide</em><br />
              <em>Threads: PRESENCE, EMBODIMENT</em>
            </p>
          </div>

          <div className={styles.reckonStep}>
            <h4>C — CHECK THE COLLAPSE</h4>
            <p className={styles.stepIntro}>
              Which Threads are collapsing in this moment? In you? In the interaction? In the system?
            </p>
            <p>Name them. The collapse patterns in racial justice work are specific and recognizable.</p>

            <div className={styles.stepQuestions}>
              <strong>Questions:</strong>
              <ul>
                <li>What's collapsing right now? In me? In us?</li>
                <li>Which collapse pattern am I falling into?</li>
                <li>What would holding look like instead of collapsing?</li>
                <li>Is my anti-racism itself collapsed?</li>
              </ul>
            </div>

            <p className={styles.metaThreadNote}>
              <em>Meta-Thread: THRESHOLD — who belongs, how is the circle drawn</em><br />
              <em>All Seven Threads in play</em>
            </p>
          </div>

          <div className={styles.reckonStep}>
            <h4>K — KNOW THE SYSTEM</h4>
            <p className={styles.stepIntro}>
              The collapse isn't just personal—it's institutional. Know how the collapsed Threads got written into structure: housing, education, healthcare, criminal justice, employment, wealth.
            </p>
            <p>This isn't about shame. It's about seeing clearly so you can act effectively.</p>

            <div className={styles.stepPractice}>
              <strong>Practice:</strong>
              <ul>
                <li>Trace one institution you interact with</li>
                <li>How does it reproduce collapsed PAUSE? (instant categorization)</li>
                <li>Collapsed THRESHOLD? (who belongs)</li>
                <li>Collapsed POWER? (who decides)</li>
                <li>Collapsed CONSENT? (whose voice counts)</li>
                <li>Collapsed PRESENCE? (who can be met as real)</li>
              </ul>
            </div>

            <p className={styles.metaThreadNote}><em>Meta-Thread: POWER — how collapse became institution</em></p>
          </div>

          <div className={styles.reckonStep}>
            <h4>O — OPEN THE TENSION</h4>
            <p className={styles.stepIntro}>
              Find the creative tension and HOLD it. Not "both sides have a point" (collapse disguised as balance). Real tensions:
            </p>

            <ul className={styles.tensionsList}>
              <li><strong>Urgency AND Strategy</strong> — People are dying AND reactive action often backfires</li>
              <li><strong>Accountability AND Humanity</strong> — Harm must be named AND people are more than their worst actions</li>
              <li><strong>Constructed AND Real</strong> — Race was invented AND it materially shapes lives</li>
              <li><strong>Individual AND Systemic</strong> — Personal work matters AND it's not enough</li>
              <li><strong>Position-Specific AND Universal</strong> — Our work differs AND we're all collapsed within this system</li>
              <li><strong>Particular AND Translatable</strong> — My experience is specific AND something carries across</li>
            </ul>

            <div className={styles.stepQuestions}>
              <strong>Question:</strong> What tension am I tempted to resolve by collapsing to one side? What would it mean to hold both?
            </div>

            <p className={styles.metaThreadNote}><em>Meta-Threads: THRESHOLD + TRANSLATION — holding the tensions</em></p>
          </div>

          <div className={styles.reckonStep}>
            <h4>N — NAME WHAT MUST BE NAMED</h4>
            <p className={styles.stepIntro}>
              This is WITNESS work. What truth must be spoken? What has been hidden that must come to light? What testimony is required?
            </p>
            <p>Naming is not weaponizing. The goal is collective healing, not individual satisfaction or punishment.</p>

            <div className={styles.stepQuestions}>
              <strong>Questions:</strong>
              <ul>
                <li>What truth am I avoiding?</li>
                <li>What must be named for healing to begin?</li>
                <li>Am I naming to heal or to harm?</li>
                <li>What would it cost to witness this fully?</li>
              </ul>
            </div>

            <p className={styles.metaThreadNote}><em>Meta-Thread: WITNESS — what must be named</em></p>
          </div>

          <h3 className={styles.acrossPositionsHeading}>RECKON Across Positions</h3>
          <p className={styles.acrossPositionsIntro}>The practice is universal. The content differs by position.</p>

          <div className={styles.positionTables}>
            <div className={styles.positionTable}>
              <h4>For Those in Privileged Positions</h4>
              <div className={styles.tableContainer}>
                <table>
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Your Work</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Recognize</strong></td>
                      <td>See your position without defensiveness or shame. Know what you can't see from here.</td>
                    </tr>
                    <tr>
                      <td><strong>Embody</strong></td>
                      <td>Feel across the abstraction. Let people become real, not categories. Practice genuine meeting.</td>
                    </tr>
                    <tr>
                      <td><strong>Check</strong></td>
                      <td>Watch for fragility (THRESHOLD), savior dynamics (POWER), centering your journey (BECOMING), absence (PRESENCE).</td>
                    </tr>
                    <tr>
                      <td><strong>Know</strong></td>
                      <td>Learn how systems benefit you. Not to flagellate—to see clearly.</td>
                    </tr>
                    <tr>
                      <td><strong>Open</strong></td>
                      <td>Hold: "I didn't create this AND I benefit AND I can act."</td>
                    </tr>
                    <tr>
                      <td><strong>Name</strong></td>
                      <td>What truth about your position must you name? What have you been avoiding?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.positionTable}>
              <h4>For Those in Marginalized Positions</h4>
              <div className={styles.tableContainer}>
                <table>
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Your Work</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Recognize</strong></td>
                      <td>Know what you see from here that others can't. Honor that knowledge.</td>
                    </tr>
                    <tr>
                      <td><strong>Embody</strong></td>
                      <td>Stay connected to your body even when the work is exhausting. Practice presence even when it costs.</td>
                    </tr>
                    <tr>
                      <td><strong>Check</strong></td>
                      <td>Watch for burnout (EMBODIMENT), reactive collapse (PAUSE), internalized narratives (MEMORY).</td>
                    </tr>
                    <tr>
                      <td><strong>Know</strong></td>
                      <td>You already know the system. The work is strategic—where can you intervene?</td>
                    </tr>
                    <tr>
                      <td><strong>Open</strong></td>
                      <td>Hold: "Justice is urgent AND strategy requires patience AND I don't owe anyone my education."</td>
                    </tr>
                    <tr>
                      <td><strong>Name</strong></td>
                      <td>What truth is yours to tell? What would it cost? What would it heal?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.positionTable}>
              <h4>For Those in Complex/Multiracial Positions</h4>
              <div className={styles.tableContainer}>
                <table>
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Your Work</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Recognize</strong></td>
                      <td>Your position may be genuinely multiple. Resist pressure to simplify.</td>
                    </tr>
                    <tr>
                      <td><strong>Embody</strong></td>
                      <td>Feel the full complexity without collapsing into one identity.</td>
                    </tr>
                    <tr>
                      <td><strong>Check</strong></td>
                      <td>Watch for pressure to choose sides, to be "enough" of one category.</td>
                    </tr>
                    <tr>
                      <td><strong>Know</strong></td>
                      <td>See how the system tries to sort you. You can refuse the sort while acknowledging its power.</td>
                    </tr>
                    <tr>
                      <td><strong>Open</strong></td>
                      <td>Hold: "I am multiple AND the categories are real AND I get to define myself."</td>
                    </tr>
                    <tr>
                      <td><strong>Name</strong></td>
                      <td>What truth about multiplicity must be named? What does your position reveal?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part Six: RECKON in Context */}
      <section className={`${styles.reckonInContext} section-lg`}>
        <div className="container">
          <h2>Part Six: RECKON in Context</h2>

          <div className={styles.contextCard}>
            <h3>For Community Organizing</h3>
            <p>RECKON supports movement building that doesn't reproduce collapse:</p>
            <ul>
              <li><strong>Recognize</strong> — Build coalitions across position with clarity about different stakes</li>
              <li><strong>Embody</strong> — Keep the work grounded in relationships, not just ideology; practice genuine meeting</li>
              <li><strong>Check</strong> — Notice when the movement itself collapses (purity tests, call-out dynamics, burnout, absence of genuine presence)</li>
              <li><strong>Know</strong> — Strategic understanding of systems enables targeted action</li>
              <li><strong>Open</strong> — Hold coalition tensions: different priorities, different timelines, same direction</li>
              <li><strong>Name</strong> — Create space for testimony; make the invisible visible</li>
            </ul>
          </div>

          <div className={styles.contextCard}>
            <h3>For Restorative Justice</h3>
            <p>RECKON IS restorative justice understood through Threads:</p>
            <ul>
              <li><strong>Recognize</strong> — Acknowledge what happened, who was harmed, who caused harm, and position within the system</li>
              <li><strong>Embody</strong> — Stay present with the pain; genuine meeting between harmed and harmer</li>
              <li><strong>Check</strong> — Create containers that prevent collapse (shame spiral, denial, re-traumatization)</li>
              <li><strong>Know</strong> — Understand the systemic context of the harm</li>
              <li><strong>Open</strong> — Hold: accountability AND humanity, justice AND healing</li>
              <li><strong>Name</strong> — Witness the truth; testimony as foundation for repair</li>
            </ul>
          </div>

          <div className={styles.contextCard}>
            <h3>For Institutional Transformation</h3>
            <p>RECKON at organizational scale:</p>
            <ul>
              <li><strong>Recognize</strong> — Audit where the institution stands; who has power; who doesn't; how it reproduces collapse</li>
              <li><strong>Embody</strong> — Move beyond policy to felt culture change; genuine meeting across levels</li>
              <li><strong>Check</strong> — Identify how the institution reproduces each Thread collapse</li>
              <li><strong>Know</strong> — Map the specific mechanisms (hiring, promotion, policy, culture, physical space)</li>
              <li><strong>Open</strong> — Hold: institutional change is slow AND urgency is appropriate AND people are at different places</li>
              <li><strong>Name</strong> — What truths about this institution must be spoken?</li>
            </ul>
          </div>

          <div className={styles.contextCard}>
            <h3>For Nonviolent Resistance</h3>
            <p>RECKON as foundation for strategic nonviolence:</p>
            <ul>
              <li><strong>Recognize</strong> — Clear-eyed about power dynamics; strategic about position</li>
              <li><strong>Embody</strong> — Grounded presence in the face of violence; bodies on the line; genuine meeting even with adversary</li>
              <li><strong>Check</strong> — Maintain Thread capacity under extreme pressure; don't become what you oppose</li>
              <li><strong>Know</strong> — Strategic understanding of systems, pressure points, theory of change</li>
              <li><strong>Open</strong> — Hold: love for the enemy AND refusal to accept injustice</li>
              <li><strong>Name</strong> — Make injustice visible; witness as strategy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Part Seven: Central Questions */}
      <section className={`${styles.centralQuestions} section-lg`}>
        <div className="container">
          <h2>Part Seven: The Central Questions</h2>

          <div className={styles.centralQuestion}>
            <h3>THRESHOLD's Meta-Question</h3>
            <blockquote>How do we know if our circle is drawn in love or in fear?</blockquote>
            <p>
              This is the question at the heart of belonging. Every community draws boundaries. The question is not whether to have a circle but how the circle is drawn.
            </p>
            <p>
              The work of racial justice is not to eliminate circles but to transform how they're drawn—from fear to love, from fixed to permeable, from hierarchy to dignity.
            </p>
          </div>

          <div className={styles.centralQuestion}>
            <h3>PRESENCE's Meta-Question</h3>
            <blockquote>What is being met here?</blockquote>
            <p>
              This is the question at the heart of encounter. Are we genuinely meeting—building shared reality together? Or are we relating to abstractions, categories, the Elsewhere rather than the Here?
            </p>
            <p>
              The colonial moment answered: Nothing is being met. The Other is not a presence to encounter. Restoration means genuine meeting becomes possible again.
            </p>
          </div>

          <div className={styles.centralParadox}>
            <h3>The Central Paradox</h3>
            <p className={styles.paradoxStatement}>The racial categories are both constructed AND real.</p>

            <ul className={styles.paradoxExplanation}>
              <li><strong>Constructed:</strong> They didn't exist 500 years ago. They were invented to justify exploitation. They are not natural or biological.</li>
              <li><strong>Real:</strong> Centuries of enforcement made them materially consequential. They shape life chances, wealth, health, safety. People live inside them.</li>
            </ul>

            <p>This is a tension to hold, not resolve.</p>

            <p>Collapsing toward "constructed" produces: "I don't see race," colorblindness, denial of ongoing harm.</p>

            <p>Collapsing toward "real" produces: essentialism, permanent categories, no transformation possible.</p>

            <div className={styles.heldPosition}>
              <strong>The held position:</strong> "These categories were invented AND they shape everything AND they can be transformed AND that transformation is the work of generations AND I can act now."
            </div>
          </div>
        </div>
      </section>

      {/* Part Eight: The Vision */}
      <section className={`${styles.vision} section-lg`}>
        <div className="container">
          <h2>Part Eight: The Vision</h2>
          <p className={styles.visionIntro}>What would it look like for the collapsed Threads to be restored at civilizational scale?</p>

          <div className={styles.visionContent}>
            <div className={styles.visionItem}>
              <h3>PRESENCE restored:</h3>
              <p>Genuine meeting across difference. The Other as presence to encounter, not category to manage. Shared reality built together.</p>
            </div>

            <div className={styles.visionItem}>
              <h3>CONSENT restored:</h3>
              <p>Every being choosing. Agency restored to those it was taken from. Yes as gift freely given, No as right honored.</p>
            </div>

            <div className={styles.visionItem}>
              <h3>MEMORY restored:</h3>
              <p>True history told. Inherited narratives examined. Stories we tell, not stories that tell us. What serves life kept; what serves death released.</p>
            </div>

            <div className={styles.visionItem}>
              <h3>PAUSE restored:</h3>
              <p>Space between encounter and categorization. Sacred pause that allows seeing. Right action from fullness.</p>
            </div>

            <div className={styles.visionItem}>
              <h3>EMBODIMENT restored:</h3>
              <p>Feeling across difference. Grounded cognition, not abstract escape. The body as wisdom, not prison.</p>
            </div>

            <div className={styles.visionItem}>
              <h3>UNCERTAINTY restored:</h3>
              <p>Curiosity about difference. Mystery as companion, not threat. Wonder, not fear.</p>
            </div>

            <div className={styles.visionItem}>
              <h3>BECOMING restored:</h3>
              <p>The spiral gift—back to the same place with new eyes. Fluid identity. The categories becoming optional. Human diversity without hierarchy.</p>
            </div>
          </div>

          <p className={styles.metaLevel}>And at the Meta level:</p>

          <div className={styles.visionContent}>
            <div className={styles.visionItem}>
              <h3>THRESHOLD restored:</h3>
              <p>Circles drawn in love. Belonging without exclusion as foundation. Identity without hierarchy.</p>
            </div>

            <div className={styles.visionItem}>
              <h3>POWER restored:</h3>
              <p>Agency distributed. Systems that serve life. Decisions made by those affected.</p>
            </div>

            <div className={styles.visionItem}>
              <h3>WITNESS restored:</h3>
              <p>Truth told. What was hidden brought to light. Testimony honored. Naming that heals.</p>
            </div>

            <div className={styles.visionItem}>
              <h3>TRANSLATION restored:</h3>
              <p>Understanding across difference. Particular and universal held together. Bridges built without flattening.</p>
            </div>
          </div>

          <div className={styles.visionConclusion}>
            <p>
              This is the vision: Not a world without difference, but a world where difference doesn't determine belonging or dignity or life chances. Not the elimination of groups, but the transformation of how groups relate. Not the end of identity, but identity as ongoing becoming rather than fixed category.
            </p>
            <p>
              This is the work of generations. But it is possible. The collapse was not inevitable. It was not human nature. It was a historical event—and what history made, history can transform.
            </p>
            <p className={styles.finalQuestion}>
              The question is not whether we can build this. The question is whether we will.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className={`${styles.conclusion} section-lg`}>
        <div className="container">
          <h2>Conclusion: The Ah-Ha</h2>
          <p>
            Just as SAFE revealed that most bullying is play—normal behavior that becomes harmful through collapse—and HOLD revealed that political polarization is collapsed capacity to hold creative tension—
          </p>

          <div className={styles.ahHa}>
            <p>
              <strong>RECKON reveals:</strong>
            </p>
            <p>
              Racism is the civilizational-scale institutionalization of Thread collapse. The categories were constructed to justify exploitation; they became real through centuries of enforcement; they persist because the system reproduces itself. Everyone born into this system inherits collapsed Threads. Most anti-racism is also collapsed, which is why it doesn't work. The path forward is building collective capacity to hold what has been too painful to hold—the grief, the rage, the complicity, the truth—until transformation becomes possible.
            </p>
          </div>

          <p className={styles.noEquivalence}>
            This framework doesn't create false equivalence. The harms are not equivalent. The positions are not the same.
          </p>

          <p>But it does explain:</p>
          <ul className={styles.explanationList}>
            <li>Why racism persists despite widespread stated opposition</li>
            <li>Why anti-racism often doesn't work</li>
            <li>Why everyone has work to do (but different work)</li>
            <li>What might actually help</li>
            <li>What the vision looks like</li>
            <li>How we get there</li>
          </ul>

          <div className={styles.finalStatements}>
            <p>The circle can be drawn in love.</p>
            <p>The Threads can be restored.</p>
            <p>The system can be transformed.</p>
            <p className={styles.butStatement}>But only if we build the capacity to hold what has been too painful to hold.</p>
            <p className={styles.thisIsTheWork}>This is the work.</p>
          </div>

          <div className={styles.frameworkCredits}>
            <p><em>RECKON: Threads for Racial Justice</em></p>
            <p><em>Part of the Threads of Becoming Framework</em></p>
            <p><em>Version 1.0</em></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reckon;
