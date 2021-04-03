import React from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import { IAddProps } from 'src/interface'
import Textarea from 'react-native-textarea'

export default function AddNote({ addProps }: IAddProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder='Title'
        onChangeText={addProps.setTitle}
        value={addProps.title}
        textAlign='center'
      />
      <Textarea
        containerStyle={styles.textareaContainer}
        style={styles.textarea}
        underlineColorAndroid='transparent'
        placeholder='Type Something'
        placeholderTextColor={'#c7c7c7'}
        textAlignVertical='top'
        onChangeText={addProps.setNote}
        value={addProps.note}
      />
      <View style={styles.buttonContainer}>
        <Button
          color='rgb(100,150,255)'
          title='submit'
          onPress={addProps.saveData}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    borderColor: 'grey',
    fontSize: 20,
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  textareaContainer: {
    height: 480,
    backgroundColor: '#F5FCFF',
    marginTop: 10,
    borderWidth: 1,
    padding : 10,
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 480,
    fontSize: 18,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 10,
    width: '50%',
    borderColor: 'rgb(100,150,255)',
    borderWidth: 6,
    borderRadius: 10,
    shadowOffset: { width: 10 , height: 10 },
  },
})
