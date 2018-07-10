import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <div>
    <button type="button">
      {text}
    </button>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
