import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const HomeWrapperElement = styled.div`
    padding: 4vh 0;
    width: 100%;
    height: auto;
    background-color: ${colors.gray.main};
    display: table;
`;

export const HomeColumnElement = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: 0 auto;
`;

export const HomeActionContentElement = styled.div`
    display: table-cell;
    vertical-align: middle;

    & h1 {
        line-height: 1.5;
        margin-bottom: 1rem;
        font-size: 7rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
}

    & h2 {
        line-height: 1.5;
        font-size: 3.6rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
        // padding: 0 0 2vh 10vw;
    }

    & p {
        font-size: 1.3rem;
        font-weight: 400;
        color: ${colors.dark_blue.main};
}
    & Button {
        margin: 8.5vh auto;
    }
`;

export const HomeFirstImage = styled.img`
    max-width: 40vw;
    width: auto;
`;

export const HomeProducts = styled.div`
    padding: 1vh 5vw;
    background-color: ${colors.blue.main};
    border-radius: 20px;
    width: 89vw;
    transform: translateX(
        -9.5vw
    );
`

export const HomeProductsItems = styled.div`
    display: flex;
    justify-content: space-between;
`

