import { FontAwesome5 } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { IShowProps, INoteModelProperties, INoteContent } from 'src/interface'
import NotesSettings from './NotesSettings'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ShowNotes({ showProps }: IShowProps) {
  const [isModelOpen, setModelOpen] = useState<boolean>(false)
  const [itemState, setItem] = useState<INoteContent>({
    title: '',
    note: '',
    path: '',
    date: '',
  })
  const noteModelProperties: INoteModelProperties = {
    isOpen: isModelOpen,
    setOpen: setModelOpen,
    item: itemState,
    removeNote: showProps.removeNote,
    setAdd: showProps.setAdd,
    setNote: showProps.setNote,
    setTitle: showProps.setTitle,
  }

  const onLongPress = (noteItem: INoteContent) => { setModelOpen(true); setItem(noteItem) }

  if (isModelOpen) {
    return <NotesSettings noteModel={noteModelProperties} />
  }

  if (showProps.content?.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <FontAwesome5 name='sticky-note' size={24} color='black' />
        <Text>Add Some Notes</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {Array.isArray(showProps.content) &&
        showProps.content.map((item, index) => {
          const dateObj = String(new Date(item.date))
          return (
            <TouchableOpacity key={index} onLongPress={() => onLongPress(item)} activeOpacity={0.8}>
              <View key={index} style={styles.myCard}>
                <View style={styles.titleDate}>
                  {item.date ? <Text>
                    {`${dateObj.split(' ')[1]} ${dateObj.split(' ')[2]},${dateObj.split(' ')[3]}`}
                  </Text> : null}
                </View>
                <View style={styles.titleContainer}>
                  <View style={styles.title}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}
                    >
                      {item.title.trim()}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.note}>{item.note.trim()}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height / 2,
  },
  titleContainer: {
    marginTop: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleDate: {
    position: 'absolute',
    left: 10,
    top: 5,
  },
  title: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginBottom: 20,
  },
  note: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
  },
  myCard: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
  },
})
