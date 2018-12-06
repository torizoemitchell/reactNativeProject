import React from 'react'
import { Text, ScrollView } from 'react-native'


export default class ImageList extends React.Component{


  render(){
    const images = this.props.images
    console.log("images in ImageList: ", images)
    return(
      <ScrollView>
        {images.map((imageSource) => <Image source={imageSource}/>)}
      </ScrollView>
          
    )
  }
}
