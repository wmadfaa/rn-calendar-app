import React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenComponent, NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';

import { ROUTES } from '../../routes';

import styles from './SettingsScreen.style';

interface SettingsScreenNavigationParams {}

interface SettingsScreenNavigationOptions {}

interface SettingsScreenProps {}

const SettingsScreen: NavigationScreenComponent<SettingsScreenNavigationParams, SettingsScreenNavigationOptions, SettingsScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SettingsScreen</Text>
    </View>
  );
};

SettingsScreen.navigationOptions = (screenProps: NavigationScreenProps): NavigationStackScreenOptions => {
  return {};
};

export default SettingsScreen

