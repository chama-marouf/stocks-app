import { StyleSheet } from 'react-native';
import { theme } from 'app/styles';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
  },
  title: {
    color: colors.COLOR_WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
