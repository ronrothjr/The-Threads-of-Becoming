import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './PracticeTool.module.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050';

interface FocusThread {
  name: string;
  score: number;
  percentage: number;
}

interface PracticeHistoryEntry {
  _id: string;
  threadId: string;
  practiceType: string;
  notes?: string;
  completedAt: string;
}

type HoldStep = 'intro' | 'halt' | 'observe' | 'look' | 'decide' | 'complete';

const PracticeTool: React.FC = () => {
  const navigate = useNavigate();
  const [focusThreads, setFocusThreads] = useState<FocusThread[]>([]);
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<HoldStep>('intro');
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [practiceHistory, setPracticeHistory] = useState<PracticeHistoryEntry[]>([]);
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());

  // Filters for history
  const [filterThread, setFilterThread] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Edit state
  const [editingEntry, setEditingEntry] = useState<PracticeHistoryEntry | null>(null);
  const [editNotes, setEditNotes] = useState('');

  useEffect(() => {
    loadFocusThreads();
    loadPracticeHistory();
  }, []);

  const loadFocusThreads = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        navigate('/login');
        return;
      }

      const resultsResponse = await fetch(`${API_URL}/api/assessments/quick-profile/results`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (resultsResponse.ok) {
        const resultsData = await resultsResponse.json();
        const threadScores = resultsData.results.threadScores;

        const sortedThreads = Object.entries(threadScores)
          .map(([name, data]: [string, any]) => ({
            name,
            score: data.score,
            percentage: data.percentage
          }))
          .sort((a, b) => a.score - b.score)
          .slice(0, 2);

        setFocusThreads(sortedThreads);
      }
    } catch (error) {
      console.error('Failed to load focus threads:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadPracticeHistory = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) return;

      const response = await fetch(`${API_URL}/api/practice/history`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        const history = await response.json();
        setPracticeHistory(history);
      }
    } catch (error) {
      console.error('Failed to load practice history:', error);
    }
  };

  const threadPrompts: Record<string, { poles: string; intro: string; halt: string[]; observe: string[]; look: string[]; decide: string[] }> = {
    presence: {
      poles: "Within ↔ Between • Here ↔ Elsewhere",
      intro: "You're working with PRESENCE—the tension between being within yourself and being with others, between being here and being elsewhere. This practice will help you notice when you collapse to one pole and find your way back to holding both.",
      halt: [
        "Pause right now. Stop reading and take one breath.",
        "Notice: Are you physically here but mentally elsewhere?",
        "Where did your mind just go? The past? The future? Planning your response?",
        "Name it without judgment: 'I was elsewhere.' Just notice."
      ],
      observe: [
        "Feel your feet on the ground. Notice the sensation.",
        "What's the temperature of the air on your skin?",
        "Scan your body: Where are you holding tension?",
        "Notice: Are you completely alone right now, or is there connection available—even if subtle?"
      ],
      look: [
        "Name it: 'This is PRESENCE. I'm caught between Within and Between, between Here and Elsewhere.' Just naming it breaks its unconscious grip.",
        "Which pole have you collapsed into? Complete isolation (Within) or losing yourself in others (Between)?",
        "Can you be within yourself AND available to connection?",
        "Notice the space between isolation and losing yourself in others. What lives there when you hold both?"
      ],
      decide: [
        "What's one small action you can take from this fuller awareness?",
        "Are you choosing from fear (of being alone or losing yourself) or from fullness?",
        "What would change if you stayed present to both poles for the next hour?",
        "Complete this: 'From this place of holding both, I choose to...'"
      ]
    },
    consent: {
      poles: "Yes ↔ No • Self ↔ Other",
      intro: "You're working with CONSENT—the tension between yes and no, between honoring yourself and honoring others. This practice will help you notice when you collapse into obligation or refusal and find your way to genuine choice.",
      halt: [
        "Pause. Take a breath before you say yes or no to the next thing.",
        "Notice: Is there something you recently said 'yes' to that felt tight in your body?",
        "Or something you wanted to say 'no' to but couldn't?",
        "Name it: 'I'm in a consent collapse.' Just see it."
      ],
      observe: [
        "Think of a recent 'yes' or 'no'. What does your body say about it now?",
        "Tight chest? Clenched jaw? Open breath? Relaxed shoulders?",
        "Notice: Are you erasing yourself to keep the peace, or building walls to stay safe?",
        "Where in your body do you feel your actual truth?"
      ],
      look: [
        "Name it: 'This is CONSENT. I'm caught between Yes and No, between Self and Other.' Naming the tension loosens its grip.",
        "Which pole are you collapsed into? Obligating yourself (always Yes) or building walls (always No)?",
        "Can you say 'no' AND stay emotionally available? Can you honor both Self and Other?",
        "Notice: What would a 'yes' from fullness feel like? What about a 'no' that doesn't reject?"
      ],
      decide: [
        "Is there a 'yes' you need to reclaim? Or a 'no' you need to speak?",
        "Are you choosing from obligation or from genuine desire?",
        "What's the smallest step toward honest consent in your life?",
        "Complete this: 'From this place of honoring both self and other, I choose to...'"
      ]
    },
    memory: {
      poles: "Given ↔ Chosen • Telling ↔ Told",
      intro: "You're working with MEMORY—the tension between the stories you've been told and the stories you're choosing, between being shaped by the past and authoring what's next. This practice will help you notice when you're trapped by history or running from it.",
      halt: [
        "Pause. Notice the story you're telling about yourself right now.",
        "Is there a narrative running in the background? 'I'm someone who always...' or 'I never...'",
        "Stop the automatic replay. Just notice it.",
        "Name it: 'This is a story I've been carrying.' See it as a story, not truth."
      ],
      observe: [
        "Where did this story come from? Who first told it to you?",
        "How old is it? Does it still fit?",
        "What does your body feel when you tell this story? Heavy? Tight? Free?",
        "Notice: Are you holding on to the past or trying to completely erase it?"
      ],
      look: [
        "Name it: 'This is MEMORY. I'm caught between Given and Chosen, between what was Told and what I'm Telling.' Seeing it clearly breaks its hold.",
        "Which pole are you collapsed into? Trapped by the past (Given) or running from it (Chosen)?",
        "Can you honor who you've been AND become who's next?",
        "Notice: What becomes possible when you hold both the given story and the chosen one?"
      ],
      decide: [
        "Is there an old story you're ready to update?",
        "What's one way you can honor your past while choosing differently now?",
        "Are you choosing from loyalty to who you were, or from who you're becoming?",
        "Complete this: 'I was someone who... and now I'm choosing to...'"
      ]
    },
    pause: {
      poles: "Not Yet ↔ Now • More ↔ Enough",
      intro: "You're working with PAUSE—the tension between 'not yet' and 'now', between needing more and recognizing enough. This practice will help you notice when you're rushing or stalling and find right timing.",
      halt: [
        "Stop. Right now, what are you rushing toward?",
        "Or what are you waiting for before you can move?",
        "Notice the urgency or the paralysis without acting on it.",
        "Name it: 'I'm collapsed into rushing' or 'I'm collapsed into waiting.' Just see it."
      ],
      observe: [
        "What does rushing feel like in your body? Tight? Shallow breath? Tension?",
        "Or what does stalling feel like? Heavy? Stuck? Numb?",
        "Notice: Is this urgency real or habitual?",
        "If you had 'enough' right now, what would change?"
      ],
      look: [
        "Name it: 'This is PAUSE. I'm caught between Not Yet and Now, between More and Enough.' Just naming it creates space.",
        "Which pole are you collapsed into? Rushing (always Now) or stalling (always Not Yet)?",
        "Can you trust the timing AND take action? What if 'not yet' and 'now' are both true?",
        "Notice: What's the smallest next step that honors both patience and movement?"
      ],
      decide: [
        "Is there something you're rushing that needs more time?",
        "Or something you're delaying that's ready now?",
        "Are you choosing from fear (of missing out or making mistakes) or from fullness?",
        "Complete this: 'From this place of right timing, I choose to...'"
      ]
    },
    embodiment: {
      poles: "Think ↔ Feel • Stay ↔ Go",
      intro: "You're working with EMBODIMENT—the tension between thinking and feeling, between staying present in your body and fleeing into your head or away from sensation. This practice will help you notice when you disconnect and find your way back.",
      halt: [
        "Stop. Before you continue, scan your body.",
        "Are you in your head right now, or in your felt experience?",
        "Notice if you've been overriding signals: tiredness, hunger, tension, the urge to move.",
        "Name it: 'I've disconnected from my body.' Just notice."
      ],
      observe: [
        "Feel your breath. Where does it move in your body?",
        "Notice sensations: temperature, texture, tension, ease.",
        "Where are you holding emotion physically? Chest? Throat? Belly?",
        "Are you thinking about feeling, or actually feeling?"
      ],
      look: [
        "Name it: 'This is EMBODIMENT. I'm caught between Think and Feel, between Stay and Go.' Naming it brings you back to your body.",
        "Which pole are you collapsed into? Disconnected in your head (Think) or overwhelmed by sensation (Feel)?",
        "Can you think AND feel at the same time? Can you stay present AND honor the urge to move?",
        "Notice: What does your body know that your mind doesn't?"
      ],
      decide: [
        "What does your body need right now? Movement? Rest? Touch? Space?",
        "Are you choosing from what you think you should do or what you feel you need?",
        "What's one way you can honor your body's truth today?",
        "Complete this: 'My body is telling me... and I choose to...'"
      ]
    },
    uncertainty: {
      poles: "Hide ↔ Seek • Threat ↔ Wonder",
      intro: "You're working with UNCERTAINTY—the tension between needing to know and trusting mystery, between hiding from the unknown and seeking answers. This practice will help you notice when you collapse into certainty-seeking or avoidance.",
      halt: [
        "Pause. What are you trying to control by needing to know?",
        "Or what are you avoiding by staying in not-knowing?",
        "Notice the discomfort of uncertainty without trying to resolve it.",
        "Name it: 'I'm collapsed into needing certainty' or 'I'm hiding in mystery.' Just see it."
      ],
      observe: [
        "What does the need for certainty feel like in your body? Tight? Anxious? Grasping?",
        "Or what does hiding from knowing feel like? Foggy? Numb? Floating?",
        "Notice: Is uncertainty threatening you or inviting you?",
        "What are you afraid will happen if you don't know?"
      ],
      look: [
        "Name it: 'This is UNCERTAINTY. I'm caught between Hide and Seek, between Threat and Wonder.' Naming it transforms the discomfort from enemy to invitation.",
        "Which pole are you collapsed into? Grasping for certainty (Seek) or numbing out in fog (Hide)?",
        "Can you be confident AND uncertain? Can you trust the mystery AND take the next step?",
        "Notice: What if not-knowing isn't incompetence—it's openness? What becomes available when you hold both knowing and mystery?"
      ],
      decide: [
        "Is there a question you're ready to sit with instead of answering?",
        "Or something you know that you've been avoiding?",
        "Are you choosing from fear (of being wrong or vulnerable) or from wonder?",
        "Complete this: 'I don't know... and I'm choosing to...'"
      ]
    },
    becoming: {
      poles: "Same ↔ Different • Return ↔ Forward",
      intro: "You're working with BECOMING—the tension between who you've been and who you're becoming, between returning to the familiar and moving forward into the new. This practice will help you notice when you're clinging or running.",
      halt: [
        "Pause. Notice: Are you clinging to who you've been?",
        "Or are you running from yourself by constantly reinventing?",
        "Stop the pattern. Just see it.",
        "Name it: 'I'm collapsed into sameness' or 'I'm collapsed into constant change.' Just notice."
      ],
      observe: [
        "What does it feel like to outgrow an old identity? Scary? Sad? Freeing?",
        "Or what does it feel like to reinvent without integration? Chaotic? Exciting? Exhausting?",
        "Notice: What are you loyal to by staying the same? Or what are you avoiding by changing?",
        "Who were you a year ago? Who are you now? What's different?"
      ],
      look: [
        "Name it: 'This is BECOMING. I'm caught between Same and Different, between Return and Forward.' Naming it helps you see the pattern instead of being caught in it.",
        "Which pole are you collapsed into? Clinging to the familiar (Same) or running from yourself through constant change (Different)?",
        "Can you honor who you've been AND welcome who's next? Can you change AND maintain continuity?",
        "Notice: What if you're both who you always were and someone completely new? What part of you is unchanging? What part is always evolving?"
      ],
      decide: [
        "Is there an old version of yourself you need to grieve? Or a new one you're afraid to try?",
        "Are you choosing from fear (of loss or vulnerability) or from curiosity?",
        "What's one way you can honor the spiral—returning to familiar places from new vantage points?",
        "Complete this: 'I was... I am... and I'm becoming...'"
      ]
    }
  };

  const handleThreadSelect = (threadName: string) => {
    setSelectedThread(threadName);
    setCurrentStep('intro');
    setResponses({});
  };

  const handleNext = () => {
    const steps: HoldStep[] = ['intro', 'halt', 'observe', 'look', 'decide', 'complete'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    const steps: HoldStep[] = ['intro', 'halt', 'observe', 'look', 'decide', 'complete'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResponseChange = (step: string, value: string) => {
    setResponses({ ...responses, [step]: value });
  };

  const handleComplete = async () => {
    if (!selectedThread) return;

    setSaving(true);
    try {
      const token = localStorage.getItem('auth_token');
      const notes = Object.entries(responses)
        .map(([step, response]) => `${step.toUpperCase()}: ${response}`)
        .join('\n\n');

      await fetch(`${API_URL}/api/practice/log`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          threadId: selectedThread,
          practiceType: 'interactive-hold',
          notes
        })
      });

      // Reload history and reset
      await loadPracticeHistory();
      setSelectedThread(null);
      setCurrentStep('intro');
      setResponses({});
    } catch (error) {
      console.error('Failed to log practice:', error);
    } finally {
      setSaving(false);
    }
  };

  const toggleEntry = (id: string) => {
    const newExpanded = new Set(expandedEntries);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedEntries(newExpanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  const getThreadDisplayName = (threadId: string) => {
    return threadId.charAt(0).toUpperCase() + threadId.slice(1);
  };

  const handleEditEntry = (entry: PracticeHistoryEntry) => {
    setEditingEntry(entry);
    setEditNotes(entry.notes || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingEntry(null);
    setEditNotes('');
  };

  const handleUpdateEntry = async () => {
    if (!editingEntry) return;

    setSaving(true);
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_URL}/api/practice/${editingEntry._id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          notes: editNotes
        })
      });

      if (response.ok) {
        handleCancelEdit();
        await loadPracticeHistory();
      }
    } catch (error) {
      console.error('Failed to update practice entry:', error);
    } finally {
      setSaving(false);
    }
  };

  const exportPractices = () => {
    const filtered = getFilteredPractices();
    const text = filtered.map(entry => {
      const date = formatDate(entry.completedAt);
      return `[${date}] ${getThreadDisplayName(entry.threadId)} - ${entry.practiceType}\n\n${entry.notes || 'No notes'}\n\n---\n`;
    }).join('\n');

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `practice-sessions-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getFilteredPractices = () => {
    return practiceHistory.filter(entry => {
      // Thread filter
      if (filterThread !== 'all' && entry.threadId !== filterThread) return false;

      // Search filter
      if (searchQuery && entry.notes && !entry.notes.toLowerCase().includes(searchQuery.toLowerCase())) return false;

      // Date range filter
      const entryDate = new Date(entry.completedAt);
      if (startDate && entryDate < new Date(startDate)) return false;
      if (endDate && entryDate > new Date(endDate + 'T23:59:59')) return false;

      return true;
    });
  };

  if (loading) {
    return <div className={styles.container}><div className={styles.loading}>Loading...</div></div>;
  }

  if (!selectedThread) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Interactive HOLD Practice</h1>
          <p className={styles.subtitle}>Guided practice for working with your focus threads</p>
        </header>

        <section className={styles.content}>
          <div className={styles.introCard}>
            <h2>How This Works</h2>
            <p>
              This tool guides you through the HOLD practice with your specific focus threads—the areas where you most often collapse under pressure.
            </p>
            <p>
              You'll move through four steps:
            </p>
            <ul className={styles.stepsList}>
              <li><strong>HALT:</strong> Stop the automatic reaction; create space</li>
              <li><strong>OBSERVE:</strong> Notice body sensations and present reality</li>
              <li><strong>LOOK:</strong> Find the both/and in apparent either/or</li>
              <li><strong>DECIDE:</strong> Choose from fullness, not fear</li>
            </ul>
            <p>
              Each session takes about 10-15 minutes. Your responses will be saved to track your practice journey.
            </p>
          </div>

          {focusThreads.length > 0 ? (
            <>
              <h2 className={styles.selectPrompt}>Choose a thread to practice with:</h2>
              <div className={styles.threadCards}>
                {focusThreads.map((thread) => {
                  const threadData = threadPrompts[thread.name];
                  return (
                    <div
                      key={thread.name}
                      className={styles.threadCard}
                      onClick={() => handleThreadSelect(thread.name)}
                    >
                      <div className={styles.threadCardHeader}>
                        <h3>{thread.name.toUpperCase()}</h3>
                        <span className={styles.threadScore}>{thread.percentage.toFixed(0)}%</span>
                      </div>
                      <p className={styles.threadPoles}>{threadData.poles}</p>
                      <button className={styles.startButton}>
                        Start Practice →
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className={styles.noThreads}>
              <p>Complete your Quick Profile assessment to get personalized focus threads.</p>
              <Link to="/assessment/quick-profile" className={styles.assessmentLink}>
                Take Quick Profile →
              </Link>
            </div>
          )}

          <div className={styles.backLinks}>
            <Link to="/dashboard">← Back to Dashboard</Link>
            <Link to="/journal">Go to Journal →</Link>
          </div>
        </section>

        {practiceHistory.length > 0 && (
          <section className={styles.historySection}>
            <div className={styles.historyHeader}>
              <div>
                <h2>Practice History</h2>
                <p className={styles.historySubtitle}>
                  {practiceHistory.length} session{practiceHistory.length !== 1 ? 's' : ''} logged
                </p>
              </div>
              <button onClick={exportPractices} className={styles.exportButton}>
                Export Sessions
              </button>
            </div>

            <div className={styles.filters}>
              <div className={styles.filterGroup}>
                <label>Thread:</label>
                <select value={filterThread} onChange={(e) => setFilterThread(e.target.value)} className={styles.filterSelect}>
                  <option value="all">All Threads</option>
                  <option value="presence">PRESENCE</option>
                  <option value="consent">CONSENT</option>
                  <option value="memory">MEMORY</option>
                  <option value="pause">PAUSE</option>
                  <option value="embodiment">EMBODIMENT</option>
                  <option value="uncertainty">UNCERTAINTY</option>
                  <option value="becoming">BECOMING</option>
                </select>
              </div>

              <div className={styles.filterGroup}>
                <label>Search:</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search notes..."
                  className={styles.searchInput}
                />
              </div>

              <div className={styles.filterGroup}>
                <label>From:</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className={styles.dateInput}
                />
              </div>

              <div className={styles.filterGroup}>
                <label>To:</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className={styles.dateInput}
                />
              </div>
            </div>

            <div className={styles.historyList}>
              {getFilteredPractices().length === 0 ? (
                <p className={styles.noHistory}>No sessions match your filters.</p>
              ) : (
                getFilteredPractices().map((entry) => (
                  <div key={entry._id} className={styles.historyEntry}>
                    <div className={styles.historyEntryHeader}>
                      <div
                        className={styles.historyEntryInfo}
                        onClick={() => toggleEntry(entry._id)}
                        style={{ cursor: 'pointer', flex: 1 }}
                      >
                        <h3>{getThreadDisplayName(entry.threadId)}</h3>
                        <span className={styles.historyEntryDate}>{formatDate(entry.completedAt)}</span>
                      </div>
                      <div className={styles.historyActions}>
                        <button onClick={() => handleEditEntry(entry)} className={styles.editButton} title="Edit">
                          ✎
                        </button>
                        <span className={styles.expandIcon} onClick={() => toggleEntry(entry._id)} style={{ cursor: 'pointer' }}>
                          {expandedEntries.has(entry._id) ? '−' : '+'}
                        </span>
                      </div>
                    </div>
                    {expandedEntries.has(entry._id) && entry.notes && (
                      <div className={styles.historyEntryNotes}>
                        <pre>{entry.notes}</pre>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </section>
        )}

        {editingEntry && (
          <div className={styles.modal} onClick={handleCancelEdit}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h2>Edit Practice Session</h2>
                <button onClick={handleCancelEdit} className={styles.modalClose}>×</button>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Thread: {getThreadDisplayName(editingEntry.threadId)}</label>
                </div>

                <div className={styles.formGroup}>
                  <label>Date: {formatDate(editingEntry.completedAt)}</label>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="editNotes">Notes</label>
                  <textarea
                    id="editNotes"
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    rows={15}
                    className={styles.textarea}
                  />
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button onClick={handleCancelEdit} className={styles.cancelButton}>
                  Cancel
                </button>
                <button onClick={handleUpdateEntry} disabled={saving} className={styles.saveButton}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  const threadData = threadPrompts[selectedThread];
  const stepContent = {
    intro: {
      title: `Working with ${selectedThread.toUpperCase()}`,
      content: threadData.intro,
      prompts: []
    },
    halt: {
      title: 'H — HALT',
      content: 'Stop the automatic reaction. Create space between stimulus and response.',
      prompts: threadData.halt
    },
    observe: {
      title: 'O — OBSERVE',
      content: 'Notice what\'s happening in your body and in the present moment.',
      prompts: threadData.observe
    },
    look: {
      title: 'L — LOOK',
      content: 'Find the both/and in what seemed like either/or.',
      prompts: threadData.look
    },
    decide: {
      title: 'D — DECIDE',
      content: 'Choose your next action from fullness, not from fear or collapse.',
      prompts: threadData.decide
    },
    complete: {
      title: 'Practice Complete',
      content: 'You\'ve worked through the HOLD practice. Your responses have been recorded.',
      prompts: []
    }
  };

  const current = stepContent[currentStep];

  return (
    <div className={styles.container}>
      <div className={styles.practiceSession}>
        <div className={styles.sessionHeader}>
          <button className={styles.exitButton} onClick={() => setSelectedThread(null)}>
            ← Exit Practice
          </button>
          <div className={styles.threadBadge}>
            {selectedThread.toUpperCase()}
          </div>
        </div>

        <div className={styles.progressBar}>
          {['intro', 'halt', 'observe', 'look', 'decide', 'complete'].map((step, idx) => (
            <div
              key={step}
              className={`${styles.progressStep} ${
                step === currentStep ? styles.active : ''
              } ${
                ['intro', 'halt', 'observe', 'look', 'decide', 'complete'].indexOf(currentStep) > idx
                  ? styles.completed
                  : ''
              }`}
            />
          ))}
        </div>

        <div className={styles.stepContent}>
          <h2 className={styles.stepTitle}>{current.title}</h2>
          <p className={styles.stepIntro}>{current.content}</p>

          {current.prompts.length > 0 && (
            <div className={styles.prompts}>
              {current.prompts.map((prompt, idx) => (
                <p key={idx} className={styles.prompt}>• {prompt}</p>
              ))}
            </div>
          )}

          {currentStep !== 'intro' && currentStep !== 'complete' && (
            <div className={styles.responseArea}>
              <label htmlFor="response">Your reflections:</label>
              <textarea
                id="response"
                className={styles.textarea}
                value={responses[currentStep] || ''}
                onChange={(e) => handleResponseChange(currentStep, e.target.value)}
                placeholder="What are you noticing? What's emerging for you?"
                rows={6}
              />
            </div>
          )}

          {currentStep === 'complete' && (
            <div className={styles.completeSummary}>
              <p className={styles.completeMessage}>
                You've moved through the full HOLD practice with {selectedThread.toUpperCase()}.
                Your practice has been logged and will contribute to unlocking your Extended Assessment.
              </p>
              <div className={styles.reviewResponses}>
                <h3>Your Reflections:</h3>
                {Object.entries(responses).map(([step, response]) => (
                  response && (
                    <div key={step} className={styles.responseReview}>
                      <strong>{step.toUpperCase()}:</strong>
                      <p>{response}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.navigation}>
          {currentStep !== 'intro' && currentStep !== 'complete' && (
            <button className={styles.navButton} onClick={handleBack}>
              ← Back
            </button>
          )}
          {currentStep !== 'complete' ? (
            <button className={styles.navButton} onClick={handleNext}>
              {currentStep === 'decide' ? 'Complete Practice' : 'Next →'}
            </button>
          ) : (
            <button
              className={styles.completeButton}
              onClick={handleComplete}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Finish & Log Practice'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeTool;
