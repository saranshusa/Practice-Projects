import React from 'react'
import styled from 'styled-components';
import Logo from '../assets/c8f7a86a5a668cac7a2846073ce4baf3 1.png';
import { Link } from 'react-router-dom';

const Section = styled.div`
    background-color: #00CDB4;
    margin: 0 0 40px 0;
    display: flex;
    height: 65px;
    `;

const Nav = styled.nav`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', monospace;
    display: flex;
    width: 100%;
`;

const NavLeft = styled.nav`
    width: 100%;
    margin: 10px 0 10px 20px;
    padding: 10px 0 10px 10px;
`;

const NavRight = styled.nav`
    display: flex;
    width: 100%;
    margin: 10px 0;
    padding: 10px 10px 10px 0;
    justify-content: right;
`;

const NavLink = styled(Link)`
    margin: 0 15px;
    padding: 0px;
    font-size: 1.5rem;
    font-weight: 500;
    color: black;
    text-decoration: none ;
    &:hover{
        font-weight: 600
    }
`;

const Profile = styled.div``;

const Avatar = styled.div`
    width: 40px;
    height: 40px;
    margin: 12.5px 20px 12.5px 10px;
    background: url(${Logo});
    background-position: cover;
    background-size: 100%;
`;

const navbar = () => {
    return (
        <Section>
            <Nav>
                <NavLeft>
                    <NavLink to='/'>Play</NavLink>
                </NavLeft>
                <NavRight>
                    <NavLink to='/'>Register</NavLink>
                    <NavLink to='/'>About</NavLink>
                </NavRight>
            </Nav>
            <Profile>
                <Avatar></Avatar>
            </Profile>
        </Section>
    )
}

export default navbar