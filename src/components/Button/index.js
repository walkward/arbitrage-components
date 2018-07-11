import React, { Children } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';

function Button({
  onClick, children, color, type, size, expanded,
}) {
  return (
    <StyledButton
      onClick={onClick}
      expanded={expanded}
      color={color}
      type={type}
      size={size}
    >
      {Children.toArray(children)}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'warning',
    'alert',
    'success',
  ]),
  type: PropTypes.oneOf([
    'default',
    'hollow',
    'outline',
  ]),
  size: PropTypes.oneOf([
    'tiny',
    'small',
    'default',
    'large',
  ]),
};

Button.defaultProps = {
  onClick: async () => null,
  color: 'primary',
  type: 'default',
  size: 'default',
  expanded: false,
};

export default Button;
