import React from 'react';
import styled from 'styled-components';
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiRssOutline, TiSocialYoutube } from 'react-icons/ti';
import { BsFillCloudSunFill } from 'react-icons/bs';

const MainHeader = styled.div`
`;

const Header1 = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #1a1a1a;
    /* width: 100vw; */
    color: white;
`;
const Header1left = styled.div`
    display: flex;
    margin: 5px 0;

    p{
        margin: 0 3px;
        font-size: 0.8rem;
    }
`;
const Header1right = styled.div`
    display: flex;

    p{
        background: linear-gradient(90deg,#3023ae,#c86dd7);
        margin: 2px 5px;
        font-size: 0.8rem;
        padding: 0 10px;
    }

    span{
        font-size: 0.8rem;
        margin: 5px 10px 5px 25px;
    }
`;
const Header2 = styled.div`
    text-align: center;
    background-color: #000;
    color: white;
    padding-bottom: 10px;

    p{
        font-size: 3rem;
        margin: 0;
        font-weight: 600;
        font-family: 'Times New Roman', Times, serif;
    }

    span{
        font-weight: bold;
        font-size: 1.1rem;
    }
`;

const Header = () => {
    return (
        <MainHeader>
            <Header1>
            <Header1left>
                <p>English |</p>
                <p>Epaper |</p>
                <p>GadgetsNow</p>
            </Header1left>
            <Header1right>
                <p>
                <img alt='' height='15rem' src='https://image.timespoints.iimg.in/tpwidgets/static/dist/images/crown.svg' />
                    Keep reading, keep earning TimesPoints!!</p>
                <span>SIGN IN</span><TiSocialTwitterCircular size='1.5rem' /><TiSocialFacebookCircular size='1.5rem' /><TiRssOutline  size='1.5rem'/><TiSocialYoutube  size='1.5rem'/>
            </Header1right>
            </Header1>
            <Header2>
                <p>THE TIMES OF INDIA</p>
                <span>Lucknow <BsFillCloudSunFill size='1.5rem' /> 21°C</span>
            </Header2>
        </MainHeader>
    )
}

export default Header
