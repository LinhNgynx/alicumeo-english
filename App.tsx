
import React, { useState, useEffect, useMemo } from 'react';
import { Page, GrammarLesson } from './types';
import { LESSONS } from './data';
import Home from './components/Home';
import Flashcards from './components/Flashcards';
import Grammar from './components/Grammar';
import Rearrange from './components/Rearrange';
import About from './components/About';
import { Layout } from './components/Layout';
import PasswordGate from './components/PasswordGate';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showVi, setShowVi] = useState(false);
  const [isSnowing, setIsSnowing] = useState(false);
  const [sessionTime, setSessionTime] = useState<number | null>(null);
  const [timerActive, setTimerActive] = useState(false);
  const [toaster, setToaster] = useState<{ show: boolean; type: 'success' | 'fail' }>({ show: false, type: 'success' });

  const currentLesson = LESSONS[currentLessonIndex];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    let interval: any;
    if (timerActive && sessionTime !== null && sessionTime > 0) {
      interval = setInterval(() => {
        setSessionTime((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);
    } else if (sessionTime === 0) {
      setTimerActive(false);
      alert("Great job! Focus session finished.");
    }
    return () => clearInterval(interval);
  }, [timerActive, sessionTime]);

  const startTimer = (minutes: number) => {
    setSessionTime(minutes * 60);
    setTimerActive(true);
  };

  const stopTimer = () => {
    setTimerActive(false);
    setSessionTime(null);
  };

  const triggerToaster = (type: 'success' | 'fail' = 'success') => {
    setToaster({ show: false, type });
    setTimeout(() => {
      setToaster({ show: true, type });
    }, 10);
    
    setTimeout(() => {
      setToaster((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleSnow = () => setIsSnowing(!isSnowing);
  const toggleTranslation = () => setShowVi(!showVi);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const nextLesson = () => {
    if (currentLessonIndex < LESSONS.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectLesson = (index: number) => {
    setCurrentLessonIndex(index);
    setCurrentPage('flashcards');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home onStart={() => setCurrentPage('flashcards')} onSelectLesson={handleSelectLesson} isDarkMode={isDarkMode} />;
      case 'flashcards':
        return <Flashcards lesson={currentLesson} showVi={showVi} toggleVi={toggleTranslation} onNextLesson={nextLesson} onPrevLesson={prevLesson} hasNext={currentLessonIndex < LESSONS.length - 1} hasPrev={currentLessonIndex > 0} isDarkMode={isDarkMode} />;
      case 'grammar':
        return <Grammar lesson={currentLesson} showVi={showVi} onCorrect={() => triggerToaster('success')} onIncorrect={() => triggerToaster('fail')} onNextLesson={nextLesson} onPrevLesson={prevLesson} hasNext={currentLessonIndex < LESSONS.length - 1} hasPrev={currentLessonIndex > 0} isDarkMode={isDarkMode} />;
      case 'rearrange':
        return <Rearrange lesson={currentLesson} showVi={showVi} onCorrect={() => triggerToaster('success')} onIncorrect={() => triggerToaster('fail')} onNextLesson={nextLesson} onPrevLesson={prevLesson} hasNext={currentLessonIndex < LESSONS.length - 1} hasPrev={currentLessonIndex > 0} isDarkMode={isDarkMode} />;
      case 'about':
        return <About isDarkMode={isDarkMode} />;
      default:
        return <Home onStart={() => setCurrentPage('flashcards')} onSelectLesson={handleSelectLesson} isDarkMode={isDarkMode} />;
    }
  };

  return (
    <PasswordGate password="toeic123alicumeo">
      <div className={`${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#fafafc] text-slate-900'} min-h-screen transition-all duration-500 relative flex flex-col`}>
        {isSnowing && (isDarkMode ? <SnowEffect /> : <RainEffect />)}
      
      {/* Elegant Toaster Implementation - Bigger Image & Premium Style */}
{/* Elegant Toaster Implementation - Orange & Slate Theme */}
<div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[400] transition-all duration-1200 ease-[cubic-bezier(0.23,1,0.32,1)] ${toaster.show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95 pointer-events-none'}`}>
  <div className={`
    flex items-center gap-5 px-6 py-5 rounded-[2rem] backdrop-blur-xl border 
    shadow-[0_30px_60px_-10px_rgba(0,0,0,0.2)] min-w-[300px] sm:min-w-[380px]
    ${toaster.type === 'success' 
      ? 'bg-orange-500/90 border-orange-400/40' 
      : 'bg-slate-700/90 border-slate-600/40'} 
  `}>
    {/* Elegant Image Container */}
    <div className={`
      flex-shrink-0 
      w-16 h-16 sm:w-20 sm:h-20 
      rounded-[1.2rem] overflow-hidden 
      border-2 border-white/20
      transition-shadow duration-500
      ${toaster.type === 'success' 
        ? 'shadow-[0_8px_24px_-4px_rgba(249,115,22,0.6)]' /* Orange Glow */
        : 'shadow-[0_8px_24px_-4px_rgba(71,85,105,0.6)]'  /* Slate Glow */
      }
    `}>
      <img 
        src={toaster.type === 'success' ? "/images/right.jpg" : "/images/wrong.jpg"}
        alt={toaster.type === 'success' ? 'Success Cat' : 'Error Cat'}
        className="w-full h-full object-cover scale-110"
      />
    </div>
    
    <div className="flex-grow pt-1">
      <h4 className="text-white font-black text-xl sm:text-2xl tracking-tight leading-none mb-1.5 drop-shadow-sm">
        {toaster.type === 'success' ? 'Đúng rồi mà nối!' : 'Sai rồi mà nối!'}
      </h4>
      <p className="text-white/90 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em]">
        {toaster.type === 'success' ? 'Chọt dô nách cái' : 'Chọt dô nách cái'}
      </p>
    </div>

  </div>
</div>

  {/* Success / Fail visual effects */}
  {toaster.show && toaster.type === 'success' && <ConfettiEffect />}
  {toaster.show && toaster.type === 'fail' && <ThunderEffect />}

  <Layout 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isSnowing={isSnowing}
        toggleSnow={toggleSnow}
        showVi={showVi}
        toggleTranslation={toggleTranslation}
        sessionTime={sessionTime}
        timerActive={timerActive}
        startTimer={startTimer}
        stopTimer={stopTimer}
        formatTime={formatTime}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
        lessonsCount={LESSONS.length}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-12 page-enter flex-grow w-full">
          {renderContent()}
        </div>
      </Layout>
      </div>
    </PasswordGate>
  );
};

const SnowEffect: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: `${Math.random() * 8 + 10}s`,
      size: `${Math.random() * 8 + 4}px`,
      delay: `-${Math.random() * 10}s`,
      char: Math.random() > 0.5 ? '❄' : '•'
    }));
  }, []);

  return (
    <div className="snow-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="snow-particle"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.size
          }}
        >
          {p.char}
        </div>
      ))}
    </div>
  );
};

