import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ImageshelveComp = ({folder,lastImage, count}) => {
  return (
    
        <View style={styles.photoAlbumComponent}>
              <TouchableOpacity style={styles.button}></TouchableOpacity>
              <Text style={styles.loremIpsum}>{folder} ({count})</Text>
            </View>
    
  )
}

const styles = StyleSheet.create({
    photoAlbumComponent: {
        width: 145,
        height: 191,
        margin: 15
      },
    
    button: {
        width: 145,
        height: 145,
        backgroundColor: "rgba(155,155,155,1)",
        borderRadius: 15
      },
    
    loremIpsum: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 41,
        width: 134,
        fontSize: 16,
        marginTop: 5,
        marginLeft: 6
      }
})


export default ImageshelveComp