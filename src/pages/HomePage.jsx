import React from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import FeateruedCollections from "../components/FeaturedCollections";
import SpecialOffer from "../components/SpecialOffer";
import CollectionIcons from "../components/CollectionIcons";
import img01 from "../assets/produc-image-1-removebg.png";
import img02 from "../assets/produc-image-2-removebg.png";
import img03 from "../assets/produc-image-3-removebg.png";
import img04 from "../assets/produc-image-4-removebg.png";
import img05 from "../assets/produc-image-5-removebg.png";
import img06 from "../assets/produc-image-6-removebg.png";

const HomePage = () => {

    {/* IMAGENS DO CARROSEL */ }
    const heroImages = [
        {
            src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-8.jpeg",
            title: "Queima de estoque Nike 🔥",
            subtitle: "Melhores ofertas personalizadas",
            description: "Estoque da Nike pegando fogo, corre se não derrete!",
            buttonText: "Ver Ofertas"
        },

        {
            src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-2.jpeg",
            title: "Coleção de Verão",
            subtitle: "Novidades exclusivas",
            description: "Aproveite as melhores peças para o seu verão com estilo e conforto.",
            buttonText: "Ver Ofertas"
        },

        {
            src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-3.jpeg",
            title: "Coleção de Inverno",
            subtitle: "Novidades exclusivas",
            description: "Aproveite as melhores peças para o seu inverno com estilo e conforto.",
            buttonText: "Ver Ofertas"
        },

        {
            src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-4.jpeg",
            title: "Coleção de Outono",
            subtitle: "Novidades exclusivas",
            description: "Aproveite as melhores peças para o seu outono com estilo e conforto.",
            buttonText: "Ver Ofertas"
        },
    ];

    {/* PRODUTOS EM DESTAQUE */ }
    const products = [
        {
            image: img01,
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 149
        },
        {
            image: img02,
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 149
        },
        // Adicione mais produtos duplicados para testar o grid
        {
            image: img03,
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 149
        },
        {
            image: img04,
            name: "K-Y V8 - Feminino",
            category: "Tênis",
            price: 249,
            priceDiscount: 199
        },
        {
            image: img05,
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 149
        },
        {
            image: img06,
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 149
        },
        {
            image: img01,
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 149
        },
        {
            image: img02,
            name: "K-Swiss V8 - Masculino",
            category: "Tênis",
            price: 200,
            priceDiscount: 149
        },
    ];

    return (
        <div className="home-container">
            <Gallery
                images={heroImages}
                width="100%"
                height="681px"
                radius="0"
                showThumbs={false}
            />

            <FeateruedCollections />

            <CollectionIcons />

            <Section
                title="Produtos em alta"
                titleAlign="left"
                link={{ text: "Ver todos ", href: "/products" }}
            >
                <ProductListing products={products.slice(0, 8)} /> {/* LIMITANDO APENAS 8 PRODUTOS EM DESTAQUE NA HOMEPAGE */}
            </Section>
            <SpecialOffer />
        </div>
    );
};

export default HomePage;