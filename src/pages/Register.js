import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import Footer from "../components/Footer";
import { Redirect, useHistory } from "react-router-dom";
import Loading from "../components/Loading";

function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {
        registerUser,
        resetError,
        registerValidationError,
        loading,
        isAuthenticated,
    } = useContext(GlobalContext);

    const history = useHistory();

    const handleRegistration = (e) => {
        e.preventDefault();
        resetError();
        registerUser({ name, email, password });
    };

    if (loading) return <Loading />;
    else if (isAuthenticated) return <Redirect to="/" />;
    else
        return (
            <Container>
                <LogoContainer onClick={() => history.push("/")}>
                    <LogoImg src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" />
                </LogoContainer>
                <MainContentContainer>
                    <MainContent>
                        <PageHeading>Create account</PageHeading>
                        <MainForm onSubmit={handleRegistration}>
                            <FormLabel htmlFor="name">Your name</FormLabel>
                            <FormInput
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {registerValidationError.name && (
                                <InputErrorContainer>
                                    <i className="material-icons" style={{ fontSize: "13px" }}>
                                        priority_high
                                    </i>
                                    <span>{registerValidationError.name}</span>
                                </InputErrorContainer>
                            )}

                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormInput
                                type="text"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {registerValidationError.email && (
                                <InputErrorContainer>
                                    <i className="material-icons" style={{ fontSize: "13px" }}>
                                        priority_high
                                    </i>
                                    <span>{registerValidationError.email}</span>
                                </InputErrorContainer>
                            )}
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <FormInput
                                type="password"
                                name="password"
                                id="password"
                                placeholder="At least 6 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {registerValidationError.password && (
                                <InputErrorContainer>
                                    <i className="material-icons" style={{ fontSize: "13px" }}>
                                        priority_high
                                    </i>
                                    <span>{registerValidationError.password}</span>
                                </InputErrorContainer>
                            )}
                            <SubmitButton>Create your Amazon account</SubmitButton>
                        </MainForm>
                        <SignInSection>
                            <span>Already have an account?</span>
                            <SignInButton>
                                <span onClick={() => history.push("/login")}>Sign-In</span>
                                <i className="material-icons" style={{ fontSize: "18px" }}>
                                    arrow_right
                                </i>
                            </SignInButton>
                        </SignInSection>
                    </MainContent>
                </MainContentContainer>
                <Footer />
            </Container>
        );
}

export default Register;

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #111;
`;

const LogoContainer = styled.div`
    margin: 16px 0;
    cursor: pointer;
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

const SignInSection = styled.div`
    padding-top: 16px;
    margin-top: 28px;
    background: #fbfbfb;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(251, 251, 251, 1) 25%,
        rgba(251, 251, 251, 1) 75%,
        rgba(0, 0, 0, 0) 100%
    );
    border-top: 1px solid rgba(0, 0, 0, 0.13);
    font-size: 13px;
`;

const SignInButton = styled.button`
    display: inline-flex;
    align-items: center;
    color: #0066c0;
    background: none;
    border: none;
    outline: none;
    padding: 0 4px;
    cursor: pointer;

    &:hover {
        color: #c45500;
    }
`;
