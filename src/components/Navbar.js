import React, { useContext } from "react";
import styled from "styled-components";
import Dark from "../imgs/dark-logo.svg";
import { GlobalContext } from "../context/GlobalState";

function Navbar(props) {
    const { user } = useContext(GlobalContext);
    return (
        <Container>
            <LogoContainer>
                <LogoImg src={Dark} />
            </LogoContainer>
            <SearchBarForm>
                <SearchBarInput type="text" />
                <SearchBarButton type="submit">
                    <i className="material-icons" style={{ fontSize: "28px" }}>
                        search
                    </i>
                </SearchBarButton>
            </SearchBarForm>
            <SignInContainer>
                <SignInTopText>
                    Hello, {user !== null && user.hasOwnProperty("name") ? user.name : "Sign in"}
                    <DropDownContainer>
                        <DropDownSignInBtn>Sign in</DropDownSignInBtn>
                        <DropDownRegisterText>
                            New customer?
                            <DropDownRegisterBtn>Start here.</DropDownRegisterBtn>
                        </DropDownRegisterText>
                    </DropDownContainer>
                    <DropDownTriangle />
                </SignInTopText>
                <SignInBottomText>Account & Lists</SignInBottomText>
            </SignInContainer>
            <CartContainer>
                <CartIconContainer>
                    <i className="material-icons">shopping_cart</i>
                </CartIconContainer>
                <CartTextContainer>Cart</CartTextContainer>
            </CartContainer>
        </Container>
    );
}

export default Navbar;

const Container = styled.nav`
    background-color: #131921;
    color: white;
    height: 60px;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    z-index: 100;
    font-size: 14px;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 10px 0 20px;
    cursor: pointer;
    height: 48px;
    padding: 8px;
    border: 1px solid transparent;
    &:hover {
        border-color: white;
        border-radius: 2px;
    }
`;

const LogoImg = styled.img`
    height: 100%;
    object-fit: contain;
`;

const SearchBarForm = styled.form`
    flex: 1;
    display: flex;
    height: 40px;
    border-radius: 3px;
    background-color: white;
    margin: 0 10px;
    &:focus-within {
        box-shadow: 0 0 0 2px #f90, 0 0 0 3px rgba(255, 153, 0, 0.5);
    }
`;
const SearchBarInput = styled.input`
    flex: 1;
    height: 100%;
    padding: 8px 12px;
    color: #111;
    outline: none;
    border: none;
    background: transparent;
`;
const SearchBarButton = styled.button`
    height: 100%;
    width: 45px;
    cursor: pointer;
    padding: 8px;
    border: none;
    outline: none;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #febd69;
    &:hover {
        background-color: #f3a847;
    }
`;
const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 15px;
    margin: 0 10px;
    cursor: pointer;
    padding: 8px;
    border: 1px solid transparent;
    &:hover {
        border-color: white;
        border-radius: 2px;
    }
`;
const SignInTopText = styled.span`
    font-size: 12px;
    font-weight: 400;
    position: relative;
`;
const SignInBottomText = styled.span`
    font-weight: 700;
`;
const CartContainer = styled.div`
    margin: 0 20px 0 10px;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    &:hover {
        border-color: white;
        border-radius: 2px;
    }
`;
const CartIconContainer = styled.div``;
const CartTextContainer = styled.div`
    font-weight: 700;
    margin-left: 4px;
`;

const DropDownContainer = styled.div`
    width: 180px;
    border-radius: 2px;
    position: absolute;
    background-color: white;
    color: #0f1111;
    left: -30%;
    top: 42px;
`;

const DropDownSignInBtn = styled.button`
    background: none;
    outline: none;
    border: none;
`;
const DropDownRegisterText = styled.div`
    font-size: 12px;
    font-weight: 400;
`;
const DropDownRegisterBtn = styled.button`
    background: none;
    outline: none;
    border: none;
`;

const DropDownTriangle = styled.div`
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 9px solid white;
    position: absolute;
    top: 33px;
    left: 50%;
`;
