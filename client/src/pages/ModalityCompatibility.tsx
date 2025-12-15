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
