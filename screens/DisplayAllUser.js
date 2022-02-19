import React from 'react'
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import UserTemplat from '../components/UserTemplat'

const DisplayAllUser = () => {
  const status = [0, 1]
  const data = [
    { id: 0, name: "charli", gender: 'male' },
    { id: 1, name: "suzi", gender: 'femail' },
    { id: 2, name: "braw", gender: 'not mentaion' },
    { id: 3, name: "braw", gender: 'not mentaion' },
  ]
  let edit = false
  return (
    <View style={Styles.container}>
      <View style={Styles.createuser}>
        <Icon name="account-plus" size={35} color="rgb(255, 255, 255)" style={Styles.icn} />
      </View>
      <View style={Styles.userlist}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => <UserTemplat name={item.name} gender={item.gender} status={[index, ...status]} edit={edit} />}>
        </FlatList>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgb(225, 225, 225)',
    padding: 5,
  },
  createuser: {
    padding: 15,
    alignItems: 'flex-end'

  },
  icn: {
    padding: 5,

    alignSelf: 'auto',

    borderRadius: 30,

    backgroundColor: 'rgb(100, 100, 100)',
  },
  userlist: {

  }
})

export default DisplayAllUser