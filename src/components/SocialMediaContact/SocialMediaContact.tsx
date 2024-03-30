    import {
    IconElement
    } from "./SocialMediaContact.style";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
    import { HeaderElementContact } from "./SocialMediaContact.style";

export const SocialMediaContact = () => {

    return (
        <HeaderElementContact>
            <span>
                Email: contato@acessototal.com.br - Tel: (12) 2456-7890
            </span>
            <div>
                <IconElement>
                    <span>
                        Redes sociais:
                    </span>
                    {/* Coloquei um a href porque em tese a pessoa clicaria com a intenção de ir para a rede social
                    ou seja, trocaria a tela naturalmente, por isso não usei um navigate. */}
                    <a href="/">
                        <FontAwesomeIcon style={{
                            color: '#03254c'
                        }} icon={faFacebookF} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon style={{
                            color: '#03254c'
                        }}icon={faXTwitter} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon style={{
                            color: '#03254c'
                        }}icon={faInstagram} />
                    </a>
                </IconElement>
            </div>
        </HeaderElementContact>
);
};