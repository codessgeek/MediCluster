import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function GalaryImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.septemberYear}>
        <Text style={styles.monthName}>September</Text>
        <View style={styles.rect6Row}>
          <View style={styles.rect6}></View>
          <View style={styles.rect9}></View>
          <View style={styles.rect10}></View>
          <View style={styles.rect11}></View>
          <View style={styles.rect12}></View>
          <View style={styles.rect13}></View>
        </View>
        <View style={styles.rect14Row}>
          <View style={styles.rect14}></View>
          <View style={styles.rect15}></View>
          <View style={styles.rect16}></View>
          <View style={styles.rect17}></View>
          <View style={styles.rect18}></View>
        </View>
      </View>
      <View style={styles.group}>
        <Text style={styles.august}>August</Text>
        <View style={styles.rect19Row}>
          <View style={styles.rect19}></View>
          <View style={styles.rect20}></View>
          <View style={styles.rect21}></View>
          <View style={styles.rect22}></View>
          <View style={styles.rect23}></View>
          <View style={styles.rect24}></View>
        </View>
        <View style={styles.rect25Row}>
          <View style={styles.rect25}></View>
          <View style={styles.rect26}></View>
        </View>
      </View>
      <Text style={styles.year}>2019</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  septemberYear: {
    width: 324,
    height: 165,
    marginTop: 168,
    marginLeft: 18
  },
  monthName: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  },
  rect6: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)"
  },
  rect9: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect10: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect11: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect12: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 5
  },
  rect13: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 7,
    marginTop: 1
  },
  rect6Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 37
  },
  rect14: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)"
  },
  rect15: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect16: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect17: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect18: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect14Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 5,
    marginRight: 55
  },
  group: {
    width: 324,
    height: 165,
    marginTop: 40,
    marginLeft: 18
  },
  august: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20
  },
  rect19: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)"
  },
  rect20: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect21: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect22: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect23: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect24: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect19Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 37
  },
  rect25: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)"
  },
  rect26: {
    width: 49,
    height: 49,
    backgroundColor: "rgba(155,155,155,1)",
    marginLeft: 6
  },
  rect25Row: {
    height: 49,
    flexDirection: "row",
    marginTop: 6,
    marginRight: 220
  },
  year: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 38,
    width: 113,
    fontSize: 20,
    marginTop: -418,
    marginLeft: 18
  }
});

export default GalaryImageScreen;
