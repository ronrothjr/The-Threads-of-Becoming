# DRY (Don't Repeat Yourself) Principle Violations Report & Solutions

## Executive Summary

This codebase exhibits significant code duplication across components, pages, and patterns. While a centralized API service layer exists (`client/src/services/api/`), substantial duplication remains in React patterns, state management, error handling, type definitions, and UI rendering logic.

**Total Duplicate Code Identified:** ~1,360+ lines across 130+ instances in 30+ files

---

## 1. LOADING STATE PATTERN DUPLICATION

### Pattern: `const [loading, setLoading] = useState(true)`

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Dashboard.tsx` (line 67)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingDashboard.tsx` (line 26)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingProgress.tsx` (line 42)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingAdmin.tsx` (line 20)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/PracticeAssignments.tsx` (line 28)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (line 38)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/AssessmentResults.tsx` (line 36)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingSession.tsx` (line 104)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/components/LoginModal.tsx` (line 16)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/components/AssessmentRunner.tsx` (line 49)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Login.tsx` (line 7)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Signup.tsx` (line 7)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Practice.tsx` (line 8-9)

**WHAT is duplicated:**
The exact same loading state pattern with identical initialization, usage, and rendering:
```typescript
const [loading, setLoading] = useState(true);
// ... in useEffect
finally {
  setLoading(false);
}
// ... in render
if (loading) {
  return <div className={styles.loading}>Loading...</div>;
}
```

**HOW MANY times:** 13+ occurrences

**WHY it's problematic:**
- Loading UI inconsistency across pages (some say "Loading...", others "Loading your...", etc.)
- Changing loading behavior requires updates in 13+ files
- No centralized control over loading states or spinners
- Difficult to add features like skeleton screens or progress indicators globally

---

## 2. ERROR STATE PATTERN DUPLICATION

### Pattern: `const [error, setError] = useState('')`

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/AssessmentResults.tsx` (line 37)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/QuickProfile.tsx` (implicit in AssessmentRunner)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/components/AssessmentRunner.tsx` (line 47)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/components/LoginModal.tsx` (line 15)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Login.tsx` (line 8)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Signup.tsx` (line 8)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/PersonalJourneyMapResults.tsx` (visible in pattern)

**WHAT is duplicated:**
Identical error handling pattern:
```typescript
const [error, setError] = useState('');
// In async functions:
try {
  // ... API call
} catch (err) {
  setError(err instanceof Error ? err.message : 'Failed to...');
}
// In render:
{error && <div className={styles.error}>{error}</div>}
```

**HOW MANY times:** 7+ occurrences

**WHY it's problematic:**
- Inconsistent error display styling and messaging
- No centralized error recovery or retry logic
- Error messages hardcoded in each file instead of centralized
- Difficult to add global error tracking/logging

---

## 3. DATA FETCHING ON MOUNT PATTERN

### Pattern: `useEffect(() => { loadData(); }, [])`

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Dashboard.tsx` (lines 68-70)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingDashboard.tsx` (lines 28-30)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingProgress.tsx` (lines 44-46)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingAdmin.tsx` (lines 23-25)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/PracticeAssignments.tsx` (lines 31-33)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 52-54)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/AssessmentResults.tsx` (lines 43-45)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingSession.tsx` (lines 119-121)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/components/AssessmentRunner.tsx` (lines 67-95)

**WHAT is duplicated:**
The same pattern of data fetching on component mount:
```typescript
useEffect(() => {
  loadSomeData();
}, []);

const loadSomeData = async () => {
  try {
    setLoading(true);
    const data = await api.getSomething();
    setSomeState(data);
  } catch (error) {
    console.error('Failed to load...', error);
  } finally {
    setLoading(false);
  }
};
```

**HOW MANY times:** 9+ major occurrences

**WHY it's problematic:**
- No caching layer - every component re-fetches on mount
- No request deduplication - multiple components can request same data
- Difficult to implement global loading/error states
- Cannot easily add retry logic, request cancellation, or stale-while-revalidate patterns

---

## 4. DUPLICATE TYPE DEFINITIONS

### Pattern: Interface definitions repeated across files

**WHERE it appears:**

**FocusThread interface:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Dashboard.tsx` (lines 8-12)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 22-26)

**ThreadScore interface:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/AssessmentResults.tsx` (lines 7-11)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/services/api/types.ts` (lines 63-68) - defined centrally but not imported

