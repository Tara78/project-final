import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { API_URL } from "./../utils/utils";
import user from "./../reducers/user";
import styled from "styled-components";


const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Mode varable would be login or register - depend on endpoint (loging or register)- Put default to login
  const [mode, setMode] = useState("login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  const errorMessage = useSelector((store) => store.user.error);

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  },
   [accessToken]
   );

  const onFormSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    };
    fetch(API_URL(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            // Dispatch excuting the Action
            dispatch(user.actions.setName(data.response.name));
            dispatch(user.actions.setId(data.response.id));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(user.actions.setName(null));
            dispatch(user.actions.setId(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response));
          });
        }
      });
  };
  return (
    <MainWrapper>

      <FormWrapper>
        <Section>
          <Label htmlFor="register">
            <LabelText> Register</LabelText>
            <input
              type="radio"
              id="register"
              checked={mode === "register"}
              onChange={() => setMode("register")}
            />
          </Label>
          <Label htmlFor="login">
            <LabelText> Login</LabelText>
            <input
              type="radio"
              id="login"
              checked={mode === "login"}
              onChange={() => setMode("login")}
            />
          </Label>
        </Section>
        <Form onSubmit={onFormSubmit}>
          <Label htmlFor="name">
            <LabelText> Username</LabelText>
          </Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor="password">
            <LabelText>Password</LabelText>
          </Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Submit</Button>
          <TextError>
            <span>{errorMessage && errorMessage}</span>
          </TextError>
        </Form>
      </FormWrapper>
    </MainWrapper>
  );
};

export default Login;


/**Styling  */
const MainWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
 
`;

const FormWrapper = styled.div`
  width: 45%;
  height: 25%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d0d4d6;
  font-family: "Inconsolata";
  font-size: 18px;
  border-radius: 8px;
`;


const Label = styled.label`
  display: flex;

  input {
    font-family: "Inconsolata";
    width: 20px;
    border: 1px solid #000;
    line-height: 20px;
    padding: 5px;
   
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const LabelText = styled.p`
  display: inline;
  margin-right: 10px;
  width: 80px;
  text-align: right;
  color:hsl(0deg 0% 13% / 80%);
  
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

const Input= styled.input`
width: 200px;
height: 25px;
border-radius: 8px;
`
const TextError= styled.p`
font-weight: bold;
color:red;
`