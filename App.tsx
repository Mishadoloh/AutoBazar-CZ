
import React, { useState, useEffect } from 'react';
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

const App: React.FC = () => {
  const [cars, setCars] = useState<Car[]>(() => {
    const saved = localStorage.getItem('cars');
    return saved ? JSON.parse(saved) : MOCK_CARS;
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cars', JSON.stringify(cars));
  }, [cars]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addCar = (newCar: Car) => {
    setCars(prev => [newCar, ...prev]);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  return (
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
  );
};

export default App;
