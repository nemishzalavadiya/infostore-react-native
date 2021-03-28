import React from 'react'
import {
  ScrollView,
  Switch,
  Text,
  ToastAndroid,
  View,
} from 'react-native'

import { sha256 } from 'react-native-sha256'
import { NOTES_FOLDER } from '../../helper/Constant'
import getAllNotes from '../../utilities/notes/getAllNotes'
import removeNote from '../../utilities/notes/removeNote'
import saveNote from '../../utilities/notes/SaveNote'
import AddNote from './AddNoteComponent'
import ShowNotes from './ShowNotesComponent'

export default function AddNoteForm() {
  const [title, setTitle] = React.useState(null)
  const [note, setNote] = React.useState(null)
  const [content, setContent] = React.useState([])
  const [add, setAdd] = React.useState(false)

  async function getNotes() {
    const notesContent = await getAllNotes()
    setContent(notesContent)
  }
  async function removeThisNote(path) {
    const status = await removeNote(path)
    if (status) {
      getNotes()
    }
  }

  React.useEffect(() => {
    getNotes()
  }, [])

  async function saveData() {
    if (note && title) {
      const formContent = JSON.stringify({ title, note })
      const fileName = await sha256(formContent)
      const status = await saveNote({
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
      <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}><Text style={{alignSelf: 'center'}}>Add Note: </Text><Switch onValueChange={setAdd} value={add} /></View>
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