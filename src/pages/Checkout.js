import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout(props) {
    return (
        <Container>
            <Navbar />
            <MainContainer>
                <CartContainer></CartContainer>
                <TotalPriceContainer>
                    <TotalPriceText>
                        Subtotal (4 items): <TotalPriceTextSpan>$1,206.93</TotalPriceTextSpan>
                    </TotalPriceText>
                    <CheckoutButton>Proceed to checkout</CheckoutButton>
                </TotalPriceContainer>
            </MainContainer>
            <Footer />
        </Container>
    );
}

export default Checkout;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #eaeded;
    min-height: 100vh;
`;

const MainContainer = styled.div`
    display: flex;
    margin: 20px;
    box-sizing: border-box;
    flex: 1;
    align-items: flex-start;
`;

const CartContainer = styled.div``;

const TotalPriceContainer = styled.div`
    padding: 18px;
    width: 300px;
    background-color: white;
    color: #0f1111;
`;

const TotalPriceText = styled.p`
    font-size: 18px;
    margin-bottom: 12px;
`;

const TotalPriceTextSpan = styled.span`
    font-weight: 700;
`;

const CheckoutButton = styled.button`
    width: 100%;
    background: #f0c14b;
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
    border-color: #a88734 #9c7e31 #846a29;
    border-width: 1px;
    border-style: solid;
    outline: none;
    cursor: pointer;
    padding: 7px 0;
    border-radius: 3px;
    margin-top: 8px;

    &:hover {
        background: linear-gradient(to bottom, #f5d78e, #eeb933);
    }
    &:active {
        background-color: #f0c14b;
        box-shadow: 0 1px 3px rgb(0 0 0 / 20%) inset;
    }
    &:focus {
        border-color: #e77600;
        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    }
`;
