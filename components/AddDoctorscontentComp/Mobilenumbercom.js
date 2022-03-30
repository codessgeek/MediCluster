import React from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import EntypoIcon from "react-native-vector-icons/Entypo";

const Mobilenumbercom = ({ last }) => {
    return (
        <View style={styles.mobileWithIconRow}>
            <TextInput
                placeholder=""
                placeholderTextColor="rgba(114,113,113,1)"
                style={styles.IFformobilenumber}
            ></TextInput>
            <TouchableOpacity style={styles.button}>
                <EntypoIcon
                    name={last ? "circle-with-minus" : "circle-with-plus"}
                    style={styles.icon}
                ></EntypoIcon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mobileWithIconRow: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 5,
        marginVertical: 2,
    },
    icon: {
        color: "rgba(34,34,34,1)",
        fontSize: 35,
        marginLeft: 5
    },
    IFformobilenumber: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 36,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
        borderRadius: 5,
        marginTop: 1,
        flexGrow: 1
    },
})

export default Mobilenumbercom