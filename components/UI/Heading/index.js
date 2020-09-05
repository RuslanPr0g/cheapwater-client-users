import styled from "styled-components";

const StyledHeading = styled.h1`
  width: 100%;

  font-size: 20px;
  text-align: center;

  color: rgba(0, 0, 0, 0.9);
`;

const Heading = ({ children, style }) => {
  return <StyledHeading style={style}>{children}</StyledHeading>;
};

export default Heading;
