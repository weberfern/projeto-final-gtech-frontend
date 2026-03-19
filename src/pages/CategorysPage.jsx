import '../components/styles/CategorysPage.css';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';
import imgCamiseta from '../assets/image-category-shirts.png';
import imgCalca from '../assets/image-category-pants.png';
import imgBone from '../assets/image-category-caps.png';
import imgTenis from '../assets/image-category-shoes.png';
import imgHeadphone from '../assets/image-category-headphones.png';

const categories = [
    { title: "Camisetas", img: imgCamiseta },
    { title: "Calças", img: imgCalca },
    { title: "Bonés", img: imgBone },
    { title: "Tênis", img: imgTenis },
    { title: "Headphones", img: imgHeadphone }
]

const CategorysPage = () => {

    return (
        <Layout>
            <div className='categorys-page'>
                <div className='categorys-header'>
                    <h2>Categorias</h2>
                    <div className='categorys-line'></div>
                </div>

                <div className='categorys-grid'>
                    {categories.map((cat, index) => (
                        <Link to="/products" state={{ sentCategory: cat.title }} key={index} className="category-card">
                            <div className="category-img-box">
                                <img src={cat.img} alt={cat.title} />
                            </div>
                            <h3>{cat.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default CategorysPage;