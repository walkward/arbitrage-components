import React, { Children } from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
  <div>
    {Children.toArray(children)}
    <hr style={{ marginLeft: '-1rem', marginRight: '-1rem' }} />
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

// Content.defaultProps = {
//
// };

export default Content;
