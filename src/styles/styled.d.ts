import {
  ColorTypes,
  FontSizeTypes,
  FontWeightTypes,
  DeviceWidthTypes,
  SpacingTypes,
  BorderRadiusTypes,
  ShadowTypes,
} from './theme';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
    deviceWidth: DeviceWidthTypes;
    spacing: SpacingTypes;
    borderRadius: BorderRadiusTypes;
    shadow: ShadowTypes;
  }
}
