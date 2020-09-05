import Head from "next/head";
import styled from "styled-components";

import Emoji from "../components/UI/Emoji";
import Container from "../components/UI/Container";

const LangHeadingContainer = styled.div`
  margin-top: 60px;
`;

const LangHeading = styled.p`
  text-align: center;

  &:first-child {
    font-size: 24px;
  }
  font-size: 20px;
`;

const LanguageIconsContainer = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;

  width: 100%;
`;

const LanguageIcon = styled.div`
  width: 55px;
  height: 55px;
`;

const Language = () => {
  const languagesInstructions = [
    "Выберите язык",
    "Оберіть мову",
    "Choose language",
  ];
  const urlIcons = ["flag-ukraine", "flag-united-kingdom", "flag-russia"];
  return (
    <>
      <LangHeadingContainer>
        {languagesInstructions.map((language, index) => {
          return <LangHeading key={index}>{language}</LangHeading>;
        })}
        <Container style={{ marginTop: `50px` }}>
          <LanguageIconsContainer>
            {urlIcons.map((icon, index) => {
              return (
                <LanguageIcon
                  key={index}
                  style={{
                    background: `url(/ImagesEmoji/${icon}.png) no-repeat center`,
                    backgroundSize: `cover`,
                  }}
                ></LanguageIcon>
              );
            })}
          </LanguageIconsContainer>
        </Container>
      </LangHeadingContainer>
    </>
  );
};

export default Language;
