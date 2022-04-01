import React from 'react'
import { Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'


const MNumberComp = ({ Mnumber }) => {
    return (
        <TouchableOpacity onPress={() => { }}>
            <Text style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, .2)', padding: 3, margin: 2 }}>{Mnumber}</Text>
        </TouchableOpacity>

    )
}


export default MNumberComp