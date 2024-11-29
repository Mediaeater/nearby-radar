import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MapPin, Settings } from 'lucide-react-native';
import { LocationProvider } from './src/contexts/LocationContext';
import { PreferencesProvider } from './src/contexts/PreferencesContext';
import NearbyPlaces from './src/screens/NearbyPlaces';
import PreferencesScreen from './src/screens/PreferencesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PreferencesProvider>
        <LocationProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen 
                name="Nearby" 
                component={NearbyPlaces}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MapPin color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen 
                name="Preferences" 
                component={PreferencesScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Settings color={color} size={size} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </LocationProvider>
      </PreferencesProvider>
    </SafeAreaProvider>
  );
}