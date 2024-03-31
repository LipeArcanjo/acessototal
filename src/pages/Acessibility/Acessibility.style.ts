import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const AcessibilityWrapper = styled.div`
    margin: 5vh 0;  
    padding: 2vh 0;
    width: 100%;
    height: auto;
    background-color: ${colors.blue.pale};
    
    & h1 {
        margin-bottom: 1vh;
        font-size: 3rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
    }
`;
    
    export const AcessibilityList = styled.div`
`;
    
    export const AcessibilityFirstContent = styled.div`
    margin-bottom: 1vh;
    display: flex;

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
`;

    export const AcessibilitySecondContent = styled.div`
`;
