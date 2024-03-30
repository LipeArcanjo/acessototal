import { FeedbackCardElement } from "./FeedbackCard.style";

interface FeedbackCardProps {
    children: React.ReactNode;
}

export const FeedbackCard = ({ children }: FeedbackCardProps) => {
    return <FeedbackCardElement>{children}</FeedbackCardElement>;
};