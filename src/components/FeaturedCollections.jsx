import './styles/FeaturedCollections.css';
import { Link } from 'react-router-dom';

const FeaturedCollections = () => {
    return (
        <section className='featured-collections-container'>
            <h2 className='collections-title'>Coleções em destaque</h2>

            <div className='collections-grid'>
                <div className='collection-card card-1'>
                    <span className='discount-pill'>30% OFF</span>
                    <Link to="/products" state={{ sentCategory: "Camisetas" }}>
                        <button>Comprar</button>
                    </Link>
                </div>

                <div className='collection-card card-2'>
                    <span className='discount-pill'>30% OFF</span>
                    <Link to="/products" state={{ sentCategory: "Tênis" }}>
                        <button>Comprar</button>
                    </Link>
                </div>

                <div className='collection-card card-3'>
                    <span className='discount-pill'>30% OFF</span>
                    <Link to="/products" state={{ sentCategory: "Headphones" }}>
                        <button>Comprar</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollections;