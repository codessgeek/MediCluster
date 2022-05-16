import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Additem(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#000000"
  }
});

export default Additem;
