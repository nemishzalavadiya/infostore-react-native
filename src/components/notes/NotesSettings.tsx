import React, { useState } from 'react'
import { View, ScrollView, Text, Button, StyleSheet, TouchableOpacity, CheckBox } from 'react-native'
import { INoteModel } from 'src/interface'
import Modal from 'react-native-modal'

const NotesSettings = ({ noteModel }: INoteModel) => {
  const [isSelected, setSelection] = useState(false)
  const close = () => { noteModel.setOpen(false) }
  const edit = () => { alert('Clicked..') }
  const deleteNote = () => { alert('Clicked..') }
  return <View>
    <Modal isVisible={noteModel.isOpen}>
      <ScrollView style={{ margin: 20 }}>
        <TouchableOpacity style={styles.listTile} onPress={edit} ><Text style={{ color: 'white' }}>Edit</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.listTile, styles.background]} onPress={deleteNote} >
          <View style={styles.delete}>
            <Text style={{ color: 'white' }}>Delete</Text>
            <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
            />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Button onPress={close} title={'Close'} />
    </Modal>
  </View>
}

const styles = StyleSheet.create({
  listTile: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
  },
  background: {
    backgroundColor: 'red',
  },
  delete: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    position: 'absolute',
    right: 10,
  },
})

export default NotesSettings