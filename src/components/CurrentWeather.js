import React from 'react'
// StyleSheet is used so we can write CSS as an object to make our code more clean and not use inline styles (see below)
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
// The below icon comes from icons.expo.fyi - the icons are installed automatically when we start the native project with expo
import { Feather } from '@expo/vector-icons'

const CurrentWeather = () => {
  return (
    // SafeAreaView will move the Views into the space on the phone that is most viewable and not used by default phone UI elements, such as the status bar at the top of the phone, etc
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It&#39;s sunny</Text>
        <Text style={styles.message}>It&#39;s perfect t-shirt weather.</Text>
      </View>
    </SafeAreaView>
  )
}

// We create a styles variable to pass into the View component above, by passing in the container object with all of our styles added into the View style attribute
// Flexbox - You don't need to use display: 'flex' on mobile, as it's not needed. However, flex: "num" will tell the compiler how much of the screen should be filled
// You can have multiple objects within the styles Component, which can then be passed to other pieces of the Class component, as needed
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    // You don't specify values like px or rem, just the number in React Native, and they represent density independent pixels
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather
