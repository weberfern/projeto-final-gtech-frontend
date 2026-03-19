import { useState } from "react";
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import './styles/Gallery.css';
import { Link } from "react-router-dom";

const Gallery = ({ className = "", width = "100%", height = "auto", radius = "0px", showThumbs = false, images = [] }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleThumbClick = (index) => {
        setCurrentIndex(index);
    };

    if (!images || images.length === 0) {
        return <div className="gallery-container">Sem imagens</div>;
    }

    return (
        <div className={`gallery-container ${className}`} style={{ width: width }}>
            {/* Slide Principal */}
            <div className="gallery-slide"
                style={{
                    height: height,
                    borderRadius: radius,
                    /*backgroundImage: `url('${images[currentIndex].src}')`*/
                }}>

                <div className="gallery-content">
                    <div className="gallery-text">
                        <span className="gallery-subtitle">{images[currentIndex].subtitle}</span>
                        <h2 className="gallery-title">{images[currentIndex].title}</h2>
                        <p className="gallery-description">{images[currentIndex].description}</p>
                        <Link to="/products">
                            <button className="gallery-button">{images[currentIndex].buttonText}</button>
                        </Link>
                    </div>

                    <div className="gallery-image">
                        <img src={images[currentIndex].src} alt={images[currentIndex].title} />
                    </div>
                </div>

                {/* Seta Esquerda */}
                {currentIndex > 0 && (
                    <button className="gallery-arrow left" onClick={handlePrev}>
                        <img src={arrowLeft} alt="Anterior" />
                    </button>
                )}

                {/* Seta Direita */}
                {currentIndex < images.length - 1 && (
                    <button className="gallery-arrow right" onClick={handleNext}>
                        <img src={arrowRight} alt="Próximo" />
                    </button>
                )}

                {/* Thumbnails */}
                {!showThumbs && (
                    <div className="gallery-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}

                                onClick={() => handleThumbClick(index)}>
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Miniaturas (Thumbs) */}
            {showThumbs && (
                <div className="gallery-thumbs">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`thumb-item ${index === currentIndex ? 'active' : ''}`}

                            onClick={() => handleThumbClick(index)}
                            style={{ borderRadius: radius }}>

                            <img src={image.src} alt={`Thumbnail ${index}`} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Gallery;