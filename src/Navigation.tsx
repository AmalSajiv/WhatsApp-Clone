import { StyleSheet } from 'react-native'
import React from 'react'
import Call from './screens/Call'
import Status from './screens/Status'
import Community from './screens/Community'
import Chat from './screens/Chat'

import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName='Chat'
        screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarIndicatorStyle: {
                backgroundColor: 'white'
            },
            tabBarLabelStyle: {
                fontWeight: 'bold'
            },
            tabBarStyle: {
                backgroundColor: '#0e806a'
            }
        }}
     >
        <Tab.Screen name='Community' component={Community}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name='account-group' size={24} color={color} />
                ),
                tabBarLabelStyle: styles.tabBarLabel
            }}
         />
        <Tab.Screen name='Chat' component={Chat} />
        <Tab.Screen name='Status' component={Status} />
        <Tab.Screen name='Call' component={Call} />
    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({
    tabBarLabel: {
        display: 'none',
    },
  });