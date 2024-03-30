import { ContactCardElement } from "./ContactCard.style";

interface ContactCardProps {
    children: React.ReactNode;
}

export const ContactCard = ({ children }: ContactCardProps) => {
    return <ContactCardElement>{children}</ContactCardElement>;
};