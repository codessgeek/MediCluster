/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { globalStyles as gstyles } from './assets/styles/globleStyles';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import NumBox from './components/NumBox';


const App = () => {

  const [numlist, setNumlist] = useState([]);

  const generatelist = (last) => {
    let arr = [];
    for (let i = 1; i <= last; i++) {
      arr.push(i);
    }
    setNumlist(arr);
  }

  useEffect(() => {
    return generatelist(5);

  }, []);

  console.log(numlist);

  return (
    <>
      <View >
        <Text style={gstyles.title}>globle styles</Text>
        <Text style={gstyles.nofont}>globle styles</Text>
        <Text style={styles.local}>local hile</Text>
      </View>
      <NumBox list={numlist} />
    </>
  );
};

const styles = StyleSheet.create({
  local: {
    color: 'green',
    fontSize: 16,
  },
});

export default App;
