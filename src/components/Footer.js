import React from "react";
import styled from "styled-components";

function Footer(props) {
    return <Container>© 2021, Amazon clone, by Ala ben yahia</Container>;
}

export default Footer;

const Container = styled.footer`
    background: #fbfbfb;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(251, 251, 251, 1) 25%,
        rgba(251, 251, 251, 1) 75%,
        rgba(0, 0, 0, 0) 100%
    );
    color: #555;
    font-size: 11px;
    text-align: center;
    width: 100%;
    padding: 12px;
`;
