
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
import { MOCK_CARS } from './data';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>(() => {
    const saved = localStorage.getItem('cars');
    return saved ? JSON.parse(saved) : MOCK_CARS;
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'ua';
  });

  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars));
  }, [cars]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const addCar = (newCar: Car) => {
    setCars(prev => [newCar, ...prev]);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <Router>
        <div className="flex flex-col min-h-screen">
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
  );
};

export default App;
