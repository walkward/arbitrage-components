import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div>
    <h4>{title}</h4>
    <hr style={{ marginLeft: '-1rem', marginRight: '-1rem' }} />
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

// Title.defaultProps = {
//
// };

export default Title;
