
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import SellCar from './pages/SellCar';
import Favorites from './pages/Favorites';
import VinCheck from './pages/VinCheck';
import Insurance from './pages/Insurance';
import CustomsDuty from './pages/CustomsDuty';
import Advertising from './pages/Advertising';
import PriceStats from './pages/PriceStats';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Car } from './types';
import { Language, translations } from './translations';
import { MOCK_CARS } from './data';

const API_URL = 'http://localhost:8000/api';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
  backendOnline: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [backendOnline, setBackendOnline] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ua';
  });

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const response = await fetch(`${API_URL}/cars`, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setCars(data);
            setBackendOnline(true);
          } else {
            setCars(MOCK_CARS);
            setBackendOnline(false);
          }
        } else {
          setCars(MOCK_CARS);
          setBackendOnline(false);
        }
      } catch (error) {
        console.info("Python backend unreachable. Running in Demo Mode.");
        setCars(MOCK_CARS);
        setBackendOnline(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => setIsDark(!isDark);

  const addCar = async (newCar: Car) => {
    const carWithId = { ...newCar, id: Math.random().toString(36).substr(2, 9), createdAt: new Date().toISOString() };
    if (backendOnline) {
      try {
        const response = await fetch(`${API_URL}/cars`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newCar)
        });
        if (response.ok) {
          const savedCar = await response.json();
          setCars(prev => [savedCar, ...prev]);
          return;
        }
      } catch (error) {
        console.warn("Backend error. Adding locally.");
      }
    }
    setCars(prev => [carWithId as Car, ...prev]);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const t = translations[language];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 font-bold animate-pulse">Завантаження...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage, t, backendOnline }}>
        <Router>
          <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
            <Navbar favoritesCount={favorites.length} />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home cars={cars} toggleFavorite={toggleFavorite} favorites={favorites} />} />
                <Route path="/car/:id" element={<CarDetails cars={cars} toggleFavorite={toggleFavorite} favorites={favorites} />} />
                <Route path="/sell" element={<SellCar addCar={addCar} />} />
                <Route path="/favorites" element={<Favorites cars={cars} toggleFavorite={toggleFavorite} favorites={favorites} />} />
                <Route path="/vin-check" element={<VinCheck />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/customs-duty" element={<CustomsDuty />} />
                <Route path="/advertising" element={<Advertising />} />
                <Route path="/price-stats" element={<PriceStats />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
