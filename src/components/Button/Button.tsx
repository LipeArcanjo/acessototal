import { ButtonHTMLAttributes } from "react";
import { ButtonElement } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: "large" | "small";
    variant?: "info" 
    onClick: () => void;
}

export const Button = ({
    children,
    size,
    variant,
    onClick,
}: ButtonProps) => {
    return (
    <ButtonElement
        size={size}
        variant={variant}
        onClick={onClick}
    >
        {children}
    </ButtonElement>
);
};