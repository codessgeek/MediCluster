import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Controlers = (prop) => {
    const { ctrls } = prop;
    return (
        <View style={[styles.deleteCancelDoneComponent, ctrls[0] == null && { justifyContent: 'flex-end' }]}>
            {ctrls[0] != null && (
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.delete}>{ctrls[0]}</Text>
                </TouchableOpacity>
            )}

            <View style={styles.donecanclewithsaperator}>
                {ctrls[1] != null && (
                    <>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.cancel}>{ctrls[1]}</Text>
                        </TouchableOpacity>
                        <View style={styles.saperator}></View>
                    </>
                )}


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.done}>{ctrls[2]}</Text>
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