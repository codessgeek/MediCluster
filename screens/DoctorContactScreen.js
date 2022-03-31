// core imports
import React from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native";

// import component
import UntitledComponent from "../components/NotesGenScreen/UntitledComponent";
import Additem from "../components/NotesGenScreen/Additem";

// import icon
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

// import globals

function Displaycontextscreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.searchbarStack}>
                <UntitledComponent style={styles.searchbar}></UntitledComponent>
                <Additem style={styles.additem}></Additem>
                <MaterialIconsIcon
                    name="group-add"
                    style={styles.icon10}
                ></MaterialIconsIcon>
            </View>
            <View style={styles.menudisplaycontentscreen}>
                <View style={styles.rect2}></View>
                <View style={styles.group19}>
                    <Text style={styles.name}>Name</Text>
                    <Text style={styles.contectNo}>contect no.</Text>
                    <Text style={styles.discription}>discription</Text>
                </View>
            </View>
            <View style={styles.scrollArea}>
                <ScrollView
                    contentContainerStyle={styles.scrollArea_contentContainerStyle}
                >
                    <View style={styles.doctorscontentdisplaycomponent}>
                        <View style={styles.button2Stack}>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("Doctorgenscreen")}
                                style={styles.button2}
                            >
                                <View style={styles.dicimg1}>
                                    <View style={styles.ellipse4Stack}>
                                        <View style={styles.ellipse4}>

                                        </View>
                                        <MaterialCommunityIconsIcon
                                            name="home-account"
                                            style={styles.icon13}
                                        ></MaterialCommunityIconsIcon>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <View style={styles.ellipse3Stack}>
                                    <View style={styles.ellipse3}>

                                    </View>
                                    <FeatherIcon
                                        name="paperclip"
                                        style={styles.icon11}
                                    ></FeatherIcon>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.rect3}>
                                <View style={styles.dicbinfo1}>
                                    <View style={styles.drBhatnagar3Stack}>
                                        <Text style={styles.drBhatnagar3}>dr. bhatnagar</Text>
                                        <Text style={styles.eyesSpecialist8}>Eyes specialist</Text>
                                    </View>
                                </View>
                                <View style={styles.doctorsmobilenumberdisplaycomponent}>
                                    <Text style={styles.eyesSpecialist9}>+91 99999 99999</Text>
                                    <Text style={styles.eyesSpecialist10}>+91 99999 99999</Text>
                                    <Text style={styles.eyesSpecialist11}>+91 99999 99999</Text>
                                    <FontAwesomeIcon
                                        name="chevron-circle-up"
                                        style={styles.icon12}
                                    ></FontAwesomeIcon>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchbar: {
        position: "absolute",
        top: 0,
        left: 0,
        height: 54,
        width: 342
    },
    additem: {
        position: "absolute",
        top: 0,
        left: 287,
        height: 54,
        width: 55
    },
    icon10: {
        top: 7,
        left: 294,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 40
    },
    searchbarStack: {
        width: 342,
        height: 54,
        marginTop: 113,
        marginLeft: 17
    },
    menudisplaycontentscreen: {
        width: 342,
        height: 24,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 12,
        alignSelf: "center"
    },
    rect2: {
        top: -3,
        left: 0,
        width: 342,
        height: 33,
        position: "absolute",
        backgroundColor: "#E6E6E6",
        borderRadius: 5
    },
    group19: {
        flexDirection: "row",
        width: 311,
        height: 24,
        justifyContent: "space-between"
    },
    name: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 20,
        textDecorationLine: "underline"
    },
    contectNo: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 20
    },
    discription: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 20
    },
    scrollArea: {
        width: 342,
        height: 539,
        backgroundColor: "rgba(230, 230, 230,1)",
        marginTop: 18,
        marginLeft: 17
    },
    scrollArea_contentContainerStyle: {
        height: 539,
        width: 342
    },
    doctorscontentdisplaycomponent: {
        width: 337,
        height: 115,
        marginTop: 14,
        marginLeft: 2
    },
    button2: {
        top: 7,
        width: 328,
        height: 108,
        position: "absolute",
        justifyContent: "space-between",
        backgroundColor: "rgba(165,165,165,1)",
        borderRadius: 10,
        left: 0
    },
    dicimg1: {
        width: 70,
        height: 70,
        marginTop: 5,
        marginLeft: 5
    },
    ellipse4: {
        top: 0,
        left: 0,
        width: 70,
        height: 70,
        position: "absolute"
    },
    icon13: {
        top: 2,
        left: 5,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 60
    },
    ellipse4Stack: {
        width: 70,
        height: 70
    },
    button: {
        top: 0,
        left: 309,
        width: 24,
        height: 24,
        position: "absolute"
    },
    ellipse3: {
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        position: "absolute"
    },
    icon11: {
        top: 3,
        left: 3,
        position: "absolute",
        color: "rgba(193,193,193,1)",
        fontSize: 18
    },
    ellipse3Stack: {
        width: 24,
        height: 24
    },
    rect3: {
        top: 7,
        left: 82,
        width: 255,
        height: 63,
        position: "absolute"
    },
    dicbinfo1: {
        width: 255,
        height: 44
    },
    drBhatnagar3: {
        top: 0,
        left: 0,
        position: "absolute",
        fontFamily: "roboto-slab-500",
        color: "#121212",
        height: 30,
        width: 243,
        fontSize: 24
    },
    eyesSpecialist8: {
        top: 26,
        left: 0,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 17,
        width: 255,
        fontSize: 16
    },
    drBhatnagar3Stack: {
        width: 255,
        height: 43
    },
    doctorsmobilenumberdisplaycomponent: {
        width: 122,
        height: 56,
        justifyContent: "space-between",
        marginTop: 3
    },
    eyesSpecialist9: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 17,
        width: 122
    },
    eyesSpecialist10: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 17,
        width: 122
    },
    eyesSpecialist11: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 17,
        width: 122
    },
    icon12: {
        top: 38,
        left: 127,
        position: "absolute",
        color: "rgba(86,86,86,1)",
        fontSize: 16
    },
    button2Stack: {
        width: 337,
        height: 115
    }
});

export default Displaycontextscreen;
