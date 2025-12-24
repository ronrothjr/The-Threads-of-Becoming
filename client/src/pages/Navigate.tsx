import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Navigate.module.css';

const Navigate: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles.navigate}>
      <section className={styles.header}>
        <div className="container">
          <h1>Navigate: Tools for Clarity</h1>
          <p className={styles.intro}>
            Everyone encounters tension. Most of us were never taught what to do with it. We provide you with public tools for exploration and gated tools for deeper practice.
          </p>
        </div>
      </section>

      <section className={`${styles.publicTools} section-lg`}>
        <div className="container">
          <h2>Public Tools</h2>
          <p className={styles.sectionIntro}>No account required</p>

          <div className={styles.toolsGrid}>
            <div className={styles.tool}>
              <h3>Seven Threads Overview</h3>
              <p>Visual map with seed questions</p>
              <a href="/explore" className={styles.toolLink}>View →</a>
            </div>

            <div className={styles.tool}>
              <h3>Collapse & Emergence Guide</h3>
              <p>How collapse happens and how to recover</p>
              <a href="/collapse" className={styles.toolLink}>Explore →</a>
            </div>

            <div className={styles.tool}>
              <h3>Seed Questions</h3>
              <p>Simple prompts to clarify any tension</p>
              <a href="/deep-dive" className={styles.toolLink}>Access →</a>
            </div>

            <div className={styles.tool}>
              <h3>Threadwork</h3>
              <p>The 4-phase structure (ARRIVE → NAME → HOLD → INTEGRATE)</p>
              <a href="/threadwork" className={styles.toolLink}>Learn →</a>
            </div>

            <div className={styles.tool}>
              <h3>Threads Cheat Sheet</h3>
              <p>Downloadable quick reference</p>
              <a href="/resources" className={styles.toolLink}>Download →</a>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.gatedTools} section-lg`}>
        <div className="container">
          <h2>Gated Tools</h2>
          <p className={styles.sectionIntro}>Account required</p>

          <div className={styles.categories}>
            <div className={styles.category}>
              <h3>For Individuals</h3>
              <ul>
                <li>Personal Practice Workbook (20 pages)</li>
                <li>Thread Discovery Worksheet</li>
                <li>Reflection Tool for tracking patterns</li>
              </ul>
              <a href="/portal" className={styles.categoryLink}>Sign In →</a>
            </div>

            <div className={styles.category}>
              <h3>For Practitioners</h3>
              <ul>
                <li>Full Navigation Conversation Protocol</li>
                <li>Diagnostic Accuracy Guide</li>
                <li>12 Case Studies with analysis</li>
                <li>Clinical Integration & Ethics Guide</li>
                <li>Framework Crosswalk (IFS, EFT, NVC, Bowen, ACT, etc.)</li>
              </ul>
              <a href="/portal" className={styles.categoryLink}>Sign In →</a>
            </div>

            <div className={styles.category}>
              <h3>For Facilitators</h3>
              <ul>
                <li>Organizations Field Guide (15 pages)</li>
                <li>Discernment Circle Scripts</li>
                <li>Multi-Party Facilitation Playbook</li>
                <li>Systemic Collapse Diagnostic Tools</li>
              </ul>
              <a href="/portal" className={styles.categoryLink}>Sign In →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className={styles.assessmentCta}>
        <div className="container">
          <h2>Start Navigating Your Threads</h2>
          <p>
            Take the free Quick Profile to discover which threads are most active in your life and access personalized navigation tools.
          </p>
          <Link
            to={isAuthenticated ? "/dashboard" : "/signup"}
            className={styles.assessmentButton}
          >
            {isAuthenticated ? "Continue Your Journey" : "Start Free Assessment"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Navigate;
