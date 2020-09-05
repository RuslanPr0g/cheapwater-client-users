import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 40px;

  background: #95d2ff;
  box-shadow: 0px 3px 0px rgba(91, 186, 255, 0.9);
  border-radius: 100px;

  border: none;
  outline: none;

  font-weight: 600;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);

  position: relative;
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
