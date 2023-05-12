import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
const CustomSwitch = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  option3,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  return (
    <View style={styles.toggleBtn}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(1)}
        style={{
          flex: 1,
          borderColor: getSelectionMode == 1 ? selectionColor : 'white',
          borderRadius: 9,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{color: getSelectionMode == 1 ? selectionColor : '#24000B'}}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(2)}
        style={{
          flex: 1,
          borderColor: getSelectionMode == 2 ? selectionColor : 'white',
          borderRadius: 9,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{color: getSelectionMode == 2 ? selectionColor : '#24000B'}}>
          {option2}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        TouchableOpacity
        activeOpacity={1}
        onPress={() => updatedSwitchData(3)}
        style={{
          flex: 1,
          borderColor: getSelectionMode == 3 ? selectionColor : 'white',
          borderRadius:11,
          borderWidth:1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: getSelectionMode == 3 ? selectionColor : '#24000B',}}>{option3}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomSwitch;
