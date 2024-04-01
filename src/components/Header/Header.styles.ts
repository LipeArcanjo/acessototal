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
    align-items: center;
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

export const MenuCategories = styled.div<{ isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 17%;
    left: 0;
    background-color: white;
    width: 100%;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 600px) {
        display: ${(props) => (props.isOpen ? "flex" : "none")};
    }
`;

export const MobileMenuIcon = styled.div`
    display: none;

    @media screen and (max-width: 600px) {
        display: block;
        cursor: pointer;
    }
`;

export const CloseMenuIcon = styled.div`
    align-self: flex-end; 
    cursor: pointer;
`;