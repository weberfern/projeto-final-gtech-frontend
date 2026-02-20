import './styles/ProductCard.css';

const ProductCard = ({ image, name, category, price, priceDiscount }) => {
    return (
        <div className='product-card'>
            <div className='card-image'>
                {priceDiscount && <span className='discount-badge'>30% OFF</span>}
                <img src={image} alt={name} />
            </div>

            <div className='card-info'>
                <span className='card-category'>{category}</span>
                <h3 className='card-name'>{name}</h3>
                <div className='card-prices'>
                    <span className='price-original'>R$ {price}</span>
                    {priceDiscount && (
                        <span className='price-discount'>R$ {priceDiscount}</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;