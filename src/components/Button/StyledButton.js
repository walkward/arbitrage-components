import styled, { css } from 'styled-components';
import { borderRadius, globalMargin } from '../../styles/theme';
import { body } from '../../styles/typography';
import * as colors from '../../styles/colors';

const { luminance } = colors;

const buttonStyles = css`
  display: inline-block;
  vertical-align: middle;
  margin: 0 0 ${globalMargin} 0;
  padding: 0.85em 1em;
  border: 1px solid transparent;
  border-radius: ${borderRadius};
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  font-family: inherit;
  font-size: 0.9rem;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  background-color: ${({ color }) => colors[color]};
  color: ${body.colorAlt};
  font-weight: 400;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({ color }) => luminance(colors[color], 0.15)};
  }
`;

const StyledButton = styled.button`
  ${buttonStyles};
`;

export default StyledButton;
