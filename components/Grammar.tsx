import React, { useState } from 'react';
import { GrammarLesson, Exercise } from '../types';

interface GrammarProps {
  lesson: GrammarLesson;
  showVi: boolean;
  onCorrect: () => void;
  onIncorrect: () => void;
  onNextLesson: () => void;
  onPrevLesson: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  isDarkMode: boolean;
}

const Grammar: React.FC<GrammarProps> = ({ lesson, showVi, onCorrect, onIncorrect, onNextLesson, onPrevLesson, hasNext, hasPrev, isDarkMode }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleCheck = (exerciseId: string, correct: string) => {
    const isCorrect = (answers[exerciseId] || '').toLowerCase().trim() === correct.toLowerCase().trim();
    if (isCorrect) {
      onCorrect();
    } else {
      onIncorrect();
    }
  };

  const renderExerciseInput = (ex: Exercise) => {
    switch (ex.type) {
      case 'fill':
      case 'complete':
        return (
          <input
            type="text"
            placeholder="Type answer..."
            className={`px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'} border-2 focus:border-orange-500 outline-none w-full md:w-80 text-lg sm:text-xl font-bold transition-all shadow-sm`}
            onChange={(e) => setAnswers({ ...answers, [ex.id]: e.target.value })}
            value={answers[ex.id] || ''}
          />
        );
      case 'mcq':
      case 'meaning':
        return (
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full">
            {ex.options?.map((opt) => (
              <button
                key={opt}
                onClick={() => setAnswers({ ...answers, [ex.id]: opt })}
                className={`flex-grow sm:flex-none px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 text-sm sm:text-lg font-black transition-all ${
                  answers[ex.id] === opt 
                  ? 'border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                  : isDarkMode ? 'border-slate-700 bg-slate-900 text-slate-400 hover:border-orange-200' : 'border-slate-200 bg-white text-slate-600 hover:border-orange-200'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 sm:space-y-16 pb-8 sm:pb-12 w-full">
      <div className="text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-black mb-2 leading-tight uppercase tracking-tighter">{lesson.topic}</h2>
        <div className="inline-block px-4 sm:px-6 py-2 bg-orange-500 text-white rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-sm uppercase tracking-widest">
           FOCUS: {lesson.focus}
        </div>
      </div>

      {/* Explanation Section */}
      <section className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] border-4 shadow-xl text-left mx-4 sm:mx-0`}>
        <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
          <span className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl">💡</span>
          Grammar Tip
        </h3>
        <p className={`text-lg sm:text-2xl font-medium ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} leading-relaxed italic`}>
          "{lesson.explanation}"
        </p>
        {showVi && (
          <p className={`mt-3 sm:mt-4 text-sm sm:text-base ${isDarkMode ? 'text-slate-500 border-slate-700' : 'text-slate-400 border-slate-50'} font-bold border-t pt-3 sm:pt-4`}>
            ({lesson.explanationVi})
          </p>
        )}
      </section>

      {/* Story Section */}
      <section className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-xl border-4 relative overflow-hidden text-left mx-4 sm:mx-0`}>
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-500/5 rounded-full -translate-y-24 translate-x-24 blur-3xl"></div>
        <h3 className={`text-2xl sm:text-3xl font-black mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 relative z-10 ${isDarkMode ? 'text-white' : 'text-slate-900'} uppercase tracking-tighter`}>
           <span className="text-orange-500">📖</span> Context Dialogue
        </h3>
        <div className="space-y-6 sm:space-y-8 relative z-10">
          {lesson.storyEn.map((sentence, idx) => (
            <div key={idx} className="group cursor-help transition-all">
              <p className={`text-lg sm:text-2xl font-bold leading-relaxed ${isDarkMode ? 'text-slate-100' : 'text-slate-700'} group-hover:text-orange-500 transition-colors`}>
                {highlightGrammar(sentence, lesson.focus)}
              </p>
              {showVi && (
                <p className={`text-[10px] sm:text-sm font-black ${isDarkMode ? 'text-slate-500' : 'text-slate-400'} mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest`}>
                  {lesson.storyVi[idx]}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Exercises Section */}
      <section className="space-y-6 sm:space-y-8 text-left px-4 sm:px-0">
        <h3 className="text-2xl sm:text-3xl font-black flex items-center gap-2 sm:gap-3">
           <span className="text-orange-500">✍️</span> Practice Challenge
        </h3>
        <div className="grid gap-6 sm:gap-8">
          {lesson.exercises.map((ex) => (
              <div key={ex.id} className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] border-4 shadow-sm transition-all hover:shadow-lg`}>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                 <span className={`px-2 sm:px-3 py-0.5 sm:py-1 ${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-[#f8f9fb] border-slate-100'} text-slate-400 text-[8px] sm:text-[10px] font-black uppercase rounded-full tracking-widest border`}>
                   {ex.type.replace('_', ' ')}
                 </span>
              </div>
              <div className="mb-5 sm:mb-6">
                 <p className={`text-xl sm:text-2xl font-black mb-1 sm:mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'} leading-tight`}>{ex.questionEn}</p>
                 {showVi && <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold italic">({ex.questionVi})</p>}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                {renderExerciseInput(ex)}

                <button
                  onClick={() => handleCheck(ex.id, ex.correctAnswer)}
                  className={`w-full sm:w-auto px-10 py-3 sm:py-4 ${isDarkMode ? 'bg-slate-100 text-slate-900' : 'bg-orange-600 text-white'} font-black rounded-xl sm:rounded-2xl hover:bg-orange-500 transition-all active:scale-95 shadow-lg uppercase tracking-widest text-sm sm:text-base`}
                >
                  CHECK
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lesson Navigation */}
      <div className={`flex items-center gap-3 sm:gap-4 w-full border-t-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} pt-8 sm:pt-12 px-4 sm:px-0`}>
           <button 
            disabled={!hasPrev}
            onClick={onPrevLesson}
            className={`flex-1 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-[2rem] ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'} font-black text-[10px] sm:text-sm hover:bg-orange-500 hover:text-white transition-all disabled:opacity-30 uppercase tracking-widest`}
           >
             PREV LESSON
           </button>
           <button 
            disabled={!hasNext}
            onClick={onNextLesson}
            className="flex-1 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-[2rem] bg-orange-500 text-white font-black text-[10px] sm:text-sm hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 disabled:opacity-30 uppercase tracking-widest"
           >
             NEXT LESSON
           </button>
      </div>
    </div>
  );
};

const highlightGrammar = (text: string, focus: string) => {
  const words = text.split(' ');
  const focusLower = focus.toLowerCase();
  return words.map((word, i) => {
    const wordLower = word.toLowerCase();
    const isKeyword = focusLower.includes('present') && (wordLower.endsWith('s') || wordLower.endsWith('es') || wordLower.endsWith('s.') || wordLower.endsWith('es.'));
    const isWill = focusLower.includes('will') && (wordLower === 'will');
    const isCanCould = (focusLower.includes('can') || focusLower.includes('could')) && (wordLower === 'can' || wordLower === 'could');
    const isThereIsAre = (focusLower.includes('there is') || focusLower.includes('there are')) && (wordLower === 'is' || wordLower === 'are');
    
    if (isKeyword || isWill || isCanCould || isThereIsAre) {
      return <span key={i} className="text-orange-500 font-black underline decoration-orange-500/20 decoration-4 underline-offset-8">{word} </span>;
    }
    return word + ' ';
  });
};

export default Grammar;