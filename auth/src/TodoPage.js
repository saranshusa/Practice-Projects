import React from 'react';
import styled from 'styled-components';
import AddLogo from './assets/add-file.png'
import DeleteLogo from './assets/delete.png';

export const Card = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', monospace;
    background-image: linear-gradient(to top, #b3ffab 0%, #12fff7 100%);
    min-height: 100vh;
`;

export const Header = styled.p`
    margin: 0;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', monospace;
    text-align: center;
    padding: 1.5rem 0;
    font-size: 1.5rem;
`;

export const AddItems = styled.div`
    align-items: center;
    text-align: center;
    justify-items: center;
    padding: 10px;
    display: grid;
    grid-template-columns: 90% 10%;
`;

export const Title = styled.input`
    width: 88%;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', monospace;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    padding: 0 10px 0 20px;
    position: relative;
    outline: none;
`;

export const Add = styled.button`
    height: 2.25rem;
    width: 2.25rem;
    border: none;
    background-image: url(${AddLogo});
    background-color: transparent;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    outline:none ;

    :focus {
        outline: none;
    }

    :active{
        transform: translateY(4px);
        box-shadow:
    0 0 60px 10px #fff,  /* inner white */
    0 0 100px 10px #f0f, /* middle magenta */
    0 0 140px 10px #0ff;
    }

    :after {
        content: "";
        background: #f1f1f1;
        opacity: 0;
        transition: all 0.8s
    }

    :active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
    }
`;

export const ListItems = styled.div`
    align-items: center;
    text-align: center;
    justify-items: center;
    padding: 10px;
    display: grid;
    grid-template-columns: 90% 10%;
    border-radius: 15px 15px 0 0;
    background: rgba(255,255,255,0.4);
    backdrop-filter: saturate(180%) blur(10px);
`;

export const ItemTitle = styled.p`
    width: 90%;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    font-family: 'Montserrat', monospace;
    min-height: 2.5rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px 10px;
    position: relative;
    margin: 10px 0;
    background-color: rgba(255, 255, 255, 0.2);
`;

export const Delete = styled(Add)`
    background-image: url(${DeleteLogo});
`;

const ToDoPage = () => {
    return (
        <Card>
            <Header>Notes</Header>
            <AddItems>
                <Title />
                <Add />
            </AddItems>
            <ListItems>
                <ItemTitle>Title</ItemTitle>
                <Delete />
            </ListItems>
        </Card>
    )
}

export default ToDoPage
