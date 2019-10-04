import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { Link, OutboundLink } from './common';

const Footer = () => (
  <FooterWrapper>
    <Link
      as={OutboundLink}
      href="https://twitter.com/phung_cz"
    >
      React library made by @phung_cz
    </Link>

    <Link
      as={OutboundLink}
      href="https://twitter.com/TheSvob"
    >
      All animations designed by @TheSvob
    </Link>
  </FooterWrapper>
);

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.space[5]};
  font-size: ${theme.fontSizes[1]};

  * > div {
    display: inline;
  }
`;
