import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { UserMenuElement } from "./UserMenu.style";
import { HiUser } from "react-icons/hi";

export const UserMenu = () => {
    const token = false;

    const navigate = useNavigate();

    const handleClick = () => {
    navigate("/login");
    };

    return (
    <UserMenuElement>
        {!token ? (
        <>
            <Button size="small" onClick={handleClick}>
                <HiUser size={35}
                style={{
                    padding: '0 8px 0 0'
                }}/>
                Login
            </Button>
        </>
        ) : (
        <>
            <HiUser size={35}
                style={{
                    padding: '0 8px 0 0'
                }}/>
            <span>Felipe Arcanjo</span>
        </>
        )}
    </UserMenuElement>
);
};