
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car } from '../types';

interface SellCarProps {
  addCar: (car: Car) => void;
}

const SellCar: React.FC<SellCarProps> = ({ addCar }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: 2023,
    price: 0,
    mileage: 0,
    engine: '',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    location: 'Київ',
    description: '',
    imageUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCar: Car = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      transmission: formData.transmission as any,
      fuelType: formData.fuelType as any
    };
    addCar(newCar);
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'year' || name === 'price' || name === 'mileage' ? Number(value) : value }));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 p-8 text-white">
            <h1 className="text-3xl font-bold">Продати автомобіль</h1>
            <p className="mt-2 text-blue-100 text-lg">Заповніть форму, щоб розмістити ваше оголошення</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Основна інформація</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Марка</label>
                  <input required name="brand" value={formData.brand} onChange={handleChange} type="text" placeholder="Напр. BMW" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Модель</label>
                  <input required name="model" value={formData.model} onChange={handleChange} type="text" placeholder="Напр. X5" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Рік випуску</label>
                  <input required name="year" value={formData.year} onChange={handleChange} type="number" min="1900" max="2025" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ціна (USD)</label>
                  <input required name="price" value={formData.price} onChange={handleChange} type="number" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500" />
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Технічні характеристики</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Пробіг (км)</label>
                  <input required name="mileage" value={formData.mileage} onChange={handleChange} type="number" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Двигун</label>
                  <input required name="engine" value={formData.engine} onChange={handleChange} type="text" placeholder="Напр. 2.0L Turbo" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Коробка передач</label>
                  <select name="transmission" value={formData.transmission} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500">
                    <option value="Automatic">Автомат</option>
                    <option value="Manual">Механіка</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Паливо</label>
                  <select name="fuelType" value={formData.fuelType} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500">
                    <option value="Petrol">Бензин</option>
                    <option value="Diesel">Дизель</option>
                    <option value="Electric">Електро</option>
                    <option value="Hybrid">Гібрид</option>
                  </select>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Фото та опис</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">URL зображення</label>
                  <input required name="imageUrl" value={formData.imageUrl} onChange={handleChange} type="url" placeholder="Вставте посилання на фото" className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Опис</label>
                  <textarea required name="description" value={formData.description} onChange={handleChange} rows={5} placeholder="Розкажіть про стан авто, комплектацію..." className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border focus:ring-blue-500" />
                </div>
              </div>
            </section>

            <div className="pt-8 border-t">
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg transform active:scale-[0.98] transition-all">
                Опублікувати оголошення
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
