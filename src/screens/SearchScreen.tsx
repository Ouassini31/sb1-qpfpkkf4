import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          mode="outlined"
          placeholder="Entrez une adresse ou un lieu"
          outlineColor="#0d9488"
          activeOutlineColor="#0d9488"
          style={styles.input}
        />
        <Button 
          mode="contained"
          onPress={() => {}}
          buttonColor="#0d9488"
          style={styles.button}
        >
          Rechercher
        </Button>
      </View>

      <View style={styles.content}>
        <Text variant="bodyLarge" style={styles.message}>
          Version de démonstration - La recherche de places sera bientôt disponible
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  searchBox: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  message: {
    textAlign: 'center',
    color: '#6b7280',
  },
});