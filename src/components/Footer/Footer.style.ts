import { styled } from 'styled-components';
import { colors } from '../../styles/colors';

export const FooterBg = styled.footer`
    width: 100%;
    background-color: ${colors.dark_blue.main};
    border-top: 0.8rem solid ${colors.blue.main};
`;

export const FooterWrapperElement = styled.div`
    width: 89vw;
    margin: 0 auto;
    padding: 6vh 0;
`;

export const FooterWrapperCopyright = styled.div`
    width: 89vw;
    margin: 0 auto;
    padding-bottom: 2vh;
    color:${colors.white.main};
    text-align: center;
    & span {
        font-size: 1.2em;
        font-weight: 200;
        font-style: italic;
    }
`;

export const FooterActionContentElement = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5em;
`;

export const FooterImage = styled.img`
    max-width: 15vw;
    width: auto;
    cursor: pointer;
`;

export const FooterSocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-left: 22vw;

    & span{
        color: ${colors.white.main};
        font-weight: 600;
        font-size: 1.45em;
    }
`;

