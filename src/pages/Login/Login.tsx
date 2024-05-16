import { useLocation } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { Form, LoginBox } from "./Login.style";
import { useEffect, useState } from "react";

export default function Login() {
    const location = useLocation();
    const [isRegister, setIsRegister] = useState(false);

    useEffect(() => {
        if (location.hash === '#register') {
            setIsRegister(true);
        } else {
            setIsRegister(false);
        }
    }, [location]);

    const handleRegisterRedirect = () => {
        window.location.hash = '#register';
    };

    const handleLoginRedirect = () => {
        window.location.hash = '';
    };

    return (
        <Layout>
            <LoginBox>
                {isRegister ? (
                    <div>
                        <h1>Registro</h1>
                        <p>Por favor, digite suas credenciais</p>
                        <Form>
                            {/* Nome Completo */}
                            <label htmlFor="name">Nome Completo</label>
                            <input type="text" id='name' name='name' />
                            {/* Email */}
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name='email' />
                            {/* Senha */}
                            <label htmlFor="password">Senha</label>
                            <input type="text" id='password' name='password' />

                            <label htmlFor="acessibilidades">Acessibilidades
                                {/* Visual */}
                                <label className="checkbox">
                                    <input id="checkbox-visual" type="checkbox" name="checkbox" />
                                    Visual
                                </label>
                                {/* Motora */}
                                <label className="checkbox">
                                    <input id="checkbox-motora" type="checkbox" name="checkbox" />
                                    Motora
                                </label>
                                {/* Auditiva */}
                                <label className="checkbox">
                                    <input id="checkbox-auditiva" type="checkbox" name="checkbox" />
                                    Auditiva
                                </label>
                                {/* Daltonismo */}
                                <label className="checkbox">
                                    <input id="checkbox-daltonismo" type="checkbox" name="checkbox" />
                                    Daltonismo
                                </label>
                                {/* Idoso */}
                                <label className="checkbox">
                                    <input id="checkbox-idoso" type="checkbox" name="checkbox" />
                                    Idoso
                                </label>
                            </label>
                        </Form>
                        <p onClick={handleLoginRedirect} className="link">Já possui cadastro? Entre aqui!</p>
                        <Button size="small" onClick={() => { }}>Registrar-se</Button>
                    </div>
                ) : (
                    <div>
                        <h1>Login</h1>
                        <p>Por favor, entre com suas credenciais</p>
                        <Form>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name='email' />
                            <label htmlFor="password">Senha</label>
                            <input type="text" id='password' name='password' />
                        </Form>
                        <p onClick={handleRegisterRedirect} className="link">Ainda não possui cadastro? Registre-se aqui!</p>
                        <Button size="small" onClick={() => { }}>Login</Button>
                    </div>
                )}
            </LoginBox>
        </Layout>
    );
}