**TrainingModule interface:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingAdmin.tsx` (lines 6-17)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingDashboard.tsx` (lines 14-23)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingSession.tsx` (lines 76-92)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/services/api/types.ts` (lines 363-379) - canonical definition exists but not used

**AudioContent interface:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingSession.tsx` (lines 8-17)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/services/api/types.ts` (lines 305-312) - defined centrally but redefined locally

**JournalEntry interface:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 7-15)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/services/api/types.ts` (lines 212-222) - exists but not imported

**PracticeAssignment interface:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/PracticeAssignments.tsx` (lines 7-21)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/services/api/types.ts` (lines 284-295) - exists but not imported

**WHAT is duplicated:**
Complete interface definitions are redeclared in each file instead of importing from the centralized `types.ts`.

**HOW MANY times:** 15+ interface redefinitions

**WHY it's problematic:**
- Type definitions drift over time between files
- Adding fields requires updating multiple locations
- No single source of truth for data structures
- TypeScript's type safety benefits are undermined by duplicate definitions
- Refactoring becomes extremely risky

---

## 5. FORM HANDLING PATTERN DUPLICATION

### Pattern: Form state management and submission

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Login.tsx` (lines 7-36)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Signup.tsx` (lines 7-52)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/components/LoginModal.tsx` (lines 13-40)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 84-108, edit form 130-144)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/PracticeAssignments.tsx` (lines 52-72)

**WHAT is duplicated:**
Similar form handling logic:
```typescript
const [formState, setFormState] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [error, setError] = useState('');

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError('');

  try {
    await apiCall(formData);
    // navigate or reset
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Failed');
  } finally {
    setIsSubmitting(false);
  }
};
```

**HOW MANY times:** 5+ major form patterns

**WHY it's problematic:**
- No validation abstraction - each form handles validation differently
- Inconsistent submission states and disabled button logic
- Duplicate error handling and display logic
- No form state persistence or autosave abstraction

---

## 6. THREAD/MODULE FILTERING PATTERN

### Pattern: Filter state and filtering logic

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingAdmin.tsx` (lines 21, 36-41)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 42-46, 181-195)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingDashboard.tsx` (lines 82-83)

**WHAT is duplicated:**
```typescript
const [filter, setFilter] = useState('all');

const filteredItems = items.filter(item => {
  if (filter === 'all') return true;
  return item.someField === filter;
});
```

**HOW MANY times:** 3 occurrences with similar patterns

**WHY it's problematic:**
- Filter logic spread across components
- No reusable filter component or hook
- Inconsistent filter UI patterns

---

## 7. NAVIGATION GUARDS / AUTH CHECKS

### Pattern: Authentication status checking

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Practice.tsx` (lines 10-26)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Dashboard.tsx` (implicit in data loading)
- Multiple pages check auth status independently

**WHAT is duplicated:**
```typescript
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [hasCompletedQuickProfile, setHasCompletedQuickProfile] = useState(false);

useEffect(() => {
  const checkAuth = async () => {
    const token = auth.getAuthToken();
    if (!token) {
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);

    try {
      const data = await assessments.getStatus();
      setHasCompletedQuickProfile(data.quickProfileCompleted);
    } catch (error) {
      console.error('Failed to check assessment status:', error);
    }
  };
  checkAuth();
}, []);
```

**HOW MANY times:** 2+ explicit checks, likely more implicit

**WHY it's problematic:**
- No centralized route protection
- Auth state duplicated across components
- Inconsistent redirect behavior on auth failure

---

## 8. PROGRESS BAR RENDERING

### Pattern: Progress bar UI components

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Dashboard.tsx` (lines 330-340, 350-360, 390-400)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingDashboard.tsx` (lines 127-136)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingProgress.tsx` (lines 150-171)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 215-220)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingSession.tsx` (lines 666-671)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/components/AssessmentRunner.tsx` (lines 258-260)

**WHAT is duplicated:**
```typescript
<div className={styles.progressBar}>
  <div
    className={styles.progressFill}
    style={{ width: `${percentage}%` }}
  />
</div>
```

**HOW MANY times:** 10+ occurrences across files

**WHY it's problematic:**
- Inconsistent progress bar styling
- No reusable ProgressBar component
- Hard to add features like animations, labels, colors globally
- Percentage calculation logic duplicated in multiple places

---

## 9. MODAL/OVERLAY PATTERN

