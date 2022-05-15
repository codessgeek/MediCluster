import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageshelveComp from './ImageshelveComp';

const data = {"ramesh":{lastImage:"abc.jpg",count:10},"mahesh":{lastImage:"abc.jpg",count:10},"suresh":{lastImage:"abc.jpg",count:10}};

const GalComp = () => {
  return (

    <View style={styles.photoAlbumComponentRow}>
      {Object.keys(data).map((folder)=> <ImageshelveComp folder={folder} lastImage={data[folder]["lastImage"]} count={data[folder]["count"]}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
    photoAlbumComponentRow: {
        height: 191,
        flexDirection: "row",
        flex: 1,
        marginTop: 24,
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
})

export default GalComp