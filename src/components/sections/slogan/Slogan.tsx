import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../SectionTitle";
import {Button} from "../../Button";
import {FlexWrapper} from "../../FlexWrapper";
import {Container} from "../../Cointainer";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
            <FlexWrapper direction={'column'} align={'center'}>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
            </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    max-height: 50vh;

`