import React, { Children } from 'react';
import PropTypes from 'prop-types';

import StyledButtonGroup from './StyledButtonGroup';

function ButtonGroup(props) {
  const { children } = props;
  return (
    <StyledButtonGroup {...props}>
      {Children.toArray(children)}
    </StyledButtonGroup>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
