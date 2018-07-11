import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import StyledInput from './StyledInput';
import StyledLabel from './StyledLabel';

const Input = (props) => {
  const { type, name, label } = props;
  const id = `${name}Input`;
  return (
    <Box>
      <StyledLabel htmlFor={id}>
        {label}
        <StyledInput id={id} name={name} type={type} />
      </StyledLabel>
    </Box>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  label: '',
};

export default Input;
