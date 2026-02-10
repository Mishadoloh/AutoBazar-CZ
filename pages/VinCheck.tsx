
import React, { useState } from 'react';

const VinCheck: React.FC = () => {
  const [vin, setVin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState<any>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (vin.length !== 17) return;

    setIsLoading(true);
    setReport(null);

    // Simulate API call
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
          status: 'Офіційна реєстрація в Чехії'
        }
      });
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Перевірка VIN-коду</h1>
          <p className="text-lg text-gray-600">Дізнайтеся повну історію автомобіля за 17-значним кодом</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="p-8">
            <form onSubmit={handleCheck} className="flex flex-col md:flex-row gap-4">
              <input 
                required
                maxLength={17}
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                type="text" 
                placeholder="Введіть 17 символів VIN-коду..." 
                className="flex-grow border-2 border-gray-200 rounded-xl p-4 text-lg font-mono tracking-widest focus:border-blue-500 focus:outline-none transition-colors"
              />
              <button 
                disabled={isLoading || vin.length !== 17}
                className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300"
              >
                {isLoading ? 'Перевірка...' : 'Перевірити'}
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">VIN-код можна знайти в технічному паспорті автомобіля або під лобовим склом.</p>
          </div>
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        )}

        {report && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-green-50 border border-green-200 p-6 rounded-2xl flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-green-900 text-lg">Автомобіль знайдено в базі</h3>
                <p className="text-green-700">Офіційні дані для VIN: {report.vin}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Технічні дані
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Марка</span>
                    <span className="font-bold">{report.data.brand}</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Модель</span>
                    <span className="font-bold">{report.data.model}</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Рік</span>
                    <span className="font-bold">{report.data.year}</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-500">Статус</span>
                    <span className="text-blue-600 font-medium">{report.data.status}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  Історія ДТП та пробігу
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500 mb-1">Кількість зафіксованих ДТП</p>
                    <p className="text-2xl font-black text-green-600">{report.data.accidents}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Останні записи пробігу:</p>
                    {report.data.mileageHistory.map((h: any, i: number) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span>{h.date}</span>
                        <span className="font-mono font-bold">{h.value.toLocaleString()} км</span>
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
