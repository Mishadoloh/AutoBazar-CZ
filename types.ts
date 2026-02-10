
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  engine: string;
  transmission: 'Manual' | 'Automatic';
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  location: string;
  imageUrl: string;
  description: string;
  createdAt: string;
}

export interface FilterOptions {
  query: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  brand: string;
}

export type SortOption = 'newest' | 'price_asc' | 'price_desc' | 'mileage_asc';
