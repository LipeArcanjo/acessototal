import {
    HeaderElement,
    HeaderWrapperElement,
    LogoElement,
    MenuWrapperElement,
    MenuCategories,
    MobileMenuIcon,
    CloseMenuIcon
} from "./Header.styles";
import Logo from "../../assets/Salesforce_logo.png";
import { UserMenu } from "../UserMenu/UserMenu";
import { menus } from "../../mocks"
import { useEffect, useState } from "react";
import { MenuList } from "../menuList/menuList";
import { SocialMediaContact } from "../SocialMediaContact/SocialMediaContact";
import { HiMenu, HiX } from "react-icons/hi";

type MenuItem = {
    text: string;
    link: string;
};

export const Header = () => {

    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setMenu(menus);
    }, []);

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

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
                    <MenuCategories isOpen={isMenuOpen}>
                        <CloseMenuIcon isOpen={isMenuOpen} onClick={closeMenu}>
                            <HiX size={24} />
                        </CloseMenuIcon>
                        {menu.map((menu, index) => (
                            <MenuList key={index} data={menu}
                            />
                        ))}
                    </MenuCategories>
                </MenuWrapperElement>
                {/* Login */}
                <UserMenu />
                <MobileMenuIcon onClick={openMenu}>
                    <HiMenu size={24} />
                </MobileMenuIcon>
            </HeaderWrapperElement>
        </HeaderElement>
    );
};