import { StyleSheet } from 'react-native';
import { theme } from 'app/styles';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 2,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: colors.COLOR_BLACK_TRANSP,
    fontSize: 12,
  },
  symbol: {
    color: colors.COLOR_BLACK,
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: colors.COLOR_BLACK,
    fontWeight: 'bold',
    fontSize: 16,
  },
  percentageGain: {
    color: colors.COLOR_RED,
  },
  nameContainer: {
    width: 140,
  },
});

export default styles;
