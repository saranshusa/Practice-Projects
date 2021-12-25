import React from 'react';
import styled from 'styled-components';
import { BsChevronDoubleRight } from 'react-icons/bs';
import NewsCategory from './NewsCategory';

const Container = styled.div`
    width: 60vw;
    margin: auto;

    *{
        margin: 0
    }

    hr{
        height: 2px;
        background-color: black;
        border: none;
    }
`;

const Path = styled.p`
    font-size: 0.7rem;
    padding: 3px 0px;
`;

const Header = styled.p`
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 4px;
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: 68% 30%;
    justify-content: space-between;
`;

const Left = styled.div`
    hr{
        height: 1px;
        margin: 0;
        background-color: grey;
        border: none;
    }
`;

const Right = styled.div`
`;

const Card = styled.div`
    display: flex;
    margin: 20px 0;
`;

const Image = styled.div`
    background: url(${(props) => (props.imgUrl)});
    height: 85px;
    min-width: 141px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
`;

const Text = styled.div``;

const Title = styled.p`
    margin: 0 0 10px 10px;
    font-weight: 600;
    font-size: 1.1rem;
`;

const Description = styled.p`
    margin: 0 0 0px 10px;
    font-size: 0.9rem;
`;

const MostPopular = styled.div`

    margin-top: 20px;

    h1{
        font-size: 1rem;
    }
`;

const Navigation = styled.div`
    margin: 10px 0;
    
    ul{
        list-style: none;
        display: flex;
        padding: 0;
    }
`;

const A = styled.a`
        border-bottom: 3px solid black;
        background-color: ${(props) => (props.active ? '#000' : '#bababa')};
        padding: 0.5rem;
        font-size: 0.8rem;
        font-weight: 600;;
        color: white;
        text-decoration: none;
    
    :hover{
        background-color: #000;
    }
`;

const RightCard = styled.div`
    p{
        padding: 5px;
        font-size: 0.9rem;
    }
    hr{
        height: 1px;
        margin: 0;
        background-color: grey;
        border: none;
    }
`;

const CategoryBreak = styled.div`
    display: grid;
    grid-template-columns: auto 50% auto;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 5px;
    
    hr{
        height: 1px;
        background-color: black;
        margin: 0;
        border: none;
    }

    p{
        margin: 0;
        text-align: center;
        left: 50%;
        font-size: .7rem;
    }
`;

const HeaderEntertainment = styled.h1`
    font-size: 1.1rem;
`;

const HrCategory = styled.hr`
    height: 3px;
    margin: 10px 0;
    background-color: black;
    border: none;
`;

const Page = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    
    ul{
        list-style: none;
        display: flex;
    }

    li{
        margin-right: 5px;
    }

    a{
        text-decoration: none;
        color: black;
        padding: 0 7px;
        background-color: #f2f2f2;
        border-radius: 2px;
    }
