import React from "react";
import styled from "styled-components";

function Product(props) {
    return (
        <Container>
            <Title>PRODUCT TITLE PRODUCT TITLE PRODUCT TITLE PRODUCT TITLE</Title>
            <Price>$1065.99</Price>
            <RatingContainer>⭐⭐⭐⭐⭐</RatingContainer>
            <ProductImg src="https://images-na.ssl-images-amazon.com/images/I/4189N8RLVYL.jpg" />
        </Container>
    );
}

export default Product;

const Container = styled.div`
    background-color: white;
    flex: 1;
    padding: 24px 18px;
    z-index: 10;
`;
const Title = styled.h3`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
`;
const Price = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 700;
    margin: 4px 0;
`;

const RatingContainer = styled.div`
    margin-bottom: 8px;
`;
const ProductImg = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
    align-self: center;
`;
