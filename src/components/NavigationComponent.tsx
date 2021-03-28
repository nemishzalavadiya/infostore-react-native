import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreen from '../containers/HomeScreen'
import ShowScreen from '../containers/ShowScreen'

const Stack = createDrawerNavigator()

export default function NavigationComponent() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Show' component={ShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}