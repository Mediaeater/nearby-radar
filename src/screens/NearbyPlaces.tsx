import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { LocationContext } from '../contexts/LocationContext';
import { PreferencesContext } from '../contexts/PreferencesContext';
import { fetchNearbyPlaces, Place } from '../services/placesService';

const NearbyPlaces = () => {
  const { location } = useContext(LocationContext);
  const { preferences } = useContext(PreferencesContext);
  const [nearbyPlaces, setNearbyPlaces] = useState<Place[]>([]);

  useEffect(() => {
    if (location && preferences.length > 0) {
      const fetchPlaces = async () => {
        const places = await fetchNearbyPlaces(location, preferences);
        setNearbyPlaces(places);
      };
      fetchPlaces();
    }
  }, [location, preferences]);

  return (
    <View style={styles.container}>
      <FlatList
        data={nearbyPlaces}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.placeCard}>
            <Text style={styles.placeName}>{item.name}</Text>
            <Text style={styles.placeDistance}>{item.distance}m away</Text>
            <Text style={styles.placeCategory}>{item.category}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  placeCard: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeDistance: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  placeCategory: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default NearbyPlaces;