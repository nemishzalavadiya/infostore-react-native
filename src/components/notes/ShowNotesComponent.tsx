import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native'
import { IShowProps } from 'src/interface'

export default function ShowNotes({ showProps }: IShowProps) {
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
          return (
            <View key={index} style={styles.myCard}>
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
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name='delete-circle'
                    size={30}
                    color='black'
                    // tslint:disable-next-line: jsx-no-lambda
                    onPress={() => showProps.removeNote(item.path)}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.note}>{item.note.trim()}</Text>
              </View>
            </View>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
    alignSelf: 'center',
    justifyContent: 'flex-end',
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
