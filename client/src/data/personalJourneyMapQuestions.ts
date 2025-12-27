export interface PersonalJourneyMapQuestion {
  id: string;
  thread: string;
  category: 'general' | 'direction' | 'context' | 'awareness';
  text: string;
  options: Array<{
    value: 'a' | 'b' | 'c' | 'd';
    label: string;
  }>;
}

// 70 questions: 10 per thread × 7 threads
// Questions 1-3: General Tendency
// Questions 4-6: Collapse Direction
// Questions 7-9: Context-Specific
// Question 10: Awareness Level

export const personalJourneyMapQuestions: PersonalJourneyMapQuestion[] = [
  // PRESENCE (PR1-PR10)
  {
    id: 'PR1',
    thread: 'PRESENCE',
    category: 'general',
    text: 'In conversations, I find myself relating to the actual person in front of me (not a category or role).',
    options: [
      { value: 'a', label: 'Rarely — I usually relate to categories, roles, or ideas about the person' },
      { value: 'b', label: 'Sometimes — I catch myself doing this, but not always' },
      { value: 'c', label: 'Often — I can usually stay present to the actual person' },
      { value: 'd', label: 'Consistently — I meet people as they are, not as abstractions' },
    ],
  },
  {
    id: 'PR2',
    thread: 'PRESENCE',
    category: 'general',
    text: 'I can move fluidly between solitude (time alone) and connection (time with others).',
    options: [
      { value: 'a', label: 'Rarely — I struggle with this balance' },
      { value: 'b', label: 'Sometimes — I can do this, but it takes effort' },
      { value: 'c', label: 'Often — I move between these states fairly well' },
      { value: 'd', label: 'Consistently — I navigate this naturally' },
    ],
  },
  {
    id: 'PR3',
    thread: 'PRESENCE',
    category: 'general',
    text: 'My mind stays present to what is happening now (rather than wandering to past or future).',
    options: [
      { value: 'a', label: 'Rarely — My mind is usually elsewhere' },
      { value: 'b', label: 'Sometimes — I notice when my mind wanders and can bring it back' },
      { value: 'c', label: 'Often — I stay present most of the time' },
      { value: 'd', label: 'Consistently — I am grounded in the present moment' },
    ],
  },
  {
    id: 'PR4',
    thread: 'PRESENCE',
    category: 'direction',
    text: 'In challenging relational moments, I tend to:',
    options: [
      { value: 'a', label: 'Withdraw completely — pulling away into isolation' },
      { value: 'b', label: 'Merge or lose myself — getting absorbed in the other person' },
      { value: 'c', label: 'Do both at different times depending on the situation' },
      { value: 'd', label: 'Stay connected while maintaining my own sense of self' },
    ],
  },
  {
    id: 'PR5',
    thread: 'PRESENCE',
    category: 'direction',
    text: 'In relationships, my typical pattern is:',
    options: [
      { value: 'a', label: 'I retreat inward and struggle to truly connect' },
      { value: 'b', label: 'I merge with others and lose track of my own experience' },
      { value: 'c', label: 'I oscillate between both extremes' },
      { value: 'd', label: 'I maintain a healthy balance of within and between' },
    ],
  },
  {
    id: 'PR6',
    thread: 'PRESENCE',
    category: 'direction',
    text: 'When stressed, I find myself:',
    options: [
      { value: 'a', label: 'Becoming more isolated, disconnected from others' },
      { value: 'b', label: 'Becoming more enmeshed, losing my boundaries' },
      { value: 'c', label: 'Swinging between both depending on the situation' },
      { value: 'd', label: 'Maintaining my ability to be present' },
    ],
  },
  {
    id: 'PR7',
    thread: 'PRESENCE',
    category: 'context',
    text: 'I find it hardest to stay present in:',
    options: [
      { value: 'a', label: 'Family situations' },
      { value: 'b', label: 'Work/professional contexts' },
      { value: 'c', label: 'Online interactions (social media, forums)' },
      { value: 'd', label: 'I stay present across all these contexts' },
    ],
  },
  {
    id: 'PR8',
    thread: 'PRESENCE',
    category: 'context',
    text: 'I find it easiest to stay present when:',
    options: [
      { value: 'a', label: 'With close friends or loved ones' },
      { value: 'b', label: 'In structured professional settings' },
      { value: 'c', label: 'Alone or in nature' },
      { value: 'd', label: 'It varies widely depending on the day' },
    ],
  },
  {
    id: 'PR9',
    thread: 'PRESENCE',
    category: 'context',
    text: 'I most notice my pattern of withdrawing or losing myself in:',
    options: [
      { value: 'a', label: 'Intimate relationships' },
      { value: 'b', label: 'Work or group settings' },
      { value: 'c', label: 'Public situations or with strangers' },
      { value: 'd', label: 'I stay present across all these contexts' },
    ],
  },
  {
    id: 'PR10',
    thread: 'PRESENCE',
    category: 'awareness',
    text: 'When I notice myself withdrawing or losing myself in others, I typically recognize it:',
    options: [
      { value: 'a', label: 'Days or weeks later (or not at all)' },
      { value: 'b', label: 'Hours or a day later, upon reflection' },
      { value: 'c', label: 'In the moment, as it\'s happening' },
      { value: 'd', label: 'Before it happens — I can sense it coming and adjust' },
    ],
  },

  // CONSENT (C1-C10)
  {
    id: 'C1',
    thread: 'CONSENT',
    category: 'general',
    text: 'I can allow others to have their own experiences, beliefs, and choices without needing to change or fix them.',
    options: [
      { value: 'a', label: 'Rarely — I feel compelled to intervene or control' },
      { value: 'b', label: 'Sometimes — I struggle but can sometimes let go' },
      { value: 'c', label: 'Often — I can usually allow others their autonomy' },
      { value: 'd', label: 'Consistently — I naturally respect others\' sovereignty' },
    ],
  },
  {
    id: 'C2',
    thread: 'CONSENT',
    category: 'general',
    text: 'I can hold my own boundaries without becoming either too rigid or too accommodating.',
    options: [
      { value: 'a', label: 'Rarely — My boundaries are either too rigid or too permeable' },
      { value: 'b', label: 'Sometimes — I can hold boundaries, but it takes significant effort' },
      { value: 'c', label: 'Often — I maintain healthy boundaries most of the time' },
      { value: 'd', label: 'Consistently — My boundaries are clear and responsive' },
    ],
  },
  {
    id: 'C3',
    thread: 'CONSENT',
    category: 'general',
    text: 'In disagreements, I can allow differing views to coexist without needing to win or give in.',
    options: [
      { value: 'a', label: 'Rarely — I need to be right or I give up entirely' },
      { value: 'b', label: 'Sometimes — I can tolerate difference, but with discomfort' },
      { value: 'c', label: 'Often — I can stay with different perspectives' },
      { value: 'd', label: 'Consistently — I naturally embrace diverse viewpoints' },
    ],
  },
  {
    id: 'C4',
    thread: 'CONSENT',
    category: 'direction',
    text: 'In conflicts or disagreements, I tend to:',
    options: [
      { value: 'a', label: 'Push harder — forcing my way, needing to be right' },
      { value: 'b', label: 'Give in — accommodating others, losing my position' },
      { value: 'c', label: 'Do both at different times depending on the situation' },
      { value: 'd', label: 'Hold my ground while respecting others\' views' },
    ],
  },
  {
    id: 'C5',
    thread: 'CONSENT',
    category: 'direction',
    text: 'My typical pattern in relationships (personal, professional, or political) is:',
    options: [
      { value: 'a', label: 'I need others to agree with me or see things my way' },
      { value: 'b', label: 'I tend to go along with others even when it doesn\'t feel right' },
      { value: 'c', label: 'I swing between pushing and accommodating' },
      { value: 'd', label: 'I maintain mutual respect and allow difference' },
    ],
  },
  {
    id: 'C6',
    thread: 'CONSENT',
    category: 'direction',
    text: 'In conflicts, I find myself:',
    options: [
      { value: 'a', label: 'Becoming more forceful and needing to win' },
      { value: 'b', label: 'Becoming more compliant and giving up my stance' },
      { value: 'c', label: 'Alternating between aggression and submission' },
      { value: 'd', label: 'Holding my ground while respecting others\' positions' },
    ],
  },
  {
    id: 'C7',
    thread: 'CONSENT',
    category: 'context',
    text: 'I find it hardest to respect both my own and others\' boundaries in:',
    options: [
      { value: 'a', label: 'Political or ideological discussions' },
      { value: 'b', label: 'Family dynamics or parenting' },
      { value: 'c', label: 'Work or professional authority situations' },
      { value: 'd', label: 'I respect boundaries across all these contexts' },
    ],
  },
  {
    id: 'C8',
    thread: 'CONSENT',
    category: 'context',
    text: 'I find it easiest to respect both my own and others\' boundaries when:',
    options: [
      { value: 'a', label: 'The stakes feel low or impersonal' },
      { value: 'b', label: 'I\'m with people I deeply trust' },
      { value: 'c', label: 'I have clear authority or role clarity' },
      { value: 'd', label: 'It varies widely depending on the topic' },
    ],
  },
  {
    id: 'C9',
    thread: 'CONSENT',
    category: 'context',
    text: 'I most notice myself being controlling or overly accommodating in:',
    options: [
      { value: 'a', label: 'Conversations about values, beliefs, or politics' },
      { value: 'b', label: 'When setting boundaries around my body, time, or energy' },
      { value: 'c', label: 'Hierarchical relationships (parent/child, boss/employee)' },
      { value: 'd', label: 'I maintain balance across all these contexts' },
    ],
  },
  {
    id: 'C10',
    thread: 'CONSENT',
    category: 'awareness',
    text: 'When I notice myself being controlling or overly accommodating, I typically recognize it:',
    options: [
      { value: 'a', label: 'Days or weeks later (or not at all)' },
      { value: 'b', label: 'Hours or a day later, upon reflection' },
      { value: 'c', label: 'In the moment, as it\'s happening' },
      { value: 'd', label: 'Before it happens — I can sense it coming and adjust' },
    ],
  },

  // MEMORY (M1-M10)
  {
    id: 'M1',
    thread: 'MEMORY',
    category: 'general',
    text: 'I can hold both past experience and present moment without getting stuck in either.',
    options: [
      { value: 'a', label: 'Rarely — I\'m stuck in the past or cut off from it entirely' },
      { value: 'b', label: 'Sometimes — I can balance past and present with effort' },
      { value: 'c', label: 'Often — I navigate this fairly well' },
      { value: 'd', label: 'Consistently — I naturally integrate past wisdom with present awareness' },
    ],
  },
  {
    id: 'M2',
    thread: 'MEMORY',
    category: 'general',
    text: 'I can reflect on the past without being trapped by it or denying its influence.',
    options: [
      { value: 'a', label: 'Rarely — I\'m either stuck in the past or dismissive of it' },
      { value: 'b', label: 'Sometimes — I can engage the past, but it\'s difficult' },
      { value: 'c', label: 'Often — I can learn from the past without being controlled by it' },
      { value: 'd', label: 'Consistently — I integrate past and present wisely' },
    ],
  },
  {
    id: 'M3',
    thread: 'MEMORY',
    category: 'general',
    text: 'I can stay grounded in the present while honoring what has come before.',
    options: [
      { value: 'a', label: 'Rarely — I lose myself in either past or present' },
      { value: 'b', label: 'Sometimes — I can do this, but it requires conscious effort' },
      { value: 'c', label: 'Often — I maintain this balance most of the time' },
      { value: 'd', label: 'Consistently — I naturally weave past and present together' },
    ],
  },
  {
    id: 'M4',
    thread: 'MEMORY',
    category: 'direction',
    text: 'When dealing with difficult experiences, I tend to:',
    options: [
      { value: 'a', label: 'Get stuck in the past — trapped by history, unable to move forward' },
      { value: 'b', label: 'Focus only on the future — dismissing the past, chasing what\'s next' },
      { value: 'c', label: 'Do both at different times depending on the situation' },
      { value: 'd', label: 'Hold the past as wisdom while staying present to now' },
    ],
  },
  {
    id: 'M5',
    thread: 'MEMORY',
    category: 'direction',
    text: 'My relationship to my personal or collective history is:',
    options: [
      { value: 'a', label: 'I\'m haunted by it, reliving old wounds or patterns' },
      { value: 'b', label: 'I dismiss it, focusing only on the future or "moving on"' },
      { value: 'c', label: 'I swing between being stuck in the past and ignoring it' },
      { value: 'd', label: 'I hold the past as wisdom without being trapped by it' },
    ],
  },
  {
    id: 'M6',
    thread: 'MEMORY',
    category: 'direction',
    text: 'When thinking about the future, I find myself:',
    options: [
      { value: 'a', label: 'Unable to imagine anything different from the past' },
      { value: 'b', label: 'Rejecting the past entirely, seeking novelty without roots' },
      { value: 'c', label: 'Oscillating between repeating the past and escaping it' },
      { value: 'd', label: 'Drawing on the past to inform a grounded future' },
    ],
  },
  {
    id: 'M7',
    thread: 'MEMORY',
    category: 'context',
    text: 'I find it hardest to balance past and present in:',
    options: [
      { value: 'a', label: 'Family or ancestral patterns' },
      { value: 'b', label: 'Cultural or collective history (race, religion, nation)' },
      { value: 'c', label: 'Personal trauma or past relationships' },
      { value: 'd', label: 'I maintain balance across all these contexts' },
    ],
  },
  {
    id: 'M8',
    thread: 'MEMORY',
    category: 'context',
    text: 'I find it easiest to balance past and present when:',
    options: [
      { value: 'a', label: 'Thinking about personal development or growth' },
      { value: 'b', label: 'Engaging with collective or cultural history' },
      { value: 'c', label: 'In structured reflection or therapy' },
      { value: 'd', label: 'It varies widely depending on the topic' },
    ],
  },
  {
    id: 'M9',
    thread: 'MEMORY',
    category: 'context',
    text: 'I most notice myself getting stuck in the past or escaping to the future in:',
    options: [
      { value: 'a', label: 'Relationships (romantic, family, or close friendships)' },
      { value: 'b', label: 'Conversations about identity or belonging' },
      { value: 'c', label: 'When facing change or transition' },
      { value: 'd', label: 'I maintain balance across all these contexts' },
    ],
  },
  {
    id: 'M10',
    thread: 'MEMORY',
    category: 'awareness',
    text: 'When I notice myself stuck in the past or escaping to the future, I typically recognize it:',
    options: [
      { value: 'a', label: 'Days or weeks later (or not at all)' },
      { value: 'b', label: 'Hours or a day later, upon reflection' },
      { value: 'c', label: 'In the moment, as it\'s happening' },
      { value: 'd', label: 'Before it happens — I can sense it coming and adjust' },
    ],
  },

  // PAUSE (P1-P10)
  {
    id: 'P1',
    thread: 'PAUSE',
    category: 'general',
    text: 'When I face a decision or tension, I can pause before acting.',
    options: [
      { value: 'a', label: 'Rarely — I react impulsively or avoid action entirely' },
      { value: 'b', label: 'Sometimes — I can pause, but it takes significant effort' },
      { value: 'c', label: 'Often — I usually pause before responding' },
      { value: 'd', label: 'Consistently — I naturally create space before acting' },
    ],
  },
  {
    id: 'P2',
    thread: 'PAUSE',
    category: 'general',
    text: 'I can hold the tension between "not yet" and "enough" without rushing or freezing.',
    options: [
      { value: 'a', label: 'Rarely — I either rush to act or procrastinate endlessly' },
      { value: 'b', label: 'Sometimes — I can navigate this, but with difficulty' },
      { value: 'c', label: 'Often — I can sense the right timing most of the time' },
      { value: 'd', label: 'Consistently — I trust my sense of timing naturally' },
    ],
  },
  {
    id: 'P3',
    thread: 'PAUSE',
    category: 'general',
    text: 'I can sense when it\'s time to act and when more waiting is needed.',
    options: [
      { value: 'a', label: 'Rarely — I misjudge timing regularly' },
      { value: 'b', label: 'Sometimes — I can sense timing, but often second-guess myself' },
      { value: 'c', label: 'Often — I have a good sense of right timing' },
      { value: 'd', label: 'Consistently — I navigate timing with wisdom' },
    ],
  },
  {
    id: 'P4',
    thread: 'PAUSE',
    category: 'direction',
    text: 'When facing decisions or tension, I tend to:',
    options: [
      { value: 'a', label: 'Act too quickly without adequate pause' },
      { value: 'b', label: 'Delay endlessly, avoiding timely action' },
      { value: 'c', label: 'Do both at different times depending on the situation' },
      { value: 'd', label: 'Pause appropriately and act when ready' },
    ],
  },
  {
    id: 'P5',
    thread: 'PAUSE',
    category: 'direction',
    text: 'When facing a difficult decision, my pattern is:',
    options: [
      { value: 'a', label: 'I rush to resolve the tension as quickly as possible' },
      { value: 'b', label: 'I delay action indefinitely, unable to move forward' },
      { value: 'c', label: 'I swing between hasty action and avoidance' },
      { value: 'd', label: 'I can hold the pause and act when ready' },
    ],
  },
  {
    id: 'P6',
    thread: 'PAUSE',
    category: 'direction',
    text: 'Looking back at past choices, I notice:',
    options: [
      { value: 'a', label: 'I often regret acting too quickly without enough consideration' },
      { value: 'b', label: 'I often regret waiting too long and missing opportunities' },
      { value: 'c', label: 'I see both patterns in different situations' },
      { value: 'd', label: 'My timing has generally been wise' },
    ],
  },
  {
    id: 'P7',
    thread: 'PAUSE',
    category: 'context',
    text: 'I find it hardest to pause before acting in:',
    options: [
      { value: 'a', label: 'Conflict or heated conversations' },
      { value: 'b', label: 'When I feel pressure from others to decide' },
      { value: 'c', label: 'Major life decisions or transitions' },
      { value: 'd', label: 'I pause appropriately across all these contexts' },
    ],
  },
  {
    id: 'P8',
    thread: 'PAUSE',
    category: 'context',
    text: 'I find it easiest to pause before acting when:',
    options: [
      { value: 'a', label: 'I have time and space to reflect alone' },
      { value: 'b', label: 'I feel supported and not pressured by others' },
      { value: 'c', label: 'The stakes are low and I feel safe' },
      { value: 'd', label: 'It varies widely depending on the situation' },
    ],
  },
  {
    id: 'P9',
    thread: 'PAUSE',
    category: 'context',
    text: 'I most notice myself acting impulsively or procrastinating in:',
    options: [
      { value: 'a', label: 'Relationships or social dynamics' },
      { value: 'b', label: 'Work or with responsibilities' },
      { value: 'c', label: 'When faced with change or uncertainty' },
      { value: 'd', label: 'I maintain good timing across all these contexts' },
    ],
  },
  {
    id: 'P10',
    thread: 'PAUSE',
    category: 'awareness',
    text: 'When I notice myself acting impulsively or procrastinating, I typically recognize it:',
    options: [
      { value: 'a', label: 'Days or weeks later (or not at all)' },
      { value: 'b', label: 'Hours or a day later, upon reflection' },
      { value: 'c', label: 'In the moment, as it\'s happening' },
      { value: 'd', label: 'Before it happens — I can sense it coming and adjust' },
    ],
  },

  // EMBODIMENT (E1-E10)
  {
    id: 'E1',
    thread: 'EMBODIMENT',
    category: 'general',
    text: 'I can stay connected to my body\'s signals and sensations.',
    options: [
      { value: 'a', label: 'Rarely — I\'m disconnected from or overwhelmed by my body' },
      { value: 'b', label: 'Sometimes — I can notice body signals with effort' },
      { value: 'c', label: 'Often — I stay attuned to my body most of the time' },
      { value: 'd', label: 'Consistently — I naturally listen to my body\'s wisdom' },
    ],
  },
  {
    id: 'E2',
    thread: 'EMBODIMENT',
    category: 'general',
    text: 'I trust my body\'s knowing (gut feelings, physical responses) as valuable information.',
    options: [
      { value: 'a', label: 'Rarely — I dismiss or mistrust my body' },
      { value: 'b', label: 'Sometimes — I trust it occasionally but often override it' },
      { value: 'c', label: 'Often — I usually honor my body\'s signals' },
      { value: 'd', label: 'Consistently — My body is a reliable guide' },
    ],
  },
  {
    id: 'E3',
    thread: 'EMBODIMENT',
    category: 'general',
    text: 'I can tolerate physical discomfort or strong sensations without disconnecting or becoming overwhelmed.',
    options: [
      { value: 'a', label: 'Rarely — I disconnect or get flooded by sensation' },
      { value: 'b', label: 'Sometimes — I can stay with discomfort briefly' },
      { value: 'c', label: 'Often — I can hold strong sensations with relative ease' },
      { value: 'd', label: 'Consistently — I can be with intense sensations' },
    ],
  },
  {
    id: 'E4',
    thread: 'EMBODIMENT',
    category: 'direction',
    text: 'In challenging moments, my relationship to my body tends to be:',
    options: [
      { value: 'a', label: 'Disconnected — cut off from my body, living in my head' },
      { value: 'b', label: 'Overwhelmed — flooded by sensation, unable to function' },
      { value: 'c', label: 'Both at different times depending on the situation' },
      { value: 'd', label: 'Grounded — connected without being overwhelmed' },
    ],
  },
  {
    id: 'E5',
    thread: 'EMBODIMENT',
    category: 'direction',
    text: 'My relationship to physical sensation is:',
    options: [
      { value: 'a', label: 'I\'m disconnected, numb, or unaware of my body' },
      { value: 'b', label: 'I\'m hyper-aware, overwhelmed by every sensation' },
      { value: 'c', label: 'I swing between disconnection and overwhelm' },
      { value: 'd', label: 'I maintain a grounded connection to my body' },
    ],
  },
  {
    id: 'E6',
    thread: 'EMBODIMENT',
    category: 'direction',
    text: 'When under stress, my body:',
    options: [
      { value: 'a', label: 'Goes numb or I dissociate from it' },
      { value: 'b', label: 'Becomes overwhelming with tension, pain, or sensation' },
      { value: 'c', label: 'Alternates between numbness and intensity' },
      { value: 'd', label: 'Signals clearly without overwhelming me' },
    ],
  },
  {
    id: 'E7',
    thread: 'EMBODIMENT',
    category: 'context',
    text: 'I find it hardest to stay connected to my body in:',
    options: [
      { value: 'a', label: 'High-stress or deadline-driven situations' },
      { value: 'b', label: 'Intellectual or analytical work' },
      { value: 'c', label: 'Social performance or being observed' },
      { value: 'd', label: 'I stay connected across all these contexts' },
    ],
  },
  {
    id: 'E8',
    thread: 'EMBODIMENT',
    category: 'context',
    text: 'I find it easiest to stay connected to my body when:',
    options: [
      { value: 'a', label: 'Moving, exercising, or doing physical activity' },
      { value: 'b', label: 'Alone or in nature' },
      { value: 'c', label: 'In somatic practices (yoga, meditation, bodywork)' },
      { value: 'd', label: 'It varies widely depending on the context' },
    ],
  },
  {
    id: 'E9',
    thread: 'EMBODIMENT',
    category: 'context',
    text: 'I most notice myself disconnecting from or being overwhelmed by my body in:',
    options: [
      { value: 'a', label: 'Work or cognitive/mental tasks' },
      { value: 'b', label: 'Emotional or vulnerable situations' },
      { value: 'c', label: 'When ill, injured, or physically challenged' },
      { value: 'd', label: 'I stay grounded across all these contexts' },
    ],
  },
  {
    id: 'E10',
    thread: 'EMBODIMENT',
    category: 'awareness',
    text: 'When I notice myself disconnecting from or being overwhelmed by my body, I typically recognize it:',
    options: [
      { value: 'a', label: 'Days or weeks later (or not at all)' },
      { value: 'b', label: 'Hours or a day later, upon reflection' },
      { value: 'c', label: 'In the moment, as it\'s happening' },
      { value: 'd', label: 'Before it happens — I can sense it coming and adjust' },
    ],
  },

  // UNCERTAINTY (U1-U10)
  {
    id: 'U1',
    thread: 'UNCERTAINTY',
    category: 'general',
    text: 'I can stay with not-knowing without grasping for certainty or getting lost in confusion.',
    options: [
      { value: 'a', label: 'Rarely — I need answers or I freeze in confusion' },
      { value: 'b', label: 'Sometimes — I can tolerate not-knowing briefly' },
      { value: 'c', label: 'Often — I can stay with uncertainty fairly well' },
      { value: 'd', label: 'Consistently — I embrace mystery naturally' },
    ],
  },
  {
    id: 'U2',
    thread: 'UNCERTAINTY',
    category: 'general',
    text: 'I can trust that I don\'t need to have all the answers right now.',
    options: [
      { value: 'a', label: 'Rarely — Not knowing feels threatening' },
      { value: 'b', label: 'Sometimes — I can tolerate it with effort' },
      { value: 'c', label: 'Often — I can rest in not-knowing most of the time' },
      { value: 'd', label: 'Consistently — I trust the unfolding of things' },
    ],
  },
  {
    id: 'U3',
    thread: 'UNCERTAINTY',
    category: 'general',
    text: 'I can stay curious and open when facing the unknown.',
    options: [
      { value: 'a', label: 'Rarely — The unknown feels threatening, and I close down' },
      { value: 'b', label: 'Sometimes — I can be curious, but it requires effort' },
      { value: 'c', label: 'Often — I approach the unknown with interest' },
      { value: 'd', label: 'Consistently — I naturally welcome mystery' },
    ],
  },
  {
    id: 'U4',
    thread: 'UNCERTAINTY',
    category: 'direction',
    text: 'When facing the unknown, I tend to:',
    options: [
      { value: 'a', label: 'Grasp for certainty — clinging to answers, needing to be right' },
      { value: 'b', label: 'Get lost in confusion — unable to form any clarity' },
      { value: 'c', label: 'Do both at different times depending on the situation' },
      { value: 'd', label: 'Stay curious and open without needing immediate answers' },
    ],
  },
  {
    id: 'U5',
    thread: 'UNCERTAINTY',
    category: 'direction',
    text: 'My relationship to not-knowing is:',
    options: [
      { value: 'a', label: 'I grasp for certainty, answers, or fixed beliefs' },
      { value: 'b', label: 'I get lost in confusion, unable to orient myself' },
      { value: 'c', label: 'I swing between needing answers and being overwhelmed by confusion' },
      { value: 'd', label: 'I can stay with not-knowing with curiosity' },
    ],
  },
  {
    id: 'U6',
    thread: 'UNCERTAINTY',
    category: 'direction',
    text: 'When I encounter something I don\'t understand, I:',
    options: [
      { value: 'a', label: 'Quickly form an explanation or conclusion to feel secure' },
      { value: 'b', label: 'Feel overwhelmed and unable to make sense of anything' },
      { value: 'c', label: 'Oscillate between forcing clarity and total confusion' },
      { value: 'd', label: 'Can stay with the question without needing immediate answers' },
    ],
  },
  {
    id: 'U7',
    thread: 'UNCERTAINTY',
    category: 'context',
    text: 'I find it hardest to tolerate not-knowing in:',
    options: [
      { value: 'a', label: 'Situations that require quick decisions or clarity' },
      { value: 'b', label: 'When others are looking to me for answers' },
      { value: 'c', label: 'In areas where I\'m supposed to be an expert' },
      { value: 'd', label: 'I tolerate not-knowing across all these contexts' },
    ],
  },
  {
    id: 'U8',
    thread: 'UNCERTAINTY',
    category: 'context',
    text: 'I find it easiest to tolerate not-knowing when:',
    options: [
      { value: 'a', label: 'I have time and space to explore without pressure' },
      { value: 'b', label: 'I\'m in learning mode or exploring new territory' },
      { value: 'c', label: 'The stakes are low and consequences minimal' },
      { value: 'd', label: 'It varies widely depending on the topic' },
    ],
  },
  {
    id: 'U9',
    thread: 'UNCERTAINTY',
    category: 'context',
    text: 'I most notice myself grasping for certainty or getting lost in confusion in:',
    options: [
      { value: 'a', label: 'Beliefs, values, or worldview conversations' },
      { value: 'b', label: 'When planning the future or making big decisions' },
      { value: 'c', label: 'Complex, ambiguous, or rapidly changing situations' },
      { value: 'd', label: 'I stay curious across all these contexts' },
    ],
  },
  {
    id: 'U10',
    thread: 'UNCERTAINTY',
    category: 'awareness',
    text: 'When I notice myself grasping for certainty or getting lost in confusion, I typically recognize it:',
    options: [
      { value: 'a', label: 'Days or weeks later (or not at all)' },
      { value: 'b', label: 'Hours or a day later, upon reflection' },
      { value: 'c', label: 'In the moment, as it\'s happening' },
      { value: 'd', label: 'Before it happens — I can sense it coming and adjust' },
    ],
  },

  // BECOMING (B1-B10)
  {
    id: 'B1',
    thread: 'BECOMING',
    category: 'general',
    text: 'I can embrace genuine change and transformation in my life.',
    options: [
      { value: 'a', label: 'Rarely — I stay stuck in old patterns or avoid real change' },
      { value: 'b', label: 'Sometimes — I can change, but it feels threatening' },
      { value: 'c', label: 'Often — I navigate change fairly well' },
      { value: 'd', label: 'Consistently — I welcome change as natural' },
    ],
  },
  {
    id: 'B2',
    thread: 'BECOMING',
    category: 'general',
    text: 'I notice when I\'m truly different (not just rearranging the same patterns).',
    options: [
      { value: 'a', label: 'Rarely — I repeat the same loops or think I\'ve changed when I haven\'t' },
      { value: 'b', label: 'Sometimes — I can sense real change occasionally' },
      { value: 'c', label: 'Often — I recognize when transformation is happening' },
      { value: 'd', label: 'Consistently — I can tell when I\'ve genuinely changed' },
    ],
  },
  {
    id: 'B3',
    thread: 'BECOMING',
    category: 'general',
    text: 'I can integrate new insights or growth into my actual life (not just understand them intellectually).',
    options: [
      { value: 'a', label: 'Rarely — I understand ideas but don\'t embody them' },
      { value: 'b', label: 'Sometimes — I can integrate change, but it\'s difficult' },
      { value: 'c', label: 'Often — I turn insights into lived transformation' },
      { value: 'd', label: 'Consistently — I naturally embody what I learn' },
    ],
  },
  {
    id: 'B4',
    thread: 'BECOMING',
    category: 'direction',
    text: 'When it comes to personal growth, I tend to:',
    options: [
      { value: 'a', label: 'Get stuck in old loops, unable to change' },
      { value: 'b', label: 'Chase growth without embodying it' },
      { value: 'c', label: 'Do both at different times depending on the situation' },
      { value: 'd', label: 'Engage in grounded, embodied transformation' },
    ],
  },
  {
    id: 'B5',
    thread: 'BECOMING',
    category: 'direction',
    text: 'My relationship to personal growth is:',
    options: [
      { value: 'a', label: 'I keep returning to the same patterns despite my intentions' },
      { value: 'b', label: 'I chase new ideas/practices without embodying them' },
      { value: 'c', label: 'I swing between being stuck and spiritual/intellectual bypassing' },
      { value: 'd', label: 'I engage in grounded, embodied transformation' },
    ],
  },
  {
    id: 'B6',
    thread: 'BECOMING',
    category: 'direction',
    text: 'When I reflect on my development over the past year, I notice:',
    options: [
      { value: 'a', label: 'I\'m essentially the same, repeating familiar loops' },
      { value: 'b', label: 'I\'ve accumulated knowledge but haven\'t truly changed' },
      { value: 'c', label: 'I see both: some real change, some old patterns' },
      { value: 'd', label: 'I\'ve genuinely become different in meaningful ways' },
    ],
  },
  {
    id: 'B7',
    thread: 'BECOMING',
    category: 'context',
    text: 'I find it hardest to genuinely change in:',
    options: [
      { value: 'a', label: 'Long-standing relationships or family dynamics' },
      { value: 'b', label: 'Spiritual, personal development, or therapy contexts' },
      { value: 'c', label: 'When facing my deepest wounds or patterns' },
      { value: 'd', label: 'I can change across all these contexts' },
    ],
  },
  {
    id: 'B8',
    thread: 'BECOMING',
    category: 'context',
    text: 'I find it easiest to genuinely change when:',
    options: [
      { value: 'a', label: 'I have support and accountability' },
      { value: 'b', label: 'I\'m in crisis or experiencing a breakdown' },
      { value: 'c', label: 'I\'m learning something completely new' },
      { value: 'd', label: 'It varies widely depending on the context' },
    ],
  },
  {
    id: 'B9',
    thread: 'BECOMING',
    category: 'context',
    text: 'I most notice myself staying stuck or chasing growth without integration in:',
    options: [
      { value: 'a', label: 'Repeated relationship dynamics or conflicts' },
      { value: 'b', label: 'When engaging with self-help, spirituality, or philosophy' },
      { value: 'c', label: 'When trying to change long-standing habits or patterns' },
      { value: 'd', label: 'I maintain grounded transformation across all these contexts' },
    ],
  },
  {
    id: 'B10',
    thread: 'BECOMING',
    category: 'awareness',
    text: 'When I notice myself staying stuck or chasing growth without integration, I typically recognize it:',
    options: [
      { value: 'a', label: 'Days or weeks later (or not at all)' },
      { value: 'b', label: 'Hours or a day later, upon reflection' },
      { value: 'c', label: 'In the moment, as it\'s happening' },
      { value: 'd', label: 'Before it happens — I can sense it coming and adjust' },
    ],
  },
];

// Helper to get questions by thread
export function getQuestionsByThread(thread: string): PersonalJourneyMapQuestion[] {
  return personalJourneyMapQuestions.filter(q => q.thread === thread);
}

// Helper to get question by ID
export function getQuestionById(id: string): PersonalJourneyMapQuestion | undefined {
  return personalJourneyMapQuestions.find(q => q.id === id);
}

// Thread order for display
export const threadOrder = [
  'PRESENCE',
  'CONSENT',
  'MEMORY',
  'PAUSE',
  'EMBODIMENT',
  'UNCERTAINTY',
  'BECOMING',
];
