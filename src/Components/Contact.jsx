import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import Validation from "./Validation";
import Footer from "./Footer";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
     center;
    background-color:#B6D0E2;
     display:flex;
     align-items:center;
     justify-content:center;
`;
const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
`;

const Contact = () => {
  return (
    <>
      {" "}
      <Validation />
      {/* <Container>
        <Wrapper>

        </Wrapper>
    </Container> */}
    </>
  );
};

export default Contact;
