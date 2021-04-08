import React from "react";
import styled from "styled-components";

function Product(props) {
    return (
        <Container>
            <Title>PRODUCT TITLE PRODUCT TITLE PRODUCT TITLE PRODUCT TITLE</Title>
            <Price>
                1065.99<PriceCurrency>$</PriceCurrency>
            </Price>
            <RatingContainer>⭐⭐⭐⭐⭐</RatingContainer>
            <ProductImg src="https://images-na.ssl-images-amazon.com/images/I/4189N8RLVYL.jpg" />
        </Container>
    );
}

export default Product;

const Container = styled.div`
    background-color: white;
    flex: 1;
`;
const Title = styled.h3``;
const Price = styled.span``;
const PriceCurrency = styled.span``;
const RatingContainer = styled.div``;
const ProductImg = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
    align-self: center;
`;
