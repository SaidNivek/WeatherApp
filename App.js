import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

export default function App() {
  return (
    // SafeAreaView will move the Views into the space on the phone that is most viewable and not used by default phone UI elements, such as the status bar at the top of the phone, etc
    <SafeAreaView>
      <View>
        <Text>
          Current Weather
        </Text>
      </View>
    </SafeAreaView>
  )
}