import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'

import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MNumberComp from './MNumberComp';

import Color from "../../assets/color/Colors"
import Gstyle from "../../assets/styles/globleStyles";

const Doctorcontentcomp = (props) => {
    const { oindex, permitToOpen, item } = props

    useEffect(() => {
        return () => {

        }
    }, [oindex])


    return (
        <View style={styles.dcontentcomp}>
            <View style={styles.button2Stack}>
                <TouchableOpacity
                    onLongPress={() => console.log()}
                    style={styles.button2}>

                    <View style={styles.dicimg1}>
                        <MaterialCommunityIconsIcon
                            name="home-account"
                            style={styles.icon13}
                        ></MaterialCommunityIconsIcon>
                    </View>

                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.button}>
                    <View style={styles.ellipse3Stack}>
                        <View style={styles.ellipse3}>

                        </View>
                        <FeatherIcon
                            name="paperclip"
                            style={styles.icon11}
                        ></FeatherIcon>
                    </View>
                </TouchableOpacity> */}


                <View style={styles.doctorcontent} >
                    <TouchableWithoutFeedback onPress={() => {
                        permitToOpen(item.id)
                    }}>
                        <View style={styles.doctorsnamespacifications} >
                            <Text style={[Gstyle.boxtitle, { fontSize: 25, marginHorizontal: 1 }]}>{item.name}</Text>
                            <Text style={styles.eyesSpecialist8}>{item.spe}</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={[styles.contectlist, oindex != item.id && { display: 'none' }]}>
                        {item.contents.map((cnumber, index) => <MNumberComp Mnumber={cnumber} key={index} />)}
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    dcontentcomp: {
        padding: 5,
        backgroundColor: Color.secondary_bg,
        borderRadius: 5,
        flexDirection: 'column',
        marginVertical: 5
    },
    button2: {
        justifyContent: "space-between",
        borderRadius: 10,
    },
    dicimg1: {
        width: 70,
        height: 70,
        margin: 5,
        backgroundColor: Color.primary_iconbg,
        borderRadius: 50
    },

    icon13: {
        top: 2,
        left: 5,
        position: "absolute",
        color: Color.secondary_icon,
        fontSize: 60
    },
    button: {
        top: 0,
        left: 350,
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
    doctorcontent: {
        padding: 5,
        flexGrow: 1,
        backgroundColor: Color.secondary_bg
    },
    doctername: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 24
    },
    eyesSpecialist8: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 16
    },
    contectlist: {
        padding: 1,
        flexWrap: 'wrap',
        justifyContent: "space-between",
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
        color: Color.primary_icon,
        fontSize: 16
    },
    button2Stack: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Doctorcontentcomp