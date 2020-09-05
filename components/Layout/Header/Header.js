import React from "react";
import styled from "styled-components";
import Emoji from "../../UI/Emoji";
import Hamburger from "../../UI/SideDrawer/Hamburger";

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
`;

const Logo = styled.div`
  position: absolute;
  top: 18px;
  left: 6%;

  font-size: 22px;
  font-weight: 700;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo>
          CheapWater <Emoji emojiSize={23} emojiName="water-wave" />
        </Logo>
        <Hamburger />
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
