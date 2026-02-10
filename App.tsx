
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
        return <Home onStart={() => setCurrentPage('flashcards')} onSelectLesson={handleSelectLesson} />;
      case 'flashcards':
        return <Flashcards lesson={currentLesson} showVi={showVi} toggleVi={toggleTranslation} onNextLesson={nextLesson} onPrevLesson={prevLesson} hasNext={currentLessonIndex < LESSONS.length - 1} hasPrev={currentLessonIndex > 0} />;
      case 'grammar':
        return <Grammar lesson={currentLesson} showVi={showVi} onCorrect={() => triggerToaster('success')} onIncorrect={() => triggerToaster('fail')} onNextLesson={nextLesson} onPrevLesson={prevLesson} hasNext={currentLessonIndex < LESSONS.length - 1} hasPrev={currentLessonIndex > 0} />;
      case 'rearrange':
        return <Rearrange lesson={currentLesson} showVi={showVi} onCorrect={() => triggerToaster('success')} onIncorrect={() => triggerToaster('fail')} onNextLesson={nextLesson} onPrevLesson={prevLesson} hasNext={currentLessonIndex < LESSONS.length - 1} hasPrev={currentLessonIndex > 0} />;
      case 'about':
        return <About />;
      default:
        return <Home onStart={() => setCurrentPage('flashcards')} onSelectLesson={handleSelectLesson} />;
    }
  };

  return (
    <PasswordGate password="toeic123alicumeo">
      <div className={`${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#fafafc] text-slate-900'} min-h-screen transition-all duration-500 relative flex flex-col`}>
        {isSnowing && <SnowEffect />}
      
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
        {toaster.type === 'success' ? 'Đúng mà nối!' : 'Sai mà nối!'}
      </h4>
      <p className="text-white/90 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em]">
        {toaster.type === 'success' ? 'Chọt dô nách cái' : 'Chọt dô nách cái'}
      </p>
    </div>

  </div>
</div>

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

export default App;
