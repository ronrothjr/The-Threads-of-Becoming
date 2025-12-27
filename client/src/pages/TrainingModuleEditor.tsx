import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import { useParams, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import yaml from 'js-yaml';
import { extractPageToPng, getPdfPageCount, createPreviewUrl, revokePreviewUrl } from '../utils/pdfToImage';
import styles from './TrainingModuleEditor.module.css';

interface AudioContent {
  text: string;
  voiceId?: string;
  speed?: number;
  audioUrl?: string;
  duration?: number;
  generatedAt?: string;
}
interface Slide {
  slideNumber: number;
  title: string;
  visualDescription: string;
  visualUrl?: string;
  narration: AudioContent;
}

const TrainingModuleEditor: React.FC = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'slides' | 'meditations' | 'exercises' | 'writing' | 'knowledge' | 'practices' | 'yaml'>('slides');
  const [generating, setGenerating] = useState<string | null>(null);
  const [voices, setVoices] = useState<any[]>([]);
  const [editingScript, setEditingScript] = useState<{ type: string; index: number; text: string; field?: string } | null>(null);
  const [editingDescription, setEditingDescription] = useState<{ slideNumber: number; text: string } | null>(null);
  const [yamlContent, setYamlContent] = useState<string>('');
  const [pdfPageSelection, setPdfPageSelection] = useState<{ slideNumber: number; file: File; pageCount: number; selectedPage: number } | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [scrollBeforeDrag, setScrollBeforeDrag] = useState(0);
  const [errorDialog, setErrorDialog] = useState<{ title: string; message: string; fields?: Record<string, string> } | null>(null);
  const [confirmDialog, setConfirmDialog] = useState<{ title: string; message: string; onConfirm: () => void } | null>(null);
  useEffect(() => {
    if (moduleId && moduleId !== 'new') {
      loadModule();
    } else {
      setLoading(false);
    }
    loadVoices();
  }, [moduleId]);
  const loadModule = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_URL}/api/admin/training/modules/${moduleId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setModule(data);
      }
    } catch (error) {
      console.error('Failed to load module:', error);
    } finally {
      setLoading(false);
    }
  };
  const loadVoices = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_URL}/api/admin/training/voices`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setVoices(data);
      }
    } catch (error) {
      console.error('Failed to load voices:', error);
      // Set default voices if API fails
      setVoices([
        { voice_id: 'henry', name: 'Henry (Warm Male)' },
        { voice_id: 'cliff', name: 'Cliff (Teaching Male)' },
        { voice_id: 'george', name: 'George (Calm Male)' },
        { voice_id: 'mia', name: 'Mia (Clear Female)' },
        { voice_id: 'sara', name: 'Sara (Warm Female)' },
        { voice_id: 'terrell', name: 'Terrell (Deep Male)' },
        { voice_id: 'simone', name: 'Simone (Expressive Female)' },
      ]);
    }
  };

  const saveScript = async (type: string, index: number, text: string) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${API_URL}/api/admin/training/modules/${moduleId}/${type}/${index}/script`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
        }
      );
      if (response.ok) {
        await loadModule();
        setEditingScript(null);
      } else {
        alert('Failed to save script');
      }
    } catch (error) {
      console.error('Failed to save script:', error);
      alert('Failed to save script');
    }
  };

  const saveDescription = async (slideNumber: number, description: string) => {
    try {
      // Get current module, update the slide's visualDescription
      const updatedModule = { ...module };
      const slide = updatedModule.slides.find((s: any) => s.slideNumber === slideNumber);
      if (slide) {
        slide.visualDescription = description;
        const token = localStorage.getItem('auth_token');
        const response = await fetch(`${API_URL}/api/admin/training/modules`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedModule),
        });
        if (response.ok) {
          await loadModule();
          setEditingDescription(null);
        } else {
          alert('Failed to save description');
        }
      }
    } catch (error) {
      console.error('Failed to save description:', error);
      alert('Failed to save description');
    }
  };

  const generateSlideAudio = async (slideNumber: number, voiceId?: string, speed?: number, customText?: string) => {
    setGenerating(`slide-${slideNumber}`);
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${API_URL}/api/admin/training/modules/${moduleId}/slides/${slideNumber}/audio`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ voiceId, speed, text: customText }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        alert(`Audio generated successfully!\nDuration: ${result.duration}s\nURL: ${result.audioUrl}`);
        await loadModule(); // Reload to show updated audio
      } else {
        const error = await response.json();
        alert(`Failed to generate audio: ${error.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Failed to generate audio:', error);
      alert('Failed to generate audio. Check console for details.');
    } finally {
      setGenerating(null);
    }
  };

  const convertModuleToYaml = () => {
    if (!module) return '';
    try {
      return yaml.dump(module, { indent: 2, lineWidth: 120 });
    } catch (error) {
      console.error('Failed to convert to YAML:', error);
      return '';
    }
  };

  const downloadYaml = () => {
    const yamlStr = convertModuleToYaml();
    const blob = new Blob([yamlStr], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${module?.moduleId || 'module'}.yaml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const updateModuleFromYaml = async (yamlStr: string) => {
    try {
      const parsed = yaml.load(yamlStr);
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_URL}/api/admin/training/modules`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed),
      });
      if (response.ok) {
        await loadModule();
        alert('Module updated from YAML successfully!');
      } else {
        const error = await response.json();
        alert(`Failed to update: ${error.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Failed to parse YAML:', error);
      alert('Invalid YAML format. Please check syntax.');
    }
  };

  useEffect(() => {
    if (module && activeTab === 'yaml') {
      setYamlContent(convertModuleToYaml());
    }
  }, [module, activeTab]);
  const generateMeditationAudio = async (index: number, voiceId?: string, speed?: number, emotion?: string) => {
    setGenerating(`meditation-${index}`);
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${API_URL}/api/admin/training/modules/${moduleId}/meditations/${index}/audio`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ voiceId, speed, emotion }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log('✅ Meditation audio generated:', result);
        await loadModule();
      } else {
        const error = await response.json();
        alert(`Failed to generate meditation audio: ${error.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Failed to generate meditation audio:', error);
      alert('Failed to generate meditation audio');
    } finally {
      setGenerating(null);
    }
  };

  const saveExerciseField = async (index: number, field: string, text: string) => {
    try {
      // Update the module with the new exercise field
      const updatedModule = { ...module };
      updatedModule.exercises[index][field] = text;
      await saveModule(updatedModule);
      setEditingScript(null);
    } catch (error) {
      console.error('Failed to save exercise field:', error);
      alert('Failed to save exercise field');
    }
  };

  const generateExerciseAudio = async (index: number, voiceId?: string, speed?: number) => {
    setGenerating(`exercise-${index}`);
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${API_URL}/api/admin/training/modules/${moduleId}/exercises/${index}/audio`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ voiceId, speed }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        alert(`Exercise audio generated!\nDuration: ${result.duration}s`);
        await loadModule();
      } else {
        alert('Failed to generate exercise audio');
      }
    } catch (error) {
      console.error('Failed to generate exercise audio:', error);
      alert('Failed to generate exercise audio');
    } finally {
      setGenerating(null);
    }
  };

  const savePracticeField = async (index: number, field: string, text: string) => {
    try {
      // Update the module with the new practice field
      const updatedModule = { ...module };
      updatedModule.practiceAssignments[index][field] = text;
      await saveModule(updatedModule);
      setEditingScript(null);
    } catch (error) {
      console.error('Failed to save practice field:', error);
      alert('Failed to save practice field');
    }
  };

  const generatePracticeAudio = async (index: number, voiceId?: string, speed?: number) => {
    setGenerating(`practice-${index}`);
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${API_URL}/api/admin/training/modules/${moduleId}/practices/${index}/audio`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ voiceId, speed }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        alert(`Practice audio generated!\nDuration: ${result.duration}s`);
        await loadModule();
      } else {
        alert('Failed to generate practice audio');
      }
    } catch (error) {
      console.error('Failed to generate practice audio:', error);
      alert('Failed to generate practice audio');
    } finally {
      setGenerating(null);
    }
  };

  const generateAllAudio = async () => {
    if (!confirm('Generate all missing audio files? This may take several minutes.')) {
      return;
    }
    setGenerating('all');
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${API_URL}/api/admin/training/modules/${moduleId}/audio/generate-all`,
        {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` },
        }
      );
      if (response.ok) {
        const result = await response.json();
        alert(`Batch generation complete!\nSlides: ${result.slides}\nMeditations: ${result.meditations}\nExercises: ${result.exercises}\nPractices: ${result.practices}`);
        await loadModule();
      } else {
        alert('Batch generation failed');
      }
    } catch (error) {
      console.error('Batch generation failed:', error);
      alert('Batch generation failed');
    } finally {
      setGenerating(null);
    }
  };

  const uploadSlideVisual = async (slideNumber: number, file: File | null) => {
    if (!file) {
      // If no file, prompt for URL
      const visualUrl = prompt('Enter the URL for the slide visual (PNG/JPG/SVG/PDF):');
      if (!visualUrl) return;
      try {
        const token = localStorage.getItem('auth_token');
        const response = await fetch(
          `${API_URL}/api/admin/training/modules/${moduleId}/slides/${slideNumber}/visual`,
          {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ visualUrl }),
          }
        );
        if (response.ok) {
          alert('Visual URL updated successfully!');
          await loadModule();
        } else {
          alert('Failed to update visual URL');
        }
      } catch (error) {
        console.error('Failed to update visual:', error);
        alert('Failed to update visual URL');
      }
      return;
    }

    // Handle PDF files - need page selection
    if (file.type === 'application/pdf') {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await (window as any).pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const pageCount = pdf.numPages;
        // Show page selection dialog
        setPdfPageSelection({
          slideNumber,
          file,
          pageCount,
          selectedPage: 1,
        });
      } catch (error) {
        console.error('Failed to load PDF:', error);
        alert('Failed to load PDF file');
      }
      return;
    }

    // Handle SVG, PNG, JPG - upload directly as base64
    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const base64 = reader.result as string;
        const token = localStorage.getItem('auth_token');
        const response = await fetch(
          `${API_URL}/api/admin/training/modules/${moduleId}/slides/${slideNumber}/visual`,
          {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ visualUrl: base64 }),
          }
        );
        if (response.ok) {
          alert('Visual uploaded successfully!');
          await loadModule();
        } else {
          alert('Failed to upload visual');
        }
      } catch (error) {
        console.error('Failed to upload visual:', error);
        alert('Failed to upload visual');
      }
    };
    reader.readAsDataURL(file);
  };

  const uploadPdfPage = async () => {
    if (!pdfPageSelection) return;
    const { slideNumber, file, selectedPage } = pdfPageSelection;
    try {
      // Convert PDF page to PNG
      const { blob: pngBlob } = await extractPageToPng(file, selectedPage, 2.0);
      const previewUrl = createPreviewUrl(pngBlob);
      // Update UI with preview immediately
      const updatedModule = { ...module };
      const slide = updatedModule.slides.find((s: Slide) => s.slideNumber === slideNumber);
      if (slide) {
        slide.visualUrl = previewUrl;
        setModule(updatedModule);
      }
      // Server-side upload: Send PNG blob to server for S3 upload
      const formData = new FormData();
      formData.append('image', pngBlob, `slide-${slideNumber}-page-${selectedPage}.png`);
      const token = localStorage.getItem('auth_token');
      const response = await fetch(
        `${API_URL}/api/admin/training/modules/${moduleId}/slides/${slideNumber}/upload-image`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (response.ok) {
        const { visualUrl: s3Url } = await response.json();
        // Revoke preview URL and update with S3 URL
        revokePreviewUrl(previewUrl);
        await loadModule(); // Reload to get final S3 URL
        setPdfPageSelection(null);
        // Success notification
        if (window.confirm(`PDF page ${selectedPage} uploaded successfully!\n\nClick OK to continue.`)) {
          // User acknowledged
        }
      } else {
        // Revert preview on error
        window.confirm('Failed to upload PDF page.\n\nPlease try again or contact support.');
      }
    } catch (error) {
      console.error('Failed to upload PDF page:', error);
      window.confirm('Failed to upload PDF page.\n\nError: ' + (error as Error).message);
    }
  };

  // Drag and drop handlers
  const handleDragStart = (index: number) => {
    // Save current scroll position
    setScrollBeforeDrag(window.scrollY);
    // Collapse all items and scroll to top
    setIsCollapsed(true);
    setDraggedIndex(index);
    // Scroll to top after a brief delay to let collapse happen
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    // If drag was cancelled (no drop), restore scroll and expand
    if (e.dataTransfer.dropEffect === 'none') {
      setIsCollapsed(false);
      setDraggedIndex(null);
      setDragOverIndex(null);
      // Restore scroll position
      setTimeout(() => {
        window.scrollTo({ top: scrollBeforeDrag, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleDrop = async (type: 'slides' | 'meditations' | 'exercises' | 'practices', dropIndex: number) => {
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      setIsCollapsed(false);
      return;
    }

    const updatedModule = { ...module };
    let items: any[];
    if (type === 'slides') {
      items = [...module.slides];
    } else if (type === 'meditations') {
      items = [...module.meditations];
    } else if (type === 'exercises') {
      items = [...module.exercises];
    } else {
      items = [...module.practiceAssignments];
    }

    // Reorder items
    const [draggedItem] = items.splice(draggedIndex, 1);
    items.splice(dropIndex, 0, draggedItem);

    // Update slide numbers if slides
    if (type === 'slides') {
      items = items.map((slide, idx) => ({ ...slide, slideNumber: idx + 1 }));
      updatedModule.slides = items;
    } else if (type === 'meditations') {
      updatedModule.meditations = items;
    } else if (type === 'exercises') {
      updatedModule.exercises = items;
    } else {
      updatedModule.practiceAssignments = items;
    }

    // Save to server
    try {
      const token = localStorage.getItem('auth_token');
      await fetch(`${API_URL}/api/admin/training/modules`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedModule),
      });
      setModule(updatedModule);
    } catch (error) {
      console.error('Failed to reorder:', error);
      alert('Failed to reorder items');
    }

    setDraggedIndex(null);
    setDragOverIndex(null);
    setIsCollapsed(false); // Expand items after successful drop
  };

  // Add new item handlers
  const addNewSlide = async () => {
    const newSlideNumber = (module.slides?.length || 0) + 1;
    const newSlide = {
      slideNumber: newSlideNumber,
      title: `New Slide ${newSlideNumber}`,
      visualDescription: '',
      narration: {
        text: '',
        voiceId: 'cliff',
        speed: 0.9
      }
    };
    const updatedModule = {
      ...module,
      slides: [...(module.slides || []), newSlide]
    };
    await saveModule(updatedModule);
  };

  const addNewMeditation = async () => {
    const newMeditation = {
      title: 'New Meditation',
      duration: 10,
      audio: {
        text: '',
        voiceId: 'george',
        speed: 0.8
      }
    };
    const updatedModule = {
      ...module,
      meditations: [...(module.meditations || []), newMeditation]
    };
    const success = await saveModule(updatedModule);
    if (success) {
      // Scroll to the new item after a brief delay to allow render
      setTimeout(() => {
        const items = document.querySelectorAll('[data-meditation-item]');
        const lastItem = items[items.length - 1];
        lastItem?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const addNewExercise = async () => {
    const newExercise = {
      title: 'New Exercise',
      type: 'solo',
      setup: '',
      experience: '',
      reflection: '',
      instructionAudio: {
        text: '',
        voiceId: 'mia',
        speed: 0.95
      }
    };
    const updatedModule = {
      ...module,
      exercises: [...(module.exercises || []), newExercise]
    };
    const success = await saveModule(updatedModule);
    if (success) {
      setTimeout(() => {
        const items = document.querySelectorAll('[data-exercise-item]');
        const lastItem = items[items.length - 1];
        lastItem?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const addNewPractice = async () => {
    const newPractice = {
      type: 'micro',
      title: 'New Practice',
      instructions: '',
      frequency: 'Daily',
      duration: '3-5 minutes',
      audio: {
        text: '',
        voiceId: 'sara',
        speed: 1.0
      }
    };
    const updatedModule = {
      ...module,
      practiceAssignments: [...(module.practiceAssignments || []), newPractice]
    };
    const success = await saveModule(updatedModule);
    if (success) {
      setTimeout(() => {
        const items = document.querySelectorAll('[data-practice-item]');
        const lastItem = items[items.length - 1];
        lastItem?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const addNewWritingPrompt = async () => {
    const newPrompt = {
      prompt: 'New Writing Prompt',
      type: 'reflection',
      suggestedDuration: 5,
      guidance: ''
    };
    const updatedModule = {
      ...module,
      writingPrompts: [...(module.writingPrompts || []), newPrompt]
    };
    const success = await saveModule(updatedModule);
    if (success) {
      setTimeout(() => {
        const items = document.querySelectorAll('[data-writing-item]');
        const lastItem = items[items.length - 1];
        lastItem?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const addNewKnowledgeCheck = async () => {
    const newCheck = {
      type: 'thread_identification',
      question: 'New Knowledge Check Question',
      scenario: '',
      options: [
        { text: 'Option 1', isCorrect: true, feedback: 'Correct!' },
        { text: 'Option 2', isCorrect: false, feedback: 'Not quite...' },
        { text: 'Option 3', isCorrect: false, feedback: 'Try again...' }
      ]
    };
    const updatedModule = {
      ...module,
      knowledgeChecks: [...(module.knowledgeChecks || []), newCheck]
    };
    const success = await saveModule(updatedModule);
    if (success) {
      setTimeout(() => {
        const items = document.querySelectorAll('[data-knowledge-item]');
        const lastItem = items[items.length - 1];
        lastItem?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const saveModule = async (updatedModule: any): Promise<boolean> => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`${API_URL}/api/admin/training/modules`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedModule),
      });
      if (response.ok) {
        await loadModule(); // Reload to get server-processed version
        return true;
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        console.error('Failed to save module:', errorData);
        // Show error dialog with validation details
        if (errorData.details?.fields) {
          setErrorDialog({
            title: 'Validation Error',
            message: 'The following fields need to be corrected:',
            fields: errorData.details.fields
          });
        } else {
          setErrorDialog({
            title: 'Error Saving Module',
            message: errorData.message || errorData.details?.message || 'Server error'
          });
        }
        return false;
      }
    } catch (error) {
      console.error('Failed to save module:', error);
      setErrorDialog({
        title: 'Network Error',
        message: error instanceof Error ? error.message : 'Failed to connect to server'
      });
      return false;
    }
  };

  // Delete handlers
  const deleteSlide = async (slideNumber: number) => {
    setConfirmDialog({
      title: 'Delete Slide',
      message: `Are you sure you want to delete slide ${slideNumber}? This action cannot be undone.`,
      onConfirm: async () => {
        const updatedSlides = module.slides
          .filter((s: any) => s.slideNumber !== slideNumber)
          .map((s: any, idx: number) => ({ ...s, slideNumber: idx + 1 }));
        const updatedModule = { ...module, slides: updatedSlides };
        await saveModule(updatedModule);
        setConfirmDialog(null);
      }
    });
  };

  const deleteMeditation = async (index: number) => {
    setConfirmDialog({
      title: 'Delete Meditation',
      message: 'Are you sure you want to delete this meditation? This action cannot be undone.',
      onConfirm: async () => {
        const updatedMeditations = module.meditations.filter((_: any, idx: number) => idx !== index);
        const updatedModule = { ...module, meditations: updatedMeditations };
        await saveModule(updatedModule);
        setConfirmDialog(null);
      }
    });
  };

  const deleteExercise = async (index: number) => {
    setConfirmDialog({
      title: 'Delete Exercise',
      message: 'Are you sure you want to delete this exercise? This action cannot be undone.',
      onConfirm: async () => {
        const updatedExercises = module.exercises.filter((_: any, idx: number) => idx !== index);
        const updatedModule = { ...module, exercises: updatedExercises };
        await saveModule(updatedModule);
        setConfirmDialog(null);
      }
    });
  };

  const deletePractice = async (index: number) => {
    setConfirmDialog({
      title: 'Delete Practice',
      message: 'Are you sure you want to delete this practice assignment? This action cannot be undone.',
      onConfirm: async () => {
        const updatedPractices = module.practiceAssignments.filter((_: any, idx: number) => idx !== index);
        const updatedModule = { ...module, practiceAssignments: updatedPractices };
        await saveModule(updatedModule);
        setConfirmDialog(null);
      }
    });
  };

  const deleteWritingPrompt = async (index: number) => {
    setConfirmDialog({
      title: 'Delete Writing Prompt',
      message: 'Are you sure you want to delete this writing prompt? This action cannot be undone.',
      onConfirm: async () => {
        const updatedPrompts = module.writingPrompts.filter((_: any, idx: number) => idx !== index);
        const updatedModule = { ...module, writingPrompts: updatedPrompts };
        await saveModule(updatedModule);
        setConfirmDialog(null);
      }
    });
  };

  const deleteKnowledgeCheck = async (index: number) => {
    setConfirmDialog({
      title: 'Delete Knowledge Check',
      message: 'Are you sure you want to delete this knowledge check? This action cannot be undone.',
      onConfirm: async () => {
        const updatedChecks = module.knowledgeChecks.filter((_: any, idx: number) => idx !== index);
        const updatedModule = { ...module, knowledgeChecks: updatedChecks };
        await saveModule(updatedModule);
        setConfirmDialog(null);
      }
    });
  };

  // Update handlers for writing prompts
  const updateWritingPrompt = async (idx: number, field: string, value: any) => {
    const updatedPrompts = [...module.writingPrompts];
    updatedPrompts[idx] = { ...updatedPrompts[idx], [field]: value };
    const updatedModule = { ...module, writingPrompts: updatedPrompts };
    await saveModule(updatedModule);
  };

  // Update handlers for knowledge checks
  const updateKnowledgeCheck = async (idx: number, field: string, value: any) => {
    const updatedChecks = [...module.knowledgeChecks];
    updatedChecks[idx] = { ...updatedChecks[idx], [field]: value };
    const updatedModule = { ...module, knowledgeChecks: updatedChecks };
    await saveModule(updatedModule);
  };

  const updateKnowledgeCheckOption = async (checkIdx: number, optionIdx: number, field: string, value: any) => {
    const updatedChecks = [...module.knowledgeChecks];
    const updatedOptions = [...updatedChecks[checkIdx].options];
    updatedOptions[optionIdx] = { ...updatedOptions[optionIdx], [field]: value };
    updatedChecks[checkIdx] = { ...updatedChecks[checkIdx], options: updatedOptions };
    const updatedModule = { ...module, knowledgeChecks: updatedChecks };
    await saveModule(updatedModule);
  };

  const addKnowledgeCheckOption = async (checkIdx: number) => {
    const newOption = { text: 'New option', isCorrect: false, feedback: '' };
    const updatedChecks = [...module.knowledgeChecks];
    updatedChecks[checkIdx] = {
      ...updatedChecks[checkIdx],
      options: [...updatedChecks[checkIdx].options, newOption]
    };
    const updatedModule = { ...module, knowledgeChecks: updatedChecks };
    await saveModule(updatedModule);
  };

  const deleteKnowledgeCheckOption = async (checkIdx: number, optionIdx: number) => {
    const updatedChecks = [...module.knowledgeChecks];
    const updatedOptions = updatedChecks[checkIdx].options.filter((_: any, idx: number) => idx !== optionIdx);
    updatedChecks[checkIdx] = { ...updatedChecks[checkIdx], options: updatedOptions };
    const updatedModule = { ...module, knowledgeChecks: updatedChecks };
    await saveModule(updatedModule);
  };
  if (loading) {
    return <div className={styles.container}><div className={styles.loading}>Loading...</div></div>;
  }
  if (!module && moduleId !== 'new') {
    return <div className={styles.container}><div className={styles.error}>Module not found</div></div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate('/admin/training')}>
          ← Back to Modules
        </button>
        <h1>{module?.title || 'New Module'}</h1>
        <div className={styles.headerActions}>
          <button className={styles.generateAllButton} onClick={generateAllAudio} disabled={generating === 'all'}>
            {generating === 'all' ? 'Generating...' : '🎙️ Generate All Audio'}
          </button>
          <button className={styles.saveButton}>Save Changes</button>
        </div>
      </div>
      <div className={styles.tabs}>
        <button
          className={activeTab === 'slides' ? styles.active : ''}
          onClick={() => setActiveTab('slides')}
        >
          Slides ({module?.slides?.length || 0})
        </button>
        <button
          className={activeTab === 'meditations' ? styles.active : ''}
          onClick={() => setActiveTab('meditations')}
        >
          Meditations ({module?.meditations?.length || 0})
        </button>
        <button
          className={activeTab === 'exercises' ? styles.active : ''}
          onClick={() => setActiveTab('exercises')}
        >
          Exercises ({module?.exercises?.length || 0})
        </button>
        <button
          className={activeTab === 'writing' ? styles.active : ''}
          onClick={() => setActiveTab('writing')}
        >
          Writing Prompts ({module?.writingPrompts?.length || 0})
        </button>
        <button
          className={activeTab === 'knowledge' ? styles.active : ''}
          onClick={() => setActiveTab('knowledge')}
        >
          Knowledge Checks ({module?.knowledgeChecks?.length || 0})
        </button>
        <button
          className={activeTab === 'practices' ? styles.active : ''}
          onClick={() => setActiveTab('practices')}
        >
          Practices ({module?.practiceAssignments?.length || 0})
        </button>
        <button
          className={activeTab === 'yaml' ? styles.active : ''}
          onClick={() => setActiveTab('yaml')}
        >
          YAML Editor
        </button>
      </div>
      <div className={styles.content}>
        {activeTab === 'slides' && (
          <div className={styles.slidesPanel}>
            <div className={styles.panelHeader}>
              <h2>Slide Presentations</h2>
              <div className={styles.panelActions}>
                <button
                  className={styles.collapseButton}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  title={isCollapsed ? "Expand all" : "Collapse all"}
                >
                  {isCollapsed ? '📖 Expand All' : '📕 Collapse All'}
                </button>
                <button className={styles.addButton} onClick={addNewSlide}>+ Add Slide</button>
              </div>
            </div>
            {module?.slides?.map((slide: any, idx: number) => (
              <div
                key={idx}
                className={`${styles.contentItem} ${isCollapsed ? styles.collapsed : ''} ${draggedIndex === idx ? styles.dragging : ''} ${dragOverIndex === idx ? styles.dropTarget : ''}`}
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragEnd}
                onDrop={() => handleDrop('slides', idx)}
              >
                <div className={styles.itemHeader}>
                  <span className={styles.dragHandle}>⋮⋮</span>
                  <h3>Slide {slide.slideNumber}: {slide.title}</h3>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteSlide(slide.slideNumber)}
                    title="Delete slide"
                  >
                    🗑️
                  </button>
                </div>
                <div className={styles.itemBody}>
                  <div className={styles.visualSection}>
                    <h4>Slide Visual (PNG/JPG/SVG/PDF)</h4>
                    {editingDescription?.slideNumber === slide.slideNumber ? (
                      <div className={styles.descriptionEditor}>
                        <label>Visual Description:</label>
                        <textarea
                          className={styles.descriptionTextarea}
                          value={editingDescription?.text ?? ''}
                          onChange={(e) => setEditingDescription({ slideNumber: editingDescription?.slideNumber ?? slide.slideNumber, text: e.target.value })}
                          rows={3}
                          placeholder="Describe what visual should be shown for this slide..."
                        />
                        <div className={styles.scriptActions}>
                          <button
                            onClick={() => saveDescription(slide.slideNumber, editingDescription?.text ?? '')}
                            className={styles.saveScriptButton}
                          >
                            Save Description
                          </button>
                          <button
                            onClick={() => setEditingDescription(null)}
                            className={styles.cancelButton}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.descriptionPreview}>
                        <p className={styles.visualDescription}>
                          {slide.visualDescription || <em>No description provided</em>}
                        </p>
                        <button
                          onClick={() => setEditingDescription({
                            slideNumber: slide.slideNumber,
                            text: slide.visualDescription || ''
                          })}
                          className={styles.editDescriptionButton}
                        >
                          ✏️ Edit Description
                        </button>
                      </div>
                    )}
                    {slide.visualUrl ? (
                      <div className={styles.visualPreview}>
                        <img src={slide.visualUrl} alt={slide.title} />
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/jpg,image/svg+xml,application/pdf"
                          onChange={(e) => uploadSlideVisual(slide.slideNumber, e.target.files?.[0] || null)}
                          style={{ display: 'none' }}
                          id={`visual-upload-${slide.slideNumber}`}
                        />
                        <label htmlFor={`visual-upload-${slide.slideNumber}`} className={styles.uploadLabel}>
                          📤 Update Visual
                        </label>
                      </div>
                    ) : (
                      <div className={styles.visualMissing}>
                        <p>No visual uploaded yet</p>
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/jpg,image/svg+xml,application/pdf"
                          onChange={(e) => uploadSlideVisual(slide.slideNumber, e.target.files?.[0] || null)}
                          style={{ display: 'none' }}
                          id={`visual-upload-${slide.slideNumber}`}
                        />
                        <label htmlFor={`visual-upload-${slide.slideNumber}`} className={styles.uploadLabel}>
                          📤 Upload Visual (PNG/JPG/SVG/PDF)
                        </label>
                      </div>
                    )}
                  </div>
                  <div className={styles.audioSection}>
                    <h4>Narration Audio</h4>
                    {editingScript?.type === 'slides' && editingScript.index === slide.slideNumber ? (
                      <div className={styles.scriptEditor}>
                        <textarea
                          className={styles.scriptTextarea}
                          value={editingScript.text}
                          onChange={(e) => setEditingScript({ ...editingScript, text: e.target.value })}
                          rows={8}
                        />
                        <div className={styles.scriptActions}>
                          <button
                            onClick={() => saveScript('slides', slide.slideNumber, editingScript.text)}
                            className={styles.saveScriptButton}
                          >
                            Save Script
                          </button>
                          <button
                            onClick={() => setEditingScript(null)}
                            className={styles.cancelButton}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.scriptPreview}>
                        <strong>Script:</strong>
                        <p>{slide.narration?.text?.substring(0, 200)}...</p>
                        <button
                          className={styles.editScriptButton}
                          onClick={() => setEditingScript({ type: 'slides', index: slide.slideNumber, text: slide.narration?.text || '' })}
                        >
                          Edit Script
                        </button>
                      </div>
                    )}
                    {slide.narration?.audioUrl ? (
                      <div className={styles.audioPlayer}>
                        <audio controls src={slide.narration.audioUrl} />
                        <div className={styles.audioInfo}>
                          <span>Duration: {slide.narration.duration}s</span>
                          <span>Generated: {new Date(slide.narration.generatedAt).toLocaleString()}</span>
                        </div>
                        <div className={styles.audioGenerate}>
                          <div className={styles.voiceSelector}>
                            <label>Voice:</label>
                            <select id={`voice-slide-${slide.slideNumber}`} defaultValue={slide.narration?.voiceId || 'cliff'}>
                              {voices.map(v => (
                                <option key={v.voice_id} value={v.voice_id}>{v.name || v.voice_id}</option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.speedSelector}>
                            <label>Speed:</label>
                            <input
                              type="number"
                              id={`speed-slide-${slide.slideNumber}`}
                              min="0.5"
                              max="2.0"
                              step="0.05"
                              defaultValue={slide.narration?.speed || 0.90}
                            />
                            <span>x</span>
                          </div>
                          <button
                            className={styles.regenerateButton}
                            onClick={() => {
                              const voiceSelect = document.getElementById(`voice-slide-${slide.slideNumber}`) as HTMLSelectElement;
                              const speedInput = document.getElementById(`speed-slide-${slide.slideNumber}`) as HTMLInputElement;
                              generateSlideAudio(slide.slideNumber, voiceSelect?.value, parseFloat(speedInput?.value));
                            }}
                            disabled={generating === `slide-${slide.slideNumber}`}
                          >
                            {generating === `slide-${slide.slideNumber}` ? 'Generating...' : '🎙️ Regenerate Audio'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.audioGenerate}>
                        <div className={styles.voiceSelector}>
                          <label>Voice:</label>
                          <select id={`voice-slide-${slide.slideNumber}`} defaultValue={slide.narration?.voiceId || 'cliff'}>
                            {voices.map(v => (
                              <option key={v.voice_id} value={v.voice_id}>{v.name || v.voice_id}</option>
                            ))}
                          </select>
                        </div>
                        <div className={styles.speedSelector}>
                          <label>Speed:</label>
                          <input
                            type="number"
                            id={`speed-slide-${slide.slideNumber}`}
                            min="0.5"
                            max="2.0"
                            step="0.05"
                            defaultValue={slide.narration?.speed || 0.90}
                          />
                          <span>x</span>
                        </div>
                        <button
                          className={styles.generateButton}
                          onClick={() => {
                            const voiceSelect = document.getElementById(`voice-slide-${slide.slideNumber}`) as HTMLSelectElement;
                            const speedInput = document.getElementById(`speed-slide-${slide.slideNumber}`) as HTMLInputElement;
                            generateSlideAudio(slide.slideNumber, voiceSelect?.value, parseFloat(speedInput?.value));
                          }}
                          disabled={generating === `slide-${slide.slideNumber}`}
                        >
                          {generating === `slide-${slide.slideNumber}` ? 'Generating...' : '🎙️ Generate Audio'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'meditations' && (
          <div className={styles.meditationsPanel}>
            <div className={styles.panelHeader}>
              <h2>Guided Meditations</h2>
              <button className={styles.addButton} onClick={addNewMeditation}>+ Add Meditation</button>
            </div>
            {module?.meditations?.map((meditation: any, idx: number) => (
              <div
                key={idx}
                data-meditation-item
                className={`${styles.contentItem} ${isCollapsed ? styles.collapsed : ''} ${draggedIndex === idx ? styles.dragging : ''} ${dragOverIndex === idx ? styles.dropTarget : ''}`}
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragEnd}
                onDrop={() => handleDrop('meditations', idx)}
              >
                <div className={styles.itemHeader}>
                  <span className={styles.dragHandle}>⋮⋮</span>
                  <h3>{meditation.title}</h3>
                  <span className={styles.duration}>{meditation.duration} minutes</span>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteMeditation(idx)}
                    title="Delete meditation"
                  >
                    🗑️
                  </button>
                </div>
                <div className={styles.itemBody}>
                  {/* Audio Controls at Top */}
                  {meditation.audio?.audioUrl ? (
                    <div className={styles.audioPlayer}>
                      <audio controls src={meditation.audio.audioUrl} />
                      <div className={styles.audioInfo}>
                        <span>Duration: {meditation.audio.duration}s</span>
                      </div>
                      <div className={styles.audioGenerate}>
                        <div className={styles.voiceSelector}>
                          <label>Voice:</label>
                          <select id={`voice-meditation-${idx}`} defaultValue={meditation.audio?.voiceId || 'george'}>
                            {voices.map(v => (
                              <option key={v.voice_id} value={v.voice_id}>{v.name || v.voice_id}</option>
                            ))}
                          </select>
                        </div>
                        <div className={styles.speedSelector}>
                          <label>Speed:</label>
                          <input
                            type="number"
                            id={`speed-meditation-${idx}`}
                            min="0.5"
                            max="2.0"
                            step="0.05"
                            defaultValue={meditation.audio?.speed || 0.80}
                          />
                          <span>x</span>
                        </div>
                        <div className={styles.emotionSelector}>
                          <label>Tone:</label>
                          <select id={`emotion-meditation-${idx}`} defaultValue="calm">
                            <option value="calm">Calm</option>
                            <option value="relaxed">Relaxed</option>
                            <option value="warm">Warm</option>
                            <option value="cheerful">Cheerful</option>
                            <option value="energetic">Energetic</option>
                            <option value="assertive">Assertive</option>
                            <option value="direct">Direct</option>
                            <option value="bright">Bright</option>
                          </select>
                        </div>
                        <button
                          className={styles.regenerateButton}
                          onClick={() => {
                            const voiceSelect = document.getElementById(`voice-meditation-${idx}`) as HTMLSelectElement;
                            const speedInput = document.getElementById(`speed-meditation-${idx}`) as HTMLInputElement;
                            const emotionSelect = document.getElementById(`emotion-meditation-${idx}`) as HTMLSelectElement;
                            generateMeditationAudio(idx, voiceSelect?.value, parseFloat(speedInput?.value), emotionSelect?.value);
                          }}
                          disabled={generating === `meditation-${idx}`}
                        >
                          {generating === `meditation-${idx}` ? 'Generating...' : '🎙️ Regenerate Audio'}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.audioGenerate}>
                      <div className={styles.voiceSelector}>
                        <label>Voice:</label>
                        <select id={`voice-meditation-${idx}`} defaultValue={'george'}>
                          {voices.map(v => (
                            <option key={v.voice_id} value={v.voice_id}>{v.name || v.voice_id}</option>
                          ))}
                        </select>
                      </div>
                      <div className={styles.speedSelector}>
                        <label>Speed:</label>
                        <input
                          type="number"
                          id={`speed-meditation-${idx}`}
                          min="0.5"
                          max="2.0"
                          step="0.05"
                          defaultValue={0.80}
                        />
                        <span>x</span>
                      </div>
                      <div className={styles.emotionSelector}>
                        <label>Tone:</label>
                        <select id={`emotion-meditation-${idx}`} defaultValue="calm">
                          <option value="calm">Calm</option>
                          <option value="relaxed">Relaxed</option>
                          <option value="warm">Warm</option>
                          <option value="cheerful">Cheerful</option>
                          <option value="energetic">Energetic</option>
                          <option value="assertive">Assertive</option>
                          <option value="direct">Direct</option>
                          <option value="bright">Bright</option>
                        </select>
                      </div>
                      <button
                        className={styles.generateButton}
                        onClick={() => {
                          const voiceSelect = document.getElementById(`voice-meditation-${idx}`) as HTMLSelectElement;
                          const speedInput = document.getElementById(`speed-meditation-${idx}`) as HTMLInputElement;
                          const emotionSelect = document.getElementById(`emotion-meditation-${idx}`) as HTMLSelectElement;
                          generateMeditationAudio(idx, voiceSelect?.value, parseFloat(speedInput?.value), emotionSelect?.value);
                        }}
                        disabled={generating === `meditation-${idx}`}
                      >
                        {generating === `meditation-${idx}` ? 'Generating...' : '🎙️ Generate Meditation Audio'}
                      </button>
                    </div>
                  )}
                  {/* Script Section Below Audio Controls */}
                  {editingScript?.type === 'meditations' && editingScript.index === idx ? (
                    <div className={styles.scriptEditor}>
                      <textarea
                        className={styles.scriptTextarea}
                        value={editingScript.text}
                        onChange={(e) => setEditingScript({ ...editingScript, text: e.target.value })}
                        rows={12}
                      />
                      <div className={styles.scriptActions}>
                        <button
                          className={styles.saveScriptButton}
                          onClick={() => saveScript('meditations', idx, editingScript.text)}
                        >
                          Save Script
                        </button>
                        <button
                          className={styles.cancelButton}
                          onClick={() => setEditingScript(null)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.scriptPreview}>
                      <strong>Script (with timing notation):</strong>
                      <pre>{meditation.audio?.text?.substring(0, 300)}...</pre>
                      <button
                        className={styles.editScriptButton}
                        onClick={() => setEditingScript({ type: 'meditations', index: idx, text: meditation.audio?.text || '' })}
                      >
                        Edit Script
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'exercises' && (
          <div className={styles.exercisesPanel}>
            <div className={styles.panelHeader}>
              <h2>Interactive Exercises</h2>
              <button className={styles.addButton} onClick={addNewExercise}>+ Add Exercise</button>
            </div>
            {module?.exercises?.map((exercise: any, idx: number) => (
              <div
                key={idx}
                data-exercise-item
                className={`${styles.contentItem} ${isCollapsed ? styles.collapsed : ''} ${draggedIndex === idx ? styles.dragging : ''} ${dragOverIndex === idx ? styles.dropTarget : ''}`}
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragEnd}
                onDrop={() => handleDrop('exercises', idx)}
              >
                <div className={styles.itemHeader}>
                  <span className={styles.dragHandle}>⋮⋮</span>
                  <div>
                    <h3>{exercise.title}</h3>
                    <div className={styles.exerciseMeta}>
                      <span className={styles.exerciseType}>{exercise.type}</span>
                      <span className={styles.duration}>{exercise.duration} min</span>
                    </div>
                  </div>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteExercise(idx)}
                    title="Delete exercise"
                  >
                    🗑️
                  </button>
                </div>
                <div className={styles.itemBody}>
                  {/* Instructions Section */}
                  {(exercise as any).instructions && (
                    <div className={styles.exerciseSection}>
                      <h4>Instructions</h4>
                      {editingScript?.type === 'exercises' && editingScript.index === idx && editingScript.field === 'instructions' ? (
                        <div className={styles.scriptEditor}>
                          <textarea
                            className={styles.scriptTextarea}
                            value={editingScript.text}
                            onChange={(e) => setEditingScript({ ...editingScript, text: e.target.value })}
                            rows={4}
                          />
                          <div className={styles.scriptActions}>
                            <button
                              onClick={() => saveExerciseField(idx, 'instructions', editingScript.text)}
                              className={styles.saveScriptButton}
                            >
                              Save
                            </button>
                            <button onClick={() => setEditingScript(null)} className={styles.cancelButton}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className={styles.scriptPreview}>
                          <p>{(exercise as any).instructions}</p>
                          <button
                            onClick={() => setEditingScript({ type: 'exercises', index: idx, field: 'instructions', text: (exercise as any).instructions })}
                            className={styles.editScriptButton}
                          >
                            Edit Instructions
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  {/* Setup Section */}
                  {exercise.setup && (
                    <div className={styles.exerciseSection}>
                      <h4>Setup</h4>
                      {editingScript?.type === 'exercises' && editingScript.index === idx && editingScript.field === 'setup' ? (
                        <div className={styles.scriptEditor}>
                          <textarea
                            className={styles.scriptTextarea}
                            value={editingScript.text}
                            onChange={(e) => setEditingScript({ ...editingScript, text: e.target.value })}
                            rows={4}
                          />
                          <div className={styles.scriptActions}>
                            <button
                              onClick={() => saveExerciseField(idx, 'setup', editingScript.text)}
                              className={styles.saveScriptButton}
                            >
                              Save
                            </button>
                            <button onClick={() => setEditingScript(null)} className={styles.cancelButton}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className={styles.scriptPreview}>
                          <p>{exercise.setup}</p>
                          <button
                            onClick={() => setEditingScript({ type: 'exercises', index: idx, field: 'setup', text: exercise.setup })}
                            className={styles.editScriptButton}
                          >
                            Edit Setup
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  {/* Experience Section */}
                  {exercise.experience && (
                    <div className={styles.exerciseSection}>
                      <h4>Experience Instructions</h4>
                      {editingScript?.type === 'exercises' && editingScript.index === idx && editingScript.field === 'experience' ? (
                        <div className={styles.scriptEditor}>
                          <textarea
                            className={styles.scriptTextarea}
                            value={editingScript.text}
                            onChange={(e) => setEditingScript({ ...editingScript, text: e.target.value })}
                            rows={8}
                          />
                          <div className={styles.scriptActions}>
                            <button
                              onClick={() => saveExerciseField(idx, 'experience', editingScript.text)}
                              className={styles.saveScriptButton}
                            >
                              Save
                            </button>
                            <button onClick={() => setEditingScript(null)} className={styles.cancelButton}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className={styles.scriptPreview}>
                          <p>{exercise.experience}</p>
                          <button
                            onClick={() => setEditingScript({ type: 'exercises', index: idx, field: 'experience', text: exercise.experience })}
                            className={styles.editScriptButton}
                          >
                            Edit Experience
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  {/* Reflection Section */}
                  {exercise.reflection && (
                    <div className={styles.exerciseSection}>
                      <h4>Reflection Questions</h4>
                      {editingScript?.type === 'exercises' && editingScript.index === idx && editingScript.field === 'reflection' ? (
                        <div className={styles.scriptEditor}>
                          <textarea
                            className={styles.scriptTextarea}
                            value={editingScript.text}
                            onChange={(e) => setEditingScript({ ...editingScript, text: e.target.value })}
                            rows={4}
                          />
                          <div className={styles.scriptActions}>
                            <button
                              onClick={() => saveExerciseField(idx, 'reflection', editingScript.text)}
                              className={styles.saveScriptButton}
                            >
                              Save
                            </button>
                            <button onClick={() => setEditingScript(null)} className={styles.cancelButton}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className={styles.scriptPreview}>
                          <p>{exercise.reflection}</p>
                          <button
                            onClick={() => setEditingScript({ type: 'exercises', index: idx, field: 'reflection', text: exercise.reflection })}
                            className={styles.editScriptButton}
                          >
                            Edit Reflection
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  {/* Audio Section */}
                  <div className={styles.exerciseSection}>
                    <h4>Instruction Audio (Optional)</h4>
                    {exercise.instructionAudio?.audioUrl ? (
                      <div className={styles.audioPlayer}>
                        <audio controls src={exercise.instructionAudio.audioUrl}></audio>
                        <div className={styles.audioInfo}>
                          <span>Duration: {exercise.instructionAudio.duration}s</span>
                        </div>
                        <div className={styles.audioGenerate}>
                          <div className={styles.voiceSelector}>
                            <label>Voice:</label>
                            <select id={`voice-exercise-${idx}`} defaultValue={exercise.instructionAudio?.voiceId || 'mia'}>
                              {voices.map(v => (
                                <option key={v.voice_id} value={v.voice_id}>{v.name || v.voice_id}</option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.speedSelector}>
                            <label>Speed:</label>
                            <input
                              type="number"
                              id={`speed-exercise-${idx}`}
                              min="0.5"
                              max="2.0"
                              step="0.05"
                              defaultValue={exercise.instructionAudio?.speed || 0.95}
                            />
                            <span>x</span>
                          </div>
                          <button
                            className={styles.regenerateButton}
                            onClick={() => {
                              const voiceSelect = document.getElementById(`voice-exercise-${idx}`) as HTMLSelectElement;
                              const speedInput = document.getElementById(`speed-exercise-${idx}`) as HTMLInputElement;
                              generateExerciseAudio(idx, voiceSelect?.value, parseFloat(speedInput?.value));
                            }}
                            disabled={generating === `exercise-${idx}`}
                          >
                            {generating === `exercise-${idx}` ? 'Generating...' : '🎙️ Regenerate Audio'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.audioGenerate}>
                        <div className={styles.voiceSelector}>
                          <label>Voice:</label>
                          <select id={`voice-exercise-${idx}`} defaultValue={exercise.instructionAudio?.voiceId || 'mia'}>
                            {voices.map(v => (
                              <option key={v.voice_id} value={v.voice_id}>{v.name || v.voice_id}</option>
                            ))}
                          </select>
                        </div>
                        <div className={styles.speedSelector}>
                          <label>Speed:</label>
                          <input
                            type="number"
                            id={`speed-exercise-${idx}`}
                            min="0.5"
                            max="2.0"
                            step="0.05"
                            defaultValue={exercise.instructionAudio?.speed || 0.95}
                          />
                          <span>x</span>
                        </div>
                        <button
                          className={styles.generateButton}
                          onClick={() => {
                            const voiceSelect = document.getElementById(`voice-exercise-${idx}`) as HTMLSelectElement;
                            const speedInput = document.getElementById(`speed-exercise-${idx}`) as HTMLInputElement;
                            generateExerciseAudio(idx, voiceSelect?.value, parseFloat(speedInput?.value));
                          }}
                          disabled={generating === `exercise-${idx}`}
                        >
                          {generating === `exercise-${idx}` ? 'Generating...' : '🎙️ Generate Audio'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'writing' && (
          <div className={styles.writingPanel}>
            <div className={styles.panelHeader}>
              <h2>Writing Prompts</h2>
              <button className={styles.addButton} onClick={addNewWritingPrompt}>+ Add Writing Prompt</button>
            </div>
            <p className={styles.practiceIntro}>
              Reflective prompts for integration and metacognition. Foundation prompts focus on awareness and recognition.
            </p>
            {module?.writingPrompts?.map((prompt: any, idx: number) => (
              <div
                key={idx}
                data-writing-item
                className={`${styles.contentItem} ${isCollapsed ? styles.collapsed : ''}`}
              >
                <div className={styles.itemHeader}>
                  <div>
                    <h3>{prompt.prompt}</h3>
                    {prompt.type && <span className={styles.promptType}>{prompt.type}</span>}
                  </div>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteWritingPrompt(idx)}
                    title="Delete prompt"
                  >
                    🗑️
                  </button>
                </div>
                {!isCollapsed && (
                  <div className={styles.itemContent}>
                    <div className={styles.formGroup}>
                      <label>Prompt</label>
                      <textarea
                        value={prompt.prompt}
                        onChange={(e) => updateWritingPrompt(idx, 'prompt', e.target.value)}
                        rows={3}
                      />
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Type</label>
                        <select
                          value={prompt.type || 'reflection'}
                          onChange={(e) => updateWritingPrompt(idx, 'type', e.target.value)}
                        >
                          <option value="reflection">Reflection</option>
                          <option value="exploration">Exploration</option>
                          <option value="application">Application</option>
                          <option value="integration">Integration</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label>Suggested Duration (min)</label>
                        <input
                          type="number"
                          value={prompt.suggestedDuration || 5}
                          onChange={(e) => updateWritingPrompt(idx, 'suggestedDuration', parseInt(e.target.value))}
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Guidance (optional)</label>
                      <textarea
                        value={prompt.guidance || ''}
                        onChange={(e) => updateWritingPrompt(idx, 'guidance', e.target.value)}
                        rows={2}
                        placeholder="Optional guidance for the learner..."
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === 'knowledge' && (
          <div className={styles.knowledgePanel}>
            <div className={styles.panelHeader}>
              <h2>Knowledge Checks</h2>
              <button className={styles.addButton} onClick={addNewKnowledgeCheck}>+ Add Knowledge Check</button>
            </div>
            <p className={styles.practiceIntro}>
              Scenario-based questions for formative assessment. Immediate feedback, unlimited retakes - learning tool, not grading.
            </p>
            {module?.knowledgeChecks?.map((check: any, idx: number) => (
              <div
                key={idx}
                data-knowledge-item
                className={`${styles.contentItem} ${isCollapsed ? styles.collapsed : ''}`}
              >
                <div className={styles.itemHeader}>
                  <div>
                    <h3>{check.question}</h3>
                    <span className={styles.promptType}>{check.type}</span>
                  </div>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteKnowledgeCheck(idx)}
                    title="Delete check"
                  >
                    🗑️
                  </button>
                </div>
                {!isCollapsed && (
                  <div className={styles.itemContent}>
                    <div className={styles.formGroup}>
                      <label>Type</label>
                      <select
                        value={check.type}
                        onChange={(e) => updateKnowledgeCheck(idx, 'type', e.target.value)}
                      >
                        <option value="thread_identification">Thread Identification</option>
                        <option value="collapse_recognition">Collapse Recognition</option>
                        <option value="capacity_assessment">Capacity Assessment</option>
                        <option value="practice_application">Practice Application</option>
                        <option value="integration_understanding">Integration Understanding</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Scenario</label>
                      <textarea
                        value={check.scenario || ''}
                        onChange={(e) => updateKnowledgeCheck(idx, 'scenario', e.target.value)}
                        placeholder="Optional context or setup for the question..."
                        rows={2}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Question</label>
                      <textarea
                        value={check.question}
                        onChange={(e) => updateKnowledgeCheck(idx, 'question', e.target.value)}
                        rows={2}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Answer Options</label>
                      <ul className={styles.optionsList}>
                        {check.options?.map((option: any, optIdx: number) => (
                          <li key={optIdx} className={`${styles.optionItem} ${option.isCorrect ? styles.correctOption : ''}`}>
                            <div className={styles.optionHeader}>
                              <div className={styles.optionCheckbox}>
                                <input
                                  type="checkbox"
                                  checked={option.isCorrect}
                                  onChange={(e) => updateKnowledgeCheckOption(idx, optIdx, 'isCorrect', e.target.checked)}
                                />
                                <span>Correct</span>
                              </div>
                              <div className={styles.optionActions}>
                                <button onClick={() => deleteKnowledgeCheckOption(idx, optIdx)} title="Delete option">
                                  🗑️
                                </button>
                              </div>
                            </div>
                            <div className={styles.optionContent}>
                              <textarea
                                value={option.text}
                                onChange={(e) => updateKnowledgeCheckOption(idx, optIdx, 'text', e.target.value)}
                                placeholder="Answer text"
                                rows={2}
                              />
                              <textarea
                                value={option.feedback}
                                onChange={(e) => updateKnowledgeCheckOption(idx, optIdx, 'feedback', e.target.value)}
                                placeholder="Feedback for this option"
                                rows={2}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                      <button className={styles.addOptionButton} onClick={() => addKnowledgeCheckOption(idx)}>
                        + Add Option
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {activeTab === 'practices' && (
          <div className={styles.practicesPanel}>
            <div className={styles.panelHeader}>
              <h2>Practice Assignments</h2>
              <button className={styles.addButton} onClick={addNewPractice}>+ Add Practice</button>
            </div>
            <p className={styles.practiceIntro}>
              Between-session practices organized by time commitment: Micro (daily, 2-5 min), Mini (weekly, 15-20 min), Real-world (ongoing integration).
            </p>
            {module?.practiceAssignments?.map((practice: any, idx: number) => (
              <div
                key={idx}
                data-practice-item
                className={`${styles.contentItem} ${isCollapsed ? styles.collapsed : ''} ${draggedIndex === idx ? styles.dragging : ''} ${dragOverIndex === idx ? styles.dropTarget : ''}`}
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDragLeave={handleDragLeave}
                onDragEnd={handleDragEnd}
                onDrop={() => handleDrop('practices', idx)}
              >
                <div className={styles.itemHeader}>
                  <span className={styles.dragHandle}>⋮⋮</span>
                  <div>
                    <h3>{practice.title}</h3>
                    <div className={styles.practiceMeta}>
                      <span className={styles.practiceType}>{practice.type}</span>
                      {practice.frequency && <span className={styles.frequency}>{practice.frequency}</span>}
                      {practice.duration && <span className={styles.duration}>{practice.duration} min</span>}
                    </div>
                  </div>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deletePractice(idx)}
                    title="Delete practice"
                  >
                    🗑️
                  </button>
                </div>
                <div className={styles.itemBody}>
                  <div className={styles.practiceSection}>
                    <h4>Instructions</h4>
                    {editingScript?.type === 'practices' && editingScript.index === idx && editingScript.field === 'instructions' ? (
                      <div className={styles.scriptEditor}>
                        <textarea
                          className={styles.scriptTextarea}
                          value={editingScript.text}
                          onChange={(e) => setEditingScript({ ...editingScript, text: e.target.value })}
                          rows={4}
                        />
                        <div className={styles.scriptActions}>
                          <button
                            onClick={() => savePracticeField(idx, 'instructions', editingScript.text)}
                            className={styles.saveScriptButton}
                          >
                            Save
                          </button>
                          <button onClick={() => setEditingScript(null)} className={styles.cancelButton}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.scriptPreview}>
                        <p>{practice.instructions}</p>
                        <button
                          onClick={() => setEditingScript({ type: 'practices', index: idx, field: 'instructions', text: practice.instructions })}
                          className={styles.editScriptButton}
                        >
                          Edit Instructions
                        </button>
                      </div>
                    )}
                  </div>
                  <div className={styles.practiceSection}>
                    <h4>Practice Audio (Optional)</h4>
                    {practice.audio?.audioUrl ? (
                      <div className={styles.audioPlayer}>
                        <audio controls src={practice.audio.audioUrl}></audio>
                        <div className={styles.audioInfo}>
                          <span>Duration: {practice.audio.duration}s</span>
                        </div>
                        <div className={styles.audioGenerate}>
                          <div className={styles.voiceSelector}>
                            <label>Voice:</label>
                            <select id={`voice-practice-${idx}`} defaultValue={practice.audio?.voiceId || 'mia'}>
                              {voices.map(v => (
                                <option key={v.voice_id} value={v.voice_id}>{v.name || v.voice_id}</option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.speedSelector}>
                            <label>Speed:</label>
                            <input
                              type="number"
                              id={`speed-practice-${idx}`}
                              min="0.5"
                              max="2.0"
                              step="0.05"
                              defaultValue={practice.audio?.speed || 0.95}
                            />
                            <span>x</span>
                          </div>
                          <button
                            className={styles.regenerateButton}
                            onClick={() => {
                              const voiceSelect = document.getElementById(`voice-practice-${idx}`) as HTMLSelectElement;
                              const speedInput = document.getElementById(`speed-practice-${idx}`) as HTMLInputElement;
                              generatePracticeAudio(idx, voiceSelect?.value, parseFloat(speedInput?.value));
                            }}
                            disabled={generating === `practice-${idx}`}
                          >
                            {generating === `practice-${idx}` ? 'Generating...' : '🎙️ Regenerate Audio'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.audioGenerate}>
                        <div className={styles.voiceSelector}>
                          <label>Voice:</label>
                          <select id={`voice-practice-${idx}`} defaultValue={practice.audio?.voiceId || 'mia'}>
                            {voices.map(v => (
                              <option key={v.voice_id} value={v.voice_id}>{v.name || v.voice_id}</option>
                            ))}
                          </select>
                        </div>
                        <div className={styles.speedSelector}>
                          <label>Speed:</label>
                          <input
                            type="number"
                            id={`speed-practice-${idx}`}
                            min="0.5"
                            max="2.0"
                            step="0.05"
                            defaultValue={practice.audio?.speed || 0.90}
                          />
                          <span>x</span>
                        </div>
                        <button
                          className={styles.generateButton}
                          onClick={() => {
                            const voiceSelect = document.getElementById(`voice-practice-${idx}`) as HTMLSelectElement;
                            const speedInput = document.getElementById(`speed-practice-${idx}`) as HTMLInputElement;
                            generatePracticeAudio(idx, voiceSelect?.value, parseFloat(speedInput?.value));
                          }}
                          disabled={generating === `practice-${idx}`}
                        >
                          {generating === `practice-${idx}` ? 'Generating...' : '🎙️ Generate Audio'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'yaml' && (
          <div className={styles.yamlPanel}>
            <div className={styles.yamlHeader}>
              <h2>YAML Editor</h2>
              <p>Edit the module structure directly in YAML format. Download YAML to export for NotebookLM.</p>
              <div className={styles.yamlActions}>
                <button
                  onClick={() => updateModuleFromYaml(yamlContent)}
                  className={styles.saveYamlBtn}
                >
                  💾 Save YAML Changes
                </button>
                <button
                  onClick={downloadYaml}
                  className={styles.downloadYamlBtn}
                >
                  ⬇️ Download YAML
                </button>
              </div>
            </div>
            <div className={styles.editorContainer}>
              <Editor
                height="600px"
                defaultLanguage="yaml"
                value={yamlContent}
                onChange={(value) => setYamlContent(value || '')}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  automaticLayout: true,
                }}
              />
            </div>
          </div>
        )}
      </div>
      {/* PDF Page Selection Modal */}
      {pdfPageSelection && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Select PDF Page</h3>
            <p>
              This PDF has {pdfPageSelection.pageCount} page{pdfPageSelection.pageCount > 1 ? 's' : ''}.
              Select which page to extract as a PNG image for Slide {pdfPageSelection.slideNumber}.
            </p>
            <div className={styles.pageSelector}>
              <label>Page Number:</label>
              <input
                type="number"
                min="1"
                max={pdfPageSelection.pageCount}
                value={pdfPageSelection.selectedPage}
                onChange={(e) => setPdfPageSelection({
                  ...pdfPageSelection,
                  selectedPage: Math.min(Math.max(1, parseInt(e.target.value) || 1), pdfPageSelection.pageCount),
                })}
              />
              <span>of {pdfPageSelection.pageCount}</span>
            </div>
            <div className={styles.modalActions}>
              <button onClick={uploadPdfPage} className={styles.confirmBtn}>
                Upload Page {pdfPageSelection.selectedPage} as PNG
              </button>
              <button onClick={() => setPdfPageSelection(null)} className={styles.cancelBtn}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Error Dialog */}
      {errorDialog && (
        <div className={styles.modalOverlay} onClick={() => setErrorDialog(null)}>
          <div className={styles.errorDialog} onClick={(e) => e.stopPropagation()}>
            <div className={styles.errorHeader}>
              <h2>{errorDialog.title}</h2>
              <button className={styles.closeButton} onClick={() => setErrorDialog(null)}>×</button>
            </div>
            <div className={styles.errorBody}>
              <p>{errorDialog.message}</p>
              {errorDialog.fields && (
                <div className={styles.errorFields}>
                  {Object.entries(errorDialog.fields).map(([field, message]) => (
                    <div key={field} className={styles.errorField}>
                      <strong>{field}:</strong> {message}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.errorFooter}>
              <button className={styles.okButton} onClick={() => setErrorDialog(null)}>OK</button>
            </div>
          </div>
        </div>
      )}
      {/* Confirm Dialog */}
      {confirmDialog && (
        <div className={styles.modalOverlay} onClick={() => setConfirmDialog(null)}>
          <div className={styles.confirmDialog} onClick={(e) => e.stopPropagation()}>
            <div className={styles.confirmHeader}>
              <h2>{confirmDialog.title}</h2>
              <button className={styles.closeButton} onClick={() => setConfirmDialog(null)}>×</button>
            </div>
            <div className={styles.confirmBody}>
              <p>{confirmDialog.message}</p>
            </div>
            <div className={styles.confirmFooter}>
              <button className={styles.cancelButton} onClick={() => setConfirmDialog(null)}>Cancel</button>
              <button className={styles.confirmDeleteButton} onClick={confirmDialog.onConfirm}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TrainingModuleEditor;
