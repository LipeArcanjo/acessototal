import { AccessibilityCardElement } from "./AccessibilityList.style";

interface AccessibilityCardProps {
    children: React.ReactNode;
}

export const AccessibilityCard = ({ children }: AccessibilityCardProps) => {
    return <AccessibilityCardElement>{children}</AccessibilityCardElement>;
};