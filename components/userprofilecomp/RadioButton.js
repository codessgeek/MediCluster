import React from 'react'
import { View, Text } from 'react-native'
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { styles } from '../../screens/UserGenScreen'

const RadioButton = ({ title, value, setgen, self }) => {
    return (
        <View style={styles.maleOptionGroup}>
            <View style={styles.icon2Row}>
                <IoniconsIcon
                    name={value == self ? "md-radio-button-on" : "md-radio-button-off"}
                    onPress={() => setgen(value)}
                    style={styles.icon2}
                ></IoniconsIcon>
                <Text style={styles.male}>{title}</Text>
            </View>
        </View>

    )
}

export default RadioButton