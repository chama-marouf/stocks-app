import { StyleSheet } from 'react-native';
import { theme } from 'app/styles';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderTopColor: colors.COLOR_BLACK,
  },
  title: {
    color: colors.COLOR_BLACK,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
