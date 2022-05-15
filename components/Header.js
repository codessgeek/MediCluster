import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Header = ({ navigation }) => {
    return (
        <View style={styles.headerBox}>
            <View style={styles.headerRow}>
                <View><Text>a</Text></View>
                <View><Text style={styles.headertext}>header</Text></View>
                <View><Text>b</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        padding: 10
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headertext: {
        color: 'black',
        fontWeight: '600',
        fontSize: 24
    }
})

export default Header