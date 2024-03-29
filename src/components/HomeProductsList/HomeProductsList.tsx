import { useNavigate } from "react-router-dom";
import { HomeProductsList } from "./HomeProductsList.style";

export interface ProductItem {
    data: {
    text: string;
    link: string;
};
}

export const ProductList = ({ data }: ProductItem) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(data.link);
    };

    return <HomeProductsList onClick={handleClick}>{data.text}</HomeProductsList>;
};