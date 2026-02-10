
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Car } from '../types';

interface CarDetailsProps {
  cars: Car[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const CarDetails: React.FC<CarDetailsProps> = ({ cars, favorites, toggleFavorite }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const car = cars.find(c => c.id === id);
  
  const [showPhone, setShowPhone] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!car) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Автомобіль не знайдено</h2>
        <Link to="/" className="text-blue-600 hover:underline">Повернутися до каталогу</Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(car.id);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setIsMessageModalOpen(false);
      setMessage('');
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">Каталог</Link>
          <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
          <span className="text-gray-900">{car.brand} {car.model}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gallery and Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <div className="aspect-video relative">
                <img src={car.imageUrl} alt={car.model} className="w-full h-full object-cover" />
                <button 
                  onClick={() => toggleFavorite(car.id)}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md shadow-lg transition-all ${
                    isFavorite ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600'
                  }`}
                >
                  <svg className="w-6 h-6" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-extrabold text-gray-900">{car.brand} {car.model}</h1>
                  <p className="text-lg text-gray-500 mt-1">{car.year} рік • {car.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-blue-600">${car.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500 mt-1">~ {(car.price * 25).toLocaleString()} CZK</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-gray-100 py-8 mb-8">
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Пробіг</p>
                  <p className="text-lg font-bold text-gray-900">{car.mileage.toLocaleString()} км</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Двигун</p>
                  <p className="text-lg font-bold text-gray-900">{car.engine}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">КПП</p>
                  <p className="text-lg font-bold text-gray-900">{car.transmission}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1 uppercase tracking-wider font-semibold">Паливо</p>
                  <p className="text-lg font-bold text-gray-900">{car.fuelType}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Опис автомобіля</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {car.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-24">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  {car.location.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Приватна особа</p>
                  <p className="text-sm text-gray-500">На сайті з жовтня 2022</p>
                </div>
              </div>

              <div className="space-y-4">
                {showPhone ? (
                  <div className="w-full bg-gray-100 text-gray-900 py-4 rounded-xl font-bold text-xl text-center flex items-center justify-center border-2 border-dashed border-blue-200">
                    <span className="select-all">+420 777 123 456</span>
                  </div>
                ) : (
                  <button 
                    onClick={() => setShowPhone(true)}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    Показати телефон
                  </button>
                )}
                
                <button 
                  onClick={() => setIsMessageModalOpen(true)}
                  className="w-full bg-white border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  Написати повідомлення
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Поради з безпеки</h4>
                <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4">
                  <li>Ніколи не перераховуйте кошти на картку до огляду авто</li>
                  <li>Перевіряйте документи на право власності</li>
                  <li>Проводьте огляд на СТО перед покупкою</li>
                  <li>Вимагайте договір купівлі-продажу</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {isMessageModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Зв'язатися з продавцем</h3>
              <button 
                onClick={() => setIsMessageModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            <div className="p-6">
              {isSent ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Надіслано!</h4>
                  <p className="text-gray-500 mt-2">Ваше повідомлення успішно надіслане продавцю.</p>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl mb-4">
                    <img src={car.imageUrl} alt={car.model} className="w-12 h-12 object-cover rounded-lg" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{car.brand} {car.model}</p>
                      <p className="text-xs text-blue-600">${car.price.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ваше повідомлення</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full border-gray-300 rounded-xl p-3 bg-gray-50 border focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                      placeholder="Доброго дня! Чи актуальна пропозиція? Коли можна оглянути авто?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg transform active:scale-[0.98] transition-all"
                  >
                    Надіслати повідомлення
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
