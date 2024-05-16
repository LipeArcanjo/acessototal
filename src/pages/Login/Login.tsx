import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { Form, LoginBox } from "./Login.style";

export default function Login() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/register");
    };

    return (
        <Layout>
            <LoginBox>
                <h1>Login</h1>
                <p>Por favor, entre com suas credenciais</p>
                <Form>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email' />
                    <label htmlFor="password">Senha</label>
                    <input type="text" id='password' name='password' />
                </Form>
                <p onClick={handleClick} id="register-link">Ainda não possui cadastro? Registre-se aqui!</p>
                <Button size="small" onClick={() => { }}>Login</Button>
            </LoginBox>
        </Layout>
    )

}