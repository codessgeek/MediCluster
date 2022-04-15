import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const InputComp = ({ bool, title, other, holder }) => {
    if (other) bool = true
    else other = []
    if (!holder) holder = ""
    return (
        <View style={[styles.container, bool && { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }]}>
            <Text style={styles.iftitle}>{title}:</Text>
            <TextInput
                placeholder={holder}
                placeholderTextColor="rgba(114,113,113,1)"
                style={[styles.ifbox, bool && { marginLeft: 5 }]}
            ></TextInput>
            {other.map((item) => item)}
        </View>
    )
}

export const DropdownList = ({ bool, title, other, holder }) => {
    if (other) bool = true
    else other = []
    if (!holder) holder = ""
    return (
        <View style={[styles.container, bool && { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }]}>
            <Text style={styles.iftitle}>{title}:</Text>
            <TextInput
                placeholder={holder}
                placeholderTextColor="rgba(114,113,113,1)"
                style={[styles.ifbox, bool && { marginLeft: 5 }]}
            ></TextInput>
            {other.map((item) => item)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 2,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    iftitle: {
        fontFamily: "roboto-700",
        color: "#121212",
        textAlign: "left",
        fontSize: 16,
        alignContent: 'center'
    },
    ifbox: {
        fontFamily: "roboto-regular",
        color: "#121212",
        flexGrow: 1,
        backgroundColor: 'pink',
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.05)",
        fontSize: 15,
        paddingHorizontal: 5,
        paddingVertical: 0
    },

})

export default InputComp