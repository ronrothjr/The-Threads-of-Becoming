/**
 * Thread Practice Guides
 *
 * Practice guidance for each of the seven threads, including tension poles
 * and concrete micro-practices.
 */

export interface ThreadPracticeGuide {
  poles: string;
  practices: string[];
}

export type ThreadPracticeGuides = Record<string, ThreadPracticeGuide>;

/**
 * Complete practice guidance for all seven threads
 */
export const threadPracticeGuides: ThreadPracticeGuides = {
  presence: {
    poles: "Within ↔ Between • Here ↔ Elsewhere",
    practices: [
      "Practice noticing when you're physically present but mentally absent. Before speaking, take one breath and feel your feet on the ground.",
      "In your next conversation, notice: Are you listening to respond or listening to understand? Can you stay present to the other person without planning your reply?",
      "Set three alarms today. When they go off, stop and ask: 'Where am I right now—actually here, or somewhere else in my mind?'",
      "Notice when you're relating to a category ('teenagers,' 'bosses,' 'liberals') rather than the actual person in front of you. Can you see them fresh?",
      "Practice being alone without distraction for 10 minutes. Notice the pull toward your phone, a book, music. What does solitude feel like without escape?",
      "In a moment of connection, notice: Am I losing myself to be with them, or staying with myself while being present to them?",
      "When you feel physically present but emotionally distant, pause. What would it mean to show up fully right now?",
      "Notice when you're 'here' in body but 'elsewhere' in attention. Where does your mind most often escape to?",
      "Practice arriving before you enter a room. One breath at the threshold. Notice the shift from where you were to where you are.",
      "When someone asks 'How are you?' pause before answering. Where are you, actually? Not what should you say—where are you?",
      "Notice the spaces between—between people, between moments, between thoughts. Can you be present to the 'between' itself?",
      "When you feel the need to withdraw, ask: What am I withdrawing from? What would it mean to stay while still honoring my need for solitude?",
      "Practice being fully present to something small: your coffee, the texture of fabric, the sound of rain. What happens when you're completely here?",
      "Notice when you're performing presence—nodding, making eye contact, saying the right things—but not actually here. What's the difference?",
      "When you catch yourself planning the future mid-conversation, gently return. The person in front of you is happening now.",
      "Set an intention to be 'unreachable' for one hour today. No phone, no interruptions. Notice what it feels like to be nowhere else but here.",
      "In moments of boredom or restlessness, resist the urge to fill the space. What is boredom pointing toward?",
      "Notice when you need to be alone versus when you're isolating. What's the difference in your body?",
      "Practice showing up on time as a form of presence. What does it mean to honor the 'here' and 'now' of an appointment?"
    ]
  },
  consent: {
    poles: "Yes ↔ No • Self ↔ Other",
    practices: [
      "Notice when 'yes' feels tight in your body or 'no' feels dangerous. Practice saying 'let me think about it' instead of automatic agreement.",
      "Today, say 'no' to one small thing without explanation or apology. Notice what happens in your body and the relationship.",
      "When someone says 'no' to you, pause before responding. Can you receive their refusal without taking it personally or trying to change their mind?",
      "Notice when you say 'yes' to keep the peace or avoid conflict. What would happen if you didn't?",
      "Practice asking for what you actually want, even if it's uncomfortable. Notice the fear that comes before you speak.",
      "When you feel obligated, pause and ask: 'Is this a genuine yes, or am I trying to avoid someone's disappointment?'",
      "Notice when you need others to agree with you to feel okay. What happens when you allow them their own experience?",
      "Practice honoring someone else's 'no' as sacred—even when it's inconvenient for you.",
      "When you catch yourself trying to convince or persuade, stop. Ask: 'Am I seeking genuine agreement or compliance?'",
      "Notice when you accommodate to the point of self-betrayal. Where's the line between flexibility and abandoning yourself?",
      "Practice receiving a 'yes' without suspicion. Can you trust that someone wants to be here, with you, doing this?",
      "When someone asks something of you, take three breaths before answering. Does your body say yes or no?",
      "Notice when you say 'I don't mind' or 'whatever you want.' Do you actually not mind, or are you erasing yourself?",
      "Practice saying 'no' while staying emotionally available. Notice the belief that refusal equals rejection.",
      "When you feel resentful after saying 'yes,' pause. What did you actually want to say?",
      "Notice the difference between boundary-setting and wall-building. One says 'no' and stays present; the other says 'no' and disappears.",
      "Practice asking 'Is this still a yes for you?' in ongoing commitments. Consent isn't one-time; it's continuous.",
      "When you want to say 'no' but say 'yes,' track the cost. What does this betrayal of self require of you later?",
      "Notice when you need someone else's approval to make a choice. What would you choose if their opinion didn't matter?"
    ]
  },
  memory: {
    poles: "Given ↔ Chosen • Telling ↔ Told",
    practices: [
      "When you notice yourself replaying the past or catastrophizing the future, name it: 'Memory thread activated.' Return to what's actually happening now.",
      "Notice which stories you tell about yourself repeatedly. Ask: 'Am I telling this story, or is it telling me?'",
      "Today, complete this sentence three different ways: 'I am someone who...' Notice which versions feel fixed and which feel fluid.",
      "When you catch yourself saying 'I've always been this way,' pause. Is that true? Or is that a story you've been carrying?",
      "Notice a grudge you're still holding. Not to forgive or release it—just to see it. How long have you been carrying this?",
      "Practice telling a familiar story about your past in a completely different way. What changes when you shift the narrative?",
      "When you feel trapped by your history, ask: 'What am I using this story to avoid becoming?'",
      "Notice when you're living out a script someone else wrote for you. Whose voice is that in your head?",
      "Practice completing the sentence: 'The story I've been telling about [event/person/myself] is...' Then ask: 'What else might be true?'",
      "When you're spinning in anxiety about the future, notice: Which past wound are you projecting forward?",
      "Notice when you use your past as evidence for what's impossible. What if it was just data, not destiny?",
      "Practice asking: 'Who would I be if I wasn't defined by what happened to me?'",
      "When someone from your past surfaces in your thoughts, notice: Are you remembering them, or are you rehearsing?",
      "Notice which memories you've polished smooth from retelling. What roughness have you edited out?",
      "Practice updating an old story. How would you tell it now, with what you've learned since?",
      "When you feel stuck repeating a pattern, ask: 'What am I being loyal to by staying the same?'",
      "Notice when you're grieving who you used to be. Can you honor who you were without rejecting who you're becoming?",
      "Practice writing down a limiting belief about yourself, then asking: 'Where did I learn this? Is it still true?'",
      "When you catch yourself saying 'That's just how my family is,' pause. Does it have to be how you are?"
    ]
  },
  pause: {
    poles: "Not Yet ↔ Now • More ↔ Enough",
    practices: [
      "Set a timer for 2 minutes of complete stillness once today. Notice the urge to act without acting on it.",
      "Before responding to an email or text, pause for three breaths. Ask: 'Is this urgency real or habitual?'",
      "Notice when you rush through a task to get to the next thing. What would change if this moment was enough?",
      "Practice saying 'not yet' to your own impatience. Can you trust that the right moment will arrive?",
      "When you feel restless or antsy, resist fixing it. What is the restlessness trying to tell you?",
      "Notice when you're waiting for conditions to be perfect before you act. What's the smallest possible next step you could take now?",
      "Practice asking: 'Do I need more, or do I need to notice what I already have?'",
      "When you feel the urge to fill silence, pause. What happens if you let the quiet stay?",
      "Notice when you say 'I don't have time.' Is that true, or are you racing past the time you have?",
      "Practice finishing one thing before starting the next. Notice the pull toward the new before completing the current.",
      "When you feel like you're falling behind, stop and ask: 'Behind what? Whose timeline am I racing?'",
      "Notice when you're consuming content (news, social media, articles) to avoid being with yourself. What are you postponing?",
      "Practice pausing before transitions—leaving work, entering your home, getting out of the car. One breath at the threshold.",
      "When you catch yourself saying 'just one more thing,' notice: Is there ever enough 'more'?",
      "Notice when you're doing instead of being. What would it mean to simply be here, now, with nothing to accomplish?",
      "Practice delayed gratification with something small. Notice the discomfort of 'not yet' and the sweetness when the moment arrives.",
      "When you feel rushed, ask: 'What am I afraid will happen if I slow down?'",
      "Notice the difference between patience and passivity. One waits with awareness; the other waits to avoid choosing.",
      "Practice recognizing 'enough': enough sleep, enough food, enough conversation. What does satiation feel like before excess?"
    ]
  },
  embodiment: {
    poles: "Think ↔ Feel • Stay ↔ Go",
    practices: [
      "Several times today, stop and scan your body. Where are you holding tension? Can you breathe into it without trying to fix it?",
      "Notice when you override your body's signals—tiredness, hunger, the need to move. What are you prioritizing instead?",
      "Practice asking your body what it needs before asking your mind what it thinks you should do.",
      "When you feel strong emotion, locate it physically. Where does anger live? Grief? Joy? Stay with the sensation before the story.",
      "Notice when you disconnect from physical sensation and retreat into your head. What are you avoiding feeling?",
      "Practice moving your body without purpose—dancing, stretching, walking—just to feel what movement feels like.",
      "When you're stuck on a problem, take a walk. Notice what your body knows that your mind doesn't.",
      "Notice when you numb sensation—through food, alcohol, distraction, busyness. What feeling are you trying not to feel?",
      "Practice staying present when your body is uncomfortable. Can you be with the sensation without immediately fixing it?",
      "When you feel the urge to flee (physically or emotionally), pause. What does your body want to run from?",
      "Notice the sensations that precede emotion—the flutter before anxiety, the heat before anger. Can you catch them early?",
      "Practice grounding: feet on floor, hands on thighs, breath in belly. Return to your body when your mind spins out.",
      "When making a decision, notice what your gut says before your head rationalizes. Which one usually wins?",
      "Notice when you use thinking to avoid feeling. What would happen if you let yourself feel first?",
      "Practice touch—your own skin, textures around you, temperature. What does it mean to be a body, not just have one?",
      "When you're overwhelmed by emotion, describe the physical sensations without naming the feeling. 'Tight chest, shallow breath, heat in face.'",
      "Notice when you want to leave a conversation or situation. Is your body saying 'go' or is your discomfort saying 'flee'?",
      "Practice recognizing the difference between intuition (body knowing) and anxiety (body reacting). What does each feel like?",
      "When you catch yourself saying 'I think I feel,' notice the distance. Can you feel without thinking about feeling?"
    ]
  },
  uncertainty: {
    poles: "Hide ↔ Seek • Threat ↔ Wonder",
    practices: [
      "Notice your need for certainty. Practice saying 'I don't know yet' without immediately searching for an answer.",
      "When you feel anxious about the unknown, ask: 'What am I trying to control by needing to know?'",
      "Practice sitting with an unanswered question for 24 hours. Notice the discomfort without resolving it.",
      "When you catch yourself obsessively researching or planning, pause. Are you seeking clarity or avoiding mystery?",
      "Notice when you hide from uncertainty by staying small and known. What would you do if you weren't afraid of not knowing?",
      "Practice asking questions you don't have answers to. Can you be curious without needing to conclude?",
      "When someone says 'I don't know,' resist the urge to provide answers. Can you sit in the not-knowing with them?",
      "Notice when uncertainty feels threatening versus when it feels inviting. What's the difference?",
      "Practice saying 'I could be wrong about this' after stating an opinion. How does that feel in your body?",
      "When you need guarantees before acting, ask: 'What's the smallest step I can take without knowing the outcome?'",
      "Notice when you avoid unfamiliar situations to stay in the known. What might be waiting in the unknown?",
      "Practice wonder: Look at something familiar as if seeing it for the first time. What do you notice?",
      "When you feel the need to have everything figured out, breathe. What would it mean to trust the unfolding?",
      "Notice when you use certainty as a shield against vulnerability. What opens up when you admit you don't know?",
      "Practice asking 'What if?' without needing to answer. Can you let the question live?",
      "When faced with a mystery, notice your impulse to solve it versus your capacity to be with it.",
      "Notice when you confuse not-knowing with incompetence. Can you be confident and uncertain at the same time?",
      "Practice embracing 'both/and': Maybe this is true AND that is true. Notice how this differs from needing one right answer.",
      "When you feel threatened by someone else's certainty about your uncertainty, pause. Do you need to know, or do they need you to know?"
    ]
  },
  becoming: {
    poles: "Same ↔ Different • Return ↔ Forward",
    practices: [
      "Notice when you say 'I'm just not that kind of person.' Ask: 'What if I could be?'",
      "When you catch yourself clinging to who you've been, ask: 'What am I afraid of losing if I change?'",
      "Practice completing: 'I used to be someone who... Now I'm becoming someone who...'",
      "Notice when you reinvent yourself without integration—starting over instead of evolving. What are you leaving behind?",
      "When you feel pulled back to old patterns, ask: 'Is this who I'm returning to, or who I'm moving toward?'",
      "Practice trying on a new way of being for one day. What feels uncomfortable? What feels true?",
      "Notice when you outgrow a relationship, role, or identity. Can you grieve what was while welcoming what's next?",
      "When someone says 'You've changed,' pause before defending. Have you? Is that okay?",
      "Practice asking: 'Who am I becoming that I wasn't before? Who am I no longer that I used to be?'",
      "Notice when you resist evolution to keep others comfortable. Whose stability are you protecting?",
      "When you feel stuck between versions of yourself, ask: 'What if I don't have to choose? What if I'm both?'",
      "Practice looking at your younger self with compassion. Who were you then? What are you carrying forward? What are you releasing?",
      "Notice when you weaponize 'becoming' to avoid being. Can you be who you are now while growing into who's next?",
      "When you feel nostalgic for who you used to be, ask: 'What did I have then that I've lost? Can I reclaim it in a new form?'",
      "Practice experimenting: Try something that doesn't fit your identity. What happens when you color outside your own lines?",
      "Notice when you cling to old stories about yourself to avoid the vulnerability of being new.",
      "When you spiral between 'same' and 'different,' ask: 'What part of me is unchanging? What part is always changing?'",
      "Practice honoring the spiral: You're not going in circles; you're returning to familiar places from a different vantage point.",
      "Notice when you're becoming who you think you should be versus who you actually are. What's the difference?"
    ]
  }
};

/**
 * Get a random practice for a specific thread
 */
export function getRandomPractice(threadName: string): string {
  const guide = threadPracticeGuides[threadName];
  if (!guide) return '';
  return guide.practices[Math.floor(Math.random() * guide.practices.length)];
}

/**
 * Get practice guidance for a thread
 */
export function getThreadGuidance(threadName: string): { poles: string; practice: string } | null {
  const guide = threadPracticeGuides[threadName];
  if (!guide) return null;

  return {
    poles: guide.poles,
    practice: getRandomPractice(threadName)
  };
}
