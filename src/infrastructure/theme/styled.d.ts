import "styled-components";

import { theme } from "./index";

type DefaultThemeInternal = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeInternal {}
}
