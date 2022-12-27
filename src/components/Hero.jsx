import React from 'react';
import Highlight from 'react-highlight.js';
import styled from 'styled-components';
import theme from '../theme';
import mediaQuery from '../utils/mediaQuery';
import { Button } from './common';

const highlitedContent = `
import React from "react";
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github'

const App = () => (
  <UseAnimations animation={github} size={56} style={{ padding: 100 }} />
);

`;

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
        href="https://github.com/useAnimations/react-useanimations"
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
        href="https://codesandbox.io/s/wonderful-architecture-9prk6"
        css={{
          color: theme.colors.gray[8],
          backgroundColor: 'transparent',
          boxShadow: `inset 0 0 0 1px ${theme.colors.gray[4]}`,
          '&:hover': {
            backgroundColor: theme.colors.gray[0],
          },
        }}
      >
        See example
      </Button>
    </div>
    <Highlight language="javascript">{highlitedContent}</Highlight>
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
