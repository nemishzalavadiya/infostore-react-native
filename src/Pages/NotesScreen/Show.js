import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import ToolBar from '../../Components/ToolBar'

export default function Show() {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar />
      <ToolBar name="Show" />
      <ScrollView style={styles.scrollViewStyle}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return <Text key={index}>My Home this containers Text</Text>
        })}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeView: { margin: 5 },
  scrollViewStyle: {},
})
