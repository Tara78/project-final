import styled from "styled-components";

export const MainCalendlar = styled.div`
  width: 100vw;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackHomeButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  cursor: pointer;
`;
export const Button = styled.button`
  font-family: "Inconsolata";
  padding: 6px 15px;
  font-weight: bold;
  font-size: 17px;
  background: none;
  outline: none;
  border: none;
  box-shadow: 0 9px #dcd4d4;
  background-color: #e2e6ed;
  width: 180px;
  height: 50px;
  cursor: pointer;
  color: rgb(21, 20, 21);
  border-radius: 8px;
  &:hover {
    background-color: #b2c0c8;
  }
  &:active {
    background-color: #97b0cc;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;