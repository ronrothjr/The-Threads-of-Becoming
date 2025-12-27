# Threads Capacity Training Interventions

## Overview

This document outlines actionable training systems that transform Personal Journey Map data points into trackable capacity-building activities. Each intervention creates new data points for comparison and progress measurement.

**Goal:** Move from "here's your analysis" → "here's what to DO about it" → "here's how you're progressing"

---

## Current Trackable Activity (Baseline)

### What We Can Already Track:

| Activity | Data Captured | Storage Location |
|----------|---------------|------------------|
| Login events | Timestamp, session duration | Auth logs |
| Page loads | Page ID, timestamp, duration | Frontend analytics |
| Button clicks | Button ID, context, timestamp | Frontend analytics |
| Journal entries | Date, thread focus, content, insights | Journal collection |
| Practice logs | Date, thread, practice type, reflection | Practice collection |
| Email interactions | Opens, clicks, timestamp | Email service (AWS SES) |

**Missing:** Actionable responses to assessment results beyond generic journaling/practice.

---

## Intervention Categories

We can create 8 new intervention types, each generating trackable data:

1. **Pattern Recognition Training**
2. **Behavioral Sign Tracking**
3. **Fear/Need Exploration**
4. **Cascade Interruption Practice**
5. **Custom Practice Completion**
6. **Development Path Milestones**
7. **HOLD Step Micro-Practices**
8. **Real-Time Collapse Detection**

---

## 1. Pattern Recognition Training

### Data Source
- `pattern.{id}.behavioralSigns` (5 signs per pattern)
- `pattern.{id}.experience` (first-person description)

### Intervention: Daily Pattern Check-In

**User Experience:**
```
Daily notification: "Pattern Check-In: Righteous Reactor"

Today, did you notice any of these signs?
☐ Rapid-fire responses to triggering content
☐ Long, passionate arguments that rarely change minds
☐ Feeling exhausted but unable to disengage
☐ Broken relationships over disagreements
☐ Regret after heated exchanges (but repeating the pattern)

[Yes - tell me more] [No, not today] [Skip]
```

**If "Yes - tell me more":**
```
Which sign(s) did you notice?
[Checkboxes for the 5 signs]

When did this happen?
[Time picker]

What triggered it?
[Text input - 1-2 sentences]

Did you catch yourself before/during/after?
○ Before (didn't act on it)
○ During (noticed while happening)
○ After (reflected later)

[Save]
```

### Data Captured (New Collection: `pattern_tracking`)

```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  patternId: String, // e.g., 'righteous_reactor'
  date: Date,
  behavioralSignsNoticed: [String], // IDs of signs
  timingOfAwareness: String, // 'before', 'during', 'after'
  trigger: String,
  context: String,
  detectionTime: Date,
  createdAt: Date
}
```

### Tracking Value
- **Pattern recognition accuracy**: Are they noticing signs more frequently?
- **Awareness timing**: Moving from "after" → "during" → "before"?
- **Trigger patterns**: Common contexts for collapse
- **Recognition rate**: % of days with pattern awareness

### Comparison Points
```
Assessment: pattern.righteous_reactor.confidence = 87%
Tracking:   pattern_tracking.righteous_reactor.count = 12 instances in 30 days
Insight:    "High pattern match + frequent real-world recognition = validated pattern"

Assessment: pattern.righteous_reactor.confidence = 87% (Month 1)
Assessment: pattern.righteous_reactor.confidence = 72% (Month 3)
Tracking:   timingOfAwareness shifting from 'after' (80%) to 'during' (60%)
Insight:    "Pattern weakening as awareness increases"
```

---

## 2. Behavioral Sign Tracking

### Data Source
- `pattern.{id}.behavioralSigns` (5 per pattern)

### Intervention: Behavioral Sign Journal Prompt

**User Experience:**
```
Journal Prompt (when user opens journal):

Based on your pattern profile, watch for these behaviors this week:

🎯 Righteous Reactor Signs:
1. Rapid-fire responses to triggering content
2. Long, passionate arguments that rarely change minds
3. Feeling exhausted but unable to disengage

This week, track:
- When you notice these
- What you tried instead
- What worked/didn't work

[Start Journal Entry]
```

