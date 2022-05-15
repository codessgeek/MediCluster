import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableWithoutFeedback } from "react-native";
import Header from "../components/Header";


function HomeScreen1({ navigation, route }) {
  const [name, setname] = useState("hii");
  const [per, setper] = useState(10);
  const [ques, setques] = useState({
    que: "How was the day dear?",
    ans: ["Cool", "Good", "Okay"],
    value: false
  });
  return (<>
    <Header navigation={navigation} />
    <View style={styles.container}>

      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Text style={styles.helloUser}>Hello, {name}</Text>
          <View style={styles.dayMood}>
            <View style={styles.rect2}>
              <Text style={styles.howWasTheDay}> {ques.que} </Text>
              <View style={styles.rect3StackRow}>
                {(ques.ans).map(
                  (item, index) => {
                    return (
                      <View style={styles.rect3Stack || (ques.value && styles.row)} key={index}>
                        <Text style={styles.cool}> {item} </Text>
                      </View>
                    )
                  }
                )}

              </View>
            </View>
          </View>
          <View style={styles.quickRememb}>
            <Text style={styles.quickRememberance}>Quick Rememberance</Text>
            <View style={styles.rect6}>
              <View style={styles.howWasTheDay1Row}>
                <Text style={styles.howWasTheDay1}>
                  Today&#39;s Next Task is....
                </Text>
                <Text style={styles.loremIpsum}>{per}%</Text>
              </View>
              <View style={styles.rect7}>
                <Text style={styles.night}>Night</Text>
              </View>
              <View style={styles.rect8}>
                <Text style={styles.information}>Information</Text>
              </View>
            </View>
          </View>

          <View style={styles.quickRememb}>
            <Text style={styles.quickRememberance}>Shortcuts</Text>
            <View style={{ flexDirection: "row", width: '100%' }}>
              <TouchableWithoutFeedback style={{ flexGrow: 1 }} onPress={() => { navigation.navigate('Docter') }}>
                <View style={{ flexGrow: 1, margin: 2, padding: 10, backgroundColor: 'red' }}>
                  <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>Docotor contect</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback style={{ flexGrow: 1 }} onPress={() => { navigation.navigate("User") }}>
                <View style={{ flexGrow: 1, margin: 2, padding: 10, backgroundColor: 'blue' }}>
                  <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>add new user</Text>
                </View>
              </TouchableWithoutFeedback>

            </View>
          </View>

        </ScrollView>
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  scrollArea: {
    //backgroundColor: "rgba(230, 230, 230,1)",
    padding: 5,
    // alignItems: "center"
  },
  scrollArea_contentContainerStyle: {
    flexGrow: 1
  },
  helloUser: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 43,
    width: 190,
    fontSize: 19,
    marginTop: 29
  },
  dayMood: {
    padding: 10,
  },
  rect2: {
    backgroundColor: "rgba(155,155,1,1)",
    borderRadius: 15,
    padding: 10
  },
  howWasTheDay: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 213,
    fontSize: 17,
    marginTop: 16,
    marginLeft: 9
  },
  rect3: {
    top: 0,
    left: 0,
    width: 86,
    height: 23,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  cool: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 15
  },
  rect3Stack: {
    padding: 3,
    margin: 1,
    backgroundColor: "white",
  },
  rect4: {
    width: 86,
    height: 23,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  good: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18
  },
  rect4Stack: {
    width: 86,
    height: 25,
    marginLeft: 20
  },
  rect5: {
    top: 0,
    left: 0,
    width: 86,
    height: 23,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  okay2: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18
  },
  rect5Stack: {
    width: 86,
    height: 25,
    marginLeft: 21
  },
  rect3StackRow: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  quickRememb: {
    padding: 10
  },
  quickRememberance: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 43,
    width: 190,
    fontSize: 19
  },
  rect6: {
    backgroundColor: "rgba(155,155,155,1)",
    borderRadius: 15,
    padding: 5
  },
  howWasTheDay1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 213,
    fontSize: 17
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    fontSize: 17,
    marginLeft: 38
  },
  howWasTheDay1Row: {
    height: 33,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10
  },
  rect7: {
    width: 80,
    backgroundColor: "#E6E6E6",
    marginTop: 1,
    marginLeft: 16,
    alignContent: "center"
  },
  night: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 22,
    marginTop: 3,
    marginLeft: 10
  },
  rect8: {
    width: 283,
    height: 76,
    backgroundColor: "#E6E6E6",
    marginTop: 13,
    marginLeft: 16
  },
  information: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 76,
    width: 267,
    fontSize: 25,
    marginLeft: 16
  }
});

export default HomeScreen1;
