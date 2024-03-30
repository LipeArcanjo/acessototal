import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { HomeActionContentElement, HomeColumnElement, HomeFirstImage, HomeWrapperElement, HomeProducts, HomeProductsItemsList, HomeProductsItems,} from "./Home.style";
import FirstImage from "../../assets/computador-CRM-Salesforce.png"
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
                    {/* Cometi a heresia do BR só pra testar por enquanto!!! KKKKKKKKK */}
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
                    <HomeActionContentElement>
                        <HomeProductsItems>
                            <p>Hello World!</p>
                        </HomeProductsItems>
                    </HomeActionContentElement>
                </HomeColumnElement>
            </HomeWrapperElement>
        </Layout>
    );
}