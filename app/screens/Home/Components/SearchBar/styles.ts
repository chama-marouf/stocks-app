import { StyleSheet } from 'react-native';
import { theme } from 'app/styles';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: colors.COLOR_WHITE,
    fontWeight: 'bold',
  },
  topContainer: {
    backgroundColor: colors.COLOR_PRIMARY,
    height: 300,
  },
});

export default styles;
