import React, { Children } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';

function Button({ onClick, children, color }) {
  return (
    <StyledButton onClick={onClick} color={color}>
      {Children.toArray(children)}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  onClick: async () => null,
  color: 'primary',
};

export default Button;
