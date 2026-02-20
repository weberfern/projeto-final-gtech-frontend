import './styles/Section.css';
import arrowRight from '../assets/arrow-right.svg';

const Section = ({ title, titleAlign = "left", link = null, children }) => {
    return (
        <section className='section-container'>
            <div className={`section-header ${titleAlign}`}>
                <h2 className='section-title'>{title}</h2>
                {link && (
                    <a href={link.href} className='section-link'>
                        {link.text}
                        &rarr;
                    </a>
                )}
            </div>

            <div className='section-content'>
                {children}
            </div>
        </section>
    );
};

export default Section;