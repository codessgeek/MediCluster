import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


const UserGenScreen = ({ navigation, route }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
                console.log("press");
                return navigation.navigate('Admin')
            }} style={{ padding: 10, backgroundColor: 'green' }}>
                <Text>go to user </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ padding: 10, backgroundColor: 'red' }}>
                <Text>go to user </Text>
            </TouchableOpacity>
        </View>
    )
};

export default UserGenScreen;
