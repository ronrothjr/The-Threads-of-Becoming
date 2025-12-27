import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import styles from './TrainingAdmin.module.css';

interface TrainingModule {
  _id: string;
  moduleId: string;
  thread: string;
  tier: string;
  title: string;
  published: boolean;
  slides?: any[];
  meditations?: any[];
  exercises?: any[];
  practiceAssignments?: any[];
}
const TrainingAdmin: React.FC = () => {
  const [modules, setModules] = useState<TrainingModule[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const navigate = useNavigate();
  useEffect(() => {
    loadModules();
  }, []);
  const loadModules = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_URL}/api/admin/training/modules`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setModules(data);
      }
    } catch (error) {
      console.error('Failed to load modules:', error);
    } finally {
      setLoading(false);
    }
  };
  const filteredModules = modules.filter(m => {
    if (filter === 'all') return true;
    if (filter === 'published') return m.published;
    if (filter === 'draft') return !m.published;
    return m.tier === filter;
  });
  if (loading) {
    return <div className={styles.container}><div className={styles.loading}>Loading modules...</div></div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Training Module Administration</h1>
        <p>Manage training content, generate audio, and upload slides</p>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <button
            className={filter === 'all' ? styles.active : ''}
            onClick={() => setFilter('all')}
          >
            All Modules ({modules.length})
          </button>
          <button
            className={filter === 'foundation' ? styles.active : ''}
            onClick={() => setFilter('foundation')}
          >
            Foundation
          </button>
          <button
            className={filter === 'building' ? styles.active : ''}
            onClick={() => setFilter('building')}
          >
            Building
          </button>
          <button
            className={filter === 'deepening' ? styles.active : ''}
            onClick={() => setFilter('deepening')}
          >
            Deepening
          </button>
          <button
            className={filter === 'mastery' ? styles.active : ''}
            onClick={() => setFilter('mastery')}
          >
            Mastery
          </button>
          <button
            className={filter === 'published' ? styles.active : ''}
            onClick={() => setFilter('published')}
          >
            Published
          </button>
          <button
            className={filter === 'draft' ? styles.active : ''}
            onClick={() => setFilter('draft')}
          >
            Drafts
          </button>
        </div>
        <button
          className={styles.createButton}
          onClick={() => navigate('/admin/training/module/new')}
        >
          + Create New Module
        </button>
      </div>
      <div className={styles.moduleGrid}>
        {filteredModules.length === 0 ? (
          <div className={styles.empty}>
            <p>No modules found</p>
            <button onClick={() => navigate('/admin/training/module/new')}>
              Create your first module
            </button>
          </div>
        ) : (
          filteredModules.map(module => (
            <div key={module._id} className={styles.moduleCard}>
              <div className={styles.cardHeader}>
                <div className={styles.threadBadge}>{module.thread}</div>
                <div className={styles.tierBadge}>{module.tier}</div>
              </div>
              <h3>{module.title}</h3>
              <p className={styles.moduleId}>{module.moduleId}</p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Slides</span>
                  <span className={styles.statValue}>{module.slides?.length || 0}</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Meditations</span>
                  <span className={styles.statValue}>{module.meditations?.length || 0}</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statLabel}>Exercises</span>
                  <span className={styles.statValue}>{module.exercises?.length || 0}</span>
                </div>
              </div>
              <div className={styles.cardActions}>
                <button
                  className={styles.editButton}
                  onClick={() => navigate(`/admin/training/module/${module.moduleId}`)}
                >
                  Edit Module
                </button>
                <button
                  className={styles.previewButton}
                  onClick={() => navigate(`/admin/training/module/${module.moduleId}/preview`)}
                >
                  Preview
                </button>
              </div>
              <div className={styles.status}>
                {module.published ? (
                  <span className={styles.published}>✓ Published</span>
                ) : (
                  <span className={styles.draft}>Draft</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default TrainingAdmin;
