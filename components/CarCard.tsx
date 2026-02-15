
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, isFavorite, onToggleFavorite }) => {
  const primaryImage = car.images[0] || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8';

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 card-hover animate-slide-up transition-colors duration-300">
      <Link to={`/car/${car.id}`} className="block relative aspect-[16/10] overflow-hidden">
        <img 
          src={primaryImage} 
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="px-3 py-1 bg-white/95 dark:bg-slate-900/95 glass text-[10px] font-black uppercase tracking-widest rounded-full text-slate-900 dark:text-white">
            {car.year}
          </span>
          {car.price > 50000 && (
            <span className="px-3 py-1 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-amber-500/20">
              Premium
            </span>
          )}
        </div>

        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite(car.id);
          }}
          className={`absolute top-4 right-4 z-10 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 active:scale-90 ${
            isFavorite ? 'bg-red-500 text-white scale-110' : 'bg-white/90 dark:bg-slate-800/90 text-slate-400 dark:text-slate-500 hover:text-red-500'
          }`}
        >
          <svg className="w-5 h-5" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="min-w-0">
            <Link to={`/car/${car.id}`} className="block font-black text-xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate tracking-tight">
              {car.brand} {car.model}
            </Link>
            <div className="flex items-center text-slate-400 dark:text-slate-500 text-xs font-bold mt-1.5 uppercase tracking-wide">
              <svg className="w-3.5 h-3.5 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              {car.location}
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between mb-6">
            <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-widest mb-0.5">Price</span>
                <span className="text-2xl font-black text-blue-600 dark:text-blue-400 leading-none tracking-tighter">€{car.price.toLocaleString()}</span>
            </div>
            <div className="text-right">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest leading-none">VAT Included</span>
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 py-4 border-t border-slate-50 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 dark:text-slate-500 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="text-xs font-black text-slate-700 dark:text-slate-300">{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 dark:text-slate-500 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            </div>
            <span className="text-xs font-black text-slate-700 dark:text-slate-300">{car.transmission}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
