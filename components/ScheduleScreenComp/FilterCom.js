import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FilterCom = () => {
  const [pickerValue, setpickerValue] = useState(1);
  return (
    <SafeAreaView style={styles.filteroptionpanel}>
      <View style={styles.fobg}>
        <View style={styles.filterRow}>
          <Text style={styles.filter}>Filter:</Text>
          <Picker
            style={styles.dropdown}
            itemStyle={styles.dropdownitem}
            selectedValue={pickerValue}
            onValueChange={item => setpickerValue(item)}>
            <Picker.Item label="today" value="today" />
            <Picker.Item label="yesterday" value="yesterday" />
            <Picker.Item label="tommorow" value="tommorow" />
            <Picker.Item label="week" value="week" />
            <Picker.Item label="last 15 days" value="15days" />
            <Picker.Item label="last month" value="month" />
          </Picker>
        </View>


      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  filteroptionpanel: {},
  fobg: {
    padding: 3,
    backgroundColor: '#E6E6E6',
  },
  filterRow: {
    flexDirection: 'row',
    margin: 1,
    alignItems: 'center',
  },
  filter: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 18,
  },
  chooseHere: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 21,
    flexGrow: 1,
    marginLeft: 5,
    borderColor: 'green',
    borderWidth: 1,
  },
  dropdown: {
    fontFamily: 'roboto-regular',
    height: 20,
    flexGrow: 1,
    marginLeft: 5,
    color: 'black',
    backgroundColor: 'pink'
  },
  dropdownitem: {
    height: 20,
    color: 'green',
    fontSize: 25
  }
});

export default FilterCom;
