import { useNavigate } from "react-router-dom";
import { MenuListElement } from "./menuList.style";

export interface MenuItem {
    data: {
    text: string;
    link: string;
};
}

export const MenuList = ({ data }: MenuItem) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(data.link);
    };

    return <MenuListElement onClick={handleClick}>{data.text}</MenuListElement>;
};