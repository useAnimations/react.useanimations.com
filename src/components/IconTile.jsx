import React from 'react';
import { rgba } from 'polished';
import styled from 'styled-components';
import UseAnimations from 'react-useanimations';
import theme from '../theme';

const IconTile = ({ animationKey, ...other }) => (
  <IconWrapper role="button" tabIndex={0} {...other}>
    <AnimationWrapper className="icon-container">
      <Animation animationKey={animationKey} />
    </AnimationWrapper>
    <AnimationText>{animationKey}</AnimationText>
  </IconWrapper>
);

export default IconTile;

const Animation = styled(UseAnimations)`
  height: 32px;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: stretch;
  cursor: pointer;
  outline: 0;
  &:hover .icon-container {
    color: ${theme.colors.primary[0]};
    box-shadow: ${theme.shadows[2]};
  }
  &:focus .icon-container {
    box-shadow: ${`0 0 0 3px ${rgba(theme.colors.primary[0], 0.5)}`};
  }
`;

const AnimationWrapper = styled.div`
  width: 100%;
  padding: 24px 0;
  background-color: ${theme.colors.white};
  border-radius: 4px;
  margin-bottom: 8px;
  box-shadow: ${theme.shadows[1]};
`;

const AnimationText = styled.div`
  font-size: ${theme.fontSizes[1]};
  color: ${theme.colors.gray[8]};
`;
