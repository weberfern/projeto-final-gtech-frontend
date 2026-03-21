import "../components/styles/ProductListingPage.css";
import Layout from '../layouts/Layout';
import FilterGroup from '../components/FilterGroup';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import img01 from '../assets/produc-image-1-removebg.png';
import { useState, useEffect } from 'react';
import { mockProducts } from "../data/mockProducts";
import { useLocation } from 'react-router-dom';

const ProductListingPage = () => {

    const location = useLocation();
    const [products, setProducts] = useState(mockProducts);
    const [sortType, setSortType] = useState("relevantes");
    const [selectedBrands, setSelectedBrands] = useState([]); /* Guarda as caixas de filtros selecionadas */
    const [selectedCategories, setSelectedCategories] = useState(
        location.state && location.state.sentCategory ? [location.state.sentCategory] : []
    );
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    /* Impede o scroll da página quando o menu de filtros está aberto */
    useEffect(() => {
        if (isFilterOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        };
    }, [isFilterOpen]);

    useEffect(() => {
        window.scrollTo(0, 0); /* Faz a página voltar para o topo quando o usuário clica em um produto */
    }, [location]);

    /* Função que adiciona ou remove marcas da lista de filtros */
    const handleBrandChange = (value, isChecked) => {
        if (isChecked) {
            setSelectedBrands([...selectedBrands, value]);
        } else {
            setSelectedBrands(selectedBrands.filter(brand => brand !== value));
        }
    };

    const handleCategoryChange = (value, isChecked) => {
        if (isChecked) {
            setSelectedCategories([...selectedCategories, value]);
        } else {
            setSelectedCategories(selectedCategories.filter(cat => cat !== value));
        }
    };

    useEffect(() => {
        let sortedProducts = [...mockProducts];

        /* Filtro de marcas */
        if (selectedBrands.length > 0) {
            sortedProducts = sortedProducts.filter(product => {
                return selectedBrands.some(brand => product.name.toLowerCase().includes(brand.toLowerCase()));
            });
        }

        /* Filtro de Categorias */
        if (selectedCategories.length > 0) {
            sortedProducts = sortedProducts.filter(product => {
                return selectedCategories.some(cat => product.category.toLowerCase().includes(cat.toLowerCase()));
            });
        }

        if (sortType === "lowest") {
            sortedProducts.sort((a, b) => {
                const priceA = a.priceDiscount || a.price;
                const priceB = b.priceDiscount || b.price;
                return priceA - priceB;
            });
        } else if (sortType === "highest") {
            sortedProducts.sort((a, b) => {
                const priceA = a.priceDiscount || a.price;
                const priceB = b.priceDiscount || b.price;
                return priceB - priceA;
            });
        } else if (sortType === "relevantes") {
            sortedProducts.sort((a, b) => a.id - b.id);
        }

        setProducts(sortedProducts);
    }, [sortType, selectedBrands, selectedCategories]);

    return (
        <Layout>
            <div className="product-listing-page">
                <div className="product-listing-wrapper">


                    {/* 1. NOVO CABEÇALHO HORIZONTAL (Título <-   Espaço vazio   -> Ordenar) */}
                    <div className="product-listing-header">
                        <h2 className="product-listing-title">
                            <strong>Resultados para "Tênis"</strong> - {products.length} produtos
                        </h2>
                        {/* 6.1 - Ordenar por (agora a caixinha vive livre no header) */}
                        <div className="header-actions">
                            <div className="ordenar-container">
                                <strong>Ordenar por:</strong>
                                <select name="sort" className="sort-select" onChange={(e) => setSortType(e.target.value)}>
                                    <option value="relevantes">mais relevantes</option>
                                    <option value="lowest">menor preço</option>
                                    <option value="highest">maior preço</option>
                                </select>
                            </div>

                            {/* BOTÃO DE FUNIL (MOBILE) */}
                            <button className="mobile-filter-button" onClick={() => setIsFilterOpen(true)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* 2. O CORPO INFERIOR (Coluna ESQ + Coluna DIR) */}
                    <div className="product-listing-content">
                        {/* COLUNA ESQUERDA: Filtros */}
                        <div className={`product-listing-filters ${isFilterOpen ? 'open' : ''}`}>
                            <div className="filter-modal-header">
                                <h2 style={{ fontSize: "16px" }}>Filtrar por</h2>
                                <button className="close-filter" onClick={() => setIsFilterOpen(false)}>✕</button>
                            </div>
                            <hr style={{ borderColor: "#CCCCCC", marginBottom: "20px" }} />

                            <FilterGroup
                                title="Marca"
                                inputType="checkbox"
                                options={[{ text: "Adidas" }, { text: "K-Swiss" }, { text: "Nike" }, { text: "Puma" }]}
                                onChange={handleBrandChange} />
                            <FilterGroup
                                title="Categoria"
                                inputType="checkbox"
                                options={[
                                    { text: "Camisetas", defaultChecked: selectedCategories.includes("Camisetas") },
                                    { text: "Calças", defaultChecked: selectedCategories.includes("Calças") },
                                    { text: "Bonés", defaultChecked: selectedCategories.includes("Bonés") },
                                    { text: "Tênis", defaultChecked: selectedCategories.includes("Tênis") },
                                    { text: "Headphones", defaultChecked: selectedCategories.includes("Headphones") }
                                ]}
                                onChange={handleCategoryChange}
                            />
                            <FilterGroup
                                title="Gênero"
                                inputType="checkbox"
                                options={[{ text: "Masculino" }, { text: "Feminino" }, { text: "Unissex" }]} />
                            <FilterGroup
                                title="Estado"
                                inputType="radio"
                                options={[{ text: "Novo", value: "new", defaultChecked: true }, { text: "Usado", value: "used" }]} />
                        </div>
                        {/* COLUNA DIREITA: Listagem de Produtos */}
                        <div className="product-listing-results">
                            {/* Como o título "Resultados para Tênis" foi pro cabeçalho lá em cima,
                    já não precisamos mais do componente Section envolvendo a vitrine! */}
                            <ProductListing products={products} />
                        </div>
                    </div>
                </div>
            </div >
        </Layout >
    );
};

export default ProductListingPage;