import React from "react";
import styled from "styled-components";

function Product({ image, name, price, rating }) {
    return (
        <Container>
            <Title>{name}</Title>
            <Price>${price}</Price>
            <RatingContainer>
                {rating > 0 &&
                    new Array(parseInt(rating)).fill("⭐").map((star) => <span>{star}</span>)}
            </RatingContainer>
            <ProductImg src={image} />
        </Container>
    );
}

export default Product;

const Container = styled.div`
    background-color: white;
    flex: 1;
    padding: 24px 18px;
    z-index: 10;
    min-width: 240px;
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

    @media screen and (max-width: 880px) {
        width: 160px;
        height: 160px;
    }
    @media screen and (max-width: 720px) {
        width: 130px;
        height: 130px;
    }
`;
