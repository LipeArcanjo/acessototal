import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { ContactImage, ContactWrapper, IconContent } from "./Contact.style";
import { contactList } from "../../mocks/contacts";
import { ContactCard } from "../../components/ContactCard/ContactCard";
import { ContactCardContent, ContactCardRow } from "../../components/ContactCard/ContactCard.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

export default function Contact() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts(contactList);
    }, []);

    // Função para renderizar link
    function handleLink(url:string) {
        window.open(url, '_blank', 'noopener, noreferrer');

    }

    return (
        <Layout>
            {/* LEMBRAR DE VOLTAR PRA DENTRO DO CONTACT WRAPPER!! */}
            <ContactWrapper>
                <h1>Quem são os hérois por trás das telas?</h1>
                
                {contacts.map((contact, index) => (
                    <ContactCard key={index}>
                        {/* Verificando se o índice é par ou impar */}
                        <ContactCardRow reverse={index % 2 !== 0}>
                            <ContactCardContent>
                                {/* Informações dos contatos */}
                                <h3>{contact.rm}</h3>
                                <h2>{contact.name}</h2>
                                <h4>{contact.surname}</h4>
                                <IconContent>
                                    {/* Icones */}
                                    {/* Local */}
                                    <FontAwesomeIcon style={{
                                        color: 'black',
                                        width: '30px',
                                        height: '30px',
                                        padding: '15px',
                                    }} icon={faLocationDot} />
                                    <span>{contact.local}</span>
                                </IconContent>
                                <IconContent>
                                    {/* Universidade */}
                                    <FontAwesomeIcon style={{
                                        color: 'black',
                                        width: '30px',
                                        height: '30px',
                                        padding: '15px',
                                    }} icon={faBuildingColumns} />
                                    <span>{contact.university}</span>
                                </IconContent>
                                <IconContent>
                                    {/* Github */}
                                    <FontAwesomeIcon style={{
                                        color: 'black',
                                        width: '30px',
                                        height: '30px',
                                        padding: '15px',
                                    }} icon={faGithub} />
                                    <span>{contact.github}</span>
                                </IconContent>
                            </ContactCardContent>
                            {/* Foto dos HERÓIS */}
                            <ContactImage>
                                <img src={contact.image} alt={contact.name + contact.surname} />
                            </ContactImage>
                        </ContactCardRow>
                        <Button variant="info" onClick={() => handleLink('https://www.linkedin.com/in/lipearcanjoms/')}>
                            Entre em contato
                        </Button>
                    </ContactCard>
                ))}
                {/* <h1>
                <a href="https://github.com/LipeArcanjo/acessototal">Link do github</a>
                </h1>
                <h1>
                <a href="https://youtu.be/Z1WsOGEc9wM">Link do video no youtube</a>
                </h1>
                <p>https://github.com/LipeArcanjo/acessototal</p>
                <p>https://youtu.be/Z1WsOGEc9wM</p> */}
            </ContactWrapper>
        </Layout>
    );
}