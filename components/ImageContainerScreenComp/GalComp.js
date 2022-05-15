import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageshelveComp from './ImageshelveComp';

const GalComp = () => {
  return (
    <View style={styles.photoAlbumComponentRow}>
            <ImageshelveComp/>
            <ImageshelveComp/>
            <ImageshelveComp/>
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