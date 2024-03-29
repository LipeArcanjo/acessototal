import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { HomeActionContentElement, HomeWrapperElement } from "./Home.style";

export default function Home() {
    return (
        <Layout>
            <HomeWrapperElement>
                <HomeActionContentElement>
                    <h1>Salesforce</h1>
                    {/* Cometi a heresia do BR só pra testar por enquanto!!! KKKKKKKKK */}
                    <p>O que é a Salesforce? O que é CRM? 
                    <br />
                    Assista ao vídeo abaixo de introdução para saber mais.</p>
                    <Button onClick={() => { } }>
                        Clique aqui para saber mais!
                    </Button>
                </HomeActionContentElement>
            </HomeWrapperElement>
            
        </Layout>
);
}