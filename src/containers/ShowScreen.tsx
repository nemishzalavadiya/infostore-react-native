import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native'
import ToolBarComponent from '../components/ToolBarComponent'

export default function Show() {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar />
      <ToolBarComponent name='Show' />
      <ScrollView style={styles.scrollViewStyle}>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeView: { margin: 5 },
  scrollViewStyle: { margin: 10 },
})
