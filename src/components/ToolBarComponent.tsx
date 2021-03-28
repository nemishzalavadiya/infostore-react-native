import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { IToolBar } from 'src/interface'

export default function ToolBarComponent({ name }: IToolBar) {
  const navigation = useNavigation()

  const toggleNavigationDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }

  return (
    <View style={styles.TitleBar}>
      <View>
        <TouchableOpacity
          onPress={toggleNavigationDrawer}
          style={styles.IconPosition}
        >
          <Ionicons name='ios-reorder-three-sharp' size={35} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.Title}>
        <Text style={styles.TextStyle}>{name}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  TitleBar: {
    margin: 5,
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  Title: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: 20,
  },
  IconPosition: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
})
