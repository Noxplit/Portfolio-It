import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {Link} from "../Link";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyleTabMenu>
            <ListItem>
                {props.menuItems.map((item) => {
                        return <List key={item}><Link href="">{item}</Link></List>
                    }
                )}

            </ListItem>
        </StyleTabMenu>
    );
};

export default TabMenu;

const ListItem = styled.ul`
    display: flex;
    gap: 30px;
    justify-content: center;
`
const List = styled.li`
    text-transform: uppercase;
    padding: 10px 10px 3px;
    position: relative;
    z-index: 0;
`

const StyleTabMenu = styled.nav`
    margin-bottom: 40px;
`