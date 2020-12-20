import React from 'react';
import styled from 'styled-components';

const MainStyled = styled.main`
	min-height: 100%;
	width: 100%;

	@media (max-device-width: 350px) {
		background: red;
	}
`;

const Main = ({ children }) => {
	return <MainStyled>{children}</MainStyled>;
};

export default Main;
