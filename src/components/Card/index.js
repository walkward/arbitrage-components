import React, { Children } from 'react';
import PropTypes from 'prop-types';

import StyledCard from './StyledCard';

function Card(props) {
  const { children } = props;
  return (
    <StyledCard {...props}>
      {Children.toArray(children)}
    </StyledCard>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
