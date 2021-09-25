/* eslint-disable*/
import styled from "styled-components";
import React from "react";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  /* min-height: calc(100vh - 250px); */
  /* min-height: 100vh; */
  overflow-x: hidden;
  display: block;
  top: 5rem;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;

/* eslint-disable*/
