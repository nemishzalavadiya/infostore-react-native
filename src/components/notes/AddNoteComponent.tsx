import React from 'react'
import {
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import { IAddProps } from 'src/interface'

export default function AddNote({ addProps }: IAddProps) {
  return (
    <ScrollView>
      <View style={styles.noteConatiner}>
        <TextInput
          style={styles.noteTitle}
          placeholder='Title'
          onChangeText={addProps.setTitle}
          value={addProps.title}
          textAlign='center'
        />
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid='transparent'
            placeholder='Type something'
            placeholderTextColor='grey'
            numberOfLines={10}
            multiline={true}
            textAlignVertical='top'
            onChangeText={addProps.setNote}
            value={addProps.note}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='submit'
          onPress={addProps.saveData}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  noteConatiner: {
    height: 400,
  },
  noteTitle: {
    borderColor: 'grey',
    fontSize: 20,
    borderWidth: 1,
    padding: 5,
    borderRadius: 100,
  },
  textAreaContainer: {
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textArea: {
    height: '100%',
    lineHeight: 15,
    fontSize: 20,
    margin: 10,
  },
  buttonContainer: {
    marginTop: 100,
  },
})
