import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styles from './Apply.module.css';

// Cohort options by tier
const cohortOptions = {
  tier1: [
    { value: 'jan2025-virtual', label: 'January 2025 - Virtual', delivery: 'virtual' },
    { value: 'feb2025-portland', label: 'February 2025 - Portland, OR', delivery: 'in-person' },
    { value: 'mar2025-virtual', label: 'March 2025 - Virtual', delivery: 'virtual' },
    { value: 'apr2025-durham', label: 'April 2025 - Durham, NC', delivery: 'in-person' },
    { value: 'may2025-virtual', label: 'May 2025 - Virtual', delivery: 'virtual' },
    { value: 'flexible', label: 'Flexible - Any available workshop', delivery: '' }
  ],
  tier2: [
    { value: 'spring2025-virtual', label: 'Spring 2025 - Virtual Cohort', delivery: 'virtual' },
    { value: 'summer2025-portland', label: 'Summer 2025 - Portland, OR (In-Person)', delivery: 'in-person' },
    { value: 'fall2025-durham', label: 'Fall 2025 - Durham, NC (In-Person)', delivery: 'in-person' },
    { value: 'winter2026-virtual', label: 'Winter 2026 - Virtual Cohort', delivery: 'virtual' },
    { value: 'flexible', label: 'Flexible - Any available cohort', delivery: '' }
  ],
  tier3: [
    { value: 'summer2025-portland', label: 'Summer 2025 - Portland, OR (In-Person)', delivery: 'in-person' },
    { value: 'fall2025-durham', label: 'Fall 2025 - Durham, NC (In-Person)', delivery: 'in-person' },
    { value: 'spring2026-virtual', label: 'Spring 2026 - Virtual Cohort (Limited)', delivery: 'virtual' },
    { value: 'flexible', label: 'Flexible - Any available cohort', delivery: '' }
  ]
};

// Tier configuration data
const tierConfig = {
  tier1: {
    name: 'Tier 1: Foundations',
    subtitle: 'Understanding the Framework',
    duration: '4 hours',
    format: 'Half-day workshop or two 2-hour sessions',
    delivery: 'In-person or virtual',
    cohortSize: '8-24 participants',
    prerequisites: 'None',
    outcome: 'Foundations Certificate of Completion',
    price: '$295',
    purpose: 'Tier 1 provides a complete introduction to the Threads of Becoming framework. Participants leave with conceptual understanding, personal insight into their own tension patterns, and the ability to recognize threads in everyday situations.',
    audienceDescription: 'This tier serves individuals seeking personal growth and self-understanding, as well as professionals exploring whether to pursue professional development training.',
    perfectFor: [
      'Individuals seeking personal clarity and growth',
      'Team leaders wanting to understand tension dynamics',
      'Educators introducing conflict navigation tools',
      'Ministers and clergy in pastoral care roles',
      'Anyone curious about the Threads framework'
    ],
    requirements: [
      'Attend full 4-hour session',
      'Participate in experiential exercises',
      'Complete self-reflection worksheet'
    ],
    materialsIncluded: [
      'Threads Visual Map (print version)',
      'Thread Discovery Worksheet',
      'Personal Collapse Pattern Assessment',
      'Seven Threads Quick Reference Card',
      'Certificate of Completion'
    ]
  },
  tier2: {
    name: 'Tier 2: Professional',
    subtitle: 'Applying with Individuals & Dyads',
    duration: '16 hours + 6 hours supervision',
    format: '4 weeks (4 hours/week)',
    delivery: 'In-person or virtual cohort',
    cohortSize: '6-12 participants',
    prerequisites: 'Foundations Certificate + professional helping role (coach, therapist, clergy, counselor, mediator)',
    outcome: 'Professional Development Certificate',
    price: '$1,200',
    purpose: 'Tier 2 develops practitioners who can skillfully apply the Threads framework in one-on-one and dyadic (couples, pairs) contexts. Participants master the Threadwork protocol and develop diagnostic accuracy, collapse correction skills, and ethical judgment.',
    audienceDescription: 'Designed for helping professionals who work with individuals and dyads (couples, pairs).',
    perfectFor: [
      'Coaches working with individual clients',
      'Clergy providing pastoral care',
      'Therapists integrating Threads with clinical practice',
      'Mediators working with two-party conflicts',
      'Counselors and spiritual directors'
    ],
    requirements: [
      'Complete Tier 1 Foundations',
      'Hold active professional helping role',
      'Attend all four weekly training sessions',
      'Complete 6 hours of supervised practice',
      'Conduct and record practice Threadwork sessions',
      'Submit written case study',
      'Pass observed session assessment'
    ],
    materialsIncluded: [
      'Threadwork Protocol Manual',
      'Diagnostic Guide for all seven threads',
      'Case Study Library',
      'Supervision session recordings',
      'Ethics & Scope of Practice Guide',
      'Professional Development Certificate'
    ]
  },
  tier3: {
    name: 'Tier 3: Facilitator',
    subtitle: 'Leading Groups & Transforming Systems',
    duration: '24 hours + 20-hour practicum',
    format: '6 weeks (4 hours/week) + practicum',
    delivery: 'In-person cohort (some virtual options)',
    cohortSize: '6-10 participants',
    prerequisites: 'Tier 2 completion + 1 year of practice using Threads professionally',
    outcome: 'Facilitator Training Certificate',
    price: '$3,500',
    purpose: 'Tier 3 develops facilitators who can guide multi-party processes, recognize and transform systemic collapse, and lead organizations through complex tensions. This is advanced training for those working at organizational and systems scale.',
    audienceDescription: 'Designed for organizational consultants, senior clergy, executive coaches, and change practitioners working with groups, teams, and institutions.',
    perfectFor: [
      'Organizational development consultants',
      'Senior clergy leading congregations',
      'Executive coaches working with leadership teams',
      'Change management practitioners',
      'Group facilitators and team coaches'
    ],
    requirements: [
      'Complete Tier 2 Professional Development',
      'Demonstrate 1 year of practice using Threads',
      'Attend all six weekly training sessions',
      'Complete 20-hour supervised practicum',
      'Lead observed group facilitation',
      'Submit practicum portfolio with case documentation',
      'Pass final facilitator assessment'
    ],
    materialsIncluded: [
      'Organizational Field Guide',
      'Discernment Circle Protocols',
      'Multi-Party Facilitation Manual',
      'Systemic Collapse Diagnostics Guide',
      'Practicum supervision recordings',
      'Advanced Ethics Manual',
      'Facilitator Training Certificate'
    ]
  }
};

const Apply: React.FC = () => {
  const { tier } = useParams<{ tier: string }>();
  const [searchParams] = useSearchParams();
  const [cohort, setCohort] = useState('');
  const [deliveryPreference, setDeliveryPreference] = useState('');

  const tierKey = tier as keyof typeof tierConfig;
  const config = tierConfig[tierKey];

  useEffect(() => {
    const cohortParam = searchParams.get('cohort');
    if (cohortParam) {
      setCohort(cohortParam);

      // Auto-fill delivery preference based on cohort options
      const tierCohorts = cohortOptions[tierKey as keyof typeof cohortOptions];
      if (tierCohorts) {
        const selectedCohort = tierCohorts.find(c => c.value === cohortParam);
        if (selectedCohort && selectedCohort.delivery) {
          setDeliveryPreference(selectedCohort.delivery);
        }
      }
    }
  }, [searchParams, tierKey]);

  if (!config) {
    return (
      <div className={styles.apply}>
        <section className={styles.hero}>
          <div className="container">
            <h1>Application Not Found</h1>
            <p>The tier you're looking for doesn't exist.</p>
            <a href="/training" className={styles.backButton}>← Back to Training</a>
          </div>
        </section>
      </div>
    );
  }

  // Format cohort name for display
  const formatCohortName = (cohortValue: string): string => {
    const tierCohorts = cohortOptions[tierKey as keyof typeof cohortOptions];
    if (tierCohorts) {
      const cohort = tierCohorts.find(c => c.value === cohortValue);
      if (cohort) return cohort.label;
    }
    return cohortValue;
  };

  // Get cohort options for current tier
  const currentCohortOptions = cohortOptions[tierKey as keyof typeof cohortOptions] || [];

  return (
    <div className={styles.apply}>
      {/* Hero Section */}
      <section className={`${styles.hero} ${styles[`${tierKey}Hero`]}`}>
        <div className="container">
          <h1>{config.name}</h1>
          <p className={styles.subtitle}>{config.subtitle}</p>
          {cohort && (
            <div className={styles.cohortBadge}>
              <span className={styles.cohortLabel}>Applying for:</span>
              <span className={styles.cohortName}>{formatCohortName(cohort)}</span>
            </div>
          )}
        </div>
      </section>

      {/* Program Overview */}
      <section className={`${styles.overview} section-lg`}>
        <div className="container">
          <h2>Program Overview</h2>

          <div className={styles.quickFacts}>
            <div className={styles.factCard}>
              <h4>Duration</h4>
              <p>{config.duration}</p>
            </div>
            <div className={styles.factCard}>
              <h4>Format</h4>
              <p>{config.format}</p>
            </div>
            <div className={styles.factCard}>
              <h4>Delivery</h4>
              <p>{config.delivery}</p>
            </div>
            <div className={styles.factCard}>
              <h4>Cohort Size</h4>
              <p>{config.cohortSize}</p>
            </div>
            <div className={styles.factCard}>
              <h4>Investment</h4>
              <p>{config.price}</p>
            </div>
            <div className={styles.factCard}>
              <h4>Outcome</h4>
              <p>{config.outcome}</p>
            </div>
          </div>

          <div className={styles.purposeSection}>
            <h3>Purpose</h3>
            <p>{config.purpose}</p>
          </div>

          <div className={styles.audienceSection}>
            <h3>Perfect For</h3>
            <p>{config.audienceDescription}</p>
            <ul className={styles.audienceList}>
              {config.perfectFor.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Requirements & What's Included */}
      <section className={`${styles.details} section-lg`}>
        <div className="container">
          <div className={styles.detailsGrid}>
            <div className={styles.detailCard}>
              <h3>Prerequisites</h3>
              <p>{config.prerequisites}</p>
            </div>

            <div className={styles.detailCard}>
              <h3>Completion Requirements</h3>
              <ul>
                {config.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            <div className={styles.detailCard}>
              <h3>Materials Included</h3>
              <ul>
                {config.materialsIncluded.map((material, idx) => (
                  <li key={idx}>{material}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className={`${styles.process} section-lg`}>
        <div className="container">
          <h2>Application Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h4>Submit Application</h4>
              <p>Complete the application form below. We review applications on a rolling basis.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h4>Review & Response</h4>
              <p>We'll review your application and respond within 5 business days with next steps.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h4>Confirmation</h4>
              <p>Once accepted, you'll receive cohort details, payment information, and pre-work materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className={`${styles.formSection} section-lg`}>
        <div className="container">
          <div className={styles.formContainer}>
            <h2>Apply for {config.name}</h2>
            <p className={styles.formIntro}>
              Complete this application to be considered for an upcoming cohort. We'll be in touch within 5 business days.
            </p>

            <form className={styles.form}>
              {/* Personal Information */}
              <div className={styles.formSection}>
                <h3>Personal Information</h3>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className={styles.input} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" className={styles.input} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="location">Location (City, State/Country)</label>
                  <input type="text" id="location" name="location" className={styles.input} />
                </div>
              </div>

              {/* Professional Background (for Tier 2 & 3) */}
              {tierKey !== 'tier1' && (
                <div className={styles.formSection}>
                  <h3>Professional Background</h3>

                  <div className={styles.formGroup}>
                    <label htmlFor="role">Current Professional Role *</label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      placeholder="e.g., Licensed Therapist, Executive Coach, Pastor"
                      required
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="yearsExperience">Years in Helping/Leadership Role *</label>
                    <select id="yearsExperience" name="yearsExperience" required className={styles.input}>
                      <option value="">Select...</option>
                      <option value="0-2">0-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="credentials">Relevant Credentials/Certifications</label>
                    <input
                      type="text"
                      id="credentials"
                      name="credentials"
                      placeholder="e.g., LMFT, ICF-PCC, MDiv"
                      className={styles.input}
                    />
                  </div>
                </div>
              )}

              {/* Cohort Selection */}
              <div className={styles.formSection}>
                <h3>Cohort Preference</h3>

                <div className={styles.formGroup}>
                  <label htmlFor="cohortPreference">Preferred Cohort *</label>
                  <select
                    id="cohortPreference"
                    name="cohortPreference"
                    required
                    className={styles.input}
                    value={cohort}
                    onChange={(e) => {
                      const newCohort = e.target.value;
                      setCohort(newCohort);
                      // Update delivery preference when cohort changes
                      const selectedCohort = currentCohortOptions.find(c => c.value === newCohort);
                      if (selectedCohort && selectedCohort.delivery) {
                        setDeliveryPreference(selectedCohort.delivery);
                      }
                    }}
                  >
                    <option value="">Select a cohort...</option>
                    {currentCohortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="deliveryPreference">Delivery Format Preference</label>
                  <select
                    id="deliveryPreference"
                    name="deliveryPreference"
                    className={styles.input}
                    value={deliveryPreference}
                    onChange={(e) => setDeliveryPreference(e.target.value)}
                  >
                    <option value="">No preference</option>
                    <option value="virtual">Virtual only</option>
                    <option value="in-person">In-person only</option>
                    <option value="hybrid">Open to either</option>
                  </select>
                </div>
              </div>

              {/* Motivation & Goals */}
              <div className={styles.formSection}>
                <h3>Your Journey</h3>

                <div className={styles.formGroup}>
                  <label htmlFor="whyApplying">Why are you interested in this training? *</label>
                  <textarea
                    id="whyApplying"
                    name="whyApplying"
                    rows={4}
                    required
                    className={styles.textarea}
                    placeholder="What draws you to the Threads framework? What do you hope to gain?"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="applicationContext">How do you plan to use what you learn? *</label>
                  <textarea
                    id="applicationContext"
                    name="applicationContext"
                    rows={4}
                    required
                    className={styles.textarea}
                    placeholder="Describe your current work context and how you envision applying Threads..."
                  />
                </div>

                {tierKey === 'tier1' && (
                  <div className={styles.formGroup}>
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" name="consideringTier2" />
                      <span>I'm interested in pursuing Tier 2 Professional Development training in the future</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Additional Information */}
              <div className={styles.formSection}>
                <h3>Additional Information</h3>

                <div className={styles.formGroup}>
                  <label htmlFor="hearAbout">How did you hear about this training?</label>
                  <select id="hearAbout" name="hearAbout" className={styles.input}>
                    <option value="">Select...</option>
                    <option value="website">Website</option>
                    <option value="referral">Personal referral</option>
                    <option value="social-media">Social media</option>
                    <option value="professional-network">Professional network</option>
                    <option value="workshop">Attended a workshop</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="questions">Questions or Special Considerations</label>
                  <textarea
                    id="questions"
                    name="questions"
                    rows={3}
                    className={styles.textarea}
                    placeholder="Anything else we should know? Questions about scholarships, accessibility needs, etc."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" name="scholarshipInterest" />
                    <span>I'm interested in learning about scholarship opportunities</span>
                  </label>
                </div>
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit Application
              </button>

              <p className={styles.privacyNote}>
                Your information will be kept confidential and used only for application processing and program communication.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className={`${styles.questions} section-lg`}>
        <div className="container">
          <h2>Questions?</h2>
          <p className={styles.questionsText}>
            Have questions about the application process, cohort schedules, or whether this tier is right for you?
          </p>
          <a href="/contact" className={styles.contactButton}>Get In Touch</a>
        </div>
      </section>
    </div>
  );
};

export default Apply;
