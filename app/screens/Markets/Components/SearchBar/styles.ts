import { StyleSheet } from 'react-native';
import { theme } from 'app/styles';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
});

export default styles;