const RainEffect: React.FC = () => {
  const drops = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: `${Math.random() * 0.8 + 0.8}s`,
      delay: `-${Math.random() * 1.5}s`,
      height: `${Math.random() * 18 + 8}px`,
      opacity: `${Math.random() * 0.6 + 0.4}`,
    }));
  }, []);

  return (
    <div className="rain-container pointer-events-none">
      {drops.map((d) => (
        <div
          key={d.id}
          className="rain-drop"
          style={{
            left: d.left,
            animationDelay: d.delay,
            animationDuration: d.duration,
            height: d.height,
            opacity: d.opacity,
          }}
        />
      ))}
    </div>
  );
};

const ConfettiEffect: React.FC = () => {
  const pieces = useMemo(() => {
    const colors = ['#FF6B6B', '#FFD166', '#06D6A0', '#4D96FF', '#9B5DE5', '#FF8FAB'];
    return Array.from({ length: 36 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      delay: `${Math.random() * 0.5}s`,
      duration: `${Math.random() * 1.2 + 1.1}s`,
      size: `${Math.random() * 10 + 8}px`,
      color: colors[i % colors.length],
      rotate: Math.floor(Math.random() * 360),
    }));
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes confetti-fall {
        0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
        100% { transform: translateY(110vh) rotate(720deg); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[450] overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: '-10vh',
            width: p.size,
            height: `calc(${p.size} * 0.6)`,
            background: p.color,
            borderRadius: '3px',
            transform: `rotate(${p.rotate}deg)`,
            animation: `confetti-fall ${p.duration} cubic-bezier(.2,.8,.2,1) ${p.delay} forwards`,
            boxShadow: '0 6px 18px rgba(0,0,0,0.12)'
          }}
        />
      ))}
    </div>
  );
};

const ThunderEffect: React.FC = () => {
  const [flash, setFlash] = useState(false);
  const [boltVisible, setBoltVisible] = useState(false);
  const bolt = useMemo(() => ({ left: `${20 + Math.random() * 60}vw`, scale: 0.9 + Math.random() * 1.4 }), []);

  useEffect(() => {
    // inject necessary keyframes for bolt drawing
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes bolt-fade {
        0% { opacity: 0; transform: translateY(-6vh) scale(1); }
        10% { opacity: 1; }
        100% { opacity: 0; transform: translateY(8vh) scale(1.05); }
      }
      @keyframes bolt-draw {
        0% { stroke-dashoffset: 1000; }
        60% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: 0; }
      }
    `;
    document.head.appendChild(style);

    // Quick double-flash + bolt sequence
    const t1 = setTimeout(() => { setFlash(true); setBoltVisible(true); }, 60);
    const t2 = setTimeout(() => { setFlash(false); setBoltVisible(false); }, 180);
    const t3 = setTimeout(() => { setFlash(true); setBoltVisible(true); }, 360);
    const t4 = setTimeout(() => { setFlash(false); setBoltVisible(false); }, 480);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      style.remove();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[450]">
      {/* global dim layer */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.24)' }} />

      {/* flash overlay */}
      <div style={{ position: 'absolute', inset: 0, background: flash ? 'rgba(255,255,255,0.94)' : 'transparent', transition: 'opacity 120ms' }} />

      {/* lightning bolt SVG */}
      {boltVisible && (
        <div style={{ position: 'absolute', left: bolt.left, top: '12vh', transform: `scale(${bolt.scale})`, pointerEvents: 'none', width: '140px', height: '260px' }}>
          <svg viewBox="0 0 140 260" width="140" height="260" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="boltGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M60 0 L28 96 L72 88 L40 220 L112 80 L68 96 L100 0 Z"
              fill="none"
              stroke="#FFF7C2"
              strokeWidth={8}
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{
                filter: 'url(#boltGlow)',
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
                animation: 'bolt-draw 420ms ease-out forwards, bolt-fade 480ms linear forwards'
              }}
            />
            <path
              d="M60 0 L28 96 L72 88 L40 220 L112 80 L68 96 L100 0 Z"
              fill="#FFD94D"
              opacity={0.85}
              style={{
                transformOrigin: 'center top',
                animation: 'bolt-fade 480ms linear forwards'
              }}
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default App;
