import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Gicon from 'react-native-vector-icons/Fontisto'
import Uicon from 'react-native-vector-icons/FontAwesome'

const UserTemplat = ({ item, status }) => {
  const { id, name, birthday, gender } = item
  let color = id == status[0] ? 'red' : id == status[1] ? 'yellow' : ''
  let limit = 18

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgview}>
          <View style={styles.img}>
            {
              gender == 'user' ?
                <Uicon name='user' size={50} color="rgb(255, 255, 255)" style={{ textAlign: 'center' }} /> :
                <Gicon name={`${gender === 'male' ? 'male' : 'female'}`} size={45} color="rgb(255, 255, 255)" style={{ textAlign: 'center' }} />
            }
            <View style={{ display: `${color === '' ? 'none' : 'flex'}`, ...styles.dot, backgroundColor: `${color}` }}>
            </View>
          </View>
        </View>

        <View style={styles.details}>
          <View style={styles.line}>
            <Text style={styles.text}>{`${name.length > limit ? name.slice(0, limit - 3) + "..." : name}`}</Text>
          </View>
          <Text style={styles.birthday}>{birthday}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 7,
    padding: 5,
    marginVertical: 5,
    backgroundColor: 'blue'
  },
  img: {
    height: 60,
    width: 60,
    backgroundColor: 'pink',
    borderRadius: 35,
    alignSelf: 'flex-start',
    padding: 5,
    marginRight: 5,
  },
  details: {
    padding: 5,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginRight: 15,
    textTransform: 'capitalize'
  },
  birthday: {
    color: 'white',
    paddingStart: 5
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  dot: {
    position: 'absolute',
    bottom: 3,
    left: 45,
    height: 16,
    width: 16,
    borderRadius: 20,
  },

})

export default UserTemplat;