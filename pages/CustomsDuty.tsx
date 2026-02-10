
import React, { useState } from 'react';

const CustomsDuty: React.FC = () => {
  const [carPrice, setCarPrice] = useState<number>(5000);
  const [engineVolume, setEngineVolume] = useState<number>(2000);
  const [year, setYear] = useState<number>(2015);
  const [fuelType, setFuelType] = useState('petrol');

  // Simple mock calculation for customs duty
  const calculateDuty = () => {
    const age = 2024 - year;
    const baseRate = fuelType === 'petrol' ? 50 : 75;
    const duty = (carPrice * 0.1) + (engineVolume * 0.2 * age * (baseRate / 100));
    return Math.round(duty);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Оцінка мита</h1>
          <p className="text-lg text-gray-600">Розрахуйте орієнтовну вартість розмитнення авто при ввезенні в Україну</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Вартість авто (EUR)</label>
                <input type="number" value={carPrice} onChange={(e) => setCarPrice(Number(e.target.value))} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Рік випуску</label>
                  <input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Об'єм (см³)</label>
                  <input type="number" value={engineVolume} onChange={(e) => setEngineVolume(Number(e.target.value))} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Тип двигуна</label>
                <select value={fuelType} onChange={(e) => setFuelType(e.target.value)} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 border">
                  <option value="petrol">Бензин</option>
                  <option value="diesel">Дизель</option>
                  <option value="electric">Електро</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 p-8 rounded-2xl shadow-lg text-white text-center flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">Приблизне мито</h3>
            <div className="text-5xl font-black mb-4">€{calculateDuty().toLocaleString()}</div>
            <p className="text-blue-100 text-sm opacity-80">
              Цей розрахунок є приблизним. Реальна вартість може залежати від чинного законодавства та оцінки митної вартості.
            </p>
            <button className="mt-8 bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Замовити консультацію
            </button>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Що входить у вартість?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <li className="flex items-start"><svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Ввізне мито (зазвичай 10%)</li>
            <li className="flex items-start"><svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ПДВ (20% від вартості авто + мито + акциз)</li>
            <li className="flex items-start"><svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Акцизний збір (залежить від об'єму та віку)</li>
            <li className="flex items-start"><svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Збір до Пенсійного фонду</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomsDuty;
