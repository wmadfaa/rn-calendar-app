import React, { useState } from 'react';
import { TouchableHighlight, View, Text, TouchableHighlightProps, GestureResponderEvent } from 'react-native';

import { theme } from '../../styles/index';

import styles from './Checkbox.style';

import checkedIcon from '../../assets/icons/checkbox/checked.svg';
import uncheckedIcon from '../../assets/icons/checkbox/unchecked.svg';

export interface CheckboxProps extends TouchableHighlightProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  label?: Text | string;
  dir?: 'rtl' | 'ltr';
  checked?: boolean;
  onChange?(checked: boolean): void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  left,
  right,
  label,
  dir = 'ltr',
  checked = false,
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
    const IconComponent = isChecked ? checkedIcon : uncheckedIcon;
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
