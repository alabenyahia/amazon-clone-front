import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { GlobalContext } from "../context/GlobalState";
import { Route, Switch, useParams } from "react-router-dom";

function Home(props) {
    return (
        <Container>
            <Navbar />
            <MainContainer>
                <Banner />
                <Switch>
                    <Route path="/search/:q">
                        <RenderSearch />
                    </Route>
                    <Route path="/">
                        <RenderAll />
                    </Route>
                </Switch>
            </MainContainer>
            <Footer />
        </Container>
    );
}

export default Home;

const renderProducts = (products, q, renderAll) => {
    if (products === null || products.length <= 0) return null;
    let productsCopy = [...products];
    if (!renderAll && q)
        productsCopy = productsCopy.filter((prod) =>
            prod.name.toLowerCase().includes(q.toLowerCase())
        );

    const productsArr = productsCopy.map((product) => <Product key={product._id} {...product} />);

    let nextRowNumberOfProducts = Math.floor(Math.random() * 2) + 2;
    const productsRowsArr = [];

    while (productsArr.length > 0) {
        const nextRow = [];
        const limit =
            productsArr.length >= nextRowNumberOfProducts
                ? nextRowNumberOfProducts
                : productsArr.length;
        for (let i = 0; i < limit; i++) {
            nextRow.push(productsArr.shift());
        }
        nextRowNumberOfProducts = Math.floor(Math.random() * 2) + 2;
        productsRowsArr.push(<ProductsRow>{nextRow}</ProductsRow>);
    }

    return productsRowsArr;
};

function RenderAll() {
    const { products } = useContext(GlobalContext);
    const { q } = useParams();
    const [productsUI, setProductsUI] = useState([]);

    useEffect(() => {
        console.log("effect");
        setProductsUI(renderProducts(products, q, true));
    }, [products]);
    return <Products>{productsUI}</Products>;
}

function RenderSearch() {
    const { products } = useContext(GlobalContext);
    const { q } = useParams();
    const [productsUI, setProductsUI] = useState([]);

    useEffect(() => {
        console.log("effect");
        setProductsUI(renderProducts(products, q, false));
    }, [products]);
    return (
        <Products>
            {productsUI.length > 0 ? (
                productsUI
            ) : (
                <EmptyProducts>No products available...</EmptyProducts>
            )}
        </Products>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #eaeded;
    min-height: 100vh;
`;
const MainContainer = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    flex: 1;
`;
const Banner = styled.div`
    background: url("https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg")
        no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 600px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Products = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    margin-top: -300px;
`;

const ProductsRow = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`;

const EmptyProducts = styled.div`
    z-index: 100;
    background: white;
    color: #0f1111;
    padding: 16px 24px;
    text-align: center;
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
`;
