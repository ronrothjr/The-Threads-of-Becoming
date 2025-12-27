const mongoose = require('mongoose');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');
require('dotenv').config();

async function getMongoUri() {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  const client = new SecretsManagerClient({
    region: process.env.AWS_REGION || 'us-east-1',
    ...(accessKeyId && secretAccessKey ? {
      credentials: { accessKeyId, secretAccessKey }
    } : {})
  });

  const response = await client.send(
    new GetSecretValueCommand({ SecretId: 'threads-app-secrets' })
  );
  const secrets = JSON.parse(response.SecretString);
  return secrets.MONGODB_URI;
}

// Define schema inline
const AudioContentSchema = new mongoose.Schema({
  text: String,
  voiceId: String,
  speed: Number,
  audioUrl: String,
  duration: Number,
  generatedAt: Date,
  charactersUsed: Number,
}, { _id: false });

const SlideContentSchema = new mongoose.Schema({
  slideNumber: { type: Number, required: true },
  title: { type: String, required: true },
  visualDescription: String,
  visualUrl: String,
  narration: AudioContentSchema,
}, { _id: false });

const MeditationContentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  duration: Number,
  audio: AudioContentSchema,
}, { _id: false });

const TrainingModuleSchema = new mongoose.Schema({
  moduleId: { type: String, required: true, unique: true },
  thread: { type: String, required: true },
  tier: { type: String, required: true },
  title: String,
  description: String,
  seedQuestion: String,
  duration: Number,
  estimatedDuration: Number,
  published: { type: Boolean, default: false },
  learningObjectives: [String],
  sessionStructure: { type: mongoose.Schema.Types.Mixed },
  slides: [SlideContentSchema],
  meditations: [MeditationContentSchema],
  exercises: [{ type: mongoose.Schema.Types.Mixed }],
  writingPrompts: [{ type: mongoose.Schema.Types.Mixed }],
  knowledgeChecks: [{ type: mongoose.Schema.Types.Mixed }],
  practiceAssignments: [{ type: mongoose.Schema.Types.Mixed }],
}, { timestamps: true });

