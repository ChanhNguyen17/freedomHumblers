import { React, Stylesheet } from 'react';
import { Connect } from 'react-redux';

import { TouchableOpacity, Dimensions } from 'react-native';


export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}

export const colors  = {
  primary: "#226B74",
  secondary: "#254B5A",
  tertiary: "#5DA6A7",
  orange: "#e68a00",
  topBar: "#3377ff",
  //"#e42700",
  //"#FF4500",
  appBackground: "#80aaff",
  black: "#000000"
  //"#483d8b"


}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40,
  homeTopButton: 180
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Cochin'
}
