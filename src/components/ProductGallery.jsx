import './styles/ProductGallery.css';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductGallery = ({ images }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='product-gallery'>
            {/* 1. CARROSSEL GIGANTE DE CIMA */}
            <Swiper
                style={{ '--swiper-navigation-color': '#474747' }}
                spaceBetween={10}
                navigation={true} /* Ativa setinhas de ir e voltar */
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} /* Linka com o de baixo */
                modules={[Navigation, Thumbs]}
                className='main-image-swiper'>

                {/* Varre o array de objetos que recebermos e cria os slides */}
                {images.map((img, index) => (
                    <SwiperSlide key={`main-${index}`}>
                        <div className='main-image-container'>
                            <img src={img.src} alt={`Produto ${index + 1}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* 2. CARROSSEL DE MINIATURAS (THUMBS) */}
            <Swiper
                onSwiper={setThumbsSwiper} /* Alimenta o estado assim que ele nasce na tela */
                spaceBetween={10}
                slidesPerView={5} /* 5 Fotos em miniatura aparecendo ao mesmo tempo na tela */
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className='thumbs-swiper'>
                {images.map((img, index) => (
                    <SwiperSlide key={`thumb-${index}`}>
                        <div className='thumb-image-container'>
                            <img src={img.src} alt={`Miniatura ${index + 1}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductGallery;