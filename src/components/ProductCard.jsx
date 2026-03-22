import './styles/ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, image, name, category, price, priceDiscount }) => {

    const formartPrice = (value) => {
        return Number(value).toFixed(2).replace('.', ',');
    };

    /* Calculo da % de desconto para exibir X % OFF no card do produto */
    const discountPercentage = priceDiscount ? Math.ceil(((price - priceDiscount) / price) * 100) : 0;

    return (
        <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='product-card'>
                <div className='card-image'>
                    {priceDiscount && <span className='discount-badge'>{discountPercentage}% OFF</span>}
                    <img src={image} alt={name} />
                </div>

                <div className='card-info'>
                    <span className='card-category'>{category}</span>
                    <h3 className='card-name'>{name}</h3>
                    <div className='card-prices'>
                        {priceDiscount ? (
                            <>
                                <span className='price-original'>R$ {formartPrice(price)}</span>
                                <span className='price-discount'>R$ {formartPrice(priceDiscount)}</span>
                            </>
                        ) : (
                            <span className='price-discount'>R$ {formartPrice(price)}</span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;