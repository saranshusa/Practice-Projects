import React from 'react'
import styled from 'styled-components';

const Cards = styled.div`
    margin: 5px 0 0 0;
    
    hr{
        height: 1px !important;
        margin: 10px 0 !important;
        background-color: grey !important;
        border: none;
    }
`;

const Card = styled.div`
    display: flex;
`;

const Image = styled.div`
    background: url(${(props) => (props.imgUrl)});
    min-width: 94px;
    height: 70px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
`;

const Title = styled.div`
    font-size: 0.9rem;
    margin-left: 10px;
`;

const NewsCategory = ({title, image}) => {
    return (
        <Cards>
            <Card>
                <Image imgUrl={image} />
                <Title>{title}</Title>
            </Card>
            <hr />
        </Cards>
    )
}

export default NewsCategory
