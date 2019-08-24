import React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenComponent, NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';

import { ROUTES } from '../../routes';

import styles from './InvitesScreen.style';

interface InvitesScreenNavigationParams {}

interface InvitesScreenNavigationOptions {}

interface InvitesScreenProps {}

const InvitesScreen: NavigationScreenComponent<InvitesScreenNavigationParams, InvitesScreenNavigationOptions, InvitesScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>InvitesScreen</Text>
    </View>
  );
};

InvitesScreen.navigationOptions = (screenProps: NavigationScreenProps): NavigationStackScreenOptions => {
  return {};
};

export default InvitesScreen

