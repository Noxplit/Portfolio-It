import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../SectionTitle";
import TabMenu from "../../tabMenu/TabMenu";
import {FlexWrapper} from "../../FlexWrapper";
import {Work} from "./Work";
import socialImage from '../../../assets/images/social.png'
import timer from '../../../assets/images/new_yourk.jpg'
import {Container} from "../../Cointainer";
import {Theme} from "../../../styles/Theme";

const worksItems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                    <FlexWrapper justify={'space-around'} align={'flex-start'} >
                        <Work src={socialImage} title={'Social Network'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                        <Work src={timer} title={'Timer'}
                              text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;

`
