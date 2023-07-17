import { StyleSheet } from 'react-native';
import { theme } from 'app/styles';
import { color } from 'react-native-reanimated';
const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: colors.COLOR_WHITE,
  },
  title: {
    fontSize: 36,
    color: colors.COLOR_WHITE,
    fontWeight: 'bold',
    marginTop: 48,
  },
  header: {
    flexDirection: 'row',
  },
  backButtonContainer: {
    padding: 12,
    borderColor: colors.COLOR_GREY,
    borderWidth: 1,
    borderRadius: 16,
    marginRight: 12,
  },
  symbol: {
    color: colors.COLOR_BLACK,
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.COLOR_GREY,
  },
  content: {
    marginTop: 40,
    flex: 1,
  },
  price: {
    color: colors.COLOR_BLACK,
    fontWeight: '900',
    fontSize: 32,
  },
  percentageGain: {
    fontSize: 20,
    fontWeight: '400',
  },
  timeLineButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pricesInfo: {
    marginTop: 24,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  priceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  priceTitle: {
    color: colors.COLOR_BLACK,
    fontSize: 16,
  },
  priceValue: {
    color: colors.COLOR_BLACK,
    fontSize: 16,
    fontWeight: '900',
  },
});

export default styles;
