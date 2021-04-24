import React from "react";
import styled from "styled-components";

function CartProduct({ _id: id, image, name, price, rating }) {
    return (
        <Container>
            <ProductImg src={image} />
            <ProductDetailsContainer>
                <Title>{name}</Title>
                <Price>${price}</Price>
                <RatingContainer>
                    {rating > 0 &&
                        new Array(parseInt(rating)).fill("⭐").map((star) => <span>{star}</span>)}
                </RatingContainer>
            </ProductDetailsContainer>
        </Container>
    );
}

export default CartProduct;

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #ddd;
`;

const ProductImg = styled.img`
    width: 150px;
    height: 150px;
    object-fit: contain;
    align-self: center;
`;

const ProductDetailsContainer = styled.div`
    margin-left: 20px;
`;

const Title = styled.h3`
    font-size: 18px;
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
    min-height: 30px;
`;
