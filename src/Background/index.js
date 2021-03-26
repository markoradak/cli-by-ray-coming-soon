import React from "react";
import styled from "styled-components";

import Desktop from "./Desktop";
import Mobile from "./Mobile";

const StyledDesktop = styled(Desktop)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledMobile = styled(Mobile)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  @media (min-width: 600px) {
    display: none;
  }

  .strength1 {
    animation: move1 2000ms infinite alternate ease-in-out;
  }
  .strength2 {
    animation: move2 2000ms -300ms infinite alternate ease-in-out;
  }
  .strength3 {
    animation: move3 2000ms -600ms infinite alternate ease-in-out;
  }

  @keyframes move1 {
    100% {
      transform: translateY(-10px);
    }
  }

  @keyframes move2 {
    100% {
      transform: translateY(-20px);
    }
  }

  @keyframes move3 {
    100% {
      transform: translateY(-30px);
    }
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Background = () => (
  <Wrapper>
    <StyledDesktop />
    <StyledMobile />
  </Wrapper>
);

export default Background;
