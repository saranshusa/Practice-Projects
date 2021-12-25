import React from 'react'
import styled from 'styled-components';
import FooterCards from './FooterCards';

const Main = styled.div`
    background-color: #111;
`;

const RedLine = styled.div`
    height: 4px;
    /* width: 100v; */
    background-color: #be2819;
`;

const Container =  styled.div`
    width: 75vw;
    margin: auto;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 48% 48%;
`;

const Left = styled.div``;

const Right = styled.div`
    margin-left: 2rem;
`;

const Copyright = styled.div`
    font-weight: 600;
    p{
        color: white;
        font-size: .7rem;
        margin: 0;
        padding: 15px 0;
        text-align: center;
    }

    a{
        color: grey;
        text-decoration: none;
    }
`;

const s1a = ['The Economics Times', 'Maharastra Times', 'Tamil  Samayam', 'I am Gujarat', 'Times Points'];
const s1b = ['Hindi Economics Times', 'Vijaya Karnataka', 'Malyalam Samayam', 'Times Now', 'India Times'];
const s1c = ['Navbharat Times', 'Teligu Samayam', 'Ei Samay', 'Times Now Navbharat', 'Brand capital'];
const s2a = ['IDiva', 'ETimes', 'Travel Destinations', 'Filmfare', 'Lifestyle'];
const s2b = ['MensXP.com', 'Grazia', 'Bombay Times', 'Online Songs', 'Longwalks App'];
const s2c = ['Femina', 'Zoom', 'Crickbuzz.com', 'TV', 'Newspaper Subscription'];
const s3a = ['Covid Cases In India', 'Chennai Rain', 'T20 World Cup 2021'];
const s3b = ['Kano Jigoro', 'Agni 5 Misile Test', 'Gutkha Ban in West Bengal'];
const s3c = ['Coronavirus In India Update', 'Delhi School Reopen News', 'Rahul Gandhi'];

const s4a = ['Ads 2 Book', 'CouponDunia', 'Techgig', 'Times Mobile'];
const s4b = ['Bank Exam App', 'Dineout', 'Times Jobs', 'Remt 2 India'];
const s4c = ['ET Money Finance App', 'Magicbricks', 'Bollywood News', 'TC Next'];
const s5a = ['Headlines', 'India News'];
const s5b = ['Sports News', 'World News'];
const s5c = ['Business News', 'Bollywood News'];
const s6a = ['Samantha', 'Sai Pallavi'];
const s6b = ['Vicky Kaushal-Katrina Kaif', 'Celebrity Moms'];
const s6c = ['Iron Defieciency Symptoms', 'Rashmika Manadana'];
const s7a = ['Vicky Kaushal', 'Sameer Wankhede'];
const s7b = ['Katrina kaif', 'Nawab Malik'];
const s7c = ['Aryan Khan Drugs Case', 'Hrithik Roshan'];




const Footer = () => {
    return (
        <Main>
            <RedLine />
            <Container>
                <Left>
                    <FooterCards title='OTHER TIMES GROUP NEWS SITES' d1={s1a} d2={s1b} d3={s1c}/>
                    <FooterCards title='LIVING AND ENTERTAINMENT' d1={s2a} d2={s2b} d3={s2c}/>
                    <FooterCards title='TOP TRENDS' d1={s3a} d2={s3b} d3={s3c}/>
                </Left>
                <Right>
                <FooterCards title='SERVICES' d1={s4a} d2={s4b} d3={s4c}/>
                    <FooterCards title='POPULAR CATEGORIES' d1={s5a} d2={s5b} d3={s5c}/>
                    <FooterCards title='HOT ON THE WEB' d1={s6a} d2={s6b} d3={s6c}/>
                    <FooterCards title='TRENDING TOPICS' d1={s7a} d2={s7b} d3={s7c}/>
                </Right>
            </Container>
            <Copyright>
                <p>Copyright © 2021 Bennett, Coleman & Co. Ltd. All rights reserved. For reprint rights: <a href='##'>Times Syndication Service</a></p>
            </Copyright>
        </Main>
    )
}

export default Footer
