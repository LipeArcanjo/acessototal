import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const FeedbackBox = styled.div`
    margin: 2vh auto 5vh auto;
    padding: 5vh 0;
    width: 90%;
    background-color: ${colors.blue.pale};
    border-radius: 30px;
`;

export const FeedbackText = styled.div`
    width: 90%;
    margin: 0 auto;

    & p{
        text-align: center;
        font-size: 2.2em; 
        font-weight: 400;
    }

    & p:last-child{
        margin-bottom: 6vh;
    }

    & span{
        font-weight: 600;
    }

    & h2 {
        margin: 1vh auto;
        text-align: center;
        font-size: 1.6em;
        font-weight: 400;
    }
`;

export const FeedbackReaction = styled.div`
    padding: 3vh 0;
    width: 100%;
    display: flex;
    justify-content: center;
`