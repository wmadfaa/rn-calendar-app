import React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenComponent, NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';

import { ROUTES } from '../../routes';

import styles from './CreateEventScreen.style';

interface CreateEventScreenNavigationParams {}

interface CreateEventScreenNavigationOptions {}

interface CreateEventScreenProps {}

const CreateEventScreen: NavigationScreenComponent<CreateEventScreenNavigationParams, CreateEventScreenNavigationOptions, CreateEventScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CreateEventScreen</Text>
    </View>
  );
};

CreateEventScreen.navigationOptions = (screenProps: NavigationScreenProps): NavigationStackScreenOptions => {
  return {};
};

export default CreateEventScreen

