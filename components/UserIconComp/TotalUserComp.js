
import React from 'react';
import UserIconComp from './UserIconComp';
import { Text, View, StyleSheet } from 'react-native';

const data = {"User1":{name: "Mr. Raja",age: 50}, "User2":{name: "Mrs. Raja", age: 60}};

const TotalUserComp = () => {
    
  return (
    <View style={styles.currentUserProfileComponentRow}>
         {Object.keys(data).map((user) => <UserIconComp user={user} name={data[user]["name"]} age={data[user]["age"]}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  currentUserProfileComponentRow: {
    height: 76,
    flexDirection: "row",
    flex: 0,
    marginTop: 1
  }
})
  
export default TotalUserComp