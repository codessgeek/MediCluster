import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Title = ({ title }) => {
    return (
        <View style={styles.iconRow}>
            <MaterialCommunityIconsIcon
                name="rhombus-split"
                style={styles.icon}
            ></MaterialCommunityIconsIcon>
            <Text style={styles.medicineDetails}>{title}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    iconRow: {
        flexDirection: "row",
    },
    icon: {
        color: "rgba(128,128,128,1)",
        fontSize: 22
    },
    medicineDetails: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 21,
        marginLeft: 15
    },
})

export default Title