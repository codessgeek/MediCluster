import React from "react";
import { StyleSheet, View, Text } from "react-native";

const NumBox = ({ list }) => {
    return (
        <View style={styles.container}>
            {list.map(item => {
                console.log(item);
                return (
                    <Text style={styles.maintext}>
                        {item}
                    </Text>
                )
            })}
        </View>)
};


const styles = StyleSheet.create({
    container: {
        margin: 5,
        maxHeight: 150,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    maintext: {
        width: '20%',
        fontSize: 25,
        textAlign: 'center',
        color: '#555',
        borderBottomWidth: 2,
        borderBottomColor: 'gray',
        backgroundColor: '#aaa',
        margin: 2
    }
})

export default NumBox;