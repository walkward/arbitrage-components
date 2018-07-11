import styled, { css } from 'styled-components';
import { borderColor, borderRadius, globalMargin } from '../../styles/theme';

const textareaStyles = css`
  display: block;
  width: 100%;
  margin: 0 0 ${globalMargin};
  padding: 0.5rem;
  border: 1px solid ${borderColor};
  border-radius: ${borderRadius};
  background-color: #fefefe;
  line-height: 1.5;
`;

const StyledTextarea = styled.textarea`
  ${textareaStyles};
`;

export default StyledTextarea;
