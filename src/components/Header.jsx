import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import MediaQuery from 'react-responsive';
import theme from '../theme';
import { Link, OutboundLink } from './common';

const Header = () => (
  <HeaderWrapper>
    <div>
      <Link
        as={GatsbyLink}
        to="/"
        css={{
          fontSize: theme.fontSizes[4],
        }}
      >
        UseAnimations
      </Link>
    </div>

    <IconsWrapper>
      <MediaQuery minWidth={theme.breakpoints.small}>
        <Link
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            'UseAnimations – React micro-animations library by @phung_cz https://useanimations.com'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet
        </Link>
      </MediaQuery>

      <Link href="https://github.com/useAnimations/react-useanimations">GitHub</Link>
    </IconsWrapper>
  </HeaderWrapper>
);

export default Header;

const IconsWrapper = styled.div`
  display: flex;
  & > :not(:last-child) {
    margin-right: ${theme.space[5]};
  }
`;

const VersionNumber = styled(OutboundLink)`
  padding: ${`${theme.space[1]} ${theme.space[2]}`};
  margin-left: ${theme.space[2]};
  font-size: ${theme.fontSizes[1]};
  line-height: ${theme.lineHeights.tight};
  font-weight: ${theme.fontWeights.medium};
  text-decoration: none;
  color: ${theme.colors.gray[7]};
  background-color: ${theme.colors.gray[1]};
  border-radius: ${theme.radii[1]};
  &:hover {
    background-color: ${theme.colors.gray[2]};
  }
`;

const HeaderWrapper = styled.div`
  padding: ${`${theme.space[4]} ${theme.space[5]}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.white};
`;
