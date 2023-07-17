import { StyleSheet } from 'react-native';
import { theme } from 'app/styles';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    color: colors.COLOR_WHITE,
    fontWeight: 'bold',
    marginTop: 48,
  },
  topContainer: {
    backgroundColor: colors.COLOR_PRIMARY,
    paddingBottom: 48,
    padding: 18,
  },
});

export default styles;
