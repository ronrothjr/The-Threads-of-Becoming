# Thread Capacity Training System - Content Architecture

**Version:** 1.0
**Date:** December 25, 2025
**Purpose:** Define the comprehensive structure for creating transformative, multi-format training content

---

## Table of Contents

1. [Overview](#overview)
2. [Content Philosophy](#content-philosophy)
3. [Module Structure](#module-structure)
4. [Content Types](#content-types)
5. [Progression Framework](#progression-framework)
6. [Technical Integration](#technical-integration)
7. [Content Creation Workflow](#content-creation-workflow)
8. [Exemplar Module Template](#exemplar-module-template)

---

## Overview

### The Vision

Create a comprehensive Thread Capacity Training System with **28 core training modules** (7 threads × 4 tiers) that combine:

- **Audio-visual presentations** (slides + narration via Speechify)
- **Guided meditations** (scripted practices with somatic awareness)
- **Interactive exercises** (experiential learning activities)
- **Writing prompts** (reflective integration)
- **Knowledge checks** (formative assessment)
- **Practice assignments** (real-world application)

### Research Foundation

Based on evidence-based practices from:
- Transformative Learning Theory (Mezirow)
- Experiential Learning Cycles (Kolb)
- Somatic Experiencing & MBSR
- Schema Therapy & IFS Pedagogy
- Contemplative Education
- Progressive Capacity Building

### Core Principles

1. **Multimodal:** Engage visual, auditory, kinesthetic, and reflective learning
2. **Experiential:** Practice over lecture (70/30 split in advanced tiers)
3. **Somatic:** Body-first awareness before cognitive processing
4. **Non-pathologizing:** Collapse as protective, not broken
5. **Progressive:** Foundation → Building → Deepening → Mastery
6. **Trauma-informed:** Always offer choice, modification, and exit strategies

---

## Content Philosophy

### What Makes Thread Training Different

**NOT therapy, NOT fixing:** This is capacity building—expanding window of tolerance to hold life's inherent tensions.

**NOT about choosing the "right" pole:** This is about developing the capacity to hold both poles simultaneously without collapsing into either.

**NOT linear progress:** Spiral curriculum—revisiting threads at increasing depth across tiers.

### Pedagogical Stance

**"Hold, Don't Fix"**
- Facilitator maintains presence without rushing to resolution
- Validates both poles of every tension
- Honors collapse as protective strategy
- Invites curiosity about patterns without shame

**Graduated Exposure**
- Start with less activating threads and content
- Pair challenge with adequate resourcing
- Use titration (modulate intensity) and pendulation (oscillate between arousal and calm)
- Build capacity incrementally over 6-8 weeks minimum

---

## Module Structure

### Core Components

Each training module consists of:

```
MODULE (25 minutes total)
├── Ground & Arrive (3-4 min)
│   ├── Centering practice
│   ├── Check-in
│   └── Review previous practice
│
├── Teach & Demonstrate (5-7 min)
│   ├── Slide presentation (5-7 slides)
│   ├── Narration script (audio via Speechify)
│   └── Visual diagrams (generated via NotebookLM)
│
├── Practice & Explore (10-14 min)
│   ├── Guided meditation OR
│   ├── Interactive exercise
│   └── Embodied exploration
│
└── Reflect & Integrate (4-5 min)
    ├── Writing prompt (journaling)
    ├── Partner/small group sharing (optional)
    └── Practice assignment (micro/mini/real-world)
```

### Thread Structure Elements

Every module teaches:

1. **Thread Identity**
   - Seed question (universal question)
   - Two tension axes creating four quadrants
   - Real-world examples where this thread appears

2. **Collapse Patterns**
   - Shadow names for each pole collapse
   - Behavioral signs of collapse
   - Protective function (what collapse guards against)
   - Somatic markers in body

3. **Capacity Building**
   - How to recognize collapse in real-time
   - Grounding/resourcing techniques
   - How to return to center (holding both poles)
   - What emergence looks like in this thread

4. **Integration Practices**
   - Micro-practices (daily, 3-5 min)
   - Mini-sessions (2-3x/week, 10-15 min)
   - Real-world application contexts

---

## Content Types

### 1. SLIDE PRESENTATIONS (Visual + Audio)

**Purpose:** Multimodal teaching of thread concepts

**Structure:** 5-7 slides per module

**Slide Sequence:**
1. **Title Slide** - Thread name + seed question
2. **Four-Quadrant Diagram** - Visual map of tensions and positions
3. **Collapse Patterns** - Shadows and behavioral signs
4. **Real-World Examples** - Photos/illustrations showing thread in daily life
5. **Reflection Prompt** - Meta-question with contemplative visual
6. **(Optional) Practice Preview** - What learners will explore
7. **(Optional) Milestone** - Capacity goal for this tier

**Content for Each Slide:**

```json
{
  "slideNumber": 1,
  "title": "PAUSE: When Can I...?",
  "visualType": "text",
  "visualDescription": "Large, centered text: 'PAUSE' with seed question beneath: 'When can I...?' Calm, spacious background (muted blues/grays). Minimalist aesthetic.",
  "visualElements": [
    "Thread name in large font",
    "Seed question in medium font",
    "Contemplative background image (sky, water, or abstract)"
  ],
  "narrationScript": "Today we're exploring the PAUSE thread. The seed question is: When can I...? This thread holds the tension between acting now and waiting, between feeling like you have enough and needing more before you can proceed.",
  "narrationDuration": 30,
  "metadata": {
    "backgroundColor": "#E8EEF2",
    "textColor": "#2C3E50",
    "fontSize": "large"
  }
}
```

**Audio Generation (Speechify API):**
- Convert `narrationScript` to audio
- Settings: Natural voice, moderate pace (0.85-0.95x speed)
- Save to CDN/storage with URL in `narrationAudioUrl`

**Visual Generation (NotebookLM or Design Tool):**
- Use `visualDescription` and `visualElements` to generate slides
- Consistent aesthetic across all modules
- High contrast for accessibility
- Downloadable PDF format for offline use

---

### 2. GUIDED MEDITATIONS

**Purpose:** Embodied, somatic exploration of thread tensions

**Structure:** 8-15 minute guided practices

**Script Format with Timing Notation:**
- `[~]` = half breath cycle (1-2 seconds)
- `[~~]` = full breath cycle (3-4 seconds)
- `[~~~]` = extended pause (5-8 seconds)

**Three-Part Structure:**
1. **Opening/Settling (10-15%):** Ground in body, establish safety, permission
2. **Deepening/Practice (70-80%):** Explore thread tensions somatically
3. **Closing/Integration (10-15%):** Gentle return, brief reflection

**Example Meditation Script:**

```markdown
## EMBODIMENT Thread Meditation (12 minutes)

### Opening (2 minutes)

Find a comfortable position, either seated or lying down. [~] You can close your eyes, or if you prefer, keep them open with a soft downward gaze. [~]

There's no right way to do this practice. [~] You can adjust your position at any time. [~] If you need to stop, that's completely okay. [~]

Begin by noticing your breath. [~] Not changing it, just noticing. [~~] The in-breath... [~] and the out-breath. [~~]

### Deepening (8 minutes)

We're going to explore the EMBODIMENT thread today—the tension between thinking about your body and actually feeling it, between staying present in sensation and leaving your body. [~~]

First, I'll invite you to think about your left hand. [~] Picture it in your mind. [~] Notice the concept of your hand, the idea of it. [~~]

Now, shift from thinking about your hand to actually feeling it. [~] Can you sense temperature? [~] Tingling? [~] Heaviness or lightness? [~~] Just notice what's actually there. [~~~]

[Continue with body awareness practice...]

### Closing (2 minutes)

Now, as we prepare to close, take a few deeper breaths. [~~] Begin to wiggle your fingers and toes. [~] Move gently in any way that feels good. [~~]

Notice: what's different now than when we started? [~] What did you discover? [~~]

Thank you for this practice. [~] When you're ready, you can open your eyes and return to the room. [~~]
```

**Audio Generation:**
- Slower pacing than narration (0.75-0.85x speed)
- Calming voice with minimal inflection
- Respect timing notation precisely
- Background: optional subtle ambient sound (nature sounds, soft music)

---

### 3. INTERACTIVE EXERCISES

**Purpose:** Experiential learning through structured activities

**Types:**
- **Solo practices:** Individual exploration
- **Partner work:** Dyadic exercises (peer learning)
- **Small group:** 3-4 person activities
- **Written exercises:** Structured journaling
- **Embodied practices:** Movement, gesture, somatic

**Five-Phase Structure:**

1. **Setup (1 min):** Explain purpose and instructions
2. **Experience (5-10 min):** Actual practice/activity
3. **Reflect (3-5 min):** Individual processing
4. **Share (3-5 min):** Partner or small group discussion
5. **Integrate (2-3 min):** Name learning and application

**Example Exercise:**

```markdown
## CONSENT Thread Exercise: Free Yes, Free No

**Type:** Partner
**Duration:** 15 minutes
**Materials:** None

### Setup (1 minute)
We're going to practice noticing the difference between a free 'yes' and a pressured 'yes.' This is a low-stakes exercise using simple requests.

### Experience (10 minutes)

**Round 1:** Partner A, make a simple request: "Would you be willing to raise your right hand?"

Partner B, notice what you feel in your body before responding. Say yes or no based on what feels true, not polite.

**Round 2:** Partner A, make a slightly more personal request: "Would you be willing to share something that made you happy this week?"

Partner B, again notice your body before responding.

**Round 3:** Partner A, make a request you genuinely want: "Would you be willing to [something you actually want from them]?"

Partner B, take a full breath before responding.

**Switch roles and repeat all three rounds.**

### Reflect (3 minutes)
Journal: What did you notice in your body when you wanted to say no but felt pressure to say yes? When did yes feel free? What made no feel safe or unsafe?

### Share (2 minutes)
With your partner, share one insight about your yes/no patterns.

### Integrate (2 minutes)
Where in your life do you most need permission to say no? What would make it safer?

**Trauma-Informed Note:** If at any point this exercise feels unsafe, you can pass on any request or stop the exercise entirely. Your "no" is always honored here.
```

---

### 4. WRITING PROMPTS

**Purpose:** Reflective integration and metacognitive awareness

**Types:**
- **Reflection:** Process experience, notice patterns
- **Exploration:** Investigate tensions and possibilities
- **Application:** Connect to real-world situations
- **Integration:** Synthesize learning across modules

**Progressive Depth Across Tiers:**

**Foundation Level:**
- "Where did I notice [THREAD] today?"
- "Which pole do I usually collapse toward?"
- "What does [THREAD TENSION] feel like in my body?"

**Building Level:**
- "When I collapsed toward [POLE] this week, what was I protecting myself from?"
- "Describe a time you held [THREAD TENSION] successfully."
- "What story am I telling myself about [SITUATION] and where did that story come from?"

**Deepening Level:**
- "Write two versions of a current dilemma: one from each pole. What's true in both?"
- "What's trying to emerge if you hold this tension without collapsing?"
- "Who were you before this tension? Who are you becoming through it?"

**Mastery Level:**
- "Design a practice for holding [THREAD] in [YOUR CONTEXT]."
- "How would you teach someone else about this thread?"
- "What capacity have you built that you couldn't have predicted?"

---

### 5. KNOWLEDGE CHECKS

**Purpose:** Formative assessment and retrieval practice

**Types:**
1. **Thread Identification:** Given scenario → identify thread
2. **Collapse Recognition:** Given behavior → identify collapse
3. **Application:** Given situation → choose best response
4. **Self-Assessment:** Rate own capacity/understanding

**Format:**
- 3-5 questions per module
- Multiple choice with explanatory feedback
- Immediate results (not graded, learning tool)
- Can retake unlimited times

**Example:**

```markdown
## Knowledge Check: PAUSE Thread

**Question 1 - Thread Identification**

Scenario: Marcus is frustrated with his meditation practice. He keeps thinking he should be "further along" and needs to practice more, harder, better.

Which thread is most alive here?
- [ ] A) PRESENCE
- [ ] B) BECOMING
- [x] C) PAUSE
- [ ] D) EMBODIMENT

**Feedback:**
✓ Correct! This is PAUSE collapse toward "More" - Marcus is in the "Not Yet + More" quadrant, unable to rest in "enough," grasping impatiently. He can't be with sacred timing.

---

**Question 2 - Collapse Recognition**

When someone constantly procrastinates, putting off important actions indefinitely, this is:
- [ ] A) PAUSE collapse toward "Now"
- [x] B) PAUSE collapse toward "Not Yet"
- [ ] C) BECOMING collapse toward "Return"
- [ ] D) UNCERTAINTY collapse toward "Hide"

**Feedback:**
✓ Correct! Procrastination is "Not Yet" collapse - perpetual waiting driven by fear, not wisdom. The person can't access the "Now + Enough" capacity to act from fullness.
```

---

### 6. PRACTICE ASSIGNMENTS

**Purpose:** Transfer learning to daily life through structured practice

**Three Levels:**

#### **MICRO-PRACTICES (Daily, 3-5 minutes)**
- Brief, repeatable habits
- Tie to existing routines
- Maintain connection between sessions

Examples:
- Morning thread intention: "Which thread might be alive today?"
- Body check-in: "Where am I holding tension right now?"
- Collapse awareness: "Did I collapse today? Which pole?"
- Evening reflection: "Where did I see [THREAD] today?"

#### **MINI-SESSIONS (2-3x per week, 10-15 minutes)**
- Practice core skills between full sessions
- Solo or partner practice
- Structured protocol

Template:
1. Ground (2 min): Body scan, breath
2. Identify (1 min): What thread is alive?
3. Name (2 min): Both poles
4. Hold (5-7 min): Stay with tension
5. Reflect (2-3 min): Journal what emerged

#### **REAL-WORLD APPLICATION (Weekly)**
- Apply framework to actual life situations
- Progressive challenge across tiers

**Foundation:**
- Notice thread in 3 situations, journal observations

**Building:**
- When you notice collapse, pause and name it
- Practice 5 minutes of holding before acting

**Deepening:**
- Apply full Threadwork to one real dilemma
- Share framework with one person (teach)

**Mastery:**
- Facilitate informal Threadwork for someone else
- Apply to systemic/relational tensions

---

## Progression Framework

### The Four Tiers

Each tier builds specific capacities across all 7 threads:

#### **TIER 1: FOUNDATION (Weeks 1-2)**

**Focus:** Recognition and awareness

**Capacities:**
- Recognize seven threads in everyday life
- Identify personal collapse patterns
- Develop basic observer capacity
- Practice 2-3 minutes of tension-holding
- Learn basic grounding techniques

**Teaching Emphasis:**
- 60% teaching / 40% practice
- Lower activation levels
- Scaffolded support throughout
- Start with less activating threads (PAUSE, BECOMING)

**Milestones:**
- [ ] Can name all seven threads and seed questions
- [ ] Identified personal primary collapse pattern
- [ ] Held tension 2-3 minutes without collapsing
- [ ] Completed basic grounding practice independently

---

#### **TIER 2: BUILDING (Weeks 3-4)**

**Focus:** Application and skill development

**Capacities:**
- Hold tension 5-7 minutes
- Recognize collapse in real-time
- Apply grounding when activated
- Work with moderately activating material
- Distinguish circular vs spiral patterns

**Teaching Emphasis:**
- 40% teaching / 60% practice
- Moderate activation
- Reduce scaffolding
- Practice with personal (not just hypothetical) material

**Milestones:**
- [ ] Held tension 5-7 minutes with support
- [ ] Recognized and corrected own collapse at least once
- [ ] Applied framework to real personal situation
- [ ] Can distinguish spiral from circular patterns

---

#### **TIER 3: DEEPENING (Weeks 5-6)**

**Focus:** Integration and complexity

**Capacities:**
- Hold tension 10-12 minutes
- Work with highly activating material
- Navigate multiple threads simultaneously
- Support others in tension-holding
- Recognize and work with emergence

**Teaching Emphasis:**
- 30% teaching / 70% practice
- Higher activation with adequate resourcing
- Minimal scaffolding
- Complex scenarios (relational, multi-thread)

**Milestones:**
- [ ] Held highly activating tension 10+ minutes
- [ ] Completed full Threadwork protocol independently
- [ ] Facilitated tension-holding for another person
- [ ] Recognized emergence in own process
- [ ] Transferred framework to 3+ real contexts

---

#### **TIER 4: MASTERY (Weeks 7-8)**

**Focus:** Embodiment and teaching

**Capacities:**
- Hold complex multi-thread tensions
- Maintain presence while activated
- Facilitate for others with skill
- Teach framework to others
- Sustain independent practice

**Teaching Emphasis:**
- 20% teaching / 80% practice
- Self-directed learning
- Peer teaching and supervision
- Preparation for ongoing practice

**Milestones:**
- [ ] Held multi-thread tension 15+ minutes
- [ ] Facilitated multiple Threadwork sessions competently
- [ ] Taught thread framework to at least one person
- [ ] Created sustainable personal practice plan
- [ ] Demonstrated capacity across all seven threads

---

### Thread Sequencing by Activation Level

**Recommended Teaching Order:**

**LEAST ACTIVATING (Start here):**
1. **PAUSE** - Concrete, observable (timing, urgency)
2. **BECOMING** - Personal growth context, familiar

**MODERATELY ACTIVATING:**
3. **PRESENCE** - Relational but not confrontational
4. **UNCERTAINTY** - Intellectual challenge, less somatic threat
5. **MEMORY** - Personal history, can be contained

**MOST ACTIVATING (Save for later):**
6. **CONSENT** - Relational power dynamics, boundary work
7. **EMBODIMENT** - Direct body awareness, trauma potential

*Note: Individual variation exists - some find EMBODIMENT least activating, others most. The system should allow personalization.*

---

## Technical Integration

### Content Storage & Delivery

**Database Schema:**

```typescript
TrainingModule {
  // Identity
  moduleId: string         // "pause-foundation"
  thread: ThreadType       // PAUSE
  tier: TierLevel         // foundation

  // Content
  slides: Slide[]         // Array of slide content
  meditations: Meditation[]
  exercises: Exercise[]
  writingPrompts: Prompt[]
  knowledgeChecks: Quiz[]
  practiceAssignments: Assignment[]

  // Session structure
  sessionStructure: {
    ground: { duration, elements }
    teach: { duration, slideSequence }
    practice: { duration, exerciseIndex }
    integrate: { duration, promptIndex }
  }

  // Metadata
  published: boolean
  version: string
  createdBy: string
  researchBasis: string
}
```

### Audio Generation (Speechify API)

**Workflow:**
1. Author narration scripts in markdown
2. POST to Speechify API with voice settings:
   ```json
   {
     "input": "<narration script>",
     "voice_id": "henry",  // or other natural voices
     "model": "simba-english",
     "speed": 0.9,
     "output_format": "mp3"
   }
   ```
3. Receive audio file URL
4. Store URL in module content
5. Deliver to client on demand

**Voice Settings by Content Type:**
- **Narration:** Moderate pace (0.85-0.95x), clear articulation
- **Meditation:** Slower (0.75-0.85x), calming tone
- **Exercise Instructions:** Normal pace (0.95-1.0x), clear and directive

### Visual Generation

**Slide Creation:**
- Use consistent template design
- Generate via design tool or NotebookLM
- Export as high-quality images or PDF
- Store in CDN for fast delivery

**Diagram Types:**
1. Four-quadrant thread maps
2. Collapse pattern illustrations
3. Progression timelines
4. Window of tolerance graphics
5. Integration flow charts

---

## Content Creation Workflow

### Phase 1: Research & Design (Per Module)

1. **Thread Analysis**
   - Review thread definition, seed question, tensions
   - Identify collapse patterns and protective functions
   - Research somatic markers and behavioral signs
   - Collect real-world examples

2. **Tier-Specific Objectives**
   - Define precise capacities to build at this tier
   - Determine appropriate activation level
   - Identify prerequisite modules
   - Set milestone criteria

3. **Instructional Design**
   - Map to Kolb cycle (Experience → Reflect → Conceptualize → Apply)
   - Design multimodal elements (visual, audio, kinesthetic, reflective)
   - Create scaffolded progression
   - Build trauma-informed modifications

---

### Phase 2: Content Authoring

**For Each Module, Create:**

1. **Slide Deck (5-7 slides)**
   - Write narration scripts
   - Specify visual elements
   - Design for accessibility

2. **Guided Meditations (1-3 practices)**
   - Script opening, deepening, closing
   - Add timing notation
   - Include trauma-informed options

3. **Interactive Exercises (2-4 activities)**
   - Design experience phase
   - Write reflection prompts
   - Create integration questions

4. **Writing Prompts (4-6 prompts)**
   - Progressive depth
   - Connect to real life
   - Enable metacognition

5. **Knowledge Checks (3-5 questions)**
   - Scenario-based questions
   - Explanatory feedback
   - Cover key concepts

6. **Practice Assignments (3 levels)**
   - Micro (daily)
   - Mini (2-3x week)
   - Real-world (weekly)

---

### Phase 3: Production

1. **Audio Generation**
   - Submit scripts to Speechify API
   - Review and approve audio quality
   - Store files with proper naming convention
   - Link URLs in module data

2. **Visual Creation**
   - Generate slides via NotebookLM or design tool
   - Ensure consistent branding
   - Optimize for web delivery
   - Create downloadable PDFs

3. **Quality Assurance**
   - Peer review for accuracy
   - Test complete session flow
   - Validate timing estimates
   - Check accessibility (captions, alt text)

---

### Phase 4: Implementation

1. **Database Population**
   - Structure module data in schema
   - Upload to database
   - Mark as published when ready

2. **Integration Testing**
   - Test content delivery to frontend
   - Verify audio/visual playback
   - Confirm proper sequencing
   - Check responsive design

3. **Pilot Testing**
   - Run module with beta users
   - Collect feedback
   - Measure completion rates
   - Assess capacity growth

4. **Iteration**
   - Refine based on feedback
   - Update version number
   - Document changes
   - Re-publish

---

## Exemplar Module Template

### PAUSE Foundation Module

See separate document: `PAUSE-FOUNDATION-MODULE.md`

This exemplar contains:
- Complete slide deck with narration scripts
- Full guided meditation (12 minutes)
- Three interactive exercises
- Six writing prompts (progressive depth)
- Five knowledge check questions
- Three-tier practice assignments
- Session timing breakdown
- Facilitator notes

**Purpose of Exemplar:**
- Serves as template for all other modules
- Demonstrates quality standards
- Shows proper structure and flow
- Can be used for pilot testing

---

## Next Steps

### Immediate Priorities

1. ✅ **Define Content Architecture** (This Document)
2. ⏳ **Create PAUSE Foundation Exemplar**
3. ⏳ **Build Technical Infrastructure**
   - Database schemas
   - API endpoints for content delivery
   - Speechify integration
   - Frontend components for each content type
4. ⏳ **Develop Remaining 27 Modules**
   - Prioritize by activation level
   - Create in batches by tier
   - Pilot test and iterate
5. ⏳ **Assessment & Progress Tracking**
   - Build capacity measurement tools
   - Create progress dashboard
   - Implement milestone recognition

### Long-term Vision

- **Personalization Engine:** AI-driven content sequencing based on individual patterns
- **Community Features:** Discussion forums, peer pods, practice partnerships
- **Advanced Content:** Mastery-level modules, specialized applications
- **Certification Program:** Credential practitioners to facilitate Threadwork
- **Research Integration:** Collect data on capacity building outcomes

---

## Appendix

### Glossary

- **Thread:** One of seven universal tensions of human experience
- **Tier:** Level of capacity (Foundation, Building, Deepening, Mastery)
- **Collapse:** Movement away from center toward one pole
- **Shadow:** The name/pattern of collapse toward a specific pole
- **Capacity:** Ability to hold tension without collapsing
- **Window of Tolerance:** Optimal zone of arousal for functioning
- **Titration:** Modulating intensity to ensure healthy integration
- **Pendulation:** Oscillating between arousal and calm
- **Emergence:** What arises when tension is held without forcing resolution

### References

See research report for full citations and evidence base.

---

**End of Architecture Document**

*This architecture will evolve as we pilot test and refine the training system. Version control and iterative improvement are essential.*
