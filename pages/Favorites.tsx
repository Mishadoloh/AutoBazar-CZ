
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
    <div className="bg-gray-50 dark:bg-slate-950 min-h-screen py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 animate-slide-up">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">Ваше вибране</h1>
          <p className="text-gray-500 dark:text-slate-400 mt-2 font-medium">Збережені пропозиції, які вас зацікавили</p>
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
          <div className="bg-white dark:bg-slate-900 rounded-[40px] p-20 text-center shadow-xl shadow-slate-200/20 dark:shadow-none border border-gray-100 dark:border-slate-800 animate-slide-up">
            <div className="w-20 h-20 bg-gray-50 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 text-gray-400 dark:text-slate-600">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight uppercase">Список порожній</h3>
            <p className="text-gray-500 dark:text-slate-400 mb-10 max-w-sm mx-auto font-medium leading-relaxed">Ви ще не додали жодного автомобіля до списку вибраного. Гортайте каталог та натискайте на сердечко!</p>
            <Link 
              to="/" 
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all"
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
