import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');
const guidelineBaseWidth = 412;

export const scaleSize = (size: number): number =>
  (width / guidelineBaseWidth) * size;

export const scaleFont = (size: number): number =>
  size * PixelRatio.getFontScale();