### Pattern: Modal backdrop and close logic

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/components/LoginModal.tsx` (lines 45-49)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 674-728 - edit modal)

**WHAT is duplicated:**
```typescript
const handleOverlayClick = (e: React.MouseEvent) => {
  if (e.target === e.currentTarget) {
    onClose();
  }
};

return (
  <div className={styles.overlay} onClick={handleOverlayClick}>
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      {/* content */}
    </div>
  </div>
);
```

**HOW MANY times:** 2 explicit modals, pattern likely repeated

**WHY it's problematic:**
- No reusable Modal component
- Accessibility features (focus trapping, ESC key) need to be reimplemented
- Inconsistent modal behavior and styling

---

## 10. EMPTY STATE RENDERING

### Pattern: Empty/no data state displays

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingDashboard.tsx` (lines 97-101, 154-158)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingAdmin.tsx` (lines 104-110)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/PracticeAssignments.tsx` (lines 212-223)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 628-633)

**WHAT is duplicated:**
```typescript
{items.length === 0 ? (
  <div className={styles.emptyState}>
    <h3>No items yet</h3>
    <p>Get started by...</p>
  </div>
) : (
  // render items
)}
```

**HOW MANY times:** 5+ occurrences

**WHY it's problematic:**
- Inconsistent empty state messaging and design
- No reusable EmptyState component
- Hard to add illustrations or CTAs consistently

---

## 11. TAG MANAGEMENT PATTERN

### Pattern: Tag input and tag list management

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 36-37, 109-117, edit: 50-51, 155-163)

**WHAT is duplicated:**
Identical tag management logic appears twice in the same file (for create and edit forms):
```typescript
const [tags, setTags] = useState<string[]>([]);
const [tagInput, setTagInput] = useState('');

const handleAddTag = () => {
  if (tagInput.trim() && !tags.includes(tagInput.trim())) {
    setTags([...tags, tagInput.trim()]);
    setTagInput('');
  }
};

const handleRemoveTag = (tag: string) => {
  setTags(tags.filter(t => t !== tag));
};
```

**HOW MANY times:** 2 times in Journal.tsx alone (lines 109-117, 155-163)

**WHY it's problematic:**
- Even within the SAME file, tag logic is duplicated
- Changes to tag behavior require updating multiple places
- No reusable tag input component
- Could be abstracted into a custom hook or component

---

## 12. NAVIGATION/BACK BUTTON PATTERN

### Pattern: Navigate back functionality

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/TrainingDashboard.tsx` (lines 87-89)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/PracticeAssignments.tsx` (line 114)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (line 671)

**WHAT is duplicated:**
```typescript
<button className={styles.backButton} onClick={() => navigate('/dashboard')}>
  ← Back to Dashboard
</button>
```

**HOW MANY times:** 3+ occurrences

**WHY it's problematic:**
- Inconsistent back button styling and positioning
- Hardcoded navigation paths instead of using breadcrumb/history
- No reusable BackButton component

---

## 13. DATE FORMATTING

### Pattern: Date formatting logic

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/PracticeAssignments.tsx` (lines 89-98)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (line 167 - in export, line 645)

**WHAT is duplicated:**
```typescript
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  // formatting logic
  return date.toLocaleDateString();
};
```

**HOW MANY times:** 2+ different implementations

**WHY it's problematic:**
- Inconsistent date display formats across the app
- No centralized date utility functions
- Difficult to change date format globally or add internationalization

---

## 14. THREAD SCORE SORTING/FILTERING

### Pattern: Finding lowest thread scores

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Dashboard.tsx` (lines 94-101)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 68-76)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/AssessmentResults.tsx` (lines 131-133)

**WHAT is duplicated:**
```typescript
const sortedThreads = Object.entries(threadScores)
  .map(([name, data]: [string, any]) => ({
    name,
    score: data.raw,
    percentage: data.percentage
  }))
  .sort((a, b) => a.score - b.score)
  .slice(0, 2);
```

**HOW MANY times:** 3 occurrences

**WHY it's problematic:**
- Same business logic duplicated in multiple components
- No utility function for "get lowest threads"
- Risk of implementation drift (one might use `raw`, another `score`)

---

## 15. MASSIVE THREAD PRACTICE DATA

### Pattern: Thread practice guidance objects

**WHERE it appears:**
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/Journal.tsx` (lines 245-413 - 169 lines of hardcoded data!)
- `/home/ronwr/Repos/The-Threads-of-Becoming/client/src/pages/AssessmentResults.tsx` (lines 134-169 - similar data structure)

