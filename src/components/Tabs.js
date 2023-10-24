import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

// Initializing the Tab object so we can use it
const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'teal',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightgrey'
        },
        headerStyle: {
          backgroundColor: 'lightgrey'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'teal'
        }
      }}
    >
      <Tab.Screen
        name={'Current'}
        component={CurrentWeather}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'teal' : 'black'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={UpcomingWeather}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'teal' : 'black'}
            />
          )
        }}
      />
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'teal' : 'black'}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
