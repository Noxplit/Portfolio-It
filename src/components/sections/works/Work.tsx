import React from 'react';
import styled from "styled-components";
import {Link} from "../../Link";
import {FlexWrapper} from "../../FlexWrapper";
import {Theme} from "../../../styles/Theme";
import {Button} from "../../Button";

type WorkPropsType = {
    title: string;
    text: string;
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImageWrapper>
            <BoxWrapper>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <FlexWrapper justify={'start'} gap={'10px'}>
                    <Link href={'#'}>Demo</Link>
                    <Link href={'#'}>Code</Link>
                </FlexWrapper>
            </BoxWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    width: 100%;
    max-width: 540px;
    background-color: ${Theme.colors.secondaryBg};
`
const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        display: none;
    }

    &:hover {
        cursor: pointer;

        ${Button} {

            display: inline-block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &::before {
                width: 100%;
                height: 100%;
            }
        }

        &::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.30);
            backdrop-filter: blur(4px);
        }
    }

`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`
    margin-bottom: 14px;
`
const BoxWrapper = styled.div`
    padding: 20px 15px;
`

const Text = styled.p`
    margin-bottom: 10px;

`

