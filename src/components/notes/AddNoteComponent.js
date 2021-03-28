import React from 'react'
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  ToastAndroid,
  Button,
  Text,
} from 'react-native'

export default function AddNote(props) {
  return (
    <ScrollView>
      <View style={styles.noteConatiner}>
        <TextInput
          style={styles.noteTitle}
          placeholder="Title"
          onChangeText={props.setTitle}
          value={props.title}
          textAlign="center"
        />
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Type something"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            textAlignVertical="top"
            onChangeText={props.setNote}
            value={props.note}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.myButton}
          title="submit"
          onPress={() => props.saveData()}
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
    borderRadius:100
  },
  textAreaContainer: {
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    borderRadius:20,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
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
  myButton: {
    marginTop: 15,
    width: 50,
    color: 'green',
  },
})
