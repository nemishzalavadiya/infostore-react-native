import { Permissions, Request } from 'expo-permissions'
import React from 'react'
import { View, Text } from 'react-native'
export default function GetDirectory() {
  async function get() {
    console.log('function called')
    try {
        const { status } = await Permissions.getAsync('READ_EXTERNAL_STORAGE');
        if (status !== 'granted') {
            await Permissions.askAsync(Permissions.READ_EXTERNAL_STORAGE);
            if (status === 'granted') {
                return true;
            } else {
                throw new Error('Location permission not granted');
            }
        }
      console.log(status)
    } catch (err) {
      console.log(err)
    }
  }
  get()
  return (
    <View>
      <Text>in get directory</Text>
    </View>
  )
}
