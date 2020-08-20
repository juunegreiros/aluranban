import React from 'react';
import propTypes from 'prop-types';

import { FieldWrapper, Label, Input } from './style';

const FormField = ({ label, onChange, value, type }) => (
  <FieldWrapper>
    <Label>{label}</Label>

    <Input type={type} value={value} onChange={onChange} />
  </FieldWrapper>
);

FormField.defaultProps = {
  type: 'text',
};

FormField.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  type: propTypes.string,
};

export default FormField;
