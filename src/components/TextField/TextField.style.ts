import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const TextFieldElement = styled.div`
    display: inline-grid;

    & input{
        width: 300px;
        height: 6vh;
        padding: 0 16px;
        border: 2px solid ${colors.blue.main};
        border-radius: 4px;
        outline: 0;
        transition: .2s;

        &:focus {
            border-color: ${colors.dark_blue.main};
        }
    }
}
`;
