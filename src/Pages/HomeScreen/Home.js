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
import AddNoteForm from '../../Components/AddNoteForm'


export default function Home() {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar />
      <ToolBar name="Home" />
      <ScrollView style={styles.scrollViewStyle}>
        <AddNoteForm />
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeView: { margin: 5 },
  scrollViewStyle: { margin: 10 },
})
