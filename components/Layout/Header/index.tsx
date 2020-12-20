import styled from 'styled-components';
import Emoji from '../../UI/Emoji';
import Hamburger from '../../UI/SideDrawer/Hamburger';

const HeaderStyled = styled.header`
	width: 100%;
	height: 60px;

	display: flex;
	justify-content: center;
	align-items: center;
`;
const HeaderContainer = styled.div`
	width: 92%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	font-weight: 700;
`;
const Logo = styled.div`font-size: 22px;`;

const Header = () => {
	return (
		<HeaderStyled>
			<HeaderContainer>
				<Logo>
					CheapWater <Emoji emojiSize={25} emojiName="water-wave" />
				</Logo>
				<Hamburger />
			</HeaderContainer>
		</HeaderStyled>
	);
};

export default Header;
