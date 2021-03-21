import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native';

const array = [1,2,3,4,5,6,7,8,9,10];

export default function Home() {
  console.log('in to Home component')
  return (
    <View>
      <ScrollView>
        {
          [...array,...array,...array,...array,...array,...array].map((item,index)=>{
            return <Text key={index}>My Home this containers Text</Text>
          })
        }
        <Button title="go to show notes" color="blue"></Button>
      </ScrollView>
    </View>
  )
}
