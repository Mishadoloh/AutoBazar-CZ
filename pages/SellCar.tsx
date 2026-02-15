
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car } from '../types';

interface SellCarProps {
  addCar: (car: Car) => Promise<void>;
}

const SellCar: React.FC<SellCarProps> = ({ addCar }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagesInput, setImagesInput] = useState('');
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: 2023,
    price: 0,
    mileage: 0,
    engine: '',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    location: 'Прага',
    description: '',
    images: [] as string[]
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Split input by comma or space to get image array
    const images = imagesInput.split(/[\s,]+/).filter(url => url.startsWith('http'));
    const finalData = { 
      ...formData, 
      images: images.length > 0 ? images : ['https://images.unsplash.com/photo-1494976388531-d1058494cdd8'],
      lat: 50.0755,
      lng: 14.4378
    };

    try {
      await addCar(finalData as any);
      navigate('/');
    } catch (error) {
      alert("Помилка при збереженні оголошення");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'year' || name === 'price' || name === 'mileage' ? Number(value) : value 
    }));
  };

  return (
    <div className="bg-[#f8fafc] dark:bg-slate-950 min-h-screen py-32 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-900 rounded-[48px] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 animate-slide-up">
          <div className="bg-slate-900 dark:bg-blue-600 p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <h1 className="text-4xl font-black tracking-tighter uppercase mb-2 relative z-10">Створити оголошення</h1>
            <p className="text-slate-400 dark:text-blue-100 font-medium relative z-10">Ваше авто побачать тисячі зацікавлених покупців у Чехії.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-12 space-y-12">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-full">
                <h3 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2 flex items-center">
                  <span className="w-8 h-px bg-blue-600 dark:bg-blue-400 mr-3"></span>
                  Параметри автомобіля
                </h3>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Марка</label>
                <input required name="brand" value={formData.brand} onChange={handleChange} type="text" placeholder="Напр. Skoda" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-slate-800 dark:text-white font-bold focus:ring-2 focus:ring-blue-600 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Модель</label>
                <input required name="model" value={formData.model} onChange={handleChange} type="text" placeholder="Напр. Octavia" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-slate-800 dark:text-white font-bold focus:ring-2 focus:ring-blue-600 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Рік випуску</label>
                <input required name="year" value={formData.year} onChange={handleChange} type="number" min="1900" max="2025" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-slate-800 dark:text-white font-bold focus:ring-2 focus:ring-blue-600 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Ціна (EUR)</label>
                <input required name="price" value={formData.price} onChange={handleChange} type="number" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-blue-600 dark:text-blue-400 font-black text-xl focus:ring-2 focus:ring-blue-600 transition-all" />
              </div>
            </section>

            <section className="space-y-4">
               <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Посилання на фото (через кому)</label>
               <textarea 
                  required
                  placeholder="https://image1.jpg, https://image2.jpg..."
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 text-slate-800 dark:text-white font-medium focus:ring-2 focus:ring-blue-600 transition-all h-24"
                  value={imagesInput}
                  onChange={(e) => setImagesInput(e.target.value)}
               />
            </section>

            <section className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Опис стану та комплектації</label>
              <textarea required name="description" value={formData.description} onChange={handleChange} rows={5} placeholder="Сервісна книжка, стан салону, додаткове обладнання..." className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-6 text-slate-800 dark:text-white font-medium focus:ring-2 focus:ring-blue-600 transition-all resize-none" />
            </section>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-blue-700 shadow-2xl shadow-blue-500/30 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Публікація...' : 'Опублікувати оголошення'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
