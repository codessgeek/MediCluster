import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function UntitledComponent(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Icon name="search" style={styles.icon}></Icon>
        </View>
        <TextInput
          placeholder="search here"
          style={styles.searchHere}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rect: {
    top: 0,
    width: 279,
    height: 54,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000",
    left: 0
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 38,
    marginTop: 7,
    marginLeft: 227
  },
  searchHere: {
    top: 0,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 54,
    width: 277
  },
  rectStack: {
    width: 293,
    height: 54
  }
});

export default UntitledComponent;
