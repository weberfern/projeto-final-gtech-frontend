import Layout from '../layouts/Layout';
import BuyBox from '../components/BuyBox';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import '../components/styles/ProductViewPage.css';
import ProductGallery from '../components/ProductGallery';
import img01 from "../assets/produc-image-1-removebg.png";
import img02 from "../assets/produc-image-2-removebg.png";
import img03 from "../assets/produc-image-3-removebg.png";
import img04 from "../assets/produc-image-4-removebg.png";
import img05 from "../assets/produc-image-5-removebg.png";
import img06 from "../assets/produc-image-6-removebg.png";
import { mockProducts } from '../data/mockProducts';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductViewPage = () => {

    const { id } = useParams();
    const product = mockProducts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0); /* Faz a página voltar para o topo quando o usuário clica em um produto */
    }, [id]);

    // Se a pessoa digitar /product/999 (que não existe)
    if (!product) {
        return (
            <Layout>
                <div style={{ padding: '100px', textAlign: 'center', fontSize: '24px' }}>
                    <h1>Produto não encontrado! 😢</h1>
                </div>
            </Layout>
        );
    }

    // Array mockado para a seção de produtos recomendados no fim da página:
    const products = mockProducts.slice(0, 4);

    return (
        <Layout>
            <div className="product-view-page" style={{ padding: '0 20px', backgroundColor: '#F9F8FE' }}>

                {/* Caminho no topo (breadcrumb) */}
                <div className='product-breadcrumb'>
                    <strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
                </div>

                {/* 2. MIOLO PRINCIPAL */}
                <div className="product-view-content">
                    {/* ESQUERDA: GALERIA FAKE */}
                    <div className="product-gallery-wrapper" style={{ flex: 1, minWidth: 0 }}>
                        <ProductGallery images={[
                            { src: product.image },
                            { src: product.image },
                            { src: product.image },
                            { src: product.image },
                            { src: product.image },
                            { src: product.image }
                        ]} />
                    </div>
                    {/* DIREITA: BUYBOX */}
                    <div>
                        <BuyBox
                            name={product.name}
                            reference={`REF: ${product.id}D947`}
                            rating="4.7"
                            stars={5}
                            price={product.price}
                            priceDiscount={product.priceDiscount}
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
                        />
                    </div>
                </div>
                {/* 3. PRODUTOS RELACIONADOS NAS LARGURAS EXATAS */}
                <div className="related-products">
                    <Section title="Produtos Relacionados" titleAlign="left" link={{ text: "Ver todos", href: "/products" }}>
                        <ProductListing products={products} />
                    </Section>
                </div>
            </div>
        </Layout>
    );
};
export default ProductViewPage;
