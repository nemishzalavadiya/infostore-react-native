import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import AddNoteForm from '../components/notes/NotesComponent'
import ToolBarComponent from '../components/ToolBarComponent'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar />
      <ToolBarComponent name='Home' />
      <ScrollView style={styles.scrollViewStyle}>
        <AddNoteForm />
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeView: { marginTop: 5, marginBottom: 5 },
  scrollViewStyle: { marginTop: 10, marginBottom: 10 },
})
