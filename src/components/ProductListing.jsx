import ProductCard from './ProductCard';
import './styles/ProductListing.css';

const ProductListing = ({ products }) => {
    return (
        <div className='product-listing'>
            {products && products.map((product, index) => (
                <ProductCard
                    key={index}
                    image={product.image}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    priceDiscount={product.priceDiscount}
                />
            ))}
        </div>
    )
}

export default ProductListing;