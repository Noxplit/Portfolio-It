import React from 'react';
import {Icon} from "../../icon/Icon";
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../FlexWrapper";

type  SkillPropsType = {
    id:string;
    title:string;
    subtitle:string

}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper margin={'100px 0 0'} direction={'column'} align={'center'}>
            <BoxIcon>
            <Icon id={props.id}/>
            </BoxIcon>
            </FlexWrapper>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.subtitle}</SkillText>
        </StyledSkill>
    );
};


const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    line-height: 16px;
    letter-spacing: 0.1em;
text-transform: uppercase;    
`
const StyledSkill = styled.div`
    width: 27%;
    text-align: center;

`
const SkillText = styled.p`
    line-height: 21px;
`

export const BoxIcon = styled.div`
    position: relative;
    z-index: 0;
&:before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: #4a4a4a;
    z-index: -1;
    top:50%;
    left: 50%;
    transform: rotate(45deg) translate(-50% ,-50%);
    transform-origin: top left;
}

`
