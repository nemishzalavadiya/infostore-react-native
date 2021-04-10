import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'
import { IRightBarContainer } from 'src/interface'
import Modal from 'react-native-modal'
const TopSettingComponent = ({ rightBar }: IRightBarContainer) => {
  return <View >
    <Modal isVisible={rightBar.isShow} backdropOpacity={0.0}>
      <View style={styles.TopContainer}>
        <View>
          <Text>Hello World!</Text>
          <View>
            <TouchableOpacity
              onPress={() => {
                rightBar.setShow(!rightBar.isShow)
              }}
              style={styles.close}
            >
              <Text style={{color: 'blue', textDecorationLine: 'underline', fontSize: 15}}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  </View>
}

const styles = StyleSheet.create({
  TopContainer: {
    width: (Dimensions.get('window').width - 100),
    backgroundColor: 'white',
    position: 'absolute',
    top: 40,
    right: 0,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 100,
  },
  close: {
    position: 'relative',
    bottom: 10,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderColor: 'blue',
  },
})

export default TopSettingComponent