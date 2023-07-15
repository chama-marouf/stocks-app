import { DefaultTheme, configureFonts } from 'react-native-paper';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const SIZES = {
  base: 8,
  padding: 10,

  screenWidth: width,
  screenHeight: height,

  screenPadding: 16,
};

export const FONTS = {
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
};

const fontConfig = {
  ios: {
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Bold',
      fontWeight: 'normal',
    },
  },
  android: {
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Bold',
      fontWeight: 'normal',
    },
  },
};

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  roundness: 20,
  colors: {
    COLOR_PRIMARY: '#315aec',
    COLOR_SECONDARY: '#111',
    COLOR_WHITE: '#FFFFFF',
    COLOR_BLACK: '#000000',
    COLOR_GREY: '#d4d7d9',
    COLOR_GREEN: '#8ccc47',
    COLOR_RED: '#f74231',
    COLOR_PLACEHOLDER: '#111111',
    COLOR_GREY_WHITE: '#fafafa',
    COLOR_DARK_SEPERATOR: '#d4d4d4',
    COLOR_BLACK_TRANSP: 'rgba(0, 0, 0, 0.7)',
    COLOR_GREY_TRANSP: 'rgba(67, 85, 85, 0.7)',
  },
  sizes: {
    ...SIZES,
    containerRadius: 24,
  },
};
