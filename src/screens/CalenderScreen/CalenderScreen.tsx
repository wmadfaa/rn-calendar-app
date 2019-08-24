import React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenComponent, NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';

import { ROUTES } from '../../routes';

import styles from './CalenderScreen.style';

interface CalenderScreenNavigationParams {}

interface CalenderScreenNavigationOptions {}

interface CalenderScreenProps {}

const CalenderScreen: NavigationScreenComponent<
  CalenderScreenNavigationParams,
  CalenderScreenNavigationOptions,
  CalenderScreenProps
> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={() => navigation.openDrawer()}>
        CalenderScreen
      </Text>
    </View>
  );
};

CalenderScreen.navigationOptions = (screenProps: NavigationScreenProps): NavigationStackScreenOptions => {
  return {};
};

export default CalenderScreen;
