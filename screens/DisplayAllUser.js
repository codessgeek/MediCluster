import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import UserTemplat from '../components/UserTemplat'
import SearchBar from '../components/SearchBar'

const DisplayAllUser = () => {
  const status = [0, 1]
  const data = [
    { id: 0, name: "charli", gender: 'male', birthday: '01-01-2000' },
    { id: 1, name: "suzi", gender: 'femail', birthday: '01-01-2000' },
    { id: 2, name: "braw", gender: 'user', birthday: '01-01-2000' },
    { id: 3, name: "braw", gender: 'femail', birthday: '01-01-2000' },
    { id: 4, name: "charli", gender: 'male', birthday: '01-01-2000' },
    { id: 5, name: "suzi", gender: 'femail', birthday: '01-01-2000' },
    { id: 6, name: "braw", gender: 'user', birthday: '01-01-2000' },
    { id: 7, name: "braw", gender: 'femail', birthday: '01-01-2000' },
  ]
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <View style={Styles.flexHeader}>
          <SearchBar />
          <View style={Styles.addUser}>
            <View style={Styles.bgIcon}>
              <Icon name="account-plus" size={40} color="white" backgroundColor="pink" />
            </View>
          </View>
        </View>

      </View>

      <View style={Styles.userlist}>
        <FlatList data={data} renderItem={({ item }) => <UserTemplat key={item.id} item={item} status={status} />} />
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    //backgroundColor: 'yellow',
    padding: 10,
  },
  header: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    padding: 2,
    //backgroundColor: 'red',
  },
  flexHeader: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  userlist: {
    flex: 1,
    flexGrow: 1
  },

  bgIcon: {
    padding: 5,
    backgroundColor: 'blue',
    alignSelf: 'baseline',
    borderRadius: 30
  }
})

export default DisplayAllUser