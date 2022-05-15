import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableWithoutFeedback } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


// styles
import color from '../assets/color/Colors'
import Gstyle from '../assets/styles/globleStyles'
import ModeStatusComp from "../components/ScheduleScreenComp/ModeStatusComp";
import FilterCom from "../components/ScheduleScreenComp/FilterCom";
import WeekComp from "../components/ScheduleScreenComp/WeekComp";
import DateComp from "../components/ScheduleScreenComp/DateComp";
import ParseData from "../components/ScheduleScreenComp/ParseData";

function Schduleshow({ navigation }) {
    const [showfilter, setShowfilter] = useState(-1);
    const [dummydata, setDummyData] = useState([
        { id: 1, name: 'xyz 1mg', time: "08:00", date: '1/1/2022', istaken: 0 },
        { id: 2, name: 'xyz 1mg', time: "08:00", date: '1/1/2022', istaken: 0 },
        { id: 3, name: 'xyz 1mg', time: "12:00", date: '3/1/2022', istaken: 2 },
        { id: 4, name: 'xyz 1mg', time: "11:00", date: '3/1/2022', istaken: 1 },
        { id: 5, name: 'xyz 1mg', time: "20:00", date: '3/1/2022', istaken: 1 },
        { id: 6, name: 'xyz 1mg', time: "08:00", date: '5/1/2022', istaken: 1 },
        { id: 7, name: 'xyz 1mg', time: "01:00", date: '6/1/2022', istaken: 1 },
        { id: 8, name: 'xyz 1mg', time: "12:00", date: '6/1/2022', istaken: 0 },
        { id: 9, name: 'xyz 1mg', time: "08:00", date: '6/1/2022', istaken: 0 },
        { id: 10, name: 'xyz 1mg', time: "12:00", date: '7/1/2022', istaken: 0 },
    ])
    const [readyData, setReadyData] = useState(ParseData(dummydata))

    const isPause = (id) => {
        setDummyData((pre) => {

            let rec = pre.filter((item) => item.id === id)
            console.log(pre)
            if (rec.length != 0 && rec[0].istaken != 0) {
                rec[0].istaken = rec[0].istaken == 1 ? 2 : 1
            }
            return pre
        })

        setReadyData(ParseData(dummydata))
    }

    function createrecord() {
        return Object.keys(readyData[2]).map((dateItem, ind) => {
            const rec = readyData[2][dateItem]
            return (
                <View key={ind}>
                    <DateComp fineldate={dateItem} />
                    {rec[0].length != 0 && <ModeStatusComp Dayquater={0} finelItem={rec[0]} isPause={isPause} readyData={readyData} />}
                    {rec[1].length != 0 && <ModeStatusComp Dayquater={1} finelItem={rec[1]} isPause={isPause} readyData={readyData} />}
                    {rec[2].length != 0 && <ModeStatusComp Dayquater={2} finelItem={rec[2]} isPause={isPause} readyData={readyData} />}
                    {rec[3].length != 0 && <ModeStatusComp Dayquater={3} finelItem={rec[3]} isPause={isPause} readyData={readyData} />}
                </View>
            )
        })
    }

    return (
        <View style={Gstyle.container}>
            <View style={styles.addschduleiconStack}>
                <View style={styles.addschduleicon}>
                    <TouchableWithoutFeedback onPress={() => setShowfilter((pre) => pre == 1 ? -1 : pre + 1)}>
                        <View style={styles.rect2}>
                            <MaterialCommunityIconsIcon
                                name="filter"
                                style={styles.icon}
                            ></MaterialCommunityIconsIcon>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={styles.rect2}>

                        <FontAwesomeIcon
                            name="calendar-plus-o"
                            style={styles.icon}
                            onPress={() => navigation.navigate('addSchdule')}
                        ></FontAwesomeIcon>
                    </View>
                </View>

                <View style={styles.filteroptiongroup}>

                    <View style={styles.filteroptionpanelStack}>

                        {showfilter == 0 && <FilterCom />}
                        {showfilter == 1 && <WeekComp />}

                    </View>
                </View>
            </View>
            <View style={styles.pointsbar}>
                <View style={styles.rect7}>
                    <View style={styles.group8}>

                        <MaterialCommunityIconsIcon
                            name="cards-heart"
                            style={[styles.icon11, readyData[0] != 0 && { color: 'red' }]}
                        ></MaterialCommunityIconsIcon>
                        <Text style={styles.loremIpsum3}>{readyData[0]}</Text>
                        <FontAwesomeIcon
                            name="star"
                            style={[styles.icon11, readyData[1] == 0 && { color: 'red' }]}
                        ></FontAwesomeIcon>
                        <Text style={styles.loremIpsum3}>{readyData[1]}</Text>
                    </View>
                </View>
            </View>
            <View style={[Gstyle.scrollArea, styles.scrollArea]}>
                <ScrollView
                    contentContainerStyle={Gstyle.scrollArea_contentContainerStyle}
                >

                    {createrecord()}
                    {/* <ModeStatusComp Dayquater={0} />
                    <ModeStatusComp Dayquater={1} />
                    <ModeStatusComp Dayquater={2} />
                    <ModeStatusComp Dayquater={3} />
                    <DateComp />
                    <ModeStatusComp Dayquater={0} />
                    <ModeStatusComp Dayquater={1} />
                    <ModeStatusComp Dayquater={2} />
                    <ModeStatusComp Dayquater={3} /> */}

                </ScrollView>
            </View>

        </View>
    );
}
let styles = StyleSheet.create({
    scrollArea: {
        flex: 1,
    },
    addschduleiconStack: {
        //backgroundColor: 'red',

    },
    addschduleicon: {

        //backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rect2: {
        width: 60,
        height: 60,
        backgroundColor: "#E6E6E6",
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: "rgba(62,62,62,1)",
        fontSize: 40,
        height: 45,
        width: 45,
    },
    filteroptiongroup: {
        //padding: 5
        marginBottom: 5
    },
    filteroptionpanelStack: {

    },
    pointsbar: {
        height: 30,
        //backgroundColor: 'blue',
        alignItems: 'flex-end',
        marginBottom: 5
    },
    rect7: {
        width: 108,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "pink"
    },
    group8: {
        width: 105,
        flexDirection: "row",
        justifyContent: 'space-evenly'
    },
    icon11: {
        color: "rgba(128,128,128,1)",
        fontSize: 18,
        margin: 2
    },
    loremIpsum3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 20,
        textAlign: "center",
        margin: 2
    }
})


export default Schduleshow;
