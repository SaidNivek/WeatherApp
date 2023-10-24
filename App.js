import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import { useGetWeather } from './src/hooks/useGetWeather'

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log('fetch')
  if (weather) {
    console.log(weather)
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'teal'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})
export default App
