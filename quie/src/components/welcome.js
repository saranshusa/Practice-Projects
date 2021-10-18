import React from "react";
import styled from 'styled-components';
import BugIcon from '../assets/browser.png';

const Section = styled.div`
    display: flex;
    height: 50vh;
`;

const Welcome = styled.div`
    background-color: #00FFE0;
    display: flex;
    border-radius: 20px;
    padding: 20px;
    margin-left: 25px;
    width: 70%
`;

const Message = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', monospace;
    font-size: 2.5rem;
    font-weight: bold;
    width: 70%;
    align-self: center;
    text-align: center;
`;

const LoginSignup = styled.div`
    text-align: center;
    background-color: #C4C4C4;
    margin: 0 25px;
    padding: 110px 20px;
    border-radius: 20px;
    width: 20%;
    align-self: center;
`;

const Span = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', monospace;
    font-size: 1.25rem;
    margin: 20px 0;
`;

const Button = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', monospace;
    font-size: 1.5rem;
    padding: 10px 40px;
    border-radius: 18px;
    border: none;
    background-color: #76ADFF;
`;

const Logo = styled.div`
    background-image: url(${BugIcon});
    width: 30%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 125px;
`;

const welcome = () => {
    return (
        <Section>
            <Welcome>
                <Message>Welcome to Bug Tracking Software</Message>
                <Logo></Logo>
            </Welcome>
            <LoginSignup>
                <Button>Login</Button>
                <Span>or</Span>
                <Button>Signup</Button>
            </LoginSignup>
        </Section>
    )
}

export default welcome
