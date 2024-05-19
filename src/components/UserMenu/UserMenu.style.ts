import { styled } from 'styled-components';

export const UserMenuElement = styled.nav`
    display: flex;
    align-items: center;
    width: 200px;

    span:nth-child(2) {
        margin-right: 2vw;
    }

    #logout {
        text-decoration: underline;
        cursor: pointer;
    }
`;
