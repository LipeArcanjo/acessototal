import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { Checkbox, Form, RegisterBox } from "./Register.style";
import { useState } from "react";

export default function Register() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    // Para fazer com que a senha fique visível ou não
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleClick = () => {
        navigate("/login");
    };

    return (
        <Layout>
            <RegisterBox>
                <h1>Registro</h1>
                <p>Por favor, digite suas credenciais</p>
                <Form>
                    {/* Nome de usuário */}
                    <label htmlFor="username">Nome de usuário</label>
                    <input type="text" id='username' name='username' />
                    {/* Nome Completo */}
                    <label htmlFor="name">Nome Completo</label>
                    <input type="text" id='name' name='name' />
                    {/* Email */}
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' name='email' />
                    {/* Senha */}
                    <label htmlFor="password">Senha</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id='password'
                        name='password'
                    />
                    <p onClick={togglePasswordVisibility} id="show-password">{showPassword ? "Ocultar " : "Mostrar "}Senha</p>

                    {/* Acessibilidades */}
                    <label htmlFor="checkbox" className="checkbox">
                        Acessibilidades
                        <Checkbox>
                            {/* Visual */}
                            <input id="checkbox-visual" type="checkbox" name="checkbox" />
                            Visual
                            {/* Motora */}
                            <input id="checkbox-motora" type="checkbox" name="checkbox" />
                            Motora
                            {/* Auditiva */}
                            <input id="checkbox-auditiva" type="checkbox" name="checkbox" />
                            Auditiva
                            {/* Daltonismo */}
                            <input id="checkbox-daltonismo" type="checkbox" name="checkbox" />
                            Daltonismo
                            {/* Idoso */}
                            <input id="checkbox-idoso" type="checkbox" name="checkbox" />
                            Idoso
                        </Checkbox>
                    </label>
                </Form>
                <p onClick={handleClick} className="link">Já possui cadastro? Entre aqui!</p>
                <Button size="small" onClick={() => { }}>Registrar-se</Button>
            </RegisterBox>
        </Layout>
    );
}