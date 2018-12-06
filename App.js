import React, {Component} from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Button, Text } from 'native-base';
import Greeting from './components/Greeting/Greeting.js'
import PlaceholderImage from './components/Image/PlaceholderImage.js'
import ImageList from './components/ImageList/ImageList.js'

type Props = {};
export default class App extends Component<Props> {

  state = {
    images: [],
    imagesLoaded: false,
  }


  getImages = async() => {
    console.log("getImages")
    const response = await fetch('https://tori-collective-api.herokuapp.com/api/posts')
    const jsonResponse = await response.json()
    console.log("jsonResponse: ", jsonResponse)
    let resImages = []
    jsonResponse.forEach((post)=> resImages.push(post.img_url))
    this.setState({
      images: resImages,
      imagesLoaded: true
    })
  }

  render() {
    console.log("rendering state: ", this.state)
    return (
        <SafeAreaView style={{flex:1}}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.welcome}>Hello</Text>
              <Button primary onPress={() => this.getImages()}><Text>Get Images</Text></Button>
            </View>
            <View style={styles.placeholder}>
              {this.state.imagesLoaded ? <ImageList images={this.state.images}/> : <PlaceholderImage/>}
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
    alignItems: 'center',
  },
})
