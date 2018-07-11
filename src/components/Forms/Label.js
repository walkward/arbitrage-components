import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from './StyledLabel';

const Label = (props) => {
  const { htmlFor } = props;
  return (
    <StyledLabel htmlFor={htmlFor} />
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
};

// Label.defaultProps = {
//
// };

export default Label;
