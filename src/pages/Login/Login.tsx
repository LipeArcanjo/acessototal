import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { TextField } from "../../components/TextField/TextField";
import { Form, LoginBox } from "./Login.style";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUsername(value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);
    };

    const handleLogin = async (event: any) => {
        event.preventDefault();
        const url = "http://localhost:8000/login/" + username + "/" + password;

        const payload = {
            username: username,
            password: password
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                if (response.status === 404) {
                    alert("Nome de usuário e/ou senha inválido.");
                } else {
                    const error = await response.json();
                    console.log(error);
                }
                return;
            }

            const data = await response.json();
            
            if (data) {
                sessionStorage.setItem("userToken", data.token);
                sessionStorage.setItem("fullname", data.fullname);
                navigate("/");
            }

        } catch (error) {
            console.log(error);
        } finally {
            console.log(
                "Nome de Usuário:", username
            );
            console.log(
                "Senha:", password
            );
        }
    };

    // Para fazer com que a senha fique visível ou não
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    // Navegar para registrar-se
    const handleClick = () => {
        navigate("/register");
    };

    return (
        <Layout>
            <LoginBox>
                <h1>Login</h1>
                <p>Por favor, entre com suas credenciais</p>
                <Form>
                    {/* Nome de usuário */}
                    <TextField
                        id="username"
                        label="Nome de usuário"
                        type="username"
                        onChange={handleUsername}
                        required
                    />
                    {/* Senha */}
                    <TextField
                        id="password"
                        label="Senha"
                        type={showPassword ? "text" : "password"}
                        onChange={handlePassword}
                        required
                        minLength={1}
                    />
                    <p onClick={togglePasswordVisibility} id="show-password">{showPassword ? "Ocultar " : "Mostrar "}Senha</p>
                    <Button onClick={handleLogin}>Entrar</Button>
                </Form>
                <p onClick={handleClick} className="link">Ainda não possui cadastro? Registre-se aqui!</p>
            </LoginBox>
        </Layout>
    );
}