**WHAT is duplicated:**
Massive inline objects containing thread descriptions, poles, collapse patterns, and practices. The Journal.tsx file contains 169 lines of hardcoded practice guidance that could/should be externalized.

**HOW MANY times:** 2 locations with overlapping data

**WHY it's problematic:**
- **169 lines of data** embedded in component logic (Journal.tsx)
- Cannot be reused across components
- Impossible to localize or A/B test
- Makes component files extremely long and hard to navigate
- Should be in a separate data file or CMS
- Updating practice guidance requires code changes instead of content updates

---

## Summary Statistics

| Category | Duplicate Instances | Files Affected | Estimated Lines Duplicated |
|----------|-------------------|----------------|---------------------------|
| Loading States | 13+ | 13 | ~65 lines |
| Error States | 7+ | 7 | ~35 lines |
| Data Fetching on Mount | 9+ | 9 | ~180 lines |
| Type Definitions | 15+ | 10 | ~200 lines |
| Form Handling | 5+ | 5 | ~100 lines |
| Progress Bars | 10+ | 6 | ~60 lines |
| Empty States | 5+ | 4 | ~40 lines |
| Tag Management | 2 | 1 | ~30 lines |
| Thread Practice Data | 2 | 2 | ~350 lines |
| Try-Catch Blocks | 51+ | 18 | ~300+ lines |
| **TOTAL** | **130+** | **30+** | **~1,360+ lines** |

---

# PROPOSED SOLUTIONS

## 🎯 Solution Architecture

### **Phase 1: Foundation (Week 1)**

#### 1.1 Custom Hooks for Async State Management

**Create:** `client/src/hooks/useAsync.ts`
```typescript
interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: () => Promise<void>;
  reset: () => void;
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true
): UseAsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await asyncFunction();
      setData(result as any);
      return result;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMsg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, execute, reset };
}
```

**Usage Example:**
```typescript
// Before: Dashboard.tsx (20+ lines)
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
const [data, setData] = useState(null);

useEffect(() => {
  loadData();
}, []);

const loadData = async () => {
  try {
    setLoading(true);
    const result = await api.getData();
    setData(result);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

// After: Dashboard.tsx (2 lines!)
const { data, loading, error } = useAsync(() => api.getData());
```

**Impact:** Eliminates 180+ lines across 9 files

---

#### 1.2 Form State Management Hook

**Create:** `client/src/hooks/useForm.ts`
```typescript
interface UseFormOptions<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (field: keyof T) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitError('');
  };

  return {
    values,
    errors,
    isSubmitting,
    submitError,
    handleChange,
    handleSubmit,
    reset,
    setValues
  };
}
```

**Usage Example:**
```typescript
// Before: LoginModal.tsx (25+ lines)
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [error, setError] = useState('');

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError('');
  try {
    await auth.login({ email, password });
    navigate('/dashboard');
  } catch (err) {
    setError(err.message);
  } finally {
    setIsSubmitting(false);
  }
};

// After: LoginModal.tsx (8 lines!)
const { values, handleChange, handleSubmit, isSubmitting, submitError } = useForm({
  initialValues: { email: '', password: '' },
  onSubmit: async (values) => {
    await auth.login(values);
    navigate('/dashboard');
  }
});
```

**Impact:** Eliminates 100+ lines across 5 files

---

#### 1.3 Centralize Type Imports

**Action:** Update all components to import types from `services/api/types.ts`

**Files to Update:**
- `client/src/pages/Journal.tsx` - Remove local JournalEntry, import from types
- `client/src/pages/Dashboard.tsx` - Remove local FocusThread, import from types
- `client/src/pages/TrainingAdmin.tsx` - Remove local TrainingModule, import from types
- `client/src/pages/TrainingDashboard.tsx` - Remove local TrainingModule, import from types
- `client/src/pages/PracticeAssignments.tsx` - Remove local PracticeAssignment, import from types
- `client/src/pages/TrainingSession.tsx` - Remove local interfaces, import from types

**Impact:** Eliminates 200+ lines, ensures type consistency

---

### **Phase 2: Reusable Components (Week 2)**

#### 2.1 Loading Component

**Create:** `client/src/components/common/Loading.tsx`
```typescript
interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  size = 'medium',
  fullScreen = false
}) => {
  return (
    <div className={`${styles.loading} ${fullScreen ? styles.fullScreen : ''}`}>
      <div className={`${styles.spinner} ${styles[size]}`} />
      <p>{message}</p>
    </div>
  );
};
```

