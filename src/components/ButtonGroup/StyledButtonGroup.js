import styled, { css } from 'styled-components';
import { Flex } from 'grid-styled';
import { globalMargin } from '../../styles/theme';
import { divide } from '../../styles/utils';

const buttonGroupStyles = css`
  > button {
    margin-right: ${divide(globalMargin, 2)};

    &:last-child {
      margin-right: 0;
    }
  }
`;

const StyledButtonGroup = styled(Flex)`
  ${buttonGroupStyles};
`;

export default StyledButtonGroup;
