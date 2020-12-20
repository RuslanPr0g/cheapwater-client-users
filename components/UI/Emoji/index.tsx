import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const EmojiContainer = styled.em`
	background: url('./ImagesEmoji/${({ emojiName }) => emojiName}.png') no-repeat center; 
	background-size: cover;

  display: inline-block;

  width: ${({ emojiSize }) => emojiSize}px;
  height: ${({ emojiSize }) => emojiSize}px;

`;

const Emoji = ({ emojiSize, emojiName }) => {
	return <EmojiContainer emojiSize={emojiSize} emojiName={emojiName} />;
};

Emoji.propTypes = {
	emojiSize: propTypes.number,
	emojiName: propTypes.string
};

export default Emoji;
