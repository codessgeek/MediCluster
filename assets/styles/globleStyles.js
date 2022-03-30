import React from "react";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxui: {
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 7,
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 15
    },
    boxtitle: {
        fontFamily: "roboto-700",
        color: "#121212",
        textAlign: "left",
        marginHorizontal: 5,
        fontSize: 18
    },
    scrollArea: {
        justifyContent: 'center'
    },
    scrollArea_contentContainerStyle: {
        flexGrow: 1,
    },
});

export default globalStyles;