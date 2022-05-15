import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const data = { "January": ["abc.jpg", "abc.jpg", "abc.jpg", "abc.jpg", "abc.jpg"], "February": ["abc.jpg", "abc.jpg", "abc.jpg"] }

const AlbumComp = () => {
  const RenderImage = (imgarr) => imgarr.map((img, ind) => <View style={styles.rect19} key={ind}></View>)

  return (

    <View>
      {Object.keys(data).map((month, ind) => {
        return (
          <View style={styles.group} key={ind}>
            <Text style={styles.august}>{month}</Text>
            <View style={styles.rect19Row}>
              {RenderImage(data[month])}
            </View>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  group: {
    marginVertical: 10
  },
  august: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  },
  rect19Row: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  rect19: {
    width: 73,
    height: 73,
    backgroundColor: "rgba(155,155,155,1)",
    margin: 2
  }
})
export default AlbumComp