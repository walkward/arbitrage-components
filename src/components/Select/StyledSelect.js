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

  &:not([multiple]) {
    padding-right: 1.5rem;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>");
    background-origin: content-box;
    background-position: right -1rem center;
    background-repeat: no-repeat;
    background-size: 9px 6px;
  }

  &[multiple] {
    height: auto;
  }

  &:focus {
    outline: none;
  }
`;

const StyledSelect = styled.select`
  ${selectStyles};
`;

export default StyledSelect;
