export type CarCategory = 'All' | 'Hatchbacks' | 'Sedans' | 'SUVs & MUVs' | 'Luxury & Adventure';

export interface Car {
  id: string;
  name: string;
  brand: string;
  category: 'Hatchbacks' | 'Sedans' | 'SUVs & MUVs' | 'Luxury & Adventure';
  subtitle: string;
  image: string;
  seats: number;
  transmission: 'Manual' | 'Automatic';
  fuel: 'Petrol' | 'Diesel' | 'CNG / Hybrid';
  mileage: string;
  dailyRate: number;
  hourlyRate: number;
  securityDeposit: number;
  features: string[];
  badge?: string;
  rating: number;
  reviewsCount: number;
  tripsCount: number;
  isPopular?: boolean;
  luggageCapacity: string;
  engine: string;
}

export type RentalDurationType = 'Hourly' | 'Daily' | 'Weekly' | 'Monthly';

export interface SearchState {
  durationType: RentalDurationType;
  pickupLocation: string;
  dropoffLocation: string;
  deliveryType: 'hub' | 'doorstep';
  doorstepAddress: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

export interface RoadTrip {
  id: string;
  title: string;
  tagline: string;
  distance: string;
  duration: string;
  terrain: string;
  image: string;
  description: string;
  recommendedCarId: string;
  recommendedCarName: string;
  routeHighlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  trip: string;
  carRented: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface HubLocation {
  id: string;
  name: string;
  tag: string;
  address: string;
  landmark: string;
  timing: string;
  phone: string;
  isAirport?: boolean;
  deliveryAvailable: boolean;
}
