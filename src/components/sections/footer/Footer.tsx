import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon";
import {FlexWrapper} from "../../FlexWrapper";
import {Theme} from "../../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Svetlana</Name>
                <SocialIconsList>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon  id={'social'}/>
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon  id={'telegram'}/>
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon  id={'vk'}/>
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon  id={'linkedIn'}/>
                        </SocialIconLink>
                    </SocialIconItem>
                </SocialIconsList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    padding: 40px 0;
    background-color: ${Theme.colors.primaryBg};
`
const Name = styled.span`

    font-family: "Josefin Sans";
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
    padding-bottom: 30px;
`
const SocialIconsList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px
`
const SocialIconItem = styled.li`
    list-style: none;
`
const SocialIconLink = styled.div`
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.10);
    color: ${Theme.colors.accent};
    width: 35px;
    height: 35px;
   
    
    &:hover {
        background: ${Theme.colors.accent};
        color:black;
        transform: translateY(-4px);
        cursor: pointer;
    }
    
    
`
const Copyright = styled.small`
    color: rgba(255, 255, 255);
    opacity: 0.5;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    padding-top: 40px;`
