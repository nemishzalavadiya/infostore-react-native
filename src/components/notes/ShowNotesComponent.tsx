import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

export default function ShowNotes(props) {
  if (props.content?.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <FontAwesome5 name="sticky-note" size={24} color="black" />
        <Text>Add Some Notes</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {Array.isArray(props.content) &&
        props.content.map((item, index) => {
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
                    {item.title}
                  </Text>
                </View>
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name="delete-circle"
                    size={30}
                    color="black"
                    onPress={() => props.removeNote(item.path)}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.note}>{item.note}</Text>
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
  },
  icon: {
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
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 100,
    backgroundColor:'white'
  },
})
