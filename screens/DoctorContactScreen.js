// core imports
import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";

// import globals
import Color from "../assets/color/Colors";
import Gstyle from "../assets/styles/globleStyles";
import Doctorcontentcomp from "../components/NotesGenScreen/Doctorcontentcomp";

function Displaycontextscreen(props) {
    const [sortby, setsortby] = useState(0)
    const [oindex, setoindex] = useState(-1)
    const permitToOpen = (x) => {
        setoindex((pre) => pre == x ? -1 : x)
    }
    const [con, setcon] = useState([
        {
            id: 0,
            name: 'abc',
            spe: 'Eye specialist',
            contents: ["+91 999 999 9999", "+91 999 999 9998", "+91 999 999 9997"]
        },
        {
            id: 1,
            name: 'def',
            spe: 'Eye specialist',
            contents: ["+91 999 199 9999", "+91 299 999 9998", "+91 399 999 9997"]
        },
        {
            id: 2,
            name: 'ght',
            spe: 'Eye specialist',
            contents: ["+91 999 999 9949"]
        },
        {
            id: 3,
            name: 'sss',
            spe: 'Eye specialist',
            contents: ["+91 999 999 9499", "+91 959 999 9998"]
        },

    ])
    return (
        <View style={Gstyle.container}>

            <View style={styles.menudisplaycontentscreen}>
                <View style={styles.menubar}>
                    <TouchableWithoutFeedback onPress={() => {
                        setsortby(0)
                    }}><Text style={[styles.menuitem, sortby == 0 && { textDecorationLine: "underline" }]}>Name</Text></TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => {
                        setsortby(1)
                    }}><Text style={[styles.menuitem, sortby == 1 && { textDecorationLine: "underline" }]}>contect no.</Text></TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => {
                        setsortby(2)
                    }}><Text style={[styles.menuitem, sortby == 2 && { textDecorationLine: "underline" }]}>discription</Text></TouchableWithoutFeedback>

                </View>
            </View>
            <View style={Gstyle.scrollArea}>
                <ScrollView
                    contentContainerStyle={Gstyle.scrollArea_contentContainerStyle}
                >

                    {con.map((item) => <Doctorcontentcomp oindex={oindex} permitToOpen={permitToOpen} item={item} key={item.id} />)}


                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({


    menudisplaycontentscreen: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "center",
        margin: 5,
        backgroundColor: Color.primary_bg
    },
    menubar: {
        flexDirection: "row",
        flexGrow: 1,
        justifyContent: "space-between"
    },
    menuitem: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 20,
    },

    discription: {
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 20
    },
});

export default Displaycontextscreen;
