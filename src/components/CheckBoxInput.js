import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxInput = ({ checked, handleClick, readOnly }) => (
  <input
    type="checkbox"
    checked={checked}
    onClick={handleClick}
    readOnly={readOnly}
  />
);

CheckBoxInput.propTypes = {
  handleClick: PropTypes.func,
  checked: PropTypes.bool,
  readOnly: PropTypes.bool,
};

CheckBoxInput.defaultProps = {
  handleClick: () => null,
  checked: false,
  readOnly: true,
};

export default CheckBoxInput;
