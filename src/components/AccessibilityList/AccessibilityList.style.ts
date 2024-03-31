import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const AccessibilityCardElement = styled.div`
    width: 25vw;
    background-color: ${colors.blue.main};
    padding: 1.6vh 2vw;
    
    & h1{
        color: ${colors.white.main};
        font-weight: 600;
        font-size: 3em;
        text-align: center;
    }

    &:first-child{
        border-radius: 50px 50px 0 0;
    }

    &:last-child{
        border-radius: 0 0 50px 50px;
    }

    &:hover{
        width: 35vw;
        background-color: ${colors.dark_blue.main};
        border-radius: 0 50px 50px 0;
        cursor: pointer;
    }

    &:hover:first-child{
        width: 35vw;
        background-color: ${colors.dark_blue.main};
        border-radius: 50px 50px 50px 0;
    }

    &:hover:last-child{
        width: 35vw;
        background-color: ${colors.dark_blue.main};
        border-radius: 0 50px 50px 50px;
    }
`;
