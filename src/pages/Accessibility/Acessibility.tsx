import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { accessibilitiesList } from "../../mocks/acessibilityList";
import { AcessibilityFirstContent, AcessibilityList, AcessibilityWrapper, AcessibilitySecondContent, NavegaCaoImage } from "./Acessibility.style";
import { AccessibilityCard } from "../../components/AccessibilityList/AccessibilityList";
import NavegaCao from "../../assets/personagem-exemplo-acessibilidade.jpg";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

interface Accessibility {
    text: string;
}

export default function Acessibility() {

    const [accessibilities, setAccessibilities] = useState<Accessibility[]>([]);

    useEffect(() => {
        setAccessibilities(accessibilitiesList);
    }, []);

    

    return (
        <Layout>
            <AcessibilityWrapper>
                <h1>Acessibilidade</h1>
            </AcessibilityWrapper>
            <AcessibilityWrapper>
                <AcessibilityFirstContent>
                    <AcessibilityList>
                        {accessibilities.map((accessibility, index) => (
                            <AccessibilityCard key={index}>
                                <h2>{accessibility.text}</h2>
                            </AccessibilityCard>
                        ))}
                    </AcessibilityList>
                    <NavegaCaoImage>
                        <img src={NavegaCao} alt="Personagem cachorro criado pela AcessoTotal para representar a acessibilidade." />
                        <p>Oi! Eu sou o NavegaCão, sou eu quem irá te auxiliar  durante toda a navegação! </p>
                        <ToggleSwitch />
                    </NavegaCaoImage>
                </AcessibilityFirstContent>
                <AcessibilitySecondContent>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed luctus iaculis semper. Mauris at est non mauris congue
                        consectetur. Sed porttitor, lacus et consequat vestibulum,
                        quam velit ullamcorper mi, non vestibulum lorem risus at tortor.
                    </p>
                </AcessibilitySecondContent>
            </AcessibilityWrapper>
        </Layout>
    );
}