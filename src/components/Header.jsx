import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import miniCart from '../assets/mini-cart.svg';
import './styles/Header.css';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // Variável que diz pro React se a gaveta do celular está aberta ou fechada:
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/products?filter=${searchTerm}`);
            setIsMenuOpen(false);
        }
    };

    return (
        <header className='header-container'>
            <div className='header-content'>
                {/* 1. HAMBURGUER (Só aparece no Mobile) */}
                <button className="menu-hamburger" onClick={() => setIsMenuOpen(true)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21M3 6H21M3 18H21" stroke="#474747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* LOGO */}
                <Logo variant='header' />

                {/* 2. BARRA DE PESQUISA DESKTOP (Vai sumir no Mobile) */}
                <form className='search-container desktop-search' onSubmit={handleSearch}>
                    <input type="text" placeholder='Pesquisar produto...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="8" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.5 16.5L22 22" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>

                <div className='header-controls'>
                    {/* 3. LUPA MOBILE (Apenas desenhada do lado do carrinho pra imitar o layout) */}
                    <button className="mobile-search-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="8" stroke="#C92071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.5 16.5L22 22" stroke="#C92071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* 4. CADASTRO/ENTRAR DESKTOP (Vai sumir no Mobile) */}
                    <div className='actions-container desktop-actions'>
                        <Link to="/register" className='register-link'>Cadastre-se</Link>
                        <Link to="/login" className='login-button'>Entrar</Link>
                    </div>

                    {/* CARRINHO (Aparece em todos) */}
                    <div className='cart-container'>
                        <img src={miniCart} alt="Carrinho" />
                        <span className='cart-count'>2</span>
                    </div>
                </div>
            </div>

            {/* 5. BARRA DE PESQUISA MOBILE (Aparece esticada embaixo apenas no celular) */}
            <form className='search-container mobile-search' onSubmit={handleSearch}>
                <input type="text" placeholder='Pesquisar produto...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="8" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.5 16.5L22 22" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </form>

            {/* 6. MENU DE NAVEGAÇÃO DESKTOP (Vai sumir no Mobile) */}
            <nav className='nav-container desktop-nav'>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>Produtos</NavLink></li>
                    <li><NavLink to="/categories" className={({ isActive }) => isActive ? "active" : ""}>Categorias</NavLink></li>
                    <li><NavLink to="/orders" className={({ isActive }) => isActive ? "active" : ""}>Meus Pedidos</NavLink></li>
                </ul>
            </nav>

            {/* ======================================================== */}
            {/* 7. A GAVETA MOBILE! (Essa parte é o modal branco lateral) */}
            {/* ======================================================== */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">

                    <div className="mobile-menu-header">
                        <h2>Páginas</h2>
                        {/* Botão que fecha ao mudar State */}
                        <button className="close-menu" onClick={() => setIsMenuOpen(false)}>✕</button>
                    </div>

                    <nav className='mobile-nav'>
                        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                        <NavLink to="/products" onClick={() => setIsMenuOpen(false)}>Produtos</NavLink>
                        <NavLink to="/categories" onClick={() => setIsMenuOpen(false)}>Categorias</NavLink>
                        <NavLink to="/orders" onClick={() => setIsMenuOpen(false)}>Meus Pedidos</NavLink>
                    </nav>

                    <hr className="mobile-divider" />

                    <div className='mobile-actions'>
                        <Link to="/login" className='login-button' onClick={() => setIsMenuOpen(false)}>Entrar</Link>
                        <Link to="/register" className='register-link' onClick={() => setIsMenuOpen(false)}>Cadastre-se</Link>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
