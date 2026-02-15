
import React, { useEffect, useState, useRef } from 'react';
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
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-40 text-center dark:bg-slate-950">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight uppercase">Listing Not Found</h2>
        <Link to="/" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-600/20">Return to Catalog</Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(car.id);
  const nextImg = () => setCurrentImgIdx((prev) => (prev + 1) % car.images.length);
  const prevImg = () => setCurrentImgIdx((prev) => (prev - 1 + car.images.length) % car.images.length);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-500 pt-16 md:pt-24 pb-10 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumbs - Hidden on small mobile */}
        <nav className="hidden sm:flex items-center text-[9px] md:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4 md:mb-8 animate-slide-up">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Каталог</Link>
          <span className="mx-2 md:mx-3 opacity-30">/</span>
          <span className="text-slate-900 dark:text-white truncate max-w-[150px] md:max-w-none">{car.brand} {car.model}</span>
        </nav>

        {/* Main Grid Layout: Responsive Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: Image Gallery (Sticky on desktop) */}
          <div className="lg:col-span-7 xl:col-span-8 lg:sticky lg:top-24 space-y-4 md:space-y-6">
            <div className="relative aspect-[4/3] md:aspect-[16/10] bg-white dark:bg-slate-900 rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl dark:shadow-none group/gallery">
              {car.images.map((img, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    idx === currentImgIdx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                  }`}
                >
                  <img src={img} alt="Car" className="w-full h-full object-cover" />
                </div>
              ))}
              
              {/* Image Controls */}
              {car.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-3 md:px-6 z-20 md:opacity-0 group-hover/gallery:opacity-100 transition-opacity">
                  <button onClick={prevImg} className="p-2.5 md:p-4 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all transform active:scale-90">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button onClick={nextImg} className="p-2.5 md:p-4 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all transform active:scale-90">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 no-scrollbar">
              {car.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImgIdx(idx)}
                  className={`relative w-16 h-12 md:w-28 md:h-20 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                    idx === currentImgIdx ? 'border-blue-500 scale-105 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Description (Desktop only positioning) */}
            <div className="hidden lg:block bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[40px] border border-slate-100 dark:border-slate-800 transition-colors">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6 flex items-center">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-4"></span>
                Опис та деталі
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium pl-6 border-l-2 border-slate-100 dark:border-slate-800">
                {car.description}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Info and CTA */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6 md:space-y-8">
            <div className="bg-white dark:bg-slate-900 p-5 md:p-10 rounded-[28px] md:rounded-[40px] shadow-xl dark:shadow-none border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="mb-6 md:mb-8">
                <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-4">
                  <span className="px-2 py-0.5 bg-blue-600 text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest rounded-full">{car.year}</span>
                  <span className="text-slate-400 dark:text-slate-500 text-[8px] md:text-[9px] font-black uppercase tracking-widest truncate">{car.location}</span>
                </div>
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-tight mb-3 md:mb-4">
                  {car.brand} <span className="text-blue-600">{car.model}</span>
                </h1>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter">€{car.price.toLocaleString()}</span>
                  <span className="text-[8px] md:text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">з ПДВ</span>
                </div>
              </div>

              {/* Specs Bento Grid */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-10">
                {[
                  { l: 'Пробіг', v: `${car.mileage.toLocaleString()} км` },
                  { l: 'Паливо', v: car.fuelType },
                  { l: 'Двигун', v: car.engine },
                  { l: 'Коробка', v: car.transmission }
                ].map((s, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-3 md:p-4 rounded-xl md:rounded-3xl group hover:bg-blue-600 transition-all duration-300">
                    <p className="text-[7px] md:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5 md:mb-1 group-hover:text-blue-100">{s.l}</p>
                    <p className="font-black text-xs md:text-base text-slate-900 dark:text-white tracking-tight group-hover:text-white transition-colors">{s.v}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-6 md:pt-8 border-t border-slate-50 dark:border-slate-800 space-y-3 md:space-y-4">
                <button 
                  onClick={() => setShowPhone(!showPhone)}
                  className="w-full bg-slate-900 dark:bg-blue-600 text-white py-3.5 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg tracking-widest uppercase hover:opacity-90 transition-all shadow-lg active:scale-95"
                >
                  {showPhone ? '+420 777 000 111' : 'Подзвонити'}
                </button>
                <button 
                  onClick={() => setIsMessageModalOpen(true)}
                  className="w-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-700 py-3.5 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg tracking-widest uppercase hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
                >
                  Повідомлення
                </button>
                <button 
                  onClick={() => toggleFavorite(car.id)}
                  className={`w-full py-3.5 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg border-2 transition-all flex items-center justify-center active:scale-95 ${
                    isFavorite ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-600' : 'bg-transparent border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500'
                  }`}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  {isFavorite ? 'У вибраному' : 'Зберегти'}
                </button>
              </div>
            </div>

            {/* Description (Mobile only positioning) */}
            <div className="lg:hidden bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[28px] md:rounded-[40px] border border-slate-100 dark:border-slate-800 transition-colors">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6 flex items-center">
                <span className="w-1 h-5 bg-blue-600 rounded-full mr-3"></span>
                Опис
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-lg leading-relaxed font-medium">
                {car.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {isMessageModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 rounded-t-[24px] sm:rounded-[40px] w-full max-w-lg shadow-2xl overflow-hidden animate-slide-up">
            <div className="p-5 md:p-8 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-lg md:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">Зв'язатися</h3>
              <button onClick={() => setIsMessageModalOpen(false)} className="text-slate-400 hover:text-slate-900 dark:hover:text-white p-2">
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-6 md:p-8">
              {isSent ? (
                <div className="text-center py-6 md:py-10">
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"><svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                  <h4 className="text-lg md:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Надіслано!</h4>
                  <p className="text-xs md:text-base text-slate-500 dark:text-slate-400 font-medium">Ми передали ваше повідомлення продавцю.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setIsSent(true); setTimeout(() => setIsMessageModalOpen(false), 2000); }} className="space-y-4 md:space-y-6">
                  <textarea required rows={4} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-sm md:text-base text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-600 transition-all resize-none" placeholder="Напишіть ваше запитання..."></textarea>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3.5 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-lg uppercase tracking-widest hover:bg-blue-700 shadow-xl transition-all">Надіслати</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
