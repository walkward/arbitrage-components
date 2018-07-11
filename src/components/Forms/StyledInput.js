import styled, { css } from 'styled-components';
import { borderColor, borderRadius, globalMargin } from '../../styles/theme';

const inputStyles = css`
  line-height: 1.15;
  overflow: visible;
  
  &[type='text'],
  &[type='password'],
  &[type='date'],
  &[type='datetime'],
  &[type='datetime-local'],
  &[type='month'],
  &[type='week'],
  &[type='email'],
  &[type='number'],
  &[type='search'],
  &[type='tel'],
  &[type='time'],
  &[type='url'],
  &[type='color'] {
    display: block;
    width: 100%;
    margin: 0 0 ${globalMargin};
    padding: 0.5rem;
    border: 1px solid ${borderColor};
    border-radius: ${borderRadius};
    background-color: #fefefe;
    line-height: 1.5;
  }

  &[type='checkbox'],
  &[type='radio'] {
    display: inline-block;
    margin: 0 0 ${globalMargin};
    padding: 0;

    + label {
      display: inline-block;
      vertical-align: baseline;
      margin-left: 0.5rem;
      margin-right: ${globalMargin};
      margin-bottom: 0;
    }
  }
`;

const StyledInput = styled.input`
  ${inputStyles};
`;

export default StyledInput;
