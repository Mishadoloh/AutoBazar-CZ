
import React from 'react';
import { useLanguage } from '../App';

const Insurance: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#f8fafc] dark:bg-slate-950 min-h-screen pt-32 pb-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Services
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase">
            {t.insurance.title}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            {t.insurance.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[40px] shadow-xl shadow-slate-200/40 dark:shadow-none border border-slate-50 dark:border-slate-800 group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase">{t.insurance.mandatory}</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed">Покриває збитки, завдані іншим учасникам дорожнього руху. Обов'язково за законом для кожного авто в Чехії.</p>
            <div className="space-y-4">
               {['Ліміти до 100 млн Kč', 'Асистанс 24/7', 'Зелена карта в ціні'].map((item, i) => (
                 <div key={i} className="flex items-center text-sm font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                   {item}
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-slate-900 dark:bg-blue-600 p-10 rounded-[40px] shadow-2xl text-white group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-white/10 dark:bg-slate-900/50 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{t.insurance.full}</h3>
            <p className="text-slate-400 dark:text-blue-100 mb-8 font-medium leading-relaxed">Повний захист вашого майна: аварії, викрадення, вандалізм та стихійні лиха.</p>
            <div className="space-y-4">
               {['Виплата при вашій вині', 'Гнучка франшиза', 'Покриття по всій Європі'].map((item, i) => (
                 <div key={i} className="flex items-center text-sm font-bold text-white/70 dark:text-white uppercase tracking-wide">
                   <div className="w-1.5 h-1.5 bg-white dark:bg-slate-900 rounded-full mr-3"></div>
                   {item}
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-600 dark:bg-slate-800 rounded-[40px] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-blue-500/30 dark:shadow-none overflow-hidden relative transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 dark:bg-blue-600/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">{t.insurance.cta}</h2>
            <p className="text-blue-100 dark:text-slate-400 font-medium text-lg leading-relaxed">{t.insurance.ctaDesc}</p>
          </div>
          <form className="w-full md:w-auto flex flex-col gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input type="tel" placeholder="+420" className="px-8 py-5 rounded-2xl text-slate-900 dark:text-white bg-white dark:bg-slate-700 font-bold focus:outline-none min-w-[300px] border-none shadow-lg" />
            <button className="bg-slate-900 dark:bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-xl active:scale-95">
              {t.insurance.cta}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
