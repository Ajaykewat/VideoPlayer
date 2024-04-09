import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackPlayer from '../screen/TrackPlayer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const StackRoot = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="TrackPlayer" component={TrackPlayer} />
      </Stack.Navigator>
  )
}

export default StackRoot

const styles = StyleSheet.create({})