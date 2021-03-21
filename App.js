import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/Pages/HomeScreen/Home'
import Show from './src/Pages/NotesScreen/Show'

let Stack = createStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator mode="card">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Show" component={Show} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
