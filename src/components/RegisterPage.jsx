import "./styles/LoginPage.css"; /* MESMO CSS DO LOGINPAGE */
import { Link } from 'react-router-dom';
import Layout from "../layouts/Layout";
import googleIcon from "../assets/google-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";

const RegisterPage = () => {
    return (
        <Layout>
            <div className="login-page">
                <div className="login-container" style={{ maxWidth: "600px" }}>
                    <div className="login-content">
                        <h2>Crie sua conta</h2>
                        <p>Já possui uma conta? Entre <Link to="/login">aqui.</Link></p>

                        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                <label htmlFor="name">Nome Completo *</label>
                                <input type="text" id="name" placeholder="Insira seu nome completo." />
                            </div>
                            <div className="input-group">
                                <label htmlFor="cpf">CPF *</label>
                                <input type="text" id="cpf" placeholder="Insira seu CPF" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">E-mail *</label>
                                <input type="email" id="email" placeholder="Insira seu e-mail" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Senha *</label>
                                <input type="password" id="password" placeholder="Insira sua senha" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone">Telefone *</label>
                                <input type="text" id="phone" placeholder="Insira seu telefone" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="confirm-password">Confirmar Senha *</label>
                                <input type="password" id="confirm-password" placeholder="Confirme sua senha" />
                            </div>

                            <button type="submit" className="login-btn">Criar Conta</button>
                        </form>

                        <div className="login-social">
                            <p>Ou crie sua conta com</p>
                            <div className="social-buttons">
                                <button className="social-btn google"><img src={googleIcon} alt="Google" width="24" height="24" /></button>
                                <button className="social-btn facebook"><img src={facebookIcon} alt="Facebook" width="24" height="24" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RegisterPage;