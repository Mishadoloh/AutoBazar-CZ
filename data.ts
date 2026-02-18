
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
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1493238792015-fa094a367259?auto=format&fit=crop&q=80&w=1000'
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
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000'
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
      'https://images.unsplash.com/photo-1594235372071-c50f8ee59f99?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000'
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
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000'
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
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000'
    ],
    description: `Елегантність та потужність в одному кузові. AMG пакет, салон з преміальної шкіри Nappa, акустика Burmester. Стан нового авто, без жодного підкрасу.`,
    createdAt: '2023-12-01'
  }
];
