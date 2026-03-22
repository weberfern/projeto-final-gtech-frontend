import './styles/FooterInformation.css';
import { Link } from 'react-router-dom';

const FooterInformation = ({ title, informations }) => {
    return (
        <div className='footer-information'>
            <h3>{title}</h3>
            <ul>
                {informations.map((info, index) => (
                    <li key={index}>
                        <Link to={info.link} state={info.state}>{info.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterInformation;