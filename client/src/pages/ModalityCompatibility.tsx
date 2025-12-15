import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './ModalityCompatibility.module.css';
import { modalities, compatibilityLevels, Modality } from '../data/modalityData';

const ModalityCompatibility: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<'compatibility' | 'alphabetical'>('compatibility');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModality, setSelectedModality] = useState<Modality | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'overlap' | 'differences' | 'integration'>('overview');

  // Handle deep linking
  useEffect(() => {
    const modalityId = searchParams.get('modality');
    if (modalityId) {
      const modality = modalities.find(m => m.id === modalityId);
      if (modality) {
        setSelectedModality(modality);
      }
    }
  }, [searchParams]);

  // Sort modalities
  const sortedModalities = [...modalities].sort((a, b) => {
    if (sortBy === 'compatibility') {
      const order = { 'Very High': 1, 'High': 2, 'Moderate': 3 };
      return order[a.compatibility] - order[b.compatibility];
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  // Filter modalities by search term
  const filteredModalities = sortedModalities.filter(modality =>
    modality.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    modality.coreQuestion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (modality: Modality) => {
    setSelectedModality(modality);
    setActiveTab('overview');
    setSearchParams({ modality: modality.id });
  };

  const closeModal = () => {
    setSelectedModality(null);
    setSearchParams({});
  };

  const handlePrint = () => {
    window.print();
  };

  // Get modality-specific example
  const getModalityExample = (modalityId: string): string => {
    const examples: Record<string, string> = {
      nvc: "A couple in couples therapy has done NVC work—they hear each other's needs perfectly. He needs solitude to recharge (autonomy). She needs connection to feel secure (interdependence). Both needs are legitimate, both are heard clearly, and the tension remains. The therapist uses Threads to name this as the PRESENCE thread (Within/Between), helping them see it's not a communication problem to solve but an ongoing polarity to navigate together.",
      polarity: "An organization uses Polarity Management to map Centralization vs. Decentralization. Threads identifies this as a surface expression of the CONSENT thread (Self/Other). Leadership uses both: Polarity maps for organizational strategy, Threads for understanding why this same tension shows up in team dynamics, individual decision-making, and board governance.",
      ifs: "A client has a manager part that keeps them productive (collapsed toward achievement) and an exile that feels worthless (collapsed away from rest). The IFS therapist uses Threads to name this as the PAUSE thread (Now/Not Yet). Unburdening the exile allows the system to hold both poles: productivity AND rest, without collapse.",
      eft: "A couple is stuck in pursue-withdraw. She pursues connection (collapsed toward Between). He withdraws to regulate (collapsed toward Within). The EFT therapist uses Threads to name this as the PRESENCE thread, helping each partner see they're not enemies but holding opposite poles. Then uses EFT's softening protocol. When the withdrawer reaches, that's emergence—capacity to hold both Within AND Between.",
      act: "A client is psychologically inflexible around a traumatic memory—fused with the story (Told), avoiding the feeling (Think), stuck in rumination (There). The ACT therapist uses Threads to diagnose: MEMORY (Told), EMBODIMENT (Think), and PRESENCE (There) are all collapsed. Uses defusion for MEMORY, acceptance for EMBODIMENT, present-moment awareness for PRESENCE. Threads provides the map; ACT provides the techniques.",
      somatic: "A trauma survivor experiences freeze (collapsed into Stay when Go is needed). The Somatic Experiencing practitioner recognizes this as EMBODIMENT collapse. Uses pendulation and titration to help the nervous system complete the defensive response. As the window of tolerance expands, Threads tracks emergence: the client can now hold both Stay (groundedness) AND Go (mobility) without collapsing.",
      dbt: "A client with borderline personality disorder swings between Emotion Mind (EMBODIMENT collapse into Feel) and Reasonable Mind (collapse into Think). The DBT therapist uses Threads to see Wise Mind as holding both poles of EMBODIMENT. Teaches distress tolerance (PAUSE skills), interpersonal effectiveness (CONSENT skills), and emotion regulation (EMBODIMENT skills). DBT provides the skills; Threads provides the architecture.",
      gottman: "A couple has a perpetual problem about money. He wants to save (security). She wants to spend (experience). Gottman research says this won't be 'solved.' The therapist uses Threads to name this as UNCERTAINTY (Hide/Seek)—he's protecting against threat, she's embracing possibility. Uses Gottman's Dreams Within Conflict to honor both, then Threads to help them hold the polarity rather than trying to win.",
      bowen: "A client is emotionally cut off from their family (PRESENCE collapse toward Within, MEMORY collapse toward Chosen—rejecting the Given). The Bowen-trained coach recognizes this as pseudodifferentiation. Uses Threads to name which tensions are being avoided, then coaches differentiation work: staying connected (Between) while maintaining self (Within), honoring family history (Given) while authoring new patterns (Chosen).",
      narrative: "A client is stuck in a problem-saturated story: 'I'm always the victim.' The narrative therapist externalizes the story (movement from Told to Telling). But Threads warns: don't collapse into the Chosen pole by erasing the Given. The re-authoring honors what the 'victim' story protected (real harm was done) while opening space for new authorship (I'm also resilient).",
      mbsr: "A client practices mindfulness but uses it to avoid difficult emotions (EMBODIMENT collapse into Think, spiritually bypassing Feel). The MBSR teacher uses Threads to diagnose the collapse, then guides body scan practice specifically to build capacity for Feel. Mindfulness is the practice; Threads is the map of what's being navigated.",
      mi: "A client is ambivalent about quitting smoking. MI explores the ambivalence with empathy and OARS. Threads identifies this as BECOMING (Same/Different) and PAUSE (Not Yet/Now). The MI spirit IS the Threads stance—honoring both poles without pushing toward change. MI provides the conversational technique; Threads explains the existential architecture of ambivalence.",
      cbt: "A client has the cognitive distortion 'I must be perfect or I'm worthless' (all-or-nothing thinking, PAUSE collapse—can't hold 'good enough'). The CBT therapist challenges the distortion and teaches balanced thinking. Threads asks: what did this distortion protect? Likely UNCERTAINTY collapse (Hide from threat of rejection). Uses CBT skills while honoring the protective function.",
      focusing: "A client feels 'something stuck' in their chest but can't name it. The Focusing practitioner guides felt sense inquiry. The body shift happens: 'Oh... it's grief AND relief.' That's emergence—the body reveals EMBODIMENT holding both Feel (grief) and its opposite (relief). Focusing provides the somatic methodology; Threads names what emerged."
    };
    return examples[modalityId] || "Integration example varies by modality and client presentation.";
  };

  return (
    <div className={styles.modalityCompatibility}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Modality Compatibility</h1>
          <h2 className={`${styles.tagline} tagline`}>
            How Threads Integrates with Established Therapeutic and Developmental Frameworks
          </h2>
          <div className={styles.corePrinciple}>
            <h3>The Core Principle</h3>
            <p>
              Threads of Becoming is a diagnostic and conceptual lens, not a replacement for established modalities.
              It answers a question most frameworks don't address: <em>What do we do when both sides are legitimate,
              both are heard, and the tension still can't be resolved?</em>
            </p>
            <p>
              Most therapeutic approaches aim to resolve tension through understanding, skill-building, or processing.
              Threads provides architecture for navigating tensions that remain after resolution has been attempted—the
              permanent polarities that require ongoing navigation rather than solution.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Table Section */}
      <section className={`${styles.tableSection} section-lg`}>
        <div className="container">
          <div className={styles.tableControls}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search modalities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <div className={styles.sortControls}>
              <label>Sort by:</label>
              <button
                className={sortBy === 'compatibility' ? styles.active : ''}
                onClick={() => setSortBy('compatibility')}
              >
                Compatibility
              </button>
              <button
                className={sortBy === 'alphabetical' ? styles.active : ''}
                onClick={() => setSortBy('alphabetical')}
              >
                A-Z
              </button>
            </div>
            <button onClick={handlePrint} className={styles.printButton}>
              Print Guide
            </button>
          </div>

          <div className={styles.compatibilityLegend}>
            {Object.entries(compatibilityLevels).map(([level, info]) => (
              <div key={level} className={styles.legendItem}>
                <span className={styles.legendIcon} style={{ color: info.color }}>
                  {info.icon}
                </span>
                <strong>{level}:</strong> {info.description}
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className={styles.tableWrapper}>
            <table className={styles.modalityTable}>
              <thead>
                <tr>
                  <th>Modality</th>
                  <th>Core Question</th>
                  <th>Thread Alignment</th>
                  <th>Compatibility</th>
                  <th className={styles.printHide}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredModalities.map((modality) => (
                  <tr key={modality.id}>
                    <td>
                      <strong>{modality.name}</strong>
                    </td>
                    <td>{modality.coreQuestion}</td>
                    <td>{modality.threadAlignment}</td>
                    <td>
                      <span
                        className={styles.compatibilityBadge}
                        style={{
                          backgroundColor: compatibilityLevels[modality.compatibility].color
                        }}
                      >
                        {compatibilityLevels[modality.compatibility].icon} {modality.compatibility}
                      </span>
                    </td>
                    <td className={styles.printHide}>
                      <button
                        className={styles.viewButton}
                        onClick={() => openModal(modality)}
                      >
                        View Details →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className={styles.mobileCardView}>
            {filteredModalities.map((modality) => (
              <div key={modality.id} className={styles.mobileCard}>
                <h3>{modality.name}</h3>

                <div className={styles.mobileCardCompatibility}>
                  <span
                    className={styles.compatibilityBadge}
                    style={{
                      backgroundColor: compatibilityLevels[modality.compatibility].color
                    }}
                  >
                    {compatibilityLevels[modality.compatibility].icon} {modality.compatibility}
                  </span>
                </div>

                <div className={styles.mobileCardDetails}>
                  <p><strong>Core Question:</strong> {modality.coreQuestion}</p>
                  <p><strong>Thread Alignment:</strong> {modality.threadAlignment}</p>
                </div>

                <button
                  className={styles.viewButton}
                  onClick={() => openModal(modality)}
                  style={{ width: '100%' }}
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>

          {filteredModalities.length === 0 && (
            <p className={styles.noResults}>No modalities found matching "{searchTerm}"</p>
          )}
        </div>
      </section>

      {/* What Threads Provides / Doesn't Provide */}
      <section className={`${styles.threadsValue} section-lg`}>
        <div className="container">
          <div className={styles.valueGrid}>
            <div className={styles.valueColumn}>
              <h2>What Threads Contributes</h2>
              <ul>
                <li>
                  <strong>Universal Architecture:</strong> Seven threads that appear across all contexts—individual,
                  relational, organizational, congregational.
                </li>
                <li>
                  <strong>Diagnostic Precision:</strong> When someone is stuck, Threads identifies which existential
                  tension is activated, focusing intervention.
                </li>
                <li>
                  <strong>Collapse Recognition:</strong> Specific patterns of how people lose access to one pole.
                  Four collapse modes per thread.
                </li>
                <li>
                  <strong>Emergence Framework:</strong> Not just balance or flexibility—genuine novelty arising from
                  held tension.
                </li>
                <li>
                  <strong>Relational and Systemic Extension:</strong> The same architecture applies to couples, families,
                  teams, organizations, and communities.
                </li>
              </ul>
              <div className={styles.personalPractice}>
                <h3>Personal Practice Pathway</h3>
                <p>
                  Threads includes a Personal Practice Workbook—a skills curriculum for individuals navigating their own tensions:
                </p>
                <ul>
                  <li>Thread recognition (which tension is active?)</li>
                  <li>Collapse identification (which pole am I avoiding?)</li>
                  <li>Tension holding (staying present without forcing resolution)</li>
                  <li>Emergence awareness (noticing when something new arises)</li>
                </ul>
              </div>
            </div>

            <div className={styles.valueColumn}>
              <h2>What Threads Does NOT Provide</h2>
              <p className={styles.valueIntro}>Threads is enhancement, not replacement. It does not provide:</p>
              <ul>
                <li>Clinical licensure or expanded scope of practice</li>
                <li>Permission to diagnose or treat mental health conditions</li>
                <li>Trauma processing protocols (refer to SE, EMDR, Sensorimotor)</li>
                <li>Crisis intervention skills (use DBT's TIPP, distress tolerance modules)</li>
                <li>Behavioral repair sequences (use Gottman's repair checklists, antidotes)</li>
                <li>Parts work methodology (use IFS unburdening protocols)</li>
                <li>Evidence base (that's what we're building)</li>
              </ul>
            </div>
          </div>

          <div className={styles.honestPositioning}>
            <h3>The Honest Positioning</h3>
            <p>
              Threads is not better than these modalities. Threads does something different. It provides architecture
              for understanding what all these approaches are navigating—and offers a framework for the tensions that
              remain after resolution has been attempted.
            </p>
            <p>
              <strong>Use the modality that fits the presenting problem. Use Threads to understand the territory.
              Let each inform the other.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Decision Tree */}
      <section className={`${styles.decisionTree} section-lg`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Clinical Decision Tree</h2>
          <p className={styles.sectionIntro}>When to use Threads alongside other modalities:</p>

          <div className={styles.decisionGrid}>
            <div className={styles.decisionItem}>
              <strong>If the problem is unmet needs that could be met with better communication →</strong>
              <span>NVC</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is internal parts in conflict →</strong>
              <span>IFS (Threads identifies which tension parts organize around)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is attachment injury in couples →</strong>
              <span>EFT (Threads maps the cycle to universal tensions)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is psychological inflexibility →</strong>
              <span>ACT (Threads shows which tension flexibility is stuck around)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is trauma stored in the body →</strong>
              <span>Somatic approaches (Threads identifies EMBODIMENT; refer for processing)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is severe emotion dysregulation →</strong>
              <span>DBT (Threads provides architecture; DBT provides skills)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is negative couple interaction cycles →</strong>
              <span>Gottman (Threads explains perpetual problems)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is multigenerational patterns →</strong>
              <span>Bowen (Threads names which tensions are transmitted)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is a problem-saturated story →</strong>
              <span>Narrative Therapy (Threads ensures both Given and Chosen are honored)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is reactivity and lack of awareness →</strong>
              <span>Mindfulness (prerequisite for all Threads work)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is ambivalence about specific behavior change →</strong>
              <span>MI (Threads addresses existential ambivalence)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is cognitive distortions causing acute symptoms →</strong>
              <span>CBT (Threads asks what collapse protected)</span>
            </div>
            <div className={styles.decisionItem}>
              <strong>If the problem is disconnection from body wisdom →</strong>
              <span>Focusing (deep EMBODIMENT methodology)</span>
            </div>
            <div className={styles.decisionItem + ' ' + styles.decisionHighlight}>
              <strong>If the problem is a permanent polarity that keeps returning →</strong>
              <span>This is Threads' home territory</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.cta} section-lg`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Integrate Threads with Your Practice?</h2>
            <p>
              Join our training pathway to learn how Threads can enhance your existing modality and deepen your
              work with clients.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/training" className={styles.primaryButton}>Explore Training</a>
              <a href="/resources" className={styles.secondaryButton}>View Resources</a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedModality && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>

            <div className={styles.modalHeader}>
              <h2>{selectedModality.name}</h2>
              <span
                className={styles.compatibilityBadge}
                style={{
                  backgroundColor: compatibilityLevels[selectedModality.compatibility].color
                }}
              >
                {compatibilityLevels[selectedModality.compatibility].icon} {selectedModality.compatibility}
              </span>
            </div>

            {/* Desktop Tabs */}
            <div className={styles.modalTabs}>
              <button
                className={activeTab === 'overview' ? styles.activeTab : ''}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button
                className={activeTab === 'overlap' ? styles.activeTab : ''}
                onClick={() => setActiveTab('overlap')}
              >
                Where They Overlap
              </button>
              <button
                className={activeTab === 'differences' ? styles.activeTab : ''}
                onClick={() => setActiveTab('differences')}
              >
                Key Differences
              </button>
              <button
                className={activeTab === 'integration' ? styles.activeTab : ''}
                onClick={() => setActiveTab('integration')}
              >
                Integration
              </button>
            </div>

            {/* Mobile Tab Buttons */}
            <div className={styles.mobileTabSelector}>
              <div className={styles.mobileTabButtons}>
                <button
                  className={activeTab === 'overview' ? styles.activeTab : ''}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={activeTab === 'overlap' ? styles.activeTab : ''}
                  onClick={() => setActiveTab('overlap')}
                >
                  Where They Overlap
                </button>
                <button
                  className={activeTab === 'differences' ? styles.activeTab : ''}
                  onClick={() => setActiveTab('differences')}
                >
                  Key Differences
                </button>
                <button
                  className={activeTab === 'integration' ? styles.activeTab : ''}
                  onClick={() => setActiveTab('integration')}
                >
                  Integration
                </button>
              </div>
            </div>

            <div className={styles.modalContent}>
              {activeTab === 'overview' && (
                <div>
                  <div className={styles.modalSection}>
                    <h3>Core Question</h3>
                    <p><em>{selectedModality.coreQuestion}</em></p>
                  </div>

                  <div className={styles.modalSection}>
                    <h3>Thread Alignment</h3>
                    <p>{selectedModality.threadAlignment}</p>
                  </div>

                  <div className={styles.modalSection}>
                    <h3>Positioning</h3>
                    <p>{selectedModality.positioning}</p>
                  </div>

                  <div className={styles.modalSection}>
                    <h3>Key Distinction</h3>
                    <p>{selectedModality.keyDistinction}</p>
                  </div>

                  <div className={styles.modalSection}>
                    <h3>Integration Point</h3>
                    <p>{selectedModality.integrationPoint}</p>
                  </div>
                </div>
              )}

              {activeTab === 'overlap' && (
                <div>
                  <h3>Where They Overlap</h3>
                  <ul className={styles.contentList}>
                    {selectedModality.overlap.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'differences' && (
                <div>
                  <h3>Key Differences</h3>
                  <ul className={styles.contentList}>
                    {selectedModality.differences.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'integration' && (
                <div>
                  <h3>How to Integrate</h3>
                  <ul className={styles.contentList}>
                    {selectedModality.integration.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <div className={styles.modalSection} style={{ marginTop: '2rem' }}>
                    <h3>The Honest Positioning</h3>
                    <p>{selectedModality.honestPositioning}</p>
                  </div>

                  <div className={styles.seeItInAction}>
                    <h3>See It In Action</h3>
                    <div className={styles.exampleBox}>
                      <strong>Example:</strong> {getModalityExample(selectedModality.id)}
                    </div>
                    <p className={styles.learnMoreText}>
                      Want to see more examples and learn how to integrate Threads with your practice?
                    </p>
                    <div className={styles.actionLinks}>
                      <a href="/explore" className={styles.actionLink}>
                        <strong>Explore Threads</strong>
                        <span>See real examples of how the seven threads appear in daily life and relationships</span>
                      </a>
                      <a href="/training" className={styles.actionLink}>
                        <strong>View Training Pathway</strong>
                        <span>Learn about our tiered professional development training and FAQs</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.modalFooter}>
              <a href="/training" className={styles.modalCta}>
                Learn More About Training →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalityCompatibility;