**Usage:**
```typescript
// Before
if (loading) {
  return <div className={styles.loading}>Loading...</div>;
}

// After
if (loading) return <Loading />;
// or
if (loading) return <Loading message="Loading your assessment..." />;
```

**Impact:** Consistent loading UI, eliminates 65+ lines

---

#### 2.2 ErrorDisplay Component

**Create:** `client/src/components/common/ErrorDisplay.tsx`
```typescript
interface ErrorDisplayProps {
  error: string | null;
  onRetry?: () => void;
  onDismiss?: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  onRetry,
  onDismiss
}) => {
  if (!error) return null;

  return (
    <div className={styles.error}>
      <p>{error}</p>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryButton}>
          Try Again
        </button>
      )}
      {onDismiss && (
        <button onClick={onDismiss} className={styles.dismissButton}>
          ×
        </button>
      )}
    </div>
  );
};
```

**Impact:** Consistent error handling, enables retry/dismiss

---

#### 2.3 ProgressBar Component

**Create:** `client/src/components/common/ProgressBar.tsx`
```typescript
interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  label?: string;
  showPercentage?: boolean;
  color?: 'teal' | 'purple' | 'blue';
  size?: 'small' | 'medium' | 'large';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = false,
  color = 'teal',
  size = 'medium'
}) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`${styles.progressBarContainer} ${styles[size]}`}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.progressBar}>
        <div
          className={`${styles.progressFill} ${styles[color]}`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
      {showPercentage && (
        <div className={styles.percentage}>{Math.round(percentage)}%</div>
      )}
    </div>
  );
};
```

**Usage:**
```typescript
// Before (6 lines)
<div className={styles.progressBar}>
  <div className={styles.progressFill} style={{ width: `${percentage}%` }} />
</div>
<span>{percentage}%</span>

// After (1 line)
<ProgressBar value={score} showPercentage />
```

**Impact:** Eliminates 60+ lines across 6 files

---

#### 2.4 EmptyState Component

**Create:** `client/src/components/common/EmptyState.tsx`
```typescript
interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  message?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  message,
  action
}) => {
  return (
    <div className={styles.emptyState}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3>{title}</h3>
      {message && <p>{message}</p>}
      {action && (
        <button onClick={action.onClick} className={styles.actionButton}>
          {action.label}
        </button>
      )}
    </div>
  );
};
```

**Impact:** Eliminates 40+ lines, consistent empty state design

---

#### 2.5 Modal Component

