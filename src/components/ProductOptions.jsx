import { useState } from 'react';
import './styles/ProductOptions.css';

const ProductOptions = ({ options, radius, shape, type, title }) => {
    const [selectedOption, setSelectedOption] = useState(0);

    return (
        <div className="product-options-container">
            {title && <span className="options-title">{title}</span>}

            <div className="options-list">
                {options.map((option, index) => {
                    const isActive = selectedOption === index ? 'active' : '';
                    const shapeClass = shape === 'circle' ? 'shape-circle' : 'shape-square';
                    const typeClass = type === 'color' ? 'type-color' : 'type-text';

                    return (
                        <div
                            key={index}
                            className={`option-item ${shapeClass} ${typeClass} ${isActive}`}
                            onClick={() => setSelectedOption(index)}
                            // Única forma do React enviar a Cor dinâmica ("#000") pro CSS
                            style={{
                                '--dynamic-radius': radius || '4px',
                                '--dynamic-bg': type === 'color' ? option : 'transparent'
                            }}
                        >
                            {/* O número/texto sendo renderizado e a classe pegando o estilo */}
                            {type === 'text' && <span className="option-text">{option}</span>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductOptions;
