import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";


const CustomModels = ({isModalVisible,children}) => {
  return (
    <Modal isVisible={isModalVisible}>
{children}
    </Modal>
  )
}

export default CustomModels

const styles = StyleSheet.create({})