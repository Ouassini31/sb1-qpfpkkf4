import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export const LeaveScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineSmall" style={styles.title}>
          Signalez votre départ
        </Text>

        <TextInput
          mode="outlined"
          label="Heure de départ estimée"
          placeholder="Sélectionnez l'heure"
          outlineColor="#0d9488"
          activeOutlineColor="#0d9488"
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Prix demandé (€)"
          placeholder="0.00"
          keyboardType="decimal-pad"
          outlineColor="#0d9488"
          activeOutlineColor="#0d9488"
          style={styles.input}
        />

        <Text variant="bodySmall" style={styles.hint}>
          Commission SwiftPark de 25% sur le prix final
        </Text>

        <Button
          mode="contained"
          onPress={() => alert('Place enregistrée (Version démo)')}
          buttonColor="#0d9488"
          style={styles.button}
        >
          Confirmer mon départ
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    padding: 16,
  },
  title: {
    marginBottom: 24,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'white',
  },
  hint: {
    color: '#6b7280',
    marginBottom: 24,
  },
  button: {
    marginTop: 8,
  },
});