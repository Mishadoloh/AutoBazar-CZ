
import React from 'react';

const PriceStats: React.FC = () => {
  const stats = [
    { brand: 'Skoda Octavia', avgPrice: 15400, trend: '+2%' },
    { brand: 'Volkswagen Golf', avgPrice: 12800, trend: '-1%' },
    { brand: 'BMW X5', avgPrice: 38500, trend: '+5%' },
    { brand: 'Audi A4', avgPrice: 18200, trend: '0%' },
    { brand: 'Hyundai i30', avgPrice: 9500, trend: '+1%' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Статистика цін</h1>
          <p className="text-lg text-gray-600">Аналіз ринку вживаних автомобілів у Чехії (EUR)</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold mb-6">Динаміка середньої ціни по марках</h3>
            <div className="space-y-6">
              {stats.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-gray-900">{item.brand}</span>
                    <span className="text-gray-500">Середня: €{item.avgPrice.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-blue-600 h-full rounded-full transition-all duration-1000" 
                      style={{ width: `${(item.avgPrice / 40000) * 100}%` }}
                    ></div>
                  </div>
                  <div className={`text-xs font-bold ${item.trend.startsWith('+') ? 'text-green-600' : item.trend === '0%' ? 'text-gray-400' : 'text-red-600'}`}>
                    Тренд за місяць: {item.trend}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Популярні сегменти</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                  <span className="text-blue-800 font-medium">Седани</span>
                  <span className="font-bold">42%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-xl">
                  <span className="text-purple-800 font-medium">Кросовери (SUV)</span>
                  <span className="font-bold">35%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                  <span className="text-green-800 font-medium">Універсали</span>
                  <span className="font-bold">23%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Прогноз ринку</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Очікується стабілізація цін на вживані авто з ДВЗ та поступове зниження вартості електромобілів через розвиток зарядної інфраструктури в Чехії.
              </p>
              <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                <p className="text-xs text-gray-500 mb-1">Оновлено сьогодні</p>
                <p className="text-sm font-bold">Ринок активний (Buyer's Market)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceStats;
