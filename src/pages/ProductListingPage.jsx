import "../components/styles/ProductListingPage.css";
import Layout from '../layouts/Layout';
import FilterGroup from '../components/FilterGroup';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

import img01 from '../assets/produc-image-1-removebg.png';

const ProductListingPage = () => {

    const products = Array(6).fill({
        image: img01,
        name: "K-Swiss V8 - Masculino",
        category: "Tênis",
        price: 200,
        priceDiscount: 149
    });

    return (
        <Layout>
            <div className="product-listing-page">
                <div className="product-listing-wrapper">


                    {/* 1. NOVO CABEÇALHO HORIZONTAL (Título <-   Espaço vazio   -> Ordenar) */}
                    <div className="product-listing-header">
                        <h2 className="product-listing-title">
                            <strong>Resultados para "Tênis"</strong> - 389 produtos
                        </h2>
                        {/* 6.1 - Ordenar por (agora a caixinha vive livre no header) */}
                        <div className="ordenar-container">
                            <strong>Ordenar por:</strong>
                            <select name="sort" className="sort-select">
                                <option value="relevantes">mais relevantes</option>
                                <option value="lowest">menor preço</option>
                                <option value="highest">maior preço</option>
                            </select>
                        </div>
                    </div>
                    {/* 2. O CORPO INFERIOR (Coluna ESQ + Coluna DIR) */}
                    <div className="product-listing-content">
                        {/* COLUNA ESQUERDA: Filtros */}
                        <div className="product-listing-filters">
                            {/* 6.2 - Filtrar por */}
                            <div className="filter-sort-group">
                                <h3>Filtrar por</h3>
                                <hr style={{ borderColor: "#CCCCCC", marginBottom: "15px" }} />
                            </div>
                            <FilterGroup title="Marca" inputType="checkbox" options={[{ text: "Adidas" }, { text: "K-Swiss" }, { text: "Nike" }, { text: "Puma" }]} />
                            <FilterGroup title="Categoria" inputType="checkbox" options={[{ text: "Esporte e Lazer" }, { text: "Casual" }, { text: "Utilitário" }, { text: "Corrida" }]} />
                            <FilterGroup title="Gênero" inputType="checkbox" options={[{ text: "Masculino" }, { text: "Feminino" }, { text: "Unissex" }]} />
                            <FilterGroup title="Estado" inputType="radio" options={[{ text: "Novo", value: "new", defaultChecked: true }, { text: "Usado", value: "used" }]} />
                        </div>
                        {/* COLUNA DIREITA: Listagem de Produtos */}
                        <div className="product-listing-results">
                            {/* Como o título "Resultados para Tênis" foi pro cabeçalho lá em cima,
                    já não precisamos mais do componente Section envolvendo a vitrine! */}
                            <ProductListing products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductListingPage;