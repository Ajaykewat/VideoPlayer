import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRoot from './StackRoot';

const MainRoot = () => {
  return (
    <NavigationContainer>
        <StackRoot/>
    </NavigationContainer>
  )
}

export default MainRoot

const styles = StyleSheet.create({})