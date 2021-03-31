import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginUser, loginValidationError, resetError } = useContext(GlobalContext);

    const handleLogin = (e) => {
        e.preventDefault();
        resetError();
        console.log(password);
        loginUser({ email, password });
    };

    return (
        <Container>
            <LogoContainer>
                <LogoImg src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" />
            </LogoContainer>
            <MainContentContainer>
                <MainContent>
                    <PageHeading>Sign-In</PageHeading>
                    <MainForm onSubmit={handleLogin}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormInput
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {loginValidationError.email && (
                            <InputErrorContainer>
                                <i className="material-icons" style={{ fontSize: "13px" }}>
                                    priority_high
                                </i>
                                <span>{loginValidationError.email}</span>
                            </InputErrorContainer>
                        )}
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormInput
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {loginValidationError.password && (
                            <InputErrorContainer>
                                <i className="material-icons" style={{ fontSize: "13px" }}>
                                    priority_high
                                </i>
                                <span>{loginValidationError.password}</span>
                            </InputErrorContainer>
                        )}
                        <SubmitButton>Sign-In</SubmitButton>
                    </MainForm>
                </MainContent>
                <RegisterSection>
                    <RegisterDivider>
                        <RegisterDividerText>New to Amazon?</RegisterDividerText>
                    </RegisterDivider>
                    <RegisterButton>Create your Amazon account</RegisterButton>
                </RegisterSection>
            </MainContentContainer>

            <Footer>© 2021, Amazon clone, by Ala ben yahia</Footer>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #111;
`;

const LogoContainer = styled.div`
    margin: 16px 0;
`;

const LogoImg = styled.img`
    width: 100px;
    object-fit: contain;
`;

const MainContentContainer = styled.div`
    flex: 1;
`;

const MainContent = styled.div`
    width: 350px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 14px 18px;
    margin-bottom: 20px;
`;

const PageHeading = styled.h3`
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
`;

const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 14px 0;
`;

const FormLabel = styled.label`
    font-size: 13px;
    font-weight: 700;
`;

const FormInput = styled.input`
    height: 32px;
    border: 1px solid #a6a6a6;
    border-radius: 3px;
    outline: none;
    margin: 4px 0 8px 0;
    padding: 4px 8px;
    transition: all 100ms linear;
    &:focus {
        border-color: #e77600;
        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    }
`;

const InputErrorContainer = styled.div`
    color: #c40000;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
`;

const SubmitButton = styled.button`
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

const RegisterSection = styled.div`
    text-align: center;
`;

const RegisterDivider = styled.div`
    text-align: center;
    position: relative;
    width: 350px;
    margin-bottom: 12px;
    &:after {
        content: "";
        display: block;
        border-top: 1px solid #e7e7e7;
        width: 100%;
        position: absolute;
        top: 50%;
        z-index: 1;
    }
`;

const RegisterDividerText = styled.h5`
    font-size: 12px;
    color: #767676;
    font-weight: 400;
    z-index: 2;
    background-color: #fff;
    position: relative;
    display: inline-block;
    padding: 0 8px;
`;

const RegisterButton = styled.button`
    background: #e7e9ec;
    background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
    border-radius: 3px;
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-width: 1px;
    border-style: solid;
    outline: none;
    width: 100%;
    padding: 8px 0;
    cursor: pointer;

    &:hover {
        background: linear-gradient(to bottom, #e7eaf0, #d9dce1);
    }

    &:focus {
        border-color: #e77600;
        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    }
`;

const Footer = styled.footer`
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
