import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const ContactWrapper = styled.div`
    padding: 3vh 0;
    width: 100%;

    & h1{
        margin-bottom: 3rem;
        font-size: 3rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
        text-align: center;
    }
`;

export const IconContent = styled.div`
    display: flex;
    align-items: center;
`

export const ContactImage = styled.div`
    img {
        width: 25vw;
        height: auto;
}
`


