import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import StyledSelect from './StyledSelect';
import StyledLabel from './StyledLabel';

const Option = ({ text, value }) => (
  <option value={value}>{text}</option>
);

const Select = (props) => {
  const {
    options, name, label, multiple,
  } = props;
  const id = `${name}Input`;
  const optionsRenedered = options.map(p => (<Option key={p.value} {...p} />));
  return (
    <Box>
      <StyledLabel htmlFor={id}>
        {label}
        <StyledSelect name={name} multiple={multiple}>
          {optionsRenedered}
        </StyledSelect>
      </StyledLabel>
    </Box>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool,
};

Select.defaultProps = {
  label: '',
  multiple: false,
};

Option.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
