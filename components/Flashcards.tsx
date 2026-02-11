
import React, { useState } from 'react';
import { GrammarLesson } from '../types';

interface FlashcardsProps {
  lesson: GrammarLesson;
  showVi: boolean;
  toggleVi: () => void;
  onNextLesson: () => void;
  onPrevLesson: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  isDarkMode: boolean;
}

const Flashcards: React.FC<FlashcardsProps> = ({ lesson, showVi, toggleVi, onNextLesson, onPrevLesson, hasNext, hasPrev, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentWord = lesson.vocabulary[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % lesson.vocabulary.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + lesson.vocabulary.length) % lesson.vocabulary.length);
  };

  const playPronunciation = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(currentWord.word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center space-y-8 sm:space-y-12 pb-8 sm:pb-12 w-full max-w-lg mx-auto">
      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-4xl font-black mb-2 leading-tight">Vocabulary Builder</h2>
        <div className="flex items-center justify-center gap-2">
           <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">{lesson.topic}</span>
           <span className="text-slate-400 dark:text-slate-500 font-bold text-sm">{currentIndex + 1} / {lesson.vocabulary.length}</span>
        </div>
      </div>

      <div 
        className="relative w-[90%] sm:w-full max-w-[320px] sm:max-w-sm aspect-[4/5] cursor-pointer perspective-1000 group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`flashcard-inner w-full h-full relative ${isFlipped ? 'flashcard-flipped' : ''}`}>
          {/* Front */}
        <div className={`flashcard-front absolute inset-0 w-full h-full ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-[2.5rem] sm:rounded-[3rem] shadow-xl flex flex-col items-center justify-center p-6 sm:p-10 ${isDarkMode ? 'border-slate-700' : 'border-slate-100'} border-4 transition-all group-hover:border-orange-500`}>
             <div className="mb-4">
                <span className={`${isDarkMode ? 'bg-orange-900/40 text-orange-400 border-orange-800' : 'bg-orange-100 text-orange-600 border-orange-200'} text-[10px] sm:text-[12px] font-black uppercase tracking-widest px-3 py-1 rounded-full border`}>
                  {currentWord.form}
                </span>
             </div>
             <div className="text-orange-500 text-4xl sm:text-5xl mb-4 sm:mb-6 font-black tracking-tight text-center">{currentWord.word}</div>
             <div className={`text-slate-400 dark:text-slate-500 font-mono text-lg sm:text-xl mb-8 sm:mb-10 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'} px-4 py-2 rounded-xl`}>{currentWord.ipa}</div>
             <button 
                onClick={playPronunciation}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl hover:scale-110 transition-all shadow-xl shadow-orange-500/20 active:scale-95"
             >
                🔊
             </button>
             <p className={`mt-8 sm:mt-12 text-[10px] sm:text-xs font-black ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} uppercase tracking-widest`}>TAP TO REVEAL</p>
          </div>

          {/* Back */}
          <div className="flashcard-back absolute inset-0 w-full h-full bg-orange-500 text-white rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-6 sm:p-10 border-4 border-orange-400 overflow-hidden">
             <div className="text-center space-y-6 sm:space-y-8 relative z-10 w-full">
                <div>
                   <h3 className="text-[10px] uppercase tracking-widest opacity-80 font-black mb-1 sm:mb-2">MEANING</h3>
                   <p className="text-xl sm:text-3xl font-black leading-tight underline decoration-white/30 px-2">{currentWord.meaningEn}</p>
                   {showVi && <p className="text-orange-100 font-bold mt-2 text-lg sm:text-xl">({currentWord.meaningVi})</p>}
                </div>
                <div className="w-12 sm:w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                <div>
                   <h3 className="text-[10px] uppercase tracking-widest opacity-80 font-black mb-1 sm:mb-2">EXAMPLE</h3>
                   <p className="text-base sm:text-xl italic font-medium px-4">"{currentWord.exampleEn}"</p>
                   {showVi && <p className="text-orange-100 mt-1 sm:mt-2 text-sm sm:text-base opacity-90">({currentWord.exampleVi})</p>}
                </div>

                <button 
                  onClick={(e) => { e.stopPropagation(); toggleVi(); }}
                  className="mt-4 px-5 sm:px-6 py-2 bg-white/20 hover:bg-white/40 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest transition-colors border border-white/40 shadow-sm"
                >
                  {showVi ? 'ẨN TIẾNG VIỆT' : 'DỊCH TIẾNG VIỆT'}
                </button>
             </div>
             {/* Subtle background decoration */}
             <div className="absolute top-0 right-0 -translate-y-8 translate-x-8 sm:-translate-y-12 sm:translate-x-12 rotate-12 pointer-events-none">
  <div className="w-40 h-40 sm:w-64 sm:h-64 overflow-hidden rounded-3xl opacity-20 grayscale">
    <img 
      src="/images/flashcard.jpg" 
      alt="" 
      className="w-full h-full object-cover"
    />
  </div>
</div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 w-full px-4">
        <div className="flex items-center gap-4 sm:gap-6">
          <button 
            onClick={handlePrev}
            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-100 text-slate-400'} shadow-xl border-4 flex items-center justify-center text-xl sm:text-2xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all active:scale-95`}
          >
            ←
          </button>
          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className={`flex-grow sm:flex-none px-8 sm:px-12 py-3.5 sm:py-4 ${isDarkMode ? 'bg-slate-100 text-slate-900' : 'bg-orange-600 text-white'} font-black rounded-2xl sm:rounded-3xl shadow-2xl hover:bg-orange-500 transition-all active:scale-95 text-xs sm:text-sm uppercase tracking-widest`}
          >
            {isFlipped ? 'HIDE BACK' : 'SHOW BACK'}
          </button>
          <button 
            onClick={handleNext}
            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-100 text-slate-400'} shadow-xl border-4 flex items-center justify-center text-xl sm:text-2xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all active:scale-95`}
          >
            →
          </button>
        </div>

        {/* Lesson Navigation */}
        <div className={`flex items-center gap-3 sm:gap-4 w-full ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} border-t-2 pt-6 sm:pt-8`}>
           <button 
            disabled={!hasPrev}
            onClick={onPrevLesson}
            className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'} font-black text-[10px] sm:text-xs hover:bg-orange-500 hover:text-white disabled:opacity-30 transition-all uppercase whitespace-nowrap`}
           >
             PREV LESSON
           </button>
           <button 
            disabled={!hasNext}
            onClick={onNextLesson}
            className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl ${isDarkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-600'} font-black text-[10px] sm:text-xs hover:bg-orange-500 hover:text-white disabled:opacity-30 transition-all uppercase whitespace-nowrap`}
           >
             NEXT LESSON
           </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
