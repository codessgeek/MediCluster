import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import DayComp from './DayComp'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";


const WeekComp = () => {
    const [startDate, setDate] = useState([-3, 3]);

    function setrange(x) {
        switch (x) {
            case -1:
                setDate(([st, nd]) => [st - 1, nd - 1])
                break
            case 1:
                setDate(([st, nd]) => [st + 1, nd + 1])
                break
            default:
                startDate
                break
        }
    }

    function printweek() {
        let ans = []
        let today = new Date()
        let k = null

        for (let i = startDate[0]; i <= startDate[1]; i++) {
            k = new Date(Math.abs(today.getTime() + 1000 * 60 * 60 * 24 * i))
            ans.push(<DayComp key={i} Day={[k.toLocaleString('en-US', { weekday: 'short' }).split(" ")[0], k.getDate()]} />)
        }
        return ans
    }

    return (
        <View style={styles.displayweekpalet}>
            <View style={styles.weekschduler}>

                <View style={styles.daycell}>
                    <FontAwesomeIcon
                        name="caret-right"
                        onPress={() => setrange(-1)}
                        style={[styles.icon2, {
                            transform: [
                                {
                                    rotate: "180.00deg"
                                }
                            ]
                        }]}
                    ></FontAwesomeIcon>
                </View>

                {printweek()}
                {/* <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} />
                <DayComp Day={['Fri', '11']} /> */}
                <View style={styles.daycell}>
                    <FontAwesomeIcon
                        name="caret-right"
                        onPress={() => setrange(1)}
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