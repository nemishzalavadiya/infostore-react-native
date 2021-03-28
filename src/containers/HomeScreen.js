import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import ToolBarComponent from '../components/ToolBarComponent'
import AddNoteForm from '../components/notes/NotesComponent'


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar />
      <ToolBarComponent name="Home" />
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
