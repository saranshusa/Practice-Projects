import React from 'react'
import styled from 'styled-components';

const CategoryTitle = styled.div`
    display: grid;
    grid-template-columns: 5% max-content auto;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 5px;
    color: white;
    
    hr{
        height: 1px;
        background-color: grey;
        margin: 0;
        border: none;
    }

    p{
        margin: 0 10px;
        text-align: center;
        left: 50%;
        font-size: .75rem;
        font-weight: 600;
        width: fit-content;
    }
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
`;

const R = styled.div`
    ul{
        list-style: none;
        margin: 5px 0 10px 0;
    }

    li{
        color: white;
        font-weight: 600;
        font-size: 0.75rem;
    }

    a{
        text-decoration: none;
        color: white;
    }

    a:hover{
        color: grey;
    }
`;

const FooterCards = ({title, d1, d2,d3}) => {
    return (
        <div>
            <CategoryTitle>
                <hr />
                <p>{title}</p>
                <hr />
            </CategoryTitle>
            <Content>
                <R>
                    <ul>
                        <li><a href='##'>{d1[0]}</a></li>
                        <li><a href='##'>{d1[1]}</a></li>
                        <li><a href='##'>{d1[2]}</a></li>
                        <li><a href='##'>{d1[3]}</a></li>
                        <li><a href='##'>{d1[4]}</a></li>
                    </ul>
                </R>
                <R>
                    <ul>
                        <li><a href='##'>{d2[0]}</a></li>
                        <li><a href='##'>{d2[1]}</a></li>
                        <li><a href='##'>{d2[2]}</a></li>
                        <li><a href='##'>{d2[3]}</a></li>
                        <li><a href='##'>{d2[4]}</a></li>
                    </ul>
                </R>
                <R>
                    <ul>
                        <li><a href='##'>{d3[0]}</a></li>
                        <li><a href='##'>{d3[1]}</a></li>
                        <li><a href='##'>{d3[2]}</a></li>
                        <li><a href='##'>{d3[3]}</a></li>
                        <li><a href='##'>{d3[4]}</a></li>
                    </ul>
                </R>
            </Content>
        </div>
    )
}

export default FooterCards
