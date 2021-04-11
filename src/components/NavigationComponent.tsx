import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreen from '../containers/HomeScreen'
import ShowScreen from '../containers/ShowScreen'

const Drawer = createDrawerNavigator()

export default function NavigationComponent() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home' >
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Show' component={ShowScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}