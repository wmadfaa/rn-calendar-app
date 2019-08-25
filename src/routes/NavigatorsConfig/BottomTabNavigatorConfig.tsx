import React from 'react';
import { BottomTabNavigatorConfig } from 'react-navigation';

import { ROUTES } from '../index';

import Icon from '../../components/Icon/Icon';

import accountIcon from '../../assets/icons/tab-bar/account.svg';
import analyticsIcon from '../../assets/icons/tab-bar/analytics.svg';
import calendarIcon from '../../assets/icons/tab-bar/calendar.svg';
import createNewIcon from '../../assets/icons/tab-bar/new.svg';
import searchIcon from '../../assets/icons/tab-bar/search.svg';
import { theme } from '../../styles/index';

const config: BottomTabNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      const IconComponent = (function(route) {
        switch (route) {
          case ROUTES.APP_CALENDER:
            return calendarIcon;
          case ROUTES.APP_SEARCH:
            return searchIcon;
          case ROUTES.APP_CREATE_NEW_EVENT:
            return createNewIcon;
          case ROUTES.APP_INVITES:
            return analyticsIcon;
          case ROUTES.APP_ACCOUNT_SETTINGS:
            return accountIcon;
        }
      })(routeName);

      if (IconComponent) {
        return <Icon component={IconComponent} size={30} fill={tintColor ? tintColor : undefined} />;
      }
      return null;
    },
    drawerLockMode: 'locked-closed',
  }),
  tabBarOptions: {
    activeTintColor: theme.colors.grey[10],
    inactiveTintColor: theme.colors.grey[30],
    showLabel: false,
  },
};

export default config;
