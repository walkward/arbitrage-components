import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { uniqueId } from 'lodash';
import StyledInput from '../Input/StyledInput';
import StyledLabel from '../Label/StyledLabel';

const InlineFlex = styled(Flex)`
  display: inline-flex;
`;

const CheckBox = ({
  checked, handleClick, readOnly, label,
}) => {
  const id = uniqueId('checkbox_');

  const input = (
    <StyledInput
      id={id}
      type="checkbox"
      checked={checked}
      onClick={handleClick}
      readOnly={readOnly}
    />
  );

  if (label) {
    return (
      <InlineFlex alignItems="center">
        {input}
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      </InlineFlex>
    );
  }

  return input;
};

CheckBox.propTypes = {
  handleClick: PropTypes.func,
  readOnly: PropTypes.bool,
  label: PropTypes.string,
};

CheckBox.defaultProps = {
  handleClick: () => null,
  readOnly: false,
  label: '',
};

export default CheckBox;
