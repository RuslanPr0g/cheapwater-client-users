import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMarginBlock = styled.div`
  width: 100%;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const MarginBlock = ({ width, height }) => {
  return <StyledMarginBlock width={width} height={height}></StyledMarginBlock>;
};

MarginBlock.propTypes = {
  width: PropTypes.number,
  height: PropTypes.string.isRequired,
};
export default MarginBlock;
