import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const FilterCom = () => {
    return (
        <View style={styles.filteroptionpanel}>
            <View style={styles.fobg}>

                <View style={styles.filterRow}>
                    <Text style={styles.filter}>Filter:</Text>
                    <TextInput
                        placeholder="choose here"
                        style={styles.chooseHere}
                    ></TextInput>
                </View>


                <View style={styles.filterRow}>
                    <Text style={styles.filter}>Select item:</Text>
                    <TextInput
                        placeholder="choose here"
                        style={styles.chooseHere}
                    ></TextInput>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    filteroptionpanel: {

    },
    fobg: {
        padding: 3,
        backgroundColor: "#E6E6E6",
    },
    filterRow: {
        flexDirection: "row",
        margin: 1
    },
    filter: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 18
    },
    chooseHere: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 21,
        flexGrow: 1,
        marginLeft: 5,
        borderColor: 'pink',
        borderWidth: 2,
    },

})

export default FilterCom