import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

const row = props => (
  <Flex
    {...props}
    flexWrap="wrap"
    px={2}
  />
);

export const Row = styled(row)`
  max-width: 1024px;
`;

export const Column = props => (
  <Box
    {...props}
    px={2}
  />
);

// const container = props => (
//   <Box
//     {...props}
//     px={3}
//   />
// );
//
// export const Container = styled(container)`
//   max-width: 1024px;
// `;

Row.propTypes = {
  mx: PropTypes.string,
};

Row.defaultProps = {
  mx: 'auto',
};
