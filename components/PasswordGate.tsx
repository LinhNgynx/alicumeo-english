import React, { useState, useEffect } from 'react';

interface PasswordGateProps {
  children: React.ReactNode;
  password?: string;
}

export const PasswordGate: React.FC<PasswordGateProps> = ({ 
  children, 
  password = 'toeic123alicumeo'
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user was already authenticated in this session
    if (sessionStorage.getItem('siteAuthenticated') === 'true') {
      setIsAuthenticated(true);
    }
    
    // Check for dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsAuthenticated(true);
      setError('');
      sessionStorage.setItem('siteAuthenticated', 'true');
    } else {
      setError('Incorrect password. Try again.');
      setInputPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={isDarkMode ? 'dark' : 'light'} style={{ colorScheme: isDarkMode ? 'dark' : 'light' }}>
        <div className={`min-h-screen flex items-center justify-center transition-all duration-500 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#fafafc] text-slate-900'}`}>
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-10 right-10 w-32 h-32 ${isDarkMode ? 'bg-orange-500/10' : 'bg-orange-50'} rounded-full blur-3xl`}></div>
            <div className={`absolute bottom-20 left-10 w-40 h-40 ${isDarkMode ? 'bg-orange-500/5' : 'bg-orange-100/50'} rounded-full blur-3xl`}></div>
          </div>

          <div className="relative z-10 w-full max-w-md px-4">
            {/* Card Container */}
            <div className={`rounded-[2.5rem] border-4 shadow-xl p-8 sm:p-12 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-white border-slate-100'
            }`}>
              
              {/* Logo Section */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-orange-500 rounded-2xl sm:rounded-3xl flex items-center justify-center overflow-hidden shadow-lg shadow-orange-500/30 mb-6 transition-transform hover:scale-105 duration-300">
                  <img 
                    src="/images/avatar.jpg" 
                    alt="A LI CU MÉO" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h1 className={`text-4xl sm:text-5xl font-black mb-2 text-center leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  A LI CU <br />
                  <span className="text-orange-500">MÉO</span>
                </h1>
                <p className={`text-sm font-black tracking-widest uppercase mt-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  TOEIC Study
                </p>
              </div>

              {/* Description */}
              <p className={`text-center text-base sm:text-lg font-medium mb-8 leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Unlock your English learning journey with the fattest cat in the world
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    placeholder="Enter password"
                    className={`w-full px-6 py-4 border-4 rounded-2xl font-medium text-base transition-all focus:outline-none focus:shadow-lg ${
                      isDarkMode
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-slate-500 focus:border-orange-500 focus:shadow-orange-500/20'
                        : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:shadow-orange-500/10'
                    }`}
                    autoFocus
                  />
                </div>

                {error && (
                  <p className="text-orange-500 text-sm font-bold text-center animate-pulse">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group relative w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-lg py-4 px-6 rounded-2xl shadow-xl hover:shadow-orange-500/40 transition-all active:scale-95 duration-200 uppercase tracking-wider"
                >
                  Unlock Now
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PasswordGate;
