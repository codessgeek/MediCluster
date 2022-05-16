// core imports
import React from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'

// icon imports
import EntypoIcon from "react-native-vector-icons/Entypo";

// style imports
import Color from '../../assets/color/Colors';

const Mobilenumbercom = ({ last }) => {
    return (
        <View style={styles.mobileWithIconRow}>
            <TextInput
                placeholder=""
                placeholderTextColor='white'
                style={styles.IFformobilenumber}
                keyboardType={'phone-pad'}
                dataDetectorTypes="phoneNumber"
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
        color: Color.secondary_icon,
        fontSize: 35,
        marginLeft: 5
    },
    IFformobilenumber: {
        fontFamily: "roboto-regular",
        color: Color.primary_icon,
        height: 36,
        borderWidth: 1,
        borderColor: Color.secondary_border,
        borderRadius: 5,
        marginTop: 1,
        flexGrow: 1
    },
})

export default Mobilenumbercom