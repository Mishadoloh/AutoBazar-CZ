
import React, { useState, useMemo } from 'react';
import { Car, FilterOptions, SortOption } from '../types';
import CarCard from '../components/CarCard';
import { useLanguage } from '../App';

interface HomeProps {
  cars: Car[];
  toggleFavorite: (id: string) => void;
  favorites: string[];
}

const Home: React.FC<HomeProps> = ({ cars, toggleFavorite, favorites }) => {
  const { t } = useLanguage();
  const [filters, setFilters] = useState<FilterOptions>({
    query: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    brand: ''
  });
  const [sort, setSort] = useState<SortOption>('newest');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

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
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-600 py-12 md:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6">{t.hero.title}</h1>
          <p className="text-blue-100 text-sm md:text-lg mb-8">{t.hero.subtitle}</p>
          
          <div className="bg-white p-1.5 rounded-xl shadow-lg flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
            <input 
              type="text" 
              placeholder={t.hero.searchPlaceholder}
              className="flex-grow px-4 py-3 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.query}
              onChange={(e) => setFilters({...filters, query: e.target.value})}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              {t.hero.searchBtn}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className={`${showMobileFilters ? 'block' : 'hidden'} lg:block w-full lg:w-72 space-y-8`}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                {t.filters.title}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.filters.brand}</label>
                  <select 
                    className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500"
                    value={filters.brand}
                    onChange={(e) => setFilters({...filters, brand: e.target.value})}
                  >
                    <option value="">{t.filters.allBrands}</option>
                    {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.filters.price}</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="number" 
                      placeholder={t.filters.from}
                      className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border"
                      value={filters.minPrice}
                      onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                    />
                    <input 
                      type="number" 
                      placeholder={t.filters.to}
                      className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => setFilters({query: '', minPrice: '', maxPrice: '', minYear: '', brand: ''})}
                    className="w-full text-blue-600 text-sm font-medium hover:underline p-2"
                  >
                    {t.filters.reset}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {t.common.results} <span className="text-gray-500 font-normal text-lg">({filteredCars.length})</span>
              </h2>
              
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <span className="text-sm text-gray-500 whitespace-nowrap">{t.common.sort}:</span>
                <select 
                  className="flex-grow sm:flex-none border-gray-300 rounded-lg p-2 bg-white border text-sm focus:ring-blue-500 shadow-sm"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                >
                  <option value="newest">{t.common.newest}</option>
                  <option value="price_asc">{t.common.cheapest}</option>
                  <option value="price_desc">{t.common.expensive}</option>
                  <option value="mileage_asc">{t.common.mileage_sort}</option>
                </select>
              </div>
            </div>

            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
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
              <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.common.notFound}</h3>
                <p className="text-gray-500">{t.common.notFoundDesc}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
