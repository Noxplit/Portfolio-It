import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {Theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper direction={'column'}>
                <Slide>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Text>
                    <Name>
                        @ivan ivanow
                    </Name>
                </Slide>
                <Pagination>
                    <span> </span>
                    <span className={'active'}> </span>
                    <span> </span>
                </Pagination>
            </FlexWrapper>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    padding: 20px;
`
const Slide = styled.div`
    text-align: center;
`
const Text = styled.p`
`
const Name = styled.span`
    font-family: "Josefin Sans";
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    margin-top: 22px;
    margin-bottom: 32px;

`
const Pagination = styled.span`
    span {
        display: inline-block;
        border-radius: 20px;
        width: 7px;
        height: 7px;
        background-color: gray;
        
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            width: 20px;
            background-color: ${Theme.colors.accent};
        }
    }
`
