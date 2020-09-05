import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const Container = ({ children, style }) => {
  return <StyledContainer style={style}>{children}</StyledContainer>;
};

export default Container;
