import './styles/SpecialOffer.css';
import sneackerImage from '../assets/laye-sneaker.png';

const SpecialOffer = () => {
    return (
        <section className='special-offer-container'>
            <div className='special-offer-content'>
                <div className='special-offer-images'>
                    <div className='ellipse-bg'></div>
                    <img src={sneackerImage}
                        alt="Air Jordan Edição Especial" />
                </div>

                <div className='special-offer-info'>
                    <span className='offer-tag'>Oferta especial</span>
                    <h2 className='offer-title'>Air Jordan edição de colecionador</h2>
                    <p className='offer-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt possimus at ea esse impedit accusamus quas a natus id quos dolor maiores, excepturi quis sequi. Molestiae eligendi consequatur dignissimos!</p>
                    <button className='offer-button'>Ver Oferta</button>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer;