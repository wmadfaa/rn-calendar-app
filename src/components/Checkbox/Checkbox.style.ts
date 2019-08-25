import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../../styles/index';

interface CheckboxStyles {
  container: ViewStyle;
  label: TextStyle;
}

export default StyleSheet.create<CheckboxStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    color: theme.colors.black,
    textAlign: 'center',
  },
});
