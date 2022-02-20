import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const SearchBar = () => {
    return (
        <View style={Styles.search}>
            <TextInput placeholder='search user' style={Styles.txtinp} placeholderTextColor='gray' />
        </View>
    )
}

const Styles = StyleSheet.create({
    search: {
        marginRight: 5,
        flexGrow: 1,
        borderRadius: 25,
        backgroundColor: 'white',
        borderColor: 'brown',
        borderWidth: 2
    },
    txtinp: {
        fontSize: 24,
        padding: 5,
        marginHorizontal: 5
    },
})

export default SearchBar