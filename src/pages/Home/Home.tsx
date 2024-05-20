import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { HomeActionContentElement, HomeColumnElement, HomeFirstImage, HomeWrapperElement, HomeProducts, HomeProductsItemsList, HomeProductsItems, HomeMarketingImage, HomeFlex, HomeProductsRow, } from "./Home.style";
import FirstImage from "../../assets/computador-CRM-Salesforce.png"
import MarketingImage from "../../assets/marketing.png"
import { useEffect, useState } from "react";
import { products } from "../../mocks/products";
import { ProductList } from "../../components/HomeProductsList/HomeProductsList";

export default function Home() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(products);
    }, []);

    return (
        <Layout>
            <HomeWrapperElement>
                <HomeActionContentElement>
                    <h1>Salesforce</h1>
                    <p>O que é a Salesforce? O que é CRM?</p>
                    <p>Assista ao vídeo abaixo de introdução para saber mais.</p>
                    <Button size="small" variant="info" onClick={() => { }}>
                        Clique aqui!
                    </Button>
                </HomeActionContentElement>
                <HomeFirstImage src={FirstImage} />
            </HomeWrapperElement>
            <HomeWrapperElement>
                <HomeColumnElement>
                    <HomeActionContentElement>
                        <h2>Produtos</h2>
                    </HomeActionContentElement>
                    <HomeProducts>
                        <HomeProductsItemsList>
                            {product.map((item, index) => (
                                <ProductList key={index} data={item} />
                            ))}
                        </HomeProductsItemsList>
                    </HomeProducts>
                    <HomeProductsRow>
                        <HomeFlex>
                            {/* Não criei um componente pois planejamos apenas o conteúdo de marketing. */}
                            <HomeProductsItems>
                                <h4> {'>'} Produtos </h4>
                                <h3>Marketing</h3>
                                <p>
                                    Faça cada momento valer a pena
                                    para alcançar o sucesso imediato
                                </p>
                                <Button size="large" variant="info" onClick={() => { }}>
                                    Se torne um parceiro {'>'}
                                </Button>
                            </HomeProductsItems>
                            <HomeMarketingImage src={MarketingImage} />
                        </HomeFlex>
                    </HomeProductsRow>
                </HomeColumnElement>
            </HomeWrapperElement>
        </Layout>
    );
}