**Smart Prompts During Journaling:**
```
You mentioned feeling "exhausted after the conversation"

This relates to your pattern: Righteous Reactor
Behavioral sign: "Feeling exhausted but unable to disengage"

Would you like to:
○ Track this as a pattern instance
○ Explore what kept you engaged
○ Identify what might help you disengage earlier
○ Just keep journaling

[Continue]
```

### Data Captured (Enhanced Journal Entry)

```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  date: Date,
  entry: String,
  // NEW FIELDS:
  linkedPatterns: [
    {
      patternId: String,
      behavioralSign: String,
      recognitionType: String, // 'prompted', 'self-identified'
      interventionTried: String,
      outcome: String
    }
  ],
  createdAt: Date
}
```

### Tracking Value
- **Sign frequency**: Trend over time
- **Intervention effectiveness**: What's working to interrupt patterns
- **Self-identification rate**: Prompted vs. unprompted recognition

### Comparison Points
```
Month 1: 80% of sign recognitions were prompted
Month 3: 60% of sign recognitions were self-identified
Insight: "User developing independent pattern awareness"
```

---

## 3. Fear/Need Exploration

### Data Source
- `pattern.{id}.deeperFears` (4 per pattern)
- `pattern.{id}.deeperNeeds` (4 per pattern)

### Intervention: Weekly Fear/Need Reflection

**User Experience:**
```
Weekly Reflection: Understanding Your Righteous Reactor

Your pattern is driven by deeper fears and needs. This week,
explore one of these:

FEAR: "Fear of being complicit in harm through silence"

Reflection questions:
1. When did this fear feel most active this week?
2. How did it show up in your behavior?
3. Is this fear protecting something important? What?
4. What might change if you held this fear more lightly?

[Start Reflection] [Skip for now]
```

**Alternative Focus:**
```
NEED: "Need to protect vulnerable others"

Reflection questions:
1. Who/what did you feel the need to protect this week?
2. How did this need drive your actions?
3. Can you honor this need AND stay present to tension?
4. What would it look like to protect without collapsing?

[Start Reflection]
```

### Data Captured (New Collection: `fear_need_exploration`)

```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  patternId: String,
  focusType: String, // 'fear' or 'need'
  focusItem: String, // The specific fear/need text
  responses: {
    whenActive: String,
    howItShowed: String,
    whatItProtects: String,
    lighterHolding: String
  },
  insightLevel: Number, // 1-5 self-rating
  date: Date,
  createdAt: Date
}
```

### Tracking Value
- **Fear/need awareness**: Which ones resonate most
- **Insight depth**: Self-rated understanding growth
- **Protective function recognition**: Understanding the "why"
- **Alternative strategies**: New ways to meet needs without collapsing

### Comparison Points
```
Assessment: pattern.deeperFears = ["Fear of being complicit...", "Fear of losing moral identity..."]
Tracking:   fear_exploration.fear_of_complicity.count = 6 reflections
           fear_exploration.fear_of_identity.count = 2 reflections
Insight:    "Fear of complicity is primary driver, identity fear is secondary"

Month 1: insightLevel average = 2.3
Month 3: insightLevel average = 4.1
Insight: "Deepening understanding of fear/need drivers"
```

---

## 4. Cascade Interruption Practice

### Data Source
- `cascade.{id}.sequence` (3-4 step collapse sequence)
- `cascade.{id}.trigger` (triggering event)

### Intervention: Cascade Awareness Training

**User Experience:**
```
Your Collapse Cascade: Righteous Reactor

When this happens:
🔥 Triggering content or perceived injustice

You typically collapse in this sequence:
1. PAUSE collapses → No gap between trigger and response
2. CONSENT collapses → Urgency to correct, convince, or fight
3. BECOMING collapses → Challenge to position feels like attack on self

🎯 Interruption Point Training

This week, try to catch yourself at Step 1 (PAUSE collapse):
- Notice: The urge to respond immediately
- HALT: Create a 30-second gap
- Track: Did you interrupt the cascade?

[Set Reminder] [View Full Cascade] [Start Practice]
```

