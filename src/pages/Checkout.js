import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import CurrencyFormat from "react-currency-format";

function Checkout(props) {
    const { user, clearCart } = useContext(GlobalContext);
    return (
        <Container>
            <Navbar />
            <MainContainer isEmptyCart={user.cart.length === 0}>
                <CartContainer>
                    <TopCartContainer>
                        <CartH3>
                            {user.cart.length > 0 ? "Shopping Cart" : "Your Amazon Cart is empty"}
                        </CartH3>
                        {user.cart.length > 0 && (
                            <EmptyCartBtn onClick={() => clearCart()}>Clear cart</EmptyCartBtn>
                        )}
                    </TopCartContainer>

                    {user.cart.length > 0 &&
                        user.cart.map((product) => <CartProduct {...product} />)}

                    <CartPriceTextContainer>
                        {user.cart.length > 0 && (
                            <TotalPriceText>
                                Subtotal ({user.cart.length} items):{" "}
                                <TotalPriceTextSpan>
                                    <CurrencyFormat
                                        value={user.cart.reduce(
                                            (accumulator, currVal) => accumulator + currVal.price,
                                            0
                                        )}
                                        displayType="text"
                                        thousandSeparator={true}
                                        decimalScale={2}
                                        prefix={"$"}
                                    />
                                </TotalPriceTextSpan>
                            </TotalPriceText>
                        )}
                    </CartPriceTextContainer>
                </CartContainer>
                {user.cart.length > 0 && (
                    <TotalPriceContainer>
                        <TotalPriceText>
                            Subtotal ({user.cart.length} items):{" "}
                            <TotalPriceTextSpan>
                                <CurrencyFormat
                                    value={user.cart.reduce(
                                        (accumulator, currVal) => accumulator + currVal.price,
                                        0
                                    )}
                                    displayType="text"
                                    thousandSeparator={true}
                                    decimalScale={2}
                                    prefix={"$"}
                                />
                            </TotalPriceTextSpan>
                        </TotalPriceText>
                        <CheckoutButton>Proceed to checkout</CheckoutButton>
                    </TotalPriceContainer>
                )}
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

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

const CartContainer = styled.div`
    background-color: white;
    flex: 1;
    color: #0f1111;
    padding: 30px 15px;
    @media screen and (max-width: 900px) {
        flex: 0;
        width: 100%;
        margin-top: 20px;
        order: 2;
    }
`;

const TopCartContainer = styled.div`
    padding-bottom: 18px;
    border-bottom: 1px solid #ddd;
`;

const CartH3 = styled.h3`
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 8px;
`;

const EmptyCartBtn = styled.button`
    background: none;
    border: none;
    outline: none;
    color: #007185;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const CartPriceTextContainer = styled.div`
    padding-top: 8px;
    text-align: right;
`;

const TotalPriceContainer = styled.div`
    padding: 18px;
    width: 300px;
    background-color: white;
    color: #0f1111;
    margin-left: 20px;

    @media screen and (max-width: 900px) {
        width: 100%;
        margin: 0;
        order: 1;
    }
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
    max-width: 350px;
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
