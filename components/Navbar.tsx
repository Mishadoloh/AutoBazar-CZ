
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../App';

interface NavbarProps {
  favoritesCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ favoritesCount }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuItems = [
    { path: '/', label: t.nav.catalog, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
    { path: '/vin-check', label: t.nav.vinCheck, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { path: '/favorites', label: t.nav.favorites, badge: favoritesCount, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { path: '/insurance', label: t.nav.insurance, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
    { path: '/customs-duty', label: t.nav.customs, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
    { path: '/price-stats', label: t.nav.stats, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 01-2 2h22a2 2 0 01-2-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6" /></svg> },
    { path: '/advertising', label: t.nav.advertising, icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg> },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 h-16 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center group">
            <span className="text-2xl font-black text-blue-600 tracking-tighter transition-transform group-hover:scale-105">
              AutoBazar<span className="text-gray-900">CZ</span>
            </span>
          </Link>

          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Language Switcher */}
            <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100">
              <button 
                onClick={() => setLanguage('ua')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${language === 'ua' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                UA
              </button>
              <button 
                onClick={() => setLanguage('cz')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${language === 'cz' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                CZ
              </button>
            </div>

            {/* Burger Menu Button */}
            <button 
              onClick={toggleMenu}
              className="flex items-center space-x-2 bg-gray-900 text-white pl-4 pr-3 py-2 rounded-xl hover:bg-gray-800 transition-all shadow-md active:scale-95 relative"
            >
              <span className="hidden md:inline font-bold text-sm tracking-wide">{t.nav.menu}</span>
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
                {favoritesCount > 0 && !isOpen && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center font-bold text-white leading-none">
                      {favoritesCount}
                    </span>
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay / Drawer */}
      <div 
        className={`fixed inset-0 z-[60] pointer-events-none transition-all duration-300 ${isOpen ? 'bg-black/60 backdrop-blur-sm pointer-events-auto opacity-100' : 'bg-black/0 opacity-0'}`}
        onClick={closeMenu}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <span className="text-xl font-black text-gray-900">{t.nav.menu}</span>
          <button onClick={closeMenu} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${
                isActive(item.path) 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`transition-colors ${isActive(item.path) ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}>
                  {item.icon}
                </div>
                <span className="font-bold">{item.label}</span>
              </div>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full min-w-[20px] text-center">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
          
          <div className="pt-4 px-2">
            <Link 
              to="/sell" 
              onClick={closeMenu}
              className="flex items-center justify-center space-x-2 w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
              <span>{t.nav.sellCar}</span>
            </Link>
          </div>
        </div>

        <div className="p-8 bg-gray-50 text-center">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-2">Наші контакти</p>
          <p className="font-black text-gray-900 text-lg">+420 777 000 111</p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-blue-600 cursor-pointer hover:border-blue-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.49.98-.75 3.83-1.66 6.38-2.76 7.65-3.28 3.64-1.48 4.4-1.74 4.89-1.75.11 0 .35.03.5.15.13.11.17.26.18.37.01.07.01.21 0 .33z"/></svg>
            </div>
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-pink-600 cursor-pointer hover:border-pink-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