**In-the-Moment Practice:**
```
Quick Check: Did you just notice the trigger?

Right now, which step are you at?
○ Step 1: Feeling urge to respond immediately
○ Step 2: Already engaging to convince/correct
○ Step 3: Feeling personally attacked
○ I interrupted it before Step 1!
○ Cascade already completed

What did you try?
[Text input]

Did it work?
○ Yes - cascade interrupted
○ Partially - reduced intensity
○ No - cascade completed anyway
○ Not sure yet

[Save]
```

### Data Captured (New Collection: `cascade_tracking`)

```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  cascadeId: String,
  trigger: String,
  stepReached: Number, // 1, 2, 3, or 0 (interrupted before)
  interventionAttempted: String,
  interruptionSuccess: String, // 'full', 'partial', 'none', 'uncertain'
  reflectionNotes: String,
  timestamp: Date,
  createdAt: Date
}
```

### Tracking Value
- **Cascade awareness**: Frequency of recognition
- **Interruption point**: Which step they're catching
- **Intervention effectiveness**: What works to interrupt
- **Progression**: Moving from Step 3 → Step 2 → Step 1 → Step 0

### Comparison Points
```
Week 1-2: stepReached average = 2.8 (catching at Step 3, after cascade)
Week 5-6: stepReached average = 1.4 (catching at Step 1-2, during cascade)
Week 11-12: stepReached average = 0.6 (interrupting before cascade)
Insight: "Successfully learning to interrupt earlier"

Assessment: cascade.righteous_reactor.sequence = 3 steps
Tracking:   interruptionSuccess = 'full' in 35% of instances
Insight:    "Interrupting cascade in 1/3 of occurrences"
```

---

## 5. Custom Practice Completion

### Data Source
- `pattern.{id}.customPractices` (4 practices per pattern)
- `devPath.items[].practices` (practices for development path)

### Intervention: Practice Assignment & Tracking

**User Experience:**
```
Your Custom Practices: Righteous Reactor

Based on your pattern, these 4 practices are designed for you:

✓ Practice 1: 30-second pause before responding to triggers
  Status: Tried 3 times this week

○ Practice 2: Journal - "What would I lose if I didn't respond?"
  Status: Not started

○ Practice 3: Stay connected without trying to change someone
  Status: Not started

○ Practice 4: Notice physical sensations before reactive urge
  Status: Not started

[Start Practice 2] [View All Practices]
```

**Practice Logging:**
```
Practice: "Journal - What would I lose if I didn't respond?"

You tried this practice!

How did it go?
○ Helped me see something new
○ Was challenging but valuable
○ Felt difficult/uncomfortable
○ Didn't resonate with me

What did you notice?
[Text area]

Will you try this practice again?
○ Yes, planning to
○ Maybe
○ No, trying a different approach

[Save Practice Log]
```

### Data Captured (Enhanced Practice Collection)

```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  date: Date,
  practiceType: String, // 'pattern_custom', 'devPath', 'HOLD', etc.

  // NEW FIELDS:
  linkedPattern: String, // Pattern ID if pattern-specific
  linkedDevPathItem: String, // Dev path item if applicable
  practiceText: String, // The actual practice instruction
  practiceNumber: Number, // 1-4 for custom practices

  effectiveness: String, // 'new_insight', 'challenging', 'difficult', 'not_resonant'
  willRepeat: Boolean,
  notes: String,

  createdAt: Date
}
```

### Tracking Value
- **Practice adoption rate**: Which practices get tried
- **Practice effectiveness**: Self-reported value
- **Practice persistence**: Repeat attempts
- **Practice coverage**: Are they trying all 4 or focusing on 1-2?

### Comparison Points
```
Assessment: pattern.customPractices = 4 practices
Tracking:   practice_1.attempts = 12, effectiveness = 'new_insight' (75%)
           practice_2.attempts = 5, effectiveness = 'challenging' (60%)
           practice_3.attempts = 1, effectiveness = 'not_resonant'
           practice_4.attempts = 0
Insight:    "Practices 1-2 are effective, 3-4 need different framing or support"

Month 1: willRepeat = true (40% of practices)
Month 3: willRepeat = true (75% of practices)
Insight: "Finding practices that work, building consistency"
```

