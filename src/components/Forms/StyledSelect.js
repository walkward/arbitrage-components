import styled, { css } from 'styled-components';
import { borderColor, borderRadius, globalMargin } from '../../styles/theme';
import { white } from '../../styles/colors';

const selectStyles = css`
  margin: 0 0 ${globalMargin};
  padding: 0.5rem;
  appearance: none;
  border: 1px solid ${borderColor};
  border-radius: ${borderRadius};
  background-color: ${white};
  line-height: 1.5;
  background-origin: content-box;
  background-position: right -1rem center;
  background-repeat: no-repeat;
  background-size: 9px 6px;
  padding-right: 1.5rem;
`;

const StyledSelect = styled.select`
  ${selectStyles};
`;

export default StyledSelect;
