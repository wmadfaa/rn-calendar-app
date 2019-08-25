import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../../styles/index';

interface DrawerStylesType {
  container: ViewStyle;
  header: ViewStyle;
  section: ViewStyle;
  sectionItem: ViewStyle;
  sectionTitle: ViewStyle;
  activeSectionItem: ViewStyle;
  title: TextStyle;
  sectionLabel: TextStyle;
}

export const DrawerStyles = StyleSheet.create<DrawerStylesType>({
  container: {
    flex: 1,
  },
  header: {},
  section: {
    paddingVertical: 10,
  },
  sectionItem: {
    height: 45,
    alignItems: 'center',
    marginVertical: 4,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  sectionTitle: {
    height: 45,
    alignItems: 'center',
    marginVertical: 4,
    paddingHorizontal: 15,
  },
  activeSectionItem: {
    backgroundColor: theme.colors.primary.light,
  },
  sectionLabel: {
    paddingHorizontal: 10,
  },
  title: {
    textAlign: 'center',
  },
});
