import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { UserMenuElement } from "./UserMenu.style";
import { HiUser } from "react-icons/hi";

export const UserMenu = () => {
    const navigate = useNavigate();

    const token = sessionStorage.getItem("userToken");
    const fullname = sessionStorage.getItem("fullname");

    const firstName = fullname ? fullname.split(" ")[0].toUpperCase() : "";

    const handleClick = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        sessionStorage.removeItem("userToken");
        sessionStorage.removeItem("fullname");
        navigate("/");
    };

    return (
        <UserMenuElement>
            {!token ? (
                <>
                    <Button size="small" onClick={handleClick}>
                        <HiUser size={35}
                            style={{
                                padding: '0 8px 0 0'
                            }} />
                        Login
                    </Button>
                </>
            ) : (
                <>
                    <HiUser size={35}
                        style={{
                            padding: '0 8px 0 0'
                        }} />
                    <span>{firstName}</span>
                    <span id="logout" onClick={handleLogout}>Sair</span>
                </>
            )}
        </UserMenuElement>
    );
};