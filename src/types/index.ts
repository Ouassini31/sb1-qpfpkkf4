export interface User {
  id: string;
  email: string;
}

export interface ParkingSpot {
  id: string;
  location: {
    lat: number;
    lng: number;
  };
  price: number;
  departureTime: string;
  userId: string;
}

export interface Transaction {
  id: string;
  spotId: string;
  userId: string;
  amount: number;
  commission: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
}