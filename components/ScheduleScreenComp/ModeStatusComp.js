import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import MedicineStatus from './MedicineStatus';

const ModeStatusComp = ({ Dayquater }) => {
    const Dayquaterbox = {
        0: ['Morning', <FeatherIcon name="sun" style={styles.icon4} />],
        1: ['AFTERNOON', <FontAwesomeIcon name="clock-o" style={styles.icon4} />],
        2: ['EVENING', <FeatherIcon name="cloud" style={styles.icon4} />],
        3: ['NIGHT', <FeatherIcon name="moon" style={styles.icon4} />]
    }
    return (
        <View style={styles.morningstatusgroup}>
            <View style={styles.rect3}>
                <View style={styles.group4}>
                    <View style={styles.icon4Row}>
                        {Dayquaterbox[Dayquater][1]}
                        <Text style={styles.morning12}>{Dayquaterbox[Dayquater][0]}</Text>
                    </View>
                </View>
                <MedicineStatus mstatus={true} notestatus={3} time={'08:00 AM'} name='Xyz 1mg' />
                <MedicineStatus mstatus={false} notestatus={2} time={'12:00 AM'} name='Xyz 10mg' />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    morningstatusgroup: {
        marginVertical: 5
    },
    rect3: {
        padding: 5,
        backgroundColor: "rgba(208,208,208,1)"
    },
    group4: {
        flexDirection: "row",
    },
    icon4Row: {
        padding: 3,
        flexDirection: "row",
        flex: 1,
        backgroundColor: 'pink'
    },
    morning12: {
        fontFamily: "roboto-900",
        color: "#121212",
        fontSize: 20,
        textDecorationLine: "underline",
        marginLeft: 11,
        marginTop: 3
    },
})



export default ModeStatusComp