import './styles/FeaturedCollections.css';

const FeaturedCollections = () => {
    return (
        <section className='featured-collections-container'>
            <h2 className='collections-title'>Coleções em destaque</h2>

            <div className='collections-grid'>
                <div className='collection-card card-1'>
                    <span className='discount-pill'>30% OFF</span>
                    <button>Comprar</button>
                </div>

                <div className='collection-card card-2'>
                    <span className='discount-pill'>30% OFF</span>
                    <button>Comprar</button>
                </div>

                <div className='collection-card card-3'>
                    <span className='discount-pill'>30% OFF</span>
                    <button>Comprar</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollections;