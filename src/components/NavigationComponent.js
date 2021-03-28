import HomeScreen from '../containers/HomeScreen'
import ShowScreen from '../containers/ShowScreen'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

let Stack = createDrawerNavigator()

export default function NavigationComponent() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Show" component={ShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}