import { createGlobalStyle } from 'styled-components';
import theme from '../theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: ${theme.fonts.sansSerif};
    line-height: ${theme.lineHeights.normal};
    color: ${theme.colors.gray[8]};
    background-color: ${theme.colors.gray[0]};
  }
`;

export default GlobalStyles;
