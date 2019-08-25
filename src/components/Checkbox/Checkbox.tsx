import React, { useState } from 'react';
import { TouchableHighlight, View, Text, Platform, TouchableHighlightProps, GestureResponderEvent } from 'react-native';
import { SvgProps } from 'react-native-svg';

import styles from './Checkbox.style';
import { theme } from '../../styles/index';

interface Icon {
  checked: React.ComponentClass<SvgProps, any>;
  unchecked: React.ComponentClass<SvgProps, any>;
}

interface Icons {
  default: Icon;
  outline: Icon;
}

const Icons: Icons = {
  default: {
    checked: Platform.select({
      ios: () => require('../../assets/icons/checkbox/ios-checkbox.svg').default,
      android: () => require('../../assets/icons/checkbox/md-checkbox.svg').default,
    })(),
    unchecked: Platform.select({
      ios: () => require('../../assets/icons/checkbox/ios-square.svg').default,
      android: () => require('../../assets/icons/checkbox/md-square.svg').default,
    })(),
  },
  outline: {
    checked: Platform.select({
      ios: () => require('../../assets/icons/checkbox/ios-checkbox-outline.svg').default,
      android: () => require('../../assets/icons/checkbox/md-checkbox-outline.svg').default,
    })(),
    unchecked: Platform.select({
      ios: () => require('../../assets/icons/checkbox/ios-square-outline.svg').default,
      android: () => require('../../assets/icons/checkbox/md-square-outline.svg').default,
    })(),
  },
};

export interface CheckboxProps extends TouchableHighlightProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  label?: Text | string;
  dir?: 'rtl' | 'ltr';
  checked?: boolean;
  outline?: boolean;
  onChange?(checked: boolean): void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  left,
  right,
  label,
  dir = 'ltr',
  checked = false,
  outline = false,
  onPress,
  onChange,
  ...props
}) => {
  const [isChecked, setChecked] = useState(checked);

  const handleChange = (evt: GestureResponderEvent) => {
    onPress instanceof Function && onPress(evt);
    setChecked(prev => {
      onChange instanceof Function && onChange(!prev);
      return !prev;
    });
  };

  const renderLeft = () => {
    if (left) return left;
    if (dir === 'rtl') return <Text style={styles.label}>{label}</Text>;
  };

  const renderRight = () => {
    if (right) return right;
    if (dir === 'ltr') return <Text style={styles.label}>{label}</Text>;
  };

  const renderIcon = () => {
    const IconComponent = Icons[outline ? 'outline' : 'default'][isChecked ? 'checked' : 'unchecked'];
    return (
      <IconComponent width={30} height={30} fill={isChecked ? theme.colors.primary.dark : theme.colors.grey[40]} />
    );
  };

  return (
    <TouchableHighlight underlayColor="transparent" {...props} onPress={handleChange}>
      <View style={styles.container}>
        {renderLeft()}
        {renderIcon()}
        {renderRight()}
      </View>
    </TouchableHighlight>
  );
};

export default Checkbox;
