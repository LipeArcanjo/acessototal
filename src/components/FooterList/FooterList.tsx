import { FooterNavigateList } from "./FooterList.style";
import '../../styles/GlobalStyles';
import { useNavigate } from "react-router-dom";

export const FooterList = () => {

    const navigate = useNavigate();

    function handleClickHomeAcessibility () {
        navigate("/acessibilidade");
    }

    function handleClickHomeFeedback () {
        navigate("/feedback");
    }

    function handleClickHomeContact () {
        navigate("/contato");
    }

    return (
        <FooterNavigateList>
            <ul>
                <li onClick={handleClickHomeAcessibility}>Acessibilidade</li>
                <li onClick={handleClickHomeFeedback}>Feedback</li>
                <li onClick={handleClickHomeContact}>Contato</li>
            </ul>
        </FooterNavigateList>
    );
};