---

## 6. Development Path Milestones

### Data Source
- `devPath.items[]` (4-6 prioritized items)
- Each with: thread, currentState, targetState, practices, estimatedWeeks

### Intervention: Milestone Progress Tracking

**User Experience:**
```
Your Development Path

🎯 IMMEDIATE PRIORITY (6 weeks)

PAUSE Thread
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 25% complete

Current: Reactive/impulsive — No gap between trigger/response
Target:  Consistent gap between stimulus and response

Week 2 of 6

This week's focus:
✓ Practice 3-breath pause before triggers (Done: 4 times)
○ Notice gap—try widening by 10 seconds (Not started)
○ Reflect: What would it cost to wait? (In progress)

[Log Progress] [View Full Path]
```

**Progress Logging:**
```
PAUSE Thread Development - Week 2 Check-In

On a scale of 1-10, how would you rate your capacity this week?

Current state (start): 3/10 - Reactive, no gap
Your rating now:       [_____] / 10
Target state (goal):   8/10 - Consistent gap

What's improving?
[Text area]

What's still challenging?
[Text area]

Ready to move to next practice?
○ Yes, let's progress
○ Not yet, need more time with current practice
○ Need to try a different approach

[Save Check-In]
```

### Data Captured (New Collection: `development_path_progress`)

```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  devPathItemId: String,
  thread: String,
  priority: String, // 'immediate', 'near-term', 'long-term'

  weekNumber: Number,
  totalWeeks: Number,

  selfRating: Number, // 1-10
  targetRating: Number, // Usually 8-10
  progressPercentage: Number, // Calculated

  improvements: String,
  challenges: String,
  readyToProgress: Boolean,

  practicesCompleted: [String],
  date: Date,
  createdAt: Date
}
```

### Tracking Value
- **Thread capacity self-assessment**: Weekly ratings
- **Progress velocity**: Improvement rate
- **Practice completion**: Which practices are being done
- **Milestone readiness**: When to move to next priority
- **Estimated vs. actual time**: 6-week estimate vs. reality

### Comparison Points
```
Assessment 1: thread.pause.percentage = 35%
DevPath:     Item 1 - PAUSE (immediate priority, 6 weeks)
Tracking:    Week 1: selfRating = 3/10
            Week 3: selfRating = 5/10
            Week 6: selfRating = 7/10
Assessment 2: thread.pause.percentage = 62%
Insight:     "Following dev path increased PAUSE capacity by 27 percentage points"

Estimated completion: 6 weeks
Actual completion:    8 weeks (readyToProgress = true in week 8)
Insight:              "Realistic timeline is +30% longer than estimate"
```

---

## 7. HOLD Step Micro-Practices

### Data Source
- `hold.{step}.threads` (which threads need which HOLD step)
- `pattern.{id}.holdFocus` (which HOLD step is critical for pattern)

### Intervention: Daily HOLD Micro-Practice

**User Experience:**
```
Today's HOLD Practice: HALT

Your pattern (Righteous Reactor) needs: HALT
Your threads needing HALT: PAUSE, CONSENT

🛑 HALT: Stop the automatic reaction

Today's micro-practice (2 minutes):
1. Recall a recent situation where you reacted automatically
2. Replay it in your mind
3. Imagine creating a 30-second gap before responding
4. Notice: what opens up in that gap?

[Start Practice] [Skip Today] [View All HOLD Steps]
```

**After Practice:**
```
HALT Practice Complete

What did you notice in the gap?
[Text area]

Could you imagine responding differently?
○ Yes - saw a different option
○ Maybe - not sure yet
○ No - still felt compelled to react
○ I actually tried this in real-time today!

If you tried it in real-time, what happened?
[Text area - optional]

[Save Reflection]
```

### Data Captured (Enhanced Practice Collection with HOLD focus)

```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  date: Date,
  practiceType: 'HOLD_micro',

  holdStep: String, // 'halt', 'observe', 'look', 'decide'
  linkedThreads: [String],
  linkedPattern: String,

  practiceCompleted: Boolean,
  reflectionNotes: String,
  newOptionSeen: Boolean,
  realTimeAttempt: Boolean,
  realTimeOutcome: String,

  createdAt: Date
}
```

