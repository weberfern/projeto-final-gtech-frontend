import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';

const Logo = ({ variant = 'header' }) => {

    const imageSrc = variant === 'footer' ? logoFooter : logoHeader;

    return (
        <>
            <div className='logo'>
                <img src={imageSrc} alt="Drip Store Logo" />
            </div>
        </>
    );
};

export default Logo;