import { styled } from "styled-components";
import { colors } from "../../styles/colors";

// Interface para aplicar o parâmetro de reverse :)
interface ContactCardRowProps {
    reverse: boolean;
}

export const ContactCardElement = styled.div`
    margin: 0 auto;
    width: 60vw;

    & button {
        margin: 4vh auto 8vh auto;
    }

    &:last-child {
        margin-bottom: 10vh;
    }
`;

export const ContactCardContent = styled.div`
    margin: 0;

    & h2 {
        margin: 0;
        font-size: 3rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
    }

    & h3 {
    margin-left: 8vw;
    font-size: 1.2rem;
    font-weight: 800;
    color: black;
    }

    & h4{
        font-size: 2rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
    }

    @media screen and (max-width: 600px) {
        
        h2{
            font-size:1.1em;
        }
        
        h3,h4,p{
            font-size: 0.8em;
        }
    }
`;

export const ContactCardRow = styled.div<ContactCardRowProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    // Invertendo a direção conforme o indice for impar!!
    ${({ reverse }) =>
        reverse &&
        `
        flex-direction: row-reverse;
    `}
`