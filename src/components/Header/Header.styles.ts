import { Link } from "react-router-dom";
import { styled } from 'styled-components';

export const HeaderElement = styled.header`
    padding: 0;
`;

export const HeaderWrapperElement = styled.div`
    padding: 3.5vh 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
`;

export const MenuWrapperElement = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 auto;
    gap: 1rem;
`;

export const LogoElement = styled(Link)`
    img {
    width: 104px;
    margin-right: 32px;
}
`;

export const MenuCategories = styled.div`
    display: flex;
    justify-content: space-between;
`