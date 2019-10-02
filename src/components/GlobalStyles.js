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

  code.javascript.hljs {
    border-radius: 8px;
    padding: 8px 16px;
    margin-top: 32px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export default GlobalStyles;
