import React from 'react'
import { View, StyleSheet } from 'react-native'
import DayComp from './DayComp'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const WeekComp = () => {
    return (
        <View style={styles.displayweekpalet}>
            <View style={styles.weekschduler}>

                <View style={styles.daycell}>
                    <FontAwesomeIcon
                        name="caret-right"
                        style={[styles.icon2, {
                            transform: [
                                {
                                    rotate: "180.00deg"
                                }
                            ]
                        }]}
                    ></FontAwesomeIcon>
                </View>

                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <View style={styles.daycell}>
                    <FontAwesomeIcon
                        name="caret-right"
                        style={styles.icon2}
                    ></FontAwesomeIcon>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    displayweekpalet: {
        flexGrow: 1,
        //backgroundColor: 'blue'
    },
    weekschduler: {
        backgroundColor: "#E6E6E6",
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    daycell: {
        height: 45,
        justifyContent: 'center',
        alignContent: 'center'
    },
    icon2: {
        color: "rgba(128,128,128,1)",
        fontSize: 40,
        // backgroundColor: 'blue',
    },

})

export default WeekComp