import React, { Component, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Gstyle from '../assets/styles/globleStyles'
import Title from "../components/MedicineGenScreenComp/Title";
import InputComp from "../components/MedicineGenScreenComp/InputComp";
import SchduleModeSetBox from "../components/MedicineGenScreenComp/SchduleModeSetBox";
import Controlers from "../components/Controlers"
import Header from "../components/Header/Header";


const data = [
    { id: 1, time: '08:00 AM' },
    { id: 2, time: '08:00 AM' },
    { id: 3, time: '08:00 AM' },
    { id: 4, time: '08:00 AM' },
    { id: 5, time: '08:00 AM' },
    { id: 6, time: '08:00 AM' }
]

function SchduleGenScreen({ navigation }) {

    return (
        <>
            <Header title={"Add medicine"} back navigation={navigation} />
            <View style={Gstyle.container}>
                <Controlers ctrls={[, 'Cancel', 'Done']} Mfun={() => navigation.goBack()} />
                <View style={Gstyle.scrollArea}>
                    <ScrollView
                        contentContainerStyle={Gstyle.scrollArea_contentContainerStyle}
                    >
                        <View style={styles.group29}>
                            <View style={styles.detailsbox}>
                                <Title title="Medicine details" />
                                <View style={styles.innerInputComp}>
                                    <InputComp title='Medicine name' bool={false} holder="xyz 1mg" />
                                </View>
                            </View>
                            <View style={styles.detailsbox}>
                                <Title title="Pattern" />
                                <View style={styles.innerInputComp}>
                                    <InputComp title='Days' bool={true} number />
                                    <InputComp title='I need to take medicine' bool={false} holder="every day" />
                                </View>
                            </View>
                            <View style={styles.detailsbox}>
                                <Title title="Timings" />
                                <View style={styles.innerInputComp}>
                                    <InputComp title="Starting from" bool={true} />
                                    <InputComp title="Time" other={[<MaterialCommunityIconsIcon
                                        name="currency-eth"
                                        style={styles.displaydroppdown}
                                        key="StartingFrom"
                                    ></MaterialCommunityIconsIcon>,
                                    <IoniconsIcon
                                        name="md-add-circle-outline"
                                        style={styles.icon6}
                                        key="Time"
                                    ></IoniconsIcon>]} />
                                    <View style={styles.timedifselve}>
                                        <View style={styles.morningtimeRow}>
                                            <SchduleModeSetBox title="Morning" list={data}
                                                modeIcon={<FeatherIcon
                                                    name="sun"
                                                    style={styles.icon15}
                                                ></FeatherIcon>}
                                            />
                                            <SchduleModeSetBox title="AfterNoone" list={data}
                                                modeIcon={<FeatherIcon
                                                    name="sun"
                                                    style={styles.icon15}
                                                ></FeatherIcon>}
                                            />
                                        </View>
                                        <View style={styles.morningtimeRow}>
                                            <SchduleModeSetBox title="Morning" list={data}
                                                modeIcon={<FeatherIcon
                                                    name="sun"
                                                    style={styles.icon15}
                                                ></FeatherIcon>}
                                            />
                                            <SchduleModeSetBox title="AfterNoone" list={data}
                                                modeIcon={<FeatherIcon
                                                    name="sun"
                                                    style={styles.icon15}
                                                ></FeatherIcon>}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    innerInputComp: {
        padding: 10,
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 15,
    },
    detailsbox: {
        margin: 5
    },
    pattern: {
        fontFamily: "roboto-700",
        color: "#121212",
        height: 28,
        width: 269,
        fontSize: 21,
        marginLeft: 17
    },
    displaydroppdown: {
        color: "rgba(58,58,58,1)",
        fontSize: 25,
        marginLeft: 1
    },
    icon6: {
        color: "rgba(58,58,58,1)",
        fontSize: 25
    },
    icon15: {
        color: "rgba(128,128,128,1)",
        fontSize: 22,
        height: 22,
        width: 22
    },
    morningtimeRow: {
        flexDirection: "row",
        justifyContent: 'space-around',
    },

});

export default SchduleGenScreen;
