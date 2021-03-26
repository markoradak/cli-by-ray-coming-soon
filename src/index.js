import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";

import Background from "./Background";
import Logo from "./Logo";

const GlobalStyle = createGlobalStyle`${reset}`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Text = styled.p`
  color: #aca3a3;
  font-family: "Sofia Pro", "Avenir Next", "Montserrat", "Helvetica Neue",
    "Helvetica", sans-serif;
  z-index: 1;
  max-width: 400px;
  text-align: center;
  margin: 30px 0;
  line-height: 135%;
  pointer-events: none;
`;

const Button = styled.a`
  background: #aca3a3;
  font-family: "Sofia Pro", "Avenir Next", "Montserrat", "Helvetica Neue",
    "Helvetica", sans-serif;
  color: white;
  font-size: 14px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 16px 32px;
  border-radius: 100px;
  z-index: 1;

  cursor: pointer;
  transition: opacity 500ms;
  &:hover {
    opacity: 0.7;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Background />
        <Logo />
        <Text>
          We can’t wait to be with you! Feel free to follow us and be the first
          to hear once we launch!
        </Text>
        <Button href="https://instagram.com/lovebyray">Follow Us</Button>
      </Wrapper>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