`;

const Content = () => {
    return (
        <Container>
            <Path>News <BsChevronDoubleRight /> Latest News</Path>
            <Header>LATEST NEWS</Header>
            <hr />
            <Cards>
                <Left>
                    <Card>
                        <Image imgUrl='https://static.toiimg.com/thumb/imgsize-1213663,msid-87316467,width-141,resizemode-4/87316467.jpg'/>
                        <Text>
                        <Title>'Divided by lack of trust': US right wing rife with talk of Biden-Harris rift</Title>
                        <Description>Kamala Harris was seen alongside President Biden almost every day in the initial days of the Presidency. Now she's hardly ever seen with him. American political salons are boiling with discussion about whether she is distancing herself from Biden amid his falling poll numbers or if there is growing rift between them.</Description>
                        </Text>
                    </Card>
                    <hr />
                    <Card>
                        <Image imgUrl='https://static.toiimg.com/thumb/imgsize-31226,msid-87330239,width-141,resizemode-4/87330239.jpg'/>
                        <Text>
                        <Title>India successfully test-fires Agni-5 missile</Title>
                        <Description></Description>
                        </Text>
                    </Card>
                    <hr />
                    
                    <Card>
                        <Image imgUrl='https://static.toiimg.com/thumb/imgsize-46436,msid-87295290,width-141,resizemode-4/87295290.jpg'/>
                        <Text>
                        <Title>Why Governor Malik is talking of corruption in J&K, farmers in UP</Title>
                        <Description>Meghalaya governor’s claims of being offered Rs 300-crore bribe in J&K, corruption in Goa BJP, and views on farmers’ protests, puts the spotlight on his motivation. Is he acting on his own?</Description>
                        </Text>
                    </Card>
                    <hr />
                    
                    <Card>
                        <Image imgUrl='https://static.toiimg.com/thumb/imgsize-63556,msid-87305682,width-141,resizemode-4/87305682.jpg'/>
                        <Text>
                        <Title>India: China's new land boundary law is of concern to us</Title>
                        <Description></Description>
                        </Text>
                    </Card>
                    <hr />
                    
                    <Card>
                        <Image imgUrl='https://static.toiimg.com/thumb/imgsize-138724,msid-87326395,width-141,resizemode-4/87326395.jpg'/>
                        <Text>
                        <Title>Namibia down Scotland in T20 World Cup</Title>
                        <Description>Debutants Namibia got themselves out of a difficult situation in a low-scoring game to record a memorable 4-wicket win over Scotland in their opening Super 12 match in the ICC T20 World Cup. Namibia, who had beaten Ireland and Netherlands to qualify for the Super 12 stage, restricted Scotland to 109/8. Scotland, however made it extremely tough for Namibia on a slow pitch but the latter eventually crossed the finish line with 5 balls to spare.</Description>
                        </Text>
                    </Card>
                    <hr />
                    
                    <Card>
                        <Image imgUrl='https://static.toiimg.com/thumb/imgsize-26838,msid-87324723,width-141,resizemode-4/87324723.jpg' />
                        <Text>
                        <Title>Drugs case: What lawyers said in court during bail hearing</Title>
                        <Description></Description>
                        </Text>
                    </Card>
                    <hr />
                    
                    <Card>
                        <Image imgUrl='https://static.toiimg.com/thumb/imgsize-31018,msid-87324527,width-141,resizemode-4/87324527.jpg'/>
                        <Text>
                        <Title>Live: Govt announces door-to-door vaccination campaign</Title>
                        <Description></Description>
                        </Text>
                    </Card>
                    <hr />
                    
                    <Card>
                        <Image imgUrl='https://static.toiimg.com/thumb/imgsize-22408,msid-87329595,width-141,resizemode-4/87329595.jpg'/>
                        <Text>
                        <Title>12 more test positive for Covid in Karnataka school, tally 33</Title>
                        <Description>The cluster outbreak at Jawahar Navodaya Vidyalaya school in Kodagu worsened, with 12 more students testing positive for Covid-19 on Wednesday, taking the total infected to 33.</Description>
                        </Text>
                    </Card>
                    <hr />
                    
                    <Card>
                        <Image imgUrl='https://static.toiimg.com/thumb/imgsize-52942,msid-87330297,width-141,resizemode-4/87330297.jpg' />
                        <Text>
                        <Title>When Dhoni endorses a product, but won’t accept responsibility</Title>
                        <Description>Can celebrities endorse a product and then also say the consumers must not blame them if the experience with it is poor? Former India captain Mahendra Singh Dhoni has just done that and, perhaps, changed the game of endorsements forever</Description>
                        </Text>
                    </Card>
                    
                </Left>
                <Right>
                    <MostPopular>
                        <h1>MOST POPULAR</h1>
                        <Navigation>
                            <ul>
                                <li><A active href='##'>SHARED</A></li>
                                <li><A href='##'>COMMENTED</A></li>
                                <li><A href='##'>READ</A></li>
                                <li><A href='##'>TRENDING</A></li>
                            </ul>
                        </Navigation>
                        <RightCard>
                            <p>Indian Idol 12’s Pawandeep Rajan, Arunita Kanjilal, Sayli Kamble and Mohd. Danish are off to London for their first international tour; see pics</p><hr/ >
                            <p>Exclusive - Himanshi Khurana: Asim and I discuss how Shehnaaz Gill needs Sidharth Shukla's mother and her guidance</p><hr/ >
                            <p>41-year-old Teejay Sidhu reacts to people calling her tummy out of shape in swimsuit: I had children so it will take time, don't want to post touched up images</p><hr/ >
                            <p>Vicky Kaushal-Katrina Kaif's wedding venue revealed! Wedding in first week of December! ETimes Exclusive</p>
                        </RightCard>
                    <CategoryBreak>
                        <hr />
                        <p>SEE ALL SHARED STORIES</p>
                        <hr />
                    </CategoryBreak>
                    </MostPopular>


                    <HeaderEntertainment>Entertainment News</HeaderEntertainment>
                    <HrCategory />
                    <NewsCategory title="ETimes Exclusive! Vicky-Katrina's wedding venue revealed!" image='https://static.toiimg.com/thumb/imgsize-83384,msid-87316700,width-150,resizemode-4/87316700.jpg' />
                    <NewsCategory title="Aryan Khan case live updates: NCB witness Kiran Gosavi detained in Pune" image='https://static.toiimg.com/photo/87295290.cms' />
                    <NewsCategory title="Neha: Not interested in Ananya's films" image='https://static.toiimg.com/thumb/imgsize-69232,msid-87327248,width-150,resizemode-4/87327248.jpg' />
                    <NewsCategory title="Randhir Kapoor on Alia-Ranbir's wedding" image='https://static.toiimg.com/photo/87326838.cms' />
                    <NewsCategory title="Vikrant on switching from TV to films" image='https://static.toiimg.com/thumb/imgsize-207836,msid-87326359,width-150,resizemode-4/87326359.jpg' />

                    <HeaderEntertainment>Business News</HeaderEntertainment>
                    <HrCategory />
                    <NewsCategory title="Cognizant revenue grows 11% in July-Sept even as attrition climbs record highs" image='https://static.toiimg.com/thumb/imgsize-789941,msid-87326653,width-150,resizemode-4/87326653.jpg' />
                    <NewsCategory title="Sensex tumbles over 300 points, Nifty slips below 18,200" image='https://static.toiimg.com/thumb/imgsize-141000,msid-87326374,width-150,resizemode-4/87326374.jpg' />
                    <NewsCategory title="Microsoft nearly overtakes Apple as most valuable company" image='https://static.toiimg.com/thumb/imgsize-30374,msid-87325298,width-150,resizemode-4/87325298.jpg' />
                    <NewsCategory title="Policybazaar's Rs 5,710 cr IPO gives co valuation of $6bn" image='https://static.toiimg.com/thumb/imgsize-57067,msid-87324008,width-150,resizemode-4/87324008.jpg' />
                    <NewsCategory title="Indians paid Rs 9,700 crore in hidden forex fees" image='https://static.toiimg.com/thumb/imgsize-49706,msid-87324032,width-150,resizemode-4/87324032.jpg' />
                </Right>
            </Cards>
                <Page>
                    <ul>
                        <li><a href="##">1</a></li>
                        <li><a href="##">2</a></li>
                        <li><a href="##">3</a></li>
                    </ul>
                </Page>
        </Container>
    )
}

export default Content
