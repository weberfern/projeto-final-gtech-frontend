import Logo from './Logo';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instagram.svg';
import twitterIcon from '../assets/twitter.svg';
import FooterInformation from './FooterInformation';
import './styles/Footer.css';

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
                <div className='footer-links-container'>
                    {/* INFORMAÇÕES */}
                    <div className="footer-column">
                        <FooterInformation
                            title="Informação"
                            informations={[
                                { text: "Sobre Drip Store", link: "/about" },
                                { text: "Segurança", link: "/security" },
                                { text: "Wishlist", link: "/wishlist" },
                                { text: "Blog", link: "/blog" },
                                { text: "Trabalhe conosco", link: "/work" },
                                { text: "Meus Pedidos", link: "/orders" },
                            ]}
                        />
                    </div>

                    {/* CATEGORIAS */}
                    <div className="footer-column">
                        <FooterInformation
                            title="Categorias"
                            informations={[
                                { text: "Camisetas", link: "/category/shirts" },
                                { text: "Calças", link: "/category/pants" },
                                { text: "Bonés", link: "/category/caps" },
                                { text: "Headphones", link: "/category/headphones" },
                                { text: "Tênis", link: "/category/shoes" },
                            ]}
                        />
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