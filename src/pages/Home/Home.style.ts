import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const HomeWrapperElement = styled.div`
    padding: 8vh 0;
    height: auto;
    background-color: ${colors.white.main};
`;

export const HomeActionContentElement = styled.div`
    & h1 {
    line-height: 1.5;
    margin-bottom: 1rem;
    font-size: 6rem;
    font-weight: 800;
    color: ${colors.dark_blue.main};
}

    & p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${colors.dark_blue.main};
}
`;