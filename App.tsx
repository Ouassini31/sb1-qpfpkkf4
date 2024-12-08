import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { HomeScreen } from './src/screens/HomeScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { LeaveScreen } from './src/screens/LeaveScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0d9488',
            },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'SwiftPark' }}
          />
          <Stack.Screen 
            name="Search" 
            component={SearchScreen}
            options={{ title: 'Rechercher une place' }}
          />
          <Stack.Screen 
            name="Leave" 
            component={LeaveScreen}
            options={{ title: 'Libérer une place' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}