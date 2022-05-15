import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Dots from 'react-native-vector-icons/MaterialCommunityIcons'
import Lines from 'react-native-vector-icons/Ionicons'
import ModelList from './ModelList'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({ title, navigation, back, optionListObj = true }) => {
    let option = optionListObj != undefined
    const [visibleOpt, setVisibleOpt] = useState(false);
    const toggle = function (x) {
        console.log(visibleOpt)
        setVisibleOpt((pre) => (x == undefined ? !pre : x))
    }
    return (
        <View style={styles.headerBox}>
            <View style={styles.headerRow}>
                <View style={[styles.rightMenu, option && !back && { width: 40 }]}>
                    {back && <Lines name="chevron-back" color="white" size={35} onPress={() => navigation.goBack()} />}
                    {/* <Lines name='reorder-three-sharp' color="white" size={35} /> */}
                </View>
                <View>
                    <Text style={styles.headertext}>{title}</Text>
                </View>
                <View style={!option && back && { width: 40 }}>
                    <ModelList visibleOpt={visibleOpt} changeVisiblety={toggle} optionListObj={optionListObj} />
                    {option &&

                        <Dots name='dots-vertical' color="white" size={35} style={styles.dots} onPress={() => toggle()} />


                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        padding: 5
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headertext: {
        color: 'black',
        fontWeight: '600',
        fontSize: 24
    },
    rightMenu: {
        flexDirection: 'row'
    },
    dots: {

    }
})

export default Header