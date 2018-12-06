import React from 'react'
import { View, Text } from 'react-native'
import { Button, ThemeProvider } from 'react-native-elements'


const BasicButton = (props) => (
  <ThemeProvider>
    <Button title={props.title} onPress={() => props.getImages()}/>
  </ThemeProvider>
)


export default BasicButton
