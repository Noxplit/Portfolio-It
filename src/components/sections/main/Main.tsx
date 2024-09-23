import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/image1.jpeg'
import {FlexWrapper} from "../../FlexWrapper";
import {Container} from "../../Cointainer";
import {Theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <TextWrapper>
                        <SubTitle>Hi There</SubTitle>
                        <Name>I am <span>Svetlana Dyablo</span></Name>
                        <MainTitle>A Web Developer. |</MainTitle>
                    </TextWrapper>
                    <PhotoWrapper><Photo src={photo} alt="avatar"/></PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Photo = styled.img`

    width: 350px;
    height: 430px;
    object-fit: cover;
`

const PhotoWrapper = styled.div`
position: relative; 
    z-index: 0;
&::before{
    content:"";
    width: 384px;
    height: 470px;
    border:5px solid ${Theme.colors.accent}; 
    background-color:${Theme.colors.primaryBg};
    position: absolute;
    top:-20px;
    right: -50px;
    z-index: -1;
}
`

const MainTitle = styled.h1`
    font-size: 27px;
    line-height: 40px;
    font-weight: 400;
    letter-spacing: 0.05em;
`

const Name = styled.h2`
font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    line-height: 50px;
    font-weight: 700;
    margin: 10px 0;
    span {
        position: relative;
        z-index: 0;
        &::before {
    content:" ";
     display: inline-block;
     width: 100%;
     background-color: rgba(117, 114, 213, 1);
     height: 20px;
            position: absolute;
            bottom: 0;
      z-index: -1;
 }
    }
    
`
const SubTitle = styled.span`
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;

`
const TextWrapper = styled.div`

`