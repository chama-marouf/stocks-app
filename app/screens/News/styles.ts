import { StyleSheet } from 'react-native';
import { theme } from 'app/styles';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: colors.COLOR_BLACK,
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
