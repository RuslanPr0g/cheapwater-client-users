import Head from "next/head";
import styled from "styled-components";

import Heading from "../components/UI/Heading";
import InputField from "../components/Ui/InputField";
import Emoji from "../components/UI/Emoji";
import MarginBlock from "../components/UI/MarginBlock";
import Button from "../components/UI/Button";

const FormContainer = styled.form`
  margin: 0 auto;
  width: 80%;
`;

const Or = styled.p`
  font-weight: 600;
  font-size: 12px;
  text-align: center;

  margin: 10px 0 8px 0;

  color: rgba(0, 85, 147, 0.8);
`;

const GoogleIcon = styled.em`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: calc(50% - 105px);

  width: 25px;
  height: 25px;
  background: url("/Images/google-logo.png") no-repeat center;
  background-size: cover;
`;

const Index = () => {
  return (
    <div>
      <Head>
        <title>Регистрация</title>
      </Head>
      <FormContainer>
        <MarginBlock height="70px"></MarginBlock>
        <Heading style={{ margin: "0 0 30px 0" }}>
          Пройдите быструю регистрацию{" "}
          <Emoji
            style={{ position: "relative", top: "3px" }}
            emojiSize={24}
            emojiName="grinning-face"
          />
        </Heading>
        <Button>
          <GoogleIcon></GoogleIcon>
          Log in with Google
        </Button>
        <Or>или</Or>
        <InputField
          name="email"
          placeholder="Email"
          style={{ margin: "0 0 16px 0" }}
        ></InputField>
        <InputField
          name="password"
          placeholder="Пароль"
          style={{ margin: "0 0 16px 0" }}
        ></InputField>
        <Button>
          <Emoji
            style={{ top: "3px" }}
            emojiSize={22}
            emojiName="right-arrow"
          />
        </Button>
      </FormContainer>
    </div>
  );
};

export default Index;
