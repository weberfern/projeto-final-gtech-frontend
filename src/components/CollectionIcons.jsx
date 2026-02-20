import './styles/CollectionIcons.css';
import collectionIconCamisetas from "../assets/collection-icon-camisetas.svg";
import collectionIconCalcas from "../assets/collection-icon-calcas.svg";
import collectionIconHeadphones from "../assets/collection-icon-headphones.svg";
import collectionIconTenis from "../assets/collection-icon-tenis.svg";
import collectionIconBones from "../assets/collection-icon-bones.svg";
import { Link } from 'react-router-dom';

const CollectionIcons = () => {

    const collections = [
        {
            name: "Camisetas",
            link: "/category/shirts",
            icon: (
                <img width="48" height="48" viewBox="0 0 48 48" fill="none" src={collectionIconCamisetas} alt="Camisetas" />
            )
        },
        {
            name: "Calças",
            link: "/category/pants",
            icon: (
                <img width="48" height="48" viewBox="0 0 48 48" fill="none" src={collectionIconCalcas} alt="Calças" />
            )
        },
        {
            name: "Bonés",
            link: "/category/caps",
            icon: (
                <img width="48" height="48" viewBox="0 0 48 48" fill="none" src={collectionIconBones} alt="Bonés" />
            )
        },
        {
            name: "Headphones",
            link: "/category/headphones",
            icon: (
                <img width="48" height="48" viewBox="0 0 48 48" fill="none" src={collectionIconHeadphones} alt="Headphones" />
            )
        },
        {
            name: "Tênis",
            link: "/category/shoes",
            icon: (
                <img width="48" height="48" viewBox="0 0 48 48" fill="none" src={collectionIconTenis} alt="Tênis" />
            )
        }
    ]

    return (
        <section className='collection-icons-container'>
            <h3>Coleções em destaque</h3>
            <div className='icons-grid'>
                {collections.map((item, index) => (
                    <Link key={index} to={item.link} className='icon-item'>
                        <div className='icon-circle'>
                            {item.icon}
                        </div>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default CollectionIcons;