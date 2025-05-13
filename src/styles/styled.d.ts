import 'styled-components';
import {
  ColorTypes,
  FontSizeTypes,
  FontWeightTypes,
  SpacingTypes,
  BorderRadiusTypes,
  BreakpointTypes,
  ShadowTypes,
  ZIndexTypes,
  TransitionTypes,
} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorTypes;
    fontSize: FontSizeTypes;
    fontWeight: FontWeightTypes;
    spacing: SpacingTypes;
    borderRadius: BorderRadiusTypes;
    breakpoints: BreakpointTypes;
    shadow: ShadowTypes;
    zIndex: ZIndexTypes;
    transitions: TransitionTypes;
  }
}
