import { styled } from 'styled-components';
import { colors } from "../../styles/colors";

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${colors.dark_blue.main};
    border-radius: 10px;

    & Button {
        margin: 3vh 0 5vh 0;
        padding: 8px 20px;
        border-radius: 5px;
        overflow: hidden;
        background-color: ${colors.blue.pale};

        &:hover {
            background-color: ${colors.dark_blue.main};
            box-shadow: 0 0 20px 10px hsla(204, 70%, 53%, 0.5);
        }
    }

    h1 {
        padding-top: 5vh;
        font-size: 2.5rem;
        color: ${colors.dark_blue.main};
        margin: 0 auto;
    }

    p{
        color: ${colors.dark_blue.main};
        margin: 0 auto;
    }

    #register-link{
        text-decoration: underline;

        &:hover{
            cursor: pointer;
        }
    }
`

export const Form = styled.form`
    margin: 3vh 0;
    display: inline-grid;

    & label {
        margin-top: 3vh;
    }

    & input{
        width: 35vw;
        height: 6vh;
        padding: 0 16px;
        border: 2px solid ${colors.blue.main};
        border-radius: 4px;
        margin-top: 1vh;
        outline: 0;
        transition: .2s;

        &:focus {
            border-color: ${colors.dark_blue.main};
        }
    }
`