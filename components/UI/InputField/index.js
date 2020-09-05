import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputFieldStyled = styled.input`
  width: 100%;
  height: 40px;

  border: none;
  outline: none;

  background: #cbe9ff;
  border-radius: 100px;

  padding: 0 0 0 25px;

  font-size: 16px;
`;

const InputField = ({ name, placeholder, style }) => {
  return (
    <InputFieldStyled
      type="text"
      name={name}
      placeholder={placeholder}
      style={style}
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
