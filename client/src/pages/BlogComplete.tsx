import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const BlogComplete: React.FC = () => {
  return (
    <div className={styles.blog}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>The Threads of Becoming</h1>
          <h2 className={styles.subtitle}>Finding Common Ground in Life's Deepest Questions</h2>
          <p className={styles.meta}>Full 36-page article • Read time: ~45 minutes</p>
        </div>
      </section>

      {/* Article Content */}
      <article className={`${styles.article} section-lg`}>
        <div className={`${styles.content} container`}>

          <p className={styles.notice}>
            <strong>Note:</strong> This is the complete article from the GitHub repository. For a shorter introduction, visit the <Link to="/blog">summary version</Link>.
          </p>

          <div className={styles.download}>
            <h3>Download Full Article</h3>
            <p>Access the complete 36-page article as a PDF for offline reading or sharing.</p>
            <a href="/blog-complete.pdf" className={styles.downloadButton} download>Download PDF</a>
          </div>

          <div className={styles.viewOnGithub}>
            <p>
              The complete article, along with all framework documentation, is available in our GitHub repository
              under a Creative Commons Attribution-ShareAlike 4.0 license.
            </p>
            <a
              href="https://github.com/ronrothjr/The-Threads-of-Becoming/blob/main/blog.md"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              View on GitHub →
            </a>
          </div>

          {/* Table of Contents */}
          <div className={styles.toc}>
            <h2>Table of Contents</h2>
            <ol>
              <li><a href="#abstract">Abstract & Introduction</a></li>
              <li><a href="#argument">The Argument That Never Ends</a></li>
              <li><a href="#problem">The Problem We Keep Trying to Solve</a></li>
              <li><a href="#where-threads-show-up">Where the Threads Show Up</a></li>
              <li><a href="#what-framework-is">What This Framework Is (And Isn't)</a></li>
              <li><a href="#tension-we-hold">The Tension We Hold</a></li>
              <li><a href="#philosophy">Why Tension Creates: The Philosophy Underneath</a></li>
              <li><a href="#holding-tension">Holding the Tension: What It Actually Means</a></li>
              <li><a href="#navigation-practice">Navigating the Threads: A Practice</a></li>
              <li><a href="#five-moves">How to Actually Hold It: Five Practical Moves</a></li>
              <li><a href="#seven-threads">The Seven Threads (Detailed)</a></li>
              <li><a href="#next-steps">What's Next: Your Turn</a></li>
            </ol>
          </div>

          {/* CTA to other resources */}
          <div className={styles.exploreMore}>
            <h2>Explore the Framework</h2>
            <div className={styles.resourceGrid}>
              <div className={styles.resourceCard}>
                <h3>The Seven Threads</h3>
                <p>Detailed exploration of each thread with seed questions and cultural lenses</p>
                <Link to="/explore" className={styles.resourceLink}>Explore Threads →</Link>
              </div>
              <div className={styles.resourceCard}>
                <h3>Training Pathways</h3>
                <p>Three-tier certification for practitioners, facilitators, and organizations</p>
                <Link to="/training" className={styles.resourceLink}>View Training →</Link>
              </div>
              <div className={styles.resourceCard}>
                <h3>Free Resources</h3>
                <p>Downloadable tools including cheat sheets, workbooks, and practice guides</p>
                <Link to="/resources" className={styles.resourceLink}>Get Resources →</Link>
              </div>
            </div>
          </div>

          {/* License */}
          <div className={styles.license}>
            <h3>License</h3>
            <p>
              This work is licensed under <strong>Creative Commons Attribution-ShareAlike 4.0 International</strong>.
              You are free to use, adapt, and share with attribution.
            </p>
          </div>

        </div>
      </article>
    </div>
  );
};

export default BlogComplete;