**Create:** `client/src/components/common/Modal.tsx`
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium'
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={`${styles.modal} ${styles[size]}`}>
        {title && (
          <div className={styles.header}>
            <h2>{title}</h2>
            <button onClick={onClose} className={styles.closeButton}>×</button>
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
```

**Impact:** Reusable modals with accessibility built-in

---

### **Phase 3: Utility Functions & Data Extraction (Week 2-3)**

#### 3.1 Thread Utilities

**Create:** `client/src/utils/threadUtils.ts`
```typescript
import type { ThreadScores, ThreadScore } from '../services/api/types';

export function getLowestThreads(
  threadScores: ThreadScores,
  count: number = 2
): Array<{ name: string; score: number; percentage: number }> {
  return Object.entries(threadScores)
    .map(([name, data]) => ({
      name,
      score: data.raw || data.score,
      percentage: data.percentage
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, count);
}

export function getThreadColor(percentage: number): string {
  if (percentage >= 83) return '#10B981';
  if (percentage >= 58) return '#F59E0B';
  if (percentage >= 33) return '#EF4444';
  return '#991B1B';
}

export function getCapacityLevel(percentage: number): string {
  if (percentage >= 83) return 'High';
  if (percentage >= 58) return 'Moderate';
  if (percentage >= 33) return 'Low';
  return 'Very Low';
}
```

**Impact:** Eliminates duplicate thread logic in 3+ files

---

#### 3.2 Date Utilities

**Create:** `client/src/utils/dateUtils.ts`
```typescript
export function formatDate(date: string | Date, format: 'short' | 'long' = 'short'): string {
  const d = new Date(date);

  if (format === 'short') {
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export function formatRelativeTime(date: string | Date): string {
  const d = new Date(date);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return formatDate(date, 'short');
}

export function isOverdue(dueDate: string | Date): boolean {
  return new Date(dueDate) < new Date();
}
```

**Impact:** Consistent date formatting across app

---

#### 3.3 Extract Thread Practice Data

**Create:** `client/src/data/threadPracticeGuides.ts`
```typescript
export interface ThreadPracticeGuide {
  name: string;
  poles: string[];
  collapseDescription: string;
  practiceGuidance: string;
  holdFocus: 'halt' | 'observe' | 'look' | 'decide';
}

export const THREAD_PRACTICE_GUIDES: Record<string, ThreadPracticeGuide> = {
  presence: {
    name: 'PRESENCE',
    poles: ['Within ↔ Between', 'Here ↔ Elsewhere'],
    collapseDescription: 'In stressful moments, you either withdraw completely and shut people out, OR you lose yourself trying to please everyone and can\'t tell what you actually want. You\'re often physically present but mentally elsewhere, replaying the past or worrying about the future.',
    practiceGuidance: 'Practice noticing when you\'re physically present but mentally absent. In conversations, notice when you\'re relating to an idea about someone (\'narcissist,\' \'liberal,\' \'my difficult mother\') rather than the actual person in front of you.',
    holdFocus: 'observe'
  },
  consent: {
    name: 'CONSENT',
    poles: ['Yes ↔ No', 'Self ↔ Other'],
    collapseDescription: 'You either push your way forward and need others to agree with you, OR you give in completely and lose track of what you actually need. Setting a boundary feels like rejection; hearing \'no\' feels personal.',
    practiceGuidance: 'Practice saying \'no\' to small things while staying warm and connected. Notice when you\'re trying to convince someone or change their mind rather than simply allowing them their experience.',
    holdFocus: 'halt'
  },
  memory: {
    name: 'MEMORY',
    poles: ['Given ↔ Chosen', 'Telling ↔ Told'],
    collapseDescription: 'You\'re either stuck replaying old wounds and patterns ("this always happens to me"), OR you dismiss the past entirely and chase what\'s next without learning from it. Your identity feels either fixed by your history or fragmented into constant reinvention.',
    practiceGuidance: 'Notice which stories you tell about yourself repeatedly. Ask: \'Am I telling this story, or is it telling me?\' Can you hold your history as true without letting it determine your future?',
    holdFocus: 'look'
  },
  pause: {
    name: 'PAUSE',
    poles: ['Not Yet ↔ Now', 'More ↔ Enough'],
    collapseDescription: 'You either rush to resolve things immediately ("just do something!") OR you delay endlessly and can\'t move forward ("I\'m not ready yet"). You struggle to sense when it\'s time to act versus when more waiting is needed.',
    practiceGuidance: 'Before responding or acting, pause for three conscious breaths. Notice: Am I acting from urgency and anxiety, or from a sense of readiness and fullness?',
    holdFocus: 'halt'
  },
  embodiment: {
    name: 'EMBODIMENT',
    poles: ['Think ↔ Feel', 'Stay ↔ Go'],
    collapseDescription: 'You either disconnect from your body and live entirely in your head, OR you get overwhelmed by every sensation and can\'t function. Physical discomfort either gets ignored or floods your whole experience.',
    practiceGuidance: 'Set a timer to check in with your body three times daily. Simply notice: What sensations are present right now? Can you name them without either ignoring them or getting lost in them?',
    holdFocus: 'observe'
  },
  uncertainty: {
    name: 'UNCERTAINTY',
    poles: ['Hide ↔ Seek', 'Threat ↔ Wonder'],
    collapseDescription: 'You either grasp for certainty and need definite answers to feel safe, OR you get lost in confusion and can\'t orient yourself at all. Not-knowing feels threatening, so you either force clarity or avoid making any commitments.',
    practiceGuidance: 'In moments of uncertainty, practice saying \'I don\'t know yet\' without immediately googling, asking someone, or forcing a decision. Can you sit with the question itself for a day?',
    holdFocus: 'look'
  },
  becoming: {
    name: 'BECOMING',
    poles: ['Same ↔ Different', 'Return ↔ Forward'],
    collapseDescription: 'You either stay stuck in old patterns despite intentions to change ("I\'m just not that kind of person"), OR you constantly chase growth and new ideas without actually embodying them. Real transformation feels either impossible or superficial.',
    practiceGuidance: 'Notice when you say \'I\'m just not that kind of person.\' Ask: Who am I becoming that I wasn\'t before? Are you repeating old loops or genuinely different?',
    holdFocus: 'decide'
  }
};
```

**Impact:** Eliminates 350+ lines of embedded data from components

---

### **Phase 4: Advanced Hooks (Week 3)**

#### 4.1 Tag Management Hook

**Create:** `client/src/hooks/useTags.ts`
```typescript
export function useTags(initialTags: string[] = []) {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [tagInput, setTagInput] = useState('');

  const addTag = useCallback(() => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags(prev => [...prev, trimmed]);
      setTagInput('');
    }
  }, [tagInput, tags]);

  const removeTag = useCallback((tag: string) => {
    setTags(prev => prev.filter(t => t !== tag));
  }, []);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  }, [addTag]);

  return {
    tags,
    tagInput,
    setTagInput,
    addTag,
    removeTag,
    handleKeyPress,
    setTags
  };
}
```

**Impact:** Eliminates duplicate tag logic in Journal.tsx

---

#### 4.2 Filter Hook

**Create:** `client/src/hooks/useFilter.ts`
```typescript
export function useFilter<T>(
  items: T[],
  filterFn: (item: T, filter: string) => boolean,
  initialFilter: string = 'all'
) {
  const [filter, setFilter] = useState(initialFilter);

  const filteredItems = useMemo(() => {
    if (filter === 'all') return items;
    return items.filter(item => filterFn(item, filter));
  }, [items, filter, filterFn]);

  return {
    filter,
    setFilter,
    filteredItems
  };
}
```

**Usage:**
```typescript
// Before: TrainingAdmin.tsx (6+ lines)
const [filter, setFilter] = useState('all');
const filteredModules = modules.filter(m => {
  if (filter === 'all') return true;
  if (filter === 'published') return m.published;
  return m.tier === filter;
});

// After: TrainingAdmin.tsx (2 lines)
const { filter, setFilter, filteredItems: filteredModules } = useFilter(
  modules,
  (m, f) => f === 'published' ? m.published : m.tier === f
);
```

---

## 📋 Implementation Roadmap

### **Week 1: Foundation**
- [ ] Create `useAsync` hook
- [ ] Create `useForm` hook
- [ ] Update all components to import types from `services/api/types.ts`
- [ ] Create `Loading`, `ErrorDisplay` components
- **Estimated Impact:** ~400 lines eliminated

### **Week 2: Components & Utilities**
- [ ] Create `ProgressBar`, `EmptyState`, `Modal` components
- [ ] Create `threadUtils.ts`, `dateUtils.ts`
- [ ] Extract thread practice data to `threadPracticeGuides.ts`
- [ ] Create `useTags` and `useFilter` hooks
- **Estimated Impact:** ~500 lines eliminated

### **Week 3: Refactoring**
- [ ] Refactor all components to use new hooks and components
- [ ] Remove duplicate code
- [ ] Test all refactored components
- **Estimated Impact:** ~300+ lines eliminated

### **Week 4: Polish & Documentation**
- [ ] Write tests for custom hooks
- [ ] Document usage patterns
- [ ] Update developer guidelines
- [ ] Code review and cleanup

---

## 📊 Expected Outcomes

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Duplicate Code Lines | ~1,360 | ~100 | **93% reduction** |
| Custom Hooks | 0 | 5+ | Better reusability |
| Reusable Components | ~3 | 8+ | Consistent UI |
| Type Import Points | 15+ | 1 | Single source of truth |
| Data Files | 0 | 2+ | Separated concerns |
| Average Component Size | 250 lines | 120 lines | **52% smaller** |

---

## 🎯 Priority Recommendations

**Must Do (High ROI):**
1. ✅ Type centralization (15 files affected, prevents type drift)
2. ✅ Extract thread practice data (350+ lines)
3. ✅ `useAsync` hook (eliminates most loading/error duplication)
4. ✅ `ProgressBar` component (10+ occurrences)

**Should Do (Medium ROI):**
5. `useForm` hook (5 files)
6. Thread utility functions (3+ files)
7. `Loading`, `ErrorDisplay` components

**Nice to Have (Lower ROI but good practice):**
8. `Modal` component
9. Additional utility hooks
10. EmptyState component

---

## Implementation Status

- [ ] Phase 1: Foundation (Week 1)
- [ ] Phase 2: Reusable Components (Week 2)
- [ ] Phase 3: Utility Functions & Data Extraction (Week 2-3)
- [ ] Phase 4: Advanced Hooks (Week 3)
