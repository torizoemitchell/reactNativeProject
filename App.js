import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native'
import Greeting from './components/Greeting/Greeting.js'
import BasicButton from './components/Button/BasicButton.js'
import PlaceholderImage from './components/Image/PlaceholderImage.js'

type Props = {};
export default class App extends Component<Props> {

  state = {
    imagesLoaded: false,
  }

  getImages = () => {
    console.log("getImages")
    
  }

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.welcome}>Hello</Text>
                <BasicButton
                  title='Get Images'
                  getImages={this.getImages}
                />
            </View>
            <View style={styles.placeholder}>
              <PlaceholderImage/>
            </View>
          </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  header: {
    height: 125,
    backgroundColor: '#f0ffb7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    textAlign: 'center',
    fontSize: 50,
  },
  placeholder: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
