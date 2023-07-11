import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = ({ iconName, iconColor, bodyText, bodyTextStyles }) => {
  return (
    <>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold'
  }
})

export default IconText
