import { Layout } from "../../components/Layout/Layout";
import { AcessibilityFirstContent, AcessibilityList, AcessibilityWrapper , AcessibilitySecondContent } from "./Acessibility.style";

export default function Acessibility() {

    return (
        <Layout>
            <AcessibilityWrapper>
                    <h1>Acessibilidade</h1>
            </AcessibilityWrapper>
            <AcessibilityWrapper>
                <AcessibilityFirstContent>
                    <AcessibilityList>
                        <ul>
                            <li>Visual</li>
                            <li>Motora </li>
                            <li>Auditiva </li>
                            <li>Daltonismo </li>
                            <li>Idoso </li>
                            <li>Motora </li>
                        </ul>
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