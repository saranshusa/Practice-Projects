import React from "react";
import styled from 'styled-components';
import BugIcon from '../assets/malware 1.png';

const Section = styled.div`

`;

const Welcome = styled.div``;

const Message = styled.div``;

const Logo = styled.div`
    background-image: url(${BugIcon});
    width: 100px;
    height: 100px;
    background-position: cover;
    background-size: 100%;
`;

const welcome = () => {
    return (
        <Section>
            <Welcome>
                <Message>Welcome to Bug Tracking Software</Message>
                <Logo></Logo>
            </Welcome>
        </Section>
    )
}

export default welcome
