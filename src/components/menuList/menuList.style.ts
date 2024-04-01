import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const MenuListElement = styled.div`
    padding: 3vh 2vw;
    border: 0;
    font-size: 16px;
    font-weight: 600;
    border-radius: 50px;
    background-color: ${colors.white.main};
    color: ${colors.dark_blue.main};
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 1em;
    
    &:hover {
        background-color: ${(colors.dark_blue.main)};
        color: ${colors.white.main};
        transition: background-color 350ms;
    }
    
    &.active {
        background-color: ${(colors.dark_blue.main)};
        color: ${colors.white.main};
        transition: background-color 350ms;
    }
}`