async function loadPauseModule() {
  try {
    const mongoUri = await getMongoUri();
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB using URI from Secrets Manager');

    const TrainingModule = mongoose.model('TrainingModule', TrainingModuleSchema);

    // Check if module already exists
    const existing = await TrainingModule.findOne({ moduleId: 'pause-foundation' });
    if (existing) {
      console.log('PAUSE Foundation module already exists. Deleting...');
      await TrainingModule.deleteOne({ moduleId: 'pause-foundation' });
    }

    // Create the PAUSE Foundation module
    const pauseModule = new TrainingModule({
      moduleId: 'pause-foundation',
      thread: 'PAUSE',
      tier: 'foundation',
      title: 'PAUSE Foundation',
      description: 'Introduction to the PAUSE thread - learning to hold the tension between "not yet" and "now"',
      seedQuestion: 'When can I...?',
      estimatedDuration: 75,
      duration: 75,
      published: false,
      learningObjectives: [
        'Understand the PAUSE thread and its seed question: "When can I...?"',
        'Recognize the two axes of PAUSE: timing (not yet ↔ now) and sufficiency (enough ↔ more)',
        'Identify your personal collapse patterns: procrastination or impulsivity',
        'Practice the 3-Breath Pause technique in real-world situations',
        'Build capacity to hold creative tension without collapsing'
      ],
      sessionStructure: {
        ground: {
          duration: 15,
          elements: ['meditation:0']
        },
        teach: {
          duration: 25,
          slideSequence: [0, 1, 2, 3, 4]
        },
        practice: {
          duration: 20,
          exerciseIndex: 0
        },
        integrate: {
          duration: 15,
          writingPrompts: 'in-session',
          knowledgeChecks: 'all'
        }
      },
      slides: [
        {
          slideNumber: 1,
          title: 'PAUSE - When can I...?',
          visualDescription: 'Centered title slide with PAUSE in large text, seed question "When can I...?" below, and minimalist pause icon (two vertical bars) at bottom',
          narration: {
            text: 'Welcome to the PAUSE Foundation module. PAUSE is one of seven fundamental threads of human experience. The seed question of PAUSE is: "When can I...?" This question lives in the space between not yet and now, between waiting and acting. Over the next 25 minutes, you\'ll discover how this thread shows up in your life, where you might be collapsing, and how to hold its creative tension.',
            voiceId: 'cliff',
            speed: 0.90,
          }
        },
        {
          slideNumber: 2,
          title: 'The Four-Quadrant Map',
          visualDescription: 'Four-quadrant diagram with axes labeled "Not Yet ↔ Now" (horizontal) and "Enough ↔ More" (vertical). Each quadrant labeled with its qualities.',
          narration: {
            text: 'PAUSE operates across two axes of tension. The horizontal axis moves from "not yet" to "now" - the tension of timing. The vertical axis moves from "enough" to "more" - the tension of sufficiency. This creates four distinct territories. The upper left quadrant - not yet plus enough - is sacred pause, trusting timing. The lower left - not yet plus more - is impatient grasping. The upper right - now plus enough - is right action from fullness. The lower right - now plus more - is urgency and striving. Each has its wisdom. Each has its collapse.',
            voiceId: 'cliff',
            speed: 0.90,
          }
        },
        {
          slideNumber: 3,
          title: 'Collapse Patterns',
          visualDescription: 'Two contrasting images or icons: left side shows perpetual waiting/frozen state (Procrastination), right side shows frenetic motion/constant urgency (Impulsivity)',
          narration: {
            text: 'When we can\'t hold the tension of PAUSE, we collapse in one of two directions. Procrastination is the "not yet" collapse - perpetual waiting driven by fear. We say "someday" but never move. Impulsivity is the "now" collapse - constant urgency, unable to pause. We say "right now" before we\'re ready. Most of us have a home collapse pattern. Which one feels familiar to you? Notice, without judgment, where you tend to land when the tension gets too much.',
            voiceId: 'cliff',
            speed: 0.90,
          }
        },
        {
          slideNumber: 4,
          title: 'Real-World Examples',
          visualDescription: 'Split-screen showing everyday scenarios: checking phone during conversation, waiting to have difficult conversation, rushing through meaningful moments',
          narration: {
            text: 'PAUSE shows up everywhere. It\'s checking your phone mid-conversation because you can\'t hold the pause. It\'s waiting months to have a needed conversation because you can\'t trust "now." It\'s rushing through meaningful moments because stillness feels unbearable. It\'s the text you send too quickly in conflict. The project you start before you\'re ready. The opportunity you miss because you waited too long. Each moment is an invitation to practice. To feel the tension. To stay present with "not knowing when."',
            voiceId: 'cliff',
            speed: 0.90,
          }
        },
        {
          slideNumber: 5,
          title: 'Your Practice This Week',
          visualDescription: 'Simple visual showing three breath cycles with the text "The 3-Breath Pause" and invitation to practice',
          narration: {
            text: 'This week, you\'ll practice the 3-Breath Pause. When you notice urgency rising - the impulse to check, to respond, to act - take three full breaths before moving. Just three breaths. Feel what\'s present. Notice the impulse without following it. This isn\'t about suppressing action. It\'s about creating space between stimulus and response. Between "not yet" and "now." We practiced this together in the opening meditation - you can replay it anytime. You\'re building capacity to hold creative tension.',
            voiceId: 'cliff',
            speed: 0.90,
          }
        }
      ],
      meditations: [
        {
          title: 'Settling into PAUSE',
          description: 'A 12-minute guided meditation to help learners feel the somatic experience of holding the PAUSE tension',
          duration: 12,
          audio: {
            text: `Find a comfortable position, sitting or lying down. [~~]

Close your eyes if that feels safe. [~]

Let your attention settle into your body. [~~]

Notice the weight of your body against the surface beneath you. [~~]

Notice the rhythm of your breathing, without trying to change it. [~~~]

For the next few minutes, we're going to explore the feeling of PAUSE - that space between not yet and now. [~~]

Bring to mind something small you've been waiting to do. Maybe a text you've been meaning to send. A project you've been putting off. A conversation you know is coming. [~~~]

Don't pick something overwhelming. Just something present. [~~]

As you hold this in your awareness, notice what happens in your body. [~~]

Is there a tightening anywhere? A restlessness? [~~]

Is there a heaviness? A pulling back? [~~]

These are the somatic markers of the PAUSE tension. [~~~]

Now, imagine taking action on this thing right now. In this moment. [~~]

Notice what shifts in your body. [~~]

Is there a surge of energy? A gripping? An urgency? [~~]

Or perhaps a resistance? A pulling away? [~~]

You're feeling the "now" pole of the tension. [~~~]

Now release that image. [~~]

Imagine never doing this thing. Ever. [~~]

Notice what happens in your body. [~~]

Is there a settling? A relief? [~~]

Or perhaps a sinking? A resignation? [~~]

You're feeling the "not yet" pole - maybe even the collapse. [~~~]

Now, return to simply holding the question: When? [~~]

Not forcing an answer. [~~]

Not pushing it away. [~~]

Just holding the not knowing. [~~~]

This is the practice of PAUSE. [~~]

Not avoiding action. [~~]

Not forcing action. [~~]

But holding the creative tension until right timing emerges. [~~~]

As we prepare to close, take three full breaths. [~~]

With each breath, practice being right here. [~~]

Not yet. [~] Not now. [~] Just this. [~~~]

When you're ready, gently open your eyes. [~~]`,
            voiceId: 'george',
            speed: 0.80,
          }
        }
      ],
      exercises: [
        {
          title: 'Practice the 3-Breath Pause',
          type: 'experiential',
          duration: 10,
          instructions: 'Right now, as you sit here, practice the 3-Breath Pause. Don\'t do anything else - just take three intentional breaths.',
          steps: [
            'Close your eyes or soften your gaze',
            'Take your first full breath - notice the inhale and exhale completely',
            'Take your second breath - feel where you are holding tension',
            'Take your third breath - notice the urge to move on, and stay here anyway',
            'Open your eyes. What did you notice?'
          ],
          reflection: 'What came up during those three breaths? Did you feel the pull to rush? Did you notice resistance? This is the practice - creating space between stimulus and response.'
        },
        {
          title: 'Recognizing Your Collapse Pattern',
          type: 'reflective',
          duration: 10,
          instructions: 'Think about a current situation where you\'re struggling with timing - something you\'re either avoiding (not yet) or rushing into (now).',
          prompts: [
            'What is the situation?',
            'What sensations do you feel in your body when you think about it?',
            'Which way do you tend to collapse - waiting too long or acting too quickly?',
            'What would it feel like to hold the tension instead of collapsing?',
            'What\'s one small way you could practice PAUSE with this situation this week?'
          ],
          reflection: 'The goal isn\'t to eliminate your collapse pattern immediately. It\'s to start recognizing it in real-time. Awareness is the first step toward capacity.'
        }
      ],
      writingPrompts: [
        {
          prompt: 'Describe a moment this week when you felt the tension between "not yet" and "now." What sensations did you notice in your body?',
          type: 'reflection',
          suggestedDuration: 5,
          context: 'in-session',
          optional: true
        },
        {
          prompt: 'Which collapse pattern feels more familiar to you - procrastination or impulsivity? Give a specific recent example.',
          type: 'exploration',
          suggestedDuration: 5,
          context: 'in-session',
          optional: true
        },
        {
          prompt: 'Think of an area of your life where you struggle with timing. What would it look like to hold the PAUSE tension there instead of collapsing?',
          type: 'application',
          suggestedDuration: 7,
          context: 'practice-assignment',
          scheduledAfterDays: 3
        },
        {
          prompt: 'When you practiced the 3-Breath Pause, what did you discover? What was hardest about it?',
          type: 'reflection',
          suggestedDuration: 5,
          context: 'practice-assignment',
          scheduledAfterDays: 7
        },
        {
          prompt: 'Imagine someone who has mastered PAUSE - who can hold the tension beautifully. Describe how they move through a challenging moment.',
          type: 'exploration',
          suggestedDuration: 7,
          context: 'weekly-reflection',
          scheduledAfterDays: 7
        },
        {
          prompt: 'What story do you tell yourself about your relationship with timing and patience? Is this story serving you?',
          type: 'integration',
          suggestedDuration: 10,
          context: 'weekly-reflection',
          scheduledAfterDays: 14
        }
      ],
      knowledgeChecks: [
        {
          type: 'thread_identification',
          question: 'What are the two axes of tension in the PAUSE thread?',
          options: [
            { text: 'Timing (Not Yet ↔ Now) and Sufficiency (Enough ↔ More)', isCorrect: true, feedback: 'Correct! PAUSE holds the tension between timing (Not Yet ↔ Now) and sufficiency (Enough ↔ More). These two axes create four quadrants of experience.' },
            { text: 'Patience (Waiting ↔ Acting) and Speed (Slow ↔ Fast)', isCorrect: false, feedback: 'Close, but not quite. The timing axis is about "not yet" vs "now" (when can I?), and there\'s a second axis about sufficiency (enough vs more).' },
            { text: 'Action (Doing ↔ Not Doing) and Emotion (Calm ↔ Anxious)', isCorrect: false, feedback: 'PAUSE isn\'t primarily about action vs inaction or emotional states. It\'s about timing (not yet ↔ now) and sufficiency (enough ↔ more).' },
            { text: 'Restraint (Holding Back ↔ Letting Go) and Desire (Wanting ↔ Not Wanting)', isCorrect: false, feedback: 'The PAUSE tensions are more specific: timing (when can I?) and sufficiency (is this enough?). These create the seed question "When can I...?"' }
          ]
        },
        {
          type: 'collapse_recognition',
          question: 'Procrastination is best understood as:',
          options: [
            { text: 'Laziness and poor time management', isCorrect: false, feedback: 'That\'s a common misconception. Procrastination is actually a collapse pattern, not laziness.' },
            { text: 'A collapse toward the "not yet" pole, often driven by fear', isCorrect: true, feedback: 'Yes! Procrastination is the "not yet" collapse - perpetual waiting that comes from fear rather than wisdom.' },
            { text: 'A healthy form of waiting', isCorrect: false, feedback: 'Healthy waiting holds tension. Procrastination collapses away from action.' },
            { text: 'The same as patience', isCorrect: false, feedback: 'Patience holds creative tension. Procrastination is a fear-driven collapse.' }
          ]
        },
        {
          type: 'practice_application',
          question: 'The 3-Breath Pause practice is designed to:',
          options: [
            { text: 'Suppress all impulses permanently', isCorrect: false, feedback: 'No - suppression is another form of collapse. We\'re building capacity, not suppression.' },
            { text: 'Create space between stimulus and response', isCorrect: true, feedback: 'Exactly! The practice creates space to choose your response rather than reacting automatically.' },
            { text: 'Make you slower at everything', isCorrect: false, feedback: 'The pause isn\'t about being slow - it\'s about being intentional.' },
            { text: 'Eliminate urgency from your life', isCorrect: false, feedback: 'Urgency isn\'t the enemy. The goal is to hold tension with urgency, not eliminate it.' }
          ]
        },
        {
          type: 'collapse_recognition',
          question: 'Impulsivity represents:',
          options: [
            { text: 'Healthy spontaneity', isCorrect: false, feedback: 'Spontaneity can be healthy. Impulsivity is the inability to pause before acting.' },
            { text: 'The "now" collapse - constant urgency and inability to pause', isCorrect: true, feedback: 'Correct! Impulsivity is the "now" collapse - we can\'t hold the tension so we act before we\'re ready.' },
            { text: 'The same as being decisive', isCorrect: false, feedback: 'Being decisive comes from holding tension. Impulsivity is acting to escape tension.' },
            { text: 'The opposite of procrastination, which means it\'s better', isCorrect: false, feedback: 'Both are collapse patterns - just in opposite directions.' }
          ]
        },
        {
          type: 'integration_understanding',
          question: 'The goal of PAUSE practice is to:',
          options: [
            { text: 'Never feel urgency again', isCorrect: false, feedback: 'Urgency is part of being human. The goal is to hold it without collapsing.' },
            { text: 'Always wait for perfect timing', isCorrect: false, feedback: 'Perfect timing doesn\'t exist. This would be another form of collapse.' },
            { text: 'Hold the creative tension without collapsing', isCorrect: true, feedback: 'Yes! We\'re building capacity to stay present with "not knowing when" without collapsing to either extreme.' },
            { text: 'Eliminate the need for action', isCorrect: false, feedback: 'Action is necessary! PAUSE is about choosing when and how to act, not avoiding action.' }
          ]
        }
      ],
      practiceAssignments: [
        {
          type: 'micro',
          title: '3-Breath Pause Practice',
          duration: 5,
          frequency: 'Daily',
          instructions: 'Practice the 3-Breath Pause at least once per day when you notice urgency rising. Before checking your phone, before sending a message in conflict, before making a quick decision - take three full breaths. Notice what you discover.',
          trackingPrompt: 'How many times did you practice? What surprised you?'
        },
        {
          type: 'mini',
          title: 'Timing Pattern Journal',
          duration: 20,
          frequency: 'Weekly',
          instructions: 'Identify one area of your life where you struggle with timing (procrastination or impulsivity). Journal about: What\'s the fear underneath? What would holding the tension look like instead of collapsing? Try one experiment with staying present to "not knowing when."',
          trackingPrompt: 'What did you discover about your relationship with timing in this area?'
        },
        {
          type: 'real_world',
          title: 'Recurring Moment Awareness',
          duration: 30,
          frequency: 'Daily for one week',
          instructions: 'Choose one recurring situation where PAUSE shows up (morning routine, work transitions, evening shutdown, relationship moments). For the next week, bring conscious awareness to the PAUSE tension there. Notice your home collapse pattern. Practice holding the space between not yet and now. Journal what shifts.',
          trackingPrompt: 'How did this practice change your experience of this recurring moment?'
        }
      ]
    });

    await pauseModule.save();
    console.log('✓ PAUSE Foundation module loaded successfully!');
    console.log(`  Module ID: ${pauseModule.moduleId}`);
    console.log(`  Slides: ${pauseModule.slides.length}`);
    console.log(`  Meditations: ${pauseModule.meditations.length}`);
    console.log(`  Writing Prompts: ${pauseModule.writingPrompts.length}`);
    console.log(`  Knowledge Checks: ${pauseModule.knowledgeChecks.length}`);
    console.log(`  Practice Assignments: ${pauseModule.practiceAssignments.length}`);

  } catch (error) {
    console.error('Error loading PAUSE module:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

loadPauseModule();
