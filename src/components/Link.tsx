import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const Link = styled.a`
    &:hover {
  position: relative;
        z-index: 0;
        &:before
        {
            content:'';
            width:100%;
            height: 10px;
            background-color: ${Theme.colors.accent};
            position: absolute;
            bottom: -5px;
            left: 0;
            display: inline-block;
            z-index: -1;
        }
    }
`
