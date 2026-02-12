import React, { useMemo } from 'react';
import { LESSONS } from '../data';

interface HomeProps {
  onStart: () => void;
  onSelectLesson: (index: number) => void;
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ onStart, onSelectLesson, isDarkMode }) => {
  // Big list of varied icons
  const iconPool = [
    '🚗', '💼', '📡', '🏪', '📊', '🎯', '🌍', '💡', 
    '🤝', '📈', '⚙️', '🎓', '🔬', '💻', '📱', '🏗️',
    '🚀', '📝', '🎨', '🔍', '✈️', '🏫', '🍎', '📚',
    '🎭', '🌟', '⭐', '🎪', '🎬', '🎤', '🎧', '🎵',
    '🎸', '🎹', '🎺', '🎻', '🥁', '🎮', '🎲', '🎰',
    '🏆', '🥇', '🥈', '🥉', '🏅', '🎖️', '🏵️', '🎗️',
    '🎫', '🎟️', '🎠', '🎡', '🎢', '🎰', '🗿', '🗽',
    '⛲', '⛺', '🌁', '🌃', '🏙️', '🌆', '🌇', '🌉',
    '♨️', '🎑', '🏔️', '⛰️', '🌋', '🗻', '🏕️', '🏖️',
    '🏜️', '🏝️', '🏞️', '🏟️', '🏛️', '🏗️', '🧱', '🪨',
    '🪵', '🛖', '🏘️', '🏚️', '🏠', '🏡', '🏢', '🏣',
    '🏤', '🏥', '🏦', '🏨', '🏩', '🏪', '🏫', '🏬',
    '🏭', '🏯', '🏰', '💒', '🗼', '🗾', '⛩️', '🕌'
  ];

  // Use useMemo to maintain consistent random assignment across re-renders
  const lessonIcons = useMemo(() => {
    // Create a shuffled copy of the icon pool
    const shuffled = [...iconPool].sort(() => Math.random() - 0.5);
    
    // Map each lesson to a random icon
    return LESSONS.map((_, index) => shuffled[index % shuffled.length]);
  }, [LESSONS.length]); // Only recreate if number of lessons changes

  return (
    <div className="flex flex-col items-center space-y-16 py-12">
      {/* Hero Section */}
      <div className="text-center space-y-8 flex flex-col items-center">
        <div className="relative">
          {/* Profile Circle */}
          <div className={`w-56 h-56 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} rounded-full flex items-center justify-center border-8 border-orange-500 shadow-orange-soft overflow-hidden mb-4 transition-transform hover:scale-105 duration-500`}>
            <img 
              src="/images/lì.jpg" 
              alt="Orange Cat" 
              className="w-full h-full object-cover scale-[1.35]"
            />
          </div>

          {/* Bounce Badge */}
          <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white px-6 py-2 rounded-full text-lg font-black shadow-xl animate-bounce">
            MÀ NỐI
          </div>
        </div>

        <div className="max-w-2xl px-4">
          <h1 className="text-6xl font-black mb-4 tracking-tight">
            A LI CU MÉO <br/>
            <span className={`text-orange-500 underline ${isDarkMode ? 'decoration-white' : 'decoration-slate-900'} decoration-8 underline-offset-8`}>TOEIC</span>
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} mb-8 leading-relaxed font-medium`}>
            Learn English with the fattest cat in the world. 
            Beginner-friendly lessons designed for fast progress.
          </p>
          
          <button 
            onClick={onStart}
            className="group relative px-12 py-6 bg-orange-500 text-white text-2xl font-black rounded-full shadow-2xl hover:bg-orange-600 transition-all active:scale-95 hover:shadow-orange-500/40"
          >
            START LEARNING
            <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </div>

      {/* Course Lessons Grid Section */}
      <div className="w-full max-w-6xl px-4">
        <div className="flex items-center justify-between mb-8 border-b-4 border-orange-500/10 pb-4">
          <h2 className="text-3xl font-black">Curriculum Lessons</h2>
          <span className={`${isDarkMode ? 'bg-orange-900/40 text-orange-400' : 'bg-orange-100 text-orange-600'} px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest`}>
            {LESSONS.length} LESSONS
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {LESSONS.map((lesson, index) => (
            <div 
              key={lesson.id}
              onClick={() => onSelectLesson(index)}
              className={`group cursor-pointer ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} p-8 rounded-[2.5rem] border-4 hover:border-orange-500 shadow-xl transition-all hover:-translate-y-2 text-left`}
            >
               <div className="flex justify-between items-start mb-4">
                 <div className={`w-16 h-16 ${isDarkMode ? 'bg-orange-900/50' : 'bg-orange-100'} rounded-2xl flex items-center justify-center text-4xl group-hover:bg-orange-500 transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:rotate-3`}>
                   {lessonIcons[index]}
                 </div>
                 <span className={`text-sm font-black ${isDarkMode ? 'text-slate-600' : 'text-slate-300'} uppercase`}>Lesson {index + 1}</span>
               </div>
               <h3 className="text-2xl font-black mb-2 group-hover:text-orange-500 transition-colors">{lesson.topic}</h3>
               <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} mb-6 font-medium`}>Focus: {lesson.focus}</p>
               <div className={`flex items-center ${isDarkMode ? 'text-orange-400 bg-orange-900/20' : 'text-orange-600 bg-orange-50'} font-bold text-sm px-4 py-2 rounded-xl w-fit group-hover:bg-orange-500 group-hover:text-white transition-all`}>
                 START LESSON <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl px-4 mt-8">
           <div className={`p-8 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} rounded-[2rem] shadow-xl text-left border-4`}>
             <span className="text-4xl mb-4 block">📇</span>
             <h3 className="text-xl font-bold mb-2 text-orange-500">Smart Flashcards</h3>
             <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-medium text-sm`}>Interactive IPA pronunciation and bilingual translation at your fingertips.</p>
          </div>
           <div className={`p-8 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} rounded-[2rem] shadow-xl text-left border-4`}>
             <span className="text-4xl mb-4 block">📖</span>
             <h3 className="text-xl font-bold mb-2 text-orange-500">Dialogue Stories</h3>
             <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-medium text-sm`}>Master grammar by reading fun stories with the orange cat.</p>
          </div>
           <div className={`p-8 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} rounded-[2rem] shadow-xl border-4 text-left`}>
             <span className="text-4xl mb-4 block">🧩</span>
             <h3 className="text-xl font-bold mb-2 text-orange-500">Sentence Builder</h3>
             <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} font-medium text-sm`}>Duolingo-style rearrangement to master syntax without sweating.</p>
          </div>
      </div>
    </div>
  );
};

export default Home;