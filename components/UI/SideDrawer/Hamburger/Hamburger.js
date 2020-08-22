import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
	position: ${({ showSideDrawer }) => (showSideDrawer ? 'fixed' : 'absolute')};
	top: 16px;
	right: 8%;

	width: 32px;
	height: 30px;
  
	z-index: 100000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all 0.3s ease;
	/* ${(props) => props.showModalFeedback && 'display: none'}; */
`;
const StyledDash = styled.div`
	width: 100%;
	height: 3px;
	background: rgba(0, 0, 0, 0.8);

	transition: all 0.5s ease-in-out;

	${({ showSideDrawer }) => showSideDrawer && 'transform: translate(0,0);background: transparent'};

	&,
	&::before,
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 3px;
		transition: all 0.3s ease;
	}
	&::before {
		${({ showSideDrawer }) =>
			showSideDrawer ? 'transform: rotate(45deg) translate(0, 0)' : 'transform: translate(0, -8px)'};
		background: rgba(0, 0, 0, 0.8);
	}
	&::after {
		${({ showSideDrawer }) =>
			showSideDrawer ? 'transform: rotate(-45deg) translate(0, 0)' : 'transform: translate(0, 8px)'};
		background: rgba(0, 0, 0, 0.8);
	}
`;

const Hamburger = ({ showSideDrawer }) => {
	return (
		<StyledHamburger
			// onClick={(props.clickModalSideDrawer, props.clickModalSideDrawer)}
			showSideDrawer={showSideDrawer}>
			<StyledDash showSideDrawer={showSideDrawer} />
		</StyledHamburger>
	);
};

export default Hamburger;
