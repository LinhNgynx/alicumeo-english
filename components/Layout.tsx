import React from "react";
import { Page } from "../types";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  isSnowing: boolean;
  toggleSnow: () => void;
  showVi: boolean;
  toggleTranslation: () => void;
  sessionTime: number | null;
  timerActive: boolean;
  startTimer: (min: number) => void;
  stopTimer: () => void;
  formatTime: (sec: number) => string;
  currentLessonIndex: number;
  setCurrentLessonIndex: (idx: number) => void;
  lessonsCount: number;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  currentPage,
  setCurrentPage,
  isDarkMode,
  toggleTheme,
  isSnowing,
  toggleSnow,
  showVi,
  toggleTranslation,
  sessionTime,
  timerActive,
  startTimer,
  stopTimer,
  formatTime,
  currentLessonIndex,
  setCurrentLessonIndex,
  lessonsCount,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`sticky top-0 z-[100] transition-colors duration-500 ${isDarkMode ? "bg-slate-900/95 border-slate-800" : "bg-white/95 border-slate-100"} backdrop-blur-xl shadow-lg border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between flex-wrap gap-3 sm:gap-4">
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={() => setCurrentPage("home")}
          >
            {/* Logo Container */}
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden shadow-lg shadow-orange-500/20 group-hover:rotate-6 transition-transform duration-300">
              <img
                src="./images/avatar.jpg"
                alt="Orange Cat Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Brand Text */}
            <div className="flex flex-col text-left">
              <h1 className="text-lg sm:text-2xl font-black bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent leading-none uppercase">
                A LI CU MÉO
              </h1>
              <span
                className={`text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.4em] uppercase ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                TOEIC Study
              </span>
            </div>
          </div>

          <nav
            className={`flex items-center p-1 rounded-xl sm:rounded-2xl gap-0.5 sm:gap-1 order-3 lg:order-2 w-full lg:w-auto overflow-x-auto no-scrollbar ${isDarkMode ? "bg-slate-800" : "bg-slate-50"}`}
          >
            {(
              ["home", "flashcards", "grammar", "rearrange", "about"] as Page[]
            ).map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest transition-all whitespace-nowrap ${
                  currentPage === p
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : `hover:bg-white dark:hover:bg-slate-700 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`
                }`}
              >
                {p}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 order-2 lg:order-3">
            {/* Timer Section with 25m and 50m options */}
            <div
              className={`flex items-center rounded-xl sm:rounded-2xl p-0.5 sm:p-1 gap-1 border ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}
            >
              <div
                className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black text-orange-500 min-w-[80px] sm:min-w-[110px] text-center ${isDarkMode ? "bg-slate-900" : "bg-white"}`}
              >
                <span className={timerActive ? "animate-pulse" : ""}>⏱️</span>
                <span className="tracking-tighter uppercase font-bold">
                  {timerActive && sessionTime !== null
                    ? formatTime(sessionTime)
                    : "FOCUS"}
                </span>
              </div>
              {timerActive ? (
                <button
                  onClick={stopTimer}
                  className="p-1.5 sm:p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors font-black"
                  title="Remove Timer"
                >
                  ✖
                </button>
              ) : (
                <div className="flex gap-1 pr-1">
                  <button
                    onClick={() => startTimer(25)}
                    className="text-[9px] sm:text-[10px] font-black hover:bg-orange-500 hover:text-white px-2 py-1.5 rounded-md sm:rounded-lg transition-colors border border-transparent hover:border-orange-600 uppercase"
                  >
                    25m
                  </button>
                  <button
                    onClick={() => startTimer(50)}
                    className="text-[9px] sm:text-[10px] font-black hover:bg-orange-500 hover:text-white px-2 py-1.5 rounded-md sm:rounded-lg transition-colors border border-transparent hover:border-orange-600 uppercase"
                  >
                    50m
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center rounded-xl sm:rounded-2xl p-0.5 sm:p-1 gap-1">
              <button
                onClick={toggleTheme}
                className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl transition-transform shadow-sm ${isDarkMode ? "bg-slate-800 text-slate-300" : "bg-white border border-slate-100 text-slate-600"}`}
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
              <button
                onClick={toggleSnow}
                className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl transition-all shadow-sm ${isSnowing ? "bg-blue-500 text-white shadow-blue-500/30" : isDarkMode ? "bg-slate-800 text-white" : "bg-white border border-slate-100 text-slate-600"}`}
              >
                ❄️
              </button>
              <button
                onClick={toggleTranslation}
                className={`px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[8px] sm:text-[10px] font-black tracking-tighter transition-all shadow-sm ${showVi ? "bg-green-500 text-white shadow-green-500/30" : isDarkMode ? "bg-slate-800 text-white" : "bg-white border border-slate-100 text-slate-600"}`}
              >
                EN/VI
              </button>
            </div>
          </div>
        </div>
      </header>

      {currentPage !== "home" && currentPage !== "about" && (
        <div
          className={`py-3 sm:py-4 transition-colors duration-500 border-b ${isDarkMode ? "bg-slate-950 border-slate-900" : "bg-[#fcfcfd] border-slate-100"}`}
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-3 sm:gap-4 text-left">
              <h3
                className={`text-[10px] sm:text-sm font-black uppercase tracking-widest ${isDarkMode ? "text-slate-400" : "text-slate-400"}`}
              >
                Learning Path:
              </h3>
              <div className="flex gap-1.5 sm:gap-2">
                {Array.from({ length: lessonsCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentLessonIndex(i)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black border-2 transition-all flex items-center justify-center ${
                      currentLessonIndex === i
                        ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                        : `${isDarkMode ? "bg-slate-900 border-slate-800 text-slate-500" : "bg-white border-slate-100 text-slate-400"} hover:border-orange-500`
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-orange-500 font-black text-[10px] sm:text-xs uppercase tracking-widest animate-pulse">
                Session Active
              </span>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow flex flex-col items-center">{children}</main>

      <footer
        className={`py-8 sm:py-12 text-center transition-colors duration-500 border-t ${isDarkMode ? "bg-slate-950 border-slate-900" : "bg-white border-slate-50"}`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
  {/* Larger Cat Image Container */}
  <div className="flex justify-center mb-6">
    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-orange-500 shadow-orange-200 dark:shadow-orange-900/20 shadow-2xl">
      <img 
        src="./images/avatar.jpg" 
        alt="Orange Cat Footer" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Branding Text */}
  <p className="text-sm sm:text-base font-black text-slate-400 dark:text-slate-600 tracking-[0.3em] uppercase mb-3">
    A LI CU MÉO TOEIC
  </p>
  <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 max-w-xs mx-auto italic">
    "Success follows consistency. One lesson at a time."
  </p>
</div>
      </footer>
    </div>
  );
};
