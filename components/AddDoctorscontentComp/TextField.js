import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Gstyles from '../../assets/styles/globleStyles';

const TextField = (prop) => {
    console.log(prop);
    const { title, pholder, cap } = prop;
    return (
        <View style={Gstyles.boxui}>
            <Text style={Gstyles.boxtitle}>{title}:</Text>
            <TextInput
                style={styles.iftfield}
                placeholder={pholder}
                placeholderTextColor="rgba(114,113,113,1)"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    iftfield: {
        fontFamily: "roboto-regular",
        color: "#121212",
    },

})

export default TextField