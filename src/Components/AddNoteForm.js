import React from 'react'
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  ToastAndroid,
  Button,
  Text,
  Switch,
} from 'react-native'

import saveNotes from '../Services/SaveNotes'
import { sha256 } from 'react-native-sha256'
import { NOTES_FOLDER } from '../Constant'
import getNotesFromNotes from '../Services/getNotesFromNotes'
import ShowNotes from './ShowNotes'
import removeNote from '../Services/removeNote'
import AddNote from './AddNote'

export default function AddNoteForm() {
  const [title, setTitle] = React.useState(null)
  const [note, setNote] = React.useState(null)
  const [content, setContent] = React.useState([])
  const [add, setAdd] = React.useState(false)

  async function getNotes() {
    let content = await getNotesFromNotes()
    setContent(content)
  }
  async function removeThisNote(path) {
    let status = await removeNote(path)
    if (status) {
      getNotes()
    }
  }

  React.useEffect(() => {
    getNotes()
  }, [])

  async function saveData() {
    if (note && title) {
      let formContent = JSON.stringify({ title: title, note: note })
      let fileName = await sha256(formContent)
      let status = await saveNotes({
        folder: NOTES_FOLDER,
        file: `${fileName}`,
        message: formContent,
      })
      if (status) {
        setTitle(null)
        setNote(null)
        getNotes()
        ToastAndroid.show('Successfully Added', ToastAndroid.LONG)
      } else {
        ToastAndroid.show('Something went wrong', ToastAndroid.LONG)
      }
    } else {
      ToastAndroid.show("Title or Note can't be empty", ToastAndroid.LONG)
    }
  }
  return (
    <ScrollView>
      <View style={{flex:1,flexDirection:'row',marginBottom:10}}><Text style={{alignSelf:'center'}}>Add Note: </Text><Switch onValueChange={setAdd} value={add} /></View>
      {add ? (
        <AddNote
          title={title}
          note={note}
          setTitle={setTitle}
          setNote={setNote}
          saveData={saveData}
        />
      ) : (
        <ShowNotes content={content} removeNote={removeThisNote} />
      )}
    </ScrollView>
  )
}