### Tracking Value
- **HOLD step coverage**: Are they practicing all 4 steps?
- **Step effectiveness**: Which steps resonate most
- **Real-time transfer**: From practice → actual situations
- **New options rate**: % seeing different response options

### Comparison Points
```
Assessment: hold.halt.threads = ['PAUSE', 'CONSENT']
           pattern.holdFocus = "The H step—HALT—is critical"
Tracking:   hold_micro.halt.attempts = 18
           hold_micro.halt.realTimeAttempt = 12 (67%)
           hold_micro.halt.newOptionSeen = 15 (83%)
Insight:    "HALT practice translating to real situations for 2/3 of attempts"

Month 1: All HOLD steps practiced roughly equally (25% each)
Month 3: HALT = 45%, OBSERVE = 30%, LOOK = 15%, DECIDE = 10%
Insight: "Naturally gravitating toward critical step for their pattern"
```

---

## 8. Real-Time Collapse Detection

### Data Source
- All pattern data
- Cascade sequences
- Behavioral signs

### Intervention: In-the-Moment Collapse Alert

**User Experience (Mobile notification or web prompt):**
```
🔔 Collapse Check-In

Based on recent activity, you might be in a collapse pattern.

Quick check:
○ I'm noticing tension and staying with it (no collapse)
○ I think I might be collapsing - not sure
○ Yes, I'm in it - recognize the pattern
○ Not sure / Not now

[Respond] [Dismiss]
```

**If "Yes, I'm in it":**
```
Which pattern feels active?
○ Righteous Reactor
○ Anxious Avoider
○ [Other detected patterns]
○ Not sure, but something's happening

Quick intervention:
○ Take 3 breaths and return
○ Notice what I'm protecting
○ Ask: "What would happen if I didn't collapse?"
○ Step away for now

[Try This] [Save & Exit]
```

### Data Captured (New Collection: `realtime_detection`)

```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  triggerContext: String, // What activity/page/time triggered check-in

  collapseRecognized: Boolean,
  patternIdentified: String,
  certaintyLevel: String, // 'certain', 'maybe', 'unsure'

  interventionChosen: String,
  interventionCompleted: Boolean,
  outcome: String,

  timestamp: Date,
  createdAt: Date
}
```

### Tracking Value
- **Real-time awareness**: Can they recognize collapse in the moment?
- **Pattern identification accuracy**: Matching detected patterns
- **Intervention usage**: What helps in the moment
- **Time-of-day patterns**: When do collapses happen most?

### Comparison Points
```
Assessment: patterns.detected = ['righteous_reactor', 'anxious_avoider']
Tracking:   realtime.righteous_reactor.identified = 8 instances
           realtime.anxious_avoider.identified = 3 instances
           realtime.uncertain.identified = 5 instances
Insight:    "Primary pattern (Righteous Reactor) has clearer in-moment recognition"

Week 1: collapseRecognized = true (20% of check-ins)
Week 6: collapseRecognized = true (65% of check-ins)
Insight: "Developing real-time pattern awareness"
```

---

## Data Integration & Comparison Matrix

### Cross-Collection Analysis

| Assessment Data Point | Training Intervention | Tracking Collection | Comparison Metric |
|----------------------|----------------------|---------------------|-------------------|
| `pattern.{id}.confidence` | Pattern Recognition Training | `pattern_tracking` | Recognition frequency vs. confidence |
| `pattern.{id}.behavioralSigns` | Behavioral Sign Tracking | `journal` (enhanced) | Self-identification rate |
| `pattern.{id}.deeperFears` | Fear/Need Exploration | `fear_need_exploration` | Fear activation frequency |
| `cascade.{id}.sequence` | Cascade Interruption Practice | `cascade_tracking` | Interruption success rate |
| `pattern.{id}.customPractices` | Custom Practice Completion | `practice` (enhanced) | Practice effectiveness |
| `devPath.items[]` | Development Path Milestones | `development_path_progress` | Capacity growth tracking |
| `hold.{step}.threads` | HOLD Micro-Practices | `practice` (HOLD-enhanced) | Step-specific capacity |
| `thread.{name}.percentage` | All interventions | All collections | Thread capacity change |

