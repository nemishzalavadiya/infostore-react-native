import React from 'react'
import {
  Switch,
  Text,
  ToastAndroid,
  View,
} from 'react-native'

import { IAddNoteProps, INoteContent, IShowNoteProps } from 'src/interface'
import getAllNotes from '../../utilities/notes/getAllNotes'
import removeNote from '../../utilities/notes/removeNote'
import saveNote from '../../utilities/notes/saveNote'
import AddNote from './AddNoteComponent'
import ShowNotes from './ShowNotesComponent'

export default function AddNoteForm() {
  const [title, setTitle] = React.useState<string>('')
  const [note, setNote] = React.useState<string>('')
  const [content, setContent] = React.useState<INoteContent[]>([])
  const [add, setAdd] = React.useState<boolean>(false)

  async function getNotes() {
    const notesContent: INoteContent[] = await getAllNotes()
    setContent(notesContent)
  }
  async function removeThisNote(path: string) {
    const status = await removeNote(path)
    if (status) {
      getNotes()
    }
  }
  const noteProps: IAddNoteProps = {
    title,
    note,
    setTitle,
    setNote,
    saveData,
  }
  const showProps: IShowNoteProps = {
    content,
    removeNote: removeThisNote,
    setTitle,
    setNote,
    setAdd,
  }
  React.useEffect(() => {
    getNotes()
  }, [])

  async function saveData() {
    if (note && title) {
      const noteData: IAddNoteProps = {
        note,
        title,
      }
      const status = await saveNote(noteData)
      if (status) {
        setTitle('')
        setNote('')
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
    <View>
      <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, marginLeft: 5 }}><Text style={{ alignSelf: 'center' }}>Add Note: </Text><Switch onValueChange={setAdd} value={add} /></View>
      {add ? (
        <AddNote
          addProps={noteProps}
        />
      ) : (
        <ShowNotes showProps={showProps} />
      )}
    </View>
  )
}