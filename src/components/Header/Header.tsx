import {
    HeaderElement,
    HeaderWrapperElement,
    LogoElement,
    MenuWrapperElement,
    MenuCategories,
} from "./Header.styles";
import Logo from "../../assets/Salesforce_logo.png";
import { UserMenu } from "../UserMenu/UserMenu";
import { menus } from "../../mocks"
import { useEffect, useState } from "react";
import { MenuList } from "../menuList/menuList";
import { SocialMediaContact } from "../SocialMediaContact/SocialMediaContact";

export const Header = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        setMenu(menus);
    }, []);

    return (
        <HeaderElement>
            {/* Contato */}
            <SocialMediaContact />
            {/* Navbar */}
            <HeaderWrapperElement>
                <MenuWrapperElement>
                    {/* Logo */}
                    <LogoElement to="/">
                        <img src={Logo} id="logo" alt="Salesforce Logo" />
                    </LogoElement>
                    {/* Páginas disponíveis */}
                    <MenuCategories>
                        {menu.map((menu, index) => (
                            <MenuList key={index} data={menu}
                            />
                        ))}
                    </MenuCategories>
                </MenuWrapperElement>
                {/* Login */}
                <UserMenu />
            </HeaderWrapperElement>
        </HeaderElement>
    );
};