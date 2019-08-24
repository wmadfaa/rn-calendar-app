import React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenComponent, NavigationScreenProps, NavigationStackScreenOptions } from 'react-navigation';

import { ROUTES } from '../../routes';

import styles from './SearchScreen.style';

interface SearchScreenNavigationParams {}

interface SearchScreenNavigationOptions {}

interface SearchScreenProps {}

const SearchScreen: NavigationScreenComponent<SearchScreenNavigationParams, SearchScreenNavigationOptions, SearchScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SearchScreen</Text>
    </View>
  );
};

SearchScreen.navigationOptions = (screenProps: NavigationScreenProps): NavigationStackScreenOptions => {
  return {};
};

export default SearchScreen

