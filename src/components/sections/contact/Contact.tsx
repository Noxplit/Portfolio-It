import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../SectionTitle";
import {Button} from "../../Button";
import {Container} from "../../Cointainer";
import {Theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={'Name'}/>
                    <Field placeholder={'Subject'}/>
                    <Field placeholder={'Message'} as={'textarea'} />
                    <Button type={'submit'}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`

`
const StyledForm = styled.form`
    max-width: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    textarea {
        height: 155px;
        resize: none;
    }
`
const Field = styled.input`
    width: 100%;
    border: 1px solid #4A4A4A;
    background: #252527;
    padding: 7px 10px;
    font-family: "Poppins", sans-serif;
    color: ${Theme.colors.font};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;
    outline-color: transparent;

    &:focus-visible {
        outline: 1px solid #848484;
    }


    &::placeholder {
        text-transform: uppercase;
        color: #495057;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.6px;
    }
`