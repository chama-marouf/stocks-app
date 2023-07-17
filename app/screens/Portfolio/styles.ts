import { StyleSheet } from 'react-native';
import { theme } from 'app/styles';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.COLOR_WHITE,
  },
  title: {
    fontSize: 16,
    color: colors.COLOR_BLACK,
    fontWeight: 'bold',
    marginTop: 48,
  },
});

export default styles;
