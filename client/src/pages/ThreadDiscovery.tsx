import React from 'react';
import styles from './ThreadDiscovery.module.css';

const ThreadDiscovery: React.FC = () => {
  return (
    <div className={styles.threadDiscovery}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Thread Discovery Process</h1>
          <h2 className={`${styles.tagline} tagline`}>The art of recognizing universal tensions</h2>
          <p className={styles.subtitle}>
            A 6-step methodology for discovering, testing, and documenting the patterns that shape human experience
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-lg">
        <div className="container">
          <div className={styles.intro}>
            <p>
              Here's where your creativity will blossom for the highest purpose. The process of discovering a Thread is itself a thread, a tension between the individual and the universe. Not only is it rewarding (and maybe a little addicting), but it's also fun.
            </p>
            <p>
              While this process engages both curiosity and creativity, it grants the practitioner equal measures of joy and frustration. You will often run up against its limits. This primer is meant to lighten the load and help you apply your effort where it will most likely result in open dialogues with willing participants.
            </p>
            <p><strong>Happy threading!</strong></p>
          </div>
        </div>
      </section>

      {/* Video Overview */}
      <section className={`${styles.videoSection} section-lg`}>
        <div className="container">
          <h2>Overview: The Discovery Process</h2>
          <div className={styles.videoWrapper}>
            <video controls className={styles.mainVideo}>
              <source src="/threads_discovery-process.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* How to Recognize a Universal Thread */}
      <section className={`${styles.recognition} section-lg`}>
        <div className="container">
          <h2>How to Recognize a Universal Thread</h2>
          <p className={styles.sectionIntro}>A thread might be universal if:</p>
          <div className={styles.criteria}>
            <div className={styles.criterion}>
              <p>You find it appearing across multiple wisdom traditions (differently expressed)</p>
            </div>
            <div className={styles.criterion}>
              <p>It represents a tension that can't be permanently resolved</p>
            </div>
            <div className={styles.criterion}>
              <p>It shows up in both individual and collective experience</p>
            </div>
            <div className={styles.criterion}>
              <p>Children naturally encounter it without being taught</p>
            </div>
            <div className={styles.criterion}>
              <p>It generates creative energy when held consciously</p>
            </div>
            <div className={styles.criterion}>
              <p>Avoiding it creates stagnation or suffering</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Diagram */}
      <section className={`${styles.diagram} section-lg`}>
        <div className="container">
          <h2>The 6-Step Discovery Process</h2>
          <div className={styles.diagramWrapper}>
            <img src="/thread-discovery.png" alt="Thread Discovery Process Diagram" className={styles.processImage} />
          </div>
        </div>
      </section>

      {/* Step 1 */}
      <section className={`${styles.step} section-lg`}>
        <div className="container">
          <div className={styles.stepNumber}>1</div>
          <h2>Notice Recurring Tensions</h2>
          <div className={styles.stepContent}>
            <p>What conflicts keep appearing in different forms? What questions do you return to throughout life?</p>
            <p>Look for patterns across domains — the same tension showing up in relationships, work, spiritual practice, creative endeavors. The thread that weaves through everything is likely universal.</p>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className={`${styles.step} section-lg`}>
        <div className="container">
          <div className={styles.stepNumber}>2</div>
          <h2>Feel the Poles</h2>
          <div className={styles.stepContent}>
            <p>What are the two (or more) truths pulling against each other? Name them without choosing sides.</p>
            <p>Resist the urge to resolve. If you find yourself thinking "the answer is obviously..." you may be collapsing a genuine tension. Both poles exist because both contain truth.</p>
          </div>
        </div>
      </section>

      {/* Video: From Specific to Universal */}
      <section className={`${styles.videoSection} section-lg`}>
        <div className="container">
          <h2>Step 3: Find the Universal</h2>
          <div className={styles.stepContent}>
            <p>Strip away specific context. What's the deeper pattern? What would someone in any culture recognize?</p>
            <p>Remove proper nouns, tradition-specific language, contemporary references. What remains? If a shepherd 3,000 years ago and a programmer today would both recognize the tension, you're approaching universality.</p>
          </div>
          <div className={styles.videoWrapper}>
            <video controls className={styles.stepVideo}>
              <source src="/from-specific-to-universal.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className={`${styles.step} section-lg`}>
        <div className="container">
          <div className={styles.stepNumber}>4</div>
          <h2>Locate the Creative Edge</h2>
          <div className={styles.stepContent}>
            <p>Where does this tension generate energy rather than paralysis? What becomes possible by holding both/all sides?</p>
            <p>Not all tensions are generative. Some are merely frustrating, some are artifacts of confused thinking. A true thread produces creative possibility when held consciously — new options emerge that weren't visible when you stood at either pole alone.</p>
          </div>
        </div>
      </section>

      {/* Step 5 */}
      <section className={`${styles.step} section-lg`}>
        <div className="container">
          <div className={styles.stepNumber}>5</div>
          <h2>Test Across Difference</h2>
          <div className={styles.stepContent}>
            <p>Does this resonate across generations, cultures, belief systems, and life experiences?</p>
            <p>Share your emerging thread with people unlike yourself. Not to convince them, but to see if they recognize it from their own experience. Pay attention to what translates and what doesn't.</p>
          </div>
        </div>
      </section>

      {/* Video: Holding Questions */}
      <section className={`${styles.videoSection} section-lg`}>
        <div className="container">
          <h2>Step 6: Formulate Generative Questions</h2>
          <div className={styles.stepContent}>
            <p>Craft questions that open exploration rather than close it. What asks will invite others into this tension from their own experience and tradition?</p>
            <p>Questions are the invitation mechanism. Without them, you have a private insight rather than a shared inquiry. A well-formulated question turns a tension you've discovered into a space others can enter.</p>
          </div>
          <div className={styles.videoWrapper}>
            <video controls className={styles.stepVideo}>
              <source src="/holding-questions.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* The Art of Thread Questions */}
      <section className={`${styles.questions} section-lg`}>
        <div className="container">
          <h2>The Art of Thread Questions</h2>
          <p className={styles.sectionIntro}>Thread questions come in three forms, each serving a different purpose:</p>

          <div className={styles.questionTypes}>
            <div className={styles.questionType}>
              <h3>1. Universal Questions</h3>
              <p>These elaborate the tension into specific facets — each one a doorway into the same room from a different angle. Aim for 4-6 questions that together map the territory of the tension.</p>

              <h4>Criteria for universal questions:</h4>
              <ul>
                <li>Can't be answered definitively (resists closure)</li>
                <li>Holds both poles without privileging either</li>
                <li>Invites tradition-specific responses without requiring them</li>
                <li>Generates curiosity rather than defensiveness</li>
                <li>Accessible across education and sophistication levels</li>
                <li>Points toward lived experience, not just abstraction</li>
              </ul>

              <div className={styles.videoWrapper}>
                <video controls className={styles.stepVideo}>
                  <source src="/art-of-generative-questions.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <h4>Six Heuristics for Generating Them:</h4>
              <div className={styles.heuristics}>
                <div className={styles.heuristic}>
                  <h5>The Pole Dance</h5>
                  <p>Ask a question that requires valuing both poles to answer:</p>
                  <blockquote>"When is stillness preparation and when is it avoidance?"</blockquote>
                </div>
                <div className={styles.heuristic}>
                  <h5>The Threshold Question</h5>
                  <p>Ask where the boundary between poles blurs:</p>
                  <blockquote>"Where does spirit meet matter?"</blockquote>
                </div>
                <div className={styles.heuristic}>
                  <h5>The Practitioner Question</h5>
                  <p>Ask how to actually navigate the tension:</p>
                  <blockquote>"How do we know when to move and when to wait?"</blockquote>
                </div>
                <div className={styles.heuristic}>
                  <h5>The Stakes Question</h5>
                  <p>Ask what happens at the extremes:</p>
                  <blockquote>"When does certainty become dogma and uncertainty become paralysis?"</blockquote>
                </div>
                <div className={styles.heuristic}>
                  <h5>The Identity Question</h5>
                  <p>Ask what the tension reveals about the self:</p>
                  <blockquote>"Who are we if we're always becoming?"</blockquote>
                </div>
                <div className={styles.heuristic}>
                  <h5>The Tradition-Bridge Question</h5>
                  <p>Ask what would spark cross-tradition dialogue:</p>
                  <blockquote>"What does 'yes' mean in a universe of forces beyond our control?"</blockquote>
                </div>
              </div>
            </div>

            <div className={styles.questionType}>
              <h3>2. The Seed Question</h3>
              <p>The most distilled form — almost primordial. One question that cracks open the entire tension.</p>

              <h4>Examples from current threads:</h4>
              <ul className={styles.seedExamples}>
                <li>"Where am I...?" <span className={styles.threadTag}>(PRESENCE)</span></li>
                <li>"What may I...?" <span className={styles.threadTag}>(CONSENT)</span></li>
                <li>"Why do I...?" <span className={styles.threadTag}>(MEMORY)</span></li>
                <li>"When can I...?" <span className={styles.threadTag}>(PAUSE)</span></li>
                <li>"How does my body know?" <span className={styles.threadTag}>(EMBODIMENT)</span></li>
                <li>"What is the mystery unveiling?" <span className={styles.threadTag}>(UNCERTAINTY)</span></li>
                <li>"Who am I becoming?" <span className={styles.threadTag}>(BECOMING)</span></li>
              </ul>

              <h4>Criteria for a good seed:</h4>
              <ul>
                <li>Answerable by a child, inexhaustible by a sage</li>
                <li>2-5 words</li>
                <li>No jargon, no tradition-specific language</li>
                <li>Evokes felt sense before intellectual response</li>
                <li>Contains the tension implicitly without naming it</li>
              </ul>

              <div className={styles.testBox}>
                <strong>Test:</strong> If someone from any background can immediately feel why this question matters, you have a seed.
              </div>
            </div>

            <div className={styles.questionType}>
              <h3>3. The Meta-Question</h3>
              <p>Each thread carries an implicit question about how to hold this particular tension without resolving it prematurely. This question acknowledges that navigation itself requires wisdom.</p>
              <p>The Meta-Question comes last. As people engage the Universal Questions, they often drift toward one pole — collapsing the tension rather than holding it. Naming the collapse creates space to move again.</p>

              <h4>Examples:</h4>
              <ul className={styles.metaExamples}>
                <li><strong>PRESENCE:</strong> "What are we afraid to feel if we stay?"</li>
                <li><strong>CONSENT:</strong> "What shame is hiding in how we talk about choice?"</li>
                <li><strong>MEMORY:</strong> "Who would we be if we were finally allowed to put this down?"</li>
                <li><strong>PAUSE:</strong> "What are we afraid will happen if we stop — or if we don't?"</li>
                <li><strong>EMBODIMENT:</strong> "What has this body been asked to carry?"</li>
                <li><strong>UNCERTAINTY:</strong> "What safety are we seeking in our answer?"</li>
                <li><strong>BECOMING:</strong> "What if who you are right now is not a problem to be solved?"</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Question Quality Tests */}
      <section className={`${styles.qualityTests} section-lg`}>
        <div className="container">
          <h2>Question Quality Tests</h2>
          <p className={styles.sectionIntro}>Before finalizing your questions, run each through these filters:</p>

          <div className={styles.tests}>
            <div className={styles.test}>
              <h3>The Tradition Test</h3>
              <p>Can a Buddhist, a Baptist, and an atheist each find entry? If a question assumes a particular worldview, it may not be universal.</p>
            </div>
            <div className={styles.test}>
              <h3>The Embodiment Test</h3>
              <p>Does this question land in the body or just the head? The best questions create a felt sense, not just intellectual curiosity.</p>
            </div>
            <div className={styles.test}>
              <h3>The Dinner Table Test</h3>
              <p>Would this generate genuine conversation among non-academics? If it requires specialized vocabulary to understand, simplify.</p>
            </div>
            <div className={styles.test}>
              <h3>The Return Test</h3>
              <p>Is this a question you could return to across decades without exhausting it? Thread questions should be inexhaustible.</p>
            </div>
            <div className={styles.test}>
              <h3>The Both/And Test</h3>
              <p>Does answering require holding tension, or does it invite pole-choosing? Questions that can be answered by simply picking a side aren't thread questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice for Question Generation */}
      <section className={`${styles.practice} section-lg`}>
        <div className="container">
          <h2>A Practice for Question Generation</h2>
          <p className={styles.sectionIntro}>When you've identified a potential thread and are ready to formulate questions:</p>

          <div className={styles.practiceSteps}>
            <div className={styles.practiceStep}>
              <div className={styles.practiceNumber}>1</div>
              <div className={styles.practiceContent}>
                <h3>Settle</h3>
                <p>Sit with the tension for a few breaths. Let it live in your body, not just your mind.</p>
              </div>
            </div>
            <div className={styles.practiceStep}>
              <div className={styles.practiceNumber}>2</div>
              <div className={styles.practiceContent}>
                <h3>Expand</h3>
                <p>Write 10-15 questions about this tension without filtering. Use the six heuristics as prompts. Don't judge — just generate.</p>
              </div>
            </div>
            <div className={styles.practiceStep}>
              <div className={styles.practiceNumber}>3</div>
              <div className={styles.practiceContent}>
                <h3>Feel</h3>
                <p>Read through your questions. Circle the ones that made you feel something — curiosity, recognition, slight discomfort, aliveness.</p>
              </div>
            </div>
            <div className={styles.practiceStep}>
              <div className={styles.practiceNumber}>4</div>
              <div className={styles.practiceContent}>
                <h3>Test</h3>
                <p>Run your circled questions through the quality tests above. Which survive?</p>
              </div>
            </div>
            <div className={styles.practiceStep}>
              <div className={styles.practiceNumber}>5</div>
              <div className={styles.practiceContent}>
                <h3>Distill</h3>
                <p>Ask yourself: "If I could only ask one question about this for the rest of my life, what would it be?" This may be your seed.</p>
              </div>
            </div>
            <div className={styles.practiceStep}>
              <div className={styles.practiceNumber}>6</div>
              <div className={styles.practiceContent}>
                <h3>Refine</h3>
                <p>Shape your surviving questions. Remove unnecessary words. Ensure each opens rather than closes. Aim for 4-6 Universal Questions plus your Seed.</p>
              </div>
            </div>
            <div className={styles.practiceStep}>
              <div className={styles.practiceNumber}>7</div>
              <div className={styles.practiceContent}>
                <h3>Share</h3>
                <p>Offer your questions to others — especially people different from you. The questions themselves become the Test Across Difference from Step 5. Notice which questions spark recognition and which fall flat.</p>
              </div>
            </div>
          </div>

          <div className={styles.insight}>
            <p>Notice that formulating questions and testing across difference are not strictly sequential — they inform each other. Your questions become how you test universality. When you share a question and someone's eyes light up with recognition, you've found something real. When a question confuses or excludes, you've found an edge that needs work.</p>
          </div>
        </div>
      </section>

      {/* Example: THRESHOLD Thread */}
      <section className={`${styles.example} section-lg`}>
        <div className="container">
          <h2>Example: The THRESHOLD Thread</h2>
          <p className={styles.sectionIntro}>Using the discovery process demonstrated in the explainer videos:</p>

          <div className={styles.threadExample}>
            <div className={styles.exampleSeed}>
              <h3>Seed Question</h3>
              <p className={styles.seedQuestion}>"Who belongs?"</p>
            </div>

            <div className={styles.exampleTension}>
              <h3>The Tension</h3>
              <p><strong>Inside vs. Outside • Us vs. Them</strong></p>
            </div>

            <div className={styles.exampleQuestions}>
              <h3>Universal Questions</h3>
              <ul>
                <li><strong>Pole-dance:</strong> When does protecting our community's identity become harmful exclusion?</li>
                <li><strong>Threshold:</strong> Where does the actual line between Us and Them begin—is it a solid wall, or is it a shared space?</li>
                <li><strong>Practitioner:</strong> How do we decide to open the gates of our own community and when to keep them closed for our own safety?</li>
                <li><strong>Stakes:</strong> When does our strong group loyalty become dangerous nationalism, and when does being radically open dissolve our group's identity entirely?</li>
                <li><strong>Identity:</strong> Who are we if the very definition of "Us" keeps changing by welcoming "Them"?</li>
                <li><strong>Tradition Bridge:</strong> What does it mean to belong in a world where every tradition draws the circle of community in a different place?</li>
              </ul>
            </div>

            <div className={styles.exampleMeta}>
              <h3>Meta-Question</h3>
              <p>"How do we know if our circle is drawn in love or in fear?"</p>
            </div>

            <div className={styles.exampleEdge}>
              <h3>The Creative Edge</h3>
              <p>Collapse to either pole and something essential dies. Dissolve all boundaries and identity diffuses into abstraction. Rigidify the boundary and stagnation follows.</p>
              <p>Hold the tension and new possibilities emerge: discernment over rules, threshold as transformation space, hospitality and safety together, mutual transformation, the stranger as revelation.</p>
              <p>What becomes possible is <em>covenant hospitality</em>: a community secure enough in its identity to open its doors, clear enough about its center to welcome those still finding their way, and humble enough to be changed by those it welcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* When Discovery Gets Hard */}
      <section className={`${styles.challenges} section-lg`}>
        <div className="container">
          <h2>When Thread Discovery Gets Hard</h2>
          <p className={styles.sectionIntro}>The discovery process will humble you. Here's what to expect:</p>

          <div className={styles.challengeList}>
            <div className={styles.challenge}>
              <h3>The Resonance Gap</h3>
              <p>You find a tension that feels profoundly universal, but when you share it, people look at you blankly. Either you haven't found the universal yet (still too embedded in your particular experience), or you haven't found the right questions yet. Return to Step 3 and strip away more context.</p>
            </div>
            <div className={styles.challenge}>
              <h3>Wound Masquerading as Wisdom</h3>
              <p>Intense personal experience can feel like universal truth. But intensity isn't universality. The question isn't whether your experience was real (it was) but whether the pattern beneath it appears across human experience or primarily explains your own.</p>
            </div>
            <div className={styles.challenge}>
              <h3>Conceptual Confusion, Not Genuine Polarity</h3>
              <p>Some tensions dissolve under scrutiny. What felt like two truths pulling against each other turns out to be a misunderstanding. Genuine threads can't be thought away; they can only be navigated.</p>
            </div>
            <div className={styles.challenge}>
              <h3>The Creative Edge That Isn't</h3>
              <p>You've identified a real tension, but it generates more exhaustion than energy. Not all tensions are generative. If holding the tension yields nothing but fatigue, honor what you've found and set it aside. Not every truth needs to become a Thread.</p>
            </div>
            <div className={styles.challenge}>
              <h3>Redundancy in Disguise</h3>
              <p>Your "new" thread is actually a facet of an existing one. This isn't wasted effort — you've deepened your understanding of how threads manifest. Your discovery belongs in conversation with existing threads rather than alongside them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className={`${styles.closing} section-lg`}>
        <div className="container">
          <div className={styles.closingContent}>
            <p className={styles.closingQuote}>
              <em>The Thread Discovery Process is itself a thread — Structure vs. Emergence, Method vs. Intuition. Use this process as scaffold, not cage. Let your own discovery teach you how discovery works.</em>
            </p>
            <div className={styles.closingCta}>
              <h3>Ready to Explore?</h3>
              <p>If you've discovered a thread and want to share it with the community, we invite you to contribute.</p>
              <a href="/contact" className={styles.ctaButton}>Share Your Discovery</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreadDiscovery;
