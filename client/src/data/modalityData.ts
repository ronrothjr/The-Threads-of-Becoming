export interface Modality {
  id: string;
  name: string;
  coreQuestion: string;
  threadAlignment: string;
  compatibility: 'Very High' | 'High' | 'Moderate';
  keyDistinction: string;
  integrationPoint: string;

  // Full modal content
  positioning: string;
  overlap: string[];
  differences: string[];
  integration: string[];
  honestPositioning: string;
}

export const modalities: Modality[] = [
  {
    id: "nvc",
    name: "Nonviolent Communication (NVC)",
    coreQuestion: "How do we communicate so needs can be heard and met?",
    threadAlignment: "All threads (needs underlie all tensions)",
    compatibility: "High",
    keyDistinction: "NVC resolves through understanding; Threads navigates when understanding doesn't resolve",
    integrationPoint: "Use NVC to clarify what each pole needs; use Threads when clarity doesn't resolve tension",

    positioning: "NVC and Threads solve different problems. NVC asks: 'How do we communicate so our needs can be heard and potentially met?' Threads asks: 'What do we do when both needs are legitimate, both are being heard, and the tension still can't be resolved?'",
    overlap: [
      "Both recognize human needs as fundamental",
      "Both use non-pathologizing stance toward conflict",
      "Both value understanding and clarity",
      "NVC's observation/feeling/need/request can surface what each pole is protecting"
    ],
    differences: [
      "NVC has an implicit assumption: if we understand each other's needs clearly enough, we can find a way forward",
      "Threads addresses tensions that remain after clarity is achieved",
      "NVC is oriented toward resolution through understanding; Threads is oriented toward navigation through holding",
      "NVC doesn't have a framework for 'this tension is permanent and generative'"
    ],
    integration: [
      "Use NVC to get clear on what each pole is actually asking for",
      "Use Threads when clarity doesn't resolve the tension—when the problem isn't misunderstanding but genuine polarity",
      "Apply NVC's four-step process to surface needs at each pole",
      "Shift to Threads framework when both needs are heard but can't both be fully met"
    ],
    honestPositioning: "NVC is better at what NVC does. Threads does something NVC doesn't attempt. If your conflict is about unmet needs that could be met with better communication, NVC is your tool. If your conflict is about structural tensions that keep returning no matter how well you communicate, Threads offers something NVC doesn't."
  },
  {
    id: "polarity",
    name: "Polarity Management",
    coreQuestion: "How do we manage ongoing organizational polarities?",
    threadAlignment: "All threads (surface expressions)",
    compatibility: "High",
    keyDistinction: "Polarity maps specific tensions; Threads claims universal architecture beneath all polarities",
    integrationPoint: "Use Polarity tools for organizational mapping; use Threads for deeper structure and emergence",

    positioning: "Polarity Management asks: 'How do we identify and manage ongoing polarities in organizations so we don't over-correct between extremes?' Threads asks: 'What are the universal tensions that underlie all polarities, and how do we hold them in a way that produces emergence—not just balance?'",
    overlap: [
      "Both recognize that some tensions can't be resolved, only navigated",
      "Both use pole-mapping frameworks",
      "Both identify downsides of over-focusing on one pole",
      "Johnson's infinity loop (benefits and fears) is useful diagnostic work"
    ],
    differences: [
      "Universal structure: Johnson treats each polarity as unique to its context; Threads claims these are surface expressions of seven universal tensions",
      "Embodiment and emergence: Polarity Management is cognitive—mapping, analyzing, planning; Threads insists transformation happens in the body",
      "Scope: Polarity Management is primarily organizational; Threads works at individual, dyadic, group, and organizational levels",
      "Philosophical grounding: Johnson's work is pragmatic and atheoretical; Threads is grounded in process philosophy"
    ],
    integration: [
      "Use Polarity Management for specific organizational polarity mapping",
      "Use Threads to identify which of the seven universal tensions underlies the specific polarity",
      "Apply Polarity tools for cognitive analysis and planning",
      "Use Threads for embodiment work and facilitating emergence beyond managed oscillation"
    ],
    honestPositioning: "Polarity Management is excellent for what it does—helping organizations identify and manage recurring either/or traps. Threads offers a deeper architecture: the claim that all polarities are expressions of a smaller set of universal tensions, and that holding those tensions produces emergence, not just balance."
  },
  {
    id: "ifs",
    name: "Internal Family Systems (IFS)",
    coreQuestion: "How does the Self unblend from parts to heal the system?",
    threadAlignment: "PRESENCE, CONSENT, MEMORY, BECOMING",
    compatibility: "High",
    keyDistinction: "IFS works with parts; Threads names what parts are organized around",
    integrationPoint: "Use Threads to identify active tension; use IFS to work with parts polarized around it",

    positioning: "IFS asks: 'How do we help the Self unblend from protective parts so the whole system can heal?' Threads asks: 'What universal tensions are the parts organized around, and how do we hold those tensions so something new can emerge?'",
    overlap: [
      "Both share curiosity over pathology stance",
      "Both use both/and over either/or thinking",
      "Both trust that wisdom emerges when we stop trying to fix",
      "The Self energy IFS cultivates mirrors the 'holding' stance Threads describes",
      "Neither framework pathologizes the poles people collapse toward"
    ],
    differences: [
      "Unit of analysis: IFS works with parts (internal sub-personalities); Threads works with tensions (the poles parts organize around)",
      "Mechanism of change: IFS heals through unburdening; Threads transforms through holding tension",
      "Scope: IFS is primarily intrapsychic; Threads works at individual, dyadic, group, and organizational levels",
      "Diagnostic vs. therapeutic: Threads is a diagnostic lens; IFS is a complete therapeutic modality with protocols"
    ],
    integration: [
      "Use Threads to identify which existential tension is activated",
      "Use IFS to work with the parts polarized around that tension",
      "Track emergence as unburdening allows the system to hold both poles",
      "A manager might be collapsed toward WITHIN in PRESENCE; a firefighter toward NOW in PAUSE"
    ],
    honestPositioning: "IFS is a complete therapeutic system for working with internal parts. Threads doesn't replace it—Threads names what the parts are organized around. When you see a protector, Threads asks: which universal tension is this part guarding? Use IFS for the therapeutic work. Use Threads to understand the architecture of the tensions the parts are navigating."
  },
  {
    id: "eft",
    name: "Emotionally Focused Therapy (EFT)",
    coreQuestion: "How do couples access attachment emotions and reshape cycles?",
    threadAlignment: "PRESENCE, CONSENT, MEMORY",
    compatibility: "High",
    keyDistinction: "EFT provides choreography for softening; Threads explains why softening happens",
    integrationPoint: "Map cycles to threads; use EFT techniques; track emergence as softening occurs",

    positioning: "EFT asks: 'How do we help couples access primary attachment emotions and reshape negative interaction cycles so they can form secure bonds?' Threads asks: 'What universal tensions are driving the cycle, and how do we help both partners see they're holding opposite poles of the same thread?'",
    overlap: [
      "The pursue-withdraw cycle is partners collapsed toward opposite poles (BETWEEN vs. WITHIN)",
      "Both see the cycle as the enemy, not either partner",
      "Both aim for something to shift that allows the system to move differently",
      "EFT's softening event is emergence in Threads language"
    ],
    differences: [
      "Attachment focus: EFT is rooted in attachment theory; Threads includes but isn't reducible to attachment dynamics",
      "Emotional processing: EFT's power is accessing primary emotions beneath reactive positions; Threads names the tension but doesn't provide emotional deepening mechanism",
      "The softening event: EFT has specific protocols for creating conditions; Threads names what's happening but not the how",
      "Scope: EFT is primarily for couples; Threads works across all relational scales"
    ],
    integration: [
      "Map the couple's negative cycle to threads (often PRESENCE, CONSENT, or MEMORY)",
      "Help each partner see they're collapsed toward opposite poles of the same tension",
      "Use EFT techniques to access primary emotions and create softening",
      "Threads explains why softening happens (emergence from held tension) and helps name what's shifting"
    ],
    honestPositioning: "EFT is the gold standard for couples therapy grounded in attachment. Threads doesn't replace it. Threads provides a diagnostic overlay that can sharpen cycle identification—naming not just 'pursue-withdraw' but which universal tension is driving it. Use EFT for the therapeutic choreography. Use Threads to name the architecture of what's being transformed."
  },
  {
    id: "act",
    name: "Acceptance & Commitment Therapy (ACT)",
    coreQuestion: "How do we increase psychological flexibility for valued living?",
    threadAlignment: "MEMORY, PRESENCE, EMBODIMENT, BECOMING, PAUSE",
    compatibility: "Very High",
    keyDistinction: "ACT cultivates flexibility processes; Threads maps the territory those processes navigate",
    integrationPoint: "Use Threads to diagnose stuck flexibility; apply ACT techniques; extend into relational domains",

    positioning: "ACT asks: 'How do we increase psychological flexibility so people can move toward valued living even in the presence of difficult thoughts and feelings?' Threads asks: 'What universal tensions are people stuck in, and how do we hold them so something new can emerge?'",
    overlap: [
      "Cognitive defusion is MEMORY movement (from Told to Telling)",
      "Present-moment awareness is PRESENCE (cultivating Within pole)",
      "Acceptance is EMBODIMENT (making room for Feel without flooding)",
      "Self-as-context is BECOMING (observer self through change)",
      "Values clarification is BECOMING (distinguishing what endures)",
      "Committed action is PAUSE (moving from Not Yet to Now)",
      "Both are non-pathologizing and treat stuckness as inflexibility rather than brokenness"
    ],
    differences: [
      "Scope: ACT is primarily individual; Threads applies same architecture to dyads, teams, organizations, communities",
      "Flexibility vs. emergence: ACT aims for flexibility; Threads aims for emergence (something genuinely new)",
      "Process vs. structure: ACT identifies six processes to cultivate; Threads identifies seven tensions to navigate",
      "Evidence base: ACT has substantial research support; Threads has theoretical coherence but not yet empirical validation"
    ],
    integration: [
      "Use Threads to diagnose which flexibility process is stuck (and which thread underlies it)",
      "Apply ACT techniques for that specific inflexibility pattern",
      "Threads extends ACT into relational and systemic dimensions",
      "ACT provides the evidence base and protocols; Threads provides the meta-architecture"
    ],
    honestPositioning: "ACT is a well-researched, highly effective approach to psychological flexibility. Threads doesn't compete with it—Threads provides an underlying map that shows what people are becoming flexible about. The six processes ACT cultivates are movements within the seven threads Threads identifies. Use ACT for the interventions. Use Threads to understand the territory—and to extend the work into relational and systemic contexts."
  },
  {
    id: "somatic",
    name: "Somatic/Trauma Approaches",
    coreQuestion: "How does the body complete what was interrupted and restore regulation?",
    threadAlignment: "EMBODIMENT (primary)",
    compatibility: "High",
    keyDistinction: "Somatic approaches provide therapeutic technique; Threads names the thread, not the method",
    integrationPoint: "Use Threads to identify EMBODIMENT activation; use somatic tools for actual processing",

    positioning: "Somatic and trauma-informed approaches ask: 'How do we help the body complete what was interrupted, process what was overwhelming, and restore regulation to the nervous system?' Threads asks: 'What universal tensions is the body holding, and how do we create conditions for the body to hold both poles without collapsing?'",
    overlap: [
      "EMBODIMENT thread (Think/Feel, Stay/Go) is explicitly somatic",
      "Dissociation is EMBODIMENT collapse into Think",
      "Flooding is collapse into Feel",
      "Freeze is collapse into Stay when Go is needed",
      "Flight is collapse into Go when Stay is needed",
      "Window of tolerance maps to capacity to hold both poles",
      "Pendulation is movement between poles to expand capacity"
    ],
    differences: [
      "Mechanism of healing: Somatic approaches work with body directly—completing defensive responses, discharging activation; Threads names territory but doesn't provide techniques",
      "Trauma-specific focus: These modalities have protocols for titration, resourcing, processing; Threads is not a trauma modality",
      "Nervous system as primary: Somatic approaches center autonomic nervous system; Threads includes body but doesn't privilege neurobiological mechanisms",
      "Dual awareness goal: SE and Sensorimotor aim for dual awareness (Think AND Feel); this IS holding both poles, and these approaches provide the method"
    ],
    integration: [
      "Use Threads to identify when EMBODIMENT is the activated thread",
      "Recognize collapse patterns: dissociation (Think), flooding (Feel), freeze (Stay), flight (Go)",
      "Use somatic techniques to work with the body directly",
      "Track emergence as window of tolerance expands—client can hold both poles longer"
    ],
    honestPositioning: "Somatic and trauma-informed approaches are clinical modalities for working with the body and healing trauma. Threads doesn't replace them—Threads names the thread they work within. EMBODIMENT is what these approaches address; they provide the how. Use Threads to recognize when the body is the entry point. Use somatic modalities for actual therapeutic work. CRITICAL: Threads is NOT a trauma processing protocol. Know your limits and refer appropriately."
  },
  {
    id: "dbt",
    name: "Dialectical Behavior Therapy (DBT)",
    coreQuestion: "How do we build skills for distress tolerance and dialectical thinking?",
    threadAlignment: "All threads (explicitly dialectical)",
    compatibility: "Very High",
    keyDistinction: "DBT provides skills curriculum for severe collapse; Threads provides universal architecture",
    integrationPoint: "Use DBT skills for high-acuity clients; use Threads for underlying map of dialectics",

    positioning: "DBT asks: 'How do we help people—especially those with emotion dysregulation and suicidal behaviors—build skills to tolerate distress, regulate emotions, navigate relationships, and hold dialectical tensions?' Threads asks: 'What universal tensions are people stuck in, and how do we hold them so something new can emerge?'",
    overlap: [
      "Both are explicitly dialectical and built on synthesis of opposites",
      "Wise Mind is synthesis of Emotion Mind and Reasonable Mind (EMBODIMENT's Think and Feel)",
      "Walking the Middle Path is explicit polarity navigation",
      "Distress Tolerance is capacity to hold tension without collapse (PAUSE)",
      "Radical Acceptance is MEMORY work (accepting Given without being imprisoned)",
      "Interpersonal Effectiveness navigates CONSENT (Yes/No, Self/Other tensions)"
    ],
    differences: [
      "Population specificity: DBT designed for borderline personality disorder and high-risk clients; Threads is universal",
      "Skills vs. diagnosis: DBT is skills-training protocol with specific techniques; Threads is diagnostic",
      "Synthesis vs. emergence: DBT aims for synthesis (Wise Mind); Threads aims for emergence (something genuinely new)",
      "Therapeutic structure: DBT has highly structured delivery (individual therapy, skills group, phone coaching, consultation team)",
      "Evidence base: DBT has decades of RCT research; Threads has theoretical coherence but no outcome data yet"
    ],
    integration: [
      "Threads provides underlying map of what DBT's dialectics are navigating",
      "DBT provides skills curriculum for high-acuity clients who collapse severely",
      "Use Threads to identify which thread is activated; use DBT skills for that domain",
      "For clients who need distress tolerance before they can hold tension, DBT skills build the capacity Threads work requires"
    ],
    honestPositioning: "DBT is the gold standard for dialectical work with high-acuity clients. Its skills curriculum is unmatched for helping people who collapse severely—into suicidality, self-harm, impulsive destruction. Threads doesn't replace DBT. Threads offers a universal architecture that shows what the dialectics are about. For general populations, Threads may be sufficient. For clients who need DBT-level structure, use DBT—and let Threads inform which dialectics you're working."
  },
  {
    id: "gottman",
    name: "Gottman Method",
    coreQuestion: "What behaviors predict relationship success, and how do we build them?",
    threadAlignment: "PRESENCE, CONSENT, MEMORY, PAUSE",
    compatibility: "High",
    keyDistinction: "Gottman is behavioral and empirical; Threads explains why perpetual problems are perpetual",
    integrationPoint: "Use Gottman for friendship/repair skills; use Threads for gridlocked perpetual problems",

    positioning: "Gottman asks: 'What behaviors predict relationship success or failure, and how do we help couples build the skills and friendship that sustain lasting love?' Threads asks: 'What universal tensions are the couple navigating, and how do we help them hold those tensions so something new can emerge?'",
    overlap: [
      "The Four Horsemen (criticism, contempt, defensiveness, stonewalling) are collapse behaviors",
      "Perpetual problems (69% of conflicts) are Threads' unresolvable tensions",
      "Gridlocked vs. dialogue distinguishes collapsed vs. held tension",
      "Repair attempts are moves back toward tension after collapse",
      "Dreams within conflict surfaces what each pole is protecting"
    ],
    differences: [
      "Empirical vs. philosophical: Gottman built method from observational research tracking outcomes over decades; Threads from process philosophy",
      "Behavioral focus: Gottman is fundamentally behavioral (turn toward/away, 5:1 ratio, specific repair phrases)",
      "Friendship and fondness: Gottman emphasizes friendship system as foundation; Threads doesn't have friendship-building component",
      "Sound Relationship House: Gottman's full model includes trust, commitment, shared meaning; Threads focuses specifically on tension navigation",
      "Four Horsemen diagnose how collapse manifests; Threads diagnoses what tension is being collapsed"
    ],
    integration: [
      "Use Gottman's Horsemen to recognize collapse behavior in real-time",
      "Use Threads to identify which thread is being collapsed",
      "Use Gottman's repair and friendship interventions to rebuild capacity",
      "For perpetual problems, use Threads framing: 'This isn't a problem to solve. What would it look like to hold this together?'",
      "Dreams Within Conflict intervention is Threads-compatible—honor what each pole is protecting"
    ],
    honestPositioning: "Gottman Method is the most empirically grounded couples approach available. Decades of research tell us what behaviors predict success and failure. Threads doesn't replace that evidence base. What Threads adds is a framework for understanding why perpetual problems are perpetual—they're expressions of universal tensions that can't be resolved, only navigated. Use Gottman's skills for building friendship and making repair. Use Threads when couples hit gridlock on perpetual problems."
  },
  {
    id: "bowen",
    name: "Bowen Family Systems",
    coreQuestion: "How does differentiation allow connection without fusion or cutoff?",
    threadAlignment: "PRESENCE, CONSENT, MEMORY",
    compatibility: "Very High",
    keyDistinction: "Differentiation IS holding PRESENCE and CONSENT; multigenerational patterns ARE MEMORY",
    integrationPoint: "Use Bowen for family mapping; use Threads to name tensions being transmitted",

    positioning: "Bowen asks: 'How do we understand the multigenerational emotional processes that shape individual functioning, and how does differentiation of self allow people to be both connected and autonomous?' Threads asks: 'What universal tensions are being transmitted across generations and activated in relational systems, and how do we hold them so something new can emerge?'",
    overlap: [
      "Differentiation of self IS holding PRESENCE (Within AND Between) and CONSENT (Self AND Other) simultaneously",
      "Triangulation is what happens when a dyad can't hold tension—collapse at system level",
      "Multigenerational transmission is MEMORY thread across generations",
      "Emotional cutoff is PRESENCE collapse toward Within and MEMORY collapse toward Chosen",
      "Family projection process transmits collapsed patterns to children",
      "Nuclear family emotional process patterns are all collapse patterns"
    ],
    differences: [
      "Anxiety as engine: Bowen centers chronic anxiety as driver; Threads doesn't privilege anxiety as root cause",
      "Differentiation as goal: Bowen's singular aim is differentiation; Threads has seven tensions, each with its own navigation",
      "Multigenerational focus: Bowen goes deep into family-of-origin work (genograms, coaching); Threads names MEMORY but doesn't provide specific methodology",
      "Systems vs. tensions: Bowen thinks in systems (homeostasis, feedback loops); Threads thinks in tensions (poles that can be held or collapsed)",
      "Coaching modality: Bowen work often done through coaching rather than therapy"
    ],
    integration: [
      "Use Bowen to map the multigenerational system—who triangulates with whom, where cutoff occurred",
      "Use Threads to name which tensions are being transmitted and collapsed",
      "Differentiation work IS Threads work on PRESENCE and CONSENT",
      "MEMORY thread work informed by genogram findings—what stories were Given, what authorship is now possible",
      "When clients work on family-of-origin, Threads provides language; Bowen provides methodology"
    ],
    honestPositioning: "Bowen Theory is the foundation of family systems thinking. Its concepts—differentiation, triangulation, multigenerational transmission—remain essential for understanding how families function. Threads doesn't replace Bowen; Threads provides a complementary lens. Differentiation IS the capacity to hold PRESENCE and CONSENT without collapsing. Multigenerational transmission IS the MEMORY thread operating across generations. Use Bowen for family systems mapping and differentiation coaching. Use Threads to name specific tensions being transmitted."
  },
  {
    id: "narrative",
    name: "Narrative Therapy",
    coreQuestion: "How do we re-author lives from problem-saturated to preferred stories?",
    threadAlignment: "MEMORY (primary), BECOMING",
    compatibility: "High",
    keyDistinction: "Narrative provides externalization technique; Threads ensures both Given and Chosen honored",
    integrationPoint: "Use Narrative for re-authoring methodology; use Threads to prevent collapse into Chosen pole",

    positioning: "Narrative Therapy asks: 'How do we help people separate from problem-saturated stories, recover their agency as authors, and re-author their lives toward preferred identities?' Threads asks: 'What universal tensions are people stuck in, and how do we hold them so something new can emerge?'",
    overlap: [
      "MEMORY thread (Given/Chosen, Telling/Told) is Narrative Therapy's home territory",
      "Externalization creates distance between person and story (movement from Told to Telling)",
      "Unique outcomes are evidence that Given story isn't the whole story",
      "Re-authoring is explicit movement along Telling/Told axis",
      "Dominant narratives are the Given that people don't recognize as Given",
      "Preferred identity connects to BECOMING",
      "Both treat stories as constructed, not fixed"
    ],
    differences: [
      "Story as primary: Narrative Therapy built entirely on premise that we live through stories; Threads treats MEMORY as one thread among seven",
      "Political consciousness: Narrative Therapy has explicit social justice orientation; Threads is less politically explicit",
      "Externalization as technique: Narrative Therapy has specific method; Threads names tension but doesn't provide externalization methodology",
      "Role of Given: Narrative can lean toward Chosen pole; Threads insists on honoring both (Given isn't just prison, it's also inheritance and wisdom)",
      "Audience and witness: Narrative emphasizes re-membering practices and witnessing"
    ],
    integration: [
      "Use Narrative externalization when MEMORY is activated and client is Told (possessed by problem-saturated story)",
      "Use Threads to ensure re-authoring doesn't collapse into Chosen pole—honor what Given story protected",
      "When unique outcomes emerge, name them as evidence of capacity to hold both poles",
      "Use Threads to identify when presenting 'story problem' is actually different thread (PAUSE or CONSENT)"
    ],
    honestPositioning: "Narrative Therapy is a powerful approach for helping people reclaim authorship of their lives. Its techniques—externalization, unique outcomes, re-authoring—are specific and effective. Threads doesn't replace these methods. What Threads adds is the insistence on honoring both poles: the Given (what happened, what was inherited) and the Chosen (what meaning we make now). Use Narrative Therapy for the methodology. Use Threads to ensure re-authoring integrates rather than erases."
  },
  {
    id: "mbsr",
    name: "Mindfulness (MBSR/MBCT)",
    coreQuestion: "How do we cultivate present-moment, non-judgmental awareness?",
    threadAlignment: "PRESENCE, EMBODIMENT, PAUSE",
    compatibility: "High",
    keyDistinction: "Mindfulness builds capacity to notice; Threads provides map of what you're noticing",
    integrationPoint: "Use mindfulness as prerequisite skill; use Threads to direct awareness toward specific tensions",

    positioning: "Mindfulness-Based Approaches ask: 'How do we cultivate present-moment, non-judgmental awareness so that we can relate differently to pain, stress, and difficult mental states?' Threads asks: 'What universal tensions are people stuck in, and how do we hold them so something new can emerge?'",
    overlap: [
      "Present-moment awareness is PRESENCE work (Here pole)",
      "Non-judgmental observation is the stance required to hold any tension",
      "Noticing without reacting is PAUSE (gap between stimulus and response)",
      "Observing thoughts as thoughts is MEMORY work (recognizing Told as story, creating space for authorship)",
      "Sitting with discomfort is foundational skill of tension-holding",
      "Body awareness in MBSR is EMBODIMENT (cultivating Think/Feel connection)"
    ],
    differences: [
      "Awareness vs. navigation: Mindfulness cultivates quality of awareness; Threads provides map of what you're aware of",
      "Individual practice vs. relational application: MBSR/MBCT are primarily individual; Threads extends into dyads, groups, organizations",
      "Acceptance orientation: Mindfulness emphasizes being with what is; Threads aims for emergence (something new arising)",
      "Therapeutic specificity: MBCT has specific protocols for depression relapse prevention",
      "Spiritual roots vs. philosophical roots: Mindfulness from Buddhist contemplative practice; Threads from process philosophy",
      "Risk of spiritual bypassing: Mindfulness can be misused to avoid rather than hold (EMBODIMENT collapse into Think)"
    ],
    integration: [
      "Mindfulness is prerequisite for Threads work—without capacity to notice without reactivity, you can't hold tension",
      "Use mindfulness to build foundational awareness muscle",
      "Use Threads to name what you're becoming aware of—which tension, which poles, where collapse is happening",
      "MBSR's body scan is EMBODIMENT training",
      "When mindfulness practice goes flat or becomes avoidant, Threads can diagnose: which tension are you using mindfulness to escape?"
    ],
    honestPositioning: "Mindfulness is foundational. The capacity to notice what's arising without reactivity is the prerequisite for holding any tension. Threads doesn't replace mindfulness practice—Threads depends on it. What Threads adds is a map. Mindfulness says 'be present to what is.' Threads says 'what is includes these seven tensions, and here's how to navigate them.' Use mindfulness to build the awareness capacity. Use Threads to direct that awareness toward the tensions that shape your life—and to extend the practice into relational contexts."
  },
  {
    id: "mi",
    name: "Motivational Interviewing (MI)",
    coreQuestion: "How do we help people resolve ambivalence toward valued change?",
    threadAlignment: "BECOMING, PAUSE, CONSENT",
    compatibility: "High",
    keyDistinction: "MI has direction (toward change); Threads is non-directional about which pole is right",
    integrationPoint: "MI spirit IS Threads stance; use MI for behavioral change; use Threads for existential ambivalence",

    positioning: "MI asks: 'How do we help people explore and resolve ambivalence so they can move toward change they already value but feel stuck about?' Threads asks: 'What universal tensions are people stuck in, and how do we hold them so something new can emerge?'",
    overlap: [
      "MI's core insight: ambivalence is normal, not pathological (people want to change AND don't want to change)",
      "Rolling with resistance honors resistance as carrying information (wisdom in the pole being protected)",
      "Developing discrepancy surfaces the tension rather than resolving it prematurely",
      "Supporting self-efficacy trusts person's own wisdom (emergence comes from person, not facilitator)",
      "Change talk and sustain talk are expressions of poles in BECOMING and PAUSE",
      "Decisional balance is explicit pole-mapping"
    ],
    differences: [
      "Direction toward change: MI has direction—designed to help people move toward change; Threads is non-directional about which pole is 'right'",
      "Specific behavior focus: MI typically addresses specific behaviors (substance use, medication adherence); Threads addresses existential tensions",
      "The righting reflex: MI warns against urge to fix; Threads frames this as facilitator's own collapse toward resolution",
      "Spirit vs. technique: MI distinguishes spirit (partnership, acceptance, compassion, evocation) from techniques (OARS)",
      "Readiness as stage: MI uses stages of change (precontemplation to maintenance); Threads sees tension as ongoing"
    ],
    integration: [
      "MI's spirit IS the Threads facilitative stance—curious, non-anxious, trusting person's wisdom",
      "Use MI techniques (OARS) when working with ambivalence about change",
      "Use Threads to name which thread the ambivalence is about—often BECOMING, PAUSE, or CONSENT",
      "When MI feels stuck, check: is practitioner pushing toward change or has client collapsed into one pole?",
      "MI's focus on specific behavior change can be concrete application of Threads' broader tension navigation"
    ],
    honestPositioning: "Motivational Interviewing is a well-researched, widely-used approach for helping people resolve ambivalence about change. Its spirit—partnership, acceptance, compassion, evocation—mirrors the Threads facilitative stance exactly. What Threads adds is a map of what the ambivalence is about. MI asks: 'Are you ready to change this behavior?' Threads asks: 'What universal tension is this ambivalence expressing?' Use MI for behavioral change contexts where direction is clear. Use Threads when ambivalence is existential—not about a behavior but about who you're becoming."
  },
  {
    id: "cbt",
    name: "Cognitive Behavioral Therapy (CBT)",
    coreQuestion: "How do we modify distorted thoughts and maladaptive behaviors?",
    threadAlignment: "MEMORY, PAUSE, UNCERTAINTY, EMBODIMENT",
    compatibility: "Moderate",
    keyDistinction: "CBT corrects 'distortion'; Threads honors both poles as carrying wisdom",
    integrationPoint: "Use CBT skills for severe collapse; use Threads to understand what collapse protected",

    positioning: "CBT asks: 'How do we identify and modify the distorted thoughts and maladaptive behaviors that cause emotional suffering?' Threads asks: 'What universal tensions are people stuck in, and how do we hold them so something new can emerge?'",
    overlap: [
      "Cognitive distortions often represent collapse (all-or-nothing thinking is failure to hold both poles)",
      "Catastrophizing is UNCERTAINTY collapse into Threat",
      "'Should' statements can be MEMORY collapse into Told (inherited rules as absolute truth)",
      "Behavioral activation addresses PAUSE (moving from Not Yet into Now)",
      "Exposure therapy builds capacity to hold UNCERTAINTY and EMBODIMENT",
      "Thought records create observer distance from automatic thoughts (Told to Telling in MEMORY)"
    ],
    differences: [
      "Pathology model: CBT identifies thoughts as 'distorted' and aims to correct; Threads doesn't pathologize either pole",
      "Correction vs. holding: CBT aims to change thought/behavior; Threads aims to hold tension",
      "Linear causation: CBT's model is thoughts→feelings→behaviors; Threads sees circular, emergent causation",
      "Manualized protocols: CBT has highly structured, disorder-specific treatments; Threads is general framework",
      "Body's role: Traditional CBT is cognitive-first; Threads (through EMBODIMENT) insists body has its own knowing",
      "Symptom reduction vs. emergence: CBT's goal is symptom reduction; Threads' goal is emergence"
    ],
    integration: [
      "Use Threads to understand why cognitive distortion exists—what pole is person protecting? What wound made that collapse adaptive?",
      "Use CBT techniques to build skills when collapse is severe and destabilizing",
      "Recognize that what CBT calls 'balanced thinking' is often what Threads calls 'holding both poles'",
      "Use Threads to identify when CBT might be pushing toward one pole rather than facilitating genuine both/and",
      "Third-wave CBT approaches (ACT, DBT) are more Threads-compatible than classical CBT"
    ],
    honestPositioning: "CBT is the most widely practiced and researched therapeutic approach. Its techniques—thought records, behavioral activation, exposure—are effective tools for specific symptoms. Threads has a different philosophical foundation: where CBT sees distorted thoughts to correct, Threads sees collapsed tensions to hold. These aren't fully compatible worldviews. However, many CBT techniques can be used within a Threads frame. What Threads adds is the question CBT doesn't ask: what wisdom lived in the 'distorted' thought? What was it protecting? Use CBT for skill-building when collapse is severe. Use Threads to ensure 'balanced thinking' genuinely honors both poles."
  },
  {
    id: "focusing",
    name: "Focusing (Gendlin)",
    coreQuestion: "How do we access the felt sense and allow it to unfold into meaning?",
    threadAlignment: "EMBODIMENT (primary), PAUSE, UNCERTAINTY",
    compatibility: "Very High",
    keyDistinction: "Focusing provides deep EMBODIMENT methodology; Threads maps broader territory",
    integrationPoint: "Use Focusing when EMBODIMENT is activated; body shift IS emergence",

    positioning: "Focusing asks: 'How do we access the felt sense—the body's murky, pre-verbal knowing—and allow it to unfold into meaning and movement?' Threads asks: 'What universal tensions are people stuck in, and how do we hold them so something new can emerge?'",
    overlap: [
      "Felt sense is the body's knowing that exists before words (EMBODIMENT: body knows things mind hasn't articulated)",
      "The body shift is emergence at somatic level—something unlocks when felt sense is accurately symbolized",
      "Waiting, not forcing is PAUSE (staying in Not Yet until moment is right)",
      "'Something about...' tentative language honors not-knowing (UNCERTAINTY held without premature clarity)",
      "The critic's chair navigates CONSENT (internal parts negotiating boundaries so deeper knowing can speak)"
    ],
    differences: [
      "Single-thread depth vs. seven-thread breadth: Focusing goes deep into EMBODIMENT; Threads maps seven tensions",
      "Process vs. map: Focusing is a process (six movements); Threads is diagnostic map",
      "Individual practice: Focusing is solo or dyadic; Threads scales to groups and organizations",
      "Philosophical grounding: Gendlin was philosopher first—'experiencing' and 'carrying forward' anticipate process thinking",
      "The implicit: Gendlin's later work on 'the implicit' (more-than-what's-formed) is close to Threads' emergence"
    ],
    integration: [
      "When EMBODIMENT is the activated thread, Focusing provides the methodology",
      "Use Focusing's felt sense inquiry when someone is collapsed into Think—living in head, disconnected from body",
      "Use Focusing's patient, waiting stance as model for all thread-holding—PAUSE applied to somatic inquiry",
      "The 'body shift' is evidence of emergence—track it as sign that something new has arrived",
      "Focusing-Oriented Therapy (FOT) is full clinical application; Threads can inform when to apply it"
    ],
    honestPositioning: "Focusing is a profound practice for accessing the body's knowing—what Gendlin called the felt sense. It provides a detailed methodology for the EMBODIMENT thread that Threads only names. When someone is stuck in their head, disconnected from body-wisdom, Focusing is the intervention. Threads tells you when EMBODIMENT is activated. Focusing tells you how to work with it. Gendlin's philosophical work on 'carrying forward' and 'the implicit' is deeply compatible with Threads' emergence claims. Use Focusing when the body needs to speak. Use Threads to understand which of seven tensions the body is speaking about."
  }
];

export const compatibilityLevels = {
  'Very High': {
    description: 'Deep philosophical alignment. Frameworks share core assumptions. Integration is natural and mutually enriching.',
    color: '#10b981', // emerald-500
    icon: '⭐⭐⭐'
  },
  'High': {
    description: 'Compatible worldviews. Threads adds diagnostic precision without contradicting the modality\'s core claims.',
    color: '#3b82f6', // blue-500
    icon: '⭐⭐'
  },
  'Moderate': {
    description: 'Philosophical tension exists. Techniques can be integrated pragmatically, but core assumptions differ.',
    color: '#f59e0b', // amber-500
    icon: '⭐'
  }
};
