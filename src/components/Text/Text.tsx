import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';

import styles from './Text.style';

const HRegExp = new RegExp(/^h[1-6]$/, 'gmi');
const PRegExp = new RegExp(/^p[1-3]$/, 'gmi');

export interface TextProps extends RNTextProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3';
  light?: boolean;
  regular?: boolean;
  bold?: boolean;
}

const Text: React.FC<TextProps> = ({ children, style, variant, regular, bold, light, ...props }) => {
  const variantType = variant.match(HRegExp) ? styles.h : variant.match(PRegExp) ? styles.p : {};

  return (
    <RNText
      style={StyleSheet.flatten([
        variantType,
        styles[variant],
        light ? styles.fontWeightLight : {},
        regular ? styles.p : {},
        bold ? styles.h : {},
        style,
      ])}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text;
