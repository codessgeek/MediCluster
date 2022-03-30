import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Controlers = (prop) => {
    const { done, cancle, del } = prop;
    return (
        <View style={[styles.deleteCancelDoneComponent, !del && { justifyContent: 'flex-end' }]}>
            {del && (
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.delete}>Delete</Text>
                </TouchableOpacity>
            )}

            <View style={styles.donecanclewithsaperator}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
                <View style={styles.saperator}></View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.done}>Done</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    deleteCancelDoneComponent: {
        padding: 5,
        flexDirection: "row",
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    delete: {
        fontFamily: "roboto-700",
        color: "#121212",
        textAlign: "left",
        fontSize: 20,
        marginTop: 4
    },
    donecanclewithsaperator: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    cancel: {
        fontFamily: "roboto-700",
        color: "#121212",
        textAlign: "left",
        fontSize: 20,
        marginTop: 4
    },
    saperator: {
        backgroundColor: "rgba(46,46,46,1)",
        borderRadius: 15,
        marginLeft: 15,
        width: 1
    },
    done: {
        fontFamily: "roboto-700",
        color: "#121212",
        textAlign: "left",
        fontSize: 20,
        marginLeft: 13,
        marginTop: 4
    },
    button: {
        minWidth: 40,
        minHeight: 30,

    },
})

export default Controlers