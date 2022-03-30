import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import TextField from "../components/AddDoctorscontentComp/TextField";
import Mobilenumbercom from "../components/AddDoctorscontentComp/Mobilenumbercom";
import Gstyles from "../assets/styles/globleStyles";
import Controlers from "../components/Controlers";

function Doctorgenscreen(props) {
    return (
        <View style={Gstyles.container}>
            <Controlers del />
            <View style={Gstyles.scrollArea}>
                <ScrollView
                    contentContainerStyle={Gstyles.scrollArea_contentContainerStyle}>
                    <View style={styles.doctorsIcon}>
                        <View style={styles.icnbg}>
                            <MaterialCommunityIconsIcon
                                name="home-plus"
                                style={styles.homeplusicn}
                            ></MaterialCommunityIconsIcon>
                        </View>
                    </View>

                    <TextField title={'Name'} pholder={'dr. bhatnagar'} />
                    <TextField title={'Discription'} pholder={'Eyes specialist'} corr />

                    <View style={Gstyles.boxui}>
                        <Text style={Gstyles.boxtitle}>Mobile no:</Text>
                        <View style={styles.doctorsMobileNoComponent}>
                            <Mobilenumbercom last />
                            <Mobilenumbercom />
                        </View>
                    </View>

                    <View style={Gstyles.boxui}>
                        <Text style={Gstyles.boxtitle}>Greeting card:</Text>
                        <View style={styles.rect3Row}>
                            <View style={styles.rect3}></View>
                            <View style={styles.group}>
                                <TouchableOpacity style={styles.button}>
                                    <FeatherIcon
                                        name="upload"
                                        style={styles.icon3}
                                    ></FeatherIcon>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.group}>
                                <TouchableOpacity style={styles.button}>
                                    <EntypoIcon name="share" style={styles.icon3}></EntypoIcon>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    doctorsIcon: {
        height: 190,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icnbg: {
        height: 180,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        borderRadius: 95,
    },
    homeplusicn: {
        color: "rgba(128,128,128,1)",
        fontSize: 80
    },

    discription: {
        fontFamily: "roboto-700",
        color: "#121212",
        textAlign: "left",
        marginTop: 6,
        marginLeft: 11
    },

    doctorsMobileNoComponent: {
        flex: 1,
    },

    rect3: {
        height: 30,
        backgroundColor: "rgba(183,183,183,1)",
        flexGrow: 1
    },
    group: {
        minWidth: 30,
        height: 30,
        marginLeft: 5
    },
    button: {
        minWidth: 40,
        minHeight: 30,
        backgroundColor: "rgba(184,181,181,1)"
    },
    icon3: {
        color: "rgba(59,59,59,1)",
        fontSize: 25,
        height: 25,
        width: 25,
        marginTop: 2,
        marginLeft: 7
    },

    rect3Row: {
        height: 28,
        flexDirection: "row",
        marginTop: 6,
        marginHorizontal: 5
    },
});

export default Doctorgenscreen;
