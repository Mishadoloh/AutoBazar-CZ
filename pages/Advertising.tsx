
import React from 'react';

const Advertising: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Реклама на AutoBazar CZ</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Збільшуйте продажі вашого автобізнесу разом з найбільшим порталом для українців у Чехії.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-2">Стандарт</h3>
            <div className="text-3xl font-black mb-4">500 Kč <span className="text-sm font-normal text-gray-400">/ міс</span></div>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
              <li>До 10 активних оголошень</li>
              <li>Виділення кольором</li>
              <li>Статистика переглядів</li>
            </ul>
            <button className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50">Обрати</button>
          </div>
          
          <div className="bg-blue-600 p-8 rounded-2xl shadow-xl text-white transform scale-105">
            <div className="bg-white text-blue-600 text-[10px] font-bold px-2 py-1 rounded uppercase w-fit mb-4">Популярний</div>
            <h3 className="text-xl font-bold mb-2">Бізнес</h3>
            <div className="text-3xl font-black mb-4">1,500 Kč <span className="text-sm font-normal opacity-70">/ міс</span></div>
            <ul className="space-y-3 text-sm opacity-90 mb-8">
              <li>До 50 активних оголошень</li>
              <li>Автоматичне підняття</li>
              <li>Пріоритет у пошуку</li>
              <li>Персональний менеджер</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-white text-blue-600 font-bold hover:bg-gray-100">Обрати</button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-2">Дилер</h3>
            <div className="text-3xl font-black mb-4">4,000 Kč <span className="text-sm font-normal text-gray-400">/ міс</span></div>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
              <li>Безліміт оголошень</li>
              <li>Банерна реклама</li>
              <li>XML імпорт пропозицій</li>
              <li>Брендована сторінка</li>
            </ul>
            <button className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50">Обрати</button>
          </div>
        </div>

        <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center">
          <h2 className="text-3xl font-bold mb-6">Бажаєте індивідуальну рекламну кампанію?</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">Ми пропонуємо спецпроекти, брендування розділів та банерну рекламу для великих автодилерів.</p>
          <a href="mailto:ads@autobazar.cz" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all">
            Зв'язатися з відділом реклами
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
