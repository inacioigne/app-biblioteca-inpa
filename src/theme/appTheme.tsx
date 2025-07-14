'use client'
import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import { colorSchemes, shadows, shape, typography } from './themePrimitives';
import { inputsCustomizations } from './customizations/inputs';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
// import { feedbackCustomizations } from './customizations/feedback';
// import { navigationCustomizations } from './customizations/navigation';
// import { surfacesCustomizations } from './customizations/surfaces';
// import { themeComponents } from './customizations/themeComponents';



const appTheme: ThemeOptions = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-mui-color-scheme',
    cssVarPrefix: 'template',
  },
  colorSchemes,
  typography,
  shadows,
  shape,
  components: {
    ...inputsCustomizations,
    ...dataDisplayCustomizations
    // ...feedbackCustomizations,
    // ...navigationCustomizations,
    // ...surfacesCustomizations,
    // ...themeComponents,
  },
});



export default appTheme
