import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./../utils/utils";
import user from "./../reducers/user";
import styled from "styled-components";
import img from "./../img/therapist.jpg";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  const errorMessage = useSelector((store) => store.user.error);

  useEffect(() => {
    if (accessToken) {
      navigate("/booking");
    }
  }, [accessToken]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    };
    console.log({ name, password, email });
    fetch(API_URL(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setName(data.response.name));
            dispatch(user.actions.setEmail(data.response.email));
            dispatch(user.actions.setId(data.response.id));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(user.actions.setName(null));
            dispatch(user.actions.setId(null));
            dispatch(user.actions.setEmail(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response));
          });
        }
      });
  };
  return (
    <MainWrapper>
      <HeroBackgroundImg></HeroBackgroundImg>
      <FormWrapper>
        <Section>
          <Label htmlFor="register">
            <LabelText> S'enregistrer</LabelText>
            <input
              type="radio"
              id="register"
              checked={mode === "user/register"}
              onChange={() => setMode("user/register")}
            />
          </Label>
          <Label htmlFor="login">
            <LabelText> login</LabelText>
            <input
              type="radio"
              id="login"
              checked={mode === "login"}
              onChange={() => setMode("login")}
            />
          </Label>
        </Section>
        <Form onSubmit={onFormSubmit}>
          <label>
            Name:
            <Input
              type="text"
              placeholder="Identifiant"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <Input
            type="password"
            placeholder="Mot de passe"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Adresse email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Soumettre</Button>
          {errorMessage && (
            <TextError>
              {errorMessage?.length <= 0
                ? "You are not my clinet. Register here!"
                : errorMessage}
            </TextError>
          )}
        </Form>
      </FormWrapper>
    </MainWrapper>
  );
};

/**Styling  */
const MainWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
`;
const HeroBackgroundImg = styled.div`
  height: 100vh;
  width: 100vw;
  display: fixed;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const FormWrapper = styled.div`
  width: 35%;
  height: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #bfd6e1;
  font-family: "Inconsolata";
  font-size: 18px;
  border-radius: 8px;
  z-index: 28;
  position: absolute;
  top: 0;

  @media (width: 375px) {
    width: 70%;
    padding: 1rem;
    font-size: 18px;
    padding: 1rem;
  }
`;

const Label = styled.label`
  display: flex;

  input {
    font-family: "Inconsolata";
    font-size: 18px;
    width: 20px;
    border: 1px solid #252424;
    line-height: 20px;
    padding: 15px;
  }
  input::placeholder {
    padding-left: 4px;
  }
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  /* font-size: 18px; */
`;

const LabelText = styled.p`
  display: inline;
  margin-right: 10px;
  width: 80px;
  text-align: right;
  color: hsl(0deg 0% 13% / 80%);
  /* font-size: 18px; */
`;

const Button = styled.button`
  font-family: "Inconsolata";
  font-size: 18px;
  padding: 6px 15px;
  background: none;
  border: 2px solid rgb(66, 65, 66);
  width: 150px;
  margin: 15px 30px 30px;
  cursor: pointer;
  color: rgb(26, 0, 26);
  margin-top: 2rem;
  border-radius: 8px;
  font-weight: bold;
`;

const Section = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const Input = styled.input`
  width: 200px;
  height: 25px;
  border-radius: 8px;
  margin-bottom: 1.2rem;
`;
const TextError = styled.p`
  font-weight: bold;
  color: red;
`;

export default Login;
