import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const AcessibilityWrapper = styled.div`
    margin: 5vh 0;  
    padding: 2vh 0;
    width: 100%;
    height: auto;
    
    & h1 {
        margin-bottom: 1vh;
        font-size: 5rem;
        font-weight: 800;
        color: ${colors.dark_blue.main};
    }
`;
    
    export const AcessibilityList = styled.div`
    margin-left: 5vw;
`;
    
    export const AcessibilityFirstContent = styled.div`
    margin: 0 auto;
    display: flex;

    & h2 {
        color: ${colors.white.main};
        font-weight: 600;
        font-size: 3em;
        text-align: center;
    }

    & p {
        width: 300px;
        font-size: 1em;
        font-weight: 400;
        color: ${colors.dark_blue.main};
}
    & img {
        max-width:300px;
        max-height:300px;
        width: auto;
        height: auto;
        border-radius: 50%;
    }
`;

export const NavegaCaoImage = styled.div`
    margin: auto auto;

    & img{
        margin-bottom: 5vh;
    }

    & p{
        color: black;
        font-weight: 600;
        font-size: 1.19em;
        text-align: center;
        margin-bottom: 3.5vh;
    }

    & button {
        margin: 0 auto;
    }
`

    export const AcessibilitySecondContent = styled.div`
    width: 90%;
    margin: 10vh auto;

    & p{
        color: black;
        font-weight: 600;
        font-size: 1.3em;
        text-align: center;
        margin-bottom: 3.5vh;
    }
`;