import React from 'react'
import {
  ScrollView,
  Switch,
  Text,
  ToastAndroid,
  View,
} from 'react-native'

import { sha256 } from 'react-native-sha256'
import { IAddNoteProps, INoteContent, ISaveNoteProps, IShowNoteProps } from 'src/interface'
import { NOTES_FOLDER } from '../../helper/Constant'
import getAllNotes from '../../utilities/notes/getAllNotes'
import removeNote from '../../utilities/notes/removeNote'
import saveNote from '../../utilities/notes/SaveNote'
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
  }
  React.useEffect(() => {
    getNotes()
  }, [])

  async function saveData() {
    if (note && title) {
      const formContent = JSON.stringify({ title, note })
      const fileName = await sha256(formContent)

      const saveProps: ISaveNoteProps = {
        folder: NOTES_FOLDER,
        file: `${fileName}`,
        message: formContent,
      }

      const status = await saveNote({ saveProps })
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
      <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}><Text style={{ alignSelf: 'center' }}>Add Note: </Text><Switch onValueChange={setAdd} value={add} /></View>
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