import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DateComp = ({ fineldate }) => {
    return (
        <View style={styles.full}>
            <View style={styles.line}></View>
            <View>
                <Text style={styles.date}>{fineldate}</Text>
            </View>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    full: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'green',
        borderRadius: 5,
    },

    date: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 1)',
        backgroundColor: 'rgba(0, 0, 0, .1)',
        borderRadius: 5,
        margin: 5,
        padding: 2
    }
})

export default DateComp