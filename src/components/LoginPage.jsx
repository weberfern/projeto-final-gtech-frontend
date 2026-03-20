import "./styles/LoginPage.css";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import googleIcon from "../assets/google-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";

const LoginPage = () => {
    return (
        <Layout>
            <div className="login-page">
                <div className="login-container">
                    <div className="login-content">
                        <h2>Acesse sua conta</h2>
                        <p>Novo cliente? Registre-se <Link to="/register">aqui</Link>.</p>

                        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                <label htmlFor="email">Login *</label>
                                <input type="email" id="email" placeholder="Insira seu login ou e-mail" />
                            </div>

                            <div className="input-group">
                                <label htmlFor="password">Senha *</label>
                                <input type="password" id="password" placeholder="Insira sua senha" />
                            </div>

                            <div className="forgot-password">
                                <Link to="/">Esqueci a senha</Link>
                            </div>

                            <button type="submit" className="login-btn">Acessar Conta</button>
                        </form>

                        <div className="login-social">
                            <p>Ou faça login com</p>
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

export default LoginPage;