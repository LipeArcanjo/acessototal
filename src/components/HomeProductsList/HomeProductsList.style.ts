import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const HomeProductsList = styled.div`
    padding: 5vh 2vw;
    border: 0;
    font-size: 1.1em;
    font-weight: 600;
    border-radius: 20px;
    background-color: ${colors.blue.main};
    color: ${colors.white.main};
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 1em;
    transition: background-color 350ms ease-in, transform 500ms ease-out;

    &:first-child{
        background-color: ${(colors.dark_blue.main)};
        color: ${colors.white.main};
        transform: translateY(
            -2vh
        );
    }

    &:hover {
        background-color: ${(colors.dark_blue.main)};
        color: ${colors.white.main};
        transform: translateY(
            -2vh
        );
    }
`