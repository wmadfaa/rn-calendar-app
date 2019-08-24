
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface SearchScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export default StyleSheet.create<SearchScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

