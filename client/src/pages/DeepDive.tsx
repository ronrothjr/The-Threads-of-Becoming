import { Link } from 'react-router-dom';
import styles from './Article.module.css';

export default function DeepDive() {

  return (
    <div className={styles.article} id="top">
      <section className={styles.hero}>
        <h1>The Seven Threads</h1>
        <p className={styles.subtitle}>
          Universal tensions that shape who we are and who we are becoming
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.intro}>
          <p>
            These are seven of the universal tensions we've identified—not because we invented them,
            but because they keep appearing wherever humans wrestle with what matters. Each thread includes
            a seed question (the simplest way to open the territory), cultural lenses (ways the thread
            expresses itself), the core tensions (the poles being held), questions for exploration
            (doorways in from different angles), and a meta-question (guidance for when you get stuck).
          </p>
          <p>
            These aren't the only tensions that matter. They're the ones that have proven most universal—recognized
            across cultures, generations, belief systems, and life experiences. We expect the framework to evolve
            as communities engage with it and discover threads we haven't yet seen.
          </p>
          <p className={styles.highlight}>
            Let's weave each thread in turn.
          </p>
        </div>

        {/* PRESENCE */}
        <div className={styles.threadSection}>
          <h2>The First Thread: PRESENCE</h2>

          <div className={styles.seedQuestion}>
            <strong>The Seed:</strong> <em>Where am I...?</em>
          </div>

          <p>
            You know the difference between someone who's in the room and someone who's actually <em>with</em> you.
            A friend scrolling their phone while you talk. A partner whose eyes are on you but whose mind is elsewhere.
            We feel the difference in our bones.
          </p>

          <p>
            Martin Buber called it the distinction between "I-It" and "I-Thou"—the difference between treating
            someone as an object in your environment and truly meeting them. "All real life is meeting," he wrote.
            Presence is where that meeting happens.
          </p>

          <p>
            But presence isn't only about being in the same room. You can be profoundly present with someone across
            the world through a letter that took weeks to arrive. You can be present with the dead—carrying your
            grandmother's wisdom, feeling your father's hand on your shoulder when you need courage. And sometimes
            the most generative presence is solitary: the artist alone in the studio, the grieving person who needs
            space to feel, the idea that needs quiet to gestate.
          </p>

          <div className={styles.culturalLenses}>
            <h3>Cultural Lenses</h3>
            <p>
              This tension between solitary and shared presence appears across human cultures. The Southern African
              philosophy of <strong>Ubuntu</strong>—"Umuntu ngumuntu ngabantu," meaning "I am because we are"—holds
              that the self exists only in relationship, yet individual dignity remains sacred. The Japanese concept
              of <strong>Ma</strong> points to the pregnant pause, the space between—presence found not just in what's
              there but in the interval that makes music possible. Aboriginal Australian <strong>Dadirri</strong> is
              deep listening and still awareness, presence connecting to land, ancestors, and community across time.
              In Hindu tradition, <strong>darshan</strong> is the practice of "seeing and being seen" by the divine—presence
              as mutual recognition across the boundary between human and sacred.
            </p>
          </div>

          <div className={styles.tensions}>
            <h3>Tensions</h3>
            <p>
              The tension runs between <strong><em>within</em></strong> and <strong><em>between</em></strong>—am
              I incubating something alone or building something together? And between <strong><em>here</em></strong> and <strong><em>elsewhere</em></strong>—am
              I present to what's in front of me or reaching toward what's far away?
            </p>
            <p>
              Both are real. Both are needed. The collapse happens when we get stuck: isolation masquerading as
              independence, or losing ourselves so completely in others that we have nothing left to offer.
            </p>
          </div>

          <div className={styles.questions}>
            <h3>Questions for Exploration</h3>
            <ul>
              <li>When does solitary incubation become isolation, and when does shared presence become loss of self?</li>
              <li>Where does the space within me meet the space between us?</li>
              <li>How do we know when to be alone with our becoming and when to bring it into relationship?</li>
              <li>Who am I when I'm alone, and who do I become in the meeting?</li>
            </ul>
          </div>

          <div className={styles.metaQuestion}>
            <h3>When presence gets complicated, ask the Meta-Question:</h3>
            <p className={styles.highlight}>
              <em>What is being met here?</em>
            </p>
            <p>
              Not "am I being present enough?"—that's performance. But genuinely: what's the quality of this encounter?
              What wants to happen between us—or within me—right now?
            </p>
          </div>

          <p className={styles.transition}>
            <em>Once we know who's there, the next question is what we're allowed to do together.</em>
          </p>
        </div>

        {/* CONSENT */}
        <div className={styles.threadSection}>
          <h2>The Second Thread: CONSENT</h2>

          <div className={styles.seedQuestion}>
            <strong>The Seed:</strong> <em>What may I...?</em>
          </div>

          <p>Two words that change everything.</p>

          <p>
            Watch a parent who asks their child "Can I give you a hug?" versus one who simply grabs them. Watch
            a meeting where the leader says "I'd like to propose something—are you open to hearing it?" versus
            one who steamrolls ahead. The first approach treats the other person as a sovereign being. The second
            treats them as an obstacle or instrument.
          </p>

          <p>
            "No one can make you feel inferior without your consent," Eleanor Roosevelt said. She understood that
            consent isn't just about permission—it's about dignity. It's the recognition that every person has the
            right to say no, the right to change their yes to no, and the right to be asked rather than assumed upon.
          </p>

          <div className={styles.culturalLenses}>
            <h3>Cultural Lenses</h3>
            <p>
              This recognition of sovereignty runs deep across human cultures. The <strong>Haudenosaunee (Iroquois)
              Great Law of Peace</strong> requires that decisions consider their impact on seven generations—consent
              extending beyond those present to those not yet born. West African <strong>Palaver</strong> is community
              decision-making where everyone speaks until consensus emerges; no one is overridden, and the process
              continues until all can live with the outcome.
            </p>
            <p>
              Japanese <strong>Nemawashi</strong>—literally "going around the roots"—is the practice of building
              informal consensus before any formal decision, ensuring no one is surprised or steamrolled. Hawaiian <strong>Ho'oponopono</strong> is
              a reconciliation practice requiring the genuine consent and participation of all parties; forgiveness
              cannot be imposed but must be chosen by everyone involved.
            </p>
            <p>
              This matters enormously in relationships. The partner who checks in—"Is this still working for you?"—rather
              than assuming. The friend who asks before sharing your story with others. The community that builds
              agreements together rather than imposing rules from above.
            </p>
          </div>

          <div className={styles.tensions}>
            <h3>Tensions</h3>
            <p>
              The tension runs between <strong><em>yes</em></strong> and <strong><em>no</em></strong>—the
              giving and withholding of permission—and between <strong><em>self</em></strong> and <strong><em>other</em></strong>—whose
              sovereignty is at stake? Am I honoring my own boundaries? Am I respecting yours?
            </p>
          </div>

          <div className={styles.questions}>
            <h3>Questions for Exploration</h3>
            <ul>
              <li>When is Yes a gift freely given and when is it surrender to pressure?</li>
              <li>Where does honoring my sovereignty meet honoring yours?</li>
              <li>How do we ask in ways that make No safe to say?</li>
              <li>Who am I when I give consent, and who am I when I withhold it?</li>
            </ul>
          </div>

          <div className={styles.metaQuestion}>
            <h3>When consent gets murky, ask the Meta-Question:</h3>
            <p className={styles.highlight}>
              <em>Is every being choosing?</em>
            </p>
            <p>
              In this conversation, this decision, this relationship—is everyone actually free to participate or refuse?
              Or has someone's sovereignty been quietly overridden?
            </p>
          </div>

          <p className={styles.transition}>
            <em>And what we allow—or refuse—is shaped by the stories we carry.</em>
          </p>
        </div>

        {/* MEMORY */}
        <div className={styles.threadSection}>
          <h2>The Third Thread: MEMORY</h2>

          <div className={styles.seedQuestion}>
            <strong>The Seed:</strong> <em>Why do I...?</em>
          </div>

          <p>
            "The past is never dead," William Faulkner wrote. "It's not even past."
          </p>

          <p>
            We live in stories—the ones our families told about us before we could speak, the ones our communities
            repeat about who they are, the ones we tell ourselves about what our experiences mean. Some of these
            stories liberate us. Others imprison us. The question is whether we're telling the story or the story
            is telling us.
          </p>

          <p>
            Toni Morrison understood this. Her novels wrestle with how we carry history—the trauma passed down through
            generations, the memories that protect and the memories that bind. "You are your best thing," she wrote
            in <em>Beloved</em>—a radical claim that we are more than what happened to us, more than what others remember.
          </p>

          <div className={styles.culturalLenses}>
            <h3>Cultural Lenses</h3>
            <p>
              Every culture grapples with how to hold the past. The Akan symbol <strong>Sankofa</strong>—a bird
              flying forward while looking backward, reaching back to take an egg from its own back—teaches that
              "it is not taboo to go back and fetch what you forgot." Memory is active retrieval in service of the future.
              In Aboriginal Australian understanding, the <strong>Dreamtime</strong> is not past but eternally present;
              stories aren't just remembered but walked, sung into the land, re-enacted. The West African <strong>Griot
              tradition</strong> entrusts hereditary storytellers with carrying the community's memory, holding enormous
              power in shaping how the past is told—and thus who the people understand themselves to be. Mexican <strong>Día
              de los Muertos</strong> maintains that the dead return; memory isn't passive recollection but active
              relationship—you set a place at the table, bring their favorite foods, maintain the bond.
            </p>
            <p>
              But this isn't about erasing the past. A family that refuses to speak about the addiction, the abuse,
              the betrayal doesn't heal—it passes the silence down. A community that bulldozes its history loses
              something it can never recover. The work is more delicate: choosing what to carry and how to carry it.
            </p>
          </div>

          <div className={styles.tensions}>
            <h3>Tensions</h3>
            <p>
              The tension runs between <strong><em>given</em></strong> and <strong><em>chosen</em></strong>—did
              I inherit this story or pick it up?—and between <strong><em>telling</em></strong> and <strong><em>told</em></strong>—am
              I the narrator or the character? Some stories we carry freely, honoring where we came from while adding
              our own chapter. Others have taken over, running on repeat whether we chose them or not.
            </p>
          </div>

          <div className={styles.questions}>
            <h3>Questions for Exploration</h3>
            <ul>
              <li>When does honoring inherited story become bondage, and when does re-authoring become erasure?</li>
              <li>Where does what was given to us become what we choose to carry?</li>
              <li>How do we know when we're telling our story and when it's telling us?</li>
              <li>Who are we if we're not who others remember us to be?</li>
            </ul>
          </div>

          <div className={styles.metaQuestion}>
            <h3>When memory gets heavy, ask the Meta-Question:</h3>
            <p className={styles.highlight}>
              <em>What do we want our story to be?</em>
            </p>
            <p>
              Not just "what happened?"—that's important but incomplete. What meaning do we make of it? What do
              we carry forward, and what do we finally set down?
            </p>
          </div>

          <p className={styles.transition}>
            <em>Before those stories drive our next move, we need to ask: is it time?</em>
          </p>
        </div>

        {/* PAUSE */}
        <div className={styles.threadSection}>
          <h2>The Fourth Thread: PAUSE</h2>

          <div className={styles.seedQuestion}>
            <strong>The Seed:</strong> <em>When can I...?</em>
          </div>

          <p>
            We live in a culture that confuses urgency with importance. The inbox demands immediate response. The
            news cycle rewards instant reaction. "Don't just stand there—do something!" we tell each other, as if
            stillness were always failure.
          </p>

          <p>
            But some of the wisest people who've ever lived knew better. "Nature does not hurry," Lao Tzu observed,
            "yet everything is accomplished." The Quakers sit in silence until the way forward becomes clear. Farmers
            know that you cannot rush a harvest.
          </p>

          <div className={styles.culturalLenses}>
            <h3>Cultural Lenses</h3>
            <p>
              The wisdom of timing runs across human cultures. Taoist <strong>Wu Wei</strong>—often mistranslated
              as "non-action"—really means action aligned with natural timing, knowing when to move and when to wait.
              The Tao Te Ching asks: "Do you have the patience to wait till your mud settles and the water is clear?"
              The Greek distinction between <strong>chronos</strong> (clock time) and <strong>kairos</strong> (the
              opportune moment) appears across traditions—action isn't just about what to do but when. Many African
              and Indigenous cultures operate in event-time rather than clock-time: things happen when they're ready,
              not when the schedule says. A meeting starts when the necessary people have arrived; a ceremony happens
              when conditions are right. The Jewish <strong>Shabbat</strong> builds sacred pause into the structure
              of time itself—rest isn't earned by productivity but commanded as essential to being fully human.
            </p>
            <p>
              Martin Luther King Jr. wrote about "the fierce urgency of now"—and he was right that justice delayed
              is justice denied. But he also spent years building relationships, training organizers, waiting for the
              right moment to act. The Montgomery Bus Boycott succeeded because people had prepared. The March on
              Washington came after countless smaller marches that taught them what worked.
            </p>
          </div>

          <div className={styles.tensions}>
            <h3>Tensions</h3>
            <p>
              The tension runs between <strong><em>not yet</em></strong> and <strong><em>now</em></strong>—is
              it time to move or time to wait?—and between <strong><em>more</em></strong> and <strong><em>enough</em></strong>—am
              I grasping for what I lack or resting in what I have? Some waiting is sacred patience, trusting that
              timing matters. Some waiting is fear dressed up as wisdom, hiding from what we're called to do. The
              difference isn't in the waiting itself but in what drives it.
            </p>
          </div>

          <div className={styles.questions}>
            <h3>Questions for Exploration</h3>
            <ul>
              <li>When is waiting sacred patience and when is it fear wearing wisdom's clothes?</li>
              <li>Where does "not yet" become "now"?</li>
              <li>How do we know if we're pausing from fullness or from avoidance?</li>
              <li>Who are we when we stop performing and proving?</li>
            </ul>
          </div>

          <div className={styles.metaQuestion}>
            <h3>When you're not sure whether to move or stay, ask the Meta-Question:</h3>
            <p className={styles.highlight}>
              <em>Does patience here lead to better actions?</em>
            </p>
            <p>
              If waiting serves what's trying to emerge, wait. If waiting is just avoidance, move. A pause that
              doesn't eventually lead somewhere isn't sacred—it's stuck.
            </p>
          </div>

          <p className={styles.transition}>
            <em>Timing isn't only a mental calculation—the body knows things the mind hasn't caught up to yet.</em>
          </p>
        </div>

        {/* EMBODIMENT */}
        <div className={styles.threadSection}>
          <h2>The Fifth Thread: EMBODIMENT</h2>

          <div className={styles.seedQuestion}>
            <strong>The Seed:</strong> <em>How does my body know?</em>
          </div>

          <p>
            You've had the experience: something feels wrong before you can say why. Your stomach tightens in a meeting.
            Your shoulders creep toward your ears around certain people. Your body knows things your mind hasn't caught up to yet.
          </p>

          <p>
            "The body keeps the score," Bessel van der Kolk writes. Trauma lives in our muscles, our nervous systems,
            our breath. But so does wisdom. The gut feeling that saves you from a bad decision. The inexplicable peace
            that tells you you're on the right path. The physical release when you finally tell the truth.
          </p>

          <p>
            Mary Oliver spent her life attending to this: "You only have to let the soft animal of your body love
            what it loves." We are not brains piloting meat vehicles. We are bodies—thinking, feeling, knowing bodies.
            Transformation that doesn't include the body isn't complete.
          </p>

          <div className={styles.culturalLenses}>
            <h3>Cultural Lenses</h3>
            <p>
              Every wisdom tradition has recognized this. Hindu <strong>Yoga</strong> integrates body and mind—not
              body as obstacle to transcendence but as vehicle for it. Traditional Chinese medicine understands <strong>Qi</strong> as
              life energy flowing through the body, reading symptoms as information, the body holding what the mind
              may not acknowledge. Afro-Brazilian <strong>Capoeira</strong> encodes resistance in movement; enslaved
              people preserved combat training as dance, the body carrying what couldn't be spoken. Aboriginal <strong>Songlines</strong> navigate
              land through song and walking—knowledge is not abstract but placed in the body moving through country.
              You know by walking. Sufi <strong>whirling</strong> makes the body the vehicle for divine encounter—you
              don't think your way to God; you turn.
            </p>
          </div>

          <div className={styles.tensions}>
            <h3>Tensions</h3>
            <p>
              The tension runs between <strong><em>think</em></strong> and <strong><em>feel</em></strong>—head
              knowledge and body knowledge—and between <strong><em>stay</em></strong> and <strong><em>go</em></strong>—remaining
              present in the body or fleeing into abstraction (or overwhelm). Some of us escape into our heads to
              avoid what the body carries. Others get so flooded by sensation that we dissociate, leaving the body
              behind. Neither is home.
            </p>
          </div>

          <div className={styles.questions}>
            <h3>Questions for Exploration</h3>
            <ul>
              <li>When does thinking become escape from the body, and when does feeling become flood that drives us out?</li>
              <li>Where does thought held in flesh become wisdom?</li>
              <li>How do we return to the body when it holds pain, trauma, or illness?</li>
              <li>Who am I if I trust what my body knows before my mind catches up?</li>
            </ul>
          </div>

          <div className={styles.metaQuestion}>
            <h3>When you've lost touch, ask the Meta-Question:</h3>
            <p className={styles.highlight}>
              <em>Can my body find solid ground here?</em>
            </p>
            <p>
              Not "what should I think about this?" but "where can I land?" Sometimes the body needs safety before
              it can speak. Sometimes it needs permission. Sometimes it just needs to be asked.
            </p>
          </div>

          <p className={styles.transition}>
            <em>And when we listen to the body, we often hear: "I don't know."</em>
          </p>
        </div>

        {/* UNCERTAINTY */}
        <div className={styles.threadSection}>
          <h2>The Sixth Thread: UNCERTAINTY</h2>

          <div className={styles.seedQuestion}>
            <strong>The Seed:</strong> <em>What is the mystery unveiling?</em>
          </div>

          <p>
            The poet John Keats called it "negative capability"—the ability to remain "in uncertainties, mysteries,
            doubts, without any irritable reaching after fact and reason." It's one of the hardest capacities to
            develop and one of the most transformative.
          </p>

          <p>
            We want answers. We want to know how the story ends, whether we're making the right choice, what will
            happen if we take the risk. The not-knowing feels unbearable.
          </p>

          <p>
            But Rainer Maria Rilke counseled patience with the questions themselves: "Live the questions now. Perhaps
            you will then gradually, without noticing it, live along some distant day into the answer." The answer
            that comes after sitting with the question is different—deeper, more genuinely yours—than the answer
            grabbed too quickly.
          </p>

          <div className={styles.culturalLenses}>
            <h3>Cultural Lenses</h3>
            <p>
              Wisdom traditions across the world have developed practices for holding mystery. Zen <strong>koans</strong>—"What
              is the sound of one hand clapping?"—are designed to break the mind's grasping after certainty. You
              don't solve a koan; you dissolve into it. The Hindu Upanishads teach <strong>Neti neti</strong>—"Not
              this, not that"—approaching the divine through negation; whatever you think it is, it's not that. The
              Tao Te Ching opens: "The Tao that can be named is not the eternal Tao." Mystery isn't a problem to
              solve but the nature of reality itself. Yoruba <strong>Ifá</strong> divination works with uncertainty
              through sacred practice—not eliminating mystery but entering relationship with it, reading patterns
              without claiming total knowledge. Sufi poets like Rumi and Hafiz wrote of the Beloved who is always
              beyond grasp: "Sell your cleverness and buy bewilderment."
            </p>
            <p>
              Richard Rohr puts it simply: "We do not think ourselves into new ways of living. We live ourselves
              into new ways of thinking." The mystery unveils itself to those who can wait with it, not to those
              who demand it reveal itself on their timeline.
            </p>
          </div>

          <div className={styles.tensions}>
            <h3>Tensions</h3>
            <p>
              The tension runs between <strong><em>hide</em></strong> and <strong><em>seek</em></strong>—do
              we rest in mystery or pursue it?—and between <strong><em>threat</em></strong> and <strong><em>wonder</em></strong>—is
              the unknown something to fear or something to marvel at? Dogma hides from uncertainty and treats it
              as threat: "We already have the answers; stop asking questions." Reverent inquiry seeks without grasping,
              letting mystery be a companion rather than an enemy.
            </p>
          </div>

          <div className={styles.questions}>
            <h3>Questions for Exploration</h3>
            <ul>
              <li>When is not-knowing humble receptivity and when is it avoiding the work of discernment?</li>
              <li>Where does seeking truth become grasping for control?</li>
              <li>How do we act decisively without pretending to know more than we do?</li>
              <li>Who are we when we stop needing to be right?</li>
            </ul>
          </div>

          <div className={styles.metaQuestion}>
            <h3>When certainty tempts you to close down, ask the Meta-Question:</h3>
            <p className={styles.highlight}>
              <em>How can wanting control give way to discovery?</em>
            </p>
            <p>
              We all want control—that's human. The question isn't whether we feel the pull but whether we can
              loosen our grip enough to receive what we couldn't have planned.
            </p>
          </div>

          <p className={styles.transition}>
            <em>What we do with not-knowing shapes who we're becoming.</em>
          </p>
        </div>

        {/* BECOMING */}
        <div className={styles.threadSection}>
          <h2>The Seventh Thread: BECOMING</h2>

          <div className={styles.seedQuestion}>
            <strong>The Seed:</strong> <em>Who am I becoming now?</em>
          </div>

          <p>T.S. Eliot captured the spiral perfectly:</p>

          <blockquote>
            <em>We shall not cease from exploration<br />
            And the end of all our exploring<br />
            Will be to arrive where we started<br />
            And know the place for the first time.</em>
          </blockquote>

          <p>
            Growth isn't a ladder. It's a spiral. You come back to the same relationships, the same wounds, the same
            questions—but you're not the same person arriving. You've been through something. You see it differently now.
          </p>

          <p>
            This is why recovery programs speak of "progress, not perfection." Why therapists aren't surprised when
            old patterns resurface. Why mystics describe the spiritual journey as returning home rather than escaping
            somewhere else. The spiral brings us back, and back, and back—each time with more tools, more compassion,
            more capacity to choose differently.
          </p>

          <div className={styles.culturalLenses}>
            <h3>Cultural Lenses</h3>
            <p>
              The understanding that all is becoming runs through human wisdom. Buddhist <strong>Anicca</strong> names
              impermanence as the nature of being—everything is always becoming, nothing stays the same; the self
              you were a moment ago is already gone. The Chinese <strong>I Ching</strong>—the Book of Changes—is
              an entire divination system built on the premise that transformation is constant and can be navigated
              but not stopped. Nearly every culture marks transformation through rites of passage—death and rebirth
              ceremonies where you die to who you were and are born into who you're becoming. The Maasai warrior
              initiation, the vision quest, the walkabout, bar and bat mitzvah, quinceañera—the spiral is universal.
              Hindu and Buddhist <strong>Samsara</strong> describes the wheel of becoming, cyclical and returning,
              but with the possibility of transformation through awareness. And <strong>Sankofa</strong> appears again:
              flying forward while looking back, because becoming doesn't abandon what came before.
            </p>
            <p>
              "Nothing is final. Nothing is fixed. All is becoming." The Greek philosopher Heraclitus knew this:
              you cannot step in the same river twice, because the river has changed and so have you.
            </p>
          </div>

          <div className={styles.tensions}>
            <h3>Tensions</h3>
            <p>
              The tension runs between <strong><em>same</em></strong> and <strong><em>different</em></strong>—have
              I actually changed or am I just going through the motions?—and between <strong><em>return</em></strong> and <strong><em>forward</em></strong>—am
              I spiraling back to old ground or pushing into new territory? The stuck loop keeps repeating without
              transformation. Linear progress moves forward without integrating. The spiral does both: returning and
              rising, remembering and becoming.
            </p>
          </div>

          <div className={styles.questions}>
            <h3>Questions for Exploration</h3>
            <ul>
              <li>When is returning to old ground wisdom and when is it regression?</li>
              <li>Where does the person I was meet the person I'm becoming?</li>
              <li>How do we know if we're spiraling forward or just going in circles?</li>
              <li>Who are we if nothing is final and nothing is fixed?</li>
            </ul>
          </div>

          <div className={styles.metaQuestion}>
            <h3>When you're not sure if you're growing or just going in circles, ask the Meta-Question:</h3>
            <p className={styles.highlight}>
              <em>What isn't finished in me?</em>
            </p>
            <p>
              This isn't accusation—"Why haven't you fixed this yet?" It's recognition that becoming continues.
              The unfinished isn't failure. It's life. The spiral breathes, and so do you.
            </p>
          </div>

          <p className={styles.transition}>
            <em>And who we're becoming changes how we show up—which brings us back to presence, transformed.</em>
          </p>
        </div>

        {/* CLOSING */}
        <div className={styles.closing}>
          <h2>The Threads Weave Together</h2>
          <p>
            Read the seeds as a journey: <em>Who's there? → May I? → What happened? → Why do we wait here? → How
            does my body know? → What is the mystery unveiling? → Who am I now?</em>
          </p>
          <p>
            And then notice: "Who am I now?" spirals back to "Who's there?"—presence encountered by someone transformed,
            beginning again with new eyes.
          </p>
          <p>
            These aren't seven separate topics. They're seven lenses on every significant moment. The difficult
            conversation activates presence <em>and</em> consent <em>and</em> memory <em>and</em> pause. The community
            conflict involves bodies <em>and</em> uncertainty <em>and</em> becoming. The tensions weave through each
            other like threads in fabric—which is why we call them threads.
          </p>
          <p className={styles.highlight}>
            The framework doesn't tell you what to believe. It offers a place to stand together while believing
            different things.
          </p>
          <p>
            That's the real gift: not common answers but common questions. Not resolution but the capacity to stay
            in the room while the tension does its work.
          </p>
        </div>

        <div className={styles.navigation}>
          <Link to="/five-moves" className={styles.navButton}>
            ← Previous: Five Practical Moves
          </Link>
          <Link to="/your-turn" className={styles.navButton}>
            Next: Your Turn →
          </Link>
        </div>

        <div style={{textAlign: 'center', marginTop: '2rem'}}>
          <a href="#top" className={styles.backToTop}>↑ Back to Top</a>
        </div>
      </section>
    </div>
  );
}
