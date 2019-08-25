import { StyleSheet, TextStyle as RNTextStyle } from 'react-native';

interface TextStyle {
  [key: string]: RNTextStyle;
}

export default StyleSheet.create<TextStyle>({
  h: {
    fontFamily: 'OpenSans-Bold',
  },
  p: {
    fontFamily: 'OpenSans-Regular',
  },
  fontWeightLight: {
    fontFamily: 'OpenSans-Light',
  },
  h1: {
    fontSize: 34,
    lineHeight: 46,
  },
  h2: {
    fontSize: 24,
    lineHeight: 33,
  },
  h3: {
    fontSize: 19,
    lineHeight: 26,
  },
  h4: {
    fontSize: 17,
    lineHeight: 24,
  },
  h5: {
    fontSize: 14,
    lineHeight: 20,
  },
  h6: {
    fontSize: 12,
    lineHeight: 17,
  },
  p1: {
    fontSize: 17,
    lineHeight: 25,
  },
  p2: {
    fontSize: 14,
    lineHeight: 22,
  },
  p3: {
    fontSize: 12,
    lineHeight: 19,
  },
});
