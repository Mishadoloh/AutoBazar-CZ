
import { Car } from './types';

export const MOCK_CARS: Car[] = [
  {
    id: '1',
    brand: 'Skoda',
    model: 'Octavia RS',
    year: 2022,
    price: 32000,
    mileage: 22000,
    engine: '2.0 TSI (245 к.с.)',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    location: 'Прага',
    lat: 50.0755,
    lng: 14.4378,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2020_Skoda_Octavia_vRS_TSI_iV_Estate_1.4.jpg/1200px-2020_Skoda_Octavia_vRS_TSI_iV_Estate_1.4.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/2020_Skoda_Octavia_vRS_TSI_iV_Estate_1.4_Rear.jpg/1200px-2020_Skoda_Octavia_vRS_TSI_iV_Estate_1.4_Rear.jpg',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Автомобіль в ідеальному стані, перший власник у Чехії. Обслуговувався виключно на офіційному сервісі Skoda. Максимальна комплектація RS з матричними фарами та спортивними сидіннями. Багата історія обслуговування, сервісна книжка в наявності.`,
    createdAt: '2023-10-01'
  },
  {
    id: '2',
    brand: 'Audi',
    model: 'A6 Avant',
    year: 2020,
    price: 42000,
    mileage: 45000,
    engine: '2.0L TDI (204 к.с.)',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    location: 'Брно',
    lat: 49.1951,
    lng: 16.6068,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/2018_Audi_A6_Avant_50_TDi_Quattro_Automatic_3.0_Front.jpg/1200px-2018_Audi_A6_Avant_50_TDi_Quattro_Automatic_3.0_Front.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2018_Audi_A6_Avant_50_TDi_Quattro_Automatic_3.0_Rear.jpg/1200px-2018_Audi_A6_Avant_50_TDi_Quattro_Automatic_3.0_Rear.jpg',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Преміальний універсал для комфортних подорожей. Адаптивна пневматична підвіска, подвійне скло для кращої звукоізоляції. Стан нового автомобіля. Комплект зимової гуми на дисках у подарунок.`,
    createdAt: '2023-09-25'
  },
  {
    id: '3',
    brand: 'Tesla',
    model: 'Model 3 Performance',
    year: 2021,
    price: 38500,
    mileage: 28000,
    engine: 'Dual Motor (513 к.с.)',
    transmission: 'Automatic',
    fuelType: 'Electric',
    location: 'Острава',
    lat: 49.8209,
    lng: 18.2625,
    images: [
      'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1579935110464-fcd041be62d0?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Максимальна версія Performance з неймовірною динамікою. Автопілот, білий салон, панорамний дах. Тільки що пройшла повну діагностику в Tesla сервісі.`,
    createdAt: '2023-11-05'
  },
  {
    id: '4',
    brand: 'Toyota',
    model: 'Land Cruiser 300',
    year: 2023,
    price: 95000,
    mileage: 2000,
    engine: '3.5L V6 Twin-Turbo',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    location: 'Пльзень',
    lat: 49.7384,
    lng: 13.3736,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/2021_Toyota_Land_Cruiser_ZX_%28VJA300W%29.jpg/1200px-2021_Toyota_Land_Cruiser_ZX_%28VJA300W%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2021_Toyota_Land_Cruiser_ZX_%28VJA300W%29_rear.jpg/1200px-2021_Toyota_Land_Cruiser_ZX_%28VJA300W%29_rear.jpg',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Абсолютно новий автомобіль у лімітованій версії GR Sport. Найкращий позашляховик у світі з максимальним рівнем безпеки та розкоші. Гарантія 3 роки.`,
    createdAt: '2023-12-10'
  },
  {
    id: '5',
    brand: 'Volkswagen',
    model: 'Golf GTI',
    year: 2018,
    price: 22000,
    mileage: 82000,
    engine: '2.0L TSI (Stage 1 Revo)',
    transmission: 'Manual',
    fuelType: 'Petrol',
    location: 'Прага',
    lat: 50.0835,
    lng: 14.4178,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/2020_Volkswagen_Golf_GTI_TSI_S-A_2.0_Front.jpg/1200px-2020_Volkswagen_Golf_GTI_TSI_S-A_2.0_Front.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2020_Volkswagen_Golf_GTI_TSI_S-A_2.0_Rear.jpg/1200px-2020_Volkswagen_Golf_GTI_TSI_S-A_2.0_Rear.jpg',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Заряджений хетчбек для справжніх ентузіастів. Stage 1 від Revo (300 к.с.), тюнінгована вихлопна система, диски BBS. Авто приносить море емоцій.`,
    createdAt: '2023-11-15'
  },
  {
    id: '6',
    brand: 'Mercedes-Benz',
    model: 'GLE Coupe',
    year: 2021,
    price: 78000,
    mileage: 31000,
    engine: '3.0L Diesel (350d)',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    location: 'Ліберець',
    lat: 50.7671,
    lng: 15.0562,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mercedes-AMG_GLE_53_Coupe_%28C167%29_IMG_3306.jpg/1200px-Mercedes-AMG_GLE_53_Coupe_%28C167%29_IMG_3306.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mercedes-AMG_GLE_53_Coupe_%28C167%29_IMG_3307.jpg/1200px-Mercedes-AMG_GLE_53_Coupe_%28C167%29_IMG_3307.jpg',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Елегантність та потужність в одному кузові. AMG пакет, салон з преміальної шкіри Nappa, акустика Burmester. Стан нового авто, без жодного підкрасу.`,
    createdAt: '2023-12-01'
  }
];
