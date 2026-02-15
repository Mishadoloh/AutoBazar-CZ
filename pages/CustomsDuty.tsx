
import React, { useState } from 'react';
import { useLanguage } from '../App';

const CustomsDuty: React.FC = () => {
  const { t } = useLanguage();
  const [carPrice, setCarPrice] = useState<number>(5000);
  const [engineVolume, setEngineVolume] = useState<number>(2000);
  const [year, setYear] = useState<number>(2015);
  const [fuelType, setFuelType] = useState('petrol');

  const calculateDuty = () => {
    const age = Math.max(1, 2024 - year);
    const baseRate = fuelType === 'petrol' ? 50 : 75;
    const duty = (carPrice * 0.1) + (engineVolume * 0.2 * age * (baseRate / 100));
    return Math.round(duty);
  };

  return (
    <div className="bg-[#f8fafc] dark:bg-slate-950 min-h-screen pt-32 pb-24 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
           <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Import Tool</div>
           <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">Duty <span className="text-blue-600">Calculator</span></h1>
           <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{t.customs.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-10 md:p-14 rounded-[48px] shadow-2xl border border-slate-50 dark:border-slate-800 transition-colors">
            <div className="space-y-10">
              <div>
                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 ml-1">Car Price (€)</label>
                <input type="number" value={carPrice} onChange={(e) => setCarPrice(Number(e.target.value))} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-[24px] p-6 text-2xl font-black text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-600/20 transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 ml-1">Production Year</label>
                  <input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-[24px] p-6 text-2xl font-black text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-600/20 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 ml-1">Engine Size (cm³)</label>
                  <input type="number" value={engineVolume} onChange={(e) => setEngineVolume(Number(e.target.value))} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-[24px] p-6 text-2xl font-black text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-600/20 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 ml-1">Fuel Type</label>
                <select value={fuelType} onChange={(e) => setFuelType(e.target.value)} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-[24px] p-6 text-2xl font-black text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-600/20 transition-all appearance-none cursor-pointer">
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                </select>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 dark:bg-blue-600 p-12 rounded-[48px] shadow-2xl text-white flex flex-col justify-between relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 p-10 opacity-10">
               <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </div>
            <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Total Duty Estimate</h3>
                <div className="text-7xl md:text-8xl font-black text-blue-500 dark:text-white tracking-tighter mb-6 leading-none">
                  €{calculateDuty().toLocaleString()}
                </div>
                <p className="text-slate-400 dark:text-blue-100 font-medium leading-relaxed">
                  Calculated based on current customs regulations. Actual costs may vary at the border.
                </p>
            </div>
            <button className="relative z-10 mt-16 bg-blue-600 dark:bg-slate-900 text-white py-6 rounded-[24px] font-black text-lg uppercase tracking-widest hover:opacity-90 transition-all shadow-xl active:scale-95">
              Contact Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomsDuty;
