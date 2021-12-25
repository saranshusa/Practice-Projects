import React from 'react'
import styled from 'styled-components';
import { BsFillHouseDoorFill, BsSearch } from 'react-icons/bs';

const Nav = styled.div`
    justify-content: center;
    display: flex;
    background-color: #be2819;    
`;

const Ul = styled.ul`
    display: flex;
    width:60vw;
    margin: 0;
    padding: 5px 0;
    font-size: 0.8rem;
    font-weight: 600;

    li{
        list-style: none;
        margin: 0 1px;
    }
    
    a{
        color: white;
        text-decoration: none;
        padding: 5px 4px;
    }

    a:hover{
        background-color: white;
        color: black;
    }
`;

const Search = styled.div``;

const Input = styled.input`
    display: ${(props) => (props.primary ? 'block' : 'none')};
    position: absolute;
    right: 21vw;
    padding: 6px 6px;
    border: none;
    border-radius: 2px;
    outline: none;
    width: 8rem;
`;

const Button = styled.button`
    background: transparent;
    border: none;
    color: white;
    font-size: 1.1rem;
    margin-top: 2px;
`;

const Navbar = () => {
    return (
        <Nav>
            <Ul>
                <li><a href='##'><BsFillHouseDoorFill /></a></li>
                <li><a href='##'>Latest news</a></li>
                <li><a href='##'>Most Shared</a></li>
                <li><a href='##'>Most Read</a></li>
                <li><a href='##'>Most Commented</a></li>
                <li><a href='##'>Delhi Elections</a></li>
                <li><a href='##'>Bihar Elections</a></li>
            </Ul>
            <Search>
                <Input primary='none' />
                <Button><BsSearch/></Button>
            </Search>
        </Nav>
    )
}

export default Navbar
