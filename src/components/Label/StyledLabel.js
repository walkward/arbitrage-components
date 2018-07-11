import styled, { css } from 'styled-components';
// import { borderColor, borderRadius, globalMargin } from '../../styles/theme';

const labelStyles = css`
  display: block;
  font-size: 0.875rem;
  line-height: 1.8;
`;

const StyledLabel = styled.label`
  ${labelStyles};
`;

export default StyledLabel;
