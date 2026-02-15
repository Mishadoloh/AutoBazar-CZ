
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, useTheme } from '../App';

interface NavbarProps {
  favoritesCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ favoritesCount }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t, backendOnline } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const menuItems = [
    { path: '/', label: t.nav.catalog, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
    { path: '/vin-check', label: t.nav.vinCheck, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { path: '/favorites', label: t.nav.favorites, badge: favoritesCount, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { path: '/price-stats', label: t.nav.stats, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 01-2 2h22a2 2 0 01-2-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6" /></svg> },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'h-16 glass shadow-md translate-y-0' : 'h-20 bg-transparent translate-y-0 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/" onClick={closeMenu} className="flex items-center group">
              <span className={`text-2xl font-black tracking-tighter transition-all ${scrolled ? 'text-blue-600' : 'text-white'} group-hover:scale-105`}>
                AutoBazar<span className={scrolled ? 'text-slate-900 dark:text-blue-200' : 'text-blue-200'}>CZ</span>
              </span>
            </Link>
            
            <div className={`hidden lg:flex items-center px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all ${backendOnline ? 'bg-green-500/10 border-green-500/20 text-green-500' : 'bg-orange-500/10 border-orange-500/20 text-orange-500'}`}>
              <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${backendOnline ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`}></div>
              {backendOnline ? 'API Online' : 'Demo Mode'}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.slice(0, 3).map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-sm font-bold transition-all relative group ${scrolled ? 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white/80 hover:text-white'}`}
              >
                {item.label}
                {item.badge ? (
                   <span className="ml-1 px-1.5 py-0.5 bg-red-500 text-white text-[10px] rounded-full">{item.badge}</span>
                ) : null}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full ${isActive(item.path) ? 'w-full' : ''}`}></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all ${scrolled ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300' : 'bg-white/10 border-white/20 text-white'}`}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 118.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              )}
            </button>

            <div className={`flex p-1 rounded-xl border ${scrolled ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700' : 'bg-white/10 border-white/20'}`}>
              <button 
                onClick={() => setLanguage('ua')}
                className={`px-2.5 py-1 text-[10px] font-black rounded-lg transition-all ${language === 'ua' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' : scrolled ? 'text-slate-400' : 'text-white/60'}`}
              >
                UA
              </button>
              <button 
                onClick={() => setLanguage('cz')}
                className={`px-2.5 py-1 text-[10px] font-black rounded-lg transition-all ${language === 'cz' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' : scrolled ? 'text-slate-400' : 'text-white/60'}`}
              >
                CZ
              </button>
            </div>

            <button 
              onClick={toggleMenu}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg ${scrolled ? 'bg-slate-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-700 shadow-slate-900/10' : 'bg-white text-slate-900 hover:bg-slate-50 shadow-white/10'}`}
            >
              <span>{t.nav.menu}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] bg-slate-900/60 backdrop-blur-sm transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu} />

      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-slate-900 z-[70] shadow-2xl transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between border-b border-slate-50 dark:border-slate-800">
          <span className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{t.nav.menu}</span>
          <button onClick={closeMenu} className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-6 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${isActive(item.path) ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-xl ${isActive(item.path) ? 'bg-white dark:bg-slate-800 shadow-sm' : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors'}`}>
                  {item.icon}
                </div>
                <span className="font-bold">{item.label}</span>
              </div>
              {item.badge ? (
                <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">{item.badge}</span>
              ) : (
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              )}
            </Link>
          ))}
          
          <div className="pt-6">
            <Link 
              to="/sell" 
              onClick={closeMenu}
              className="flex items-center justify-center space-x-3 w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
              <span>{t.nav.sellCar}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
