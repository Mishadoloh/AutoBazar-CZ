
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Car, FilterOptions, SortOption } from '../types';
import CarCard from '../components/CarCard';
import { useLanguage } from '../App';
import * as L from 'leaflet';

interface HomeProps {
  cars: Car[];
  toggleFavorite: (id: string) => void;
  favorites: string[];
}

const MapView: React.FC<{ cars: Car[] }> = ({ cars }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersLayerRef = useRef<any>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map only once
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapContainerRef.current, {
        center: [49.8175, 15.473],
        zoom: 7,
        zoomControl: false
      });

      L.control.zoom({ position: 'bottomright' }).addTo(mapInstanceRef.current);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO'
      }).addTo(mapInstanceRef.current);

      markersLayerRef.current = L.layerGroup().addTo(mapInstanceRef.current);
    }

    const markersLayer = markersLayerRef.current;
    const map = mapInstanceRef.current;

    if (markersLayer && map) {
      markersLayer.clearLayers();
      const bounds: any[] = [];

      cars.forEach(car => {
        if (car.lat && car.lng) {
          const marker = L.marker([car.lat, car.lng]);
          marker.bindPopup(`
            <div class="p-2 min-w-[120px]">
              <h4 class="font-bold text-sm text-slate-900">${car.brand} ${car.model}</h4>
              <p class="text-blue-600 font-black mt-1">€${car.price.toLocaleString()}</p>
              <a href="#/car/${car.id}" class="inline-block mt-2 text-[10px] font-black text-blue-500 uppercase">Детальніше</a>
            </div>
          `);
          marker.addTo(markersLayer);
          bounds.push([car.lat, car.lng]);
        }
      });

      if (bounds.length > 0) {
        map.fitBounds(L.latLngBounds(bounds), { padding: [40, 40] });
      }
    }

    return () => {
      // Map instance is preserved between renders unless unmounted
    };
  }, [cars]);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-[400px] md:h-[600px] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 rounded-[32px] md:rounded-[48px]"
    />
  );
};

const Home: React.FC<HomeProps> = ({ cars, toggleFavorite, favorites }) => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [filters, setFilters] = useState<FilterOptions>({
    query: '', minPrice: '', maxPrice: '', minYear: '', brand: ''
  });
  const [sort, setSort] = useState<SortOption>('newest');

  const filteredCars = useMemo(() => {
    let result = cars.filter(car => {
      const matchQuery = `${car.brand} ${car.model}`.toLowerCase().includes(filters.query.toLowerCase());
      const matchMinPrice = !filters.minPrice || car.price >= Number(filters.minPrice);
      const matchMaxPrice = !filters.maxPrice || car.price <= Number(filters.maxPrice);
      return matchQuery && matchMinPrice && matchMaxPrice;
    });
    
    if (sort === 'price_asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'newest') result.sort((a, b) => b.year - a.year);
    
    return result;
  }, [cars, filters, sort]);

  return (
    <div className="bg-[#f8fafc] dark:bg-slate-950 min-h-screen">
      <div className="relative hero-gradient pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-blue-100 text-[10px] font-black uppercase tracking-widest mb-6 animate-slide-up">
            #1 Marketplace in CZ
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight animate-slide-up">
            Find your <br className="md:hidden"/> <span className="text-blue-300 italic">next</span> drive.
          </h1>
          
          <div className="bg-white dark:bg-slate-900 p-2 rounded-2xl md:rounded-[32px] shadow-2xl flex flex-col md:flex-row gap-2 max-w-2xl mx-auto mt-8">
            <input 
              type="text" 
              placeholder={t.hero.searchPlaceholder}
              className="flex-grow px-5 py-4 md:px-8 md:py-5 text-slate-900 dark:text-white font-bold bg-transparent focus:outline-none"
              value={filters.query}
              onChange={(e) => setFilters({...filters, query: e.target.value})}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 md:py-5 rounded-xl md:rounded-[24px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
              {t.hero.searchBtn}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 md:-mt-14 relative z-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-80 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800">
              <h3 className="font-black text-slate-900 dark:text-white uppercase text-xs tracking-widest mb-8">Фільтри</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Макс. ціна (EUR)</label>
                  <input 
                    type="number" 
                    placeholder="Напр. 25000"
                    className="w-full bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 text-slate-900 dark:text-white font-bold border-none focus:ring-2 focus:ring-blue-600 transition-all"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                  />
                </div>
                
                <div className="pt-4">
                  <button 
                    onClick={() => setFilters({query: '', minPrice: '', maxPrice: '', minYear: '', brand: ''})}
                    className="w-full py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"
                  >
                    Скинути
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Catalog Main */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-8 px-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{filteredCars.length}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase pt-1.5 tracking-widest">Авто в наявності</span>
              </div>
              
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-400'}`}
                >
                  Плитка
                </button>
                <button 
                  onClick={() => setViewMode('map')}
                  className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'map' ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-400'}`}
                >
                  Карта
                </button>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {filteredCars.map(car => (
                  <CarCard 
                    key={car.id} 
                    car={car} 
                    isFavorite={favorites.includes(car.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <MapView cars={filteredCars} />
            )}
            
            {filteredCars.length === 0 && (
              <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-[48px] border border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-slate-400 font-bold">Нічого не знайдено за вашим запитом.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
