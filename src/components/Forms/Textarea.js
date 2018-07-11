import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import StyledLabel from './StyledLabel';
import StyledTextarea from './StyledTextarea';

const Textarea = (props) => {
  const { name, label } = props;
  const id = `${name}Input`;
  return (
    <Box>
      <StyledLabel htmlFor={id} {...props}>
        {label}
        <StyledTextarea id={id} name={name} />
      </StyledLabel>
    </Box>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Textarea.defaultProps = {
  label: '',
};

export default Textarea;
