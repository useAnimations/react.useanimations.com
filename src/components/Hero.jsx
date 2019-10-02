import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import logDownload from '../utils/logDownload';
import logOutboundLink from '../utils/logOutboundLink';
import mediaQuery from '../utils/mediaQuery';
import { Button } from './common';

const Hero = () => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.space[8]} ${theme.space[5]} ${theme.space[9]}`,
      backgroundColor: theme.colors.white,
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
      [mediaQuery(theme.breakpoints.small)]: {
        padding: `${theme.space[9]} ${theme.space[5]} ${theme.space[10]}`,
      },
    }}
  >
    <Title>React micro-animations library</Title>

    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        '& > :not(:last-child)': {
          marginBottom: theme.space[4],
        },
        [mediaQuery(theme.breakpoints.small)]: {
          flexDirection: 'row',
          '& > :not(:last-child)': {
            marginRight: theme.space[4],
            marginBottom: 0,
          },
        },
      }}
    >
      <Button
        href="https://github.com/useanimations/feather#feather"
        onClick={() => logOutboundLink('get started')}
        css={{
          color: theme.colors.white,
          backgroundColor: theme.colors.primary[0],
          '&:hover': {
            backgroundColor: theme.colors.primary[1],
          },
        }}
      >
        Get Started
      </Button>
      <Button
        href="/feather.zip"
        onClick={() => logDownload('all')}
        download
        css={{
          color: theme.colors.gray[8],
          backgroundColor: 'transparent',
          boxShadow: `inset 0 0 0 1px ${theme.colors.gray[4]}`,
          '&:hover': {
            backgroundColor: theme.colors.gray[0],
          },
        }}
      >
        Download All
      </Button>
    </div>
  </div>
);

export default Hero;

const Title = styled.div`
  margin: 0 0 ${theme.space[5]};
  font-size: ${theme.fontSizes[6]};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.tight};
  text-align: center;
`;
