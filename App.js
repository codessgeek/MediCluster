/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { globalStyles as gstyles } from './assets/styles/globleStyles';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  return (
    <View >
      <Text style={gstyles.title}>globle styles</Text>
      <Text style={gstyles.nofont}>globle styles</Text>
      <Text style={styles.local}>local hile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  local: {
    color: 'green',
    fontSize: 16,
  },
});

export default App;
