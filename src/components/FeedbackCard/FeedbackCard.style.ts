import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const FeedbackCardElement = styled.div`
    margin: 0 1vw;
    padding: 5vh 0;
    width: 16vw;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    text-align: center;
    border-radius: 30px;

    & h1{
        margin: 0;
        font-size: 1.5em;
    }

    & span{
        font-size: 5em;
        margin-bottom: 1vh;
    }
    
    &:hover{
        background-color: ${(colors.blue.main)};
        color: ${colors.white.main};
        transition: background-color ease-in-out 100ms;
        cursor: pointer;
    }
`;