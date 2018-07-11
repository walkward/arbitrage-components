import React, { Children } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';

function Button({
  onClick, children, color, type, size, expanded, className,
}) {
  return (
    <StyledButton
      className={className}
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
  className: PropTypes.string,
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
  className: '',
};

export default Button;
