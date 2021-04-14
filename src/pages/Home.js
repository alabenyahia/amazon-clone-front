import React, { useContext } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { GlobalContext } from "../context/GlobalState";

function Home(props) {
    const { products } = useContext(GlobalContext);

    const renderProducts = () => {
        if (products === null || products.length <= 0) return null;
        return products.map((product) => <Product key={product._id} {...product} />);
    };
    return (
        <Container>
            <Navbar />
            <MainContainer>
                <Banner />
                <Products>
                    {renderProducts()}
                    <ProductsRow>
                        <Product />
                        <Product />
                        <Product />
                    </ProductsRow>
                    <ProductsRow>
                        <Product />
                        <Product />
                    </ProductsRow>
                    <ProductsRow>
                        <Product />
                        <Product />
                        <Product />
                    </ProductsRow>
                </Products>
            </MainContainer>
            <Footer />
        </Container>
    );
}

export default Home;

const Container = styled.div``;
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
