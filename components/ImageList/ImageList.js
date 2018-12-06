import React from 'react'
import { Text, ScrollView, Image, SafeAreaView } from 'react-native'


export default class ImageList extends React.Component{


  render(){
    const images = this.props.images
    console.log("images in ImageList: ", images)
    return(
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {images.map((imageSource, i) => <Image source={{uri: imageSource}} key={i} style={this.styles.image}/>)}
        </ScrollView>
    )
  }

  styles = {
    image: {
      height: 200,
      width: 220
    }
  }
}
