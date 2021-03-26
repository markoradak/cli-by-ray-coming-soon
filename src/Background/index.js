import React from "react";
import styled from "styled-components";

import Desktop from "./Desktop";
import Mobile from "./Mobile.svg";

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

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${Mobile}) no-repeat center bottom / cover;
`;

const Background = () => (
  <Wrapper>
    <StyledDesktop />
  </Wrapper>
);

export default Background;
