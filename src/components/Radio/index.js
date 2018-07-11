import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import StyledInput from '../Input/StyledInput';
import StyledLabel from '../Label/StyledLabel';

const InlineFlex = styled(Flex)`
  display: inline-flex;
`;

const Radio = (props) => {
  const {
    type, name, label, value,
  } = props;
  const id = uniqueId(`${name}_`);
  return (
    <InlineFlex>
      <StyledInput type="radio" id={id} name={name} value={value} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </InlineFlex>
  );
};

Radio.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Radio.defaultProps = {
  type: 'text',
  label: '',
};

export default Radio;
