import { createRoot } from 'react-dom/client';
import { useEffect, useState } from 'react';
import './intro.css';

const INTRO_DURATION = 2400;

function MacIntro() {
  const [visible, setVisible] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [playback, setPlayback] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const replay = (event) => {
      if (event.persisted && !motion.matches) {
        setPlayback((count) => count + 1);
        setVisible(true);
      }
    };
    const respectMotion = () => {
      if (motion.matches) setVisible(false);
    };
    window.addEventListener('pageshow', replay);
    motion.addEventListener('change', respectMotion);
    return () => {
      window.removeEventListener('pageshow', replay);
      motion.removeEventListener('change', respectMotion);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const dismiss = () => setVisible(false);
    // Always reveal the page, even if an animation event never arrives.
    const timeout = window.setTimeout(dismiss, INTRO_DURATION + 300);
    const events = ['pointerdown', 'keydown', 'wheel', 'touchstart', 'focusin', 'beforeprint'];
    for (const event of events) window.addEventListener(event, dismiss, { passive: true });
    return () => {
      window.clearTimeout(timeout);
      for (const event of events) window.removeEventListener(event, dismiss);
    };
  }, [visible, playback]);

  if (!visible) return null;

  return (
    <div
      key={playback}
      className="glass-intro"
      aria-hidden="true"
      style={{ '--intro-duration': `${INTRO_DURATION}ms` }}
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) setVisible(false);
      }}
    >
      <div className="glass-light" />
      <div className="glass-panel">
        <span className="glass-wordmark">macOS</span>
      </div>
    </div>
  );
}

createRoot(document.getElementById('intro-root')).render(<MacIntro />);
