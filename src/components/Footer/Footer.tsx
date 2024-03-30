import { FooterActionContentElement, FooterBg, FooterImage, FooterSocialMedia, FooterWrapperCopyright, FooterWrapperElement } from "./Footer.style";
import FooterImageBg from "../../assets/Salesforce_logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FooterList } from "../FooterList/FooterList";
import { IconElement } from "../SocialMediaContact/SocialMediaContact.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {

    return (
        <FooterBg>
            <FooterWrapperElement>
                <FooterActionContentElement>
                    {/* Logo com navigate para o inicio da página */}
                    <AnchorLink href="#logo">
                        <FooterImage src={FooterImageBg} />
                    </AnchorLink>
                    {/* Lista de páginas disponíveis */}
                    <FooterList />
                    <FooterSocialMedia>
                        <span>
                            Redes sociais:
                        </span>
                        {/* Coloquei um a href porque em tese a pessoa clicaria com a intenção de ir para a rede social
                    ou seja, trocaria a tela naturalmente, por isso não usei um navigate. */}
                        <IconElement >
                            <a href="/">
                                <FontAwesomeIcon style={{
                                    color: '#ffffff',
                                    backgroundColor: 'rgba(255,255,255,.15)',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    textAlign: 'center',
                                    lineHeight: '30px',
                                    verticalAlign: 'middle',
                                    padding: '15px',
                                }} icon={faFacebookF} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon style={{
                                    color: '#ffffff',
                                    backgroundColor: 'rgba(255,255,255,.15)',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    textAlign: 'center',
                                    lineHeight: '30px',
                                    verticalAlign: 'middle',
                                    padding: '15px',
                                }} icon={faXTwitter} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon style={{
                                    color: '#ffffff',
                                    backgroundColor: 'rgba(255,255,255,.15)',
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    textAlign: 'center',
                                    lineHeight: '30px',
                                    verticalAlign: 'middle',
                                    padding: '15px',
                                }} icon={faInstagram} />
                            </a>
                        </IconElement>
                    </FooterSocialMedia>
                </FooterActionContentElement>
            </FooterWrapperElement>
            <FooterWrapperCopyright>
                <span>
                © Copyright 2023 Salesforce, Inc.
                Todos os direitos reservados.
                As diversas marcas comerciais
                pertencem a seus respectivos
                Salesforce Brasil, Av. Jornalista
                Roberto Marinho, 85 – 14º andar –
                Cidade Monções, São Paulo – SP, 
                04575-000 Brasil.
                </span>
            </FooterWrapperCopyright>
        </FooterBg>
    );
};