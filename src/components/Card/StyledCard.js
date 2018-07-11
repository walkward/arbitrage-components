// Example
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { white } from '../../styles/colors';
import {
  globalPadding, globalShadow, borderRadius, globalMargin,
} from '../../styles/theme';

const StyledCard = styled(Box)`
  background-color: ${white};
  padding: ${globalPadding};
  box-shadow: ${globalShadow};
  border-radius: ${borderRadius};
  margin-bottom: ${globalMargin};
`;

export default StyledCard;
