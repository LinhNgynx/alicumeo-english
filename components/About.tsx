
import React from 'react';

interface AboutProps {
  isDarkMode: boolean;
}
const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-12 py-8 animate-fade-in">
      <section className="text-center space-y-4">
  {/* Mascot Image Container */}
  <div className="flex justify-center mb-6">
    <div className="relative group">
      {/* Decorative Outer Glow */}
      <div className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
      
      <div className="relative w-32 h-32 sm:w-44 sm:h-44 bg-white rounded-full p-1.5 border-4 border-orange-500 shadow-2xl overflow-hidden">
        <img 
          src="/images/about.jpg" 
          alt="A LI CU MÉO Mascot" 
          className="w-full h-full object-cover rounded-full transition-transform duration-700 scale-[1.3] group-hover:scale-[1.4]"
        />
      </div>
    </div>
  </div>

  <h2 className={`text-4xl font-black bg-gradient-to-b ${isDarkMode ? 'from-white to-slate-400' : 'from-slate-800 to-slate-600'} bg-clip-text text-transparent`}>
    About A LI CU MÉO TOEIC
  </h2>
  
  <p className={`max-w-2xl mx-auto text-lg sm:text-xl ${isDarkMode ? 'text-slate-400' : 'text-slate-500'} leading-relaxed px-4`}>
    Designed specifically for Vietnamese learners starting their English journey from scratch.
  </p>
</section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} p-8 rounded-3xl shadow-xl border-4`}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-orange-500">
             <span>🎯</span> Our Goal
          </h3>
          <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
            We believe learning English shouldn't be stressful. By focusing on vocabulary flashcards 
            and learning grammar through stories, we create a natural path to fluency.
          </p>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} p-8 rounded-3xl shadow-xl border-4`}>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-500">
             <span>🛠️</span> Learning Tools
          </h3>
          <ul className={`space-y-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <li className="flex items-start gap-2">✅ Multi-sensory flashcards</li>
            <li className="flex items-start gap-2">✅ Bilingual support (EN-VI)</li>
            <li className="flex items-start gap-2">✅ Contextualized grammar</li>
            <li className="flex items-start gap-2">✅ Interactive sentence puzzles</li>
          </ul>
        </div>
      </div>

      <section className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} p-10 rounded-[3rem] text-center border-4 shadow-xl`}>
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">How to Use</h3>
        <p className={`mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Select a lesson from the menu, start with Flashcards to learn new words, then read the Grammar story, 
          and finally test your skills with the Rearrange Words section.
        </p>
          <div className="flex justify-center gap-4">
            <div className="flex flex-col items-center">
              <span className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>5m</span>
              <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Daily Goal</span>
            </div>
            <div className={`w-px h-10 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
            <div className="flex flex-col items-center">
              <span className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>100%</span>
              <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Focus</span>
            </div>
          </div>
        <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>How to Use</h3>
      </section>
    </div>
  );
};

export default About;
