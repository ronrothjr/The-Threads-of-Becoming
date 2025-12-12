import React, { useRef, useEffect, useState } from 'react';
import styles from './PersistentVideo.module.css';

interface PersistentVideoProps {
  isHomePage: boolean;
}

const PersistentVideo: React.FC<PersistentVideoProps> = ({ isHomePage }) => {
  const homeVideoRef = useRef<HTMLVideoElement | null>(null);
  const minimizedVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Sync video state between both video elements
  useEffect(() => {
    const homeVideo = homeVideoRef.current;
    const minimizedVideo = minimizedVideoRef.current;

    if (!homeVideo || !minimizedVideo) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = (e: Event) => {
      const video = e.target as HTMLVideoElement;
      setCurrentTime(video.currentTime);
    };

    homeVideo.addEventListener('play', handlePlay);
    homeVideo.addEventListener('pause', handlePause);
    homeVideo.addEventListener('timeupdate', handleTimeUpdate);

    minimizedVideo.addEventListener('play', handlePlay);
    minimizedVideo.addEventListener('pause', handlePause);
    minimizedVideo.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      homeVideo.removeEventListener('play', handlePlay);
      homeVideo.removeEventListener('pause', handlePause);
      homeVideo.removeEventListener('timeupdate', handleTimeUpdate);

      minimizedVideo.removeEventListener('play', handlePlay);
      minimizedVideo.removeEventListener('pause', handlePause);
      minimizedVideo.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  // Sync playback state and time between videos when switching pages
  useEffect(() => {
    const homeVideo = homeVideoRef.current;
    const minimizedVideo = minimizedVideoRef.current;

    if (!homeVideo || !minimizedVideo) return;

    if (isHomePage) {
      // On home page: sync minimized to home, ensure minimized is paused
      if (!minimizedVideo.paused) {
        minimizedVideo.pause();
      }
      minimizedVideo.currentTime = homeVideo.currentTime;
    } else if (isPlaying && !isClosed) {
      // On other pages: sync minimized to home time and play it
      minimizedVideo.currentTime = homeVideo.currentTime;
      if (!homeVideo.paused) {
        homeVideo.pause();
      }
      if (minimizedVideo.paused) {
        minimizedVideo.play().catch(() => {
          // Auto-play might be blocked
        });
      }
    }
  }, [isHomePage, isPlaying, isClosed]);

  // Reset closed state when returning to home
  useEffect(() => {
    if (isHomePage) {
      setIsClosed(false);
    }
  }, [isHomePage]);

  const togglePlayPause = () => {
    const video = isHomePage ? homeVideoRef.current : minimizedVideoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  const toggleFullscreen = () => {
    const video = isHomePage ? homeVideoRef.current : minimizedVideoRef.current;
    if (video) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        video.requestFullscreen();
      }
    }
  };

  const closeMinimized = () => {
    if (minimizedVideoRef.current) {
      minimizedVideoRef.current.pause();
    }
    setIsClosed(true);
  };

  const showMinimized = !isHomePage && isPlaying && !isClosed;

  // Insert home video into the page container
  useEffect(() => {
    const homeVideo = homeVideoRef.current;
    const container = document.getElementById('home-video-wrapper');

    if (homeVideo && container && isHomePage) {
      if (!container.contains(homeVideo.parentElement!)) {
        container.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = styles.videoWrapper;
        wrapper.appendChild(homeVideo);
        container.appendChild(wrapper);
      }
    }
  }, [isHomePage]);

  return (
    <>
      {/* Home page video - will be inserted into #home-video-wrapper */}
      <div style={{ display: 'none' }}>
        <video
          ref={homeVideoRef}
          poster="/video-poster.jpg"
          controls
          className={styles.video}
        >
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Minimized video on other pages */}
      {showMinimized && (
        <div className={styles.minimizedWrapper}>
          <button
            className={styles.closeButton}
            onClick={closeMinimized}
            aria-label="Close video"
          >
            ×
          </button>
          <video
            ref={minimizedVideoRef}
            poster="/video-poster.jpg"
            className={styles.minimizedVideo}
          >
            <source src="/intro-video.mp4" type="video/mp4" />
          </video>
          <div className={styles.controls}>
            <button
              onClick={togglePlayPause}
              className={styles.controlButton}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={toggleFullscreen}
              className={styles.controlButton}
              aria-label="Fullscreen"
            >
              ⛶
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PersistentVideo;
