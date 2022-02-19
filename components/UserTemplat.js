import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const UserTemplat = ({ name, gender, status, edit }) => {
  let color = "green"
  switch (status[0]) {
    case status[1]:
      color = 'red'
      break;
    case status[2]:
      color = 'yellow'
      break;
    default:
      break;
  }
  let limit = 18

  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.img}>
            <Icon name="account-plus" size={40} color="rgb(255, 255, 255)" />
          </View>
          <View style={{ display: `${color === 'green' ? 'none' : 'flex'}`, ...styles.dot, backgroundColor: `${color}` }}>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.line}>
            <Text style={styles.text}>{`${name.length > limit ? name.slice(0, limit - 3) + "..." : name}`}</Text>
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 7,
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 5,
    backgroundColor: 'blue'
  },
  img: {
    backgroundColor: 'pink',
    borderRadius: 25,
    alignSelf: 'flex-start',
    padding: 5,
    marginRight: 5
  },
  details: {
    //backgroundColor: 'red',
    padding: 5,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginRight: 15,
    textTransform: 'capitalize'
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  dot: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    height: 15,
    width: 15,
    borderRadius: 20,
    backgroundColor: 'red'
  }
})

export default UserTemplat;