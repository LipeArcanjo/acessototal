import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { Checkbox, Form, RegisterBox } from "./Register.style";
import { useState } from "react";
import { TextField } from "../../components/TextField/TextField";

export default function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [acessibilidades, setAcessibilidades] = useState<string[]>([]);

    // Para fazer com que a senha fique visível ou não
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleClick = () => {
        navigate("/login");
    };

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNomeUsuario(value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSenha(value);
    };

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setNomeCompleto(value);
    };

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setEmail(value);
    };

    const handleCheckboxChange = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            setAcessibilidades([...acessibilidades, value]);
        } else {
            setAcessibilidades(acessibilidades.filter(item => item !== value));
        }
    };

    const handleRegister = async (event: any) => {
        event.preventDefault();
        const url = "http://localhost:8000/register";

        const payload = {
            nome_usuario: nomeUsuario,
            senha: senha,
            nome_completo: nomeCompleto,
            email: email,
            acessibilidade: acessibilidades.length > 0 ? acessibilidades.join(', ') : 'Nenhuma'
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
                const error = await response.json();
                console.log(error);
                return;
            }

            const data = await response.json();
            console.log(data); // Mensagem de sucesso ou outra resposta do servidor
            navigate("/login"); // Redireciona para a página de login após o registro bem-sucedido

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <RegisterBox>
                <h1>Registro</h1>
                <p>Por favor, digite suas credenciais</p>
                <Form onSubmit={handleRegister}>
                    {/* Nome de usuário */}
                    <TextField
                        id="username"
                        label="Nome de usuário"
                        type="username"
                        onChange={handleUsername}
                        required
                    />
                    {/* Nome Completo */}
                    <TextField
                        id="name"
                        label="Nome Completo"
                        type="name"
                        onChange={handleName}
                        required
                    />
                    {/* Email */}
                    <TextField
                        id="email"
                        label="E-mail"
                        type="email"
                        onChange={handleEmail}
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

                    {/* Acessibilidades */}
                    <label htmlFor="checkbox" className="checkbox">
                        Acessibilidades
                        <Checkbox>
                            {/* Visual */}
                            <input id="checkbox-visual" type="checkbox" name="checkbox" value="Visual" onChange={handleCheckboxChange} />
                            Visual
                            {/* Motora */}
                            <input id="checkbox-motora" type="checkbox" name="checkbox" value="Motora" onChange={handleCheckboxChange} />
                            Motora
                            {/* Auditiva */}
                            <input id="checkbox-auditiva" type="checkbox" name="checkbox" value="Auditiva" onChange={handleCheckboxChange} />
                            Auditiva
                            {/* Daltonismo */}
                            <input id="checkbox-daltonismo" type="checkbox" name="checkbox" value="Daltonismo" onChange={handleCheckboxChange} />
                            Daltonismo
                            {/* Idoso */}
                            <input id="checkbox-idoso" type="checkbox" name="checkbox" value="Idoso" onChange={handleCheckboxChange} />
                            Idoso
                        </Checkbox>
                    </label>
                    <Button onClick={() => {}} type="submit">Registrar-se</Button>
                </Form>
                <p onClick={handleClick} className="link">Já possui cadastro? Entre aqui!</p>
                <a href="https://youtu.be/LJ3lZyz_4dk">
                    Link do vídeo de demonstração do Login/Registro no banco de dados
                </a>
            </RegisterBox>
        </Layout>
    );
}
