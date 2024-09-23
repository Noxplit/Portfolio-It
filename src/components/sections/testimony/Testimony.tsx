import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../SectionTitle";
import {Icon} from "../../icon/Icon";
import {Slider} from "../../slider/Slider";
import {FlexWrapper} from "../../FlexWrapper";
import {Button} from "../../Button";
import {BoxIcon} from "../skills/Skill";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <BoxIcon>
                    <Icon id={'qoute'}/>
                </BoxIcon>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

    
    ${BoxIcon} {
        margin: 40px 0;
    }
`