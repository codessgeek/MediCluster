// core imports
import React from "react";
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";

// icons
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

//components
import TextField from "../components/AddDoctorscontentComp/TextField";
import Mobilenumbercom from "../components/AddDoctorscontentComp/Mobilenumbercom";
import Controlers from "../components/Controlers";

//styles
import Gstyles from "../assets/styles/globleStyles";
import Color from "../assets/color/Colors";

function Doctorgenscreen(props) {
    return (
        <View style={Gstyles.container}>
            <Controlers del />
            <View style={[Gstyles.scrollArea, { flex: 1 }]}>
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
                            <View style={styles.imagelocationbg}></View>
                            <View style={styles.uploadbtngroup}>
                                <TouchableOpacity style={styles.button}>
                                    <FeatherIcon
                                        name="upload"
                                        style={styles.shareanduploadicon}
                                    ></FeatherIcon>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.uploadbtngroup}>
                                <TouchableOpacity style={styles.button}>
                                    <EntypoIcon name="share" style={styles.shareanduploadicon}></EntypoIcon>
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
        backgroundColor: Color.primary_iconbg,
        borderRadius: 95,
    },
    homeplusicn: {
        color: Color.primary_icon,
        fontSize: 80
    },

    doctorsMobileNoComponent: {
        flex: 1,
    },

    imagelocationbg: {
        height: 30,
        backgroundColor: Color.bg_1,
        flexGrow: 1
    },
    uploadbtngroup: {
        minWidth: 30,
        height: 30,
        marginLeft: 5
    },
    button: {
        minWidth: 40,
        minHeight: 30,
        backgroundColor: Color.bg_1
    },
    shareanduploadicon: {
        color: Color.primary_icon,
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
