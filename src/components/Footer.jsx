import Logo from './Logo';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';
import './Footer.css';

const Footer = () => {

    {/* PEGAR ANO ATUAL PARA FOOTER DINÂMICO */ }
    const anoAtual = new Date().getFullYear();

    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                {/* LOGO E DESCRIÇÃO */}
                <div className="footer-column logo-column">
                    <Logo variant="footer" />
                    <p className="footer-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="social-links">
                        <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
                        <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
                        <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
                    </div>
                </div>

                {/* INFORMAÇÕES */}
                <div className="footer-column">
                    <h3>Informação</h3>
                    <ul>
                        <li><a href="/about">Sobre Drip Store</a></li>
                        <li><a href="/security">Segurança</a></li>
                        <li><a href="/wishlist">Wishlist</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/work">Trabalhe conosco</a></li>
                        <li><a href="/orders">Meus Pedidos</a></li>
                    </ul>
                </div>

                {/* CATEGORIAS */}
                <div className="footer-column">
                    <h3>Categorias</h3>
                    <ul>
                        <li><a href="/category/shirts">Camisetas</a></li>
                        <li><a href="/category/pants">Calças</a></li>
                        <li><a href="/category/caps">Bonés</a></li>
                        <li><a href="/category/headphones">Headphones</a></li>
                        <li><a href="/category/shoes">Tênis</a></li>
                    </ul>
                </div>

                {/* CONTATO */}
                <div className="footer-column">
                    <h3>Contato</h3>
                    <p>
                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                    </p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>

            {/* COPYRIGHT */}
            <hr className="footer-divider" />
            <div className="footer-copyright">
                &copy; {anoAtual} - Drip Store - Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer;