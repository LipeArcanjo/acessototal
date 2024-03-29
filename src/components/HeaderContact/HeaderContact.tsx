    import {
    IconWrapperElement,
    } from "./HeaderContact.style";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
    import { HeaderElementContact } from "./HeaderContact.style";

export const HeaderContact = () => {

    return (
        <HeaderElementContact>
            <span>
                Email: contato@acessototal.com.br - Tel: (12) 2456-7890
            </span>
            <div>
                <IconWrapperElement>
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
                        }}icon={faTwitter} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon style={{
                            color: '#03254c'
                        }}icon={faInstagram} />
                    </a>
                </IconWrapperElement>
            </div>
        </HeaderElementContact>
);
};