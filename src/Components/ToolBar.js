import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

export default function ToolBar(props) {
  const navigation = useNavigation()
  return (
    <View style={styles.TitleBar}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.IconPosition}
        >
          <MaterialCommunityIcons name="hamburger" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.Title}>
        <Text style={styles.TextStyle}>{props.name}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  TitleBar: {
    margin: 5,
    flexDirection:'row',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation:5,
  },
  Title:{
    flex:1,
    alignSelf:'center',
    alignItems:'center',
  },
  TextStyle:{
    fontSize:20,
  },
  IconPosition:{
      marginLeft:10,
      flex:1,
      justifyContent:'center',
  }
})
