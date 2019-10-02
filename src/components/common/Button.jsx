import styled from 'styled-components';
import theme from '../../theme';
import OutboundLink from './OutboundLink';

const Button = styled(OutboundLink)`
  display: inline-block;
  margin: 0;
  padding: ${`${theme.space[4]} ${theme.space[5]}`};
  font-size: ${theme.fontSizes[2]};
  font-weight: ${theme.fontWeights.medium};
  font-family: inherit;
  line-height: ${theme.lineHeights.none};
  text-align: center;
  text-decoration: none;
  border: 0;
  border-radius: ${theme.radii[1]};
  appearance: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export default Button;
