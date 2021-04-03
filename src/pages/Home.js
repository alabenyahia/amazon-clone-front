import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function Home(props) {
    return (
        <Container>
            <Navbar />
        </Container>
    );
}

export default Home;

const Container = styled.div``;
