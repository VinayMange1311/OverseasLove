import React, { useRef,useState} from 'react';
import { View, PanResponder, StyleSheet, Animated } from 'react-native';
import * as IMAGES from "../../Images/index";

const CustomAgeSlider = () => {

  const [leftThumbValue, setLeftThumbValue] = useState(18);
  const [rightThumbValue, setRightThumbValue] = useState(50);

  const leftThumbPosition = new Animated.Value(leftThumbValue);
  const rightThumbPosition = new Animated.Value(rightThumbValue);

  const thumbPosition = useRef(new Animated.Value(0)).current;
  

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder:()=> true,

    onPanResponderMove: (_, gesture) => {
      
      thumbPosition.setValue(gesture.dx);
      const thumbWidth = 30; 
      const sliderWidth = 300;
      let newPosition = Math.max(0, Math.min(sliderWidth - thumbWidth, gesture));
      const ageRange = 100; 
      const stepSize = ageRange / (sliderWidth - thumbWidth);
      newPosition = Math.round(newPosition * stepSize);

      if (leftThumbValue <= rightThumbValue) {
        if (gesture > 0) {
          leftThumbPosition.setValue(newPosition);
          setLeftThumbValue(newPosition);
        } else {
          rightThumbPosition.setValue(newPosition);
          setRightThumbValue(newPosition);
        }
      } else {
        if (gesture > 0) {
          rightThumbPosition.setValue(newPosition);
          setRightThumbValue(newPosition);
        } else {
          leftThumbPosition.setValue(newPosition);
          setLeftThumbValue(newPosition);
        }
      }
    },
    onPanResponderRelease: () => {
        
    },
  });
  

  const thumbStyle = {
    transform: [{ translateX: thumbPosition }],
  };
  const rightThumbStyle ={
    transform:[{ translateX: thumbPosition}]
  }

  return (
    <View style={styles.container}>
      <View style={styles.track} />
      <Animated.Image source={IMAGES.slider} style={[styles.thumb, thumbStyle]} {...panResponder.panHandlers} />
      <Animated.Image source={IMAGES.slider} style={[styles.thumb2, rightThumbStyle]} {...panResponder.panHandlers} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
  track: {
    marginHorizontal:20,width:350,
    height: 4,
    backgroundColor: 'lightgray',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    position: 'absolute',
    top: -8,
    right:10,
  },
  thumb2: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    position: 'absolute',
    top: -8,
  },
});

export default CustomAgeSlider;