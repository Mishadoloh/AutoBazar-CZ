
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  favoritesCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ favoritesCount }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" onClick={closeMenu} className="text-xl md:text-2xl font-bold text-blue-600 tracking-tight">
              AutoBazar<span className="text-gray-900"> CZ</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 font-medium transition-colors`}
            >
              Каталог
            </Link>
            <Link 
              to="/vin-check" 
              className={`${isActive('/vin-check') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 font-medium transition-colors`}
            >
              Перевірка VIN
            </Link>
            <Link 
              to="/favorites" 
              className={`${isActive('/favorites') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 font-medium transition-colors flex items-center`}
            >
              Вибране
              {favoritesCount > 0 && (
                <span className="ml-1.5 bg-blue-100 text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <Link 
              to="/sell" 
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              Продати авто
            </Link>
          </div>

          {/* Mobile Menu Button (Burger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`md:hidden fixed inset-0 z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="absolute inset-0 bg-black opacity-50" onClick={closeMenu}></div>
        <div className="absolute right-0 w-3/4 max-w-xs h-full bg-white shadow-xl flex flex-col p-6 space-y-6">
          <div className="flex justify-end">
            <button onClick={closeMenu} className="text-gray-500">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              onClick={closeMenu}
              className={`text-lg font-semibold ${isActive('/') ? 'text-blue-600' : 'text-gray-700'}`}
            >
              Каталог
            </Link>
            <Link 
              to="/vin-check" 
              onClick={closeMenu}
              className={`text-lg font-semibold ${isActive('/vin-check') ? 'text-blue-600' : 'text-gray-700'}`}
            >
              Перевірка VIN
            </Link>
            <Link 
              to="/favorites" 
              onClick={closeMenu}
              className={`text-lg font-semibold flex items-center ${isActive('/favorites') ? 'text-blue-600' : 'text-gray-700'}`}
            >
              Вибране
              {favoritesCount > 0 && (
                <span className="ml-2 bg-blue-100 text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">
                  {favoritesCount}
                </span>
              )}
            </Link>
            <Link 
              to="/sell" 
              onClick={closeMenu}
              className="bg-blue-600 text-white px-5 py-3 rounded-xl font-bold text-center shadow-md"
            >
              Продати авто
            </Link>
            
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <Link to="/insurance" onClick={closeMenu} className="text-sm text-gray-500 hover:text-blue-600 block">Страхування</Link>
              <Link to="/customs-duty" onClick={closeMenu} className="text-sm text-gray-500 hover:text-blue-600 block">Мито</Link>
              <Link to="/price-stats" onClick={closeMenu} className="text-sm text-gray-500 hover:text-blue-600 block">Статистика цін</Link>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
