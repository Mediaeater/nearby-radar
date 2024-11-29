import { LocationObject } from 'expo-location';

export interface Place {
  id: string;
  name: string;
  category: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  distance?: number;
}

const MOCK_PLACES: Place[] = [
  {
    id: '1',
    name: "Joe's Bakery",
    category: 'Bakery',
    coordinates: { latitude: 40.7128, longitude: -74.0060 },
  },
  {
    id: '2',
    name: "Central Park",
    category: 'Park',
    coordinates: { latitude: 40.7829, longitude: -73.9654 },
  },
  {
    id: '3',
    name: "Metropolitan Museum",
    category: 'Museum',
    coordinates: { latitude: 40.7794, longitude: -73.9632 },
  },
  {
    id: '4',
    name: "Starbucks",
    category: 'Cafe',
    coordinates: { latitude: 40.7127, longitude: -74.0059 },
  },
];

export const fetchNearbyPlaces = async (location: LocationObject, preferences: string[]): Promise<Place[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return MOCK_PLACES
    .filter(place => preferences.includes(place.category))
    .map(place => ({
      ...place,
      distance: calculateDistance(
        location.coords,
        place.coordinates
      ),
    }))
    .filter(place => place.distance! <= 500)
    .sort((a, b) => (a.distance || 0) - (b.distance || 0));
};

const calculateDistance = (point1: { latitude: number; longitude: number }, point2: { latitude: number; longitude: number }): number => {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (point1.latitude * Math.PI) / 180;
  const φ2 = (point2.latitude * Math.PI) / 180;
  const Δφ = ((point2.latitude - point1.latitude) * Math.PI) / 180;
  const Δλ = ((point2.longitude - point1.longitude) * Math.PI) / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c);
};