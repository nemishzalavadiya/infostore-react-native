import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { IAddProps } from 'src/interface'
import Textarea from 'react-native-textarea'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
        <TouchableOpacity onPress={addProps.saveData}>
        <Text style={styles.textButton}>Add Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  title: {
    width: '100%',
    borderColor: 'grey',
    fontSize: 20,
    borderWidth: 1,
    padding: 10,
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
    height: 60,
    borderColor: 'rgb(100,140,255)',
    backgroundColor: 'rgb(100,150,255)',
    borderRadius: 10,
    borderWidth: 1,
    shadowOffset: { width: 10 , height: 10 },
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
})
