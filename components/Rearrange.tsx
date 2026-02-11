import React, { useState, useEffect } from 'react';
import { GrammarLesson } from '../types';

interface RearrangeProps {
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

const Rearrange: React.FC<RearrangeProps> = ({ lesson, showVi, onCorrect, onIncorrect, onNextLesson, onPrevLesson, hasNext, hasPrev, isDarkMode }) => {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentExercise = lesson.rearrangeExercises[exerciseIndex];

  useEffect(() => {
    resetExercise();
  }, [exerciseIndex, lesson]);

  const resetExercise = () => {
    const words = currentExercise.sentenceEn
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .split(" ")
      .sort(() => Math.random() - 0.5);
    setAvailableWords(words);
    setSelectedWords([]);
    setIsCorrect(null);
  };

  const addWord = (word: string, index: number) => {
    setSelectedWords([...selectedWords, word]);
    const newAvailable = [...availableWords];
    newAvailable.splice(index, 1);
    setAvailableWords(newAvailable);
  };

  const removeWord = (word: string, index: number) => {
    const newSelected = [...selectedWords];
    newSelected.splice(index, 1);
    setSelectedWords(newSelected);
    setAvailableWords([...availableWords, word]);
  };

  const checkAnswer = () => {
    const userSentence = selectedWords.join(" ").toLowerCase();
    const correctSentence = currentExercise.sentenceEn
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .toLowerCase();
    const result = userSentence === correctSentence;
    
    setIsCorrect(result);
    if (result) {
      onCorrect();
    } else {
      onIncorrect();
    }
  };

  const nextExercise = () => {
    setExerciseIndex((prev) => (prev + 1) % lesson.rearrangeExercises.length);
  };

  return (
    <div className="flex flex-col items-center space-y-8 sm:space-y-12 pb-8 sm:pb-12 w-full max-w-3xl mx-auto">
      <div className="text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-black mb-2 leading-tight">Sentence Builder</h2>
        <div className="flex items-center justify-center gap-2">
           <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest">TASK</span>
           <span className={`text-${isDarkMode ? 'slate-500' : 'slate-400'} font-bold text-sm`}>{exerciseIndex + 1} / {lesson.rearrangeExercises.length}</span>
        </div>
      </div>

      <div className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-xl border-4 min-h-[400px] sm:min-h-[450px] flex flex-col justify-between text-left mx-4 sm:mx-0`}>
        
        {/* Prompt Section */}
        <div className="text-center mb-6 sm:mb-8">
           <div className={`w-16 h-16 sm:w-20 sm:h-20 ${isDarkMode ? 'bg-orange-900/30 border-slate-700' : 'bg-orange-100/50 border-white'} rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-4 border-4 shadow-xl`}>
             💬
           </div>
           <p className={`text-2xl sm:text-3xl font-black ${isDarkMode ? 'text-slate-100' : 'text-slate-800'} leading-tight px-4`}>
             {currentExercise.sentenceVi}
           </p>
           <span className="text-[10px] sm:text-xs font-black text-orange-500 uppercase tracking-widest mt-2 block">PUT THE WORDS IN ORDER</span>
        </div>

        {/* Builder Area */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 p-6 sm:p-8 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-[#f8f9fb] border-slate-100'} rounded-[1.5rem] sm:rounded-[2rem] border-4 border-dashed min-h-[100px] sm:min-h-[120px] transition-all`}>
          {selectedWords.map((word, idx) => (
            <button
              key={`${word}-${idx}`}
              onClick={() => removeWord(word, idx)}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 text-white text-base sm:text-xl font-black rounded-xl sm:rounded-2xl shadow-lg hover:scale-105 transition-transform active:scale-95 animate-slideUp"
            >
              {word}
            </button>
          ))}
        </div>

        {/* Word Selection Deck */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          {availableWords.map((word, idx) => (
            <button
              key={`${word}-${idx}`}
              onClick={() => addWord(word, idx)}
              className={`px-4 sm:px-6 py-2 sm:py-3 ${isDarkMode ? 'bg-slate-700 text-slate-100 border-slate-600' : 'bg-white text-slate-800 border-slate-100'} border-2 rounded-xl sm:rounded-2xl shadow-sm text-base sm:text-xl font-bold hover:border-orange-500 ${isDarkMode ? 'hover:text-orange-400' : 'hover:text-orange-500'} transition-all hover:-translate-y-1 active:translate-y-0.5`}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 sm:gap-8 w-full px-4">
        <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={checkAnswer}
            disabled={selectedWords.length === 0}
            className={`flex-1 sm:flex-grow-0 sm:px-12 py-4 sm:py-5 ${isDarkMode ? 'bg-slate-100 text-slate-900' : 'bg-orange-600 text-white'} text-lg sm:text-xl font-black rounded-2xl sm:rounded-[2rem] shadow-2xl disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-500 transition-all active:scale-95 uppercase tracking-widest`}
          >
            CHECK ANSWER
          </button>
          {isCorrect && (
            <button
              onClick={nextExercise}
              className="flex-1 sm:flex-grow-0 sm:px-12 py-4 sm:py-5 bg-green-500 text-white text-lg sm:text-xl font-black rounded-2xl sm:rounded-[2rem] shadow-2xl hover:bg-green-600 transition-all active:scale-95 animate-pulse uppercase tracking-widest"
            >
              NEXT TASK
            </button>
          )}
        </div>

        {/* Lesson Navigation */}
        <div className={`flex items-center gap-3 sm:gap-4 w-full border-t-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} pt-6 sm:pt-8`}>
           <button 
            disabled={!hasPrev}
            onClick={onPrevLesson}
            className={`flex-1 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-3xl ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'} font-black text-[10px] sm:text-sm hover:bg-orange-500 hover:text-white transition-all disabled:opacity-30 uppercase whitespace-nowrap`}
           >
             PREV LESSON
           </button>
           <button 
            disabled={!hasNext}
            onClick={onNextLesson}
            className={`flex-1 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-3xl ${isDarkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-600'} font-black text-[10px] sm:text-sm hover:bg-orange-500 hover:text-white disabled:opacity-30 transition-all uppercase whitespace-nowrap`}
           >
             NEXT LESSON
           </button>
        </div>
      </div>
    </div>
  );
};

export default Rearrange;