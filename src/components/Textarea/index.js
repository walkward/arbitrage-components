import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import { uniqueId } from 'lodash';
import StyledLabel from '../Label/StyledLabel';
import StyledTextarea from './StyledTextarea';

const Textarea = (props) => {
  const { name, label } = props;
  const id = uniqueId(`${name}_`);
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
