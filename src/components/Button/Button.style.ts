import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "large" | "small";
    variant?: "info";
}

export const ButtonElement = styled.button<ButtonProps>`
    padding: 16px 32px;
    border: 0;
    font-size: 16px;
    font-weight: 600;
    border-radius: 50px;
    background-color: ${colors.white.main};
    color: ${colors.dark_blue.main};
    cursor: pointer;
    display: flex;
    align-items: center;
    
    &:hover {
        background-color: ${(colors.dark_blue.main)};
        color: ${colors.white.main};
        transition: background-color 350ms;
    }


    ${(props) =>
    props.size === "small" &&
    `
        padding: 12px 24px;
        font-size: 16px;
        display: flex;
`}

    ${(props) =>
    props.size === "large" &&
    `
        padding: 24px 32px;
        font-size: 18px;
`}

    ${(props) =>
    props.variant === "info" &&
    `
    background-color: ${colors.blue.main};
    color: white;
    &:hover {
        background-color: ${(colors.dark_blue.main)};
        color: ${colors.white.main};
    }
    `}
`;