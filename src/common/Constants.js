import {
  Platform,
  Dimensions,
  PixelRatio
} from 'react-native';

const PLATFORM_OS = Platform.OS;
const DEVICE = Dimensions.get('window');

// system os
const IS_IOS = PLATFORM_OS === 'ios';
const IS_ANDROID = PLATFORM_OS === 'android';

// device size
const DEVICE_WIDTH = DEVICE.width;
const DEVICE_HEIGHT = DEVICE.height;

const PX_RATIO = IS_ANDROID && PixelRatio.get() > 2 ? 2 : PixelRatio.get();

export const Constants = {
  IS_IOS,
  IS_ANDROID,
  DEVICE_WIDTH,
  DEVICE_HEIGHT,
  PX_RATIO
};