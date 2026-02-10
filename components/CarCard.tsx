
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, isFavorite, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow group relative">
      <button 
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite(car.id);
        }}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-colors ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:text-red-500'
        }`}
      >
        <svg className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </button>

      <Link to={`/car/${car.id}`} className="block">
        <div className="aspect-[16/10] overflow-hidden">
          <img 
            src={car.imageUrl} 
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg text-gray-900 line-clamp-1">{car.brand} {car.model}</h3>
              <p className="text-gray-500 text-sm">{car.year} • {car.engine}</p>
            </div>
            <span className="text-xl font-extrabold text-blue-600">${car.price.toLocaleString()}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-y-2 mt-4 text-sm text-gray-600 border-t border-gray-100 pt-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {car.mileage.toLocaleString()} км
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {car.transmission}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {car.location}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {car.fuelType}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;
