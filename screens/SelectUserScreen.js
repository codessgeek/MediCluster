
import React from "react";
import { View, Text, Button } from 'react-native';
import PushNotification, { Importance } from 'react-native-push-notification';

export default function SelectUser({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SelectUser</Text>
            <Button
                title="Go Back"
                onPress={() => {
                    PushNotification.localNotificationSchedule({
                        channelId: 'channel-id',
                        title: 'Countdown',
                        message: 'now go to home page',
                        date: new Date(Date.now() + 3 * 1000),
                        allowWhileIdle: true
                    });
                    return navigation.goBack()
                }}
            />
        </View>
    );
}

