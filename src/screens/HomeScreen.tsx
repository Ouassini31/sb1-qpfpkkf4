import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-paper';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a' }}
        style={styles.background}
        imageStyle={{ opacity: 0.2 }}
      >
        <View style={styles.content}>
          <Text variant="headlineLarge" style={styles.title}>
            Trouvez votre place de parking
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            SwiftPark connecte les conducteurs qui libèrent une place avec ceux qui en cherchent une.
          </Text>
          
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Leave')}
              style={styles.button}
              buttonColor="#0d9488"
            >
              Je quitte une place
            </Button>
            
            <Button
              mode="outlined"
              onPress={() => navigation.navigate('Search')}
              style={styles.button}
              textColor="#0d9488"
            >
              Je cherche une place
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#111827',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  button: {
    width: '100%',
  },
});