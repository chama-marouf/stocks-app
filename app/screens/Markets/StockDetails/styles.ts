import { StyleSheet } from 'react-native';
import { theme } from 'app/styles';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_WHITE,
    flex: 1,
    padding: 12,
  },
  name: {
    color: colors.COLOR_BLACK,
  },
  backButton: {
    width: 42,
    height: 42,
    borderColor: colors.COLOR_GREY,
    borderWidth: 1,
    borderRadius: 18,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
