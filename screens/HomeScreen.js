import React, { useEffect } from "react";
import { View, Text, Button } from 'react-native';
import PushNotification, { Importance } from 'react-native-push-notification';

export default function HomeScreen({ navigation }) {

    const createChannel = () => {

        PushNotification.createChannel(
            {
                channelId: "channel-id", // (required)
                channelName: "My channel", // (required)
                //channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                //playSound: false, // (optional) default: true
                //soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                //importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
                //vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
    }

    


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to SelectUser"
                onPress={() => {

                    PushNotification.cancelAllLocalNotifications({ id: 1 });

                    PushNotification.localNotification({
                        channelId: 'channel-id',
                        title: 'redirect to selectuser',
                        message: 'now you are in select user page',
                        bigText: 'As clicking the button Go to SelectUser, you are redirect to select user page',
                        color: 'red',
                        id: 1
                    })
                    return navigation.navigate('SelectUser')
                }}
            />
        </View>
    );
}

