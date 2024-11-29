import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native';
import { PreferencesContext } from '../contexts/PreferencesContext';

const AVAILABLE_CATEGORIES = [
  'Bakery',
  'Restaurant',
  'Cafe',
  'Park',
  'Museum',
  'Shopping',
];

const PreferencesScreen = () => {
  const { preferences, savePreferences } = useContext(PreferencesContext);

  const toggleCategory = (category: string) => {
    const newPreferences = preferences.includes(category)
      ? preferences.filter((p) => p !== category)
      : [...preferences, category];
    savePreferences(newPreferences);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Select Your Interests</Text>
      {AVAILABLE_CATEGORIES.map((category) => (
        <View key={category} style={styles.preferenceItem}>
          <Text style={styles.categoryName}>{category}</Text>
          <Switch
            value={preferences.includes(category)}
            onValueChange={() => toggleCategory(category)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryName: {
    fontSize: 16,
  },
});

export default PreferencesScreen;