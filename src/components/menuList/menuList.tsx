import { useNavigate } from "react-router-dom";
import { MenuListElement } from "./menuList.style";
import { useLocation } from "react-router-dom";

export interface MenuItem {
    data: {
        text: string;
        link: string;
    };
}

export const MenuList = ({ data }: MenuItem) => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = () => {
        return location.pathname === data.link;
    };

    const active = isActive() ? 'active' : '';

    const handleClick = () => {
        navigate(data.link);
    };

    return (
        <MenuListElement className={active} onClick={handleClick}>
            {data.text}
        </MenuListElement>
    );
};