import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Ellipse } from "react-native-svg";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const UserIconComp = ({user, name, age}) => {
  return (
    <View>
        <View style={styles.userProfileComponent}>
            
            <><View style={styles.ellipse3Stack}>
                    <Svg viewBox="0 0 60.43 60" style={styles.ellipse3}>
                        <Ellipse
                            stroke="rgba(230, 230, 230,1)"
                            strokeWidth={0}
                            fill="rgba(198,198,198,1)"
                            cx={30}
                            cy={30}
                            rx={30}
                            ry={30}
                        ></Ellipse>
                    </Svg>
                    <FeatherIcon name="user" style={styles.icon1}></FeatherIcon>
                </View><Text style={styles.mrsRaja}>{name}</Text></>
        </View>
    </View>       
  )
}

const styles=StyleSheet.create({
    ellipse3Stack: {
        width: 60,
        height: 60
    },
    userProfileComponent: {
        width: 61,
        height: 76,
        marginLeft: 9
    },
    ellipse3: {
        top: 0,
        left: 0,
        width: 60,
        height: 60,
        position: "absolute"
    },
    icon1: {
        top: 10,
        left: 10,
        position: "absolute",
        color: "rgba(128,128,128,1)",
        fontSize: 40
    },
    mrsRaja: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 16,
        width: 61,
        fontSize: 12,
        textAlign: "center"
    }
})
export default UserIconComp