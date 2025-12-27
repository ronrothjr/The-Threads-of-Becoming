import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as journal from '../services/api/journal';
import * as assessments from '../services/api/assessments';
import { JournalEntry, JournalStats } from '../services/api/types';
import { getThreadGuidance } from '../data/threadPracticeGuides';
import styles from './Journal.module.css';

interface FocusThread {
  name: string;
  score: number;
  percentage: number;
}

const Journal: React.FC = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [stats, setStats] = useState<JournalStats | null>(null);
  const [focusThreads, setFocusThreads] = useState<FocusThread[]>([]);
  const [threadFocus, setThreadFocus] = useState('');
  const [content, setContent] = useState('');
  const [practiceType, setPracticeType] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showHoldPractice, setShowHoldPractice] = useState(false);
  // Filters
  const [filterThread, setFilterThread] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterTag, setFilterTag] = useState<string>('all');
  // Edit state
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null);
  const [editContent, setEditContent] = useState('');
  const [editTags, setEditTags] = useState<string[]>([]);
  const [editTagInput, setEditTagInput] = useState('');
  useEffect(() => {
    loadJournalData();
  }, []);
  const loadJournalData = async () => {
    try {
      // Use centralized services
      const [entriesData, statsData, resultsData] = await Promise.all([
        journal.getAll(),
        journal.getStats(),
        assessments.getQuickProfileResults()
      ]);

      setEntries(entriesData as any);
      setStats(statsData);

      const threadScores = resultsData.results.threadScores;
      // Get 2 lowest scoring threads
      const sortedThreads = Object.entries(threadScores)
        .map(([name, data]: [string, any]) => ({
          name,
          score: data.raw,
          percentage: data.percentage
        }))
        .sort((a, b) => a.score - b.score)
        .slice(0, 2);
      setFocusThreads(sortedThreads);
    } catch (error) {
      console.error('Failed to load journal data:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!threadFocus || !content) return;
    setSubmitting(true);
    try {
      // Use centralized journal service
      await journal.create({
        threadFocus,
        content,
        practiceType: practiceType || undefined,
        tags
      });

      setThreadFocus('');
      setContent('');
      setPracticeType('');
      setTags([]);
      setTagInput('');
      await loadJournalData();
    } catch (error) {
      console.error('Failed to create journal entry:', error);
    } finally {
      setSubmitting(false);
    }
  };
  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };
  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };
  const handleEditEntry = (entry: JournalEntry) => {
    setEditingEntry(entry);
    setEditContent(entry.content);
    setEditTags(entry.tags || []);
    setEditTagInput('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleCancelEdit = () => {
    setEditingEntry(null);
    setEditContent('');
    setEditTags([]);
  };
  const handleUpdateEntry = async () => {
    if (!editingEntry || !editContent) return;
    try {
      // Use centralized journal service
      await journal.update(editingEntry._id, {
        content: editContent,
        tags: editTags
      });

      await loadJournalData();
      handleCancelEdit();
    } catch (error) {
      console.error('Failed to update journal entry:', error);
    }
  };
  const handleDeleteEntry = async (entryId: string) => {
    if (!window.confirm('Are you sure you want to delete this entry?')) return;
    try {
      // Use centralized journal service
      await journal.deleteEntry(entryId);
      await loadJournalData();
    } catch (error) {
      console.error('Failed to delete journal entry:', error);
    }
  };
  const handleAddEditTag = () => {
    if (editTagInput.trim() && !editTags.includes(editTagInput.trim())) {
      setEditTags([...editTags, editTagInput.trim()]);
      setEditTagInput('');
    }
  };
  const handleRemoveEditTag = (tag: string) => {
    setEditTags(editTags.filter(t => t !== tag));
  };
  const exportEntries = () => {
    const filtered = getFilteredEntries();
    const text = filtered.map(entry => {
      const date = new Date(entry.createdAt).toLocaleDateString();
      const tagsList = entry.tags && entry.tags.length > 0 ? `\nTags: ${entry.tags.join(', ')}` : '';
      return `[${date}] ${entry.threadFocus?.toUpperCase() || 'GENERAL'}${tagsList}\n\n${entry.content}\n\n---\n`;
    }).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `journal-entries-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const getFilteredEntries = () => {
    return entries.filter(entry => {
      // Thread filter
      if (filterThread !== 'all' && entry.threadFocus !== filterThread) return false;
      // Search filter
      if (searchQuery && !entry.content.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      // Date range filter
      const entryDate = new Date(entry.createdAt);
      if (startDate && entryDate < new Date(startDate)) return false;
      if (endDate && entryDate > new Date(endDate + 'T23:59:59')) return false;
      // Tag filter
      if (filterTag !== 'all' && (!entry.tags || !entry.tags.includes(filterTag))) return false;
      return true;
    });
  };
  const getAllTags = () => {
    const tagSet = new Set<string>();
    entries.forEach(entry => {
      entry.tags?.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  };
  if (loading) {
    return <div className={styles.container}><div className={styles.loading}>Loading...</div></div>;
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Practice Journal</h1>
        <p className={styles.subtitle}>Record your observations and insights</p>
      </header>
      {stats && (
        <div className={styles.statsCard}>
          <h2>Your Progress</h2>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${(stats.journalDaysCount / 10) * 100}%` }}
            />
          </div>
          <p className={styles.progressText}>
            {stats.requirementMet ? (
              <span className={styles.unlocked}>✓ Extended Assessment Unlocked! ({stats.journalDaysCount} days)</span>
            ) : (
              <span>
                {stats.journalDaysCount} / 10 days completed • {stats.totalEntries} total entries
              </span>
            )}
          </p>
          <p className={styles.encouragement}>
            {stats.requirementMet
              ? "You've done the work. The Extended Assessment is ready when you are."
              : "Keep practicing and observing. Real integration takes sustained attention."}
          </p>
        </div>
      )}
      {focusThreads.length > 0 && (
        <div className={styles.focusThreadsCard}>
          <h2>Your Focus Threads</h2>
          <p className={styles.focusIntro}>
            Based on your Quick Profile, these are your primary growth edges—the threads where you most often collapse under pressure:
          </p>
          <div className={styles.focusThreadsList}>
            {focusThreads.map((thread) => {
              const guidance = getThreadGuidance(thread.name);
              if (!guidance) return null;

              return (
                <div key={thread.name} className={styles.focusThreadItem}>
                  <div className={styles.focusThreadHeader}>
                    <h3>{thread.name.toUpperCase()}</h3>
                    <span className={styles.focusThreadScore}>{thread.percentage.toFixed(0)}%</span>
                  </div>
                  <div className={styles.tensionPoles}>
                    <div className={styles.tensionLabel}>Tension Poles:</div>
                    {guidance.poles.split(' • ').map((pole, idx) => (
                      <div key={idx} className={styles.poleGroup}>
                        {pole.split(' ↔ ').map((p, i, arr) => (
                          <React.Fragment key={i}>
                            <span className={styles.polePill}>{p.trim()}</span>
                            {i < arr.length - 1 && <span className={styles.tensionArrow}>↔</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    ))}
                  </div>
                  <p className={styles.focusThreadPractice}><strong>Where to start:</strong> {guidance.practice}</p>
                </div>
              );
            })}
          </div>
          <p className={styles.focusFooter}>
            <Link to="/assessment/results">View your complete results →</Link>
          </p>
        </div>
      )}
      <section className={styles.newEntrySection}>
        <h2>New Journal Entry</h2>
        <div className={styles.holdReference}>
          <button
            type="button"
            className={styles.holdToggle}
            onClick={() => setShowHoldPractice(!showHoldPractice)}
          >
            {showHoldPractice ? '▼' : '▶'} HOLD Practice Reference
          </button>
          {showHoldPractice && (
            <div className={styles.holdContent}>
              <p className={styles.holdIntro}>
                When you find yourself in collapse, use HOLD to find your way back:
              </p>
              <div className={styles.holdStep}>
                <h4>H – HALT</h4>
                <p>Stop the automatic reaction. Create a pause between stimulus and response. Notice you've collapsed without judgment.</p>
              </div>
              <div className={styles.holdStep}>
                <h4>O – OBSERVE</h4>
                <p>Notice what's happening in your body and in the present moment. Where is the tension? What sensations are you experiencing?</p>
              </div>
              <div className={styles.holdStep}>
                <h4>L – LOOK</h4>
                <p>Name the tension you're experiencing. Identify which poles are pulling at you. Just naming it breaks its unconscious grip.</p>
              </div>
              <div className={styles.holdStep}>
                <h4>D – DECIDE</h4>
                <p>Choose your next action from fullness, not from fear or collapse. The decision comes from integration, not from one pole trying to win.</p>
              </div>
              <p className={styles.holdFooter}>
                <Link to="/practice">Read more about the HOLD practice →</Link>
              </p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="threadFocus">Thread Focus</label>
            <select
              id="threadFocus"
              value={threadFocus}
              onChange={(e) => setThreadFocus(e.target.value)}
              required
              className={styles.select}
            >
              <option value="">Select a thread...</option>
              <option value="presence">PRESENCE</option>
              <option value="consent">CONSENT</option>
              <option value="memory">MEMORY</option>
              <option value="pause">PAUSE</option>
              <option value="embodiment">EMBODIMENT</option>
              <option value="uncertainty">UNCERTAINTY</option>
              <option value="becoming">BECOMING</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="practiceType">Practice Type (optional)</label>
            <select
              id="practiceType"
              value={practiceType}
              onChange={(e) => setPracticeType(e.target.value)}
              className={styles.select}
            >
              <option value="">Select practice type...</option>
              <option value="halt">HALT - Stop automatic reaction</option>
              <option value="observe">OBSERVE - Notice sensations</option>
              <option value="look">LOOK - Find both/and</option>
              <option value="decide">DECIDE - Choose from fullness</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="content">Entry</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What did you notice? When did you collapse? What emerged from holding the tension?"
              rows={8}
              required
              className={styles.textarea}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Tags (optional)</label>
            <div className={styles.tagInput}>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                placeholder="Add a tag..."
                className={styles.input}
              />
              <button type="button" onClick={handleAddTag} className={styles.addTagButton}>
                Add
              </button>
            </div>
            {tags.length > 0 && (
              <div className={styles.tags}>
                {tags.map(tag => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                    <button type="button" onClick={() => handleRemoveTag(tag)} className={styles.removeTag}>×</button>
                  </span>
                ))}
              </div>
            )}
          </div>
          <button type="submit" disabled={submitting} className={styles.submitButton}>
            {submitting ? 'Saving...' : 'Save Entry'}
          </button>
        </form>
      </section>
      <section className={styles.entriesSection}>
        <div className={styles.entriesHeader}>
          <h2>Journal Entries</h2>
          <button onClick={exportEntries} className={styles.exportButton}>
            Export Entries
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
            <label>Tag:</label>
            <select value={filterTag} onChange={(e) => setFilterTag(e.target.value)} className={styles.filterSelect}>
              <option value="all">All Tags</option>
              {getAllTags().map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>Search:</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search entries..."
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
        {getFilteredEntries().length === 0 ? (
          <p className={styles.noEntries}>
            {entries.length === 0
              ? 'No journal entries yet. Start by recording your first observation above.'
              : 'No entries match your filters.'}
          </p>
        ) : (
          <div className={styles.entriesList}>
            {getFilteredEntries().map((entry) => (
              <div key={entry._id} className={styles.entry}>
                <div className={styles.entryHeader}>
                  <div className={styles.entryHeaderLeft}>
                    <span className={styles.entryThread}>{entry.threadFocus?.toUpperCase() || 'GENERAL'}</span>
                    {entry.practiceType && (
                      <span className={styles.entryPractice}>{entry.practiceType.toUpperCase()}</span>
                    )}
                    <span className={styles.entryDate}>
                      {new Date(entry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className={styles.entryActions}>
                    <button onClick={() => handleEditEntry(entry)} className={styles.editButton} title="Edit">
                      ✎
                    </button>
                    <button onClick={() => handleDeleteEntry(entry._id)} className={styles.deleteButton} title="Delete">
                      ×
                    </button>
                  </div>
                </div>
                {entry.tags && entry.tags.length > 0 && (
                  <div className={styles.entryTags}>
                    {entry.tags.map(tag => (
                      <span key={tag} className={styles.entryTag}>{tag}</span>
                    ))}
                  </div>
                )}
                <p className={styles.entryContent}>{entry.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
      <div className={styles.backLinks}>
        <Link to="/dashboard">← Back to Dashboard</Link>
        <Link to="/practice-tool">Start Interactive Practice →</Link>
      </div>
      {editingEntry && (
        <div className={styles.modal} onClick={handleCancelEdit}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Edit Journal Entry</h2>
              <button onClick={handleCancelEdit} className={styles.modalClose}>×</button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label>Thread: {editingEntry.threadFocus?.toUpperCase() || 'GENERAL'}</label>
                <label htmlFor="editContent">Entry</label>
                <textarea
                  id="editContent"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={10}
                  className={styles.textarea}
                />
                <label>Tags</label>
                <div className={styles.tagInput}>
                  <input
                    type="text"
                    value={editTagInput}
                    onChange={(e) => setEditTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddEditTag())}
                    placeholder="Add a tag..."
                    className={styles.input}
                  />
                  <button type="button" onClick={handleAddEditTag} className={styles.addTagButton}>
                    Add
                  </button>
                </div>
                {editTags.length > 0 && (
                  <div className={styles.tags}>
                    {editTags.map(tag => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                        <button type="button" onClick={() => handleRemoveEditTag(tag)} className={styles.removeTag}>×</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button onClick={handleCancelEdit} className={styles.cancelButton}>
                Cancel
              </button>
              <button onClick={handleUpdateEntry} disabled={submitting} className={styles.saveButton}>
                {submitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Journal;
