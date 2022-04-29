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
            <Picker.Item label="item 1" value="1" />
            <Picker.Item label="item 2" value="2" />
            <Picker.Item label="item 2" value="2" />
            <Picker.Item label="item 1" value="1" />
            <Picker.Item label="item 2" value="2" />
            <Picker.Item label="item 2" value="2" />
            <Picker.Item label="item 1" value="1" />
            <Picker.Item label="item 2" value="2" />
            <Picker.Item label="item 2" value="2" />
            <Picker.Item label="item 1" value="1" />
            <Picker.Item label="item 2" value="2" />
            <Picker.Item label="item 2" value="2" />
            <Picker.Item label="item 1" value="1" />
            <Picker.Item label="item 2" value="2" />
            <Picker.Item label="item 2" value="2" />
          </Picker>
        </View>

        <View style={styles.filterRow}>
          <Text style={styles.filter}>Select item:</Text>
          <TextInput
            placeholder="choose here"
            style={styles.chooseHere} />
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
