import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const HeaderElementContact = styled.div`
    background-color: ${colors.gray.main};
    padding: 1.5vh 5.5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
        font-weight: 200;
        font-style: italic;
        font-size: 16px;
}
`

export const IconWrapperElement = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;
`;