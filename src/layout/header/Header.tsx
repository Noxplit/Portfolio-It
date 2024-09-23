import React from 'react';
import styled from "styled-components";
import Logo from "../../components/logo/Logo";
import {Container} from "../../components/Cointainer";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']


export const Header = () => {
    return (
        <SylerHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </SylerHeader>
    );
};

const SylerHeader = styled.header`
    background-color: rgba(31, 31, 32, 0.5);
    padding: 20px 0;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9999;
`
