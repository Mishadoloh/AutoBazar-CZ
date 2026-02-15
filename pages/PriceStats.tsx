
import React from 'react';
import { useLanguage } from '../App';

const PriceStats: React.FC = () => {
  const { t } = useLanguage();
  const stats = [
    { brand: 'Skoda Octavia', avgPrice: 15400, trend: '+2.4%', color: 'bg-blue-600' },
    { brand: 'Volkswagen Golf', avgPrice: 12800, trend: '-0.8%', color: 'bg-indigo-500' },
    { brand: 'BMW X5', avgPrice: 38500, trend: '+5.1%', color: 'bg-slate-800 dark:bg-blue-400' },
    { brand: 'Audi A4', avgPrice: 18200, trend: '0%', color: 'bg-blue-400 dark:bg-indigo-400' },
    { brand: 'Hyundai i30', avgPrice: 9500, trend: '+1.2%', color: 'bg-sky-500' },
  ];

  return (
    <div className="bg-[#f8fafc] dark:bg-slate-950 min-h-screen py-32 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 animate-slide-up">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Market Analytics</div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 uppercase">Price <span className="text-blue-600">Dynamics</span></h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed">
              Real-time insights into the Czech car market value. We analyze thousands of listings daily to give you the most accurate pricing data.
            </p>
          </div>
          <div className="flex items-center p-6 bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/10 transition-colors">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mr-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Market Today</p>
              <p className="text-xl font-black text-slate-900 dark:text-white leading-tight">+1.2% Growth</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[48px] shadow-2xl shadow-slate-200/20 dark:shadow-none border border-slate-100 dark:border-slate-800 animate-slide-up [animation-delay:100ms] transition-colors overflow-hidden relative">
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-12 tracking-tight uppercase flex items-center">
              Average Price by Brand
              <div className="ml-6 flex-grow h-px bg-slate-100 dark:bg-slate-800"></div>
            </h3>
            
            <div className="space-y-12">
              {stats.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-black text-slate-900 dark:text-white flex items-center text-lg">
                      <span className={`w-3 h-3 rounded-full ${item.color} mr-4 group-hover:scale-150 transition-transform`}></span>
                      {item.brand}
                    </span>
                    <div className="text-right">
                      <span className="block font-black text-slate-900 dark:text-white text-xl tracking-tight">€{item.avgPrice.toLocaleString()}</span>
                      <span className={`text-[10px] font-black ${item.trend.startsWith('+') ? 'text-green-600' : item.trend === '0%' ? 'text-slate-400' : 'text-red-500'}`}>
                        {item.trend} / Month
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-50 dark:bg-slate-800 rounded-full h-4 overflow-hidden p-1 border border-slate-100 dark:border-slate-700">
                    <div 
                      className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out shadow-lg`} 
                      style={{ width: `${(item.avgPrice / 40000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="bg-blue-600 p-10 rounded-[48px] text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden group animate-slide-up [animation-delay:200ms]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Market Share</h3>
              <div className="space-y-6">
                {[
                  { label: 'Sedans', val: '42%', icon: '🚗' },
                  { label: 'SUVs', val: '35%', icon: '🚙' },
                  { label: 'Wagons', val: '23%', icon: '🚐' }
                ].map((s, i) => (
                  <div key={i} className="flex justify-between items-center p-5 bg-white/10 rounded-[24px] hover:bg-white/20 transition-all cursor-default">
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{s.icon}</span>
                      <span className="font-black text-sm uppercase tracking-tight opacity-90">{s.label}</span>
                    </div>
                    <span className="font-black text-xl">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-slate-800 p-10 rounded-[48px] text-white shadow-xl animate-slide-up [animation-delay:300ms] transition-colors">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Forecast 2024</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-8">
                We anticipate a stabilization of diesel vehicle prices and a significant surge in hybrid demand within the Prague region.
              </p>
              <div className="flex items-center space-x-3 px-4 py-2 bg-slate-800 dark:bg-slate-700 rounded-xl w-fit">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Live Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceStats;
