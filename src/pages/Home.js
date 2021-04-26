import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { GlobalContext } from "../context/GlobalState";
import { Route, Switch, useParams } from "react-router-dom";

function Home(props) {
    const { products } = useContext(GlobalContext);

    const { q } = useParams();

    const renderProducts = (renderAll) => {
        if (products === null || products.length <= 0) return null;
        let productsCopy = [...products];
        if (!renderAll && q)
            productsCopy = productsCopy.filter((prod) =>
                prod.name.toLowerCase().includes(q.toLowerCase())
            );

        const productsArr = productsCopy.map((product) => (
            <Product key={product._id} {...product} />
        ));

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

    //TODO: fix PRODUCTS rerender when click add to cart (causing rows to change - because of my random rows functionality)

    function RenderAll() {
        const [productsUI, setProductsUI] = useState([]);
        useEffect(() => {
            setProductsUI(renderProducts(true));
        }, [products]);
        return <Products>{productsUI}</Products>;
    }

    function RenderSearch() {
        const [productsUI, setProductsUI] = useState([]);
        useEffect(() => {
            setProductsUI(renderProducts(false));
        }, [products]);
        return <Products>{productsUI}</Products>;
    }
}

export default Home;

const Container = styled.div`
    background-color: #eaeded;
`;
const MainContainer = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
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
