import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import BottomTabNavigatorConfig from './NavigatorsConfig/BottomTabNavigatorConfig';
import DrawerNavigatorConfig from './NavigatorsConfig/DrawerNavigatorConfig';

// screens
import CalenderScreen from '../screens/CalenderScreen/CalenderScreen';
import CreateEventScreen from '../screens/CreateEventScreen/CreateEventScreen';
import InvitesScreen from '../screens/InvitesScreen/InvitesScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';

export enum ROUTES {
  ROOT_APP = 'ROOT_APP',
  APP_CALENDER = 'APP_CALENDER',
  APP_SEARCH = 'APP_SEARCH',
  APP_CREATE_NEW_EVENT = 'APP_CREATE_NEW_EVENT',
  APP_INVITES = 'APP_INVITES',
  APP_ACCOUNT_SETTINGS = 'APP_ACCOUNT_SETTINGS',
}

const appBottomTabNavigator = createBottomTabNavigator(
  {
    [ROUTES.APP_CALENDER]: CalenderScreen,
    [ROUTES.APP_SEARCH]: SearchScreen,
    [ROUTES.APP_CREATE_NEW_EVENT]: CreateEventScreen,
    [ROUTES.APP_INVITES]: InvitesScreen,
    [ROUTES.APP_ACCOUNT_SETTINGS]: SettingsScreen,
  },
  BottomTabNavigatorConfig,
);

const appDrawer = createDrawerNavigator({ appBottomTabNavigator }, DrawerNavigatorConfig);

const rootNavigator = createSwitchNavigator({
  [ROUTES.ROOT_APP]: appDrawer,
});

export default createAppContainer(rootNavigator);
