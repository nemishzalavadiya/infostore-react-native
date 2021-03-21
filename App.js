import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './src/Pages/HomeScreen/Home'
import Show from './src/Pages/NotesScreen/Show'

let Stack = createDrawerNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Show" component={Show} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
