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
    import { HeaderContact } from "../HeaderContact/HeaderContact";
    
export const Header = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        setMenu(menus);
    }, []);

    return (
        <HeaderElement>
            {/* Contato */}
            <HeaderContact />
            {/* Navbar */}
            <HeaderWrapperElement>
                <MenuWrapperElement>
                    {/* Logo */}
                    <LogoElement to="/">
                        <img src={Logo} alt="Salesforce Logo" />
                    </LogoElement>
                    {/* Páginas disponíveis */}
                    <MenuCategories>
                        {menu.map((item, index) => (
                            <MenuList key={index} data={item} />
                        ))}
                    </MenuCategories>
                </MenuWrapperElement>
                {/* Login */}
                <UserMenu />
            </HeaderWrapperElement>
        </HeaderElement>
    );
};