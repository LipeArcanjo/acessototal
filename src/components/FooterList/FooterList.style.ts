import { styled } from 'styled-components';
import { colors } from '../../styles/colors';

export const FooterNavigateList = styled.div`
    color: ${colors.white.main};
    font-size: 1.5em;

    & li {
        list-style: none;
        padding: 1vh 1vw;

    &:hover {
        cursor: pointer;
        text-decoration: underline white;
}
`;
