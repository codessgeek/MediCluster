import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import ImageshelveComp from "../components/ImageContainerScreenComp/ImageshelveComp";
import globalStyles from "../assets/styles/globleStyles";
import GalComp from "../components/ImageContainerScreenComp/GalComp";

function GalaryFolderScreen(props) {
  return (
    <View style={globalStyles.container}>

        <View style={styles.gallaryHeader}>
        <View style={styles.albumsRow}>
            <View style={{flexDirection: "row"}}>
                 <Text style={styles.albums}>Albums</Text>
                  <Text style={styles.albums}>Gallary</Text>
            </View>
            <View>
                 <Icon name="plus-circle" style={styles.icon}></Icon>
            </View>
        </View>
      </View>
      <View style={globalStyles.scrollArea}>

        <ScrollView
          contentContainerStyle={[globalStyles.scrollArea_contentContainerStyle]}
        >
          <GalComp/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    scrollArea: {
        backgroundColor: "red"
    },

  photoAlbumCompomemt2: {
    width: 145,
    height: 191,
    marginLeft: 34
  },
  button2: {
    width: 145,
    height: 145,
    backgroundColor: "rgba(155,155,155,1)",
    borderRadius: 15
  },
  prescriptions3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 119,
    fontSize: 16,
    marginTop: 5,
    marginLeft: 13
  },
  
  gallaryHeader: {
    flexDirection: "row"
  },
  albums: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    margin: 10
  },
  gallary: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 14,
    marginTop: 13
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 50
  },
  albumsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center"
  }
});

export default GalaryFolderScreen;
