
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';
import CarCard from '../components/CarCard';

interface FavoritesProps {
  cars: Car[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ cars, favorites, toggleFavorite }) => {
  const favoriteCars = cars.filter(car => favorites.includes(car.id));

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Ваше вибране</h1>
          <p className="text-gray-500 mt-2">Збережені пропозиції, які вас зацікавили</p>
        </div>

        {favoriteCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {favoriteCars.map(car => (
              <CarCard 
                key={car.id} 
                car={car} 
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-20 text-center shadow-sm border border-gray-200">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Список порожній</h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">Ви ще не додали жодного автомобіля до списку вибраного. Гортайте каталог та натискайте на сердечко!</p>
            <Link 
              to="/" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Перейти до каталогу
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
