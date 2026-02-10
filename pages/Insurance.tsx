
import React from 'react';

const Insurance: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Страхування авто в Чехії</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Оформіть обов'язкове (Povinné ručení) або добровільне (Havarijní pojištění) страхування за найкращими цінами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Povinné ručení</h3>
            <p className="text-gray-600 mb-6">Обов'язкове страхування цивільної відповідальності власника транспортного засобу. Покриває збитки, завдані іншим учасникам дорожнього руху.</p>
            <ul className="space-y-3 text-sm text-gray-500 mb-8">
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Обов'язково за законом</li>
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Ціна залежить від віку та об'єму двигуна</li>
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Допомога на дорозі входить у пакет</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Havarijní pojištění</h3>
            <p className="text-gray-600 mb-6">Добровільне страхування вашого авто. Покриває збитки від аварій, крадіжок, вандалізму та стихійних лих.</p>
            <ul className="space-y-3 text-sm text-gray-500 mb-8">
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Повний захист вашого майна</li>
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Виплата навіть при вашій вині</li>
              <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg> Гнучкі умови франшизи</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Отримати індивідуальну пропозицію</h2>
            <p className="text-blue-100 opacity-90">Залиште ваші контакти, і наш спеціаліст підбере оптимальний варіант страхування для вашого автомобіля.</p>
          </div>
          <form className="w-full md:w-auto flex flex-col gap-4">
            <input type="tel" placeholder="+420" className="px-6 py-4 rounded-xl text-gray-900 focus:outline-none min-w-[300px]" />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Замовити дзвінок
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
