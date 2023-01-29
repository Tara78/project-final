import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/utils";
import user from "../../reducers/user";
import styled from "styled-components";
import img from "./../../img/therapist.jpg";
import {MainWrapper, FormWrapper, Label, Form, LabelText, Button, Section, Input, TextError } from "./Login.styles"

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("login");

  /*
a.Selector fetch data from store, 
b.Action,update store and changing data,
c.Reducer, dispatch and update store
*/

  const accessToken = useSelector((store) => store.user.accessToken);
  const errorMessage = useSelector((store) => store.user.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // update store
  useEffect(() => {
    if (accessToken) {
      navigate("/booking");
    }
  }, [accessToken, navigate]);

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
          <Input
            type="text"
            placeholder=" Identifiant"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="password"
            placeholder=" Mot de passe"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="email"
            placeholder=" Adresse email"
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

 const HeroBackgroundImg = styled.div`
   height: 100vh;
   width: 100vw;
   display: fixed;
   background-image: url(${img});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
 `;


export default Login;
