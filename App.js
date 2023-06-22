import React from 'react'
// StyleSheet is used so we can write CSS as an object to make our code more clean and not use inline styles (see below)
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    // SafeAreaView will move the Views into the space on the phone that is most viewable and not used by default phone UI elements, such as the status bar at the top of the phone, etc
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
      </View>
    </SafeAreaView>
  )
}

// We create a styles variable to pass into the View component above, by passing in the container object with all of our styles added into the View style attribute
// Flexbox - You don't need to use display: 'flex' on mobile, as it's not needed. However, flex: "num" will tell the compiler how much of the screen should be filled
// You can have multiple objects within the styles Component, which can then be passed to other pieces of the Class component, as needed
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center'
  },
  wrapper: {
    flex: 1
  }
})

export default App
