
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Car, FilterOptions, SortOption } from '../types';
import CarCard from '../components/CarCard';
import { useLanguage } from '../App';
import * as L from 'https://esm.sh/leaflet@1.9.4';

interface HomeProps {
  cars: Car[];
  toggleFavorite: (id: string) => void;
  favorites: string[];
}

const MapView: React.FC<{ cars: Car[] }> = ({ cars }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

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

    if (markersLayerRef.current) {
      markersLayerRef.current.clearLayers();
      const bounds: L.LatLngTuple[] = [];

      cars.forEach(car => {
        if (car.lat && car.lng) {
          const marker = L.marker([car.lat, car.lng]);
          
          const popupContent = `
            <div class="flex flex-col group overflow-hidden dark:bg-slate-900">
              <img src="${car.images[0] || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8'}" class="w-full h-28 object-cover" />
              <div class="p-3">
                <h4 class="font-black text-slate-900 dark:text-white text-sm leading-tight">${car.brand} ${car.model}</h4>
                <p class="text-blue-600 dark:text-blue-400 font-black text-md mt-1">€${car.price.toLocaleString()}</p>
                <div class="flex justify-between items-center mt-3 pt-2 border-t border-slate-50 dark:border-slate-800">
                  <span class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase">${car.year} • ${car.mileage.toLocaleString()} km</span>
                  <a href="#/car/${car.id}" class="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase">View →</a>
                </div>
              </div>
            </div>
          `;

          marker.bindPopup(popupContent);
          marker.addTo(markersLayerRef.current!);
          bounds.push([car.lat, car.lng]);
        }
      });

      if (bounds.length > 0 && mapInstanceRef.current) {
        mapInstanceRef.current.fitBounds(L.latLngBounds(bounds), { padding: [20, 20] });
      }
    }
  }, [cars]);

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-[350px] md:h-[600px] rounded-[24px] md:rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden z-10 transition-colors duration-300"
    />
  );
};