---

## New Database Collections Needed

### 1. pattern_tracking
Tracks daily pattern check-ins and behavioral sign recognition.

### 2. fear_need_exploration
Stores weekly reflections on deeper fears and needs.

### 3. cascade_tracking
Logs real-time cascade recognition and interruption attempts.

### 4. development_path_progress
Tracks weekly progress on dev path milestones.

### 5. realtime_detection
Captures in-the-moment collapse awareness.

### 6. Enhanced Existing Collections
- **journal**: Add `linkedPatterns`, `behavioralSigns`
- **practice**: Add `linkedPattern`, `linkedDevPathItem`, `holdStep`, `effectiveness`

---

## Analytics Dashboard Possibilities

### User-Facing Progress View:

```
Your Transformation Journey - 90 Days

📊 Pattern Recognition
Righteous Reactor: Recognized 24 times
└─ Awareness timing: 65% during, 25% before, 10% after
└─ Interruption rate: 42% (10 successful interruptions)

🧵 Thread Capacity Growth
PAUSE:      35% → 62% (+27 points) ✓
CONSENT:    42% → 58% (+16 points) ✓
BECOMING:   48% → 51% (+3 points)

🎯 Development Path Progress
Immediate: PAUSE (Week 8 of 6 - Complete!)
Near-term: CONSENT (Week 3 of 8 - On track)
Long-term: BECOMING (Not started)

🛠️ Practice Effectiveness
30-second pause:     12 attempts, 83% helpful
Journal reflection:   8 attempts, 75% helpful
Stay connected:       2 attempts, 50% helpful

📈 Overall Trajectory
Pattern strength decreasing: 87% → 68% confidence
Real-time awareness increasing: 20% → 65%
```

---

## Implementation Priority

### Phase 1 (Immediate - High Impact):
1. **Custom Practice Completion** - Easiest to implement, high engagement
2. **Pattern Recognition Training** - Direct validation of assessment
3. **HOLD Micro-Practices** - Builds on existing practice system

### Phase 2 (Near-term - Deep Work):
4. **Development Path Milestones** - Structured progress tracking
5. **Cascade Interruption Practice** - Intermediate skill development
6. **Behavioral Sign Tracking** - Enhances existing journal

### Phase 3 (Long-term - Advanced):
7. **Fear/Need Exploration** - Deeper psychological work
8. **Real-Time Collapse Detection** - Requires sophisticated triggers

---

## Technical Architecture

### Frontend Components Needed:
- Daily pattern check-in modal
- Practice assignment dashboard
- Development path progress tracker
- HOLD step practice cards
- Cascade interruption trainer
- Fear/need reflection prompts
- Real-time collapse detection alerts

### Backend Services Needed:
- Pattern tracking service
- Progress calculation service
- Notification/reminder system
- Analytics aggregation service
- Comparison engine (assessment vs. tracking)

### Notification/Reminder System:
- Daily pattern check-in (morning)
- HOLD micro-practice (midday)
- Weekly fear/need reflection (weekend)
- Development path check-in (weekly)
- Custom practice reminders (user-set)

---

## Success Metrics

### Engagement Metrics:
- % of users completing daily check-ins
- Average practices logged per week
- Development path item completion rate

### Progress Metrics:
- Thread capacity growth (before/after assessment)
- Pattern confidence reduction over time
- Interruption success rate increase

### Validation Metrics:
- Correlation: Assessment pattern confidence ← → Real-world recognition frequency
- Correlation: Custom practice completion ← → Thread capacity growth
- Correlation: Dev path progress ← → Next assessment results

---

**Document Version:** 1.0
**Last Updated:** 2025-12-25
**Related Documents:**
- [threads-personal-journey-map-data-points.md](threads-personal-journey-map-data-points.md)
- [threads-collapse-patterns.md](threads-collapse-patterns.md)
- [threads-framework-implementation.md](threads-framework-implementation.md)
