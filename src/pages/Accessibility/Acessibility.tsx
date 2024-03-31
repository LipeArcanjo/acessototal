import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { accessibilitiesList } from "../../mocks/acessibilityList";
import { AcessibilityFirstContent, AcessibilityList, AcessibilityWrapper, AcessibilitySecondContent } from "./Acessibility.style";
import { AccessibilityCard } from "../../components/AccessibilityList/AccessibilityList";

export default function Acessibility() {

    const [accessibilities, setAccessibilities] = useState([]);

    useEffect(() => {
        setAccessibilities(accessibilitiesList);
    }, []);

    const handleClick = () => {
        console.log("Clicou!");
    }

    return (
        <Layout>
            <AcessibilityWrapper>
                <h1>Acessibilidade</h1>
            </AcessibilityWrapper>
            <AcessibilityWrapper>
                <AcessibilityFirstContent>
                    <AcessibilityList>
                        {accessibilities.map((accessibilities, index) => (
                            <AccessibilityCard onClick={handleClick} key={index}>
                                <h1>{accessibilities.text}</h1>
                            </AccessibilityCard>
                        ))}
                    </AcessibilityList>
                    <img src="" alt="" />
                    <p>Hello World!</p>
                </AcessibilityFirstContent>
                <AcessibilitySecondContent>
                    <p>Hello World!</p>
                </AcessibilitySecondContent>
            </AcessibilityWrapper>
        </Layout>
    );
}