const Home: React.FC<HomeProps> = ({ cars, toggleFavorite, favorites }) => {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [filters, setFilters] = useState<FilterOptions>({
    query: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    brand: ''
  });
  const [sort, setSort] = useState<SortOption>('newest');

  const filteredCars = useMemo(() => {
    let result = cars.filter(car => {
      const matchQuery = `${car.brand} ${car.model}`.toLowerCase().includes(filters.query.toLowerCase());
      const matchMinPrice = filters.minPrice === '' || car.price >= Number(filters.minPrice);
      const matchMaxPrice = filters.maxPrice === '' || car.price <= Number(filters.maxPrice);
      const matchYear = filters.minYear === '' || car.year >= Number(filters.minYear);
      const matchBrand = filters.brand === '' || car.brand === filters.brand;
      return matchQuery && matchMinPrice && matchMaxPrice && matchYear && matchBrand;
    });

    if (sort === 'price_asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'mileage_asc') result.sort((a, b) => a.mileage - b.mileage);
    if (sort === 'newest') result.sort((a, b) => b.year - a.year);

    return result;
  }, [cars, filters, sort]);

  const brands = useMemo(() => {
    return Array.from(new Set(cars.map(c => c.brand))).sort();
  }, [cars]);

  return (
    <div className="bg-[#f8fafc] dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="relative hero-gradient overflow-hidden pt-24 pb-12 md:pt-56 md:pb-40">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-400 rounded-full mix-blend-screen filter blur-[60px] md:blur-[120px] opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 rounded-full text-blue-100 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-8 animate-slide-up">
              #1 Marketplace in Czech Republic
            </span>
            <h1 className="text-3xl md:text-8xl font-black text-white mb-4 md:mb-8 tracking-tighter leading-[1.1] md:leading-[0.9] animate-slide-up [animation-delay:100ms]">
                Find your <br className="hidden md:block"/> <span className="text-blue-300 italic">next</span> drive.
            </h1>
            <p className="text-blue-100 text-sm md:text-xl max-w-2xl mx-auto mb-6 md:mb-12 opacity-80 animate-slide-up [animation-delay:200ms]">
              Discover thousands of high-quality pre-owned vehicles with verified histories.
            </p>
            
            <div className="bg-white dark:bg-slate-900 p-2 rounded-xl md:rounded-[32px] shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto animate-slide-up [animation-delay:300ms]">
              <div className="flex-grow relative flex items-center pl-3 md:pl-6">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-slate-400 mr-2 md:mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input 
                  type="text" 
                  placeholder={t.hero.searchPlaceholder}
                  className="w-full py-2 md:py-4 text-sm md:text-base text-slate-900 dark:text-white font-bold placeholder:text-slate-400 focus:outline-none bg-transparent"
                  value={filters.query}
                  onChange={(e) => setFilters({...filters, query: e.target.value})}
                />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-10 md:py-5 rounded-lg md:rounded-[24px] font-black text-xs md:text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95">
                {t.hero.searchBtn}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-4 md:-mt-12 relative z-20 pb-16 md:pb-24">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Filters Area */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white dark:bg-slate-900 p-5 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-none transition-colors duration-300">
              <div className="flex items-center justify-between mb-4 md:mb-8">
                <h3 className="font-black text-slate-900 dark:text-white text-sm md:text-lg uppercase tracking-tight">
                  {t.filters.title}
                </h3>
                <button 
                  onClick={() => setFilters({query: '', minPrice: '', maxPrice: '', minYear: '', brand: ''})}
                  className="text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-black hover:opacity-70 transition-opacity"
                >
                  {t.filters.reset}
                </button>
              </div>
              
              <div className="space-y-4 md:space-y-8">
                <div>
                  <label className="block text-[8px] md:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 md:mb-3">{t.filters.brand}</label>
                  <select 
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg md:rounded-xl p-2.5 md:p-4 text-xs md:text-base text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-blue-600 transition-all cursor-pointer appearance-none"
                    value={filters.brand}
                    onChange={(e) => setFilters({...filters, brand: e.target.value})}
                  >
                    <option value="">{t.filters.allBrands}</option>
                    {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[8px] md:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 md:mb-3">{t.filters.price}</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      placeholder={t.filters.from}
                      className="w-1/2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg md:rounded-xl p-2.5 md:p-4 text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-blue-600 text-[11px] md:text-sm"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                    />
                    <input 
                      type="number" 
                      placeholder={t.filters.to}
                      className="w-1/2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg md:rounded-xl p-2.5 md:p-4 text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-blue-600 text-[11px] md:text-sm"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                    />
                  </div>
                </div>

                <div className="p-4 md:p-6 bg-blue-600 rounded-[20px] md:rounded-3xl text-white shadow-xl shadow-blue-600/10 hidden sm:block">
                  <h4 className="font-black text-[10px] md:text-sm uppercase tracking-tight mb-1 md:mb-2">Pro Tip</h4>
                  <p className="text-[10px] md:text-xs leading-relaxed opacity-90 font-medium">
                    Vehicles with full history retain 15% more value.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Results Area */}
          <div className="flex-grow">
            <div className="bg-white dark:bg-slate-900 rounded-xl md:rounded-[32px] p-2 md:p-4 mb-4 md:mb-8 border border-slate-100 dark:border-slate-800 shadow-xl dark:shadow-none transition-colors duration-300 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
              <div className="flex items-center px-2 md:px-4">
                <span className="text-slate-900 dark:text-white font-black text-xl md:text-3xl tracking-tighter mr-2 md:mr-3">{filteredCars.length}</span>
                <span className="text-slate-400 dark:text-slate-500 font-black uppercase text-[8px] md:text-[10px] tracking-widest pt-0.5 md:pt-1">Listings</span>
              </div>
              
              <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg md:rounded-2xl">
                <button 
                    onClick={() => setViewMode('grid')}
                    className={`px-3 md:px-6 py-1.5 md:py-2 rounded-md md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}
                >
                    Grid
                </button>
                <button 
                    onClick={() => setViewMode('map')}
                    className={`px-3 md:px-6 py-1.5 md:py-2 rounded-md md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'map' ? 'bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}
                >
                    Map
                </button>
              </div>
              
              <div className="hidden sm:flex items-center space-x-2 md:space-x-3 pr-2 md:pr-4">
                <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.common.sort}</span>
                <select 
                  className="bg-transparent border-none py-1.5 md:py-2 text-[11px] md:text-sm font-black text-slate-900 dark:text-white focus:ring-0 appearance-none cursor-pointer"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                >
                  <option value="newest">{t.common.newest}</option>
                  <option value="price_asc">{t.common.cheapest}</option>
                  <option value="price_desc">{t.common.expensive}</option>
                </select>
              </div>
            </div>

            {filteredCars.length > 0 ? (
              viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
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
                <div className="animate-slide-up">
                  <MapView cars={filteredCars} />
                </div>
              )
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-[24px] md:rounded-[40px] py-16 md:py-40 text-center border-2 border-dashed border-slate-200 dark:border-slate-800">
                <h3 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white mb-3 md:mb-4 uppercase tracking-tight">No results</h3>
                <button 
                  onClick={() => setFilters({query: '', minPrice: '', maxPrice: '', minYear: '', brand: ''})}
                  className="px-6 py-3 md:px-12 md:py-5 bg-blue-600 text-white rounded-lg md:rounded-[20px] font-black uppercase tracking-widest shadow-xl text-xs md:text-base"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
