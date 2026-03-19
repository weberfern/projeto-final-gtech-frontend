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
                <div className="product-listing-content">

                    {/* COLUNA ESQUERDA: Filtros */}
                    <div className="product-listing-filters">

                        {/* 6.1 - Ordenar por */}
                        <div className="filter-sort-group">
                            <h3>Ordenar por</h3>
                            <select name="sort">
                                <option value="lowest">Menor preço</option>
                                <option value="highest">Maior preço</option>
                            </select>
                        </div>

                        {/* 6.2 - Filtrar por */}
                        <div className="filter-sort-group">
                            <h3>Filtrar por</h3>
                            <hr style={{ borderColor: "#CCCCCC", marginBottom: "15px" }} />
                        </div>

                        {/* Usando Componente FilterGroup */}
                        <FilterGroup
                            title="Marca"
                            inputType="checkbox"
                            options={[
                                { text: "Adidas" },
                                { text: "K-Swiss" },
                                { text: "Nike" },
                                { text: "Puma" },
                            ]}
                        />
                        <FilterGroup
                            title="Categoria"
                            inputType="checkbox"
                            options={[
                                { text: "Esporte e Lazer" },
                                { text: "Casual" },
                                { text: "Utilitário" },
                                { text: "Corrida" },
                            ]}
                        />
                        <FilterGroup
                            title="Gênero"
                            inputType="checkbox"
                            options={[
                                { text: "Masculino" },
                                { text: "Feminino" },
                                { text: "Unissex" },
                            ]}
                        />
                        <FilterGroup
                            title="Estado"
                            inputType="radio"
                            options={[
                                { text: "Novo", value: "new", defaultChecked: true },
                                { text: "Usado", value: "used" },
                            ]}
                        />
                    </div>

                    {/* COLUNA DIREITA: Listagem de Produtos */}
                    <div className="product-listing-results">
                        {/* 6.3 - Listagem de produtos usando Section e ProductListing */}
                        <Section title="Resultados para 'Tênis - 389 produtos" titleAlign="left">
                            <ProductListing products={products} />
                        </Section>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductListingPage;