import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import StyledInput from './StyledInput';
import StyledLabel from './StyledLabel';


const InlineFlex = styled(Flex)`
  display: inline-flex;
`;

const Radio = (props) => {
  const {
    type, name, label, value,
  } = props;
  const id = `${name}Input`;
  return (
    <InlineFlex>
      <StyledInput id={id} name={name} type={type} value={value} />
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
