# Platform Documentation Consolidation Plan

**Date:** December 27, 2025
**Purpose:** Consolidate overlapping platform planning documents into a coherent documentation structure

---

## Current State Analysis

### Identified Overlapping Documents

1. **`threads-journey-platform-plan.md`** (1,428 lines)
   - Strategic business plan
   - Revenue models, marketing, growth projections
   - User journey and features
   - Created: 2025-12-23
   - Status: Planning Phase

2. **`threads-journey-platform-implementation-plan.md`** (1,736 lines)
   - Technical implementation specifics
   - Database schemas, API endpoints
   - 9-week development timeline
   - Stack: NestJS, React, MongoDB, Stripe
   - Status: Technical blueprint

3. **`threads-framework-implementation.md`** (275 lines)
   - Review of collapse patterns implementation
   - Documents what's already live
   - Status: Completed features review

4. **`threads-training-implementation-summary.md`** (304 lines)
   - Summary of training system implementation
   - Backend/Frontend completion status
   - Implementation date: December 25, 2025
   - Status: **COMPLETED**

5. **`threads-capacity-training-system.md`** (1,175 lines)
   - Conceptual design of training system
   - How assessment results drive training
   - Progressive capacity building
   - Status: Design/Planning

6. **`threads-capacity-training-interventions.md`** (887 lines)
   - Specific intervention strategies
   - Thread-specific exercises
   - Status: Content design

7. **`TRAINING-CONTENT-ARCHITECTURE.md`** (834 lines)
   - Module structure (28 modules: 7 threads × 4 tiers)
   - Content types (slides, meditations, exercises)
   - Speechify integration
   - Status: Content framework

8. **`threads-training-pedagogy.md`** (658 lines)
   - Educational philosophy
   - Learning principles
   - Status: Pedagogical foundation

---

## Problems Identified

### 1. **Duplication & Confusion**
- Multiple documents describe the same features from different angles
- Unclear which document represents current vs. planned state
- Implementation plan vs. strategic plan scattered

### 2. **Status Ambiguity**
- Some documents marked "Planning" but features are already built
- No clear "source of truth" for what's completed vs. in-progress vs. planned

### 3. **Audience Mismatch**
- Business strategy mixed with technical implementation
- Developer-focused content mixed with stakeholder presentations

### 4. **Maintenance Burden**
- Changes require updates across multiple documents
- Risk of documents drifting out of sync

---

## Consolidation Strategy

### Principle: Separate by Audience, Status, and Purpose

Create **four consolidated documents** that serve distinct needs:

---

## Proposed New Structure

### 1. **PLATFORM-OVERVIEW.md** (Stakeholder-facing)
**Audience:** Investors, partners, strategic decision-makers
**Purpose:** High-level vision, business model, market positioning
**Consolidates:**
- `threads-journey-platform-plan.md` (strategic sections)
- Executive summary content from implementation docs

**Contents:**
- Executive Summary
- Vision & Value Proposition
- Business Model & Revenue Streams
- Market Analysis & Growth Strategy
- User Journey & Experience
- Gateway to Threads Ecosystem
- Success Metrics & Projections

**Status Tags:** Use clear labels (LIVE, IN DEVELOPMENT, PLANNED)

---

### 2. **PLATFORM-TECHNICAL-SPEC.md** (Developer-facing)
**Audience:** Engineering team, technical contributors
**Purpose:** Complete technical implementation reference
**Consolidates:**
- `threads-journey-platform-implementation-plan.md`
- Technical sections from other docs

**Contents:**
- System Architecture
- Database Schemas (all collections)
- API Endpoints & Routes
- Authentication & Authorization
- Payment Integration (Stripe)
- Email System (AWS SES)
- Infrastructure (AWS Amplify, App Runner)
- Development Roadmap
- Testing & QA Strategy

**Status Tags:** IMPLEMENTED, IN PROGRESS, TODO

---

### 3. **TRAINING-SYSTEM-DESIGN.md** (Product & Content-facing)
**Audience:** Content creators, instructional designers, product managers
**Purpose:** Complete training system design & content architecture
**Consolidates:**
- `threads-capacity-training-system.md`
- `threads-capacity-training-interventions.md`
- `TRAINING-CONTENT-ARCHITECTURE.md`
- `threads-training-pedagogy.md`

**Contents:**
- **Part 1: System Design**
  - How assessment results drive training
  - Personalization algorithms
  - Progression framework (Foundation → Building → Deepening → Mastery)

- **Part 2: Content Architecture**
  - 28 Module structure (7 threads × 4 tiers)
  - Content types (slides, meditations, exercises, writing prompts)
  - Speechify integration specs

- **Part 3: Pedagogical Foundation**
  - Learning principles
  - Adult learning theory integration
  - Somatic & experiential methods

- **Part 4: Intervention Library**
  - Thread-specific interventions
  - Practice assignments
  - Guided meditations
  - Reflective writing prompts

**Status Tags:** CONTENT READY, IN CREATION, PLANNED

---

