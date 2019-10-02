import React, { useState } from 'react';
import { rgba } from 'polished';
import styled from 'styled-components';
import UseAnimations from 'react-useanimations';
import { HexColorNotification } from './common';
import theme from '../theme';

const IconTile = ({ animationKey, ...other }) => {
  const [isActive, setIsActive] = useState(false);
  const handleNotification = () => {
    if (isActive === false) {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 2000);
    }
  };

  return (
    <IconWrapper role="button" tabIndex={0} {...other} onClick={handleNotification}>
      <AnimationWrapper className="icon-container">
        <Animation animationKey={animationKey} />
      </AnimationWrapper>
      <AnimationText>{animationKey}</AnimationText>
      <HexColorNotification isActive={isActive} coppiedValue={animationKey} />
    </IconWrapper>
  );
};

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
