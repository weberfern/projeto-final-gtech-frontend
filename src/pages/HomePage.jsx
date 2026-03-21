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
import { mockProducts } from "../data/mockProducts";
import Himg01 from "../assets/home-slide-1.png";
import Himg02 from "../assets/home-slide-2.png";
import Himg03 from "../assets/home-slide-3.png";
import Himg04 from "../assets/home-slide-4.png";

const HomePage = () => {

    {/* IMAGENS DO CARROSEL */ }
    const heroImages = [
        {
            src: Himg01,
            title: "Queima de estoque Nike 🔥",
            subtitle: "Melhores ofertas personalizadas",
            description: "Estoque da Nike pegando fogo, corre se não derrete!",
            buttonText: "Ver Ofertas",
            rotate: "-20deg"
        },

        {
            src: Himg02,
            title: "Coleção de Verão",
            subtitle: "Novidades exclusivas",
            description: "Aproveite as melhores peças para o seu verão com estilo e conforto.",
            buttonText: "Ver Ofertas"
        },

        {
            src: Himg03,
            title: "Coleção de Inverno",
            subtitle: "Novidades exclusivas",
            description: "Aproveite as melhores peças para o seu inverno com estilo e conforto.",
            buttonText: "Ver Ofertas"
        },

        {
            src: Himg04,
            title: "Coleção de Outono",
            subtitle: "Novidades exclusivas",
            description: "Aproveite as melhores peças para o seu outono com estilo e conforto.",
            buttonText: "Ver Ofertas"
        },
    ];

    {/* PRODUTOS EM DESTAQUE */ }
    const products = mockProducts.slice(0, 8);

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