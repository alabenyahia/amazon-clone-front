import React, { useContext, useState } from "react";
import styled from "styled-components";
import Dark from "../imgs/dark-logo.svg";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
function Navbar(props) {
    const { user, isAuthenticated, logout } = useContext(GlobalContext);
    const [search, setSearch] = useState("");
    const history = useHistory();
    const handleSignInOut = () => {
        if (isAuthenticated) logout();
        else history.push("/login");
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (search.length > 0) {
            history.push(`/search/${search}`);
            setSearch("");
        }
    };
    return (
        <Container>
            <LogoContainer onClick={() => history.push("/")}>
                <LogoImg src={Dark} />
            </LogoContainer>
            <SearchBarForm onSubmit={handleSearchSubmit}>
                <SearchBarInput
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <SearchBarButton type="submit">
                    <i className="material-icons" style={{ fontSize: "28px" }}>
                        search
                    </i>
                </SearchBarButton>
            </SearchBarForm>
            <SignInContainer>
                <SignInMain>
                    <SignInTopText>
                        Hello,{" "}
                        {user !== null && user.hasOwnProperty("name") ? user.name : "Sign in"}
                    </SignInTopText>
                    <SignInBottomText>Account & Lists</SignInBottomText>
                </SignInMain>

                <DropDownContainer>
                    <DropDownSignInBtn onClick={handleSignInOut}>
                        {isAuthenticated ? "Sign out" : "Sign in"}
                    </DropDownSignInBtn>
                    {!isAuthenticated && (
                        <DropDownRegisterText>
                            New customer?
                            <DropDownRegisterBtn onClick={() => history.push("/register")}>
                                Start here.
                            </DropDownRegisterBtn>
                        </DropDownRegisterText>
                    )}
                </DropDownContainer>
                <DropDownTriangle />
            </SignInContainer>
            <CartContainer onClick={() => history.push("/checkout")}>
                <CartIconContainer>
                    <i className="material-icons">shopping_cart</i>
                </CartIconContainer>
                <CartTextContainer>{user.cart.length}</CartTextContainer>
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

const SignInMain = styled.div`
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
    display: none;
    width: 180px;
    border-radius: 2px;
    position: absolute;
    background-color: white;
    color: #0f1111;
    left: -15%;
    top: 47px;
    padding: 14px;
    text-align: center;
    -webkit-box-shadow: 0 5px 16px 2px rgba(0, 0, 0, 0.26);
    -moz-box-shadow: 0 5px 16px 2px rgba(0, 0, 0, 0.26);
    box-shadow: 0 5px 16px 2px rgba(0, 0, 0, 0.26);
`;

const DropDownSignInBtn = styled.button`
    width: 120px;
    background: #f0c14b;
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
    border-color: #a88734 #9c7e31 #846a29;
    border-width: 1px;
    border-style: solid;
    outline: none;
    cursor: pointer;
    padding: 7px 0;
    border-radius: 3px;
    font-size: 12px;

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
const DropDownRegisterText = styled.div`
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    margin-top: 10px;
`;
const DropDownRegisterBtn = styled.button`
    background: none;
    outline: none;
    border: none;
    font-size: 12px;
    color: #0066c0;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const DropDownTriangle = styled.div`
    display: none;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 9px solid white;
    position: absolute;
    top: 38px;
    left: 50%;
`;

const SignInContainer = styled.div`
    position: relative;
    &:hover {
        & ${DropDownContainer}, & ${DropDownTriangle} {
            display: block;
        }
    }
`;
