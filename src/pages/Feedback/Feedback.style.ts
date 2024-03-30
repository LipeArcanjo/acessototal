import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const FeedbackBox = styled.div`
    margin: 2vh auto 5vh auto;
    padding: 5vh 0;
    width: 90%;
    background-color: ${colors.blue.pale};
    border-radius: 30px;

    & button {
        margin: 4.3vh auto 0 auto;
    }
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
        margin-bottom: 1vh;
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

export const FeedbackForms = styled.form`
    margin: 3vh auto 0 auto;
    width: 80%;

    & textarea{
        width: 100%;
        height: 50vh;
        padding: 2.5vh 1.5vw;
        box-sizing: border-box;
        border: 5px solid ${colors.gray.main};
        border-radius: 40px;
        background-color: ${colors.white.main};
        resize: none;
    }
`