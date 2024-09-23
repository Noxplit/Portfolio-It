import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    color:${Theme.colors.font};
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    margin-bottom: 80px;
    width: auto;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    letter-spacing: 0.05em;
    position: relative;
    &::before {
    content:"";
        display: inline-block;
        background-color: ${Theme.colors.accent};
        width: 55px;
        height: 1px;
        position: absolute;
        bottom: -20px;
        right: 48%;
        
}
`