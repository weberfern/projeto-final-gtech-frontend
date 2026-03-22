import './styles/BuyBox.css';
import ProductOptions from './ProductOptions';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description }) => {

    const formatPrice = (value) => {
        return Number(value).toFixed(2).replace('.', ',');
    };

    const renderPrice = (value) => {
        const [reais, centavos] = formatPrice(value).split(',');
        return (
            <>
                {reais}<span className="price-cents">,{centavos}</span>
            </>
        );
    };

    return (
        <div className="buy-box">

            {/* Título e Referência */}
            <h2 className='buy-box-name'>{name}</h2>
            <p className='buy-box-reference'>Casual | Nike | REF:{reference}</p>

            {/* Avaliações (Estrelas mockadas para o design e a nota) */}
            <div className='buy-box-reviews'>
                <span className='buy-box-stars'>
                    ⭐⭐⭐⭐⭐
                    <span className='buy-box-rating'>
                        {rating} ⭐
                    </span>
                    <span className='buy-box-rating-label'>(90 avaliações)</span>
                </span>
            </div>

            {/* Bloco de Preço */}
            <div className="buy-box-price">
                <span className="price-currency">R$</span>
                {priceDiscount ? (
                    <>
                        <span className="price-discount">{renderPrice(priceDiscount)}</span>
                        <span className="price-original">R$ {formatPrice(price)}</span>
                    </>
                ) : (
                    <span className="price-discount">{renderPrice(price)}</span>
                )}

            </div>

            {/* Descrição */}
            <div className="buy-box-description">
                <h3>Descrição do produto</h3>
                <p>{description}</p>
            </div>

            {/* OPÇÕES: Tamanho e Cor (Aqui chamamos o componente que você acabou de criar!) */}
            <div className="buy-box-options">
                <ProductOptions
                    title="Tamanho"
                    shape="square"
                    radius="4px"
                    type="text"
                    options={['39', '40', '41', '42', '43']}
                />

                <ProductOptions
                    title="Cor"
                    shape="circle"
                    type="color"
                    options={['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']}
                />
            </div>

            {/* Botão Final */}
            <button className="buy-box-btn">COMPRAR</button>
        </div>
    );
};

export default BuyBox;