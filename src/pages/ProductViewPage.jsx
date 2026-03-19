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

const ProductViewPage = () => {
    // Array mockado para a seção de produtos recomendados no fim da página:
    const products = [
        { image: "", name: "K-Swiss V8 - Masculino", category: "Tênis", price: "200", priceDiscount: "100" },
        { image: "", name: "K-Swiss V8 - Masculino", category: "Tênis", price: "200", priceDiscount: "100" },
        { image: "", name: "K-Swiss V8 - Masculino", category: "Tênis", price: "200", priceDiscount: "100" },
        { image: "", name: "K-Swiss V8 - Masculino", category: "Tênis", price: "200", priceDiscount: "100" }
    ];

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
                            { src: img01 },
                            { src: img02 },
                            { src: img03 },
                            { src: img04 },
                            { src: img05 },
                            { src: img06 }
                        ]} />
                    </div>
                    {/* DIREITA: BUYBOX */}
                    <div>
                        <BuyBox
                            name="Tênis Nike Revolution 6 Next Nature Masculino"
                            reference="38416711"
                            rating="4.7"
                            stars={5}
                            price="219,00"
                            priceDiscount="219,00"
                            description="Mussum Ipsum, cacilds vidis litro abertis."
                        />
                    </div>
                </div>
                {/* 3. PRODUTOS RELACIONADOS NAS LARGURAS EXATAS */}
                <div className="related-products">
                    <Section title="Produtos Relacionados" titleAlign="left" link={{ text: "Ver todos", href: "/produtos" }}>
                        <ProductListing products={products} />
                    </Section>
                </div>
            </div>
        </Layout>
    );
};
export default ProductViewPage;
