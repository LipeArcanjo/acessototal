import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const HeaderElementContact = styled.div`
    background-color: ${colors.gray.main};
    padding: 0.5vh 1vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
        font-weight: 200;
        font-style: italic;
        font-size: 16px;

    @media screen and (max-width: 600px) {
        font-size: 0.8em;
    }
}
`

export const IconElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;

    @media screen and (max-width: 600px) {
        display:none;
    }
`;