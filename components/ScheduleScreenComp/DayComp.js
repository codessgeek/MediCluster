import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const DayComp = (props) => {
    const { Day } = props

    return (
        <View style={styles.dayrotater}>
            <View style={styles.drbg}>
                <Text style={styles.dayInWeek}>{Day[0]}</Text>
                <Text style={styles.date}>{Day[1]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dayrotater: {
        minWidth: 40,
        height: 45
    },
    drbg: {
        padding: 2,
        backgroundColor: "rgba(132,131,131,1)",
        borderRadius: 5
    },
    dayInWeek: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 20,
        textAlign: "center",
    },
    date: {
        fontFamily: "roboto-regular",
        color: "#121212",
        textAlign: "center",
    },
})

export default DayComp