### 4. **IMPLEMENTATION-STATUS.md** (Team-facing)
**Audience:** Entire team, project tracking
**Purpose:** Living document tracking current state
**Consolidates:**
- `threads-framework-implementation.md`
- `threads-training-implementation-summary.md`
- Status sections from all docs

**Contents:**
- **What's Live** (Completed Features)
  - Quick Profile Assessment ✓
  - Personal Journey Map Assessment ✓
  - Collapse Pattern Detection ✓
  - Training Module System ✓
  - Journal & Practice Tools ✓
  - User Authentication ✓

- **In Development** (Active Work)
  - [List current sprint items]

- **Planned** (Roadmap)
  - Phase 2: Advanced features
  - Phase 3: Facilitated assessments
  - Phase 4: Community features

- **Recent Completions** (Changelog)
  - [Date-stamped completion notes]

**Format:** Living document, updated weekly

---

## Migration Plan

### Phase 1: Create Consolidated Documents (Week 1)

**Day 1-2: Extract & Organize**
1. Create the 4 new consolidated documents
2. Extract content from source documents
3. Remove duplication
4. Organize by audience/purpose

**Day 3-4: Review & Refine**
5. Add cross-references between docs
6. Ensure consistency in terminology
7. Add clear status tags throughout
8. Create table of contents for each

**Day 5: Validation**
9. Team review of consolidated docs
10. Verify all critical information preserved
11. Check that each doc serves its audience

### Phase 2: Archive Old Documents (Week 1)

**Create `/docs-archive/` folder:**
```
docs-archive/
├── PRE-CONSOLIDATION-2025-12-27/
│   ├── threads-journey-platform-plan.md
│   ├── threads-journey-platform-implementation-plan.md
│   ├── threads-framework-implementation.md
│   ├── threads-training-implementation-summary.md
│   ├── threads-capacity-training-system.md
│   ├── threads-capacity-training-interventions.md
│   ├── TRAINING-CONTENT-ARCHITECTURE.md
│   └── threads-training-pedagogy.md
└── README.md (explains why archived, points to new docs)
```

### Phase 3: Update References (Week 2)

**Update references in:**
- README.md
- CONTRIBUTING.md
- Code comments
- Wiki/documentation links
- Team communication channels

---

## Ongoing Maintenance

### Document Ownership

| Document | Owner | Update Frequency |
|----------|-------|------------------|
| PLATFORM-OVERVIEW.md | Product Lead | Quarterly (or major pivots) |
| PLATFORM-TECHNICAL-SPEC.md | Tech Lead | As architecture changes |
| TRAINING-SYSTEM-DESIGN.md | Content Lead | As content evolves |
| IMPLEMENTATION-STATUS.md | Project Manager | Weekly |

### Change Process

1. **Single Source of Truth:** Each piece of information lives in ONE document
2. **Cross-Reference Don't Duplicate:** Link between docs rather than copy
3. **Status Tags Required:** Every feature must have a status tag
4. **Date Stamps:** All major updates include date stamp
5. **Changelog:** IMPLEMENTATION-STATUS.md maintains running changelog

---

## Benefits of This Consolidation

✅ **Clarity:** Clear separation by audience and purpose
✅ **Accuracy:** Single source of truth for each type of information
✅ **Maintainability:** Updates happen in one place
✅ **Onboarding:** New team members know where to look
✅ **Decision-Making:** Stakeholders have clear strategic view
✅ **Development:** Engineers have complete technical reference
✅ **Content Creation:** Clear framework for building training modules
✅ **Project Tracking:** Living status document shows progress

---

## Next Steps

### Immediate Actions

1. **Review this plan** with team/stakeholders
2. **Assign document owners** for the 4 new docs
3. **Set consolidation sprint** (1-2 weeks)
4. **Create consolidated documents** following the structure above
5. **Archive old documents** with clear README
6. **Update all references** to point to new structure
7. **Establish maintenance cadence** for living documents

### Questions to Resolve

- [ ] Who should own each consolidated document?
- [ ] What's the approval process for major changes?
- [ ] Should we use a docs folder (e.g., `/docs/`) or keep in root?
- [ ] Do we need additional audience-specific views?
- [ ] Should IMPLEMENTATION-STATUS.md be a GitHub Project instead?

---

## Appendix: Document Mapping

### Content That Goes Where

**Strategic/Business Content → PLATFORM-OVERVIEW.md**
- Business model & revenue streams
- Market positioning & growth strategy
- User journey & experience design
- Success metrics & projections

**Technical Implementation → PLATFORM-TECHNICAL-SPEC.md**
- All database schemas
- All API endpoints
- Infrastructure setup
- Development timeline & phases

**Training Design & Content → TRAINING-SYSTEM-DESIGN.md**
- How training is generated from assessments
- Module structure (7 threads × 4 tiers)
- Content types & creation process
- Intervention strategies
- Pedagogical principles

**Current State Tracking → IMPLEMENTATION-STATUS.md**
- What's live right now
- What's in development
- What's planned for future
- Recent completions (changelog)

---

**End of Consolidation Plan**
