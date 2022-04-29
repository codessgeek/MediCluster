import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";

const SchduleModeSetBox = ({ title, modeIcon, list, }) => {
    return (
        <View style={styles.morningtagselve}>


            <View style={styles.icon15Row}>
                {modeIcon}
                <Text style={styles.morning1}>{title}</Text>
            </View>


            <View style={styles.schduletimetag}>

                {list.map((item) => (
                    <View style={styles.rect6Stack} key={item.id}>
                        <Text style={styles.loremIpsum5}>{item.time}</Text>
                        <EntypoIcon
                            name="cross"
                            style={styles.icon14}
                        ></EntypoIcon>
                    </View>))}


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    morningtagselve: {
        padding: 5,
        backgroundColor: "rgba(178,178,178,1)",
        borderWidth: 0,
        borderColor: "#000000",
        borderRadius: 5,
        flexGrow: 1,
        margin: 5,
    },

    icon15Row: {
        flexDirection: "row",
        borderRadius: 5,
        backgroundColor: 'rgba(217,216,216,1)',
        alignSelf: 'center',
        width: 100,
    },
    icon15: {
        color: "rgba(128,128,128,1)",
        fontSize: 22,
        height: 22,
        width: 22,
        marginRight: 5
    },
    morning1: {
        fontFamily: "roboto-500",
        color: "#121212",
    },
    schduletimetag: {

        justifyContent: "space-between",
        justifyContent: 'center',
        padding: 5
    },

    rect6Stack: {
        backgroundColor: "rgba(206,206,206,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 2
    },

    loremIpsum5: {

        fontFamily: "roboto-700",
        color: "#121212",
        padding: 2
    },
    icon14: {
        color: "rgba(128,128,128,1)",
        fontSize: 20
    },

})

export default SchduleModeSetBox