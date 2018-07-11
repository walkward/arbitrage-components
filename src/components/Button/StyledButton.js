import styled, { css } from 'styled-components';
import { borderRadius } from '../../styles/theme';
import { body } from '../../styles/typography';
import * as colors from '../../styles/colors';

const { luminance } = colors;

const settings = {
  hoverColor: -0.15,
  sizes: {
    tiny: '0.6rem',
    small: '0.75rem',
    default: '0.9rem',
    large: '1.25rem',
  },
};

const buttonStyles = css`
  display: inline-block;
  vertical-align: middle;
  margin: 0;
  padding: 0.85em 1em;
  border-style: solid;
  border-color: ${({ type, color }) => (type === 'outline' ? colors[color] : 'transparent')};
  border-width: 2px;
  border-radius: ${borderRadius};
  transition: background-color 0.25s ease-out, color 0.25s ease-out;
  font-family: inherit;
  font-size: ${({ size }) => settings.sizes[size]};
  line-height: 1;
  text-align: center;
  cursor: pointer;
  background-color: ${({ color, type }) => (type === 'default' ? colors[color] : 'transparent')};
  color: ${({ type, color }) => (type === 'default' ? body.colorAlt : colors[color])};
  font-weight: 400;
  width: ${({ expanded }) => (expanded === true ? '100%' : 'auto')};
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${({ color, type }) => (type !== 'default' ? luminance(colors[color], settings.hoverColor) : body.colorAlt)};
    border-color: ${({ color, type }) => (type === 'outline' ? luminance(colors[color], settings.hoverColor) : 'transparent')};
    background-color: ${({ color, type }) => (type === 'default' ? luminance(colors[color], settings.hoverColor) : 'transparent')};
  }
`;

const StyledButton = styled.button`
  ${buttonStyles};
`;

export default StyledButton;
