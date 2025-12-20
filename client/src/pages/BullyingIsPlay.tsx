import React from 'react';
import styles from './BullyingIsPlay.module.css';

const BullyingIsPlay: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Bullying is Play</h1>
        <p className={styles.subtitle}>
          How Bullying is Collapsed Play and How to Disrupt Its Reward System
        </p>
        <div className={styles.framingStatement}>
          <p className={styles.framingQuote}>
            "I was just playing around" is usually true.
          </p>
          <p className={styles.framingTruth}>
            And that truth is exactly why most anti-bullying approaches fail.
          </p>
        </div>
        <div className={styles.revolutionaryCore}>
          <p className={styles.coreStatement}>
            We don't stop bullying.<br />
            We teach kids to hold the tension of power, consent, pause, and embodiment—<br />
            so play doesn't collapse into harm.
          </p>
        </div>
      </section>

      {/* The Paradigm Shift */}
      <section className={`${styles.paradigmShift} section-lg`}>
        <div className="container">
          <h2>The Paradigm Shift: From Anti-Bullying to Anti-Collapse</h2>

          <div className={styles.comparisonGrid}>
            <div className={styles.traditionalBox}>
              <h3>Traditional Anti-Bullying</h3>
              <p className={styles.frameworkLabel}>Moral Framework</p>
              <div className={styles.framework}>
                <div className={styles.frameworkItem}>
                  <strong>Premise:</strong> Bullying = bad behavior by bad kids
                </div>
                <div className={styles.frameworkItem}>
                  <strong>Intervention:</strong> Punishment, exclusion, moral correction
                </div>
                <div className={styles.frameworkItem}>
                  <strong>Outcome:</strong> Behavior goes underground, shame increases, no alternative learned
                </div>
                <div className={styles.frameworkItem}>
                  <strong>Collapse:</strong> Everyone frozen in roles (bully/victim/bystander)
                </div>
              </div>
            </div>

            <div className={styles.antiCollapseBox}>
              <h3>Anti-Collapse Framework</h3>
              <p className={styles.frameworkLabel}>Developmental Framework</p>
              <div className={styles.framework}>
                <div className={styles.frameworkItem}>
                  <strong>Premise:</strong> Bullying = play with collapsed safety mechanisms
                </div>
                <div className={styles.frameworkItem}>
                  <strong>Intervention:</strong> Restore consent, pause, and embodied feedback
                </div>
                <div className={styles.frameworkItem}>
                  <strong>Outcome:</strong> Status-preserving off-ramps, agency intact, alternative strategies learned
                </div>
                <div className={styles.frameworkItem}>
                  <strong>Liberation:</strong> Everyone can emerge as who they're becoming
                </div>
              </div>
            </div>
          </div>

          <div className={styles.keyInsight}>
            <p className={styles.insightText}>
              <strong>"Play is powerful. And power needs consent, pause, and care — or it turns into harm."</strong>
            </p>
          </div>
        </div>
      </section>

      {/* The Three Thread Collapses */}
      <section className={`${styles.threadCollapses} section-lg`}>
        <div className="container">
          <h2>The Three Thread Collapses</h2>
          <p className={styles.sectionIntro}>
            Bullying is <strong>play that collapses three critical threads</strong>. Understanding this changes everything.
          </p>
          <div className={styles.collapseDefinition}>
            <p className={styles.definitionText}>
              Play becomes bullying when consent, pause, and embodied feedback are no longer available.
            </p>
          </div>

          <div className={styles.collapseGrid}>
            {/* Consent Collapse */}
            <div className={styles.collapseCard}>
              <div className={styles.collapseHeader}>
                <div className={styles.collapseNumber}>1</div>
                <h3>CONSENT collapses to "Yes" without asking</h3>
              </div>

              <div className={styles.collapseContent}>
                <div className={styles.healthyPlay}>
                  <h4>Healthy Play:</h4>
                  <ul>
                    <li>"Do you want to play?"</li>
                    <li>"Can I join?"</li>
                    <li>"Is this okay with you?"</li>
                    <li>Both people's consent actively negotiated</li>
                    <li>"No" is honored</li>
                  </ul>
                </div>

                <div className={styles.collapsedPlay}>
                  <h4>Collapsed Play (Bullying):</h4>
                  <ul>
                    <li>"You're playing whether you want to or not"</li>
                    <li>The Other's "no" is invisible, unsafe, or socially inconvenient</li>
                    <li>One-sided consent assumption</li>
                    <li>Peer laughter overrides target's distress signals</li>
                  </ul>
                </div>

                <div className={styles.whatCollapsed}>
                  <strong>What collapsed:</strong> The thread of CONSENT (Within/Between) — mutual recognition of both people's boundaries
                </div>

                <div className={styles.howSafeRestores}>
                  <strong>How S.A.F.E. restores it:</strong>
                  <p><strong>ASK:</strong> "What do you need?" / "What do they need?" = Consent mechanism restored</p>
                </div>
              </div>
            </div>

            {/* Pause Collapse */}
            <div className={styles.collapseCard}>
              <div className={styles.collapseHeader}>
                <div className={styles.collapseNumber}>2</div>
                <h3>PAUSE collapses to "More" without checking in</h3>
              </div>

              <div className={styles.collapseContent}>
                <div className={styles.healthyPlay}>
                  <h4>Healthy Play:</h4>
                  <ul>
                    <li>"Is this too much?"</li>
                    <li>"Should we slow down?"</li>
                    <li>"Do we need to check in?"</li>
                    <li>Built-in escalation brakes</li>
                    <li>Regular assessment: Is this still okay?</li>
                  </ul>
                </div>

                <div className={styles.collapsedPlay}>
                  <h4>Collapsed Play (Bullying):</h4>
                  <ul>
                    <li>"More. Harder. Keep going until I decide to stop"</li>
                    <li>No pause mechanism</li>
                    <li>Escalation loop without reflection</li>
                    <li>The "trance" of automatic play</li>
                  </ul>
                </div>

                <div className={styles.whatCollapsed}>
                  <strong>What collapsed:</strong> The thread of PAUSE (Now/Not Yet) — the ability to slow down and assess
                </div>

                <div className={styles.howSafeRestores}>
                  <strong>How S.A.F.E. restores it:</strong>
                  <p><strong>SEE:</strong> "I SEE something happening" = Interrupt the automatic play loop</p>
                  <p><strong>EMERGE:</strong> "Who do you want to be right now?" = Space to choose</p>
                </div>
              </div>
            </div>

            {/* Embodiment Collapse */}
            <div className={styles.collapseCard}>
              <div className={styles.collapseHeader}>
                <div className={styles.collapseNumber}>3</div>
                <h3>EMBODIMENT collapses to "Stay" without inclusive feedback</h3>
              </div>

              <div className={styles.collapseContent}>
                <div className={styles.healthyPlay}>
                  <h4>Healthy Play:</h4>
                  <ul>
                    <li>"How does your body feel?"</li>
                    <li>"What are you noticing?"</li>
                    <li>"Are we both still having fun?"</li>
                    <li>Both people's body signals matter</li>
                    <li>Somatic feedback is honored</li>
                  </ul>
                </div>

                <div className={styles.collapsedPlay}>
                  <h4>Collapsed Play (Bullying):</h4>
                  <ul>
                    <li>"Your body's signals don't count. Only mine do"</li>
                    <li>Excitement/adrenaline in the bully overrides distress in the target</li>
                    <li>"Everyone was laughing" (peer embodiment) drowns out target's freeze/fawn</li>
                    <li>Disconnection from own body signals</li>
                  </ul>
                </div>

                <div className={styles.whatCollapsed}>
                  <strong>What collapsed:</strong> The thread of EMBODIMENT (Body Knows) — inclusive somatic awareness
                </div>

                <div className={styles.howSafeRestores}>
                  <strong>How S.A.F.E. restores it:</strong>
                  <p><strong>FEEL:</strong> "What's going on in your body?" = Notice your own signals</p>
                  <p>"Can you feel what's happening in their body?" = Include the Other's embodiment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why "I Was Just Playing" Is Usually True */}
      <section className={`${styles.justPlaying} section-lg`}>
        <div className="container">
          <h2>Why "I Was Just Playing" Is Usually True</h2>
          <p className={styles.sectionIntro}>
            <strong>"I was just playing around" is not denial — it's a developmental reality.</strong>
          </p>

          <div className={styles.realityBox}>
            <p>For many kids (especially elementary and early middle school), bullying is <strong>play under distorted conditions</strong>.</p>
            <p>Not "evil." Not even always "anger."</p>

            <div className={styles.playPurposes}>
              <div className={styles.purposeColumn}>
                <h3>It's play that:</h3>
                <ul>
                  <li>Rewards status</li>
                  <li>Entertains peers</li>
                  <li>Tests boundaries</li>
                  <li>Regulates anxiety</li>
                  <li>Externalizes internal pressure</li>
                  <li>Rehearses power</li>
                </ul>
              </div>

              <div className={styles.purposeColumn}>
                <h3>From the bully's internal experience, this often feels like:</h3>
                <ul>
                  <li><em>Fun</em></li>
                  <li><em>Connection</em></li>
                  <li><em>Relief</em></li>
                  <li><em>Belonging</em></li>
                  <li><em>Competence</em></li>
                  <li><em>Being seen</em></li>
                </ul>
              </div>
            </div>

            <div className={styles.criticalPoint}>
              <p><strong>That doesn't make the harm less real</strong> — but it radically changes <strong>what intervention must do</strong>.</p>
            </div>
          </div>

          <div className={styles.loopComparison}>
            <div className={styles.loopBox}>
              <h3>Most programs assume:</h3>
              <p className={styles.loopFormula}>Harm comes from cruelty → remove cruelty → behavior stops</p>
            </div>

            <div className={styles.loopBox}>
              <h3>But often the loop is:</h3>
              <p className={styles.loopFormula}>Unmet need → playful power → social reward → repetition</p>
            </div>
          </div>

          <p className={styles.conclusion}>
            If you don't address the <em>play-reward loop</em>, punishment just drives it underground.
          </p>
        </div>
      </section>

      {/* The Bully is Also a Victim */}
      <section className={`${styles.bullyAsVictim} section-lg`}>
        <div className="container">
          <h2>The Bully is Also a Victim — Of Collapsed Play They Learned Elsewhere</h2>

          <div className={styles.learningBox}>
            <p className={styles.uncomfortable}>Here's where it gets uncomfortable:</p>

            <p>Most bullies learned collapsed play from:</p>
            <ul className={styles.sourceList}>
              <li><strong>Adults who don't ask for their consent</strong> ("Do this. Now. Because I said so.")</li>
              <li><strong>Adults who don't pause</strong> ("Keep going. More homework. More activities. More compliance.")</li>
              <li><strong>Adults who don't honor their embodiment</strong> ("You're fine." "Stop crying." "Toughen up.")</li>
            </ul>

            <div className={styles.systemicTruth}>
              <p>So the kid who bullies is often <strong>reproducing the same collapse they experience daily</strong> — but with someone smaller.</p>
            </div>
          </div>

          <div className={styles.shiftBox}>
            <div className={styles.shiftComparison}>
              <div className={styles.shiftColumn}>
                <h3>Traditional:</h3>
                <p>"That bully is choosing to be cruel"</p>
              </div>
              <div className={styles.shiftColumn}>
                <h3>Anti-collapse:</h3>
                <p>"That bully is <strong>practicing the power dynamics they've been taught</strong>"</p>
              </div>
            </div>

            <p className={styles.reframe}>This doesn't remove accountability — it <strong>reframes what intervention must address</strong>.</p>
          </div>

          <div className={styles.systemicWork}>
            <h3>The work becomes systemic:</h3>
            <ul>
              <li>Do adults model consent with kids? ("Can I interrupt you for a minute?")</li>
              <li>Do adults model pause with kids? ("I need to slow down and think about this")</li>
              <li>Do adults honor kids' embodiment? ("Your body is telling you something—let's listen")</li>
            </ul>
            <p className={styles.systemicConclusion}>
              If not, we're teaching collapsed play at the adult level and punishing it at the peer level.
            </p>
          </div>
        </div>
      </section>

      {/* Rewiring the Reward System */}
      <section className={`${styles.rewardSystem} section-lg`}>
        <div className="container">
          <h2>The Reward System Isn't the Problem — It's What We're Rewarding</h2>

          <div className={styles.rewardAnalysis}>
            <div className={styles.needsBox}>
              <h3>The bully gets rewards for collapsed play:</h3>
              <ul>
                <li><strong>Laughter</strong> (social belonging)</li>
                <li><strong>Attention</strong> (being seen)</li>
                <li><strong>Power</strong> (competence and control)</li>
                <li><strong>Relief</strong> (nervous system regulation)</li>
              </ul>
              <p className={styles.legitimate}><strong>Those needs are legitimate.</strong></p>
            </div>

            <div className={styles.problemStatement}>
              <p>The problem isn't that the kid wants laughter, attention, power, and relief.</p>
              <p>The problem is they've learned to get those things <strong>through collapse instead of through connection</strong>.</p>
            </div>
          </div>

          <div className={styles.rewireGrid}>
            <div className={styles.rewireCard}>
              <h3>Laughter</h3>
              <p className={styles.from}>From: Humor at someone's expense</p>
              <p className={styles.to}>To: Humor that includes everyone</p>
            </div>

            <div className={styles.rewireCard}>
              <h3>Attention</h3>
              <p className={styles.from}>From: Being seen for dominance</p>
              <p className={styles.to}>To: Being seen for contribution</p>
            </div>

            <div className={styles.rewireCard}>
              <h3>Power</h3>
              <p className={styles.from}>From: Control over others</p>
              <p className={styles.to}>To: Agency and competence</p>
            </div>

            <div className={styles.rewireCard}>
              <h3>Relief</h3>
              <p className={styles.from}>From: Externalizing pressure onto others</p>
              <p className={styles.to}>To: Somatic regulation practices</p>
            </div>
          </div>

          <div className={styles.rewardConclusion}>
            <p><strong>We're not disrupting the reward system — we're rewiring what gets rewarded.</strong></p>

            <div className={styles.powerStatement}>
              <p>If "being good" feels like losing power, kids will choose power every time.</p>
              <p>But if <strong>tension-holding feels more powerful than collapse</strong>, the system changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Wrong Goal */}
      <section className={`${styles.wrongGoal} section-lg`}>
        <div className="container">
          <h2>What if "Bullying Prevention" is the Wrong Goal?</h2>

          <div className={styles.goalAnalysis}>
            <p>If bullying is collapsed play, then:</p>
            <ul className={styles.preventionList}>
              <li><strong>We don't want to prevent play</strong> (that's developmental death)</li>
              <li><strong>We don't want to prevent power</strong> (kids should feel powerful)</li>
              <li><strong>We don't want to prevent conflict</strong> (that's how they learn)</li>
            </ul>
            <p className={styles.realGoal}><strong>What we want to prevent is collapse.</strong></p>
          </div>

          <div className={styles.goalComparison}>
            <div className={styles.wrongGoalBox}>
              <span className={styles.xmark}>❌</span>
              <p>"A school with no bullying"</p>
            </div>

            <div className={styles.rightGoalBox}>
              <span className={styles.checkmark}>✓</span>
              <p><strong>"A school where kids learn to hold the tension of power, consent, pause, and embodiment — so play doesn't collapse into harm"</strong></p>
            </div>
          </div>

          <div className={styles.metricShift}>
            <h3>This completely changes what we measure:</h3>

            <div className={styles.metricGrid}>
              <div className={styles.metricColumn}>
                <h4>Traditional:</h4>
                <ul>
                  <li>"How many bullying incidents did we have this month?"</li>
                  <li>"How many kids did we punish?"</li>
                  <li>"Are we a 'bully-free school'?"</li>
                </ul>
                <p className={styles.metricQuestion}>Did we stop bad behavior?</p>
              </div>

              <div className={styles.metricColumn}>
                <h4>Anti-Collapse:</h4>
                <ul>
                  <li>"How many kids noticed collapse and restored consent, pause, or feedback?"</li>
                  <li>"How many kids chose to emerge differently when things got hard?"</li>
                  <li>"Are we building capacity for tension-holding?"</li>
                </ul>
                <p className={styles.metricQuestion}>Are we growing capable humans?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Kids to Detect Collapse */}
      <section className={`${styles.detectCollapse} section-lg`}>
        <div className="container">
          <h2>S.A.F.E. is Training Kids to Detect Collapse — Everywhere</h2>

          <div className={styles.dangerousIdea}>
            <p>If we teach kids to recognize collapsed Consent, Pause, and Embodiment in bullying...</p>
            <p className={styles.consequence}><strong>They'll start noticing it everywhere:</strong></p>
            <ul>
              <li>In how adults talk to them</li>
              <li>In how schools are structured</li>
              <li>In how media portrays power</li>
              <li>In how systems treat people differently based on race, class, disability, gender</li>
            </ul>
          </div>

          <div className={styles.realPurpose}>
            <p className={styles.notJust}><strong>S.A.F.E. isn't just an anti-bullying program.</strong></p>
            <p className={styles.actuallyIs}><strong>It's training kids to become collapse-detectors and tension-holders in a world full of collapsed power dynamics.</strong></p>
            <p className={styles.whyDangerous}>This is why it's dangerous (to existing power structures) and why it's necessary.</p>
          </div>

          <div className={styles.fourthGrader}>
            <h3>When a 4th grader can say:</h3>
            <ul>
              <li>"I notice you didn't ask for my consent before changing the schedule"</li>
              <li>"I need to pause—this is happening too fast for me"</li>
              <li>"My body is telling me this doesn't feel safe"</li>
            </ul>
            <p className={styles.notJustAvoiding}>They're not just avoiding bullying.</p>
            <p className={styles.actuallyLearning}><strong>They're learning to hold power accountable.</strong></p>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className={`${styles.implementation} section-lg`}>
        <div className="container">
          <h2>What This Means for Implementation</h2>
          <p className={styles.sectionIntro}>
            S.A.F.E. works when all three levels practice anti-collapse together.
          </p>

          <div className={styles.implementationGrid}>
            <div className={styles.implementationCard}>
              <h3>For Kids:</h3>
              <ul>
                <li>How to recognize when play is starting to collapse</li>
                <li>How to restore consent, pause, and feedback in real-time</li>
                <li>How to get legitimate needs met (laughter, attention, power, relief) without collapse</li>
                <li>How to honor your own and others' embodiment</li>
              </ul>
            </div>

            <div className={styles.implementationCard}>
              <h3>For Adults:</h3>
              <ul>
                <li>How to model consent with kids (not just demand compliance)</li>
                <li>How to model pause with kids (not just push through)</li>
                <li>How to honor embodiment (their own and kids')</li>
                <li>How to notice when their own power collapses into dominance</li>
              </ul>
            </div>

            <div className={styles.implementationCard}>
              <h3>For Systems:</h3>
              <ul>
                <li>Policies that build capacity instead of just punishing incidents</li>
                <li>Structures that create space for pause (not just constant escalation)</li>
                <li>Metrics that measure tension-holding (not just rule compliance)</li>
              </ul>
            </div>
          </div>

          <div className={styles.implementationNote}>
            <p>This is not "add-on professional development."</p>
            <p><strong>This is teaching adults and systems to stop practicing collapsed play before asking kids to do the same.</strong></p>
          </div>

          <div className={styles.threeLevels}>
            <p>S.A.F.E. works when:</p>
            <ol>
              <li><strong>Kids practice it with each other</strong> (peer-to-peer capacity building)</li>
              <li><strong>Adults practice it with kids</strong> (modeling consent, pause, embodiment)</li>
              <li><strong>Systems practice it structurally</strong> (policies that honor all three threads)</li>
            </ol>
            <p className={styles.withoutWith}>Without all three levels, we're just managing symptoms.</p>
            <p className={styles.withoutWith}>With all three levels, <strong>we're changing the conditions that create collapse in the first place.</strong></p>
          </div>
        </div>
      </section>

      {/* Final Revolutionary Statement */}
      <section className={`${styles.revolutionary} section-lg`}>
        <div className="container">
          <h2>The Revolutionary Core</h2>

          <div className={styles.coreBox}>
            <p className={styles.coreLine1}>We don't stop bullying.</p>
            <p className={styles.coreLine2}>We teach kids to hold the tension of power, consent, pause, and embodiment—</p>
            <p className={styles.coreLine3}>so play doesn't collapse into harm.</p>
          </div>

          <div className={styles.meansGrid}>
            <h3>This means:</h3>
            <div className={styles.meaningCard}>
              <p>Bullying is not a moral failing — it's a <strong>developmental gap</strong></p>
            </div>
            <div className={styles.meaningCard}>
              <p>The bully is not "bad" — they're <strong>practicing collapsed play</strong></p>
            </div>
            <div className={styles.meaningCard}>
              <p>The solution is not punishment — it's <strong>capacity-building for all three roles</strong></p>
            </div>
            <div className={styles.meaningCard}>
              <p>The goal is not "no conflict" — it's <strong>conflict without collapse</strong></p>
            </div>
          </div>

          <div className={styles.whenSchool}>
            <h3>When a school adopts this framework:</h3>
            <ul>
              <li>Kids stop being frozen in roles (bully/victim/bystander)</li>
              <li>Adults stop moralizing and start building capacity</li>
              <li>Systems stop measuring "incidents" and start measuring growth</li>
              <li>Everyone learns that <strong>power is not the problem — collapse is</strong></li>
            </ul>
          </div>

          <div className={styles.notAntibullying}>
            <p>And suddenly, S.A.F.E. isn't an "anti-bullying program."</p>
            <p className={styles.actuallyIs}><strong>It's a developmental framework for learning to hold power without collapse.</strong></p>
            <p className={styles.whyWorks}>That's what makes it work. That's what makes it true.</p>
          </div>
        </div>
      </section>

      {/* Research Evidence */}
      <section className={`${styles.research} section-lg`}>
        <div className="container">
          <h2>Don't Believe Us? Check Out What We Discovered in Our Research.</h2>

          <div className={styles.researchIntro}>
            <p>The paradigm shift from anti-bullying to anti-collapse isn't just theory—it's grounded in decades of peer-reviewed research. What's been missing is the <strong>integrative frame</strong> that turns these findings into a coherent approach.</p>
          </div>

          <details className={styles.researchAccordion}>
            <summary className={styles.researchSummary}>
              <span className={styles.summaryIcon}>📚</span>
              <span className={styles.summaryText}>View Research Evidence (7 Key Findings)</span>
              <span className={styles.summaryChevron}>▼</span>
            </summary>

            <div className={styles.researchContent}>
              {/* Finding 1 */}
              <div className={styles.researchFinding}>
                <div className={styles.findingNumber}>1</div>
                <div className={styles.findingContent}>
                  <h3>Bullying is a peer-group "game," not a 1:1 moral failure</h3>
                  <p>
                    Christina Salmivalli's foundational work shows that bullying persists because it's <strong>socially organized</strong>—with roles like assistants, reinforcers (laughing/cheering), outsiders, and defenders. Bullying is a group process and peer responses help maintain it.
                  </p>
                  <p className={styles.whyMatters}>
                    <strong>Why this matters:</strong> If bullying is maintained by group reward dynamics, then "I was just playing" isn't merely an excuse—it's a description of how the peer ecology works.
                  </p>
                  <a
                    href="https://onlinelibrary.wiley.com/doi/10.1002/%28SICI%291098-2337%281996%2922%3A1%3C1%3A%3AAID-AB1%3E3.0.CO%3B2-T"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.researchLink}
                  >
                    Read: Bullying as a group process: Participant roles and their... →
                  </a>
                </div>
              </div>

              {/* Finding 2 */}
              <div className={styles.researchFinding}>
                <div className={styles.findingNumber}>2</div>
                <div className={styles.findingContent}>
                  <h3>Bullying can be a strategic way to gain dominance, status, and resources</h3>
                  <p>
                    Research in the "strategic" / dominance / resource-control tradition shows that some bullying is <strong>instrumental</strong>—a means to social dominance. Work on bullying as strategic behavior finds bullies can be socially dominant and may use both coercive and prosocial strategies (a "bistrategic" profile).
                  </p>
                  <p className={styles.whyMatters}>
                    <strong>Why this matters:</strong> Kids keep doing what works. "Play" here includes status games; the "collapsed play" lens gives you a way to intervene without pretending the behavior is irrational.
                  </p>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/21640248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.researchLink}
                  >
                    Read: Bullying as strategic behavior: relations with desired and... →
                  </a>
                </div>
              </div>

              {/* Finding 3 */}
              <div className={styles.researchFinding}>
                <div className={styles.findingNumber}>3</div>
                <div className={styles.findingContent}>
                  <h3>"Just joking" is a known cognitive/moral mechanism, amplified by peer laughter</h3>
                  <p>
                    Published work explicitly discusses how peer reactions make it easier for a bully to frame harm as "just for fun" or "just joking." Research on moral disengagement notes how when peers are smiling/laughing, it becomes easier to interpret the act as joking.
                  </p>
                  <p className={styles.whyMatters}>
                    <strong>Why this matters:</strong> The claim that bullying is "play under distorted conditions" aligns with known mechanisms: laughter + status + moral disengagement = "it's not serious."
                  </p>
                  <div className={styles.multipleLinks}>
                    <a
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7296082/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.researchLink}
                    >
                      Read: Situationally Selective Activation of Moral Disengagement... →
                    </a>
                    <a
                      href="https://journals.sagepub.com/doi/10.1177/1060826520934771"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.researchLink}
                    >
                      Read: Just a Joke? The Thin Line between Teasing, Harassment... →
                    </a>
                  </div>
                </div>
              </div>

              {/* Finding 4 */}
              <div className={styles.researchFinding}>
                <div className={styles.findingNumber}>4</div>
                <div className={styles.findingContent}>
                  <h3>Teasing really does sit on a continuum from playful to harmful</h3>
                  <p>
                    Recent work (2025) explicitly frames teasing along a <strong>continuum</strong> where "playful" and "harmful" share features, and playful intent can still cause harm—especially depending on relationship context and the target's experience. Youth themselves often distinguish teasing vs bullying using cues like "I know they're joking," but those cues are unstable and socially loaded.
                  </p>
                  <p className={styles.whyMatters}>
                    <strong>Why this matters:</strong> This is the "feedback/embodiment" collapse in academic clothing: the actor's intent doesn't determine the receiver's harm, and "play" without robust check-in norms flips into injury fast.
                  </p>
                  <div className={styles.multipleLinks}>
                    <a
                      href="https://link.springer.com/article/10.1007/s40894-025-00262-6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.researchLink}
                    >
                      Read: What are the Features of Playful and Harmful Teasing and... →
                    </a>
                    <a
                      href="https://files.eric.ed.gov/fulltext/EJ1111689.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.researchLink}
                    >
                      Read: When is Peer Aggression 'Bullying?' An Analysis of... →
                    </a>
                  </div>
                </div>
              </div>

              {/* Finding 5 */}
              <div className={styles.researchFinding}>
                <div className={styles.findingNumber}>5</div>
                <div className={styles.findingContent}>
                  <h3>Bullying can be intrinsically rewarding (the "reward circuitry" angle)</h3>
                  <p>
                    There's evidence (at least in animal models) that aggressive social interaction can engage reward pathways—i.e., it can be experienced as pleasurable/reinforcing. While translating directly from animal models to human school bullying should be done carefully, it helps explain why moral instruction alone fails: there are biological reinforcement mechanisms that can make dominance/aggression feel rewarding.
                  </p>
                  <p className={styles.whyMatters}>
                    <strong>Why this matters:</strong> This explains why punishment doesn't work—we're trying to override a reward system without offering an alternative pathway to the same legitimate needs.
                  </p>
                  <a
                    href="https://health.mountsinai.org/blog/study-shows-motivation-to-bully-is-regulated-by-brain-reward-circuits/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.researchLink}
                  >
                    Read: Study Shows Motivation to Bully is Regulated by Brain... →
                  </a>
                </div>
              </div>

              {/* Finding 6 */}
              <div className={styles.researchFinding}>
                <div className={styles.findingNumber}>6</div>
                <div className={styles.findingContent}>
                  <h3>Others are circling pieces of this model—just not assembling them this way</h3>
                  <p>
                    Multiple research traditions touch on components of the collapsed play framework:
                  </p>
                  <ul className={styles.traditionsList}>
                    <li><strong>Peer-ecology / participant roles:</strong> Bullying as group phenomenon</li>
                    <li><strong>Dominance/resource control frameworks:</strong> Bullying as strategic behavior</li>
                    <li><strong>Evolutionary accounts:</strong> Bullying as potentially adaptive in adolescence</li>
                    <li><strong>Teasing/joking boundary research:</strong> Intent ≠ impact</li>
                    <li><strong>Bystander dynamics:</strong> Role of reinforcers/outsiders/defenders</li>
                  </ul>
                  <div className={styles.multipleLinks}>
                    <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S1359178909001050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.researchLink}
                    >
                      Read: Bullying and the peer group: A review →
                    </a>
                    <a
                      href="https://pubmed.ncbi.nlm.nih.gov/22331629/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.researchLink}
                    >
                      Read: Is adolescent bullying an evolutionary adaptation? →
                    </a>
                    <a
                      href="https://www.stopbullying.gov/resources/research-resources/bystanders-are-essential"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.researchLink}
                    >
                      Read: Bystanders are Essential to Bullying Prevention and... →
                    </a>
                  </div>
                </div>
              </div>

              {/* Finding 7 - Synthesis */}
              <div className={styles.researchFinding}>
                <div className={styles.findingNumber}>7</div>
                <div className={styles.findingContent}>
                  <h3>What's new: The simple, teachable synthesis</h3>
                  <p className={styles.synthesisStatement}>
                    What's not in the literature (and what this framework contributes) is the <strong>simple, teachable synthesis:</strong>
                  </p>
                  <div className={styles.synthesisBox}>
                    <p>Bullying = <em>play + social reward</em> with collapsed consent/pause/feedback (embodiment)</p>
                  </div>
                  <p>
                    This synthesis can now be "grounded" with the research base above, structured as:
                  </p>
                  <ol className={styles.synthesisSteps}>
                    <li>Bullying is a peer-group process (participant roles; reinforcement)</li>
                    <li>Bullying can be strategic/rewarded (dominance/resource control)</li>
                    <li>"Just joking" is a recognized masking mechanism (moral disengagement)</li>
                    <li>Teasing/play sits on a continuum (intent ≠ impact)</li>
                    <li><strong>Therefore:</strong> effective prevention must (a) change peer reinforcement, (b) teach micro-skills for consent/pausing/checking impact, (c) provide status-preserving off-ramps</li>
                  </ol>
                  <p className={styles.synthesisConclusion}>
                    That "therefore" is exactly where S.A.F.E. + the Threads collapse model plugs in.
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <h2>Ready to Move from Anti-Bullying to Anti-Collapse?</h2>
          <p>Learn how S.A.F.E. teaches kids to hold power without collapse.</p>
          <div className={styles.ctaButtons}>
            <a href="/safe" className={styles.ctaPrimary}>Explore S.A.F.E. Framework</a>
            <a href="/educators" className={styles.ctaSecondary}>Educator Training</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BullyingIsPlay;
