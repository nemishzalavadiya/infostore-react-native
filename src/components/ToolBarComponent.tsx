import { Ionicons, Feather } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { IRightBar, IToolBar } from 'src/interface'
import TopSettingComponent from './TopSettingComponent'

export default function ToolBarComponent({ name }: IToolBar) {
  const [isRightModel, setRightModel] = useState<boolean>(false)
  const navigation = useNavigation()

  const toggleNavigationDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }
  const rightSideBar: IRightBar = {
    isShow: isRightModel,
    setShow: setRightModel,
  }
  return (
    <View>
      <TopSettingComponent rightBar={rightSideBar} />
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
        <View style={styles.rightTop}>
          <TouchableOpacity
            onPress={() => { setRightModel(!isRightModel)}}
          >
            <Feather name='more-vertical' size={24} color='black' />
          </TouchableOpacity>
        </View>
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
  rightTop: {
    alignSelf: 'center',
    marginRight: 10,
  }
})
