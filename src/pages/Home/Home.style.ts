import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const HomeWrapperElement = styled.div`
    padding: 2vh 0;
    width: 100%;
    height: auto;
    display: table;
`;

export const HomeColumnElement = styled.div`
    display: table-cell;
`;

export const HomeActionContentElement = styled.div`
    margin-bottom: 1vh;
    display: table-cell; 
    vertical-align: middle;

    & h1 {
        margin-bottom: 2vh;
        font-size: 7rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
}

    & h2 {
        margin-left: 5vw;
        line-height: 1.5;
        font-size: 3.6rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
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
`

export const HomeProductsItemsList = styled.div`
    display: flex;
    justify-content: space-between;
`

export const HomeProductsItems = styled.div`
    padding-top: 15vh;
    padding-bottom: 5vh;
    width: 40vw;
    
    & h3{
        font-size: 2em;
        color: ${colors.dark_blue.main};
        font-weight: 800;
        margin-bottom: 2vh;
    }

    & h4{
        font-size: 1.5em;
        color: black;
        font-weight: 600;
    }

    & p {
        font-size: 1.5em;
        align-text: justify;
    }
`

export const HomeMarketingImage = styled.img`
    max-width: 500px;
    max-height: 281px;
    height-width: auto;
    width: auto;
`;

export const HomeFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeProductsRow = styled.div`
    margin-bottom: 1vh;

    & h1 {
        margin-bottom: 2vh;
        font-size: 7rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
    }

    & h2 {
        line-height: 1.5;
        font-size: 3.6rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
    }

    & p {
        font-size: 1.3rem;
        font-weight: 400;
        color: ${colors.dark_blue.main};
    }
    & Button {
        margin: 8.5vh auto;
    }
`