import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import miniCart from '../assets/mini-cart.svg';
import './styles/Header.css';

const Header = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/products?filter=${searchTerm}`)
        }
    };

    return (
        <header className='header-container'>
            <div className='header-content'>
                {/* LOGO */}
                <Logo variant='header' />

                {/* BARRA DE PESQUISA */}
                <form className='search-container' onSubmit={handleSearch}>
                    <input type="text" placeholder='Pesquisar produto...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="11"
                                cy="11"
                                r="8"
                                stroke="#666666"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16.5 16.5L22 22"
                                stroke="#666666"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </form>

                {/* NA MSM DIV CADASTRO/ENTRAR E CARRINHO PARA CONTROLA O ESPAÇAMENTO */}
                <div className='header-controls'>
                    {/* ÁREA DE CADASTRO/ENTRAR */}
                    <div className='actions-container'>
                        <a href="/register" className='register-link'>Cadastre-se</a>
                        <a href="/login" className='login-button'>Entrar</a>
                    </div>

                    {/* CARRINHO */}
                    <div className='cart-container'>
                        <img src={miniCart} alt="Carrinho" />
                        <span className='cart-count'>2</span> {/* CONTADOR A IMPLEMENTAR POSTERIORMENTE */}
                    </div>
                </div>
            </div>

            {/* MENU DE NAVEGAÇÃO */}
            <nav className='nav-container'>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categories" className={({ isActive }) => isActive ? "active" : ""}>Categorias</NavLink>
                    </li>
                    <li>
                        <NavLink to="/orders" className={({ isActive }) => isActive ? "active" : ""}>Meus Pedidos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;