import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const AlbumComp = () => {
  return (
    
    <View style={styles.group}>
        <Text style={styles.august}>August</Text>
        <View style={styles.rect19Row}>
          <View style={styles.rect19}></View>
          <View style={styles.rect19}></View>
          <View style={styles.rect19}></View>
          <View style={styles.rect19}></View>
          <View style={styles.rect19}></View>
          <View style={styles.rect19}></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    group: {

    },
    august: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 20
    },
    rect19Row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    rect19: {
        width: 73,
        height: 73,
        backgroundColor: "rgba(155,155,155,1)",
        margin:2
    }
})
export default AlbumComp