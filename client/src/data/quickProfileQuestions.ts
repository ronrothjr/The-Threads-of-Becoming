export interface Question {
  id: string;
  thread: string;
  text: string;
  options: Array<{
    value: 'A' | 'B' | 'C' | 'D';
    label: string;
  }>;
}

export const quickProfileQuestions: Question[] = [
  // PRESENCE (Q1-Q3)
  {
    id: 'Q1',
    thread: 'PRESENCE',
    text: 'In difficult conversations, I often find I\'m relating to a category in my mind ("liberals," "boomers," "my narcissistic mother") rather than the actual person in front of me.',
    options: [
      { value: 'A', label: 'Very much like me — I\'m usually relating to abstractions, not the person' },
      { value: 'B', label: 'Somewhat like me — I sometimes catch myself doing this' },
      { value: 'C', label: 'Not much like me — I can usually meet the actual person' },
      { value: 'D', label: 'Not at all like me — I consistently stay present to the person, not the category' }
    ]
  },
  {
    id: 'Q2',
    thread: 'PRESENCE',
    text: 'When processing difficult emotions or experiences, I tend to either withdraw completely into solitary processing OR lose myself entirely in seeking others\' input—I struggle to move fluidly between the two.',
    options: [
      { value: 'A', label: 'Very much like me — I collapse into either total isolation or complete enmeshment' },
      { value: 'B', label: 'Somewhat like me — I lean heavily one direction but can sometimes access the other' },
      { value: 'C', label: 'Not much like me — I can usually balance solitude and connection' },
      { value: 'D', label: 'Not at all like me — I move fluidly between internal processing and relational sharing' }
    ]
  },
  {
    id: 'Q3',
    thread: 'PRESENCE',
    text: 'In conversations, my mind is often somewhere else—rehashing the past, planning the future, thinking about other people—rather than being fully here.',
    options: [
      { value: 'A', label: 'Very much like me — I\'m rarely fully present in conversations' },
      { value: 'B', label: 'Somewhat like me — I\'m often partly elsewhere' },
      { value: 'C', label: 'Not much like me — I\'m usually present, though sometimes drift' },
      { value: 'D', label: 'Not at all like me — I\'m consistently fully present to what\'s happening here' }
    ]
  },

  // CONSENT (Q4-Q6)
  {
    id: 'Q4',
    thread: 'CONSENT',
    text: 'When someone holds a view I find wrong or harmful, I feel a strong need to change their mind—I can\'t just let them be wrong.',
    options: [
      { value: 'A', label: 'Very much like me — I feel compelled to convince them' },
      { value: 'B', label: 'Somewhat like me — I often try to change their view but can sometimes let go' },
      { value: 'C', label: 'Not much like me — I can usually let people hold different views' },
      { value: 'D', label: 'Not at all like me — I consistently allow others their views without needing to change them' }
    ]
  },
  {
    id: 'Q5',
    thread: 'CONSENT',
    text: 'When I need to set a boundary or say "no" to someone, I struggle to do so while maintaining the relationship—it feels like I have to choose between my needs and the connection.',
    options: [
      { value: 'A', label: 'Very much like me — Setting boundaries feels like relationship-ending' },
      { value: 'B', label: 'Somewhat like me — It\'s hard but sometimes I can do both' },
      { value: 'C', label: 'Not much like me — I can usually set boundaries while staying connected' },
      { value: 'D', label: 'Not at all like me — I consistently maintain both my boundaries and the relationship' }
    ]
  },
  {
    id: 'Q6',
    thread: 'CONSENT',
    text: 'When someone says "no" to something I want or need, I find myself trying to convince them, working around their boundary, or feeling rejected.',
    options: [
      { value: 'A', label: 'Very much like me — I struggle to accept others\' "no"' },
      { value: 'B', label: 'Somewhat like me — I sometimes respect it but often push back' },
      { value: 'C', label: 'Not much like me — I usually honor their refusal' },
      { value: 'D', label: 'Not at all like me — I consistently respect others\' right to refuse' }
    ]
  },

  // MEMORY (Q7-Q9)
  {
    id: 'Q7',
    thread: 'MEMORY',
    text: 'My views and identity feel inseparable from my family history, cultural background, or formative experiences—they\'re not just perspectives I hold, they\'re core to who I am.',
    options: [
      { value: 'A', label: 'Very much like me — My inherited narratives ARE who I am' },
      { value: 'B', label: 'Somewhat like me — Some inherited stories feel core to my identity' },
      { value: 'C', label: 'Not much like me — I can usually distinguish my identity from inherited narratives' },
      { value: 'D', label: 'Not at all like me — I consistently see inherited stories as perspectives, not identity' }
    ]
  },
  {
    id: 'Q8',
    thread: 'MEMORY',
    text: 'I\'ve actively examined where my core beliefs and patterns came from—family, culture, experiences—and questioned whether they\'re truly mine or simply inherited.',
    options: [
      { value: 'A', label: 'Not at all like me — I haven\'t examined the origins of my beliefs' },
      { value: 'B', label: 'Not much like me — I\'ve thought about it a little' },
      { value: 'C', label: 'Somewhat like me — I\'ve done significant examination' },
      { value: 'D', label: 'Very much like me — I\'ve deeply investigated my inherited narratives' }
    ]
  },
  {
    id: 'Q9',
    thread: 'MEMORY',
    text: 'When someone challenges my fundamental beliefs or ways of being, it feels like they\'re challenging my people, my history, or my fundamental sense of reality—not just an idea.',
    options: [
      { value: 'A', label: 'Very much like me — Challenges to beliefs feel like attacks on my heritage/identity' },
      { value: 'B', label: 'Somewhat like me — Sometimes it feels personal or tribal' },
      { value: 'C', label: 'Not much like me — I can usually separate critique of ideas from critique of identity' },
      { value: 'D', label: 'Not at all like me — Challenges to beliefs never feel like identity attacks' }
    ]
  },

  // PAUSE (Q10-Q12)
  {
    id: 'Q10',
    thread: 'PAUSE',
    text: 'When someone says something that angers or upsets me, I typically respond immediately—within seconds—rather than taking time to consider my response.',
    options: [
      { value: 'A', label: 'Very much like me — I react instantly, often before I realize what I\'m doing' },
      { value: 'B', label: 'Somewhat like me — I usually react quickly but occasionally catch myself' },
      { value: 'C', label: 'Not much like me — I often pause, though sometimes I still react too fast' },
      { value: 'D', label: 'Not at all like me — I consistently create space before responding' }
    ]
  },
  {
    id: 'Q11',
    thread: 'PAUSE',
    text: 'When I feel strongly about something, it feels urgent to express it right now—waiting feels almost physically uncomfortable.',
    options: [
      { value: 'A', label: 'Very much like me — The pressure to respond immediately is intense' },
      { value: 'B', label: 'Somewhat like me — I feel urgency but can sometimes resist it' },
      { value: 'C', label: 'Not much like me — I can usually wait even when it\'s uncomfortable' },
      { value: 'D', label: 'Not at all like me — I rarely feel urgency to respond immediately' }
    ]
  },
  {
    id: 'Q12',
    thread: 'PAUSE',
    text: 'I often avoid taking action on important things because I\'m waiting for more information, better timing, or until I feel more ready—even when I know I should act now.',
    options: [
      { value: 'A', label: 'Very much like me — I frequently delay action, always needing "more"' },
      { value: 'B', label: 'Somewhat like me — I sometimes procrastinate on important actions' },
      { value: 'C', label: 'Not much like me — I rarely avoid timely action' },
      { value: 'D', label: 'Not at all like me — I consistently act when action is appropriate' }
    ]
  },

  // EMBODIMENT (Q13-Q15)
  {
    id: 'Q13',
    thread: 'EMBODIMENT',
    text: 'When I\'m in a disagreement, I\'m usually unaware of what\'s happening in my body until afterward (if at all).',
    options: [
      { value: 'A', label: 'Very much like me — I\'m completely in my head during conflict' },
      { value: 'B', label: 'Somewhat like me — I occasionally notice body sensations during conflict' },
      { value: 'C', label: 'Not much like me — I often maintain body awareness during disagreements' },
      { value: 'D', label: 'Not at all like me — I consistently stay connected to my body, even in conflict' }
    ]
  },
  {
    id: 'Q14',
    thread: 'EMBODIMENT',
    text: 'I can accurately identify what I\'m feeling by checking in with my body—I know what anger, fear, sadness, or excitement feel like physically.',
    options: [
      { value: 'A', label: 'Not at all like me — I rarely connect emotions to physical sensations' },
      { value: 'B', label: 'Not much like me — I sometimes notice the connection' },
      { value: 'C', label: 'Somewhat like me — I often can identify feelings through body awareness' },
      { value: 'D', label: 'Very much like me — I reliably use body wisdom to understand my emotions' }
    ]
  },
  {
    id: 'Q15',
    thread: 'EMBODIMENT',
    text: 'In difficult conversations, I tend to stay "in my head"—analyzing, arguing, planning what to say next—rather than being present to the full experience.',
    options: [
      { value: 'A', label: 'Very much like me — I\'m almost entirely cognitive during difficult conversations' },
      { value: 'B', label: 'Somewhat like me — I\'m mostly in my head with occasional presence' },
      { value: 'C', label: 'Not much like me — I can usually stay present to the full experience' },
      { value: 'D', label: 'Not at all like me — I consistently remain embodied during difficult conversations' }
    ]
  },

  // UNCERTAINTY (Q16-Q18)
  {
    id: 'Q16',
    thread: 'UNCERTAINTY',
    text: 'On important issues, I feel I need to have a clear position—uncertainty or "I don\'t know" feels like weakness.',
    options: [
      { value: 'A', label: 'Very much like me — I need to know where I stand' },
      { value: 'B', label: 'Somewhat like me — Uncertainty is uncomfortable, though sometimes I can tolerate it' },
      { value: 'C', label: 'Not much like me — I\'m fairly comfortable with uncertainty' },
      { value: 'D', label: 'Not at all like me — I embrace not-knowing as a valid position' }
    ]
  },
  {
    id: 'Q17',
    thread: 'UNCERTAINTY',
    text: 'When facing someone with opposing views, I\'m more likely to defend my position than to become genuinely curious about theirs.',
    options: [
      { value: 'A', label: 'Very much like me — My focus is on defending, not understanding' },
      { value: 'B', label: 'Somewhat like me — I defend first but sometimes become curious' },
      { value: 'C', label: 'Not much like me — I can usually access genuine curiosity' },
      { value: 'D', label: 'Not at all like me — I consistently lead with curiosity rather than defense' }
    ]
  },
  {
    id: 'Q18',
    thread: 'UNCERTAINTY',
    text: 'I\'m comfortable saying "This is more complicated than any simple position can capture"—even on issues I care deeply about.',
    options: [
      { value: 'A', label: 'Not at all like me — Important issues have clear right/wrong sides' },
      { value: 'B', label: 'Not much like me — I see complexity but still feel my side is right' },
      { value: 'C', label: 'Somewhat like me — I can often hold complexity' },
      { value: 'D', label: 'Very much like me — I consistently acknowledge genuine complexity' }
    ]
  },

  // BECOMING (Q19-Q21)
  {
    id: 'Q19',
    thread: 'BECOMING',
    text: 'If I changed my mind on a major belief or position, I would feel like I was betraying myself or my community.',
    options: [
      { value: 'A', label: 'Very much like me — Changing positions would feel like betrayal' },
      { value: 'B', label: 'Somewhat like me — It would be very difficult, though possible' },
      { value: 'C', label: 'Not much like me — I could change positions without feeling I\'d betrayed anyone' },
      { value: 'D', label: 'Not at all like me — I expect my positions to evolve over time' }
    ]
  },
  {
    id: 'Q20',
    thread: 'BECOMING',
    text: 'I think of my current views and identity as "where I am now" rather than "the truth I\'ve arrived at."',
    options: [
      { value: 'A', label: 'Not at all like me — My current views reflect discovered truth' },
      { value: 'B', label: 'Not much like me — Mostly I feel I\'ve figured things out' },
      { value: 'C', label: 'Somewhat like me — I see my views as evolving, though some feel settled' },
      { value: 'D', label: 'Very much like me — I consistently hold views as developmental, not final' }
    ]
  },
  {
    id: 'Q21',
    thread: 'BECOMING',
    text: 'I notice myself returning to the same issues or patterns, but with new understanding—like I\'m circling back with fresh eyes rather than just repeating the past.',
    options: [
      { value: 'A', label: 'Not at all like me — I either stay stuck in old patterns or try to leave the past behind entirely' },
      { value: 'B', label: 'Not much like me — I mostly repeat patterns or avoid them' },
      { value: 'C', label: 'Somewhat like me — I sometimes experience this spiral quality' },
      { value: 'D', label: 'Very much like me — I consistently recognize the spiral of growth—returning transformed' }
    ]
  }
];
