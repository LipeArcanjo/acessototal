import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const ContactWrapper = styled.div`
    padding: 3vh 0;
    width: 100%;
    text-align: center;

    & h1{
        margin-bottom: 3rem;
        font-size: 3rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
        text-align: center;
    }

    @media screen and (max-width: 600px) {
        h1{
            font-size: 1rem;
        }

        p{
            font-size: 0.7rem;
        }
`;

export const IconContent = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 600px) {
        span{
            font-size: 0.7rem;
        }
    }
`

export const ContactImage = styled.div`
    img {
        width: 28vw;
        height: auto;
}
`


