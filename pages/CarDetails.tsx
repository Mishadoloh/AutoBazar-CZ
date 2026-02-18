
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Car } from '../types';
import { useLanguage } from '../App';

interface CarDetailsProps {
  cars: Car[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const CarDetails: React.FC<CarDetailsProps> = ({ cars, favorites, toggleFavorite }) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const car = cars.find(c => c.id === id);
  
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-40 text-center">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase">Car not found</h2>
        <Link to="/" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase">Catalog</Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(car.id);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-20 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 md:mb-10">
          <Link to="/" className="hover:text-blue-600">Catalog</Link>
          <span className="mx-3 opacity-30">/</span>
          <span className="text-slate-900 dark:text-white truncate max-w-[150px] md:max-w-none">{car.brand} {car.model}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
          
          {/* MEDIA AREA */}
          <div className="lg:col-span-8 lg:sticky lg:top-24 space-y-4">
            <div className="relative aspect-[4/3] md:aspect-[16/10] bg-white dark:bg-slate-900 rounded-[28px] md:rounded-[48px] overflow-hidden shadow-2xl group">
              <img 
                src={car.images[currentImgIdx]} 
                alt="Car" 
                className="w-full h-full object-cover transition-transform duration-700"
              />
              
              {car.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-3 md:px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setCurrentImgIdx(prev => (prev - 1 + car.images.length) % car.images.length)}
                    className="p-2.5 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button 
                    onClick={() => setCurrentImgIdx(prev => (prev + 1) % car.images.length)}
                    className="p-2.5 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              )}
            </div>

            <div className="flex gap-2.5 overflow-x-auto pb-4 no-scrollbar">
              {car.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImgIdx(idx)}
                  className={`relative w-16 h-12 md:w-32 md:h-20 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                    idx === currentImgIdx ? 'border-blue-500 scale-105 shadow-md' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="hidden lg:block bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800">
               <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">Про автомобіль</h3>
               <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">{car.description}</p>
            </div>
          </div>

          {/* INFO AREA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-[32px] md:rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-blue-600 text-white text-[9px] font-black rounded-full uppercase">{car.year}</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase">{car.location}</span>
                </div>
                <h1 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-2">
                  {car.brand} <span className="text-blue-600">{car.model}</span>
                </h1>
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter">€{car.price.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { l: 'Пробіг', v: `${car.mileage.toLocaleString()} км` },
                  { l: 'Двигун', v: car.engine },
                  { l: 'Коробка', v: car.transmission },
                  { l: 'Паливо', v: car.fuelType }
                ].map((s, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl hover:bg-blue-600 group transition-colors">
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5 group-hover:text-blue-100">{s.l}</p>
                    <p className="font-black text-xs text-slate-900 dark:text-white group-hover:text-white truncate">{s.v}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => setShowPhone(!showPhone)}
                  className="w-full bg-slate-900 dark:bg-blue-600 text-white py-4 rounded-2xl font-black text-base uppercase tracking-widest hover:opacity-90 transition-all shadow-xl active:scale-95"
                >
                  {showPhone ? '+420 777 000 111' : 'Подзвонити'}
                </button>
                <button 
                  onClick={() => toggleFavorite(car.id)}
                  className={`w-full py-4 rounded-2xl font-black text-base uppercase transition-all border-2 flex items-center justify-center gap-2 active:scale-95 ${
                    isFavorite ? 'bg-red-50 border-red-500 text-red-600' : 'bg-transparent border-slate-100 dark:border-slate-800 text-slate-400'
                  }`}
                >
                  <svg className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  {isFavorite ? 'Saved' : 'Save Car'}
                </button>
              </div>
            </div>

            <div className="lg:hidden bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800">
               <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase mb-3">Опис</h3>
               <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{car.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
