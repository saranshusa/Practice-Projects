import React from 'react'
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: lightblue;
    font-size: 1.5rem;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', monospace;
    background-image: linear-gradient(
    to right,
    #f78ca0 0%,
    #f9748f 19%,
    #fd868c 60%,
    #fe9a8b 100%
    );
    text-align: center;
    padding: 15px 0;
`;

const Navbar = () => {
    return (
        <div>
             <Nav>
                 Daily E-Newspaper by Saransh
            </Nav>
        </div>
    )
}

export default Navbar
