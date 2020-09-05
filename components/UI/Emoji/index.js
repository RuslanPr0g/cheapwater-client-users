import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const EmojiContainer = styled.em`
  background: url("./ImagesEmoji/${({ emojiName }) => emojiName}.png") no-repeat
    center;
  background-size: cover;

  display: inline-block;

  width: ${({ emojiSize }) => emojiSize}px;
  height: ${({ emojiSize }) => emojiSize}px;

  position: relative;
`;

const Emoji = ({ style, emojiSize, emojiName }) => {
  return (
    <EmojiContainer style={style} emojiSize={emojiSize} emojiName={emojiName} />
  );
};

Emoji.propTypes = {
  style: PropTypes.object,
  emojiSize: PropTypes.number,
  emojiName: PropTypes.string,
};

export default Emoji;
