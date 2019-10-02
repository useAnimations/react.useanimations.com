import styled from 'styled-components';
import OutboundLink from './OutboundLink';
import theme from '../../theme';

const Link = styled(OutboundLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${theme.colors.primary[0]};
  }
`;

export default Link;
