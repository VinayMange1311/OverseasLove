import React, {useState, useEffect, useCallback} from 'react';
import {
  Text,
  View,
  Touchable,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from './styles';
import * as Images from '../../Images/index';
import CustomSwitch from '../../Custom/Switch/CustomSwitch';
import {Dropdown} from 'react-native-element-dropdown';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
// import {Slider} from '@miblanchard/react-native-slider';
// import Slider from 'react-native-a11y-slider';
import TabNav from '../../Navigation/TabNavigation';
import Slider from '@react-native-community/slider';
const Filter = () => {
  const navigation = useNavigation();
  const onSelectSwitch = index => {};
  const [value2, setValue2] = useState([]);
  const [isActive2, setisActive2] = useState(false);
  const [onStartingSlider, setOnSlidingStart] = useState();
  const [onSlidingComplete, setOnSlidingComplete] = useState();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const data = [
    {label: 'Male', value: '1'},
    {label: 'Female', value: '2'},
    {label: 'Other', value: '3'},
  ];
  const handleSliderChange = ([newMinValue, newMaxValue]) => {
    setMinValue(newMinValue);
    setMaxValue(newMaxValue);
  };
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.headerView}>
          <Image source={Images.Logo} style={styles.logo}></Image>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Image source={Images.Backbtn2X} style={styles.backBtn}></Image>
          </Pressable>
        </View>
        <Text style={styles.simpleText}>I want to see</Text>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'Guys'}
          option2={'Girls'}
          option3={'All'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'#AF18C6'}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          }}>
          <Text style={styles.ageTitle}>Age</Text>
          <Text style={styles.ageTitle}>
            {minValue}-{maxValue}
          </Text>
        </View>

        <View style={{marginHorizontal: 15}}>
          {/* <Slider
            min={18}
            max={100}
            values={[18,100]}
            thumbImage={Images.slider}
            showLabel={false}
            onSlidingStart={onStartingSlider =>
              setOnSlidingStart(onStartingSlider)
            }
            onSlidingComplete={onSlidingComplete =>
              setOnSlidingComplete(onSlidingComplete)
            }

          /> */}
          <Slider
            style={styles.slider}
            minimumValue={18}
            maximumValue={100}
            step={1}
            thumbTintColor="#ff0000"
            minimumTrackTintColor="#ff0000"
            maximumTrackTintColor="#000000"

            //  value={minValue, maxValue}
            // onValueChange={handleSliderChange}
          />
        </View>
        <Dropdown
          style={styles.dropDownContainer}
          placeholder="Location"
          itemTextStyle={{color: '#24000B'}}
          itemContainerStyle={{backgroundColor: '#F5F5F5'}}
          placeholderStyle={styles.placeholder}
          data={data}
          setSelected={setValue2}
          renderRightIcon={() => (
            <Feather
              color={'#24000B'}
              size={26}
              style={{marginRight: 24}}
              name={isActive2 ? 'chevron-up' : 'chevron-down'}
            />
          )}
          labelField="label"
          valueField="value"
          value={value2}
          onChange={item => {
            setValue2(item.value);
          }}
          onFocus={() => setisActive2(true)}
          onBlur={() => setisActive2(false)}
        />
        <Text style={styles.filterText}>More filters</Text>
        <Dropdown
          style={styles.dropDownContainer}
          placeholder="Children"
          placeholderStyle={styles.placeholder}
          data={data}
          setSelected={setValue2}
          renderRightIcon={() => (
            <Feather
              color={'#24000B'}
              size={26}
              style={{marginRight: 24}}
              name={isActive2 ? 'chevron-up' : 'chevron-down'}
            />
          )}
          labelField="label"
          valueField="value"
          value={value2}
          onChange={item => {
            setValue2(item.value);
          }}
          onFocus={() => setisActive2(true)}
          onBlur={() => setisActive2(false)}
        />
        <Dropdown
          style={styles.dropDownContainer}
          placeholder="Orientation"
          placeholderStyle={styles.placeholder}
          data={data}
          setSelected={setValue2}
          renderRightIcon={() => (
            <Feather
              color={'#24000B'}
              size={26}
              style={{marginRight: 24}}
              name={isActive2 ? 'chevron-up' : 'chevron-down'}
            />
          )}
          labelField="label"
          valueField="value"
          value={value2}
          onChange={item => {
            setValue2(item.value);
          }}
          onFocus={() => setisActive2(true)}
          onBlur={() => setisActive2(false)}
        />
        <Dropdown
          style={styles.dropDownContainer}
          placeholder="Religion"
          placeholderStyle={styles.placeholder}
          data={data}
          setSelected={setValue2}
          renderRightIcon={() => (
            <Feather
              color={'#24000B'}
              size={26}
              style={{marginRight: 24}}
              name={isActive2 ? 'chevron-up' : 'chevron-down'}
            />
          )}
          labelField="label"
          valueField="value"
          value={value2}
          onChange={item => {
            setValue2(item.value);
          }}
          onFocus={() => setisActive2(true)}
          onBlur={() => setisActive2(false)}
        />
      </ScrollView>
      <TabNav />
    </SafeAreaView>
  );
};
export default Filter;
