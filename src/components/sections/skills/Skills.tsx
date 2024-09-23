import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../FlexWrapper";
import {SectionTitle} from "../../SectionTitle";
import {Skill} from "./Skill";
import {Container} from "../../Cointainer";


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper justify={'space-between'} wrap={'wrap'}>
                    <Skill id={'code'} title={'html5'}
                           subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill id={'vector'} title={'CSS3'}
                           subtitle={'Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consectetur adipistetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill id={'react'} title={'React'}
                           subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill id={'typescript'} title={'typescript'}
                           subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill id={'styled'} title={'styled components'}
                           subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill id={'figma'} title={'WEB DESIgN'}
                           subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;

`



