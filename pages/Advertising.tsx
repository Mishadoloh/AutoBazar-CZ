
import React from 'react';

const Advertising: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] dark:bg-slate-950 min-h-screen py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Partnership</div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter uppercase">Реклама на AutoBazar CZ</h1>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Збільшуйте продажі вашого автобізнесу разом з найбільшим порталом для українців у Чехії.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              title: 'Стандарт', 
              price: '500 Kč', 
              features: ['До 10 активних оголошень', 'Виділення кольором', 'Статистика переглядів'],
              accent: false
            },
            { 
              title: 'Бізнес', 
              price: '1,500 Kč', 
              features: ['До 50 активних оголошень', 'Автоматичне підняття', 'Пріоритет у пошуку', 'Персональний менеджер'],
              accent: true
            },
            { 
              title: 'Дилер', 
              price: '4,000 Kč', 
              features: ['Безліміт оголошень', 'Банерна реклама', 'XML імпорт пропозицій', 'Брендована сторінка'],
              accent: false
            }
          ].map((plan, i) => (
            <div key={i} className={`p-10 rounded-[40px] shadow-2xl transition-all duration-500 hover:-translate-y-2 border ${
              plan.accent 
                ? 'bg-blue-600 border-transparent text-white scale-105 z-10' 
                : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white'
            }`}>
              {plan.accent && (
                <div className="bg-white text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase w-fit mb-6 tracking-widest">
                  Популярний
                </div>
              )}
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{plan.title}</h3>
              <div className="text-4xl font-black mb-8 tracking-tighter">
                {plan.price} <span className={`text-sm font-normal uppercase ${plan.accent ? 'text-blue-100' : 'text-gray-400'}`}>/ міс</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className={`flex items-center text-sm font-bold uppercase tracking-wide ${plan.accent ? 'text-blue-50' : 'text-slate-500 dark:text-slate-400'}`}>
                    <div className={`w-1.5 h-1.5 rounded-full mr-3 ${plan.accent ? 'bg-white' : 'bg-blue-600'}`}></div>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all ${
                plan.accent 
                  ? 'bg-slate-900 text-white hover:bg-black' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-blue-600 hover:text-white'
              }`}>
                Обрати план
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 p-12 md:p-20 rounded-[40px] border border-slate-100 dark:border-slate-800 text-center shadow-xl shadow-slate-200/20 dark:shadow-none animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-black mb-6 dark:text-white tracking-tighter uppercase">Бажаєте індивідуальну рекламну кампанію?</h2>
          <p className="text-gray-600 dark:text-slate-400 mb-12 max-w-xl mx-auto font-medium text-lg">Ми пропонуємо спецпроекти, брендування розділів та банерну рекламу для великих автодилерів.</p>
          <a href="mailto:ads@autobazar.cz" className="inline-block bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-blue-500/30 hover:bg-blue-700 transition-all active:scale-95">
            Зв'язатися з відділом реклами
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
