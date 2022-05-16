import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

const Checkbox = ({ text }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (

        <View style={styles.deleteAllSchdulesCb}>
            <View style={styles.icon11Row}>
                <MaterialIconsIcon
                    name={isChecked ? "check-box" : "check-box-outline-blank"}
                    style={styles.icon11}
                    onPress={() => setIsChecked((pre) => !pre)}
                ></MaterialIconsIcon>
                <Text style={styles.deleteAllSchdules2}>
                    {text}
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    deleteAllSchdulesCb: {
        padding: 5,
        flexDirection: "row",
    },
    icon11Row: {
        flex: 1,
        height: 25,
        flexDirection: "row",
        //justifyContent: 'center'

    },
    icon11: {
        color: "rgba(128,128,128,1)",
        fontSize: 25
    },
    deleteAllSchdules2: {
        fontFamily: "roboto-regular",
        color: "#121212",

    },

})

export default Checkbox