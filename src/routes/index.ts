import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

export enum ROUTES {
  ROOT_APP = 'ROOT_APP',
  APP_CALENDER = 'APP_CALENDER',
  APP_SEARCH = 'APP_SEARCH',
  APP_CREATE_NEW_EVENT = 'APP_CREATE_NEW_EVENT',
  APP_INVITES = 'APP_INVITES',
  APP_ACCOUNT_SETTINGS = 'APP_ACCOUNT_SETTINGS',
}

const appStack = createBottomTabNavigator({
  [ROUTES.APP_CALENDER]: () => {},
  [ROUTES.APP_SEARCH]: () => {},
  [ROUTES.APP_CREATE_NEW_EVENT]: () => {},
  [ROUTES.APP_INVITES]: () => {},
  [ROUTES.APP_ACCOUNT_SETTINGS]: () => {},
});

const appDrawer = createDrawerNavigator(appStack, {});

const rootNavigator = createSwitchNavigator({
  [ROUTES.ROOT_APP]: appDrawer,
});

export default createAppContainer(rootNavigator);
