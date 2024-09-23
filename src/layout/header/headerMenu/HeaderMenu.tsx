import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <List>
                {props.menuItems.map((item) => {
                        return <ListItem key={item}><Link href="">{item}

                        </Link></ListItem>
                    }
                )}

            </List>
        </StyledHeaderMenu>
    );
};


const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;

        li {

        }
    }
`

const List = styled.ul`

`


const ListItem = styled.li`
   
`

const Link = styled.a`
color:rgba(117, 114, 213, 1);
    font-family: 'Josefin Sans';
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    &:hover {
        color:white;
        font-style: italic;
    }
 
`