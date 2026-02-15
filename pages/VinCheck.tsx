
import React, { useState } from 'react';
import { useLanguage } from '../App';

const VinCheck: React.FC = () => {
  const { t } = useLanguage();
  const [vin, setVin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<any>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (vin.length !== 17) return;
    setIsLoading(true);
    setReport(null);
    setTimeout(() => {
      setIsLoading(false);
      setReport({
        vin: vin.toUpperCase(),
        found: true,
        data: {
          brand: 'Skoda',
          model: 'Octavia',
          year: 2021,
          accidents: 0,
          mileageHistory: [
            { date: '2021-05-10', value: 0 },
            { date: '2022-05-15', value: 15200 },
            { date: '2023-06-01', value: 28450 }
          ],
          status: 'Officially Registered in CZ'
        }
      });
    }, 1500);
  };

  return (
    <div className="bg-[#f8fafc] dark:bg-slate-950 min-h-screen pt-32 pb-24 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Identity Check
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">{t.vin.title}</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">{t.vin.subtitle}</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-[48px] shadow-2xl overflow-hidden mb-12 border border-slate-50 dark:border-slate-800 animate-slide-up [animation-delay:100ms] transition-colors">
          <div className="p-10 md:p-14">
            <form onSubmit={handleCheck} className="flex flex-col md:flex-row gap-4">
              <input 
                required
                maxLength={17}
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                type="text" 
                placeholder={t.vin.placeholder}
                className="flex-grow border-none bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 text-xl font-black tracking-widest text-slate-900 dark:text-white focus:ring-4 focus:ring-blue-600/20 focus:outline-none transition-all"
              />
              <button 
                disabled={isLoading || vin.length !== 17}
                className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:shadow-none"
              >
                {isLoading ? '...' : t.vin.checkBtn}
              </button>
            </form>
            <p className="mt-8 text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-relaxed text-center">
              * VIN can be found on the dashboard or your technical passport (VTP).
            </p>
          </div>
        </div>

        {report && (
          <div className="space-y-8 animate-slide-up">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/40 p-10 rounded-[40px] flex items-center shadow-lg shadow-green-500/5">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white mr-8 shadow-xl shadow-green-500/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h3 className="font-black text-green-900 dark:text-green-400 text-2xl tracking-tight uppercase">Vehicle Found</h3>
                <p className="text-green-700/70 dark:text-green-500/70 font-black text-sm tracking-[0.2em] uppercase">{report.vin}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-900 p-10 rounded-[48px] shadow-2xl border border-slate-100 dark:border-slate-800 transition-colors">
                <h3 className="font-black text-slate-900 dark:text-white mb-10 flex items-center uppercase text-xs tracking-widest">
                  <div className="w-2 h-6 bg-blue-600 rounded-full mr-4"></div>
                  Specifications
                </h3>
                <ul className="space-y-6">
                  {[
                    { l: 'Brand', v: report.data.brand },
                    { l: 'Model', v: report.data.model },
                    { l: 'Year', v: report.data.year },
                    { l: 'Status', v: report.data.status, h: true }
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-slate-50 dark:border-slate-800 pb-5">
                      <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{item.l}</span>
                      <span className={`font-black text-lg tracking-tight ${item.h ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>{item.v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 p-10 rounded-[48px] shadow-2xl border border-slate-100 dark:border-slate-800 transition-colors">
                <h3 className="font-black text-slate-900 dark:text-white mb-10 flex items-center uppercase text-xs tracking-widest">
                  <div className="w-2 h-6 bg-red-500 rounded-full mr-4"></div>
                  History Record
                </h3>
                <div className="space-y-8">
                  <div className="p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl">
                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Accidents Found</p>
                    <p className="text-5xl font-black text-green-600 dark:text-green-400 tracking-tighter">{report.data.accidents}</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Mileage Logs:</p>
                    {report.data.mileageHistory.map((h: any, i: number) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl">
                        <span className="font-black text-slate-400 dark:text-slate-500 uppercase text-[9px] tracking-widest">{h.date}</span>
                        <span className="font-black text-slate-900 dark:text-white">{h.value.toLocaleString()} km</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VinCheck;
